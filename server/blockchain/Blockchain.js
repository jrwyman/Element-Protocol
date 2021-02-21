const Block = require('./Block.js');
const sha256 = require('sha256');
const hexToBinary = require('hex-to-binary');

const Transaction = require('./Transaction.js');
const hasValidTransactions = require('../util/blockchain-util.js');

const GENESIS_BLOCK = Block(0, 0, Date.now(), null, []);

function Blockchain() {
  const blockchain = {
    difficulty: 10,
    miningRate: 10000,
    blockReward: 20,
    blocks: [GENESIS_BLOCK],
    pendingTransactions: [],
    mineBlock,
    checkChainValidity,
    getBalanceOfAddress,
    createNewTransaction,
    replaceChain,
  }

  function obtainLatestBlock() {
    const latestBlock = blockchain.blocks[blockchain.blocks.length - 1]
    return latestBlock;
  }

  function replaceChain(incomingChain) {
    if (incomingChain.blocks.length <= blockchain.blocks.length) {
      console.log('incoming chain is not longer than current chain');
      return;
    } else if (!checkChainValidity(incomingChain)) {
      console.log('incoming chain was not valid')
      return;
    }
    blockchain.blocks = incomingChain.blocks;
    blockchain.difficulty = incomingChain.difficulty;
  }

  function checkChainValidity(blockchain) {
    function checkHash({ blockHeight, difficulty, timestamp, parentHash, transactions}) {
      return sha256(blockHeight + difficulty + timestamp + parentHash + transactions);
    }

    for(let i = 1; i < blockchain.blocks.length; i++){
      const currentBlock = blockchain.blocks[i];
      const precedingBlock = blockchain.blocks[i-1];
      
      if (currentBlock.hash !== checkHash(currentBlock)) {
        return false;
      } else if (currentBlock.parentHash !== checkHash(precedingBlock)) {
        return false;
      } else if (!hasValidTransactions(currentBlock)) {
        return false;
      }
    }
   
    return true;
  }

  async function mineBlock(minerAddress) {    // ADD NONCE TO HASHING FUNCTION SO IT CAN BE VERIFIED BY checkChainValidity() FUNCTION
    const latestBlock = await obtainLatestBlock();
    let [hash, nonce] = [hexToBinary(latestBlock.hash), 0];
    while (hash.substring(0, blockchain.difficulty) !== Array(blockchain.difficulty + 1).join("0")) {
		  nonce++;
      hash = hexToBinary(sha256(hash, nonce.toString()));
    }
    const newBlock = Block(blockchain.blocks.length, blockchain.difficulty, Date.now(), latestBlock.hash, blockchain.pendingTransactions);
    newBlock.minedBy = minerAddress;
    blockchain.blocks.push(newBlock);
    blockchain.pendingTransactions = [Transaction(null, minerAddress, blockchain.blockReward)];
    blockchain.difficulty = adjustDifficulty(newBlock, latestBlock);
    console.log(`BLOCK ${newBlock.blockHeight} MINED WITH A TARGET OF: ${nonce} AND A RESULTING HASH OF: ${newBlock.hash}`);
    return newBlock;
  }

  function adjustDifficulty(newBlock, lastBlock) {
    if (newBlock.timestamp - lastBlock.timestamp < blockchain.miningRate - 1000) {
      return blockchain.difficulty + 1;
    } else if (blockchain.difficulty > 15 && newBlock.timestamp - lastBlock.timestamp > blockchain.miningRate + 1000) {
      return blockchain.difficulty - 1;
    } else {
      return blockchain.difficulty;
    }
  }

  function createNewTransaction({ sender, receiver, amount }, privateKey) {
    const balance = getBalanceOfAddress(sender);
    if (balance >= amount) {
      const transaction = Transaction(sender, receiver, amount);
      transaction.signTransaction(privateKey);
      blockchain.pendingTransactions.push(transaction);
      return transaction;
    } else {
      return 'Transaction Failed: Insufficient Funds in Wallet';
    }
  }

  function getBalanceOfAddress(address) {
    let balance = 0;

    for (const block of blockchain.blocks) {
        for (const transaction of block.transactions) {
          if (transaction.sender === address) {
            balance -= transaction.amount;
          } else if (transaction.receiver === address) {
            balance += transaction.amount;
          }
        }
    }

    for (const transaction of blockchain.pendingTransactions) {
      if (transaction.sender === address) {
        balance -= transaction.amount;
      }
    }

    return balance;
  }

  return blockchain;
}

module.exports = Blockchain;
