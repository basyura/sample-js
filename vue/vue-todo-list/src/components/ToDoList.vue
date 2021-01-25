<template>
  <div class="todo_container">
    <ul>
      <li v-bind:title="todo">
        {{ todo.slice(0, 10) + "..." }}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return { todo: "Go out to sea" };
  },
};
</script>

<style>
.todo_container {
  text-align: left;
}
</style>