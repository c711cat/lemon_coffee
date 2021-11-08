<template>
  <div class="ui tiny modal">
    <div class="header">刪除產品</div>
    <div class="content">
      <p>是否刪除 :</p>
      <p class="del-item-text">{{ delItem.name }}</p>
      <p>刪除後將無法復原</p>
    </div>
    <div class="actions">
      <div class="ui cancel button">取消</div>
      <div class="ui red button" @click.prevent="closeModal(delItem.id)">
        確定刪除
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    delItem: {
      typeof: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    openModal() {
      jQuery(".ui.tiny.modal").modal("show");
    },
    closeModal(delId) {
      jQuery(".ui.tiny.modal").modal("hide");
      this.$emit("del", delId);
    },
  },
};
</script>
<style lang="scss" scoped>
.ui .modal {
  letter-spacing: 1px;
}
.modal .header {
  background: #db2828;
  color: #fff;
  padding: 25px;
}
.modal .content {
  font-size: 18px;
  padding: 30px;
}
.actions .button {
  font-size: 16px;
}
.del-item-text {
  color: #db2828;
  font-weight: bold;
}
</style>
