//state management lib so data is consistent
//import combineReducers for when you have a bigger app 
//local state if the whole app doesn't need to use it but use redux if you want access to entire app
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware'
import auth from './ducks/auth'

//reducer handles any actions that happen
//if anything in state has to be changed, you need to use a reducer
const rootReducer = combineReducers({auth});

//store holds all data
const store = createStore(rootReducer, applyMiddleware(promise));

//export store & then go to app.js to import provider from react redux
export default store;