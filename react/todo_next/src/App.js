import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import ToDoContainer from "./containers/ToDoContainer";
import Initailizer from "./components/Initializer";
import ModalWindow from "./components/ModalWindow";
import "./App.css";

function App() {
  console.log("#################");
  console.log("#   App#start   #");
  console.log("#################");

  return (
    <div className="App">
      <ToDoContainer.Provider>
        <Header />
        <Content />
        <Initailizer />
        <ModalWindow />
      </ToDoContainer.Provider>
    </div>
  );
}
export default App;
