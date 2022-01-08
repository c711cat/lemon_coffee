<template>
  <div id="admin-navbar">
    <Menubar :model="items" class="p-pl-5 p-pr-3 p-py-3">
      <template #start>
        <router-link to="/home">
          <img
            class="logo-img"
            alt="logo"
            src="@/assets/img/LemonCoffee/logo.png"
          />
        </router-link>
      </template>
      <template #end>
        <router-link v-if="!token" to="/entrance/login" class="link-content">
          <Button
            label="登入"
            icon="pi pi-fw pi-user"
            class="p-button-text p-button-plain"
          >
          </Button>
        </router-link>
        <router-link v-if="token" to="/m-admin/products" class="link-content">
          <Button icon="pi pi-fw pi-user" class="p-button-text p-button-plain">
          </Button>
        </router-link>
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
          to: "/m-admin/products",
        },
      ],
      visibleRight: false,
      is_login: false,
      token: "",
    };
  },
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

.sidebar-wrap {
  width: 500px;
}

.p-menubar {
  border: none;
  margin: -10px -10px 10px -10px;
}
</style>
