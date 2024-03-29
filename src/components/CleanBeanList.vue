<template>
  <div class="wrap">
    <Draggable
      :list="products"
      :disabled="disableDrag"
      item-key="name"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element }">
        <div class="bean-list-unit">
          <div class="bean-list-unit-left">
            <a href="#" @click.prevent="goToProduct(element.id)">
              <div class="unit-up">
                <div class="bean-name">{{ element.name }}</div>
                <div class="bean-price-type">
                  <div class="half-pound-container">
                    <span class="price-title">半磅</span>
                    <span class="price-num"
                      >${{ element.half_pound_price }}
                    </span>
                  </div>
                  <div>
                    <span class="price-title">一磅</span>
                    <span class="price-num"
                      >${{ element.one_pound_price }}
                    </span>
                  </div>
                  <div>
                    <span class="price-title">耳掛</span>
                    <span class="price-num"
                      >${{ element.drip_bag_price }} /包
                    </span>
                  </div>
                </div>
              </div>
              <div class="unit-down">
                <Roast :roast="element.roast"></Roast>
                <div class="flavor-container">
                  <div class="flavor">
                    風味 : {{ element.flavor.join("、") }}
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="bean-list-unit-right" v-if="showEditButton">
            <Button
              label="編輯"
              class="p-button p-button-outlined edit"
              @click.prevent="editProduct(element)"
            >
            </Button>
            <Button
              @click="openDelConfirm(element)"
              label="刪除"
              class="p-button-danger p-button-outlined"
            >
            </Button>
          </div>
        </div>
      </template>
    </Draggable>
  </div>
  <DelConfirm ref="delConfirm"></DelConfirm>
</template>

<script>
import Roast from "@/components/Roast.vue";
import Draggable from "vuedraggable";
import DelConfirm from "@/components/DelConfirm.vue";

export default {
  data() {
    return {
      dragging: false,
    };
  },
  props: {
    products: {
      type: Array,
    },
    showEditButton: {
      type: Boolean,
    },
    disableDrag: {
      type: Boolean,
      default: true,
    },
  },
  components: { Roast, Draggable, DelConfirm },
  methods: {
    editProduct(item) {
      this.$router.push(`/admin/products/edit/${item.id}`);
    },
    openDelConfirm(item) {
      this.$refs.delConfirm.openConfirm(item);
    },
    goToProduct(id) {
      this.$router.push(`/products/${id}`);
    },
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
  padding: 2% 0%;
}

.bean-list-unit {
  padding: 15px 20px;
  margin: 0 auto;
  text-align: left;
  display: flex;
}

.unit-up {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: solid 1px black;
}

.bean-name {
  min-width: 45%;
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
  width: 75px;
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

.bean-list-unit-left {
  width: 100%;
  margin-right: 2%;
}

.bean-list-unit-right {
  display: flex;
  margin-top: 2%;
}

.edit {
  color: #aaa;
}

.p-button.p-button-outlined.edit:hover {
  background: #aaa;
  color: #fff;
}

.p-button {
  font-size: 14px;
  height: 30px;
  padding: 0px;
  width: 45px;
  background: none;
  margin: 0px 1px;
  border-radius: 3px;
  cursor: pointer;
}

.p-button.p-button-danger.p-button-outlined:hover {
  background: rgb(235, 72, 72);
  color: #fff;
}
</style>
