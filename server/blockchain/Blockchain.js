import Block from './Block.js';
import sha256 from 'sha256';
import hexToBinary from 'hex-to-binary';

const GENESIS_BLOCK = Block(0, 0, Date.now(), null, []);

function Blockchain() {
  const blockchain = {
    difficulty: 15,
    miningRate: 5000,
    blocks: [GENESIS_BLOCK],
    pendingTransactions: [],
    mineBlock,
  }

  function obtainLatestBlock() {
    const latestBlock = blockchain.blocks[blockchain.blocks.length - 1]
    return latestBlock;
  }

  function mineBlock() {
    const latestBlock = obtainLatestBlock();
    let [hash, nonce] = [hexToBinary(latestBlock.hash), 0];
    while (hash.substring(0, blockchain.difficulty) !== Array(blockchain.difficulty + 1).join("0")) {
		  nonce++;
      hash = hexToBinary(sha256(hash, nonce.toString()));
    }
    const newBlock = Block(blockchain.blocks.length, blockchain.difficulty, Date.now(), latestBlock.hash, blockchain.pendingTransactions);
    blockchain.blocks.push(newBlock);
    blockchain.pendingTransactions = ['PENDING REWARD']
    console.log(blockchain.difficulty)
    blockchain.difficulty = adjustDifficulty(newBlock, latestBlock);
    console.log(`BLOCK ${newBlock.blockHeight} MINED WITH A TARGET OF: ${nonce} AND A RESULTING HASH OF: ${newBlock.hash}`);
  }

  function adjustDifficulty(newBlock, lastBlock) {
    if (newBlock.timestamp - lastBlock.timestamp < blockchain.miningRate - 500) {
      return blockchain.difficulty + 1
    } else if (blockchain.difficulty > 1 && newBlock.timestamp - lastBlock.timestamp > blockchain.miningRate + 500) {
      return blockchain.difficulty - 1
    }
  }

  return blockchain;
}

export default Blockchain;
