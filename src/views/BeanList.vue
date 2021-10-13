<template>
  <div class="wrap">
    <div class="bean-list-container">
      <div
        class="bean-list-unit"
        v-for="product in products"
        :key="product.name"
      >
        <a href="#"
          ><div class="unit-up">
            <div class="bean-name">{{ product.name }}</div>
            <div class="bean-price-type">
              <div class="half-pound-container">
                <span class="price-title">半磅</span
                ><span class="price-num">${{ product.half_pound_price }}</span>
              </div>
              <div>
                <span class="price-title">一磅</span
                ><span class="price-num">${{ product.one_pound_price }}</span>
              </div>
            </div>
          </div>
          <div class="unit-down">
            <div class="roast-wrap">
              <div class="level-title" v-if="product.roast === 1">淺焙</div>
              <div class="level-title" v-if="product.roast === 2">中淺焙</div>
              <div class="level-title" v-if="product.roast === 3">中焙</div>
              <div class="level-title" v-if="product.roast === 4">中深焙</div>
              <div class="level-title" v-if="product.roast === 5">深焙</div>
              <div class="roast-degree" v-for="(item, i) in round" :key="i">
                <div v-if="product.roast === 1">
                  <div
                    class="round fill-light-roast"
                    v-if="i < product.roast"
                    :class="{ active: true }"
                  ></div>
                  <div class="round unfill-light-roast" v-else></div>
                </div>
                <div v-if="product.roast === 2">
                  <div
                    class="round fill-cinnamon-roast"
                    v-if="i < product.roast"
                    :class="{ active: true }"
                  ></div>
                  <div class="round unfill-cinnamon-roast" v-else></div>
                </div>
                <div v-if="product.roast === 3">
                  <div
                    class="round fill-medium-roast"
                    v-if="i < product.roast"
                    :class="{ active: true }"
                  ></div>
                  <div class="round unfill-medium-roast" v-else></div>
                </div>
                <div v-if="product.roast === 4">
                  <div
                    class="round fill-city-roast"
                    v-if="i < product.roast"
                    :class="{ active: true }"
                  ></div>
                  <div class="round unfill-city-roast" v-else></div>
                </div>
                <div v-if="product.roast === 5">
                  <div
                    class="round fill-french-roast"
                    v-if="i < product.roast"
                    :class="{ active: true }"
                  ></div>
                  <div class="round unfill-french-roast" v-else></div>
                </div>
              </div>
            </div>
            <div class="flavor-container">
              <div class="flavor">風味 : {{ product.flavor.join("、") }}</div>
            </div>
          </div></a
        >
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      round: [1, 2, 3, 4, 5],
      products: [],
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/products`;
      axios.get(api).then((response) => {
        this.products = response.data;
        console.log(this.products);
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
<style lang="scss">
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
}
.bean-list-container {
  margin: 0 auto;
  padding: 0% 10%;
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
  min-width: 80%;
  font-size: 18px;
  line-height: 25px;
  padding-bottom: 10px;
}
.bean-price-type {
  display: flex;
  padding-bottom: 10px;
}
.half-pound-container {
  margin-right: 23px;
}
.price-title {
  color: #4aa378;
  margin-right: 5px;
}
.unit-down {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.level-title {
  width: 57px;
  text-align: left;
}
.round {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 7px;
}
.fill-light-roast {
  background: #e1d8d6;
  border: 1px solid #e1d8d6;
}
.unfill-light-roast {
  border: 1px solid #e1d8d6;
}

.fill-cinnamon-roast {
  background: #c3b1ab;
  border: 1px solid #c3b1ab;
}
.unfill-cinnamon-roast {
  border: 1px solid #c3b1ab;
}
.fill-medium-roast {
  background: #a58a82;
  border: 1px solid #a58a82;
}
.unfill-medium-roast {
  border: 1px solid #a58a82;
}
.fill-city-roast {
  background: #886358;
  border: 1px solid #886358;
}
.unfill-city-roast {
  border: 1px solid #886358;
}
.fill-french-roast {
  background: #6b3c2e;
  border: 1px solid #6b3c2e;
}
.unfill-french-roast {
  border: 1px solid #6b3c2e;
}
.roast-wrap {
  display: flex;
  align-items: center;
  min-width: 90%;
  padding-top: 10px;
}
.flavor-container {
  display: flex;
  padding-top: 10px;
}
</style>
