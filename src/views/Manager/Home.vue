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

export default {
  data() {
    return {
      products: [],
      showEditButton: true,
      disableDrag: false,
      token: "",
    };
  },
  components: {
    CleanBeanList,
  },
  provide() {
    return {
      emitter,
    };
  },
  methods: {
    getProducts() {
      axios.defaults.headers.common.Authorization = this.token;
      const api = `${process.env.VUE_APP_API}/admin/products`;
      axios.get(api).then((response) => {
        this.products = [...response.data];
      });
    },
    toAddProduct() {
      this.$router.push("/admin/products/new");
    },
  },
  created() {
    this.token = document.cookie.replace(
      /(?:(?:^|.*;\s*)lemonToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    console.log(this.token);
    if (this.token) {
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
