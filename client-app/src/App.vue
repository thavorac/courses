<template>
  <div class="container my-5">
		<div class="row">
			<div class="col-3">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">Special title treatment</h5>
						<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
						<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
						<a href="#" class="btn btn-sm btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
			<div class="col-6">

				<!--- Post Form Begins -->
        <post-form></post-form>
        <!--- Post Form Ends -->

				<!-- Post Begins -->
				<posts-section></posts-section>
				<!-- Post Ends -->
			</div>
			<div class="col-3">
				<div class="card">
					<div class="card-body p-3">
						<h5 class="card-title m-0">Friends</h5>
						<div class="list-group list-group-flush">
							<a href="#" class="list-group-item list-group-item-action text-primary">
							Justo moto pani
							</a>
							<a href="#" class="list-group-item list-group-item-action text-primary">Harry consectetur</a>
							<a href="#" class="list-group-item list-group-item-action text-primary">Dobi leo risus</a>
							<a href="#" class="list-group-item list-group-item-action text-primary">Gadot facilisis in</a>
							<a href="#" class="btn btn-sm btn-primary">View All</a>
						</div>
					</div>
				</div>
				<div class="card mt-4">
					<div class="card-body p-3">
						<h5 class="card-title m-0">Users</h5>
						<div class="list-group list-group-flush">
							<a href="#" class="list-group-item list-group-item-action text-primary">
							Cras justo odio
							</a>
							<a href="#" class="list-group-item list-group-item-action text-primary">Dapibus ac facilisis in</a>
							<a href="#" class="list-group-item list-group-item-action text-primary">Morbi leo risus</a>
							<a href="#" class="list-group-item list-group-item-action text-primary">Porta ac consectetur ac</a>
							<a href="#" class="btn btn-sm btn-primary">View All</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import axios from 'axios'
import PostsSection from './components/PostsSection'
import PostForm from './components/PostForm'
export default {
  name: 'App',
  data() {
    return {
      localPosts: []
    }
  },
  components: {
    PostsSection,
    PostForm
  },
  async mounted() {
    // Get data from server
    const response = await axios.get('http://localhost:3000/posts');
    // Go with this if you think this data is not shared with other component: Store data from server in local
    this.localPosts = response.data
    // Or go with this if you think this data will be reused again in other component: Store in vuex
    this.$store.dispatch("updatePosts", response.data)
  }
}
</script>
<style>
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css';
	@import 'https://use.fontawesome.com/releases/v5.6.1/css/all.css';
  .h7 {
			font-size: 0.9rem;
	}
</style>
