<template>
  <Galleria
    class="wrap"
    :value="images"
    :autoPlay="true"
    :circular="true"
    :transitionInterval="5000"
    :showThumbnails="false"
    :showIndicators="true"
    :changeItemOnIndicatorHover="true"
  >
    <template #item="slotProps">
      <div class="img-container p-d-flex p-jc-center p-ai-center">
        <img
          class="img-body"
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
        />
      </div>
    </template>
  </Galleria>
</template>

<script>
import IMG1 from "@/assets/img/homeImg/5.jpg";
import IMG2 from "@/assets/img/homeImg/6.jpg";
import IMG3 from "@/assets/img/homeImg/9-1.jpg";
import IMG4 from "@/assets/img/homeImg/17-1.jpg";
import IMG5 from "@/assets/img/homeImg/18-1.jpg";
import IMG6 from "@/assets/img/homeImg/19-1.jpg";
import IMG7 from "@/assets/img/homeImg/12.jpg";

export default {
  data() {
    return {
      images: [
        {
          itemImageSrc: IMG1,
        },
        {
          itemImageSrc: IMG2,
        },
        {
          itemImageSrc: IMG3,
        },
        {
          itemImageSrc: IMG4,
        },
        {
          itemImageSrc: IMG5,
        },
        {
          itemImageSrc: IMG6,
        },
        {
          itemImageSrc: IMG7,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.img-container {
  margin-top: 10px;
  min-height: 400px;
}

.img-body {
  max-height: 600px;
  max-width: 100%;
}
</style>
