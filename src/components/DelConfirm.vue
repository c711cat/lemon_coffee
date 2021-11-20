<template>
  <div>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  inject: ["emitter"],
  methods: {
    confirm(item) {
      this.$confirm.require({
        message: item.name + " ?",
        header: "確定刪除",
        acceptClass: "p-button-danger",
        acceptLabel: "確定",
        rejectLabel: "取消",
        accept: () => {
          const api = `${process.env.VUE_APP_API}/admin/products/${item.id}`;
          axios.delete(api).then((response) => {
            if (response.status === 204) {
              this.emitter.emit("update");
              this.$toast.add({
                severity: "success",
                summary: "已成功刪除",
                detail: item.name,
                life: 10000,
              });
            }
          });
        },
        reject: () => {
          this.$toast.add({
            severity: "info",
            summary: "已取消刪除",
            detail: item.name,
            life: 10000,
          });
        },
      });
    },
  },
};
</script>
