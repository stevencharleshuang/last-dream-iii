import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="#" className="navbar-item">
          <span className="icon is-large"></span>
          <span className="is-size-3"><strong>Last Dream III</strong></span>
        </a>
        <br />
        <ul>
            <li className='NavBar'><Link to="/">Home</Link></li>
            <li className='NavBar'><Link to="/game" id="game-link">Game</Link></li>
        </ul>
        <button className="button navbar-burger">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
