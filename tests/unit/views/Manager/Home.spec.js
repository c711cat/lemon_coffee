import { shallowMount, mount } from "@vue/test-utils";
import Home from "@/views/Manager/Home.vue";
import axios from "axios";

jest.mock("axios");

const products = [
  {
    id: 1,
    order: 1,
    name: "耶家雪菲 日曬 古吉 夏奇索 魔魔拉單一莊園 G1",
    half_pound_price: 450,
    one_pound_price: 810,
    drip_bag_price: 40,
    roast: 1,
    flavor: ["藍莓", "柑橘", "花香"],
  },
];

describe("Manager/Home", () => {
  it("新增產品的按鈕會在畫面上", async () => {
    axios.get.mockResolvedValue({ data: products });
    const wrapper = shallowMount(Home);
    const btn = wrapper.get(".add-btn");
    expect(btn.text()).toBe("新增產品");
  });

  it("編輯按鈕會出現在畫面上", async () => {
    axios.get.mockResolvedValue({ data: products });
    const wrapper = await mount(Home);
    expect(wrapper.get(".edit").text()).toBe("編輯");
  });

  it("刪除按鈕會出現在畫面上", async () => {
    axios.get.mockResolvedValue({ data: products });
    const wrapper = await mount(Home);
    expect(wrapper.get(".del").text()).toBe("刪除");
  });

  it("按下新增按鈕，會跳轉到新增產品頁面", async () => {
    const $router = {
      push: jest.fn(),
    };
    axios.get.mockResolvedValue({ data: products });
    const wrapper = shallowMount(Home, {
      global: {
        mocks: {
          $router: $router,
        },
      },
    });
    const addBtn = wrapper.get(".add-btn");
    await addBtn.trigger("click");
    expect($router.push).toHaveBeenCalledWith("/admin/products/new");
  });
});
