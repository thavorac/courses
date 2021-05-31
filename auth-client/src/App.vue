<template>
  <div id="app">
    <button @click="registerUser">Register</button> <br/>
    <hr/>
    {{ token }}
    <button @click="loginUser">Login</button> <br/>
    <hr/>
    {{ user.username }} <br/>
    {{ user.location }} <br/>
    {{ user.role }} <br/>
    <button @click="getUserInfo">Get user info</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      token: null,
      user: {}
    }
  },
  components: {
  },
  methods: {
    registerUser() {
      axios.post('http://localhost:3000/register', {
        username: 'Another User',
        password: 'blah blah'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    async loginUser() {
      const response = await axios.post('http://localhost:3000/login', {
        username: 'Another User',
        password: 'blah blah'
      });
      console.log('response', response)
      this.token = response.data.token
    },
    async getUserInfo() {
      const response = await axios.get('http://localhost:3000/getUserInfo', {
        headers: {
          authorization: this.token
        }
      })
      this.user = response.data.data.data
    }
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
</style>
