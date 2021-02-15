export const hasValidTransactions = (block) => {
    for (const transaction of block.transactions) {
      if (!isValidTransaction(transaction)) {
        return false;
      }
    }

    return true;
}

export const isValidTransaction = (transaction) => {
    if(transaction.sender === null) return true;

	  if(!transaction.signature || transaction.signature.length === 0){
		  throw new Error('No Signature in This Transaction');
    }

    const publicKey = ec.keyFromPublic(transaction.sender, 'hex');
	  return publicKey.verify(createTransactionHash(), transaction.signature);
}