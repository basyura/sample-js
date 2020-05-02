class Store {
  constructor() {
    this.toDoList = [];
  }

  initialize = () => {
    this.toDoList = this.fetch();
  };

  fetch = () => {
    console.log("Store#fetch");
    return JSON.parse(localStorage.getItem("todoList")) || [];
  };
}

const store = new Store();
store.initialize();

export default store;
