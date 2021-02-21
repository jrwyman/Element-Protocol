const sha256 = require('sha256');
const EC = require('elliptic').ec;
const ec = new EC('ed25519');

function Transaction(sender, receiver, amount) {
  const transaction = {
    sender: sender,
    receiver: receiver,
    amount: amount,
    signTransaction,
    isValidTransaction,
  };

  function createTransactionHash() {
    return sha256(transaction.sender + transaction.receiver + transaction.amount);
  }

  function signTransaction(privateKey) {
    const signingKey = ec.keyFromPrivate(privateKey);
    if(signingKey.getPublic('hex') !== transaction.sender){
		  throw new Error('Invalid private key provided for this public key');
	  }

	  const hashTx = createTransactionHash();
	  const sig = signingKey.sign(hashTx, 'base64');
	  transaction.signature = sig.toDER('hex');
  }

  function isValidTransaction() {
    if(transaction.sender === null) return true;

	  if(!transaction.signature || transaction.signature.length === 0){
		  throw new Error('No Signature in This Transaction');
    }

    const publicKey = ec.keyFromPublic(transaction.sender, 'hex');
	  return publicKey.verify(createTransactionHash(), transaction.signature);
  }

  return transaction;
}

module.exports = Transaction;
