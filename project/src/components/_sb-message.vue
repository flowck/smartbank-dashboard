eal<template>
  <div :class="{ 'sb-message': true, 'sb-message--is-sender': isSender }">
    <div class="sb-message__user">
      <img v-if="userAvatar" :src="userAvatar" :alt="userName" />
      <div v-else class="sb-message__user__mock-avatar"></div>
    </div>
    <div class="sb-message__content">
      <div class="sb-message__content__sender">
        <span v-if="isSender">You</span>
        <span v-else>{{ userName }}</span>
      </div>

      <div v-html="message"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class SBMessage extends Vue {
  @Prop({ required: true }) userName!: string;
  @Prop() userAvatar!: string;
  @Prop({ required: true }) message!: string;
  @Prop({ default: false }) isSender!: boolean;
}
</script>

<style lang="scss">
.sb-message {
  display: flex;
  $user-size: 50px;
  justify-content: space-between;
  $content-width: calc(100% - #{$user-size + 10px});
  $container-border-radius: 20px;

  .sb-message__content {
    padding: 20px;
    line-height: 1.5;
    width: $content-width;
    border-radius: $container-border-radius;
    border-bottom-left-radius: 0;
    background-color: $sb-color-white;

    .sb-message__content__sender {
      display: block;
      margin-bottom: 10px;
      color: $sb-text-color--light;
    }
  }

  .sb-message__user {
    display: flex;
    height: inherit;
    width: $user-size;
    align-items: flex-end;

    img,
    .sb-message__user__mock-avatar {
      width: $user-size;
      height: $user-size;
      border-radius: 50%;
      background-color: $sb-text-color--light;
    }
  }

  &.sb-message--is-sender {
    .sb-message__content {
      order: 1;
      color: $sb-color-white;
      background-color: $sb-color-blue;
      border-bottom-left-radius: $container-border-radius;
      border-bottom-right-radius: 0;

      .sb-message__content__sender {
        color: #eee;
      }
    }

    .sb-message__user {
      order: 2;
    }
  }
}
</style>
