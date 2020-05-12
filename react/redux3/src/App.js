import React, { Component } from "react";
import { connect } from "react-redux";
import { addToDo, removeToDo } from "./actions";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  render() {
    const { onAddToDo, onRemoveToDo } = this.props;
    const { input } = this.state;
    return (
      <div className="App">
        <ul>
          {this.props.todos.map((todo) => {
            return (
              <li key={todo}>
                <span>{todo}</span>
                <button onClick={() => onRemoveToDo(todo)}>削除</button>
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          onChange={(e) => this.setState({ input: e.target.value })}
        />
        <button onClick={() => onAddToDo(input)}>追加</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToDo(todo) {
      dispatch(addToDo(todo));
    },
    onRemoveToDo(todo) {
      dispatch(removeToDo(todo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
