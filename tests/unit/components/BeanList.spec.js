import { shallowMount, mount } from "@vue/test-utils";
import BeanList from "@/components/BeanList.vue";
import axios from "axios"
jest.mock("axios");
const products = [
  {
    id: 1,
    name: "耶家雪菲 日曬 古吉 夏奇索 魔魔拉單一莊園 G1",
    half_pound_price: 450,
    one_pound_price: 810,
    drip_bag_price: 40,
    roast: 1,
    flavor: [
      "藍莓",
      "柑橘",
      "花香"
    ]
  },
];
describe("BeanList", () => {
  it("從這裡定義的 products 取得資料並 rander 出豆單", async () => {
    axios.get.mockResolvedValue({ data: products });
    const wrapper = await shallowMount(BeanList);
    expect(wrapper.element).toMatchSnapshot();
  });
  it("randers 豆單", async () => {
    axios.get.mockResolvedValue({ data: products });
    const wrapper = await mount(BeanList);
    expect(wrapper.element).toMatchSnapshot();
  });
});