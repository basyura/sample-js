import React, { Component } from "react";
import TodoListItem from "./ToDoListItem";
import "./App.css";

class App extends Component {
  state = {
    todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  };

  addTodo = (item, callBack) => {
    this.setState(
      {
        todoList: this.state.todoList.concat(item),
      },
      () => {
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        callBack && callBack();
      }
    );
  };

  removeTodo = (item, callBack) => {
    this.setState(
      {
        todoList: this.state.todoList.filter((x) => x !== item),
      },
      () => {
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        callBack && callBack();
      }
    );
  };

  render() {
    return (
      <div className="App">
        <div>create-react-appを使ってReactでToDoリストを作成するぞ</div>
        <div>https://qiita.com/rioc/items/8723c236e10d989e827d</div>
        <hr />
        <div>
          <form
            className="App-form"
            onSubmit={(e) => {
              // cancel submit
              e.preventDefault();
              const titleElement = e.target.elements["title"];
              const descriptionElement = e.target.elements["description"];
              this.addTodo(
                {
                  title: titleElement.value,
                  description: descriptionElement.value,
                },
                () => {
                  titleElement.value = "";
                  descriptionElement.value = "";
                }
              );
            }}
          >
            <div>
              <input id="title" placeholder="title" />
              <textarea id="description" placeholder="description" />
            </div>
            <div>
              <button type="submit">登録</button>
            </div>
          </form>
          <div>
            {this.state.todoList.map((todo) => (
              <TodoListItem
                key={todo.title}
                title={todo.title}
                description={todo.description}
                onClick={() => this.removeTodo(todo)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
