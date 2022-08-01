<template>
  <Loading v-if="isLoading" />
  <div v-else class="wrap p-my-0 p-mx-auto p-p-2">
    <div class="divider p-pl-3">
      <h4>收藏清單</h4>
    </div>

    <div
      class="p-grid p-m-0 p-py-3 divider p-ai-center p-jc-between"
      v-for="item in myFavoriteData"
      :key="item.id"
    >
      <router-link
        :to="`/products/${item.id}`"
        class="p-grid p-m-0 p-lg-12 link-content"
      >
        <div class="p-col-3 p-lg-1">
          <img
            :src="item.image_url"
            class="product-image p-col-1 p-lg-1 p-p-0"
          />
        </div>
        <div class="p-col-9 p-lg-9">
          <div class="p-grid p-m-0 p-jc-start p-ai-center">
            <div class="p-col-12 p-lg-6">
              {{ item.name }}
              <Roast :roast="item.roast"></Roast>
            </div>

            <div class="p-col-4 p-lg-2">半磅 ${{ item.half_pound_price }}</div>
            <div class="p-col-4 p-lg-2">一磅 ${{ item.one_pound_price }}</div>
            <div class="p-col-3 p-lg-2">耳掛 ${{ item.drip_bag_price }}</div>
          </div>
        </div>
        <div
          class="p-col-12 p-lg-2 p-text-center p-d-flex p-jc-end p-ai-center"
        >
          <Button
            @click.prevent="delMyFavorite(product)"
            label="移除收藏"
            icon="pi pi-heart-fill"
            class="p-button-outlined p-button-warning btn-container"
          />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import Roast from "@/components/Roast.vue";

export default {
  data() {
    return {
      buy_more_discount: 0,
      cartItems: [],
      origin_shipping_fee: 0,
      isLoading: false,
      loadingItem: "",
      myFavoriteData: {},
    };
  },
  components: { Loading, Roast },
  inject: ["emitter"],
  methods: {
    getMyFavorite() {
      const myFavoriteData =
        JSON.parse(localStorage.getItem("myFavorite")) || {};
      this.myFavoriteData = myFavoriteData;
      console.log(this.myFavoriteData);
    },

    showErrorToast(text) {
      this.$toast.add({
        severity: "error",
        summary: text,
        life: 5000,
      });
    },
    showSuccessToast(text) {
      this.$toast.add({
        severity: "success",
        summary: text,
        life: 2000,
      });
    },
    typeText(package_type) {
      if (package_type === "drip_bag") {
        return "耳掛";
      }
      if (package_type === "half_pound") {
        return "半磅";
      }
      if (package_type === "one_pound") {
        return "一磅";
      }
    },
    groundText(ground_result) {
      if (ground_result === true) {
        return "磨粉";
      }
      if (ground_result === false) {
        return "原豆";
      }
    },
    updateShippingFee(shippingMethod) {
      switch (shippingMethod) {
        case "home_delivery":
          this.origin_shipping_fee = 100;
          break;
        default:
          this.origin_shipping_fee = 0;
          break;
      }
    },
  },
  computed: {
    subtotal() {
      let total = 0;
      this.cartItems.forEach((item) => {
        total += item.unit_price * item.quantity;
      });
      return total;
    },
    final_shipping_fee() {
      if (this.subtotal >= 1000) {
        return 0;
      } else {
        return this.origin_shipping_fee;
      }
    },
    free_shipping() {
      return this.final_shipping_fee === 0;
    },
  },
  created() {
    this.getMyFavorite();
  },
};
</script>

<style lang="scss" scoped>
* {
  border: 1px solid black;
}
.wrap {
  max-width: 1200px;
}

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

.link-content {
  text-decoration: none;
  color: #2c3e50;
}

.link-content:hover {
  background: #f9f5ef70;
}
</style>
