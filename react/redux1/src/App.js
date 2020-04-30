import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { combineReducers, createStore, applyMiddleware } from "redux";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      state = { ...state, name: action.payload };
      break;
    case "CHANGE_AGE":
      state = { ...state, age: action.payload };
      break;
    case "ERR":
      throw new Error("It's error!!!");
    default:
  }

  return state;
};
const tweetsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TWEET":
      state = state.concat({ id: Date.now(), text: action.payload });
      break;
    default:
  }
  return state;
};
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
});

const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  next(action);
};
const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log("Error was occured", e);
  }
};

const middleware = applyMiddleware(logger, error);
const store = createStore(reducers, {}, middleware);
//const store = createStore(reducers, {});

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({ type: "FOO", payload: "BAR" });
store.dispatch({ type: "CHANGE_NAME", payload: "Tsutomu" });
store.dispatch({ type: "CHANGE_AGE", payload: 35 });
store.dispatch({ type: "CHANGE_AGE", payload: 36 });
store.dispatch({ type: "ADD_TWEET", payload: "OMG LIKE LOL" });
store.dispatch({
  type: "ADD_TWEET",
  payload: "I am sod like seriously like ...",
});
store.dispatch({ type: "ERR" });

/*
console.log("-------------------------")

const reducer = (state, action) => {
  console.log("reducer has been called", state)
  switch(action.type) {
    case "INC":
      return state + action.payload;
    case "DEC":
      return state - action.payload
    default:
      return state
  }
}
const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log("store changed", store.getState());
})

console.log("-------------------------")
store.dispatch({type: "INC", payload: 1})
console.log("-------------------------")
store.dispatch({type: "INC", payload: 2})
console.log("-------------------------")
store.dispatch({type: "DEC", payload: 3})
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          今から始めるReact入門 〜 Redux 編 immutability とは
          https://qiita.com/TsutomuNakamura/items/a78514a61ede444bd074
        </p>
      </header>
    </div>
  );
}

export default App;
