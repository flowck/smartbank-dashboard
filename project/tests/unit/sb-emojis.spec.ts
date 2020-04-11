import { createLocalVue, shallowMount } from "@vue/test-utils";
import SBEmojis from "@/components/_sb-emojis.vue";
import emojis from "../mock/emojis";
// Dependencies: components registered inside SBEmojis
import SBInput from "@/components/_sb-input.vue";
import SBCard from "@/components/_sb-card.vue";

describe("sb-emojis.vue", () => {
  let localVue: any;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.component("sb-input", SBInput);
    localVue.component("sb-card", SBCard);
  });

  // Test props
  describe(":props", () => {
    // it("renders props.message when passed", () => {
    //   const wrapper = shallowMount(SBEmojis, {
    //     propsData: {}
    //   });
    //   expect(wrapper.text()).toMatch(message);
    // });
  });

  // Events
  describe("@events", () => {
    it("expects select event to be emitted once an emoji is selected", async () => {
      function mockHandler(emoji: string) {
        return emoji;
      }

      const wrapper = shallowMount(SBEmojis, {
        propsData: { emojis },
        localVue
      });

      const emoji = wrapper.find(".sb-emojis__list__emoji");
      emoji.trigger("click");

      expect(wrapper.emitted().select).toBeTruthy();
    });
  });
});
