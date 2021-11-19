<template>
  <ConfirmPopup group="delete"> </ConfirmPopup>

  <Toast />

  <!-- <Button
    @click="confirm2($event)"
    label="刪除"
    class="p-button-danger p-button-outlined"
  ></Button> -->
</template>
<script>
import ConfirmPopup from "primevue/confirmpopup";
import Toast from "primevue/toast";
import axios from "axios";

export default {
  data() {
    return {};
  },
  components: { ConfirmPopup, Toast },
  inject: ["emitter"],
  methods: {
    confirm2(item, event) {
      this.$confirm.require({
        target: event.currentTarget,
        group: "delete",
        message: "確定刪除此產品?",
        icon: "pi pi-question-circle",
        acceptClass: "p-button-danger",
        accept: () => {
          const api = `${process.env.VUE_APP_API}/admin/products/${item.id}`;
          axios.delete(api).then((response) => {
            if (response.status === 204) {
              this.emitter.emit("update");
              this.$toast.add({
                severity: "success",
                summary: "已成功刪除",
                detail: item.name,
                life: 20000,
              });
            }
          });
        },
        reject: () => {
          this.$toast.add({
            severity: "info",
            summary: "已取消刪除",
            detail: item.name,
            life: 20000,
          });
        },
      });
    },
  },
};
</script>
