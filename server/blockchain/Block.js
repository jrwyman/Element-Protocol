const sha256 = require('sha256');

// import { hasValidTransactions } from '../util/blockchain-util.js';

function Block(blockHeight, difficulty, timestamp, parentHash, transactions) {
  const block = {
    blockHeight: blockHeight,
    difficulty: difficulty,
    timestamp: timestamp,
    parentHash: parentHash,
    hash: sha256(blockHeight + difficulty + timestamp + parentHash + transactions),
    transactions: transactions,
  }

  return block;
}

module.exports = Block;
