import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import { required, email } from "vee-validate/dist/rules";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";

// Helper to import components dynamically
import "./components/globals";

// Main styles
import "./assets/styles/main.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

// Global componets
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
extend("email", email);
extend("required", required);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
