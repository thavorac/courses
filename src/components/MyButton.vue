<template>
  <button :class="state" v-on:click="clickButton">
    <span v-if="state == 'delete'">Delete</span>
    <span v-else>Add</span>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: ['state'],
  emits: ["added", "deleted"],
  data() {
    return {}
  },
  methods: {
    clickButton() {
      if(this.state == "add") {
        this.$emit("added");
      } else {
        this.$emit("deleted")
      }
    }
  }
}
</script>

<style scoped>
  button {
    border: 1px solid black;
    color: white;
    padding: 10px;
  }
  .delete {
    background-color: red;
  }
  .add {
    background-color: violet;
  }
</style>