<template>
  <div class="sb-dashboard-layout">
    <aside class="sb-navbar"></aside>
    <section class="sb-views">
      <sb-card>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facilis,
        accusamus vel, soluta molestias blanditiis explicabo eos ullam
        temporibus quo excepturi quasi dicta ipsam? Sit quod sunt aliquid
        recusandae repellat?
      </sb-card>
      <router-view></router-view>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DashboardLayout extends Vue {}
</script>

<style lang="scss">
$navbar-width: 80px;
$views-width: calc(100% - #{$navbar-width});

.sb-dashboard-layout {
  height: 100%;
}

.sb-navbar {
  width: $navbar-width;
  height: 100%;
  position: fixed;
  border: 1px solid red;
}

.sb-views {
  float: right;
  height: 100%;
  width: $views-width;
  padding: 30px;
  border: 1px solid blue;
}
</style>
