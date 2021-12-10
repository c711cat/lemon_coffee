<template>
  <div class="products-wrap">
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

export default {
  data() {
    return {
      products: [],
      showEditButton: true,
      disableDrag: false,
    };
  },
  components: {
    CleanBeanList,
  },
  inject: ["emitter"],
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/admin/products`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .get(api, { headers })
        .then((response) => {
          this.products = [...response.data];
        })
        .catch(() => {
          this.$router.push("/m-admin/login");
        });
    },
    toAddProduct() {
      this.$router.push("/m-admin/products/new");
    },
  },
  created() {
    if (Cookies.get("lemonToken")) {
      this.getProducts();
    } else {
      this.$router.push("/m-admin/login");
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
