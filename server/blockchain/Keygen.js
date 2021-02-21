const EC = require('elliptic').ec;
const ec = new EC('ed25519');

function Keygen() {
  const key = ec.genKeyPair();
  const publicKey = key.getPublic('hex');
  const privateKey = key.getPrivate('hex');

  return {
    publicKey: publicKey,
    privateKey: privateKey,
  }
}

module.exports = Keygen;
