import "./App.css";

import { useState } from "react";
import { DataContext } from "./context";
import { SideBar } from "./components/sidebar";
import { Content } from "./components/content";

const App = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("hello");
  const [items, setItems] = useState(["a", "b", "c", "d"]);

  const data = {
    listItem: "fuga",
    title: "world",
    count,
    setCount,
    message,
    setMessage,
    items,
    setItems,
  };

  return (
    <div className="wrapper">
      <DataContext.Provider value={data}>
        <div className="side">
          <SideBar />
        </div>
        <div className="main">
          <Content />
        </div>
      </DataContext.Provider>
    </div>
  );
};

export default App;
