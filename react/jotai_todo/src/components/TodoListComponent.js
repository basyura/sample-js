import { useAtomValue } from "jotai";
import { todoListAtom } from "../atoms/Atoms";
import TodoComponent from "./TodoComponent";

const TodoListComponent = () => {
  const todoList = useAtomValue(todoListAtom);

  return (
    <div>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <TodoComponent todo={todo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoListComponent;
