import React from "react";
import "./TodoItem.css";

const ToDoItem = (_props) => {
  console.log("ToDoItem#start");
  const { title, description, ...props } = _props;
  return (
    <div className="ToDoListItem" {...props}>
      <div className="ToDoListItem-title">{title}</div>
      <div className="ToDoListItem-description">{description}</div>
    </div>
  );
};

export default ToDoItem;
