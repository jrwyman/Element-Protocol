const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const Blockchain = require('./blockchain/Blockchain.js');
// const PubSub = require('./blockchain/PubSub.js');
const Keygen = require('./blockchain/Keygen.js');

const app = express();
const ElementProtocol = Blockchain();
// const P2PClient = new PubSub(ElementProtocol);

const DEFAULT_PORT = 5000;
const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;

app.use(bodyParser.json());

// const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/explore', (req, res) => {
  res.json(ElementProtocol);
});

app.post('/miner/:address', async (req, res) => {
  const newBlock = await ElementProtocol.mineBlock(req.params.address);
  // P2PClient.broadcastChain();
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

// async function syncBlockchain() {
//   const syncChain = await axios.get(`${ROOT_NODE_ADDRESS}/explore`);
//   const rootChain = syncChain.data;
//   ElementProtocol.replaceChain(rootChain);
//   console.log('Your blockchain has been synced with root chain.');
// }

// let PEER_PORT;

// if (process.env.GENERATE_PEER_PORT === 'true') {
//   PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000);
// }

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = (process.env.PORT || 5000); //(PEER_PORT || process.env.PORT || 5000)
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
  // if (PORT !== DEFAULT_PORT) {
  //   syncBlockchain();
  // }
});
