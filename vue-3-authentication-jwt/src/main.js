import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from './plugins/font-awesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faCopyright
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faCopyright);

// Vue.config.productionTip = false;
// import LayoutDefault from '@/views/layouts/LayoutDefault.vue';

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  // .component('LayoutDefault', LayoutDefault)
  .mount("#app");
