<template>
  <Loading v-if="isLoading" />
  <div v-else class="wrap p-my-0 p-mx-auto p-p-2">
    <div class="divider p-pl-3">
      <h4>收藏清單</h4>
    </div>

    <div v-if="myFavoriteIsNull" class="p-m-6">目前無收藏的商品</div>

    <div
      v-else
      class="p-grid p-m-0 p-py-3 divider p-ai-center p-jc-between"
      v-for="item in myFavoriteList"
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
            @click.prevent="delMyFavorite(item)"
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
      isLoading: false,
      myFavoriteList: null,
    };
  },
  components: { Loading, Roast },
  inject: ["emitter"],
  methods: {
    getMyFavorite() {
      this.myFavoriteList =
        JSON.parse(localStorage.getItem("myFavorite")) || [];
    },
    delMyFavorite(item) {
      this.myFavoriteList.filter((myFavoriteItem, index) => {
        if (myFavoriteItem.id === item.id) {
          return this.myFavoriteList.splice(index, 1);
        }
      });
      localStorage.setItem("myFavorite", JSON.stringify(this.myFavoriteList));
      this.showInfoToast("已移除收藏");
      this.myFavoriteList =
        JSON.parse(localStorage.getItem("myFavorite")) || [];
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
  computed: {
    myFavoriteIsNull() {
      return this.myFavoriteList.length === 0;
    },
  },
  created() {
    this.getMyFavorite();
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 1200px;
}

.divider {
  border-bottom: 1px solid rgb(235, 233, 233);
}

.product-image {
  width: 60px;
}

.link-content {
  text-decoration: none;
  color: #2c3e50;
}

.link-content:hover {
  background: #f9f5ef70;
}
</style>
