import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Button from 'material-ui/Button';

import Home from './pages/home'

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src="http://frontclub.pl/1226c02f1436272e162b73cf3f64dd94.svg" alt="FC logo" />
      <h1 className="App-title">Redux Form - Front Club</h1>
    </header>
    <nav>
      <Button>
        <NavLink exact to="/" activeClassName="is-active">
          Home
        </NavLink>
      </Button>
    </nav>

    <Route exact path="/" component={Home} />
  </div>
)

export default App;
