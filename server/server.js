import express from 'express';

import Blockchain from './blockchain/Blockchain.js'

const app = express();
const ElementProtocol = Blockchain();

app.get('/explore', (req, res) => {
  res.json(ElementProtocol.blocks);
});

app.post('/miner', (req, res) => {
  const newBlock = ElementProtocol.mineBlock();
  res.json(newBlock);
});

const PORT = (process.env.PORT || 5000);
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
