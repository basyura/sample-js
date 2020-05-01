import React, { useContext } from "react";
import AppContext from "./AppContext";

const FormPane = () => {
  console.log("FormPane#start");

  const titleRef = React.createRef();
  const descRef = React.createRef();

  const [toDoList, setToDoList] = useContext(AppContext);

  const addTodo = (evnt) => {
    // cancel submit
    evnt.preventDefault();
    const news = toDoList.concat({
      title: titleRef.current.value,
      description: descRef.current.value,
    });
    setToDoList(news);
    localStorage.setItem("todoList", JSON.stringify(news));

    titleRef.current.value = "";
    descRef.current.value = "";
  };

  return (
    <form className="App-form" onSubmit={(e) => addTodo(e)}>
      <div>
        <input ref={titleRef} placeholder="title" />
        <textarea ref={descRef} placeholder="description" />
      </div>
      <div>
        <button type="submit">登録</button>
      </div>
    </form>
  );
};

export default FormPane;
