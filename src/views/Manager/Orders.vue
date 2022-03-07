<template>
  <div>
    <DataTable
      :value="orders"
      :paginator="true"
      class="p-datatable-customers"
      :rows="5"
      dataKey="id"
      :rowHover="true"
      v-model:filters="filters"
      :loading="false"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 25, 50]"
      currentPageReportTemplate="顯示第 {first} ~ {last} 筆 , 共 {totalRecords} 筆訂單"
      :globalFilterFields="[
        'id',
        'created_at',
        'payment_status',
        'status',
        'shipping_status',
      ]"
      filterDisplay="menu"
      responsiveLayout="scroll"
      selectionMode="single"
      stateStorage="local"
      stateKey="dt-state-demo-local"
      v-model:selection="orders.items"
      @click="openTheOrder(orders.items)"
    >
      <template #header>
        <div class="p-d-flex p-jc-center p-ai-center">
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
            />
          </span>
          <Button
            type="button"
            icon="pi pi-filter-slash"
            label="清空"
            class="p-button-outlined"
            @click="clearFilters()"
          />
        </div>
      </template>
      <Column
        class="header-body"
        field="id"
        header="訂單編號"
        sortable
        style="min-width: 6rem"
      >
        <template #body="{ data }" class="text-center">
          {{ data.id }}
        </template>
      </Column>
      <Column
        class="text-center"
        field="created_at"
        header="成立時間"
        sortable
        style="min-width: 9rem"
      >
        <template #body="{ data }">
          {{ changeDateText(data.created_at) }}
        </template>
      </Column>
      <Column
        field="status"
        header="訂單狀態"
        :sortable="true"
        style="min-width: 6rem"
      >
        <template #body="{ data }">
          <span>{{ orderStatusText(data.status) }}</span>
        </template>
      </Column>
      <Column
        field="payment_status"
        header="付款狀態"
        sortable
        style="min-width: 6rem"
      >
        <template #body="{ data }">
          {{ paymentStatusText(data.payment_status) }}
        </template>
      </Column>
      <Column
        field="shipping_status"
        header="物流狀態"
        sortable
        style="min-width: 6rem"
      >
        <template #body="{ data }">
          {{ shippingStatusText(data.shipping_status) }}
        </template>
      </Column>
    </DataTable>

    <Dialog
      :header="`訂單編號 ${order.id}`"
      v-model:visible="orderContent"
      :style="{ maxwidth: '70vw' }"
    >
      <h4 class="p-mt-0">成立時間 {{ changeDateText(order.created_at) }}</h4>
      <div
        v-for="item in order.items"
        :key="item.id"
        class="p-grid p-m-0 p-py-3 divider p-ai-center p-jc-between"
      >
        <div class="p-col-12 p-lg-5 p-pl-3">
          {{ item.name }}<br />
          磨粉不磨粉?<br />
        </div>
        <div class="p-col-5 p-lg-3 p-pl-3">
          $ {{ item.unit_price }} / {{ typeText(item.package_type) }}
        </div>
        <div class="p-col-3 p-lg-1 p-p-0 p-my-3">數量 {{ item.quantity }}</div>
        <div class="p-col-3 p-lg-2 p-text-right subtotal-container">
          <div>$ {{ item.unit_price * item.quantity }}</div>
        </div>
      </div>

      <div class="p-grid p-mx-0 p-my-2">
        <div class="p-col-12">
          <div class="p-grid p-jc-between p-text-right p-ai-center">
            <div class="p-col-7 p-lg-9 p-pr-0">小計</div>
            <div class="p-col-5 p-lg-3">${{ caculateSubtotal(order) }}</div>

            <div class="p-col-7 p-lg-9 p-pr-0">運費</div>
            <div class="p-col-5 p-lg-3">
              $ {{ order.shipping_info.shipping_fee }}
            </div>

            <div class="p-col-7 p-lg-9 p-text-bold checkout-price p-pr-0">
              總付款金額
            </div>
            <div class="p-col-5 p-lg-3 p-text-bold checkout-price">
              ${{ caculateSubtotal(order) + order.shipping_info.shipping_fee }}
            </div>
          </div>
        </div>
      </div>

      <div class="divider p-pl-3">
        <h4>收件人資料</h4>
      </div>

      <div class="p-grid p-m-1 p-pl-2 divider p-pb-1 p-ai-center">
        <div class="p-col-4 p-lg-1 p-text-bold">姓名</div>
        <div class="p-col-8 p-lg-11">{{ order.shipping_info.name }}</div>

        <div class="p-col-4 p-lg-1 p-text-bold">電話</div>
        <div class="p-col-8 p-lg-11">
          {{ order.shipping_info.phone_number }}
        </div>

        <div class="p-col-4 p-lg-1 p-text-bold">Email</div>
        <div class="p-col-8 p-lg-11">{{ order.shipping_info.email }}</div>

        <div class="p-col-4 p-lg-1 p-text-bold">送貨方式</div>
        <div class="p-col-8 p-lg-11">
          {{ shippingMethodText(order.shipping_info.shipping_method) }}
        </div>

        <div
          v-if="order.shipping_info.shipping_method === 'home_delivery'"
          class="p-col-4 p-lg-1 p-text-bold"
        >
          收件地址
        </div>
        <div
          v-if="order.shipping_info.shipping_method === 'home_delivery'"
          class="p-col-8 p-lg-11"
        >
          {{ order.shipping_info.address }}
        </div>

        <div class="p-col-4 p-lg-1 p-text-bold">付款方式</div>
        <div class="p-col-8 p-lg-11">
          {{ paymentMethodText(order.payment_method) }}
        </div>

        <div class="p-col-4 p-lg-1 p-text-bold">備註</div>
        <div class="p-col-8 p-lg-11">{{ order.note }}</div>
      </div>

      <div class="p-grid p-m-1 p-pl-2 p-ai-center">
        <div class="p-col-12 p-lg-1 p-text-bold">付款狀態</div>
        <div class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
          <span v-if="true" class="status-styles blue-style-color p-mr-4">
            {{ paymentStatusText(order.payment_status) }}
          </span>
          <span v-if="true" class="status-styles success-color p-mr-4">
            已付款<i class="pi pi-check-circle p-ml-1"></i>
          </span>

          <Button
            label="確認付款"
            class="
              p-button-raised
              p-button-info
              p-button-sm
              p-lg-fixed
              p-col-3
              p-px-2
            "
            style="width: 100px"
          />
        </div>

        <div class="p-col-12 p-lg-1 p-text-bold">訂單狀態</div>
        <div class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
          <span class="status-styles blue-style-color">
            {{ orderStatusText(order.status) }}
          </span>

          <i class="pi pi-arrow-right p-mx-1 blue-style-color"></i>

          <Button
            label="確認訂單"
            class="
              p-button-raised
              p-button-info
              p-button-sm
              p-lg-fixed
              p-col-3
              p-px-2
            "
            style="width: 100px"
          />
          <span v-if="false" class="status-styles blue-style-color"
            >已確認</span
          >
          <i v-if="false" class="pi pi-arrow-right p-mx-1 blue-style-color"></i>
          <i class="pi pi-arrow-right p-mx-1 disabled-right"></i>
          <span class="status-styles disabled-style-color">已完成</span>
          <span v-if="false" class="status-styles">已完成</span>
        </div>

        <div class="p-col-12 p-lg-1 p-text-bold">物流狀態</div>
        <div class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
          <span class="status-styles blue-style-color">
            {{ shippingStatusText(order.shipping_status) }}
          </span>

          <i class="pi pi-arrow-right p-mx-1 blue-style-color"></i>
          <Button
            v-if="false"
            label="確認發貨"
            class="
              p-button-raised
              p-button-info
              p-button-sm
              p-lg-fixed
              p-col-2
              p-px-2
            "
            style="width: 100px"
          />
          <span v-if="true" class="status-styles blue-style-color">
            已發貨
          </span>

          <i v-if="true" class="pi pi-arrow-right p-mx-1 blue-style-color"></i>

          <i v-if="false" class="pi pi-arrow-right p-mx-1 disabled-right"></i>
          <Button
            v-if="false"
            label="確認到達"
            class="
              p-button-raised
              p-button-info
              p-button-sm
              p-lg-fixed
              p-col-2
              p-px-2
            "
            style="width: 100px"
          />
          <span v-if="false" class="status-styles disabled-style-color">
            已到達
          </span>

          <span v-if="true" class="status-styles blue-style-color">
            已到達
          </span>
          <i v-if="false" class="pi pi-arrow-right p-mx-1 disabled-right"></i>
          <i v-if="true" class="pi pi-arrow-right p-mx-1 blue-style-color"></i>

          <Button
            label="確認取貨"
            class="
              p-button-raised
              p-button-info
              p-button-sm
              p-lg-fixed
              p-col-3
              p-px-2
            "
            style="width: 100px"
          />
          <span v-if="false" class="status-styles disabled-style-color">
            已取貨
          </span>

          <span v-if="false" class="status-styles blue-style-color">
            已取貨
          </span>
        </div>
      </div>

      <template #footer>
        <Button label="關閉視窗" @click="closeTheOrder" autofocus />
      </template>
    </Dialog>
  </div>
