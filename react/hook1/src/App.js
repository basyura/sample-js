import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import AppContext from "./AppContext";

function App() {
  const [count, setCount] = useState(100);

  const afterRef = useRef();

  useEffect(() => {
    console.log("useEffect start");
    document.title = `You clicked ${count} times`;
    const copyRef = afterRef;
    return () => {
      console.log("cleanup before : " + copyRef.current.innerText);
      copyRef.current.innerText = count;
    };
  });

  return (
    <div className="App">
      <h1>Learn useContext</h1>
      <div>
        <div>こんなに簡単なの？React useContextって</div>
        <div>
          <a href="https://reffect.co.jp/react/react-usecontext-understanding">
            https://reffect.co.jp/react/react-usecontext-understanding
          </a>
        </div>
      </div>
      <AppContext.Provider value={[count, setCount]}>
        <span>clean up count : </span>
        <span ref={afterRef}>{count}</span>
        <ComponentA />
      </AppContext.Provider>
    </div>
  );
}

export default App;
