<template>
  <Carousel
    :key="similarProducts"
    :value="similarProducts"
    :numVisible="3"
    :numScroll="1"
    :responsiveOptions="responsiveOptions"
    class="custom-carousel p-my-0 p-mx-auto"
    :circular="true"
  >
    <template #header>
      <h2 class="p-mb-0 p-pl-4">你可能也喜歡</h2>
    </template>
    <template #item="similarProducts">
      <div class="product-item">
        <div
          @click.prevent="goToTheProductPage(similarProducts.data.id)"
          class="product-item-content"
        >
          <div class="p-mb-3">
            <img
              src="https://images.unsplash.com/photo-1602497475068-c901dc99942c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              :alt="similarProducts.data.name"
              class="product-image p-pt-0"
            />
          </div>
          <div class="">
            <h4 class="p-my-0 p-mx-auto name-body">
              {{ similarProducts.data.name }}
            </h4>

            <Roast
              :roast="similarProducts.data.roast"
              class="p-text-bold p-d-flex p-jc-center"
            >
            </Roast>

            <h4 class="p-mt-2 p-mb-3">
              ${{ similarProducts.data.drip_bag_price }} ~ ${{
                similarProducts.data.one_pound_price
              }}
            </h4>
          </div>
        </div>
      </div>
    </template>
  </Carousel>
</template>

<script>
import Roast from "@/components/Roast.vue";
import axios from "axios";

export default {
  data() {
    return {
      similarProducts: [],
      allProducts: {},
      currentProduct: {},
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "600px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
  components: { Roast },
  props: {
    currentItem: {
      type: Object,
    },
  },
  watch: {
    currentItem() {
      this.currentProduct = { ...this.currentItem };
      this.getAllProducts();
    },
  },
  methods: {
    getAllProducts() {
      const api = `${process.env.VUE_APP_API}/products`;
      this.isLoading = true;
      axios
        .get(api)
        .then((response) => {
          this.allProducts = response.data;
          this.filterchSimilarProducts();
        })
        .catch((error) => {
          return error;
        });
    },
    filterchSimilarProducts() {
      this.similarProducts = this.allProducts.filter((item) => {
        return (
          (item.id !== this.currentProduct.id &&
            item.roast === this.currentProduct.roast) ||
          this.currentProduct.roast - 1 === item.roast ||
          this.currentProduct.roast + 1 === item.roast
        );
      });
    },
    goToTheProductPage(id) {
      this.$router.push(`/products/${id}`);
      this.$emit("go-to-the-product-page", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-item {
  .product-item-content {
    border-radius: 3px;
    margin: 0.3rem;
    text-align: center;
    padding: 2rem 0;
    cursor: pointer;
  }
  .product-item-content:hover {
    background-color: #fdf7ee;
  }

  .product-image {
    width: 80%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
}

.name-body {
  width: 80%;
  height: 50px;
}
</style>
