import React from "react";
import ToDoItem from "./ToDoItem";
import AppContext from "./AppContext";

const ToDoPane = () => {
  console.log("ToDoPane#start");

  const removeTodo = (toDoList, item, setToDoList) => {
    const news = toDoList.filter((x) => x !== item);
    setToDoList(news);
    localStorage.setItem("todoList", JSON.stringify(news));
  };

  return (
    <AppContext.Consumer>
      {({ toDoList, setToDoList }) => (
        <div>
          {toDoList.map((todo) => (
            <ToDoItem
              key={todo.title}
              title={todo.title}
              description={todo.description}
              onClick={() => removeTodo(toDoList, todo, setToDoList)}
            />
          ))}
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default ToDoPane;
