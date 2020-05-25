import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DemoOne from './DemoOne';
import DemoTwo from './DemoTwo';
import DemoThree from './DemoThree';
import DemoFour from './DemoFour';
import DemoFive from './DemoFive';
import DemoSix from './DemoSix';
import DemoSeven from './DemoSeven';
import DemoEight from './DemoEight';
import Menu from './Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Switch>
            <Route path="/demo8" component={DemoEight} />
            <Route component={Menu} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
