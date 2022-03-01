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
      filterDisplay="menu"
      :loading="false"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 25, 50]"
      currentPageReportTemplate="顯示第 {first} ~ {last} 筆，共 {totalRecords} 筆訂單"
      :globalFilterFields="[
        'id',
        'created_at',
        'payment_status',
        'status',
        'shipping_status',
      ]"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex justify-content-center align-items-center">
          <h5 class="m-0">訂單</h5>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
            />
          </span>
        </div>
      </template>
      <Column field="id" header="訂單編號" sortable style="min-width: 14rem">
        <template #body="{ data }">
          {{ data.id }}
        </template>
      </Column>
      <Column
        field="created_at"
        header="訂單成立時間"
        sortable
        style="min-width: 14rem"
      >
        <template #body="{ data }">
          {{ data.created_at }}
        </template>
      </Column>
      <Column
        field="status"
        header="訂單狀態"
        sortable
        style="min-width: 14rem"
      >
        <template #body="{ data }">
          {{ data.status }}
        </template>
      </Column>
      <Column
        field="payment_status"
        header="付款狀態"
        sortable
        style="min-width: 14rem"
      >
        <template #body="{ data }">
          {{ data.payment_status }}
        </template>
      </Column>
      <Column
        field="shipping_status"
        header="物流狀態"
        sortable
        style="min-width: 14rem"
      >
        <template #body="{ data }">
          {{ data.shipping_status }}
        </template>
      </Column>
      <Column
        headerStyle="width: 4rem; text-align: center"
        bodyStyle="text-align: center; overflow: visible"
      >
        <template #body>
          <Button type="button" icon="pi pi-cog"></Button>
        </template>
      </Column>
    </DataTable>
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
  },
  created() {
    this.getOrders();
  },
};
</script>
