const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const Blockchain = require('./blockchain/Blockchain.js');
// const PubSub = require('./blockchain/PubSub.js');
const Keygen = require('./blockchain/Keygen.js');

const app = express();
const ElementProtocol = Blockchain();

const seedPublic1 = '040cbf73107d4eb91790369880f28c7f8cf7f627a28a08cb28154e0a57bf0470d52435b43db0262c33d4199388275561ea057a8b65b4805820c94ccc2aecc0b114';
const seedPrivate1 = '0e69ba4f07c057faa58f9acbb4f186c7eeff2937b4418aedb75b49a6b624249f';

const seedPublic2 = '047b116997db3b4a292dc171a2fc98e0ea6f80891ea52066daed364538cf8e2dbf6b965218f4dd0fd21a054ae2e66b8264fd8ee2b1d600823751a05d2061830cf0';
const seedPrivate2 = '0f3c99e7c5946c3fdbbc4ed8075f0f613b5c68d8e97f924c19881287f6a2b834';

ElementProtocol.mineBlock(seedPublic1);
ElementProtocol.mineBlock(seedPublic2);
ElementProtocol.mineBlock(seedPublic1);
ElementProtocol.mineBlock(seedPublic2);
ElementProtocol.mineBlock(seedPublic2);
ElementProtocol.mineBlock(seedPublic1);
ElementProtocol.mineBlock(seedPublic1);


// const P2PClient = new PubSub(ElementProtocol);

// const DEFAULT_PORT = 5000;
// const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;

app.use(bodyParser.json());

// const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/explore', (req, res) => {
  res.json(ElementProtocol);
});

app.get('/transactions', (req, res) => {
  const blockchainTransactions = [];
  for (block of ElementProtocol.blocks) {
    for (transaction of block.transactions) {
      blockchainTransactions.push(transaction);
    }
  }
  res.json(blockchainTransactions);
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

app.post('/transact', (req, res) => {
  const transaction = ElementProtocol.createNewTransaction({
    sender: req.query.sender, receiver: req.query.receiver, amount: req.query.amount, 
  }, req.query.privateKey);
  res.json(transaction);
});

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
