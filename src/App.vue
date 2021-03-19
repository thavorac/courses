<template>
  <div>
    <MyButton v-on:added="addIsCalled()" state="add"></MyButton>
    <MyButton v-on:deleted="deleteIsCalled()" state="delete"></MyButton>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {},
  methods: {
    addIsCalled() {
      console.log('added');
    },
    deleteIsCalled() {
      console.log('deleted');
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
