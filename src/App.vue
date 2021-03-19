<template>
  <div>
    <MyButton v-on:added="addIsCalled()" state="add"></MyButton>
    <MyButton v-on:deleted="deleteIsCalled()" state="delete"></MyButton>

    <br/>
    <TodoItem v-on:marked-as-pending="pendingIsCalled()" v-on:marked-as-done="doneIsCalled()" :todo="todo"></TodoItem>
    <TodoItem v-on:marked-as-pending="pendingIsCalled()" v-on:marked-as-done="doneIsCalled()" :todo="todo1"></TodoItem>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';

export default {
  name: 'App',
  data() {
    return {
      todo: {
        task: "hello",
        state: "done"
      },
      todo1: {
        task: "hello",
        state: "pending"
      }
    }
  },
  components: {
    TodoItem
  },
  methods: {
    addIsCalled() {
      console.log('added');
    },
    deleteIsCalled() {
      console.log('deleted');
    },
    pendingIsCalled() {
      console.log("pending");
    },
    doneIsCalled() {
      console.log("done");
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
