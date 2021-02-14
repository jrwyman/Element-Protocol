import express from 'express';
import bodyParser from 'body-parser';

import Blockchain from './blockchain/Blockchain.js'
import PubSub from './blockchain/PubSub.js';

const app = express();
const ElementProtocol = Blockchain();
const P2PClient = new PubSub(ElementProtocol);

app.use(bodyParser.json());

app.get('/explore', (req, res) => {
  res.json(ElementProtocol.blocks);
});

app.post('/miner', (req, res) => {
  const newBlock = ElementProtocol.mineBlock();
  P2PClient.broadcastChain();
  res.json(newBlock);
});

const DEFAULT_PORT = 5000;
let PEER_PORT;

if (process.env.GENERATE_PEER_PORT === 'true') {
  PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000);
}

const PORT = (PEER_PORT || process.env.PORT || 5000);
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
