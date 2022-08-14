import "./App.css";
import TodoRegisterComponent from "./components/TodoRegisterComponent";
import TodoListComponent from "./components/TodoListComponent";

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <TodoRegisterComponent />
      <TodoListComponent />
    </>
  );
}

export default App;
