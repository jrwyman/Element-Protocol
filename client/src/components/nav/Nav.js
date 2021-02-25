import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Dropdown } from 'react-bootstrap';

import './Nav.css';

function Nav() {
  const isMobile = useMediaQuery({ query: '(max-width: 578px)' });

  if (isMobile) {
    return (
      <div className="container-fluid nav">
        <div className="row w-100 nav-bar">
          <div className="col nav-logo">
            <h1 className="logo">E<span className="fancy-letter">L</span>E<span className="fancy-letter">M</span>E<span className="fancy-letter">N</span>T</h1>
          </div>
          <Dropdown className="col drop-down" align="center">
            <Dropdown.Toggle bsPrefix="hamburger-button btn">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
              <i className="fa fa-bars hamburger-icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="drop-drop-menu">
              <Dropdown.Item href="#/">Explorer</Dropdown.Item>
              <Dropdown.Item href="#/miner">Miner</Dropdown.Item>
              <Dropdown.Item href="#/wallet">Wallet</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    )
  } else {
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
}

export default Nav;