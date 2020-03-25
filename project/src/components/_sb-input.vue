<template>
  <div class="sb-input">
    <label class="sb-input__label">{{ label }}</label>
    <input class="sb-input__field" :type="type" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";

enum Type {
  text,
  password,
  number
}

@Component
export default class SBInput extends Vue {
  // Props
  @Prop({ default: "Label" }) label: string;
  @Prop({ default: false }) isFullWidth: boolean;
  @Prop({ default: "" }) placeholder: string;
  @Prop({ default: "text" }) type: Type;

  // State properties
  private classes: any = {
    "sb-input": true,
    "sb-input--full-width": this.isFullWidth
  };
}
</script>

<style lang="scss">
.sb-input {
  display: flex;
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
    // font-weight: bold;
    font-size: 16px;
    color: $sb-text-color--dark;
  }

  &.sb-input--full-width {
    width: 100%;
  }
}
</style>
