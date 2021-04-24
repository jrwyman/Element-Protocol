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
    if (walletAddress.length < 130) {
      return alert('Invalid Wallet Address!')
    }

    const balance = await axios.get(`/balance/${walletAddress}`)
    setWalletBalance(balance.data);
  }
  
  return (
    <div className="container wallet">
      <div className="row">
        <div className="col" align="center">
          <div className="input-group mb-3">
            <input type="text" onChange={(e) => setWalletAddress(e.target.value)} className="form-control wallet-info-balance-input" placeholder="Enter your unique public key here" aria-label="public-key" aria-describedby="basic-addon1" />
          </div>
          <div className="wallet-buttons" align="center">
            <button onClick={getBalance} className="btn btn-dark wallet-button">CHECK BALANCE</button>
            
            <button type="button" className="btn btn-dark wallet-button" data-bs-toggle="modal" data-bs-target="#modal1">
              GENERATE WALLET
            </button>
            <div className="modal fade" id="modal1" tabindex="-1" aria-labelledby="modalLabel1" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalLabel1">Create A Wallet</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="container">
                      <button onClick={keygen} className="btn btn-dark wallet-button">New Keypair</button>
                      <div className="row" align="left">
                        <div className="col">
                          <p>Public: {keys.publicKey}</p>
                        </div>
                        <div className="col">
                          <p>Private: {keys.privateKey}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className="btn btn-dark wallet-button" data-bs-toggle="modal" data-bs-target="#modal2">
              NEW TRANSACTION
            </button>
            <div className="modal fade" id="modal2" tabindex="-1" aria-labelledby="modalLabel2" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalLabel2">Send LMN</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="container">
                      <div className="row" align="left">
                        <div className="new-transaction">
                          <div className="input-group mb-3 wallet-transactions-box-input">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1">Sender</span>
                            </div>
                            <input type="text" onChange={(e) => setSendingAddress(e.target.value)} className="form-control" placeholder="Enter your unique public key" aria-label="public-key" aria-describedby="basic-addon1" />
                          </div>
                          <div className="input-group mb-3 wallet-transactions-box-input">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1">Receiver</span>
                            </div>
                            <input type="text" onChange={(e) => setReceivingAddress(e.target.value)} className="form-control" placeholder="Enter the address of the receiving party" aria-label="receiving-address" aria-describedby="basic-addon1" />
                          </div>
                          <div className="input-group mb-3 wallet-transactions-box-input">
                            <div class="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1">Amount</span>
                            </div>
                            <input type="text" onChange={(e) => setSendingAmount(e.target.value)} className="form-control" placeholder="Enter the amount to send (LMN)" aria-label="send-amount" aria-describedby="basic-addon1" />
                          </div>
                          <div className="input-group mb-3 wallet-transactions-box-input">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1">Private Key</span>
                            </div>
                            <input type="text" onChange={(e) => setPrivateKey(e.target.value)} className="form-control" placeholder="Enter your unique private key" aria-label="private-key" aria-describedby="basic-addon1" />
                          </div>
                          <div className="row wallet-transactions-box-input">
                            <button type="submit" className="btn btn-dark" onClick={sendTransaction}>SEND</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="container">
                      <div className="row">
                        <div className="col wallet-transactions-errors" align="left">
                          {errors}
                        </div>
                        <div className="col" align="right">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="wallet-balance" align="center">
            <h1>BALANCE: {walletBalance} LMN</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet;