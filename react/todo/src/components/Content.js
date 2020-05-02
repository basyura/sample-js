import React from "react";
import ToDoPane from "./TodoPane";
import FormPane from "./FormPane";

const Content = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{}}>
        <FormPane />
        <ToDoPane />
      </div>
      <div style={{ border: "1px solid gray" }}>
        <span>hello</span>
      </div>
    </div>
  );
};

export default Content;
