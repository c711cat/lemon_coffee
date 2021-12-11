<template>
  <Toast />
  <div id="navbar-style">
    <Menubar :model="items">
      <template #start>
        <router-link to="/home"
          ><img
            class="logo-img"
            alt="logo"
            src="../assets/img/LemonCoffee/logo1.png"
          />
        </router-link>
      </template>
      <template #end>
        <router-link v-if="!token" to="/entrance/login" class="link-content">
          <Button
            label="登入 / 註冊"
            icon="pi pi-fw pi-user"
            class="p-button-text p-button-plain"
          >
          </Button>
        </router-link>
        <router-link v-if="token" to="/beanlist" class="link-content">
          <Button icon="pi pi-fw pi-user" class="p-button-text p-button-plain">
          </Button>
        </router-link>
        <Button
          icon="pi pi-fw pi-shopping-cart"
          class="p-button-text p-button-plain p-mr-2"
          @click.prevent="$emit('change-visible')"
        />
      </template>
    </Menubar>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  data() {
    return {
      items: [
        {
          label: "豆單",
          icon: "pi pi-fw pi-book",
          to: "/beanlist",
        },
      ],
      token: "",
    };
  },
  emits: ["change-visible"],
  created() {
    this.token = Cookies.get("lemonToken");
  },
};
</script>

<style lang="scss" scoped>
.logo-img {
  width: 60px;
}
.logo-img:hover {
  background: #e9ecef;
  border-radius: 3px;
}
.link-content {
  text-decoration: none;
}
</style>
