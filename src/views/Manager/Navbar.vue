<template>
  <div id="admin-navbar">
    <Menubar :model="items" class="p-pl-5 p-pr-3 p-py-3">
      <template #start>
        <router-link to="/">
          <img
            class="logo-img"
            alt="logo"
            src="@/assets/img/LemonCoffee/logo.png"
          />
        </router-link>
      </template>
      <template #end>
        <Button
          v-if="loggedIn"
          class="p-button-text p-button-plain"
          icon="pi pi-fw pi-user"
          type="button"
          @click="openUserMenu"
          aria-haspopup="true"
          aria-controls="overlay_menu"
        >
        </Button>
        <Menu
          v-if="loggedIn"
          id="overlay_menu"
          ref="menu"
          :model="userMenuItems"
          :popup="true"
        />
        <router-link v-else to="/entrance/login" class="link-content">
          <Button
            label="登入"
            icon="pi pi-fw pi-user"
            class="p-button-text p-button-plain"
          >
          </Button>
        </router-link>
      </template>
    </Menubar>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";

export default {
  data() {
    return {
      items: [
        {
          label: "豆單",
          icon: "pi pi-fw pi-book",
          to: "/admin",
        },
        {
          label: "訂單",
          icon: "pi pi-fw pi-list",
          to: "/admin/orders",
        },
      ],
      userMenuItems: [
        {
          label: "登出",
          icon: "pi pi-user-minus",
          command: () => {
            this.sign_out();
          },
        },
      ],
      loggedIn: "",
    };
  },
  methods: {
    openUserMenu(event) {
      this.$refs.menu.toggle(event);
    },
    sign_out() {
      const api = `${process.env.VUE_APP_API}/users/sign_out`;
      axios
        .delete(api)
        .then((response) => {
          if (response.status === 204) {
            Cookies.remove("lemonToken");
            this.showSuccessToast("已登出");
          }
        })
        .catch((error) => {
          if (error) {
            this.showErrorToast("登出失敗");
          }
        })
        .finally(() => {
          this.loggedIn = Cookies.get("lemonToken");
        });
    },
    showSuccessToast(text) {
      this.$toast.add({
        severity: "success",
        summary: text,
        life: 2000,
      });
    },
    showErrorToast(text) {
      this.$toast.add({
        severity: "error",
        summary: text,
        life: 5000,
      });
    },
  },
  created() {
    this.loggedIn = Cookies.get("lemonToken");
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
}
</style>
