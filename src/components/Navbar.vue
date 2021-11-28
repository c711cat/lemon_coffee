<template>
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
        <router-link to="/entrance/login" class="link-content">
          <Button
            label="登入 / 註冊"
            icon="pi pi-fw pi-user"
            class="p-button-text p-button-plain"
          >
          </Button>
        </router-link>
        <Button
          icon="pi pi-fw pi-shopping-cart"
          class="p-button-text p-button-plain p-mr-2"
          @click="visibleRight = true"
        />
      </template>
    </Menubar>
    <Sidebar
      v-model:visible="visibleRight"
      position="right"
      class="sidebar-wrap"
    >
      <CartSidebar></CartSidebar>
    </Sidebar>
    <router-view />
  </div>
</template>

<script>
import CartSidebar from "@/components/CartSidebar.vue";
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
      visibleRight: false,
    };
  },
  components: { CartSidebar },
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
</style>
