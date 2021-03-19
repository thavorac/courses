<template>
  <button :class="state" v-on:click="clickButton">
    <span v-if="state == 'delete'">Delete</span>
    <span v-else>Add</span>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  data() {
    return {
      state: 'delete'  // delete or add
    }
  },
  methods: {
    clickButton() {
      console.log('button is clicked')
    }
  }
}
</script>

<style scoped>
  button {
    border: 1px solid black;
  }
  .delete {
    background-color: red;
  }
  .add {
    background-color: violet;
  }
</style>