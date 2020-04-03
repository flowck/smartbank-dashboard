<template>
  <aside class="sb-sidebar" :style="{ width: `${width}px` }">
    <div class="sb-sidebar__logo">
      <h1>S.</h1>
    </div>

    <nav class="sb-sidebar__nav">
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
          <router-link :to="{ name: 'Chat' }">
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

    <div class="sb-sidebar__logout" @click="onLogout">
      <i class="fas fa-sign-out-alt"></i>
    </div>
  </aside>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class extends Vue {
  // Props
  @Prop({ default: 80 }) width!: number;

  // Event emitters
  private onLogout(event: Event) {
    this.$emit("logout", event);
  }
}
</script>

<style lang="scss">
.sb-sidebar {
  height: 100%;
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  background-color: $sb-color-white;

  & div {
    display: flex;
    justify-content: center;
  }

  .sb-sidebar__logo {
    padding-top: 30px;
  }

  .sb-sidebar__logout {
    cursor: pointer;
    padding-bottom: 30px;
    transition: color 0.5s;

    &:hover {
      color: $sb-color-blue;
    }
  }

  .sb-sidebar__nav {
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

          &.router-link-exact-active.router-link-active {
            color: $sb-color-blue;
          }
        }
      }
    }
  }
}
</style>
