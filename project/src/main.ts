import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./components/globals";
// Main styles
import "./assets/styles/main.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
