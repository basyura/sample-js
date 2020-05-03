import React from "react";
import ToDoContainer from "../containers/ToDoContainer";

const FormPane = () => {
  console.log("FormPane#start");

  const container = ToDoContainer.useContainer();

  const titleRef = React.createRef();
  const descRef = React.createRef();

  const addTodo = (evnt) => {
    // cancel submit
    evnt.preventDefault();
    container.add({
      title: titleRef.current.value,
      description: descRef.current.value,
    });
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
