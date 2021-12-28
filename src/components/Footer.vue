<template>
  <div class="p-grid nested-grid p-jc-center p-ai-center footer-body p-py-6">
    <router-link
      to="/home"
      class="link-content logo-hover p-col-12 p-lg-2 p-jc-center p-ai-center"
    >
      <div class="box box-stretched p-d-flex p-jc-center p-ai-center">
        <img
          style="width: 70px; display: block"
          alt="logo"
          src="../assets/img/LemonCoffee/logo-footer.png"
        />

        <div>
          <div class="eng-text p-col-12 p-pl-0 p-pb-0">LEMON COFFEE</div>
          <div class="chinese-logo p-col-12 p-pt-0">— 寧 蒙 咖 啡 —</div>
        </div>
      </div>
    </router-link>

    <div class="p-col-12 p-lg-3 p-text-center p-jc-center p-ai-center">
      <div class="p-col-12 eng-text">TUE－SUN 10:00－22:00</div>

      <a
        style="display: block"
        class="link-content logo-hover p-col-12"
        href="https://www.google.com/maps/place/%E5%AF%A7%E8%92%99%E5%92%96%E5%95%A1/@22.9268643,120.1866136,15z/data=!4m5!3m4!1s0x0:0x823a5a6d873727a5!8m2!3d22.9268642!4d120.1866136"
        >台南市南區明興路1151巷10-2號
      </a>

      <div class="p-col-12 p-pt-2">0983-732-995</div>
    </div>

    <a
      style="display: block"
      class="link-content"
      href="https://www.facebook.com/LemonCafes/"
    >
      <Button
        class="
          p-button-rounded p-button-text p-button-plain p-col-12 p-jc-center
        "
      >
        <i class="pi pi-facebook" style="font-size: 2rem"></i>
      </Button>
    </a>
  </div>
</template>

<style lang="scss" scoped>
* {
  border: 1px solid black;
}

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
</style>
