import Vue from "vue";
import Vuex from "vuex";

// Modules
import chatModule from "./modules/chatModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    chatModule
  }
});
