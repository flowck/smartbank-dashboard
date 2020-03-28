import { shallowMount } from "@vue/test-utils";
import SBMessage from "@/components/_sb-message.vue";

describe("sb-message.vue", () => {
  it("renders props.message when passed", () => {
    const message = "Hello world";
    const userName = "Firmino";
    const wrapper = shallowMount(SBMessage, {
      propsData: { message, userName }
    });
    expect(wrapper.text()).toMatch(message);
  });

  it("renders props.userName when passed", () => {
    const message = "Hello world";
    const userName = "Firmino";
    const wrapper = shallowMount(SBMessage, {
      propsData: { message, userName }
    });
    expect(wrapper.text()).toMatch(userName);
  });
});
