export default function reducer(store, action) {
  console.log("sotre reducer : " + JSON.stringify(action));

  const update = (toDoList) => {
    const newStore = Object.assign({}, store, {
      toDoList: toDoList,
    });
    localStorage.setItem("todoList", JSON.stringify(toDoList));
    return newStore;
  };

  switch (action.type) {
    case "add":
      return update([...store.toDoList, action.todo]);
    case "remove":
      return update(store.toDoList.filter((x) => x !== action.todo));
    default:
  }
  return store;
}
