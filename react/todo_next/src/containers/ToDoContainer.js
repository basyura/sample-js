import { useState } from "react";
import { createContainer } from "unstated-next";

const useToDoContainer = () => {
  const [toDoList, setToDoList] = useState([]);
  const [isInitialized, setInitialized] = useState(false);
  const [selectedToDoList, setSelectedToDoList] = useState([]);

  const add = (todo) => {
    console.log("ToDoContainer#add " + JSON.stringify(todo));
    const newTodo = Object.assign({}, todo, {
      key: createUniqueKey(),
    });
    save([...toDoList, newTodo]);
  };

  const remove = (todo) => {
    console.log("ToDoContainer#remove " + todo.key);
    save(toDoList.filter((x) => x.key !== todo.key));
  };

  const fetch = () => {
    console.log("ToDoContainer#fetch");
    const news = JSON.parse(localStorage.getItem("todoList")) || [];
    setToDoList(news);
  };

  const selectTodo = (todo) => {
    console.log("ToDoContainer#selectTodo");
    // duplicate check
    if (selectedToDoList.find((v) => v.key === todo.key)) {
      return;
    }
    setSelectedToDoList([...selectedToDoList, todo]);
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

  return {
    toDoList,
    add,
    remove,
    fetch,
    isInitialized,
    setInitialized,
    selectedToDoList,
    selectTodo,
  };
};

const ToDoContainer = createContainer(useToDoContainer);
export default ToDoContainer;
