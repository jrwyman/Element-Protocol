import { Link } from 'react-router-dom';

import './Nav.css';

function Nav() {
  
  
  return (
    <div className="container-fluid nav">
      <div className="row w-100 nav-bar">
        <div className="col nav-logo">
          <h1 className="logo">E<span className="fancy-letter">L</span>E<span className="fancy-letter">M</span>E<span className="fancy-letter">N</span>T</h1>
        </div>
        <div className="col nav-links">
          <div className="row">
            <Link className="col nav-link" to="/explorer">Explorer</Link>
            <Link className="col nav-link" to="/miner">Miner</Link>
            <Link className="col nav-link" to="/wallet">Wallet</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;