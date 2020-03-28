<template>
  <div class="sb-dashboard-layout">
    <aside class="sb-navbar">
      <div class="sb-navbar__logo">
        <h1>S.</h1>
      </div>

      <nav class="sb-navbar__nav">
        <ul>
          <li>
            <router-link to="#">
              <i class="far fa-chart-bar"></i>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <i class="fas fa-dollar-sign"></i>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <i class="far fa-bell"></i>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <i class="far fa-comment-dots"></i>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <i class="fas fa-map-marker-alt"></i>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <i class="fas fa-sliders-h"></i>
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="sb-navbar__logout">
        <i class="fas fa-sign-out-alt"></i>
      </div>
    </aside>
    <section class="sb-views">
      <sb-card>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facilis,
        accusamus vel, soluta molestias blanditiis explicabo eos ullam
        temporibus quo excepturi quasi dicta ipsam? Sit quod sunt aliquid
        recusandae repellat?

        <sb-button>Hello</sb-button>
      </sb-card>
      <br />
      <sb-input label="E-mail"></sb-input>
      <br />
      <sb-search></sb-search>
      <router-view></router-view>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DashboardLayout extends Vue {}
</script>

<style lang="scss">
$navbar-width: 80px;
$views-width: calc(100% - #{$navbar-width});

.sb-dashboard-layout {
  height: 100%;
}

.sb-navbar {
  height: 100%;
  display: flex;
  position: fixed;
  width: $navbar-width;
  flex-direction: column;
  justify-content: space-between;
  background-color: $sb-color-white;

  & div {
    display: flex;
    justify-content: center;
  }

  .sb-navbar__logo {
    padding-top: 30px;
  }

  .sb-navbar__logout {
    padding-bottom: 30px;
  }

  .sb-navbar__nav {
    width: 100%;
    display: flex;

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;

      li {
        display: flex;
        justify-content: center;
        list-style: none;
        margin-bottom: 40px;

        &:last-child {
          margin-bottom: 0;
        }

        a {
          color: $sb-text-color--middle;

          &:hover {
            color: $sb-color-blue;
          }
        }
      }
    }
  }
}

.sb-views {
  float: right;
  height: 100%;
  padding: 30px;
  width: $views-width;
}
</style>
