ale<template>
  <div class="sb-login">
    <div class="sb-form__title">
      <h1>Hello!</h1>
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <ValidationProvider
        v-slot="{ errors }"
        name="E-mail"
        rules="required|email"
      >
        <div class="sb-field">
          <sb-input label="E-mail" type="email" v-model="email" name="email" />
          <span class="sb-form__error">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
        <div class="sb-field">
          <sb-input
            label="Password"
            type="password"
            v-model="password"
            name="password"
          />
          <span class="sb-form__error">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <div class="sb-field sb-flex sb-flex--center-y sb-form__controls">
        <div>
          <router-link :to="{ name: 'ForgotPassword' }">
            Forgot password?
          </router-link>
        </div>
        <div>
          <sb-button :isLoading="isLoading" @click="handleSubmit(onSubmit)">
            Login
          </sb-button>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class SBLogin extends Vue {
  private isLoading: boolean = false;
  private email: string = "";
  private password: string = "";

  private onSubmit() {
    this.isLoading = !this.isLoading;
  }
}
</script>

<style lang="scss"></style>
