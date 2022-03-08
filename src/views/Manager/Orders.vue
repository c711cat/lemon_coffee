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
          <strong v-if="!paymentCompeleted" class="blue-color p-mr-4">
            {{ paymentStatusText(order.payment_status) }}
          </strong>
          <strong v-if="paymentCompeleted" class="success-color p-mr-4">
            已付款<i class="pi pi-check-circle p-ml-1"></i>
          </strong>

          <Button
            v-if="!paymentCompeleted"
            @click="confirm_paid"
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
          <OrderStatus />
        </div>

        <div class="p-col-12 p-lg-1 p-text-bold">物流狀態</div>
        <div class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
          <ShippingStatus />
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
import ShippingStatus from "@/components/ShippingStatus.vue";
import OrderStatus from "@/components/OrderStatus.vue";

export default {
  data() {
    return {
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
      orders: [],
      orderContent: false,
      order: "",
      paymentCompeleted: false,
    };
  },
  components: { ShippingStatus, OrderStatus },
  methods: {
    getOrders() {
      const api = `${process.env.VUE_APP_API}/users/orders`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .get(api, { headers })
        .then((response) => {
          this.orders = response.data;
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
    confirm_paid() {
      this.paymentCompeleted = true;
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

<style lang="scss" scoped>
.blue-color {
  color: #0288d1;
}

.success-color {
  color: #689f38;
}
</style>
