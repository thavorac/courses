<template>
  <HelloWorld />
  <ChildComponent />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ChildComponent from './components/ChildComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ChildComponent
  }
}
</script>

<style>
</style>
