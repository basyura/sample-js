import React from "react";
import ToDoContainer from "../containers/ToDoContainer";

const DetailPane = () => {
  const container = ToDoContainer.useContainer();

  const todoList = container.selectedToDoList;

  return (
    <div>
      {todoList.map((todo) => (
        <div className="ToDoListItem" key={todo.key}>
          <div className="ToDoListItem-title">
            <span>{todo.title}</span>
          </div>
          <div className="ToDoListItem-description">{todo.description}</div>
        </div>
      ))}
    </div>
  );
};

export default DetailPane;