</template>

<script>
import { FilterMatchMode } from "primevue/api";
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
      orders: [],
      orderContent: false,
      order: "",
      paymentStatus: ["unpaid", "paid"],
      orderStatus: ["pending", "confirmed", "finished"],
      shippingStatus: ["in_preparation", "shipping", "arrived", "picked_up"],
      paymentCompleted: false,
    };
  },
  methods: {
    getOrders() {
      const api = `${process.env.VUE_APP_API}/users/orders`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .get(api, { headers })
        .then((response) => {
          this.orders = response.data;
          console.log(this.orders);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            Cookies.remove("lemonToken");
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
          }
        });
    },
    showErrorToast(text) {
      this.$toast.add({
        severity: "error",
        summary: text,
        life: 5000,
      });
    },
    clearFilters() {
      this.initFilters();
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
    changeDateText(time) {
      return new Date(Date.parse(time)).toLocaleString();
    },
    orderStatusText(status) {
      switch (status) {
        case "pending":
          return "處理中";
        case "confirmed":
          return "已確認";
        case "finished":
          return "已完成";
        case "canceled":
          return "已取消";
      }
    },
    paymentStatusText(payment_status) {
      switch (payment_status) {
        case "outstanding":
        case "unpaid":
          return "未付款";
        case "failed":
          return "付款失敗";
        case "paid":
          return "已付款";
      }
    },
    shippingStatusText(shipping_status) {
      switch (shipping_status) {
        case "in_preparation":
          return "備貨中";
        case "shipping":
          return "已發貨";
        case "arrived":
          return "已到達";
        case "picked_up":
          return "已取貨";
      }
    },
    openTheOrder(the_order) {
      this.order = { ...the_order };
      console.log(this.order);
      this.orderContent = true;
    },
    closeTheOrder() {
      this.orderContent = false;
    },
    typeText(package_type) {
      switch (package_type) {
        case "drip_bag":
          return "耳掛";
        case "half_pound":
          return "半磅";
        case "one_pound":
          return "一磅";
      }
    },
    caculateSubtotal(order) {
      let total = 0;
      order.items.forEach((item) => {
        total += item.unit_price * item.quantity;
      });
      return total;
    },
    shippingMethodText(shipping_method) {
      if (shipping_method === "home_delivery") {
        return "宅配";
      }
    },
    paymentMethodText(payment_method) {
      if (payment_method === "cash_on_delivery") {
        return "貨到付款";
      }
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

<style lang="scss" scoped>
// * {
//   border: 1px solid black;
// }
.status-styles {
  // width: 70px;
  text-align: center;
  // border-radius: 2px;
  // padding: 0.25em 0.5rem;
  font-size: 16px;
  font-weight: 700;
  // margin: 15px 0px;
}
.blue-style-color {
  // background: #b3e5fc;
  // border: 1px solid #23547b;
  color: #0288d1;
}
.disabled-style-color {
  // border: #ccc 1px solid;
  color: #ccc;
}
.disabled-right {
  color: #ccc;
}
.success-color {
  // background: #c8e6c9;
  color: #689f38;
}
</style>
