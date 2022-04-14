import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import store from "./store";

// createApp(App).mount('#app')
createApp(App)
  .use(router)
  .use(store)
  // .component("font-awesome-icon", FontAwesomeIcon)
  // .component('LayoutDefault', LayoutDefault)
  .mount("#app");
