<template>
  <div>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters([
      "getPosts"
    ]), // mapGetters() will return ["getPosts"] => "getPosts"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
