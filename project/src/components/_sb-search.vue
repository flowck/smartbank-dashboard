<template>
  <div class="sb-search">
    <sb-input
      v-model="searchParam"
      :hasLabel="false"
      :placeholder="placeholder"
      @enter="$emit('search', searchParam)"
    >
      <template v-slot:icon>
        <i class="fas fa-search"></i>
      </template>
    </sb-input>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";

@Component
export default class SBSearch extends Vue {
  // Props
  @Prop({ default: "Search" }) placeholder!: string;

  // State property
  private searchParam: string = "";
}
</script>
