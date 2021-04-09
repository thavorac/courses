<template>
  <div class="container">
    <Post v-for="postItem in postList" :key="postItem.id" :postItem="postItem"></Post>
  </div>
</template>

<script>
import Post from './components/Post.vue'

export default {
  name: 'App',
  components: {
    Post
  },
  computed: {
    postList() {
      return this.$store.getters.getPosts
    }
  }
}
</script>

<style>
@import "//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css";
</style>
