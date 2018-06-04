import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bulma/css/bulma.css'
import $ from 'jquery';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Game from './components/Game';
import News from './components/News';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Hero} />
          <Route exact path='/game' component={Game} />
          <Route exact path='/about' component={About} />
          <Route exact path='/news' component={News} />
        </Switch>
      </div>
    );
  }
}

export default App;
