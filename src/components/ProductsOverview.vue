<template>
  <Loading v-if="isLoading" />
  <div
    v-else
    class="
      p-grid p-my-5 p-mx-auto p-col-12 p-text-center
      products-overview-wrap
    "
  >
    <router-link
      :to="`/products/${item.id}`"
      v-for="item in currentPageItems"
      :key="item.id"
      class="p-lg-4 p-col-12 p-p-6 item-container link-content"
    >
      <img
        class="p-col-fixed"
        style="width: 100%"
        src="https://images.unsplash.com/photo-1554675427-1d637bdb5a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80"
        alt=""
      />

      <div class="p-text-bold p-py-2 name-container">{{ item.name }}</div>
      <Roast
        :roast="item.roast"
        class="p-text-bold p-d-flex p-jc-center p-pb-2"
      >
      </Roast>
      <div class="p-text-bold p-py-2 p-mb-2">
        $ {{ item.drip_bag_price }} ~ $ {{ item.one_pound_price }}
      </div>

      <Button
        v-if="isMyFavorite(item.id)"
        @click.prevent="delMyFavorite(item)"
        label="移除收藏"
        icon="pi pi-heart-fill"
        class="p-button-outlined p-button-warning"
      />
      <Button
        v-else
        @click.prevent="addMyFavorite(item)"
        label="加入收藏"
        icon="pi pi-heart"
        class="p-button-outlined p-button-warning"
      />
    </router-link>
  </div>
  <Pagination
    :row="6"
    :allProducts="products"
    @filter-current-page-data="filterData"
  ></Pagination>
</template>

<script>
import axios from "axios";
import Roast from "@/components/Roast.vue";
import Pagination from "@/components/Pagination.vue";
import Loading from "@/components/Loading.vue";

export default {
  data() {
    return {
      products: [],
      currentPageItems: null,
      isLoading: false,
      roast: null,
      myFavoriteList: null,
      forMilkId: {
        2: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
        148: true,
      },
    };
  },
  components: { Roast, Pagination, Loading },
  inject: ["emitter"],
  computed: {},
  methods: {
    isMyFavorite(id) {
      let favorite = "";
      this.myFavoriteList.forEach((item) => {
        if (item.id === id) {
          favorite = true;
        }
      });
      return favorite;
    },
    addMyFavorite(item) {
      this.myFavoriteList.push(item);
      localStorage.setItem("myFavorite", JSON.stringify(this.myFavoriteList));
      this.showSuccessToast("已加入收藏清單");
    },
    delMyFavorite(item) {
      this.myFavoriteList.filter((myFavoriteItem, index) => {
        if (myFavoriteItem.id === item.id) {
          return this.myFavoriteList.splice(index, 1);
        }
      });
      localStorage.setItem("myFavorite", JSON.stringify(this.myFavoriteList));
      this.showInfoToast("已移除收藏");
    },
    filterData(data) {
      this.currentPageItems = data;
    },
    getAllProducts() {
      const api = `${process.env.VUE_APP_API}/products`;
      this.isLoading = true;
      axios
        .get(api)
        .then((response) => {
          this.products = response.data;
          this.myFavoriteList =
            JSON.parse(localStorage.getItem("myFavorite")) || [];
          if (
            this.$route.params.roast !== "all" &&
            this.$route.params.roast !== "for_milk"
          ) {
            this.filterDifferentRoast();
          }
          if (this.$route.params.roast === "for_milk") {
            this.filterForMlik();
          } else {
            return;
          }
        })
        .catch((error) => {
          return error;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    filterForMlik() {
      const allItems = this.products;
      this.products = allItems.filter((item) => {
        return this.forMilkId[item.id] === true;
      });
    },
    filterDifferentRoast() {
      const allItems = this.products;
      this.products = allItems.filter((item) => {
        return item.roast == this.$route.params.roast;
      });
    },
    showSuccessToast(text) {
      this.$toast.add({
        severity: "success",
        summary: text,
        life: 2000,
      });
    },
    showInfoToast(text) {
      this.$toast.add({
        severity: "info",
        summary: text,
        life: 2000,
      });
    },
  },
  watch: {
    roast() {
      this.getAllProducts();
    },
  },
  created() {
    this.getAllProducts();
  },
  updated() {
    this.roast = this.$route.params.roast;
  },
};
</script>

<style lang="scss" scoped>
.products-overview-wrap {
  max-width: 1300px;
}

.item-container {
  border-radius: 5px;
  cursor: pointer;
}

.item-container:hover {
  background: #f9f5ef;
}

.link-content {
  text-decoration: none;
  color: #2c3e50;
}

.name-container {
  height: 60px;
}
</style>
