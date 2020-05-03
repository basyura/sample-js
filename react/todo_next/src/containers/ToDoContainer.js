import { useState } from "react";
import { createContainer } from "unstated-next";

const useToDoContainer = (initialiState) => {
  console.log("useToDoContainer#start");

  const [toDoList, setToDoList] = useState(initialiState);
  const [isInitialized, setInitialized] = useState(false);

  const add = (todo) => {
    console.log("ToDoContainer#add " + JSON.stringify(todo));
    const newTodo = Object.assign({}, todo, {
      key: createUniqueKey(),
    });
    save([...toDoList, newTodo]);
  };

  const remove = (todo) => {
    console.log("ToDoContainer#remove " + JSON.stringify(todo));
    save(toDoList.filter((x) => x.key !== todo.key));
  };

  const fetch = () => {
    console.log("Store#fetch");
    const news = JSON.parse(localStorage.getItem("todoList")) || [];
    setToDoList(news);
  };

  /* private */

  const save = (toDoList) => {
    setToDoList(toDoList);
    localStorage.setItem("todoList", JSON.stringify(toDoList));
  };

  const createUniqueKey = () => {
    return (
      new Date().getTime().toString(16) +
      Math.floor(1000 * Math.random()).toString(16)
    );
  };

  return { toDoList, add, remove, fetch, isInitialized, setInitialized };
};

const ToDoContainer = createContainer(useToDoContainer);
export default ToDoContainer;
