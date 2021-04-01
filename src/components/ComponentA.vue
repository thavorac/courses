<template>
  <div>
    <span>Count: {{count}}</span>
    <button v-on:click="increase()">Increase</button>
  </div>
</template>
<script>
export default {
  methods: {
    increase() {
      this.$store.dispatch("increaseCount")
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>
<style scoped>
  div {
    border: 1px solid black;
    background-color: aquamarine;
    width: 100px;
    height: 100px;
  }
</style>