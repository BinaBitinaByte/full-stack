import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
// import provider from react redux
//note: provider is a component but store is not
import { Provider } from "react-redux"
import Signup from './components/Signup';
import Home from './components/Home';
import Account from './components/Account'
import './App.css';
//import store
import store from "./store"

function App() {
  return (
    //provider goes around everything 
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
