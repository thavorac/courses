<template>
  <div v-on:click="clickTodo()" class="todo-item" :class="todo.state">
    <span>{{ todo.task }}</span>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  emits: ["marked-as-pending", "marked-as-done"],
  data() {
    return {
      state: "pending"
    }
  },
  methods: {
    clickTodo() {
      console.log('clicked');
      if(this.state == "pending") {
        this.state = "done"
        this.$emit("marked-as-done");
      } else {
        this.state = "pending"
        this.$emit("marked-as-pending");
      }
    }
  }
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