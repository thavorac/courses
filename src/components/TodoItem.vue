<template>
  <div 
    v-on:mouseover="mouseOver()"
    v-on:mouseleave="mouseLeave()" 
    v-on:click="clickTodo()" 
    class="todo-item" 
    :class="todo.state">
      <span>{{ todo.task }}</span> <MyButton :id="todo.id" @deleted="deleteTodo" v-show="buttonVisible" state="delete">Delete</MyButton>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  emits: ["marked-as-pending", "marked-as-done", "todo-deleted"],
  data() {
    return {
      state: "pending",
      buttonVisible: false
    }
  },
  methods: {
    deleteTodo(id){
      console.log(id)
      this.$emit('todo-deleted', id)
    },
    mouseLeave(){
      this.buttonVisible = false
    },
    mouseOver() {
      console.log("mouse is over text from child");
      this.buttonVisible = true
    },
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
    padding: 15px;
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