<template>
  <div>
    Value get from URL: {{ hello }}
    <router-link :to="{name: 'Page2'}">Go Page 2</router-link>
    <router-link :to="{name: 'Page3'}">Go Page 3</router-link>
    <h3>Page1</h3>
  </div>
</template>

<script>
export default {
  props: ["hello"]
}
</script>