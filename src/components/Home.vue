<template>
  <div>
    <Galleria
      :value="images"
      :autoPlay="true"
      :circular="true"
      :transitionInterval="5000"
      :showThumbnails="false"
      :changeItemOnIndicatorHover="true"
      :showItemNavigators="true"
    >
      <template #item="slotProps">
        <div class="p-d-flex p-jc-center p-ai-center">
          <img class="img-body" :src="slotProps.item.itemImageSrc" />
        </div>
      </template>
    </Galleria>
  </div>

  <div
    class="
      p-d-flex p-flex-wrap p-flex-row-reverse p-jc-between p-ai-center p-mt-5
      img-and-content-container
    "
  >
    <div class="p-col-12 p-lg-3">
      <h2 class="p-text-center">
        <span class="title-style p-px-3">剛烘好、最新鮮</span>
      </h2>
      <p>
        為確保最新鮮的咖啡豆，我們接單現烘，並在每份咖啡豆標上「烘焙日期」，就是要讓您喝下的不只有美味、更滿是新鮮！
      </p>
      <p>「新鮮」的堅持，喝過一次就愛上！</p>
      <router-link to="/beanlist" class="link-content p-text-center">
        <Button
          label="查看豆單"
          class="p-button-warning p-button-text p-px-4 p-py-2"
        >
        </Button>
      </router-link>
    </div>
    <div class="p-col-12 p-lg-8">
      <img
        class="img-body"
        src="https://images.unsplash.com/photo-1531711964235-a035b2c9e440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="咖啡豆散熱"
      />
    </div>
  </div>

  <div
    class="
      p-d-flex p-flex-wrap p-jc-between p-ai-center
      img-and-content-container
      p-mt-3
    "
  >
    <div class="p-col-12 p-lg-3">
      <h2 class="p-text-center">
        <span class="title-style p-px-3">滿千免運</span>
      </h2>
      <p>全站消費滿 NT$ 1000 即享宅配到府免運優惠。</p>
      <router-link to="/beanlist" class="link-content p-text-center">
        <Button
          label="前往選購"
          class="p-button-warning p-button-text p-px-4 p-py-2"
        >
        </Button>
      </router-link>
    </div>
    <div class="p-col-12 p-lg-8 p-text-right">
      <img
        class="img-body"
        src="https://images.unsplash.com/photo-1562186971-736d2e3ae153?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt="袋裝咖啡豆"
      />
    </div>
  </div>

  <div
    class="
      p-d-flex
      p-flex-wrap
      p-flex-row-reverse
      p-jc-between
      p-ai-center
      p-mt-3
      p-mb-5
      img-and-content-container
    "
  >
    <div class="p-col-12 p-lg-3">
      <h2 class="p-text-center">
        <span class="title-style p-px-3">客製化磨豆</span>
      </h2>
      <p>我們提供代磨咖啡豆服務。</p>
      <p>下單時可於備註告知需要磨豆的粗細或使用的咖啡器具。</p>
      <router-link to="/beanlist" class="link-content p-text-center">
        <Button
          label="商品專區"
          class="p-button-warning p-button-text p-px-4 p-py-2"
        >
        </Button>
      </router-link>
    </div>

    <div class="p-d-flex p-col-12 p-lg-8">
      <div class="p-mr-2">
        <img
          class="img-body"
          src="https://images.unsplash.com/photo-1523063308874-cecc260a3171?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=80"
          alt="手沖"
        />
      </div>

      <div>
        <img
          class="img-body"
          src="https://images.unsplash.com/photo-1452415005154-c06158558480?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
          alt="moka pot"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IMG1 from "@/assets/img/homeImg/crew-9rTEwV_G0Do-unsplash.jpg";
import IMG2 from "@/assets/img/homeImg/angelina-yan-xRFffIGVQAk-unsplash.jpg";
import IMG3 from "@/assets/img/homeImg/rene-porter-7RYrEvbqFM8-unsplash.jpg";
import IMG4 from "@/assets/img/homeImg/annie-spratt-CSQQ6_T0sks-unsplash.jpg";
import IMG5 from "@/assets/img/homeImg/seb-mooze-KS4TVO9UQiM-unsplash.jpg";

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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.link-content {
  display: block;
  text-decoration: none;
}

.img-body {
  max-width: 100%;
}

.img-and-content-container {
  margin-right: 15%;
  margin-left: 15%;
}

.title-style {
  color: #6d6050;
  border-left: 1px solid rgb(222, 226, 230);
  border-right: 1px solid rgb(222, 226, 230);
}
</style>
