<template>
  <button @click="onClick" :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";

@Component
export default class SBButton extends Vue {
  // Props
  @Prop({ default: false }) isFullWidth!: boolean;

  // State properties
  private classes: any = {
    "sb-button": true,
    "sb-button--full-width": this.isFullWidth
  };

  // Emit on click event
  private onClick(event: Event) {
    return this.$emit("click", event);
  }
}
</script>

<style lang="scss">
.sb-button {
  border: none;
  display: block;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  color: $sb-color-white;
  background-color: $sb-color-blue;

  &:active,
  &:focus {
    outline: none;
  }

  &.sb-button--full-width {
    width: 100%;
  }
}
</style>
