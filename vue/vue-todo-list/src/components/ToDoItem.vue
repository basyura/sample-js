<template>
  <li class="todo-item" v-bind:class="{ done: done }" v-on:click="handleClick">
    <span v-if="done">✔</span>
    {{ text }}
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    done: {
      type: Boolean,
    },
  },
  emits: ["toggle"],
  methods: {
    handleClick() {
      this.$emit("toggle");
    },
  },
};
</script>