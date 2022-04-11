<template>
  <div
    class="p-grid p-mt-0 nested-grid p-jc-evenly p-ai-center footer-body p-py-5"
  >
    <router-link
      to="/home"
      class="
        link-content
        logo-hover
        p-col-12 p-lg-fixed p-jc-center p-ai-center
      "
      style="width: 240px"
    >
      <div class="box box-stretched p-d-flex p-jc-center p-ai-center">
        <img
          style="width: 70px"
          alt="logo"
          src="../assets/img/LemonCoffee/logo-footer.png"
        />

        <div>
          <div class="eng-text p-col-12 p-pl-0 p-pb-0">WANLE COFFEE</div>
          <div class="chinese-logo p-col-12 p-pt-0">— 灣 裡 咖 啡 —</div>
        </div>
      </div>
    </router-link>

    <div class="p-lg-6 p-grid p-jc-end p-m-0">
      <div>
        <a
          style="display: block"
          class="link-content logo-hover p-col-12"
          href="https://goo.gl/maps/J6VqrUiLvgQGTQR48"
          target="_blank"
          >台南市南區明興路1151巷10-2號
        </a>
        <div class="p-col-12 eng-text">TUE－SUN 10:00－22:00</div>

        <div class="p-col-12 p-pt-2">0983-732-995</div>
        <div class="p-grid p-jc-end p-m-0">
          <a
            style="display: block"
            class="link-content"
            href="https://www.facebook.com/LemonCafes/"
            target="_blank"
          >
            <Button
              class="
                p-button-rounded
                p-button-text
                p-button-plain
                p-col-12
                p-jc-center
              "
            >
              <i class="pi pi-facebook" style="font-size: 2rem"></i>
            </Button>
          </a>

          <a
            style="display: block"
            class="link-content"
            href="https://www.instagram.com/lemoncoffee2016/"
            target="_blank"
          >
            <Button
              class="
                p-button-rounded
                p-button-text
                p-button-plain
                p-col-12
                p-jc-center
              "
            >
              <i class="pi pi-instagram" style="font-size: 2rem"></i>
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="p-grid p-jc-center p-py-2 practice-tag">
    此網站僅為練習使用，不具商業行為
  </div>
</template>

<style lang="scss" scoped>
.footer-body {
  background: #f8f9fa;
  color: #495057;
}

.eng-text {
  font-family: "primeicons";
}

.chinese-logo {
  padding-left: 3px;
}

.link-content {
  color: #495057;
  text-decoration: none;
}

.logo-hover:hover {
  background: #e9ecef;
}

.practice-tag {
  background: #000166;
  color: #c3c8cf;
}
</style>
