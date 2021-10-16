<template>
  <div class="wrap">
    <div class="bean-list-unit" v-for="product in products" :key="product.name">
      <a href="#">
        <div class="unit-up">
          <div class="bean-name">{{ product.name }}</div>
          <div class="bean-price-type">
            <div class="half-pound-container">
              <span class="price-title">半磅</span>
              <span class="price-num">${{ product.half_pound_price }}</span>
            </div>
            <div>
              <span class="price-title">一磅</span>
              <span class="price-num">${{ product.one_pound_price }}</span>
            </div>
            <div>
              <span class="price-title">耳掛</span>
              <span class="price-num">${{ product.drip_bag_price }} /包</span>
            </div>
          </div>
        </div>
        <div class="unit-down">
          <Roast :roast="product.roast"></Roast>
          <div class="flavor-container">
            <div class="flavor">風味 : {{ product.flavor.join("、") }}</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Roast from "@/components/Roast.vue";
export default {
  data() {
    return {
      round: [1, 2, 3, 4, 5],
      products: [],
    };
  },
  components: { Roast },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/products`;
      axios.get(api).then((response) => {
        this.products = response.data;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #333;
}
.bean-list-unit:hover {
  background: #f9f5ef;
}
.bean-list-unit:hover .bean-name {
  color: #4aa378;
}
.wrap {
  max-width: 1200px;
  margin: 0 auto;
  font-family: system-ui;
  padding: 2% 5%;
}
.bean-list-unit {
  padding: 15px 20px;
  margin: 0 auto;
  text-align: left;
}
.unit-up {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: solid 1px black;
}
.bean-name {
  min-width: 50%;
  font-size: 18px;
  line-height: 25px;
  padding-bottom: 10px;
}
.bean-price-type {
  display: flex;
  padding-bottom: 10px;
}
.price-title {
  color: #4aa378;
  margin-right: 5px;
}
.price-num {
  width: 56px;
  display: inline-block;
}
.unit-down {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.flavor-container {
  display: flex;
  padding-top: 10px;
}
</style>
