import axios from "axios";

const initialState = {
  username: '',
  balance: 0
}

// put together action types
const SIGN_UP = 'SIGN-UP'
const LOGIN = 'LOGIN'
// ACTION CREATOR

export function signup (username, password) {
  return {
    type: SIGN_UP,
    payload: axios.post(
      '/auth/signup',
      //  const { username, password } = req.body; // we already set the obj to req.body
      { username: username, password: password }
    ) // b/c we did a post req in the backend
  }
}

export function login (username, password) {
  return {
    type: LOGIN,
    payload: axios.post(
      '/auth/login',
      //  const { username, password } = req.body; // we already set the obj to req.body
      { username: username, password: password }
    ) // b/c we did a post req in the backend
  }
}

// because we're using export deafult for the reducer function, you can either give it a name or not
// state= initialState so that state is not undefined in our function
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case `${SIGN_UP}_FULLFILLED`:
      // updates states
      return {
        ...state,
        username: action.payload.data.username,
        balance: action.payload.data.balance
      }
    default:
      return state
  }
}
