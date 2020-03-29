<template>
  <div class="sb-auth">
    <div class="wrap">
      <nav class="sb-links">
        <ul>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </nav>

      <div class="sb-form">
        <router-view></router-view>
      </div>

      <div class="sb-info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia vero
        sequi ipsam eos exercitationem quam quibusdam accusantium obcaecati!
        Debitis blanditiis eum maxime, nisi reiciendis quae dolor quam porro quo
        officiis.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class SBAuthLayout extends Vue {}
</script>

<style lang="scss">
.sb-auth {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .wrap {
    width: 500px;
    height: 80%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-between;
  }
}

.sb-links {
  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 40px;

      &:first-child {
        margin-left: 0;
      }

      a {
        font-size: 12px;
        font-family: $sb-font--bold;
        color: $sb-text-color--middle;

        &:hover {
          color: $sb-text-color--blue;
        }
      }
    }
  }
}

.sb-form {
  .sb-form__title {
    margin-bottom: 30px;
  }

  .sb-form__controls {
    margin-top: 30px;
    justify-content: space-between;

    div {
      height: inherit;
      display: flex;
      align-items: center;
    }

    a {
      font-size: 12px;
      font-family: $sb-font--bold;
      color: $sb-text-color--light;

      &:hover {
        color: $sb-text-color--blue;
      }
    }
  }
}

.sb-info {
  line-height: 2;
  color: $sb-text-color--light;
  font-size: 12px;
  text-align: center;
  font-family: $sb-font--bold;
}
</style>
