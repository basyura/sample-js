import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>https://qiita.com/TsutomuNakamura/items/ceaa2552bbbca1bac24e</div>
      <Layout />
    </Provider>
  );
}

export default App;
