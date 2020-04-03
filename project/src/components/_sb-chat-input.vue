<template>
  <sb-card class="sb-chat-input">
    <div class="sb-chat-input__attach-button">
      <i class="fas fa-paperclip"></i>
      <input type="file" class="sb-chat-input__upload" />
    </div>

    <textarea class="sb-chat-input__field">Type a message...</textarea>

    <div class="sb-chat-input__actions actions">
      <div class="actions__emojis-button">
        <i class="far fa-smile-beam"></i>
      </div>
      <div class="actions__send-button">
        <i class="fas fa-paper-plane"></i>
      </div>
    </div>
  </sb-card>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class SBChatInput extends Vue {}
</script>

<style lang="scss">
.sb-chat-input {
  display: grid;
  align-items: center;
  grid-template-columns: 30px 80% 13%;
}

.sb-chat-input__attach-button {
  width: 30px;
  height: 30px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: color 0.5s;

  &:hover {
    color: $sb-color-blue;
  }

  .sb-chat-input__upload {
    top: 0;
    left: 0;
    opacity: 0;
    width: inherit;
    height: inherit;
    position: absolute;
  }

  i {
    color: $sb-text-color--light;
  }
}

.sb-chat-input__field {
  border: none;
  resize: none;
  max-height: 50px;
  font-size: 14px;
  height: 20px;
  @include placeholder-color;

  &:focus,
  &:active {
    outline: none;
  }
}

.sb-chat-input__actions {
  display: flex;
  padding-left: 5px;
  color: $sb-text-color--light;
  justify-content: space-between;

  div {
    cursor: pointer;

    &:hover {
      color: $sb-color-blue;
    }
  }
}
</style>
