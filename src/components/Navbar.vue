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
          class="p-button-text p-button-plain p-mr-2 cart-body"
          @click.prevent="$emit('change-visible')"
        />
        <Badge
          v-if="updateBadge"
          :value="updateBadge"
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
      updateBadge: "",
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
            this.updateBadge = response.data.length;
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
            console.log("5");
          }
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
    this.emitter.on("cartBadge", (data) => {
      this.updateBadge = data;
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

.cart-body {
  position: inherit;
}

.cart-badge {
  position: absolute;
  right: 19.5px;
  top: 24px;
}
</style>
