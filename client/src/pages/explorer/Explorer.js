import { useState, useEffect } from 'react';
import axios from 'axios';

import './Explorer.css';

function Explorer() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    fetchBlockchainData()
  }, [blocks]);
  
  
  async function fetchBlockchainData() {
    const blockchain = await axios.get('/explore');
    setBlocks(blockchain.data.blocks);
  }

  function handleClick() {
    // axios.get()
  }
  
  return (
    <div className="container explorer">
      <div className="row blocks-header">
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
      </div>
    </div>
  );
}

export default Explorer;
