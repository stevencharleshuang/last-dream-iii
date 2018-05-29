import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import $ from 'jquery';
import Nav from './components/Nav';
import Home from './components/Home';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sup, Dave</h1>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/game' component={Game} />
        </Switch>
      </div>
    );
  }
}

export default App;
