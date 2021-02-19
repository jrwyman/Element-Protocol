import { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import ClipLoader from 'react-spinners/ClipLoader'

import './Miner.css';

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

function Miner() {
  const [minerAddress, setMinerAddress] = useState('');
  const [miningInProgress, setMiningInProgress] = useState(false);
  const [minedBlock, setMinedBlock] = useState(undefined);

  async function mineBlock() {
    setMiningInProgress(true);
    const block = await axios.post(`/miner/${minerAddress}`)
    setMiningInProgress(false);
    setMinedBlock(block.data);
  }

  return (
    <div className="container miner">
      <div className="row">
        <div className="col" align="center">
          <input
            value={minerAddress}
            onChange={(e) => setMinerAddress(e.target.value)}
            className="miner-address w-100"
            type="text"
            placeholder="Enter your unique public key here"
          />
        </div>
      </div>
      <div className="row miner-start">
        <div className="col" align="center">
          <button onClick={mineBlock} className="btn btn-dark w-25">MINE A BLOCK</button>
        </div>
      </div>
      <div className="row miner-block">
        <div className="col" align="center">
          {
            minedBlock ?
              miningInProgress ? <ClipLoader color="white" /> :
              <div>
                <h1 className="miner-block-header">Congratulations! You mined block # {minedBlock.blockHeight} on {dayjs(minedBlock.timestamp).format('L')} at {dayjs(minedBlock.timestamp).format('LT')}</h1>
                <div className="miner-block-info w-25" align="left">
                  <div>
                    Block Height: {minedBlock.blockHeight}
                  </div>
                  <div>
                    Block Difficulty: {minedBlock.difficulty}
                  </div>
                </div>
              </div>
            : 
            null
          }
        </div>
      </div>
    </div>
  )
}

export default Miner;