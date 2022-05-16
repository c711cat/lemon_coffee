<template>
  <Toast style="max-width: 350px" />

  <div id="navbar-style">
    <Menubar :model="items" class="p-pl-5 p-pr-3 p-py-3">
      <template #start>
        <router-link to="/">
          <img
            class="logo-img"
            alt="logo"
            src="../assets/img/LemonCoffee/logo.png"
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

        <Button
          v-if="token"
          class="p-button-text p-button-plain"
          icon="pi pi-fw pi-user"
          type="button"
          label=""
          @click="openUserMenu"
          aria-haspopup="true"
          aria-controls="overlay_menu"
        />
        <Menu
          v-if="token"
          id="overlay_menu"
          ref="menu"
          :model="userMenuItems"
          :popup="true"
        />

        <Button
          icon="pi pi-fw pi-shopping-cart"
          class="p-button-text p-button-plain p-mr-2"
          @click.prevent="$emit('change-visible')"
        />
        <Badge
          v-if="numberOfCartItems"
          :value="numberOfCartItems"
          severity="danger"
          class="cart-badge"
        >
        </Badge>
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
          to: "/beanlist",
        },
      ],
      token: "",
      numberOfCartItems: "",
      userMenuItems: [
        {
          label: "管理員頁面",
          icon: "pi pi-fw pi-user-edit",
          to: "/admin/products",
        },
        {
          label: "訂單",
          icon: "pi pi-fw pi-book",
          to: "/orders",
        },
        {
          label: "登出",
          icon: "pi pi-user-minus",
          command: () => {
            this.sign_out();
          },
        },
      ],
    };
  },
  inject: ["emitter"],
  emits: ["change-visible"],
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}/users/cart_items`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .get(api, { headers })
        .then((response) => {
          if (response.status === 200) {
            this.numberOfCartItems = response.data.length;
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.numberOfCartItems = 0;
            Cookies.remove("lemonToken");
          }
        });
    },
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
            this.emitter.emit("changeCartBadgeCount", 0);
            this.emitter.emit("changeUserNavbarIconBtn", "");
            this.showSuccessToast("已登出");
          }
        })
        .catch((error) => {
          if (error) {
            this.showErrorToast("登出失敗");
          }
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
    this.token = Cookies.get("lemonToken");
    this.getCart();
    this.emitter.on("changeCartBadgeCount", (numberOfCartItems) => {
      this.numberOfCartItems = numberOfCartItems;
    });
    this.emitter.on("changeUserNavbarIconBtn", () => {
      const token = Cookies.get("lemonToken");
      if (token === null || token === undefined) {
        this.token = false;
      } else {
        this.token = true;
      }
    });
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

.cart-badge {
  position: relative;
  bottom: 18px;
  right: 30px;
}

.p-menubar {
  border: none;
  border-radius: 0px;
}
</style>
