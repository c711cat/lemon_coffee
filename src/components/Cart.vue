<template>
  <div>
    <DataTable :value="products" responsiveLayout="scroll">
      <template #header>
        <div class="table-header">
          Products0
          <Button icon="pi pi-refresh" />
        </div>
      </template>
      <Column field="name" header="Name1"></Column>
      <Column header="Name2">
        <template #body="slotProps">
          {{ slotProps.data.name }}
        </template>
      </Column>

      <Column header="Image2">
        <template #body="slotProps">
          <img :src="slotProps.data.image" class="product-image" />
        </template>
      </Column>
      <Column header="Price3">
        <template #body="slotProps">
          {{ slotProps.data.price }}
        </template>
      </Column>

      <template #footer> 6 In total there are products. </template>
    </DataTable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productService: null,
      products: [
        {
          name: "hhhhh",
          image:
            "https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          price: 450,
          p: "",
        },
        {
          name: "hhhhh",
          image:
            "https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          price: 450,
          p: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
