<template>
  <div class="sb-login">
    <div class="sb-form__title">
      <h1>Hello!</h1>
    </div>
    <div class="sb-field">
      <sb-input label="E-mail" type="email" v-model="email"></sb-input>
    </div>
    <div class="sb-field">
      <sb-input label="password" type="password" v-model="password"></sb-input>
    </div>
    <div class="sb-field sb-flex sb-flex--center-y sb-form__controls">
      <div>
        <router-link :to="{ name: 'ForgotPassword' }">
          Forgot password?
        </router-link>
      </div>
      <div>
        <sb-button :isLoading="isLoading" @click="isLoading = !isLoading"
          >Login</sb-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class SBLogin extends Vue {
  private isLoading: boolean = false;
  private email: string = "";
  private password: string = "";
}
</script>

<style lang="scss"></style>
