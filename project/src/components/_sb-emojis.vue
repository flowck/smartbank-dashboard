<template>
  <div class="sb-emojis">
    <sb-card>
      <sb-input placeholder="Search emojis" v-model="searchParam" />
      <div class="sb-emojis__list">
        <div
          @click="selectEmoji"
          class="sb-emojis__list__emoji"
          v-for="(emoji, index) in emojisList"
          :key="index"
          :title="emoji.name.replace(/_/g, ' ')"
        >
          {{ emoji.emoji }}
        </div>
      </div>
    </sb-card>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { Vue, Prop, Component } from "vue-property-decorator";

interface Emoji {
  emoji: string;
  name: string;
  shortname: string;
  unicode: string;
  html: string;
  category: string;
  order: string;
}

@Component({
  data() {
    return { searchParam: "" }
  }
})
export default class SBEmojis extends Vue {
  // Props
  @Prop({ required: true }) emojis!: Emoji[];

  // State properties
  private searchParam!: string; 

  // Methods

  /**
   * searchEmojis
   * @returns {string}
  */
  get emojisList() {
    if (this.searchParam) {
      return this.emojis.filter((emoji: Emoji) => {
        return emoji.name.toLowerCase().search(this.searchParam.toLowerCase()) > -1;
      });
    } else {
      // Return the default list
      return this.emojis;
    }
  }
}
</script>

<style lang="scss">
.sb-emojis {
  right: 0;
  top: -300px;
  width: 400px;
  position: absolute;
}

.sb-emojis__list {
  width: 100%;
  height: 200px;
  overflow-y: auto;
  margin-top: 20px;
}

.sb-emojis__list__emoji {
  width: 30px;
  float: left;
  height: 30px;
  display: flex;
  cursor: pointer;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}
</style>
