<template>
  <div class="todo-item" :class="todo.state">
    <span>{{ todo.task }}</span>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"]
}
</script>

<style scoped>
  .todo-item {
    border: 1px solid black;
    width: 400px;
    padding: 10px;
  }
  .done {
    background-color: skyblue;
    color: white;
  }
  .pending {
    background-color: grey;
    color: black;
  }
</style>