<template>
  <ConfirmPopup></ConfirmPopup>
  <Toast />
  <Button
    @click="confirm2($event)"
    icon="pi pi-times"
    label="Delete"
    class="p-button-danger p-button-outlined"
  ></Button>
</template>
<script>
import ConfirmPopup from "primevue/confirmpopup";
import Toast from "primevue/toast";

export default {
  data() {
    return {};
  },
  components: { ConfirmPopup, Toast },
  methods: {
    confirm1(event) {
      this.$confirm.require({
        target: event.currentTarget,
        message: "Are you sure you want to proceed?",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.$toast.add({
            severity: "info",
            summary: "Confirmed",
            detail: "You have accepted",
            life: 3000,
          });
        },
        reject: () => {
          this.$toast.add({
            severity: "error",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    },
  },
};
</script>
