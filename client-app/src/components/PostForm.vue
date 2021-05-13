<template>
  <section class="card">
      <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                  <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                      a Post</a>
              </li>
          </ul>
      </div>
      <div class="card-body">
          <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                  <div class="form-group">
                      <label class="sr-only" for="message">post</label>
                      <textarea 
                        v-model="form.content" 
                        class="form-control" 
                        id="message" rows="3" 
                        @input="validateContent"
                        placeholder="What are you thinking...">
                      </textarea>
                      <span v-if="hasError" class="form-error-message">{{error.message}}</span>
                  </div>
              </div>
          </div>
          <div class="text-right">
            <button @click="submitPost" type="button" class="btn btn-primary">share</button>
            </div>
      </div>
  </section>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          content: '',
          user: 'Thavorac'
        },
        error: {}
      }
    },
    methods: {
      validateContent() {
        if (this.form.content != "") {
          this.error.message = null
        }
      },
      submitPost() {
        // Validation content
        if (this.form.content == "") {
          this.error.message = "Content should not be empty"
        }
        // Post content to server
        axios.post('http://localhost:3000/posts', this.form)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    computed: {
      hasError() {
        if(this.error.message) return true
        return false
      }
    }
  }
</script>
<style scoped>
  .form-error-message {
    color: red
  }
</style>