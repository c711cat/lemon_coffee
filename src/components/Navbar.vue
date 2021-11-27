<template>
  <div id="navbar-style">
    <Menubar :model="items">
      <template #start>
        <router-link to="/navbar/home"
          ><img
            class="logo-img"
            alt="logo"
            src="../assets/img/LemonCoffee/logo1.png"
          />
        </router-link>
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
        <Button
          icon="pi pi-search"
          class="p-button-text p-button-plain p-mr-1"
        />
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

          items: [
            {
              label: "所有商品",
              to: "/navbar/beanlist",
            },
            {
              label: "淺焙",
            },
            {
              label: "中淺焙",
            },
            {
              label: "中焙",
            },
            {
              label: "中深焙",
            },
            {
              label: "深焙",
            },
          ],
        },
        {
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "登入",
              icon: "pi pi-fw pi-user-plus",
              to: "/navbar/entrance/login",
            },
            {
              label: "我的最愛",
              icon: "pi pi-fw pi-heart",
            },
            {
              label: "訂單",
              icon: "pi pi-fw pi-user-plus",
            },
            {
              label: "登出",
              icon: "pi pi-fw pi-user-minus",
            },
          ],
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
