<template>
  <Galleria
    :value="images"
    :autoPlay="true"
    :circular="true"
    :transitionInterval="5000"
    :showThumbnails="false"
    :showIndicators="true"
    :changeItemOnIndicatorHover="true"
  >
    <template #item="slotProps">
      <img
        :src="slotProps.item.itemImageSrc"
        :alt="slotProps.item.alt"
        style="width: 100%; display: block"
      />
    </template>
  </Galleria>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          itemImageSrc:
            "https://images.unsplash.com/photo-1609359487676-c932afc65052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80",
        },
        {
          itemImageSrc:
            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        },
      ],
    };
  },
};
</script>
