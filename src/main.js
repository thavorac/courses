import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    INCREASE_COUNT(state) {
      state.count++
    },
    DECREASE_COUNT(state) {
      state.count--
    }
  },
  actions: {
    increaseCount(context){
      context.commit('INCREASE_COUNT')
    },
    decreaseCount(context){
      context.commit('DECREASE_COUNT')
    }
  }
})
const app = createApp(App)
app.use(store)
app.mount('#app')
