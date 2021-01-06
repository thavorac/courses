var btnSave = document.getElementById("btnSavePost");
btnSave.addEventListener("click", savePost);

function savePost() {
  const formData = new FormData(document.querySelector('form'))
  let dataToSubmit = {};
  for (var pair of formData.entries()) {
    dataToSubmit[pair[0]] = pair[1];
  }
  axios.post('http://localhost:3000/post', dataToSubmit)
  .then(result => {
    console.log(result);
    // render new post
    let parentPost = document.getElementById("parent-post");

    let childPost = document.createElement("div");
    childPost.innerHTML = `
    <div class="card is-post is-simple">
                <!-- Main wrap -->
                <div class="content-wrap">
                    <!-- Header -->
                    <div class="card-heading">
                        <!-- User image -->
                        <div class="user-block">
                            <div class="image">
                                <img src="assets/img/avatars/bobby.jpg" data-demo-src="assets/img/avatars/bobby.jpg" data-user-popover="8" alt="">
                            </div>
                            <div class="user-info">
                                <a href="#">Bobby Brown</a>
                                <span class="time">July 26 2018, 11:14am</span>
                            </div>
                        </div>
                        <!-- /partials/pages/feed/dropdowns/feed-post-dropdown.html -->
                        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                                <div class="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                </div>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                            <div class="media-content">
                                                <h3>Bookmark</h3>
                                                <small>Add this post to your bookmarks.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="dropdown-item">
                                        <div class="media">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                            <div class="media-content">
                                                <h3>Notify me</h3>
                                                <small>Send me the updates.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr class="dropdown-divider">
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                                            <div class="media-content">
                                                <h3>Flag</h3>
                                                <small>In case of inappropriate content.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Header -->
            
                    <!-- Post body -->
                    <div class="card-body">
                        <!-- Post body text -->
                        <div class="post-text">
                            <p>${result.data.data.text}</p>
                        </div>
                        <!-- Post actions -->
                        <div class="post-actions">
                            <!-- /partials/pages/feed/buttons/feed-post-actions.html -->
                            <div class="like-wrapper">
                                <a href="javascript:void(0);" class="like-button">
                                    <i class="mdi mdi-heart not-liked bouncy"></i>
                                    <i class="mdi mdi-heart is-liked bouncy"></i>
                                    <span class="like-overlay"></span>
                                </a>
                            </div>
            
                            <div class="fab-wrapper is-share">
                                <a href="javascript:void(0);" class="small-fab share-fab modal-trigger" data-modal="share-modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link-2"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </a>
                            </div>
            
                            <div class="fab-wrapper is-comment">
                                <a href="javascript:void(0);" class="small-fab">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- /Post body -->
            
                    <!-- Post footer -->
                    <div class="card-footer">
                        <!-- Followers -->
                        <div class="likers-group">
                            <img src="assets/img/avatars/daniel.jpg" data-demo-src="assets/img/avatars/daniel.jpg" data-user-popover="3" alt="">
                            <img src="assets/img/avatars/elise.jpg" data-demo-src="assets/img/avatars/elise.jpg" data-user-popover="6" alt="">
                        </div>
                        <div class="likers-text">
                            <p>
                                <a href="#">Daniel</a> and
                                <a href="#">Elise</a>
                            </p>
                            <p>liked this</p>
                        </div>
                        <!-- Post statistics -->
                        <div class="social-count">
                            <div class="likes-count">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                <span>2</span>
                            </div>
                            <div class="shares-count">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link-2"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                <span>0</span>
                            </div>
                            <div class="comments-count">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                    <!-- /Post footer -->
                </div>
                <!-- /Main wrap -->
            
                <!-- Post #6 comments -->
                <div class="comments-wrap is-hidden">
                    <!-- Header -->
                    <div class="comments-heading">
                        <h4>
                            Comments
                            <small>(0)</small>
                        </h4>
                        <div class="close-comments">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                    </div>
                    <!-- /Header -->
            
                    <!-- Comments body -->
                    <div class="comments-body has-slimscroll">
                        <div class="comments-placeholder">
                            <img src="assets/img/icons/feed/bubble.svg" alt="">
                            <h3>Nothing in here yet</h3>
                            <p>Be the first to post a comment.</p>
                        </div>
                    </div>
                    <!-- /Comments body -->
            
                    <!-- Comments footer -->
                    <div class="card-footer">
                        <div class="media post-comment has-emojis">
                            <!-- Textarea -->
                            <div class="media-content">
                                <div class="field">
                                    <p class="control">
                                        <textarea class="textarea comment-textarea" rows="5" placeholder="Write a comment..." id="post-comment-textarea-6"></textarea>
                                    </p>
                                </div>
                                <!-- Additional actions -->
                                <div class="actions">
                                    <div class="image is-32x32">
                                        <img class="is-rounded" src="assets/img/avatars/jenna.png" data-demo-src="assets/img/avatars/jenna.png" data-user-popover="0" alt="">
                                    </div>
                                    <div class="toolbar">
                                        <div class="action is-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                                        </div>
                                        <div class="action is-emoji" id="post-comment-button-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                        </div>
                                        <div class="action is-upload">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                            <input type="file">
                                        </div>
                                        <a class="button is-solid primary-button raised">Post Comment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Comments footer -->
                </div>
                <!-- /Post #6 comments -->
              </div>
    `;
    parentPost.appendChild(childPost);
  }).catch(err => {
    console.log(err);
  });
}