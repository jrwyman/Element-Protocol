import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

import Blockchain from './blockchain/Blockchain.js';
import PubSub from './blockchain/PubSub.js';
import Keygen from './blockchain/Keygen.js';

const app = express();
const ElementProtocol = Blockchain();
const P2PClient = new PubSub(ElementProtocol);

const DEFAULT_PORT = 5000;
const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;

const pub1 = '0433e377e61e04af342dac7e2b273b5c331c128ace089e89cf56b4da15090eb39334abe9620c32ac950b8a417e57187506a9ff45d05bd8963e70819382c21b0a3e';
const priv1 = '075b1b1702fc0e10cd1b780c030116bc5e08c99dbaa35ed4768bc238b7df5841';

app.use(bodyParser.json());

app.get('/explore', (req, res) => {
  res.json(ElementProtocol);
});

app.post('/miner', async (req, res) => {
  const newBlock = await ElementProtocol.mineBlock(pub1);
  P2PClient.broadcastChain();
  res.send(newBlock);
});

app.get('/keygen', (req, res) => {
  const KeyGenerator = Keygen();
  res.json(KeyGenerator);
});

// app.post('/transact', (req, res) => {
//   const transaction = ElementProtocol.createNewTransaction({
//     sender: pub1, receiver: 'no-one', amount: 20 
//   }, priv1);
//   res.json(transaction);
// });

app.get('/balance/:address', (req, res) => {
  const address = req.params.address;
  const balance = ElementProtocol.getBalanceOfAddress(address);
  res.json(balance);
});

async function syncBlockchain() {
  const syncChain = await axios.get(`${ROOT_NODE_ADDRESS}/explore`);
  const rootChain = syncChain.data;
  ElementProtocol.replaceChain(rootChain);
  console.log('Your blockchain has been synced with root chain.');
}

let PEER_PORT;

if (process.env.GENERATE_PEER_PORT === 'true') {
  PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000);
}

const PORT = (PEER_PORT || process.env.PORT || 5000);
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
  if (PORT !== DEFAULT_PORT) {
    syncBlockchain();
  }
});
