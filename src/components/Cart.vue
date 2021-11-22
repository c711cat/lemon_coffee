<template>
  <h4>購物車清單</h4>
  <!-- 分隔線 -->
  <div class="p-grid nested-grid" v-for="item in products" :key="item.id">
    <div class="p-col-1.5 p-lg-1">
      <div class="box">
        <Button
          icon="pi pi-trash"
          class="p-button-rounded p-button-text p-button-danger"
        >
        </Button>
      </div>
    </div>
    <div class="p-col-10">
      <div class="p-grid">
        <div class="p-col-3 p-lg-1">
          <div class="box"><img :src="item.image" class="product-image" /></div>
        </div>
        <div class="p-col-9 p-lg-6">
          <div class="box">
            {{ item.name }}<br />
            {{ item.status }}<br />
            {{ item.unit }}
          </div>
        </div>
        <div class="p-col-3 p-lg-1">
          <div class="box">$ {{ item.price }}</div>
        </div>
        <div class="p-col-2 p-lg-1">
          <div class="box">{{ item.qty }}</div>
        </div>
        <div class="p-col-4 p-lg-2">
          <div class="box">{{ item.discount }}</div>
        </div>
        <div class="p-col-3 p-lg-1">
          <div class="box">$ {{ item.price * item.qty }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productService: null,
      products: [
        {
          id: 1,
          name: "耶家雪菲 日曬 古吉 夏奇索 魔魔拉單一莊園 G1",
          image:
            "https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          status: "原豆-不磨粉",
          unit: "半磅",
          price: 450,
          qty: 1,
        },
        {
          id: 2,
          name: "肯亞 AA FAQ 159 批次",
          image:
            "https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          status: "耳掛",
          unit: "一包",
          price: 40,
          qty: 40,
          discount: "多件優惠",
        },
        {
          id: 3,
          name: "哥倫比亞 娜玲瓏 山塔那小農協會 水洗",
          image:
            "https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          status: "磨粉",
          unit: "一磅",
          price: 720,
          qty: 2,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 1000px;
}

.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.body-container {
  display: flex;
  flex-wrap: wrap;
}

.name-container {
  max-width: 400px;
}

.box {
  // background-color: var(--surface-e);
  // text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
