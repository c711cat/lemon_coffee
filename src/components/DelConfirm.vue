<template>
  <div>
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
              this.emitter.emit("refreshBeanList");
            }
          });
        },
      });
    },
  },
};
</script>
