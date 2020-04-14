<template>
  <sb-card class="sb-chat-input">
    <div class="sb-chat-input__attach-button">
      <i class="fas fa-paperclip"></i>
      <input type="file" class="sb-chat-input__upload" />
    </div>

    <textarea
      @keyup.enter="onSendMessage"
      class="sb-chat-input__field"
      v-model="content"
    >
      Type a message...
    </textarea>

    <div class="sb-chat-input__actions actions">
      <div
        :class="{ 'actions__emojis-button': true, 'is-active': emojisStatus }"
        @click="toggleEmojis"
      >
        <i class="far fa-smile-beam"></i>
      </div>
      <div class="actions__send-button" @click="onSendMessage">
        <i class="fas fa-paper-plane"></i>
      </div>
    </div>
    <!-- Emojis -->
    <sb-emojis
      @select="onSelectEmoji"
      :emojis="emojis"
      v-if="emojisStatus"
      class="sb-emojis"
    />
  </sb-card>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({
  data() {
    return {
      content: ""
    };
  },
  computed: {
    ...mapState("chatModule", ["emojis"])
  }
})
export default class SBChatInput extends Vue {
  private emojis!: object[];
  private emojisStatus: boolean = false;
  private content!: string;

  // Methods

  /**
   * toggleEmojis: It controls the emojis component visibility
   * @returns {void}
   */
  private toggleEmojis(): void {
    this.emojisStatus = !this.emojisStatus;
  }

  private onSelectEmoji(emoji: string) {
    this.content += emoji;
  }

  private onSendMessage() {
    if (this.content) {
      this.$emit("sendMessage", this.content);
      this.content = "";
    }
  }
}
</script>

<style lang="scss">
.sb-chat-input {
  display: grid;
  align-items: center;
  position: relative;
  $input-chat-width: calc(100% - (30px + 50px));
  grid-template-columns: 30px $input-chat-width 50px;
}

.sb-chat-input__attach-button {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.5s;

  &:hover {
    color: $sb-color-blue;
  }

  .sb-chat-input__upload {
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    visibility: hidden;
    position: absolute;
  }

  i {
    color: $sb-text-color--light;
  }
}

.sb-chat-input__field {
  border: none;
  resize: none;
  height: 20px;
  font-size: 14px;
  max-height: 50px;
  @include placeholder-color;

  &:focus,
  &:active {
    outline: none;
  }
}

.sb-chat-input__actions {
  width: 50px;
  display: flex;
  padding-left: 5px;
  position: relative;
  color: $sb-text-color--light;
  justify-content: space-between;

  div {
    cursor: pointer;

    &:hover {
      color: $sb-color-blue;
    }

    &.is-active {
      color: $sb-color-blue;
    }
  }
}
</style>
