class Store {
  constructor() {
    this.toDoList = [];
  }

  fetch = () => {
    console.log("Store#fetch");
    this.toDoList = JSON.parse(localStorage.getItem("todoList")) || [];
  };

  add = (todo) => {
    return this.update([...this.toDoList, todo]);
  };

  remove = (todo) => {
    return this.update(this.toDoList.filter((x) => x !== todo));
  };

  update = (toDoList) => {
    const store = Object.assign({}, this, {
      toDoList: toDoList,
    });
    localStorage.setItem("todoList", JSON.stringify(toDoList));
    return store;
  };
}

const store = new Store();

export default store;
