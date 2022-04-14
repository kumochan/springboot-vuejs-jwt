<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="left-side-menu">
    <div class="h-100" data-simplebar>
      <!-- User box -->
      <div class="user-box text-center">
        <img
          src="assets/images/users/user-1.jpg"
          alt="user-img"
          title="Mat Helme"
          class="rounded-circle avatar-md"
        />
        <div class="dropdown">
          <a
            href="javascript: void(0);"
            class="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
            data-toggle="dropdown"
            >Geneva Kennedy</a
          >
          <div class="dropdown-menu user-pro-dropdown">
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="fe-user mr-1"></i>
              <span>My Account</span>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="fe-settings mr-1"></i>
              <span>Settings</span>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="fe-lock mr-1"></i>
              <span>Lock Screen</span>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="fe-log-out mr-1"></i>
              <span>Logout</span>
            </a>
          </div>
        </div>
        <p class="text-muted">Admin Head</p>
      </div>

      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <ul id="side-menu">
          <li class="menu-title mt-2">Apps</li>
          <li>
            <a href="apps-calendar.html">
              <!-- <i data-feather="calendar"></i> -->
              <font-awesome-icon icon="user-plus" />
              <font-awesome-icon icon="sign-out-alt" />
              <font-awesome-icon icon="copyright" />
              <span> Calendar </span>
            </a>
          </li>

          <li>
            <a href="apps-chat.html">
              <!-- <i data-feather="message-square"></i> -->
              <span> Chat </span>
            </a>
          </li>
        </ul>
      </div>
      <!-- End Sidebar -->

      <div class="clearfix"></div>
    </div>
    <!-- Sidebar -left -->
  </div>
  <!-- Left Sidebar End -->
  <!-- <nav class="pcoded-navbar">
    <div class="nav-list">
      <div class="pcoded-inner-navbar main-menu">
        <div class="pcoded-navigation-label">Navigation</div>
        <ul class="pcoded-item pcoded-left-item">
          <li class="pcoded-hasmenu active pcoded-trigger">
            <a href="javascript:void(0)" class="waves-effect waves-dark">
              <span class="pcoded-micon"
                ><i class="feather icon-home"></i
              ></span>
              <span class="pcoded-mtext">Dashboard</span>
            </a>
            <ul class="pcoded-submenu">
              <router-link
                to="/"
                custom
                v-slot="{ href, navigate }"
              >
                <li :class="['active']">
                  <a :href="href" @click="navigate" class="waves-effect waves-dark">
                    <span class="pcoded-mtext">Default</span>
                  </a>
                </li>
              </router-link>
              <router-link
                to="/profile"
                custom
                v-slot="{ href, navigate }"
              >
                <li :class="['']">
                  <a :href="href" @click="navigate" class="waves-effect waves-dark">
                    <span class="pcoded-mtext">Profiles</span>
                  </a>
                </li>
              </router-link>
              <router-link
                to="/login"
                custom
                v-slot="{ href, navigate }"
              >
                <li :class="['']">
                  <a :href="href" @click="navigate" class="waves-effect waves-dark">
                    <span class="pcoded-mtext">Login</span>
                  </a>
                </li>
              </router-link>
              <router-link
                to="/order"
                custom
                v-slot="{ href, navigate }"
              >
                <li :class="['']">
                  <a :href="href" @click="navigate" class="waves-effect waves-dark">
                    <span class="pcoded-mtext">Order</span>
                  </a>
                </li>
              </router-link>
            </ul>
          </li>
          <li class="pcoded-hasmenu">
            <a href="javascript:void(0)" class="waves-effect waves-dark">
              <span class="pcoded-micon"
                ><i class="feather icon-sidebar"></i
              ></span>
              <span class="pcoded-mtext">Định nghĩa mô hình</span>
            </a>
            <ul class="pcoded-submenu">
              <li class="pcoded-hasmenu">
                <a href="javascript:void(0)" class="waves-effect waves-dark">
                  <span class="pcoded-mtext">Mô hình dữ liệu</span>
                </a>
              </li>
              <li class="pcoded-hasmenu">
                <a href="javascript:void(0)" class="waves-effect waves-dark">
                  <span class="pcoded-mtext">Mô hình chấm điểm</span>
                </a>
              </li>
              <li class="">
                <a
                  href="default/menu-bottom.html"
                  class="waves-effect waves-dark"
                >
                  <span class="pcoded-mtext">Bottom Menu</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="">
            <a href="default/navbar-light.html" class="waves-effect waves-dark">
              <span class="pcoded-micon">
                <i class="feather icon-menu"></i>
              </span>
              <span class="pcoded-mtext">Navigation</span>
            </a>
          </li>
          <li class="pcoded-hasmenu">
            <a href="javascript:void(0)" class="waves-effect waves-dark">
              <span class="pcoded-micon">
                <i class="feather icon-layers"></i>
              </span>
              <span class="pcoded-mtext">Widget</span>
              <span class="pcoded-badge label label-danger">100+</span>
            </a>
            <ul class="pcoded-submenu">
              <li class="">
                <a
                  href="default/widget-statistic.html"
                  class="waves-effect waves-dark"
                >
                  <span class="pcoded-mtext">Statistic</span>
                </a>
              </li>
              <li class="">
                <a
                  href="default/widget-data.html"
                  class="waves-effect waves-dark"
                >
                  <span class="pcoded-mtext">Data</span>
                </a>
              </li>
              <li class="">
                <a
                  href="default/widget-chart.html"
                  class="waves-effect waves-dark"
                >
                  <span class="pcoded-mtext">Chart Widget</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>

<script>
export default {
  name: "SlidebarComponent",
};
</script>
