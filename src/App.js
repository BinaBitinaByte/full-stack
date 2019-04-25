import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Account from './components/Account'
import './App.css';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <div>JM Bank</div>
      <Switch>
        <Route path="/signup" component= { Signup }/>
        <Route path="/account" component={ Account }/>
        {/* most generic route goes last */}
        <Route path="/" component={ Home }/> 
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
