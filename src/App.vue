<template>
This is root component <br/>
  <div id="wrapper">
    <ComponentA></ComponentA>
    <ComponentB></ComponentB>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

export default {
  name: 'App',
  components: {
    ComponentA,
    ComponentB
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
#wrapper {
  display: flex;
  justify-content: space-between;
  width: 400px;
}
</style>
