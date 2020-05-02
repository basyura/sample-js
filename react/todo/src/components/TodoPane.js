import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import AppContext from "../AppContext";

const ToDoPane = () => {
  console.log("ToDoPane#start");

  const { store, dispatch } = useContext(AppContext);

  return (
    <div>
      {store.toDoList.map((todo) => (
        <ToDoItem
          key={todo.title}
          title={todo.title}
          description={todo.description}
          onClick={() => dispatch({ type: "remove", todo: todo })}
        />
      ))}
    </div>
  );
};

export default ToDoPane;
