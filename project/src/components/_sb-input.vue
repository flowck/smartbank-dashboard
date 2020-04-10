<template>
  <div class="sb-input">
    <label v-if="hasLabel" class="sb-input__label">{{ label }}</label>
    <input
      ref="inputField"
      class="sb-input__field"
      :type="fieldType"
      :name="name"
      :placeholder="placeholder"
      @input="$emit('input', $refs.inputField.value)"
      @keyup.enter="$emit('enter', $refs.inputField.value)"
    />
    <div
      @click="togglePasswordButton"
      v-if="type === 'password'"
      class="sb-input__icon sb-input__password"
    >
      <i
        title="Hide password"
        v-if="isPasswordVisible"
        class="far fa-eye-slash"
      ></i>
      <i title="Show password" v-else class="far fa-eye"></i>
    </div>
    <div class="sb-input__icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";

@Component
export default class SBInput extends Vue {
  // Props
  @Prop() name!: string;
  @Prop() label!: string;
  @Prop({ default: false }) isFullWidth!: boolean;
  @Prop({ default: "" }) placeholder!: string;
  @Prop({ default: "text" }) type!: string;
  @Prop({ default: true }) hasLabel!: boolean;
  @Prop({ default: false }) showPassword!: boolean;
  @Prop() value!: string;

  // State properties
  private fieldType: string = "";
  private isPasswordVisible: boolean = false;
  private classes: any = {
    "sb-input": true,
    "sb-input--full-width": this.isFullWidth
  };

  // Methods
  private togglePasswordButton() {
    if (this.isPasswordVisible) {
      this.isPasswordVisible = false;
      this.fieldType = this.type;
    } else {
      this.isPasswordVisible = true;
      this.fieldType = "text";
    }
  }

  // Lifecylce methods
  private mounted() {
    this.isPasswordVisible = this.showPassword;
    this.fieldType = this.type;
  }
}
</script>

<style lang="scss">
.sb-input {
  display: flex;
  position: relative;
  padding: 10px 20px;
  border-radius: 10px;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

  .sb-input__label {
    font-size: 10px;
    font-weight: bold;
    margin-bottom: 5px;
    color: $sb-text-color--light;
  }

  .sb-input__field {
    border: none;
    outline: none;
    font-size: 14px;
    padding-right: 20px;
    font-family: $sb-font--semi;
    color: $sb-text-color--dark;
    @include placeholder-color;
  }

  .sb-input__icon {
    top: 50%;
    right: 20px;
    position: absolute;
    transform: translateY(-50%);
    color: $sb-text-color--light;
  }

  &.sb-input--full-width {
    width: 100%;
  }
}
</style>
