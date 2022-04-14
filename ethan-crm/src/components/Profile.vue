<template>
  <layout-default>
    <div class="pcoded-content">
      <!-- [ breadcrumb ] start -->
      <div class="page-header card">
        <div class="row align-items-end">
          <div class="col-lg-8">
            <div class="page-header-title">
              <i class="feather icon-home bg-c-blue"></i>
              <div class="d-inline">
                <h5>Dashboard</h5>
                <span
                  >lorem ipsum dolor sit amet, consectetur adipisicing
                  elit</span
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="page-header-breadcrumb">
              <ul class="breadcrumb breadcrumb-title">
                <li class="breadcrumb-item">
                  <a href="index-2.html"><i class="feather icon-home"></i></a>
                </li>
                <li class="breadcrumb-item"><a href="#!">Dashboard</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- [ breadcrumb ] end -->
      <div class="pcoded-inner-content">
        <div class="main-body">
          <div class="page-wrapper">
            <div class="page-body">
              <!-- [ page content ] start -->
              <div class="row">
                <div class="col-md-12 col-xl-4">
                  <div class="card comp-card">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col">
                          <h6 class="m-b-25">
                            {{ currentUser.username }} Profile
                          </h6>
                          <h3 class="f-w-400 text-c-blue">
                            {{ currentUser.id }} / {{ currentUser.email }}
                          </h3>
                          <p class="m-b-0">
                            {{ currentUser.accessToken.substring(0, 20) }} ...
                            {{
                              currentUser.accessToken.substr(
                                currentUser.accessToken.length - 20
                              )
                            }}
                          </p>
                          <strong>Authorities:</strong>
                          <ul>
                            <li v-for="role in currentUser.roles" :key="role">
                              {{ role }}
                            </li>
                          </ul>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-eye bg-c-blue"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- [ page content ] end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../views/layouts/LayoutDefault.vue";
export default {
  name: "Profile",
  components: {
  },
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>