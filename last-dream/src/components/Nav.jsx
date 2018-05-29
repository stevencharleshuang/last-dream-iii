import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Header">
      <h1>React Router Testing</h1>
        <span>
          <ul>
            <li className='NavBar'><Link to="/">Home</Link></li>
            <li className='NavBar'><Link to="/game" id="game-link">Game</Link></li>
          </ul>
        </span>
    </div>
  );
}
