(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9b66"],{"8f68":function(o,t,e){"use strict";e.r(t);var n=e("7a23");function s(o,t,e,s,a,r){var c=Object(n["resolveComponent"])("Loading"),i=Object(n["resolveComponent"])("ProductForm");return a.isLoading?(Object(n["openBlock"])(),Object(n["createBlock"])(c,{key:0})):(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:1,onSubmit:r.addProduct},null,8,["onSubmit"]))}var a=e("5530"),r=(e("d3b7"),e("b0c0"),e("bc3a")),c=e.n(r),i=e("da51"),u=e("852e"),d=e.n(u),h=e("3a5e"),p={data:function(){return{product:{},isLoading:!1}},components:{ProductForm:i["a"],Loading:h["a"]},methods:{addProduct:function(o){var t=this;this.product=Object(a["a"])({},o);var e="".concat("https://lemon-coffee.herokuapp.com","/admin/products"),n={Authorization:d.a.get("lemonToken")};this.isLoading=!0,c.a.post(e,this.product,{headers:n}).then((function(o){200===o.status&&(t.showSuccessToast("新增成功"),t.$router.push("/admin"))})).catch((function(o){401===o.response.status&&(d.a.remove("lemonToken"),t.showErrorToast("請重新登入"),t.$router.push("/entrance/login")),o.response.data.name&&t.showErrorToast("產品名稱不可空白"),o.response.data.roast&&t.showErrorToast("烘焙度不可空白")})).finally((function(){t.isLoading=!1}))},showErrorToast:function(o){this.$toast.add({severity:"error",summary:o,life:5e3})},showSuccessToast:function(o){this.$toast.add({severity:"success",summary:o,life:2e3})}}},m=e("6b0d"),l=e.n(m);const b=l()(p,[["render",s]]);t["default"]=b}}]);
//# sourceMappingURL=chunk-2d0e9b66.451eb4a9.js.map