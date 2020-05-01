import React, { useState } from "react";
import AppContext from "./AppContext";
import ToDoPane from "./TodoPane";
import FormPane from "./FormPane";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  return (
    <div className="App">
      <div>create-react-appを使ってReactでToDoリストを作成するぞ</div>
      <div>https://qiita.com/rioc/items/8723c236e10d989e827d</div>
      <hr />
      <div>
        <AppContext.Provider value={[toDoList, setToDoList]}>
          <div>
            <FormPane />
            <ToDoPane />
          </div>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
