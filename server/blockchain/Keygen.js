import pkg from 'elliptic';
const { ec: EC } = pkg;
const ec = new EC('ed25519');

function Keygen() {
  const key = ec.genKeyPair();
  const publicKey = key.getPublic('hex');
  const privateKey = key.getPrivate('hex');

  console.log();
  console.log('Your public key:', publicKey);

  console.log();
  console.log('Your private key', privateKey);
}

Keygen();

export default Keygen;
