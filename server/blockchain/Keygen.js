import pkg from 'elliptic';
const { ec: EC } = pkg;
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

Keygen();

export default Keygen;
