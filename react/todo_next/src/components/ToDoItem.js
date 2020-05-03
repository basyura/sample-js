import React from "react";
import ToDoContainer from "../containers/ToDoContainer";
import "./TodoItem.css";

const ToDoItem = (_props) => {
  console.log("ToDoItem#start");
  const container = ToDoContainer.useContainer();
  const { todo, ...props } = _props;
  return (
    <div className="ToDoListItem" {...props}>
      <div className="ToDoListItem-title" style={{ display: "flex" }}>
        <div style={{ width: "95%", overflow: "hidden" }}>
          <span className="ToDoListItem-wrap">{todo.title}</span>
        </div>
        <div style={{ width: "5%" }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              container.remove(todo);
            }}
            style={{ marginLeft: "-3px" }}
          >
            x
          </button>
        </div>
      </div>
      <div className="ToDoListItem-description" style={{ overflow: "hidden" }}>
        <span className="ToDoListItem-wrap"> {todo.description} </span>
      </div>
    </div>
  );
};

export default ToDoItem;
