<template>
  <div class="wrap">
    <CartContent></CartContent>

    <div class="ui form grid inner-wrap">
      <div
        class="ten wide computer eleven wide tablet sixteen wide mobile column"
      >
        <div class="inner-wrap-left">
          <h3 class="form-title">收件人資料</h3>
          <div class="inline fields">
            <div class="sixteen wide field">
              <div class="input-title field"><label>姓名</label></div>
              <input type="text" placeholder="請輸入姓名" />
            </div>
          </div>
          <div class="inline fields">
            <div class="sixteen wide field">
              <div class="input-title field"><label>電話</label></div>
              <input type="text" placeholder="請輸入電話" />
            </div>
          </div>
          <div class="inline fields">
            <div class="sixteen wide field">
              <div class="input-title field"><label>E-mail</label></div>
              <input type="text" placeholder="請輸入 E-mail" />
            </div>
          </div>
          <div class="inline fields">
            <div class="sixteen wide field">
              <div class="input-title field">
                <label for="shipping">送貨方式</label>
              </div>
              <select id="shipping" v-model="form.user.shipping_method">
                <option value="" disabled>請選擇送貨方式</option>
                <option
                  :value="item"
                  v-for="item in shipping_methods"
                  :key="item"
                >
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="inline fields">
            <div class="sixteen wide field">
              <div class="input-title field">
                <label for="payment">付款方式</label>
              </div>
              <select id="payment" v-model="form.user.payment_method">
                <option value="" disabled>請選擇付款方式</option>
                <option
                  :value="item"
                  v-for="item in payment_methods"
                  :key="item"
                >
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="inline fields">
            <div class="sixteen wide field">
              <div class="input-title field">
                <div class="field note"><label>備註</label></div>
              </div>
              <textarea rows="3" placeholder="" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          three
          wide
          computer
          five
          wide
          tablet
          sixteen
          wide
          mobile
          column
          inner-wrap-right
        "
      >
        <div class="">
          <button class="ui blue button">前往結帳</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartContent from "@/components/CartContent.vue";

export default {
  data() {
    return {
      shipping_methods: ["7-11取貨", "全家取貨", "宅配 ( 限台灣本島 )"],
      payment_methods: ["貨到付款", "信用卡"],
      form: {
        user: {
          name: "",
          tel: "",
          email: "",
          shipping_method: "",
          payment_method: "",
        },
        message: "",
      },
    };
  },
  components: { CartContent },
};
</script>
<style lang="scss" scoped>
// * {
//   border: 1px solid black;
// }
.wrap {
  max-width: 1200px;
  margin: 55px auto;
}
.inner-wrap {
  width: 90%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 100px;
}

.wide.computer.wide.tablet.mobile.column.inner-wrap-right {
  align-items: flex-end;
  display: flex;
  flex-direction: row-reverse;
}
.form-title {
  text-align: left;
  border-bottom: 1px solid #cecece;
  line-height: 2.3;
  margin-bottom: 35px;
  padding-left: 18px;
}
.inline.fields {
  padding-left: 20px;
}
.input-title {
  width: 95px;
  text-align: left;
}
.note {
  height: 70px;
}
.ui.blue.button {
  font-size: 17px;
  padding: 18px 27px;
  letter-spacing: 1.5px;
  font-weight: normal;
  margin-right: 20px;
  margin-bottom: 12px;
}

</style>
