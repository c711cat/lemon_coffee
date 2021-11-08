import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Manager/Home.vue";

describe("Manager/Home", () => {
  it("新增產品的按鈕會在畫面上", async () => {
    const wrapper = shallowMount(Home);
    const btn = wrapper.get(".add-btn");
    expect(btn.text()).toBe("新增產品");
  });
});
