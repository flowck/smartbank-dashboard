<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";

@Component
export default class SBButton extends Vue {
  // Props
  @Prop({ default: false }) isFullWidth: boolean;

  // State properties
  private classes: any = {
    "sb-button": true,
    "sb-button--full-width": this.isFullWidth
  };
}
</script>

<style lang="scss">
.sb-button {
  border: none;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  color: $sb-color-white;
  background-color: $sb-color-blue;

  &.sb-button--full-width {
    width: 100%;
  }
}
</style>
