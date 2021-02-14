import redis from 'redis';

const CHANNELS = {
  BLOCKCHAIN: 'BLOCKCHAIN'
}

class PubSub {
  constructor(blockchain) {
    this.blockchain = blockchain;

    this.publisher = redis.createClient();
    this.subscriber = redis.createClient();

    this.subscriber.subscribe(CHANNELS.BLOCKCHAIN);
    this.subscriber.on(
      'message',
      (channel, message) => this.handleMessage(channel, message)
    );
  }

  publish({channel, message}) {
    this.subscriber.unsubscribe(channel, () => {
      this.publisher.publish(channel, message, () => {
        this.subscriber.subscribe(channel);
      });
    })
  }

  handleMessage(channel, message) {
    console.log('A block has been mined. Your blockchain has been updated.')
    const parsedMessage = JSON.parse(message);
    if (channel === CHANNELS.BLOCKCHAIN) {
      this.blockchain.replaceChain(parsedMessage)
    }
  }

  broadcastChain() {
    this.publish({
      channel: CHANNELS.BLOCKCHAIN,
      message: JSON.stringify(this.blockchain),
    })
  }
}

export default PubSub;
