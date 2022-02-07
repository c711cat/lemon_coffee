<template>
  <Loading :isLoading="isLoading" />
  <ConfirmDialog></ConfirmDialog>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import Loading from "@/components/Loading.vue";
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: { Loading },
  inject: ["emitter"],
  methods: {
    openConfirm(item) {
      this.$confirm.require({
        message: item.name + " ?",
        header: "確定刪除",
        acceptClass: "p-button-danger",
        acceptLabel: "確定",
        rejectLabel: "取消",
        accept: () => {
          this.delProduct(item);
        },
      });
    },
    delProduct(item) {
      const api = `${process.env.VUE_APP_API}/admin/products/${item.id}`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      this.isLoading = true;
      axios
        .delete(api, { headers })
        .then((response) => {
          if (response.status === 204) {
            this.emitter.emit("refreshBeanList");
            this.$toast.add({
              severity: "success",
              summary: "已成功刪除",
              detail: item.name,
              life: 10000,
            });
          }
        })
        .catch(() => {
          this.$router.push("/entrance/login");
        });
    },
  },
};
</script>
