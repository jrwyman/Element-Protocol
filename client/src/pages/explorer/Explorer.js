import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import dayjs from 'dayjs';
import numeral from 'numeral';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

import './Explorer.css';

function Explorer() {
  const isMobile = useMediaQuery({ query: '(max-width: 765px)' });

  const [blocks, setBlocks] = useState([]);
  const [difficulty, setDifficulty] = useState(null);
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
    setDifficulty(blockchain.data.difficulty);
  }

  async function fetchTransactionData() {
    const blockchainTransactions = await axios.get('/transactions');
    setTransactions(blockchainTransactions.data);
  }
  
  return (
    <div className="container explorer">
      <div className="row explorer-header">
        <div className="col explorer-header-data">
          <div className="row">
            <div className="col explorer-header-data-block">
              <div className="row">
                  <div className="col explorer-header-data-block-border">
                    <div className="row">
                      <div className="col-2" align="center">
                        <div className="explorer-header-data-price-symbol">🚀</div>
                      </div>
                      <div className="col explorer-header-data-info">
                        <div>LMN PRICE</div>
                        <div>${numeral(Math.random() + 3).format('0.000')}</div>
                      </div>
                    </div>  
                  </div>
              </div>
              <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="col-2" align="center">
                        <div className="explorer-header-data-marketcap-symbol">🌐</div>
                      </div>
                      <div className="col explorer-header-data-info">
                        <div>MARKET CAP</div>
                        <div>${numeral(Math.random() + 1245927).format('0,0.000')}</div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className={isMobile ? "col explorer-header-data-block no-border" : "col explorer-header-data-block"}>
              <div className="row">
                <div className="col explorer-header-data-block-border">
                  <div className="row">
                      <div className="col-2" align="center">
                        <div className="explorer-header-data-difficulty-symbol">⛏️</div>
                      </div>
                      <div className="col explorer-header-data-info">
                        <div>DIFFICULTY</div>
                        <div>{difficulty}</div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-2" align="center">
                      <div className="explorer-header-data-transactions-symbol">💲</div>
                    </div>
                    <div className="col explorer-header-data-info">
                      <div>TRANSACTIONS</div>
                      <div>{transactions.length}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col explorer-header-data-info explorer-header-data-block no-border" align="center">
              <div>TRANSACTIONS PER BLOCK</div>
              <LineChart
                width={250}
                height={70}
                data={blocks}
                margin={{
                  top: 5, right: 10, left: 10, bottom: 5,
                }}
              >
                <XAxis dataKey="blockHeight" axisLine={false} interval={1} />
                <Tooltip labelFormatter={(value) => `Block: ${value}`}/>
                <Line type="monotone" dataKey="transactionCount" dot={false} />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
      <div className="row explorer-info">
        <div className="col-lg-6 col-md-12 px-0 explorer-info-latest-blocks-col">
          <div className="explorer-info-latest-blocks">
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
        </div>
        <div className="col-lg-6 col-md-12 px-0 explorer-info-latest-transactions-col">
          <div className="explorer-info-latest-transactions">
            <div className="explorer-info-latest-transactions-header"><strong>Latest Transactions</strong></div>
            <div className="explorer-info-latest-transactions-transactions">
              {
                transactions.slice(transactions.length >= 6 ? transactions.length - 6 : 0, transactions.length).reverse().map((transaction) => {
                  return (
                    <div className="row transaction-data">
                      <div className="col-1 transaction-symbol" align="center">T</div>
                      <div className="col-4 transaction-sender" align="center">
                        <a className="transaction-sender-sentBy" href="">{`${transaction.signature === undefined ? 'Blockchain Reward' : `${transaction.signature.substring(0, 5)}...`}`}</a>
                        <div className="transaction-sender-timestamp">{dayjs(transaction.timestamp).format('LT')}</div>
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
      </div>
    </div>
  );
}

export default Explorer;
