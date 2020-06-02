import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import List from './views/List';
import Random from './views/Random';
import Single from './views/Single';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list" exact component={List} />
        <Route path="/random" exact component={Random} />
        <Route path="/single" exact component={Single} />
      </Switch>
    </div>
  );
}

export default App;
