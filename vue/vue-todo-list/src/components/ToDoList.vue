<template>
  <div>
    <input v-model="inputValue" />
    &nbsp;<button v-on:click="handleClick">ToDoを追加</button>
  </div>
  <div>
    <input v-model="filterValue" placeholder="フィルタテキスト" />
    &nbsp;フィルタ
  </div>
  <ul>
    <ToDoItem
      v-for="todo in filteredTodoItems"
      v-bind:key="todo.id"
      v-bind:done="todo.done"
      v-on:toggle="todo.done = !todo.done"
    >
      {{ todo.text }}
    </ToDoItem>
  </ul>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";
export default {
  components: { ToDoItem },
  data() {
    return {
      inputValue: "",
      todoItems: [
        { id: 1, text: "Go out to sea" },
        { id: 2, text: "Invite the first member" },
      ],
      filterValue: "",
    };
  },
  computed: {
    filteredTodoItems() {
      if (!this.filterValue) {
        return this.todoItems;
      }
      return this.todoItems.filter((todo) => {
        return todo.text.includes(this.filterValue);
      });
    },
  },
  methods: {
    handleClick() {
      this.todoItems.push({
        id: this.todoItems.length + 1,
        text: this.inputValue,
      });
      this.inputValue = "";
    },
  },
};
</script>

<style>
.todo-item.done {
  background-color: #3fb983;
  color: #ffffff;
}
.todo_container {
  text-align: left;
}
</style>