import React, { useReducer } from "react";
import AppContext from "./AppContext";
import Header from "./components/Header";
import Content from "./components/Content";
import Store from "./Store";
import reducers from "./reducers";
import "./App.css";

function App() {
  console.log("#################");
  console.log("#   App#start   #");
  console.log("#################");

  Store.fetch();

  const [store, dispatch] = useReducer(reducers, Store);

  return (
    <div className="App">
      <AppContext.Provider value={{ store, dispatch }}>
        <Header />
        <Content />
      </AppContext.Provider>
    </div>
  );
}

export default App;
