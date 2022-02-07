<template>
  <div class="products-wrap">
    <Loading :isLoading="isLoading" />
    <div class="add-btn-container">
      <button type="button" class="add-btn" @click.prevent="toAddProduct">
        新增產品
      </button>
    </div>
    <CleanBeanList
      :products="products"
      :showEditButton="showEditButton"
      :disableDrag="disableDrag"
    ></CleanBeanList>
  </div>
</template>

<script>
import axios from "axios";
import CleanBeanList from "@/components/CleanBeanList.vue";
import emitter from "@/methods/emitter.js";
import Cookies from "js-cookie";
import Loading from "@/components/Loading.vue";

export default {
  data() {
    return {
      products: [],
      showEditButton: true,
      disableDrag: false,
      isLoading: false,
    };
  },
  components: {
    CleanBeanList,
    Loading,
  },
  inject: ["emitter"],
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/admin/products`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      this.isLoading = true;
      axios
        .get(api, { headers })
        .then((response) => {
          this.isLoading = false;
          this.products = [...response.data];
        })
        .catch(() => {
          this.$router.push("/entrance/login");
        });
    },
    toAddProduct() {
      this.$router.push("/admin/products/new");
    },
  },
  created() {
    if (Cookies.get("lemonToken")) {
      this.getProducts();
    } else {
      this.$router.push("/entrance/login");
    }
    emitter.on("refreshBeanList", () => {
      this.getProducts();
    });
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  font-family: system-ui;
}

.products-wrap {
  max-width: 1200px;
  margin: auto;
}

.add-btn-container {
  display: flex;
  flex-direction: row-reverse;
}

.add-btn {
  background: #2185d0;
  padding: 10px 15px;
  border-radius: 3px;
  font-size: 16px;
  color: #fff;
  border: 1px solid #2185d0;
  margin-right: 15px;
  margin-top: 15px;
  cursor: pointer;
}

.add-btn:hover {
  background: #1678c2;
}
</style>
