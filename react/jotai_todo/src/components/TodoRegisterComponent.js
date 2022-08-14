import { useAtom } from "jotai";
import React from "react";
import { todoListAtom } from "../atoms/Atoms";
import { Todo } from "../models/Todo";

const TodoRegisterComponent = () => {
  const [todoList, setTodoList] = useAtom(todoListAtom);
  const textRef = React.createRef();
  const handleRegister = () => {
    const value = textRef.current.value;
    const newTodo = new Todo(todoList.length + 1, value);
    setTodoList(todoList.concat(newTodo));
  };

  return (
    <div>
      todo:
      <input type="text" ref={textRef} />
      <input type="button" onClick={handleRegister} value="add" />
    </div>
  );
};

export default TodoRegisterComponent;
