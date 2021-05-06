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
                                    <textarea class="form-control" id="message" rows="3" placeholder="What are you thinking..."></textarea>
                                </div>

                            </div>
                        </div>
                        <div class="text-right"><button type="submit" class="btn btn-primary">share</button></div>
                    </div>
                </section>
                <!--- Post Form Ends -->

				<!-- Post Begins -->
				<section v-for="post in getPosts" :key="post.id" class="card mt-4">
					<div class="border p-2">
						<!-- post header -->
						<div class="row m-0">
							<div class="">
								<a class="text-decoration-none" href="#">
									<img class="" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50" alt="...">
								</a>
							</div>
							<div class="flex-grow-1 pl-2">
								<a class="text-decoration-none" href="#">
									<h2 class="text-capitalize h5 mb-0">Shushant Singh</h2>
								</a> 
								<p class="small text-secondary m-0 mt-1">1 day ago</p>
							</div>
							
							<div class="dropdown">
								<a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i class="fas fa-chevron-down"></i>
								</a>

								<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<a class="dropdown-item text-primary" href="#">Edit</a>
									<a class="dropdown-item text-primary" href="#">Delete</a>
								</div>
							</div>
						</div>
						<!-- post body -->
						<div class="">
							<p class="my-2">
								{{post.content}}
							</p>
						</div>
						<hr class="my-1">
						<!-- post footer begins -->
						<footer class="">
							<!-- post actions -->
							<div class="">
								<ul class="list-group list-group-horizontal">
									<li class="list-group-item flex-fill text-center p-0 px-lg-2 border border-0">
										<a class="small text-decoration-none" href="#">
											<i class="far fa-thumbs-up"></i> {{post.nbLike}} Like
										</a>
									</li>
									<li class="list-group-item flex-fill text-center p-0 px-lg-2 border border-right-0 border-top-0 border-bottom-0">
										<a class="small text-decoration-none" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
											<i class="fas fa-comment-alt"></i> {{post.nbComment}} Comment
										</a>
									</li>
									<li class="list-group-item flex-fill text-center p-0 px-lg-2 border border-right-0 border-top-0 border-bottom-0 ">
										<a class="small text-decoration-none" href="#">
											<i class="fas fa-share"></i> {{post.nbShare}} Share
										</a>
									</li>
								</ul>
							</div>
							

							<!-- collapsed comments begins -->
							<div class="collapse" id="collapseExample">
								<div class="card border border-right-0 border-left-0 border-bottom-0 mt-1">
									<!-- new comment form -->
									<section class="mt-3">
										<form action="">
											<div class="input-group input-group">
												<input type="text" class="form-control" placeholder="Write Comment" aria-label="Recipient's username" aria-describedby="basic-addon2">
												<div class="input-group-append">
													<a class="text-decoration-none text-white btn btn-primary" href="#" role="button">Comment</a>
												</div>
											</div>
										</form>
									</section>
									<!-- comment card bgins -->
									<section>
										<div class="card p-2 mt-3">
											<!-- comment header -->
											<div class="d-flex">
												<div class="">
													<a class="text-decoration-none" href="#">
														<img class="profile-pic" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="40" height="40" alt="...">
													</a>
												</div>
												<div class="flex-grow-1 pl-2">
													<a class="text-decoration-none text-capitalize h6 m-0" href="#">Tarzan</a>
													<p class="small m-0 text-muted">27 mins ago</p>
												</div>
												<div >
													<div class="dropdown">
														<a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														<i class="fas fa-chevron-down"></i>
														</a>

														<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
															<a class="dropdown-item text-primary" href="#">Edit</a>
															<a class="dropdown-item text-primary" href="#">Delete</a>
														</div>
													</div>
												</div>
											</div>
											<!-- comment header -->
											<!-- comment body -->
											<div class="card-body p-0">
												<p class="card-text h7 mb-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
												<a class="card-link small" href="#">
													<i class="far fa-thumbs-up"></i> 20 Like
												</a>
											</div>
										</div>
									</section>
									<!-- comment card ends -->

								</div>
							</div>
							<!-- collapsed comments ends -->
						</footer>
						<!-- post footer ends -->
					</div>
				</section>
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
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      localPosts: []
    }
  },
  components: {
  },
  async mounted() {
    // Get data from server
    const response = await axios.get('http://localhost:3000/posts');
    // Go with this if you think this data is not shared with other component: Store data from server in local
    this.localPosts = response.data
    // Or go with this if you think this data will be reused again in other component: Store in vuex
    this.$store.dispatch("updatePosts", response.data)
  },
  computed: {
      ...mapGetters([
        "getPosts"
      ]), // mapGetters() will return ["getPosts"] => "getPosts"
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
