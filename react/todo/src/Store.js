class Store {
  constructor() {
    this.toDoList = [];
  }

  fetch = () => {
    console.log("Store#fetch");
    this.toDoList = JSON.parse(localStorage.getItem("todoList")) || [];
  };

  add = (todo) => {
    console.log(todo);
    const newTodo = Object.assign({}, todo, {
      key: this.createUniqueKey(),
    });
    return this.update([...this.toDoList, newTodo]);
  };

  remove = (todo) => {
    return this.update(this.toDoList.filter((x) => x.key !== todo.key));
  };

  update = (toDoList) => {
    console.log("this.toDoList.arg:" + toDoList.length);
    const store = Object.assign({}, this, {
      toDoList: toDoList,
    });

    console.log("this.toDoList.count:" + this.toDoList.length);
    console.log("after.toDoList.count:" + store.toDoList.length);

    localStorage.setItem("todoList", JSON.stringify(toDoList));
    return store;
  };

  createUniqueKey = () => {
    return (
      new Date().getTime().toString(16) +
      Math.floor(1000 * Math.random()).toString(16)
    );
  };
}

const store = new Store();
store.fetch();

export default store;
