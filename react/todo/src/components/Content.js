import React from "react";
import ToDoPane from "./TodoPane";
import FormPane from "./FormPane";
import DetailPane from "./DetailPane";

const Content = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <FormPane />
        <ToDoPane />
      </div>
      <div style={{ border: "1px solid gray", marginLeft: "10px" }}>
        <DetailPane />
      </div>
    </div>
  );
};

export default Content;
