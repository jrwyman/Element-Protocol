import { useState } from 'react';
import axios from 'axios';

import './Wallet.css';

function Wallet() {
  const [keys, setKeys] = useState({ publicKey: null, privateKey: null })

  const [walletAddress, setWalletAddress] = useState('');

  const [walletBalance, setWalletBalance] = useState(0);

  const [sendingAddress, setSendingAddress] = useState('');

  const [receivingAddress, setReceivingAddress] = useState('');

  const [sendingAmount, setSendingAmount] = useState(0);

  const [privateKey, setPrivateKey] = useState('');

  const [errors, setErrors] = useState('');
  
  async function keygen() {
    const Keygen = await axios.get('/keygen');
    setKeys({
      publicKey: Keygen.data.publicKey,
      privateKey: Keygen.data.privateKey,
    })
  }

  async function sendTransaction() {
    const transaction = await axios({
      method: 'post',
      url: '/transact',
      params: {
        sender: sendingAddress,
        receiver: receivingAddress,
        amount: sendingAmount,
        privateKey: privateKey,
      }
    })
    if (typeof transaction.data === 'string') {
      setErrors(transaction.data);
    } else {
      alert('Transaction Sent!')
    }
  }

  async function getBalance() {
    const balance = await axios.get(`/balance/${walletAddress}`)
    setWalletBalance(balance.data);
  }
  
  return (
    <div className="container wallet">
      <div className="row">
        <div className="col wallet-info">
          <div className="row" align="center">
            <div className="col">
              <input
                className="wallet-info-balance-input w-100 h-100"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                type="text"
                placeholder="Enter your unique public key here"
              />
            </div>
          </div>
          <div className="row wallet-info-buttons">
            <div className="col wallet-info-buttons-balance" align="center">
              <button onClick={getBalance} className="btn btn-dark">CHECK BALANCE</button>
            </div>
            <div className="col wallet-info-buttons-keygen" align="center">
              <button onClick={keygen} className="btn btn-dark">GENERATE WALLET</button>
            </div>
          </div>
          <div className="row wallet-balance">
            <div className="col" align="center">
              <h1>BALANCE: {walletBalance} LMN</h1>
            </div>
          </div>
            <div className="row wallet-transactions-box-input">
              <input
                type="text"
                placeholder="Enter your unique public key"
                onChange={(e) => setSendingAddress(e.target.value)} 
              />
            </div>
            <div className="row wallet-transactions-box-input">
              <input
                type="text"
                placeholder="Enter the address of the receiving party"
                onChange={(e) => setReceivingAddress(e.target.value)} 
              />
            </div>
            <div className="row wallet-transactions-box-input">
              <input
                type="text"
                placeholder="Enter the amount to send (LMN)"
                onChange={(e) => setSendingAmount(e.target.value)} 
              />
            </div>
            <div className="row wallet-transactions-box-input">
              <input
                type="text"
                placeholder="Enter your unique private key"
                onChange={(e) => setPrivateKey(e.target.value)}
              />
            </div>
            <div className="row wallet-transactions-box-input">
              <button type="submit" className="btn btn-dark" onClick={sendTransaction}>SEND</button>
            </div>
            <div className="wallet-transactions-errors">
              {errors}
            </div>
        </div>
        <div className="col wallet-generator">
          <div className="row">
            <div className="col wallet-generator-public">
              <div className="row wallet-generator-public-label">
                <h1>Public</h1>
              </div>
              <h1>{keys.publicKey}</h1>
            </div>
            <div className="col wallet-generator-private">
              <div className="row wallet-generator-private-label">
                <h1>Private</h1>
              </div>
              <h1>{keys.privateKey}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet;