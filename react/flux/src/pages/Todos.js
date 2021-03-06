import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
    constructor (){
        super();
        this.state = {
            todos: TodoStore.getAll()
        }
    }

    componentDidMount() {
        TodoStore.on("change", () => {
            this.setState({
                todos: TodoStore.getAll()
            })
        })
    }

    reloadTodos() {
        TodoActions.reloadTodos();
    }


    render() {
        const { todos } = this.state;
        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
        });
    
        return (
            <div>
                <button onClick={this.reloadTodos.bind(this)}>reload</button>
                <h1>Todos : {TodoComponents.length}</h1>
                <ul> {TodoComponents} </ul>
            </div>
        )
    }
}