<template>
  <nav class="pcoded-navbar">
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
  </nav>
</template>

<script>
export default {
  name: "SlidebarComponent",
};
</script>
