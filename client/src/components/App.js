import { Route, Switch } from 'react-router-dom';

import Nav from './nav/Nav';
import Miner from '../pages/miner/Miner';
import Explorer from '../pages/explorer/Explorer';
import Wallet from '../pages/wallet/Wallet';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Explorer} />
        <Route exact path="/explorer" component={Explorer} />
        <Route exact path="/miner" component={Miner} />
        <Route exact path="/wallet" component={Wallet} />
      </Switch>
    </div>
  );
}

export default App;
