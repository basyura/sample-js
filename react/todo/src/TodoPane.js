import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import Context from "./AppContext";

const ToDoPane = () => {
  const [toDoList, setToDoList] = useContext(Context) || [];

  const removeTodo = (item) => {
    const news = toDoList.filter((x) => x !== item);
    setToDoList(news);
    localStorage.setItem("todoList", JSON.stringify(news));
  };

  return (
    <div>
      {toDoList.map((todo) => (
        <ToDoItem
          key={todo.title}
          title={todo.title}
          description={todo.description}
          onClick={() => removeTodo(todo)}
        />
      ))}
    </div>
  );
};

export default ToDoPane;
