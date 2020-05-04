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
          todo={todo}
          onClick={(e) => {
            container.selectTodo(todo);
            container.openModal({ todo });

            e.stopPropagation();
          }}
        />
      ))}
    </div>
  );
};

export default ToDoPane;
