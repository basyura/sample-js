import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoContainer from "../containers/ToDoContainer";

const ToDoPane = () => {
  console.log("ToDoPane#start");

  const container = ToDoContainer.useContainer();

  return (
    <div>
      {container.toDoList.map((todo) => (
        <ToDoItem
          key={todo.key}
          title={todo.title}
          description={todo.description}
          onClick={() => container.selectTodo(todo)}
        />
      ))}
    </div>
  );
};

export default ToDoPane;
