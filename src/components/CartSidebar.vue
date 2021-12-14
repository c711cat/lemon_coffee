<template>
  <div class="divider p-pl-2">
    <h4 class="p-mb-2 p-mt-0">購物車清單</h4>
  </div>

  <div
    class="p-grid divider p-m-0 p-pt-3 p-jc-between p-ai-center"
    v-for="(item, index) in cartItems"
    :key="index"
  >
    <Button
      @click.prevent="delProduct(item)"
      icon="pi pi-trash"
      class="p-col-fixed p-ml-2 p-button-rounded p-button-text p-button-danger"
      style="width: 30px"
    />

    <img :src="item.product_image_url" class="product-image p-col-3 p-p-0" />

    <div class="p-col-8 p-pl-3">
      {{ item.product_name }}<br />
      咖啡豆磨粉?原豆?<br />
    </div>

    <div class="p-col-fixed p-pl-3" style="width: 125px">
      $ {{ item.unit_price }} / {{ item.package_type }}
    </div>

    <div class="p-fluid p-col-fixed p-p-0 p-my-3" style="width: 129px">
      <InputNumber
        class="p-inputtext-sm"
        v-model="item.quantity"
        :min="1"
        showButtons
        buttonLayout="horizontal"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        incrementButtonClass="p-button-info"
        decrementButtonClass="p-button-info"
      />
    </div>

    <div class="p-col-3 p-text-right subtotal-container p-px-1">
      <div class="discount-content" v-if="item.discount">
        {{ item.discount }}
      </div>

      <del class="del-content" v-if="item.discount"
        >$ {{ item.unit_price * item.quantity }}
      </del>

      <div v-if="item.sale_price">$ {{ item.sale_price }}</div>

      <div v-else>$ {{ item.unit_price * item.quantity }}</div>
    </div>
  </div>

  <div class="p-grid nested-grid p-jc-between p-mx-0 p-my-2 p-p-0">
    <div class="p-col-3 p-ml-2">
      <div class="p-grid discount-container">
        <div class="p-col-10 p-text-center p-mr-2 discount-mark">優惠</div>
        <div class="p-col-12 discount-content p-pl-0">滿 $1000 免運費</div>
      </div>
    </div>

    <div class="p-col-8">
      <div class="p-grid p-text-right p-ai-center p-jc-end">
        <div class="p-col-6 p-pr-0">小計</div>
        <div class="p-col-5 p-pr-1">$ {{ subtotal }}</div>

        <div v-if="buy_more_discount" class="p-col-6 p-pr-0">多件優惠</div>
        <div v-if="buy_more_discount" class="p-col-5 p-pr-1">
          - $ {{ buy_more_discount }}
        </div>

        <div v-if="freight_cost" class="p-col-6 p-pr-0">運費</div>
        <div v-if="freight_cost" class="p-col-5 p-pr-1">
          $ {{ freight_cost }}
        </div>

        <div v-if="free_shipping" class="p-col-6 p-pr-0">滿千免運</div>
        <div v-if="free_shipping" class="p-col-5 p-pr-1">
          <del>$ {{ free_shipping }}</del>
        </div>

        <div class="p-col-6 p-text-bold checkout-price p-pr-0">總付款金額</div>
        <div class="p-col-5 p-text-bold checkout-price p-pr-1">
          $ {{ total_payment_price }}
        </div>
      </div>
    </div>

    <Button
      label="訂單結帳"
      class="p-button-info p-button-raised p-col-12"
    ></Button>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      subtotal: 0,
      freight_cost: 0,
      total_payment_price: 0,
      buy_more_discount: 0,
      free_shipping: 0,
      cartItems: [],
    };
  },
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}/users/cart_items`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .get(api, { headers })
        .then((response) => {
          if (response.status === 200) {
            this.cartItems = [...response.data];
            console.log(this.cartItems);
            this.calculatePrice();
          }
        })
        .catch(() => {
          this.$router.push("/entrance/login");
        });
    },
    calculatePrice() {
      this.cartItems.forEach((item) => {
        this.subtotal += item.unit_price * item.quantity;
      });
      this.total_payment_price = this.subtotal;
    },
    delProduct(item) {
      const api = `${process.env.VUE_APP_API}/users/cart_items/${item.product_id}`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .delete(api, { headers })
        .then((response) => {
          if (response.status === 204) {
            this.$toast.add({
              severity: "success",
              summary: "已刪除商品",
              life: 2000,
            });
            this.getCart();
          }
        })
        .catch(() => {
          this.$router.push("/entrance/login");
        });
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
.divider {
  border-bottom: 1px solid rgb(235, 233, 233);
}

.product-image {
  width: 60px;
}

.subtotal-container {
  line-height: 1.5;
}

.del-content {
  color: #999;
}

.discount-container {
  font-size: 15px;
}

.discount-content {
  color: #db2828;
}

.discount-mark {
  background: #db2828;
  color: #fff;
}

.checkout-price {
  color: #0288d1;
}
</style>
