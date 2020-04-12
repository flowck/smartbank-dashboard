le<template>
  <div ref="view" class="sb-chat">
    <div ref="chatArea" class="sb-chat__area">
      <div ref="chatContact">
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
      </div>
      <div ref="chatMessagesContainer" class="sb-chat__area__messages">
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

        <sb-message
          v-for="message in messages"
          :key="message.id"
          :message="message.content"
          :userName="message.userName"
          :userAvatar="message.userAvatar"
        />
      </div>

      <div ref="chatInput">
        <sb-chat-input @sendMessage="sendMessage" class="sb-chat-input" />
      </div>
    </div>
    <!--  -->
    <sb-card class="sb-chat__person"></sb-card>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { mapActions } from "vuex";
import { Message } from "../interfaces";

@Component({
  data() {
    return {
      messages: []
    };
  },
  methods: {
    ...mapActions("chatModule", ["getEmojis"])
  }
})
export default class SBChat extends Vue {
  private getEmojis!: Function;
  private messages!: Message[];

  // Methods
  private updateScrollPosition() {
    const chatMessages = this.$refs.chatMessagesContainer as HTMLElement;
    chatMessages.scrollTop += chatMessages.scrollHeight;
  }

  private sendMessage(content: string) {
    this.messages.push({
      id: Number(new Date().getTime()),
      content,
      userName: "Firmino",
      userAvatar: "http://changani.me/site/me.png"
    });

    const scrollUpdater = window.setTimeout(() => {
      this.updateScrollPosition();
      window.clearTimeout(scrollUpdater);
    }, 100);
  }

  private setChatContainerHeight() {
    const chatMessages = this.$refs.chatMessagesContainer as HTMLElement;
    const chatContact = this.$refs.chatContact as HTMLElement;
    const chatInput = this.$refs.chatInput as HTMLElement;
    const view = this.$refs.view as HTMLElement;

    const chatMessageMargin = 40;
    const chatMessagesHeight =
      view.offsetHeight -
      (chatInput.offsetHeight + chatContact.offsetHeight + chatMessageMargin);

    chatMessages.setAttribute("style", `height: ${chatMessagesHeight}px;`);
  }

  // Lifecycle methods
  private mounted() {
    this.getEmojis();
    this.setChatContainerHeight();

    window.addEventListener("resize", () => {
      console.log("is resizing");
      const timeout = window.setTimeout(() => {
        this.setChatContainerHeight();
        window.clearTimeout(timeout);
      }, 100);
    });
  }
}
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
    padding-right: 20px;
    margin: 20px 0;
    overflow: scroll;
    overflow-x: auto;
  }

  .sb-chat-input {
    height: 62px;
  }

  .sb-chat__area__contact {
    height: 70px;
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
