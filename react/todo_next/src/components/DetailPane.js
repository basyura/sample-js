import React from "react";
import ToDoContainer from "../containers/ToDoContainer";

const DetailPane = () => {
  const container = ToDoContainer.useContainer();

  return (
    <div>
      {container.selectedToDoList.map((todo) => (
        <>
          <div className="ToDoListItem" key={todo.key}>
            <div style={{ display: "flex" }}>
              <div className="ToDoListItem-title" style={{ width: "95%" }}>
                <span>{todo.title}</span>
              </div>
              <div style={{ width: "5%" }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    container.unselectTodo(todo);
                  }}
                  style={{ marginLeft: "-10px" }}
                >
                  x
                </button>
              </div>
            </div>
            <div className="ToDoListItem-description-detail">
              {todo.description.split("\n").map((v) => (
                <div>{v}</div>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default DetailPane;
