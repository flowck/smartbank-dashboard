<template>
  <button @click="onClick" :class="classes">
    <img v-if="isLoading" src="/assets/img/spinner.svg" alt="Loading" />
    <span :class="{ 'is-loading': isLoading }">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from "vue-property-decorator";

@Component
export default class SBButton extends Vue {
  // Props
  @Prop({ default: false }) isFullWidth!: boolean;
  @Prop({ default: false }) isLoading!: boolean;

  // State properties
  private classes: any = {
    "sb-button": true,
    "sb-button--is-loading": false,
    "sb-button--full-width": this.isFullWidth
  };

  // Emit on click event
  private onClick(event: Event) {
    return this.$emit("click", event);
  }

  @Watch("isLoading")
  private onChangePropIsLoading() {
    this.classes["sb-button--is-loading"] = !this.classes[
      "sb-button--is-loading"
    ];
  }
}
</script>

<style lang="scss">
.sb-button {
  border: none;
  display: block;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  padding: 15px 56px;
  border-radius: 15px;
  color: $sb-color-white;
  transition: background-color 0.5s;
  background-color: $sb-color-blue;

  &.sb-button--is-loading {
    background-color: $sb-color-dark;
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: $sb-color-dark;
  }

  &.sb-button--full-width {
    width: 100%;
  }

  .is-loading {
    visibility: hidden;
  }

  img {
    top: 50%;
    left: 50%;
    width: 14px;
    position: absolute;
    transform: translate(-50%, -50%);
  }
}
</style>
