import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="#" className="navbar-item">
          <span className="is-size-3"><strong>Last Dream III</strong></span>
        </a>
        <br />
        <ul>
          <li className='navbar-item is-size-5'><Link to="/">Home</Link></li>
          <li className='navbar-item is-size-5'><Link to="/news">News</Link></li>
          <li className='navbar-item is-size-5'><Link to="/about">About</Link></li>
          <li className='navbar-item is-size-5'><Link to="/game" id="game-link">Game</Link></li>
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
