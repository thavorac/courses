// Root Component
<template>
  <div>
    <!-- <MyButton v-on:added="addIsCalled()" state="add"></MyButton>
    <MyButton v-on:deleted="deleteIsCalled()" state="delete"></MyButton>

    <br/>
    <TodoItem v-on:marked-as-pending="pendingIsCalled()" v-on:marked-as-done="doneIsCalled()" :todo="todo"></TodoItem>
    <TodoItem v-on:marked-as-pending="pendingIsCalled()" v-on:marked-as-done="doneIsCalled()" :todo="todo1"></TodoItem> -->
    <!-- Option 1 -->
    <TodoItem 
        @todo-deleted="deleteTodo"
        :key="item.id" 
        v-for="item in taskList" 
        :todo="item">
    </TodoItem>
    
    <!-- Option 2 -->
    <!-- <template :key="todoItem.id" v-for="todoItem in taskList">
      <TodoItem :todo="todoItem"></TodoItem>
    </template> -->
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';

export default {
  name: 'App',
  data() {
    return {
      taskList: [
        {
          id: 1,
          task: "Wash cloths",
          state: "pending"
        },
        {
          id: 2,
          task: "Submit assignment",
          state: "pending"
        },
        {
          id: 3,
          task: "Write user story",
          state: "done"
        },
        {
          id: 4,
          task: "Read book",
          state: "pending"
        }
      ],
    }
  },
  components: {
    TodoItem // Local registration
  },
  methods: {
    deleteTodo(id) {
      // Remove 1 item from taskList
      // console.log('removing item from taskList');
      //console.log('remove this id', [id])
      // this.taskList = this.taskList.filter(todoItem => todoItem.id != id)
      let newTaskList = [];
      let item;
      for (item of this.taskList) {
        if(item.id != id) {
          newTaskList.push(item)
        }
      }
      this.taskList = newTaskList;
    },
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
