export default function reducer(store, action) {
  console.log("sotre reducer : " + JSON.stringify(action));

  switch (action.type) {
    case "add":
      return store.add(action.todo);
    case "remove":
      return store.remove(action.todo);
    default:
  }
  return store;
}
