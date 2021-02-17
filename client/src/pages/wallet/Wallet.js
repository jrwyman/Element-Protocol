import { useState } from 'react';
import axios from 'axios';

import './Wallet.css';

function Wallet() {
  const [keys, setKeys] = useState({
    publicKey: null,
    privateKey: null,
  })
  
  async function keygen() {
    const Keygen = await axios.get('/keygen');
    setKeys({
      publicKey: Keygen.data.publicKey,
      privateKey: Keygen.data.privateKey,
    })
  }
  
  return (
    <div className="container wallet">
      <div className="row wallet-header">
        <h1>Generate a unique public and private key using our key generator below!</h1>
      </div>
      <div className="row">
        <div className="col wallet-info">
          hello
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>public: {keys.publicKey}</h1>
        </div>
        <div className="col">
          <h1>private: {keys.privateKey}</h1>
        </div>
      </div>
    </div>
  )
}

export default Wallet;