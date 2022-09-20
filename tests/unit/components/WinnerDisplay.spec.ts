import { mount } from "@vue/test-utils";
import WinnerDisplay from "@/components/WinnerDisplay.vue";
import Vuetify from "vuetify";

const vuetify = new Vuetify();

describe("WinnerDisplay Component", () => {
  test("should match with the snapshot", () => {
    const wrapper = mount(WinnerDisplay, {
      vuetify,
      propsData: {
        message: "",
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should show the message Dead Unicorn wins!", () => {
    const msg = "Dead Unicorn";
    const wrapper = mount(WinnerDisplay, {
      vuetify,
      propsData: {
        message: msg,
      },
    });

    expect(wrapper.text()).toContain(msg);
    expect(wrapper.classes("winner-box")).toBeTruthy();
  });
});
