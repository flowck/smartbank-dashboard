ale<template>
  <div class="sb-login">
    <div class="sb-form__title">
      <h1>Forgot password?</h1>
      <p>
        Please insert your email address below, and we will send you the reset
        instructions.
      </p>
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
      <div class="sb-field sb-flex sb-flex--center-y sb-form__controls">
        <div>
          <router-link :to="{ name: 'Login' }">
            Login
          </router-link>
        </div>
        <div>
          <sb-button :isLoading="isLoading" @click="handleSubmit(onSubmit)">
            Send instructions
          </sb-button>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class SBForgorPassword extends Vue {
  private isLoading: boolean = false;
  private email: string = "";

  private onSubmit() {
    this.isLoading = !this.isLoading;
  }
}
</script>

<style lang="scss"></style>
