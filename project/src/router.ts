import Vue from "vue";
import Router from "vue-router";

// Layout components
import DashboardLayout from "./views/layouts/DashboardLayout.vue";
import AuthLayout from "./views/layouts/AuthLayout.vue";

// View components
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import ForgotPassword from "./views/ForgotPassword.vue";
import Chat from "./views/Chat.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: DashboardLayout,
      children: [
        {
          path: "",
          name: "Dashboard",
          component: Home,
          redirect: "chat"
        },
        {
          path: "chat",
          name: "Chat",
          component: Chat
        }
      ]
    },
    {
      path: "/auth",
      component: AuthLayout,
      redirect: "/auth/login",
      children: [
        {
          path: "login",
          name: "Login",
          component: Login
        },
        {
          path: "forgot",
          name: "ForgotPassword",
          component: ForgotPassword
        }
      ]
    }
  ]
});
