<template>
  <div>
    <span>Count: {{count}}</span>
    <button v-on:click="decreaseCount()">Decrease</button>
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    decreaseCount() {
      this.$store.dispatch("decreaseCount")
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