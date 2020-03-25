<template>
  <div class="sb-card" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

// Interface
interface Style {
  backgroundColor?: string;
}

@Component
export default class SBCard extends Vue {
  // State properties
  private styles: Style = {};

  // Props
  @Prop({ default: "#FFF" }) private backgroundColor!: string;

  private mounted() {
    // Set styles
    this.styles.backgroundColor = this.backgroundColor;
  }
}
</script>

<style lang="scss">
.sb-card {
  padding: 15px 25px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
