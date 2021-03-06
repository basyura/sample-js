import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor (){
        super();
        this.todos = [
            {
                id: 113464613,
                text: "Go Shopping",
                complete: false,
            },
            {
                id: 235684679,
                text: "Pay Bills",
                complete: true,
            }
        ]

    }

    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false,
        })

        this.emit("change")
    }

    receiveTodos(todos) {
        this.todos = todos
        this.emit("change")
    }

    getAll() {
        return this.todos
    }

    handleActions(action) {
        console.log("TodoStore received an action", action);
        switch (action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
                break
            }
            case "RECEIVE_TODOS": {
                this.receiveTodos(action.todos);
                break
            }
        }
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
// for debug
window.todoStore = todoStore;
window.dispatcher = dispatcher;

