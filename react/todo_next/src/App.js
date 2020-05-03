import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import ToDoContainer from "./containers/ToDoContainer";
import "./App.css";

function App() {
  console.log("#################");
  console.log("#   App#start   #");
  console.log("#################");

  const list = JSON.parse(localStorage.getItem("todoList")) || [];

  return (
    <div className="App">
      <ToDoContainer.Provider initialState={list}>
        <Header />
        <Content />
      </ToDoContainer.Provider>
    </div>
  );
}
export default App;
