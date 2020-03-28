<template>
  <div class="sb-input">
    <label v-if="hasLabel" class="sb-input__label">{{ label }}</label>
    <input
      ref="inputField"
      class="sb-input__field"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input', $refs.inputField.value)"
      @keyup.enter="$emit('enter', $refs.inputField.value)"
    />
    <div class="sb-input__icon">
      <slot name="icon"></slot>
    </div>
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
  @Prop({ default: "Label" }) label!: string;
  @Prop({ default: false }) isFullWidth!: boolean;
  @Prop({ default: "" }) placeholder!: string;
  @Prop({ default: "text" }) type!: Type;
  @Prop({ default: true }) hasLabel!: boolean;
  @Prop() value!: string;

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
    font-size: 16px;
    padding-right: 20px;
    color: $sb-text-color--dark;

    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: $sb-text-color--light;
    }
    &::-moz-placeholder {
      /* Firefox 19+ */
      color: $sb-text-color--light;
    }
    &:-ms-input-placeholder {
      /* IE 10+ */
      color: $sb-text-color--light;
    }
    &:-moz-placeholder {
      /* Firefox 18- */
      color: $sb-text-color--light;
    }
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
