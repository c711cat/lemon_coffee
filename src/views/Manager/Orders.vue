<template>
  <DataTable
    :value="orders"
    :paginator="true"
    class="p-datatable-customers"
    :rows="5"
    dataKey="id"
    :rowHover="true"
    v-model:filters="filters"
    :loading="loading"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
    :rowsPerPageOptions="[5, 10, 25, 50]"
    currentPageReportTemplate="顯示第 {first} ~ {last} 筆 , 共 {totalRecords} 筆訂單"
    :globalFilterFields="['id', 'created_at']"
    filterDisplay="menu"
    responsiveLayout="stack"
    breakpoint="960px"
    stateStorage="local"
    stateKey="dt-state-demo-local"
    v-model:selection="orders.items"
    selectionMode="single"
    @rowSelect="getTheOrder(orders.items.id)"
  >
    <template #header>
      <div class="p-text-center">
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

    <Column field="id" header="訂單編號" sortable style="min-width: 6rem">
      <template #body="{ data }">
        {{ data.id }}
      </template>
    </Column>
    <Column
      field="created_at"
      header="成立時間"
      sortable
      style="min-width: 9rem"
    >
      <template #body="{ data }">
        {{ data.created_at }}
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
  <SingleOrder :order="order" />
</template>

<script>
import { FilterMatchMode } from "primevue/api";
import axios from "axios";
import Cookies from "js-cookie";
import SingleOrder from "@/components/SingleOrder.vue";

export default {
  data() {
    return {
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
      orders: [],
      order: {},
      loading: true,
    };
  },
  components: { SingleOrder },
  inject: ["emitter"],
  methods: {
    getOrders() {
      const api = `${process.env.VUE_APP_API}/admin/orders`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .get(api, { headers })
        .then((response) => {
          this.orders = response.data;
          this.updateDateFormat();
        })
        .catch((error) => {
          if (error.response.status === 401) {
            Cookies.remove("lemonToken");
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    updateDateFormat() {
      this.orders.forEach((item) => {
        const oldStyle = new Date(Date.parse(item.created_at)).toLocaleString();
        const newStyle = oldStyle.replace("/", "-").replace("/", "-");
        item.created_at = newStyle;
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

    getTheOrder(id) {
      const api = `${process.env.VUE_APP_API}/admin/orders/${id}`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .get(api, { headers })
        .then((response) => {
          this.order = { ...response.data };
        })
        .catch((error) => {
          if (error.response.status === 401) {
            Cookies.remove("lemonToken");
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  created() {
    this.getOrders();
    this.emitter.on("updateOrderAllStatus", () => {
      this.getOrders();
    });
  },
};
</script>
