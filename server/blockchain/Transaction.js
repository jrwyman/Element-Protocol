import pkg from 'elliptic';
import sha256 from 'sha256';
const { ec: EC } = pkg;
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
		  throw new Error('You cannot sign transactions for other wallets!');
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

export default Transaction;
