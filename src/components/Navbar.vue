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
        <Button
          icon="pi pi-fw pi-shopping-cart"
          class="p-button-text p-button-plain p-mr-2"
        />
      </template>
    </Menubar>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "豆單",
          icon: "pi pi-fw pi-book",
          to: "/beanlist",
        },
        {
          label: "登入 / 註冊",
          icon: "pi pi-fw pi-user",
          to: "/entrance/login",
        },
      ],
    };
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
// .p-menubar {
//   border: none;
//   background: #000166;
// }

// #navbar-style {
//   ::v-deep .p-menubar {
//     border: none;
//     background: #000166;
//   }
//   ::v-deep .p-menubar-root-list {
//     color: red;
//   }
//   ::v-deep .p-submenu-list {
//     background: #000166;
//   }
//   ::v-deep .p-menuitem {
//     color: yellow;
//   }
//   ::v-deep .p-menuitem-text {
//     color: #b7b8ad;
//   }
//   ::v-deep .p-menuitem-icon {
//     color: #b7b8ad;
//   }
//   ::v-deep .p-submenu-icon {
//     color: #b7b8ad;
//   }
//   ::v-deep .pi-bars {
//     color: #b7b8ad;
//   }
// }
</style>
