<template>
    <div>
    <!-- <div class="loader-bg">
        <div class="loader-bar"></div>
    </div> -->
    <!-- [ Pre-loader ] end -->
    <div id="pcoded" class="pcoded">
      <div class="pcoded-overlay-box"></div>
      <div class="pcoded-container navbar-wrapper">
        <!-- [ Header ] start -->
        <NavbarComponent></NavbarComponent>
        <!-- [ chat user list ] start -->
        <div id="sidebar" class="users p-chat-user showChat">
          <div class="had-container">
            <div class="p-fixed users-main">
              <div class="user-box">
                <div class="chat-search-box">
                  <a class="back_friendlist">
                    <i class="feather icon-x"></i>
                  </a>
                  <div class="right-icon-control">
                    <div class="input-group input-group-button">
                      <input
                        type="text"
                        id="search-friends"
                        name="footer-email"
                        class="form-control"
                        placeholder="Search Friend"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn btn-primary waves-effect waves-light"
                          type="button"
                        >
                          <i class="feather icon-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main-friend-list">
                  <div
                    class="media userlist-box waves-effect waves-light"
                    data-id="1"
                    data-status="online"
                    data-username="Josephin Doe"
                  >
                    <a class="media-left" href="#!">
                      <img
                        class="media-object img-radius img-radius"
                        src="/admindek/images/avatar-3.jpg"
                        alt="Generic placeholder image "
                      />
                      <div class="live-status bg-success"></div>
                    </a>
                    <div class="media-body">
                      <div class="chat-header">Josephin Doe</div>
                    </div>
                  </div>
                  <div
                    class="media userlist-box waves-effect waves-light"
                    data-id="2"
                    data-status="online"
                    data-username="Lary Doe"
                  >
                    <a class="media-left" href="#!">
                      <img
                        class="media-object img-radius"
                        src="/admindek/images/avatar-2.jpg"
                        alt="Generic placeholder image"
                      />
                      <div class="live-status bg-success"></div>
                    </a>
                    <div class="media-body">
                      <div class="f-13 chat-header">Lary Doe</div>
                    </div>
                  </div>
                  <div
                    class="media userlist-box waves-effect waves-light"
                    data-id="3"
                    data-status="online"
                    data-username="Alice"
                  >
                    <a class="media-left" href="#!">
                      <img
                        class="media-object img-radius"
                        src="/admindek/images/avatar-4.jpg"
                        alt="Generic placeholder image"
                      />
                      <div class="live-status bg-success"></div>
                    </a>
                    <div class="media-body">
                      <div class="f-13 chat-header">Alice</div>
                    </div>
                  </div>
                  <div
                    class="media userlist-box waves-effect waves-light"
                    data-id="4"
                    data-status="offline"
                    data-username="Alia"
                  >
                    <a class="media-left" href="#!">
                      <img
                        class="media-object img-radius"
                        src="/admindek/images/avatar-3.jpg"
                        alt="Generic placeholder image"
                      />
                      <div class="live-status bg-default"></div>
                    </a>
                    <div class="media-body">
                      <div class="f-13 chat-header">
                        Alia<small class="d-block text-muted">10 min ago</small>
                      </div>
                    </div>
                  </div>
                  <div
                    class="media userlist-box waves-effect waves-light"
                    data-id="5"
                    data-status="offline"
                    data-username="Suzen"
                  >
                    <a class="media-left" href="#!">
                      <img
                        class="media-object img-radius"
                        src="/admindek/images/avatar-2.jpg"
                        alt="Generic placeholder image"
                      />
                      <div class="live-status bg-default"></div>
                    </a>
                    <div class="media-body">
                      <div class="f-13 chat-header">
                        Suzen<small class="d-block text-muted"
                          >15 min ago</small
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- [ chat user list ] end -->

        <!-- [ chat message ] start -->
        <div class="showChat_inner">
          <div class="media chat-inner-header">
            <a class="back_chatBox">
              <i class="feather icon-x"></i> Josephin Doe
            </a>
          </div>
          <div class="main-friend-chat">
            <div class="media chat-messages">
              <a class="media-left photo-table" href="#!">
                <img
                  class="media-object img-radius img-radius m-t-5"
                  src="/admindek/images/avatar-2.jpg"
                  alt="Generic placeholder image"
                />
              </a>
              <div class="media-body chat-menu-content">
                <div class="">
                  <p class="chat-cont">
                    I'm just looking around. Will you tell me something about
                    yourself?
                  </p>
                </div>
                <p class="chat-time">8:20 a.m.</p>
              </div>
            </div>
            <div class="media chat-messages">
              <div class="media-body chat-menu-reply">
                <div class="">
                  <p class="chat-cont">Ohh! very nice</p>
                </div>
                <p class="chat-time">8:22 a.m.</p>
              </div>
            </div>
            <div class="media chat-messages">
              <a class="media-left photo-table" href="#!">
                <img
                  class="media-object img-radius img-radius m-t-5"
                  src="/admindek/images/avatar-2.jpg"
                  alt="Generic placeholder image"
                />
              </a>
              <div class="media-body chat-menu-content">
                <div class="">
                  <p class="chat-cont">can you come with me?</p>
                </div>
                <p class="chat-time">8:20 a.m.</p>
              </div>
            </div>
          </div>
          <div class="chat-reply-box">
            <div class="right-icon-control">
              <div class="input-group input-group-button">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Write hear . . "
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-primary waves-effect waves-light"
                    type="button"
                  >
                    <i class="feather icon-message-circle"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- [ chat message ] end -->

        <div class="pcoded-main-container">
          <div class="pcoded-wrapper">
            <!-- [ navigation menu ] start -->
            <SlidebarComponent></SlidebarComponent>
            <!-- [ navigation menu ] end -->
            <slot />
            <!-- [ style Customizer ] start -->
            <div id="styleSelector"></div>
            <!-- [ style Customizer ] end -->
          </div>
        </div>
      </div>
    </div>
    <!-- Warning Section Starts -->
    <!-- Older IE warning message -->
    <!--[if lt IE 10]>
    <div class="ie-warning">
        <h1>Warning!!</h1>
        <p>You are using an outdated version of Internet Explorer, please upgrade
            <br/>to any of the following web browsers to access this website.
        </p>
        <div class="iew-container">
            <ul class="iew-download">
                <li>
                    <a href="http://www.google.com/chrome/">
                        <img src="./files/assets/images/browser/chrome.png" alt="Chrome">
                        <div>Chrome</div>
                    </a>
                </li>
                <li>
                    <a href="https://www.mozilla.org/en-US/firefox/new/">
                        <img src="./files/assets/images/browser/firefox.png" alt="Firefox">
                        <div>Firefox</div>
                    </a>
                </li>
                <li>
                    <a href="http://www.opera.com">
                        <img src="./files/assets/images/browser/opera.png" alt="Opera">
                        <div>Opera</div>
                    </a>
                </li>
                <li>
                    <a href="https://www.apple.com/safari/">
                        <img src="./files/assets/images/browser/safari.png" alt="Safari">
                        <div>Safari</div>
                    </a>
                </li>
                <li>
                    <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">
                        <img src="./files/assets/images/browser/ie.png" alt="">
                        <div>IE (9 & above)</div>
                    </a>
                </li>
            </ul>
        </div>
        <p>Sorry for the inconvenience!</p>
    </div>
<![endif]-->
    <!-- Warning Section Ends -->
  </div>
</template>

<script>
import NavbarComponent from "@/views/layouts/NavbarComponent";
import SlidebarComponent from "@/views/layouts/SlidebarComponent";

export default {
  name: "LayoutDefault",
  components: {
    NavbarComponent,
    SlidebarComponent,
  },
};
</script>

<style>
</style>
