<template>
  <div class="sb-chat">
    <div class="sb-chat__area">
      <sb-card class="sb-chat__area__contact sb-flex">
        <div>
          <div class="sb-chat__area__contact__name">
            <b>Firmino</b>
          </div>
          <div class="sb-chat__area__contact__status">Online</div>
        </div>
        <div class="sb-chat__area__contact__actions actions">
          <div class="action"><i class="fas fa-phone"></i></div>
          <div class="action"><i class="fas fa-search"></i></div>
          <div>|</div>
          <div class="action"><i class="fas fa-ellipsis-v"></i></div>
        </div>
      </sb-card>
      <div class="sb-chat__area__messages">
        <sb-message
          message="Hi there, I am testing the chat message"
          userName="Firmino"
          :isSender="true"
          userAvatar="http://changani.me/site/me.png"
        />
        <sb-message
          message="Are you done testing"
          userName="Changani"
          userAvatar="http://changani.me/site/me.png"
        />

        <sb-message
          message="Hi there, I am testing the chat message"
          userName="Firmino"
          :isSender="true"
          userAvatar="http://changani.me/site/me.png"
        />
        <sb-message
          message="Are you done testing"
          userName="Changani"
          userAvatar="http://changani.me/site/me.png"
        />
        <sb-message
          message="Are you done testing"
          userName="Changani"
          userAvatar="http://changani.me/site/me.png"
        />
      </div>

      <sb-chat-input class="sb-chat-input"></sb-chat-input>
    </div>
    <!--  -->
    <sb-card class="sb-chat__person"></sb-card>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class SBChat extends Vue {}
</script>

<style lang="scss">
.sb-chat {
  height: 100%;
  display: grid;
  grid-template-columns: 65% 30%;
  justify-content: space-between;
}

.sb-chat__area {
  height: 100%;
  display: flex;
  flex-direction: column;

  .sb-chat__area__messages {
    padding: 20px 0;
    height: calc(100% - (62px + 80px));
  }

  .sb-chat-input {
    height: 62px;
  }

  .sb-chat__area__contact {
    height: 80px;
    align-items: center;
    justify-content: space-between;

    .sb-chat__area__contact__status {
      font-size: 12px;
      color: $sb-text-color--light;
    }
  }
}

.sb-chat__area__contact__actions {
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid red;
  color: $sb-text-color--light;

  .action {
    cursor: pointer;
    transition: color 0.5s;

    &:hover {
      color: $sb-color-blue;
    }
  }
}
</style>
