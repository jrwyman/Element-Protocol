import sha256 from 'sha256';

function Block(blockHeight, difficulty, timestamp, parentHash, transactions) {
  const block = {
    blockHeight: blockHeight,
    difficulty: difficulty,
    timestamp: timestamp,
    parentHash: parentHash,
    hash: sha256(blockHeight + difficulty + timestamp + parentHash + transactions),
    transactions: transactions,
    hasValidTransactions,
  }

  function hasValidTransactions(block) {
    for (const transaction of block.transactions) {
      if (!transaction.isValidTransaction()) {
        return false;
      }
    }

    return true;
  }

  return block;
}

export default Block;
