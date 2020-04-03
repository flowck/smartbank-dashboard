<template>
  <div class="sb-dashboard-layout">
    <Sidebar @logout="logout" :width="sidebarWidth"></Sidebar>
    <section class="sb-views">
      <router-view></router-view>
    </section>
  </div>
</template>

<script lang="ts">
import { Column } from "../../interfaces/index";
import { Component, Vue } from "vue-property-decorator";
import Sidebar from "./partials/Sidebar.vue";

@Component({
  components: {
    Sidebar
  }
})
export default class DashboardLayout extends Vue {
  private sidebarWidth = 80;
  /**
   * On user logout
   */
  private logout() {
    this.$router.push({ name: "Login" });
  }
}
</script>

<style lang="scss">
$navbar-width: 80px;
$views-width: calc(100% - #{$navbar-width});

.sb-dashboard-layout {
  height: 100%;
}

.sb-views {
  float: right;
  height: 100%;
  padding: 30px;
  width: $views-width;
}

@media screen and (max-width: 450px) {
  .sb-navbar {
    bottom: 0;
    width: 100%;
    height: 60px;
    z-index: 900;
    display: fixed;
    flex-direction: row;
    position: asbolute;
    box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.1);

    .sb-navbar__logo {
      display: none;
    }

    .sb-navbar__nav {
      width: 85%;
      ul {
        justify-content: space-between;
        flex-direction: initial;
        padding: 0 10px;

        li {
          height: 100%;
          display: flex;
          align-items: center;

          a {
            font-size: 18px;
          }
        }
      }
    }

    .sb-navbar__logout {
      width: 15%;
      padding: 0;
      height: 100%;
      display: flex;
      font-size: 18px;
      align-items: center;
    }
  }

  .sb-views {
    width: 100%;
    padding: 10px;
  }
}
</style>
