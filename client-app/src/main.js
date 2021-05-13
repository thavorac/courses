import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state() {
    return {
      posts: [],
      user: {}
    }
  },
  mutations: {
    UPDATE_POSTS(state, posts) {
      console.log('mutations', posts)
      state.posts = posts.data
    },
    UPDATE_USER(state, user) {
      state.user = user
    }
  },
  actions: {
    updatePosts(context, posts) {
      console.log('actions', posts)
      context.commit('UPDATE_POSTS', posts)
    }
  },
  getters: {
    getPosts(state) {
      return state.posts
    },
    getUser(state) {
      return state.user
    }
  }
})
const app = createApp(App)
app.use(store)
app.mount('#app')
