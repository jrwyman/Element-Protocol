import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

import Blockchain from './blockchain/Blockchain.js'
import PubSub from './blockchain/PubSub.js';

const app = express();
const ElementProtocol = Blockchain();
const P2PClient = new PubSub(ElementProtocol);

const DEFAULT_PORT = 5000;
const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;

app.use(bodyParser.json());

app.get('/explore', (req, res) => {
  res.json(ElementProtocol);
});

app.post('/miner', (req, res) => {
  const newBlock = ElementProtocol.mineBlock();
  P2PClient.broadcastChain();
  res.json(newBlock);
});

async function syncBlockchain() {
  const syncChain = await axios.get(`${ROOT_NODE_ADDRESS}/explore`);
  const rootChain = syncChain.data;
  ElementProtocol.replaceChain(rootChain);
}

syncBlockchain()

let PEER_PORT;

if (process.env.GENERATE_PEER_PORT === 'true') {
  PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000);
}

const PORT = (PEER_PORT || process.env.PORT || 5000);
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
