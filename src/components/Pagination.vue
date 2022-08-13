<template>
  <nav class="p-mb-6">
    <ul class="p-grid p-m-0 p-jc-center p-ai-center">
      <li>
        <div
          :class="{ disabledColor: current_page === 1 }"
          class="pi pi-angle-left p-mx-2 p-d-flex p-jc-center p-ai-center page"
          @click.prevent="goToPrePage"
        ></div>
      </li>

      <li v-for="page in total_pages" :key="page">
        <div
          @click.prevent="updateCurrentPage(page)"
          :class="{ atCurrentPage: page === current_page }"
          class="p-mx-3 p-d-flex p-jc-center p-ai-center page"
        >
          {{ page }}
        </div>
      </li>

      <li>
        <div
          :class="{
            disabledColor: current_page === total_pages,
          }"
          class="pi pi-angle-right p-mx-2 p-d-flex p-jc-center p-ai-center page"
          @click.prevent="goToNextPage"
        ></div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      totalItems: null,
      current_page: 1,
      total_pages: null,
    };
  },
  props: {
    allProducts: {
      type: Object,
    },
    row: {
      type: Number,
    },
  },
  watch: {
    allProducts() {
      this.totalItems = [...this.allProducts];
      this.total_pages = Math.ceil(this.totalItems.length / this.row);
      this.updateCurrentPage(1);
    },
  },
  methods: {
    goToPrePage() {
      let prePageNum = "";
      if (this.current_page === 1) {
        prePageNum = 1;
      } else {
        prePageNum = this.current_page - 1;
      }
      this.updateCurrentPage(prePageNum);
    },
    goToNextPage() {
      let nextPageNum = "";
      if (this.current_page === this.total_pages) {
        nextPageNum = this.total_pages;
      } else {
        nextPageNum = this.current_page + 1;
      }
      this.updateCurrentPage(nextPageNum);
    },
    updateCurrentPage(page) {
      this.current_page = page;
      const minData = this.current_page * this.row - this.row + 1;
      const maxData = this.current_page * this.row;
      const filterData = [];
      this.totalItems.forEach((item, index) => {
        const num = index + 1;
        if (num >= minData && num <= maxData) {
          filterData.push(item);
          this.$emit("filter-current-page-data", filterData);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>

ul {
  list-style-type: none;
}

.page {
  color: #63757d;
  cursor: pointer;
  height: 40px;
  width: 40px;
}

.page:hover {
  background: #e9ecef;
  color: #343a40;
  border: 1px solid #e9ecef;
  border-radius: 50%;
}

.atCurrentPage {
  background: #fff5ef;
  color: #d8521d;
  border: 1px solid #fff5ef;
  height: 40px;
  width: 40px;
  border-radius: 100%;
}

.atCurrentPage:hover {
  background: #fff5ef;
  color: #d8521d;
  border: 1px solid #fff5ef;
}

.disabledColor {
  color: rgba(165, 164, 164, 0.558);
  cursor: default;
}

.disabledColor:hover {
  background: #fff;
  border: none;
  color: rgba(165, 164, 164, 0.558);
  cursor: default;
}
</style>
