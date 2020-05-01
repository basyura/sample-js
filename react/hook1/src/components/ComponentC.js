import React, { useContext } from "react";
import AppContext from "../AppContext";

const ComponentC = () => {
  const [count, setCount] = useContext(AppContext);
  return (
    <div>
      <p>Component C</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default ComponentC;
