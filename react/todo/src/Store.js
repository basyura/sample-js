class Store {}

const [toDoList, setToDoList] = useState(
  JSON.parse(localStorage.getItem("todoList")) || []
);

const Store = new Store();
