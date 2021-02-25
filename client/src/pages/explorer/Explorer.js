import { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

import './Explorer.css';

function Explorer() {
  const [blocks, setBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [blockReward, setBlockReward] = useState(0);

  useEffect(() => {
    fetchBlockchainData();
    fetchTransactionData();
  }, [blocks.length, transactions.length]);
  
  
  async function fetchBlockchainData() {
    const blockchain = await axios.get('/explore');
    setBlocks(blockchain.data.blocks);
    setBlockReward(blockchain.data.blockReward);
  }

  async function fetchTransactionData() {
    const blockchainTransactions = await axios.get('/transactions');
    setTransactions(blockchainTransactions.data);
  }
  
  return (
    <div className="container explorer">
      <div className="row explorer-info">
        <div className="col-5 px-0 explorer-info-latest-blocks">
          <div className="explorer-info-latest-blocks-header"><strong>Latest Blocks</strong></div>
          <div className="explorer-info-latest-blocks-blocks">
            {
              blocks.slice(blocks.length >= 6 ? blocks.length - 6 : 0, blocks.length).reverse().map((block) => {
                return (
                  <div className="row block-data">
                    <div className="col-1 block-symbol" align="center">B</div>
                    <div className="col-2 block-stamp" align="center">
                      <div>{block.blockHeight}</div>
                      <div className="block-stamp-timestamp">{dayjs(block.timestamp).format('LT')}</div>
                    </div>
                    <div className="col-6 block-miner" align="center">
                      Miner <a className="block-miner-minedBy" href="">{block.blockHeight === 0 ? 'The Source' : `${block.minedBy.substring(0, 5)}...`}</a>
                      <div><a className="block-miner-transaction-count" href="">{block.transactions.length} txns</a></div>
                    </div>
                    <div className="col-3 block-reward" align="center">
                      {`${blockReward} LMN`}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="col-5 px-0 explorer-info-latest-transactions">
          <div className="explorer-info-latest-transactions-header"><strong>Latest Transactions</strong></div>
          <div className="explorer-info-latest-transactions-transactions">
            {
              transactions.slice(transactions.length >= 6 ? transactions.length - 6 : 0, transactions.length).reverse().map((transaction) => {
                return (
                  <div className="row transaction-data">
                    <div className="col-1 transaction-symbol" align="center">T</div>
                    <div className="col-4 transaction-sender" align="center">
                      <a className="transaction-sender-sentBy" href="">{`${transaction.signature === undefined ? 'Blockchain Reward' : `${transaction.signature.substring(0, 5)}...`}`}</a>
                    </div>
                    <div className="col-4 transaction-parties" align="center">
                      <div>From <a href="">{transaction.sender === null ? 'The Source' : `${transaction.sender.substring(0, 5)}...`}</a></div>
                      <div>To <a href="">{`${transaction.receiver.substring(0, 5)}...`}</a></div>
                    </div>
                    <div className="col-3 transaction-reward" align="center">
                      {`${transaction.amount} LMN`}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* <div className="row blocks-header">
        <p className="blocks-header-text" align="center">Latest Blocks</p>
      </div>
      <div className="row blocks">
        {
          blocks.slice(blocks.length - 6, blocks.length).reverse().map((block) => {
            return (
              <div className={blocks.indexOf(block) === blocks.length - 6 ? "col block-no-margin" : "col block"}>
                <div>Block Height: {block.blockHeight}</div>
                <div>Difficulty: {block.difficulty}</div>
                <div>Miner: <a className="minedBy" href="">{block.blockHeight === 0 ? '0' : `${block.minedBy.substring(0, 6)}...`}</a></div>
              </div>
            )
          })
        }
      </div> */}
    </div>
  );
}

export default Explorer;
