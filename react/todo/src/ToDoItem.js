import React, { Component } from "react";
import "./TodoItem.css";

class ToDoItem extends Component {
  render() {
    console.log("ToDoItem#start");
    const { title, description, ...props } = this.props;

    return (
      <div className="ToDoListItem" {...props}>
        <div className="ToDoListItem-title">{title}</div>
        <div className="ToDoListItem-description">{description}</div>
      </div>
    );
  }
}

export default ToDoItem;
