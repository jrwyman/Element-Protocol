import { useState } from 'react';
import axios from 'axios';

import './Wallet.css';

function Wallet() {
  const [keys, setKeys] = useState({ publicKey: null, privateKey: null })

  const [walletAddress, setWalletAddress] = useState('');

  const [walletBalance, setWalletBalance] = useState(0);
  
  async function keygen() {
    const Keygen = await axios.get('/keygen');
    setKeys({
      publicKey: Keygen.data.publicKey,
      privateKey: Keygen.data.privateKey,
    })
  }

  async function getBalance() {
    const balance = await axios.get(`/balance/${walletAddress}`)
    setWalletBalance(balance.data);
  }
  
  return (
    <div className="container wallet">
      <div className="row wallet-info">
        <div className="row">
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
        </div>
        <div className="row wallet-balance">
          <div className="col" align="center">
            <h1>BALANCE: {walletBalance} LMN</h1>
          </div>
        </div>
      </div>
      <div className="row wallet-generator">
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
  )
}

export default Wallet;