(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79864127"],{"159b":function(e,t,n){var o=n("da84"),i=n("fdbc"),c=n("785a"),a=n("17c2"),r=n("9112"),l=function(e){if(e&&e.forEach!==a)try{r(e,"forEach",a)}catch(t){e.forEach=a}};for(var p in i)i[p]&&l(o[p]&&o[p].prototype);l(c)},"17c2":function(e,t,n){"use strict";var o=n("b727").forEach,i=n("a640"),c=i("forEach");e.exports=c?[].forEach:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}},3324:function(e,t,n){},"99af":function(e,t,n){"use strict";var o=n("23e7"),i=n("d039"),c=n("e8b5"),a=n("861d"),r=n("7b0b"),l=n("07fa"),p=n("8418"),s=n("65f0"),d=n("1dde"),u=n("b622"),m=n("2d00"),b=u("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",f=m>=51||!i((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),j=d("concat"),O=function(e){if(!a(e))return!1;var t=e[b];return void 0!==t?!!t:c(e)},v=!f||!j;o({target:"Array",proto:!0,forced:v},{concat:function(e){var t,n,o,i,c,a=r(this),d=s(a,0),u=0;for(t=-1,o=arguments.length;t<o;t++)if(c=-1===t?a:arguments[t],O(c)){if(i=l(c),u+i>h)throw TypeError(g);for(n=0;n<i;n++,u++)n in c&&p(d,u,c[n])}else{if(u>=h)throw TypeError(g);p(d,u++,c)}return d.length=u,d}})},a434:function(e,t,n){"use strict";var o=n("23e7"),i=n("23cb"),c=n("5926"),a=n("07fa"),r=n("7b0b"),l=n("65f0"),p=n("8418"),s=n("1dde"),d=s("splice"),u=Math.max,m=Math.min,b=9007199254740991,h="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,o,s,d,g,f,j=r(this),O=a(j),v=i(e,O),_=arguments.length;if(0===_?n=o=0:1===_?(n=0,o=O-v):(n=_-2,o=m(u(c(t),0),O-v)),O+n-o>b)throw TypeError(h);for(s=l(j,o),d=0;d<o;d++)g=v+d,g in j&&p(s,d,j[g]);if(s.length=o,n<o){for(d=v;d<O-o;d++)g=d+o,f=d+n,g in j?j[f]=j[g]:delete j[f];for(d=O;d>O-o+n;d--)delete j[d-1]}else if(n>o)for(d=O-o;d>v;d--)g=d+o-1,f=d+n-1,g in j?j[f]=j[g]:delete j[f];for(d=0;d<n;d++)j[d+v]=arguments[d+2];return j.length=O-o+n,s}})},b3b1:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),i=function(e){return Object(o["pushScopeId"])("data-v-05839e26"),e=e(),Object(o["popScopeId"])(),e},c={key:1,class:"wrap p-my-0 p-mx-auto p-p-2"},a=i((function(){return Object(o["createElementVNode"])("div",{class:"divider p-pl-3"},[Object(o["createElementVNode"])("h4",null,"購物車清單")],-1)})),r={class:"p-col-2 p-lg-1 p-text-center"},l=["src"],p={class:"p-col-9 p-lg-9 p-pl-3"},s=i((function(){return Object(o["createElementVNode"])("br",null,null,-1)})),d={class:"p-col-fixed p-pl-4",style:{width:"130px"}},u={class:"p-fluid p-col-fixed p-p-0 p-my-3",style:{width:"135px"}},m={class:"p-col-3 p-lg-1 p-text-right subtotal-container"},b={key:0,class:"discount-content"},h={key:1,class:"del-content"},g={key:2},f={key:3},j={class:"p-grid nested-grid p-jc-between p-mx-0 p-my-2"},O=i((function(){return Object(o["createElementVNode"])("div",{class:"p-col-5"},[Object(o["createElementVNode"])("div",{class:"p-grid p-ml-1 discount-container"},[Object(o["createElementVNode"])("div",{class:"p-col-6 p-lg-2 p-text-center p-mr-2 discount-mark"}," 優惠 "),Object(o["createElementVNode"])("div",{class:"p-col-12 p-lg-4 discount-content p-pl-0"}," 滿 $1000 免運費 ")])],-1)})),v={class:"p-col-7 p-lg-6"},_={class:"p-grid p-jc-between p-text-right p-ai-center"},y=i((function(){return Object(o["createElementVNode"])("div",{class:"p-col-6 p-lg-9 p-pr-0"},"小計",-1)})),k={class:"p-col-6 p-lg-3"},V={key:0,class:"p-col-6 p-lg-9 p-pr-0"},$={key:1,class:"p-col-6 p-lg-3"},E={key:2,class:"p-col-6 p-lg-9 p-pr-0"},N={key:3,class:"p-col-6 p-lg-3"},C={key:4,class:"p-col-6 p-lg-9 p-pr-0"},B={key:5,class:"p-col-6 p-lg-3"},x=i((function(){return Object(o["createElementVNode"])("div",{class:"p-col-6 p-lg-9 p-text-bold checkout-price p-pr-0"}," 總付款金額 ",-1)})),S={class:"p-col-6 p-lg-3 p-text-bold checkout-price"};function w(e,t,n,i,w,I){var D=Object(o["resolveComponent"])("Loading"),T=Object(o["resolveComponent"])("ProgressSpinner"),q=Object(o["resolveComponent"])("Button"),z=Object(o["resolveComponent"])("router-link"),M=Object(o["resolveComponent"])("Skeleton"),L=Object(o["resolveComponent"])("InputNumber"),U=Object(o["resolveComponent"])("AddresseeForm");return w.isLoading?(Object(o["openBlock"])(),Object(o["createBlock"])(D,{key:0})):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[a,(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(w.cartItems,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"p-grid p-m-0 p-py-3 divider p-ai-center p-jc-between",key:e.product_id+e.package_type},[Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(q,{disabled:w.loadingItem===t+e.product_name,onClick:Object(o["withModifiers"])((function(n){return I.delProduct(e,t)}),["prevent"]),icon:"pi pi-trash",class:"p-button-rounded p-button-text p-button-danger"},{default:Object(o["withCtx"])((function(){return[w.loadingItem===t+e.product_name?(Object(o["openBlock"])(),Object(o["createBlock"])(T,{key:0,style:{width:"20px",height:"20px"},strokeWidth:"8",animationDuration:"10s"})):Object(o["createCommentVNode"])("",!0)]})),_:2},1032,["disabled","onClick"])]),Object(o["createVNode"])(z,{to:"/products/".concat(e.product_id),class:"p-grid p-m-0 p-col-10 p-lg-6 p-jc-around p-ai-center link-content"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("img",{src:e.product_image_url,class:"product-image p-col-1 p-lg-1 p-p-0"},null,8,l),Object(o["createElementVNode"])("div",p,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.product_name)+" ",1),s,Object(o["createTextVNode"])(" "+Object(o["toDisplayString"])(I.groundText(e.ground)),1)])]})),_:2},1032,["to"]),Object(o["createElementVNode"])("div",d," $ "+Object(o["toDisplayString"])(e.unit_price)+" / "+Object(o["toDisplayString"])(I.typeText(e.package_type)),1),Object(o["createElementVNode"])("div",u,[w.loadingItem===t+e.product_name+e.quantity?(Object(o["openBlock"])(),Object(o["createBlock"])(M,{key:0,width:"8rem",height:"36px"})):(Object(o["openBlock"])(),Object(o["createBlock"])(L,{key:1,onInput:function(n){return I.updateCart(e,t)},onChange:function(n){return I.updateCart(e,t)},class:"p-inputtext-sm",modelValue:e.quantity,"onUpdate:modelValue":function(t){return e.quantity=t},min:1,showButtons:"",buttonLayout:"horizontal",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus",incrementButtonClass:"p-button-info",decrementButtonClass:"p-button-info"},null,8,["onInput","onChange","modelValue","onUpdate:modelValue"]))]),Object(o["createElementVNode"])("div",m,[e.discount?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",b,Object(o["toDisplayString"])(e.discount),1)):Object(o["createCommentVNode"])("",!0),e.discount?(Object(o["openBlock"])(),Object(o["createElementBlock"])("del",h,"$ "+Object(o["toDisplayString"])(e.unit_price*e.quantity),1)):Object(o["createCommentVNode"])("",!0),e.sale_price?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",g,"$ "+Object(o["toDisplayString"])(e.sale_price),1)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",f,"$ "+Object(o["toDisplayString"])(e.unit_price*e.quantity),1))])])})),128)),Object(o["createElementVNode"])("div",j,[O,Object(o["createElementVNode"])("div",v,[Object(o["createElementVNode"])("div",_,[y,Object(o["createElementVNode"])("div",k,"$ "+Object(o["toDisplayString"])(I.subtotal),1),w.buy_more_discount?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",V," 多件優惠 ")):Object(o["createCommentVNode"])("",!0),w.buy_more_discount?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",$," - $ "+Object(o["toDisplayString"])(w.buy_more_discount),1)):Object(o["createCommentVNode"])("",!0),w.origin_shipping_fee?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",E," 運費 ")):Object(o["createCommentVNode"])("",!0),w.origin_shipping_fee?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",N," $ "+Object(o["toDisplayString"])(w.origin_shipping_fee),1)):Object(o["createCommentVNode"])("",!0),w.origin_shipping_fee>0&&I.free_shipping?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",C," 滿千免運 ")):Object(o["createCommentVNode"])("",!0),w.origin_shipping_fee>0&&I.free_shipping?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",B,[Object(o["createElementVNode"])("del",null,"$ "+Object(o["toDisplayString"])(w.origin_shipping_fee),1)])):Object(o["createCommentVNode"])("",!0),x,Object(o["createElementVNode"])("div",S," $ "+Object(o["toDisplayString"])(I.final_shipping_fee+I.subtotal),1)])])]),Object(o["createVNode"])(U,{onShippingMethod:I.updateShippingFee},null,8,["onShippingMethod"])]))}var I=n("2909"),D=(n("d3b7"),n("99af"),n("a434"),n("159b"),n("bc3a")),T=n.n(D),q=n("852e"),z=n.n(q),M=(n("b0c0"),function(e){return Object(o["pushScopeId"])("data-v-9debb326"),e=e(),Object(o["popScopeId"])(),e}),L=M((function(){return Object(o["createElementVNode"])("div",{class:"divider p-pl-3"},[Object(o["createElementVNode"])("h4",null,"收件人資料")],-1)})),U={class:"p-col-12 p-lg-7"},A={class:"p-grid p-fluid p-ai-center"},F={class:"p-col-8 p-lg-10"},P={key:0,class:"p-error"},J={class:"p-col-8 p-lg-10"},H={key:0,class:"p-error"},R=M((function(){return Object(o["createElementVNode"])("div",{class:"p-col-4 p-lg-2 p-text-bold"},"Email",-1)})),W={class:"p-col-8 p-lg-10"},G={class:"p-col-8 p-lg-10"},K={key:0,class:"p-error"},Q={key:1,class:"p-col-8 p-lg-10"},X={key:0,class:"p-error"},Y={class:"p-col-8 p-lg-10"},Z={key:0,class:"p-error"},ee=M((function(){return Object(o["createElementVNode"])("div",{class:"p-col-4 p-lg-2 p-text-bold"},"備註",-1)})),te={class:"p-col-8 p-lg-10"},ne={class:"p-grid p-ai-end p-jc-end p-col-12 p-lg-5 p-pb-3 p-m-0 link-content"};function oe(e,t,n,i,c,a){var r=Object(o["resolveComponent"])("InputText"),l=Object(o["resolveComponent"])("Dropdown"),p=Object(o["resolveComponent"])("Textarea"),s=Object(o["resolveComponent"])("Button");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[L,Object(o["createElementVNode"])("form",{onSubmit:t[7]||(t[7]=Object(o["withModifiers"])((function(e){return a.toCheckout(!i.v$.$invalid)}),["prevent"])),class:"p-grid nested-grid p-m-1 p-pl-2"},[Object(o["createElementVNode"])("div",U,[Object(o["createElementVNode"])("div",A,[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["p-col-4 p-lg-2 p-text-bold",{"p-error":i.v$.shipping_info.name.$invalid&&c.submitted}])}," 姓名 ",2),Object(o["createElementVNode"])("div",F,[Object(o["createVNode"])(r,{type:"text",modelValue:i.v$.shipping_info.name.$model,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.v$.shipping_info.name.$model=e}),class:Object(o["normalizeClass"])({"p-invalid":i.v$.shipping_info.name.$invalid&&c.submitted})},null,8,["modelValue","class"]),i.v$.shipping_info.name.$invalid&&c.submitted||i.v$.shipping_info.name.$pending.$response?(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",P,Object(o["toDisplayString"])(i.v$.shipping_info.name.required.$message),1)):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["p-col-4 p-lg-2 p-text-bold",{"p-error":i.v$.shipping_info.phone_number.$invalid&&c.submitted}])}," 電話 ",2),Object(o["createElementVNode"])("div",J,[Object(o["createVNode"])(r,{type:"text",modelValue:i.v$.shipping_info.phone_number.$model,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.v$.shipping_info.phone_number.$model=e}),class:Object(o["normalizeClass"])({"p-invalid":i.v$.shipping_info.phone_number.$invalid&&c.submitted})},null,8,["modelValue","class"]),i.v$.shipping_info.phone_number.$invalid&&c.submitted||i.v$.shipping_info.phone_number.$pending.$response?(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",H,Object(o["toDisplayString"])(i.v$.shipping_info.phone_number.required.$message),1)):Object(o["createCommentVNode"])("",!0)]),R,Object(o["createElementVNode"])("div",W,[Object(o["createVNode"])(r,{type:"text",modelValue:c.shipping_info.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.shipping_info.email=e})},null,8,["modelValue"])]),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["p-col-4 p-lg-2 p-text-bold",{"p-error":i.v$.shipping_info.shipping_method.$invalid&&c.submitted}])}," 送貨方式 ",2),Object(o["createElementVNode"])("div",G,[Object(o["createVNode"])(l,{onChange:a.emitShippingMethod,modelValue:i.v$.shipping_info.shipping_method.$model,"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.v$.shipping_info.shipping_method.$model=e}),options:c.shipping_methods,optionLabel:"label",optionValue:"value",class:Object(o["normalizeClass"])({"p-invalid":i.v$.shipping_info.shipping_method.$invalid&&c.submitted})},null,8,["onChange","modelValue","options","class"]),i.v$.shipping_info.shipping_method.$invalid&&c.submitted||i.v$.shipping_info.shipping_method.$pending.$response?(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",K,Object(o["toDisplayString"])(i.v$.shipping_info.shipping_method.required.$message),1)):Object(o["createCommentVNode"])("",!0)]),a.isHomeDelivery?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:Object(o["normalizeClass"])(["p-col-4 p-lg-2 p-text-bold",{"p-error":i.v$.shipping_info.address.$invalid&&c.submitted}])}," 收件地址 ",2)):Object(o["createCommentVNode"])("",!0),a.isHomeDelivery?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Q,[Object(o["createVNode"])(r,{type:"text",modelValue:i.v$.shipping_info.address.$model,"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.v$.shipping_info.address.$model=e}),class:Object(o["normalizeClass"])({"p-invalid":i.v$.shipping_info.address.$invalid&&c.submitted})},null,8,["modelValue","class"]),i.v$.shipping_info.address.$invalid&&c.submitted||i.v$.shipping_info.address.$pending.$response?(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",X,Object(o["toDisplayString"])(i.v$.shipping_info.address.required.$message),1)):Object(o["createCommentVNode"])("",!0)])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["p-col-4 p-lg-2 p-text-bold",{"p-error":i.v$.shipping_info.payment_method.$invalid&&c.submitted}])}," 付款方式 ",2),Object(o["createElementVNode"])("div",Y,[Object(o["createVNode"])(l,{modelValue:i.v$.shipping_info.payment_method.$model,"onUpdate:modelValue":t[5]||(t[5]=function(e){return i.v$.shipping_info.payment_method.$model=e}),options:c.payment_methods,optionLabel:"label",optionValue:"value",class:Object(o["normalizeClass"])({"p-invalid":i.v$.shipping_info.payment_method.$invalid&&c.submitted})},null,8,["modelValue","options","class"]),i.v$.shipping_info.payment_method.$invalid&&c.submitted||i.v$.shipping_info.payment_method.$pending.$response?(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",Z,Object(o["toDisplayString"])(i.v$.shipping_info.payment_method.required.$message),1)):Object(o["createCommentVNode"])("",!0)]),ee,Object(o["createElementVNode"])("div",te,[Object(o["createVNode"])(p,{autoResize:!0,modelValue:c.note,"onUpdate:modelValue":t[6]||(t[6]=function(e){return c.note=e}),rows:"5",cols:"30"},null,8,["modelValue"])])])]),Object(o["createElementVNode"])("div",ne,[Object(o["createVNode"])(s,{type:"submit",class:"p-button-lg p-button-info p-button-raised",label:"去買單"})])],32)],64)}var ie=n("25a0"),ce=n("41e4"),ae={setup:function(){return{v$:Object(ie["b"])()}},data:function(){return{submitted:!1,note:"",shipping_info:{name:"",phone_number:"",address:"",email:"",shipping_method:"",payment_method:""},shipping_methods:[{label:"宅配",value:"home_delivery"}],payment_methods:[{label:"貨到付款",value:"cash_on_delivery"}]}},validations:function(){return{shipping_info:{name:{required:ce["c"]},phone_number:{required:ce["c"]},address:{required:ce["c"]},shipping_method:{required:ce["c"]},payment_method:{required:ce["c"]}}}},inject:["emitter"],methods:{getPersonalData:function(){if(localStorage.getItem("personalData")){var e=JSON.parse(localStorage.getItem("personalData"));this.note=e.note,this.shipping_info=e.shipping_info,this.emitShippingMethod()}},toCheckout:function(e){if(this.submitted=!0,e){var t={note:this.note,shipping_info:this.shipping_info};localStorage.setItem("personalData",JSON.stringify(t)),this.$router.push("/checkout")}},emitShippingMethod:function(){this.$emit("shipping-method",this.shipping_info.shipping_method)}},computed:{isHomeDelivery:function(){var e=!1;return"home_delivery"===this.shipping_info.shipping_method&&(e=!0),e}},emits:["shipping-method"],created:function(){this.getPersonalData()}},re=(n("e800"),n("6b0d")),le=n.n(re);const pe=le()(ae,[["render",oe],["__scopeId","data-v-9debb326"]]);var se=pe,de=n("3a5e"),ue={data:function(){return{buy_more_discount:0,cartItems:[],origin_shipping_fee:0,isLoading:!1,loadingItem:""}},components:{AddresseeForm:se,Loading:de["a"]},inject:["emitter"],methods:{getCart:function(){var e=this,t="".concat("https://lemon-coffee.herokuapp.com","/users/cart_items"),n={Authorization:z.a.get("lemonToken")};this.isLoading=!0,T.a.get(t,{headers:n}).then((function(t){200===t.status&&(e.cartItems=Object(I["a"])(t.data))})).catch((function(t){401===t.response.status&&(z.a.remove("lemonToken"),e.showErrorToast("請重新登入"),e.$router.push("/entrance/login"),e.emitter.emit("changeCartBadgeCount",0))})).finally((function(){e.isLoading=!1}))},delProduct:function(e,t){var n=this,o="".concat("https://lemon-coffee.herokuapp.com","/users/cart_items/").concat(e.product_id),i={Authorization:z.a.get("lemonToken")};this.loadingItem=t+e.product_name,T.a.delete(o,{headers:i}).then((function(e){204===e.status&&(n.showSuccessToast("已刪除商品"),n.cartItems.splice(t,1),n.emitter.emit("changeCartBadgeCount",n.cartItems.length))})).catch((function(e){401===e.response.status&&(z.a.remove("lemonToken"),n.showErrorToast("請重新登入"),n.$router.push("/entrance/login"),n.emitter.emit("changeCartBadgeCount",0))})).finally((function(){n.loadingItem=""}))},updateCart:function(e,t){var n=this,o={quantity:e.quantity},i="".concat("https://lemon-coffee.herokuapp.com","/users/cart_items/").concat(e.product_id),c={Authorization:z.a.get("lemonToken")};this.loadingItem=t+e.product_name+e.quantity,T.a.put(i,{cart_item:o},{headers:c}).then((function(e){e.status})).catch((function(e){401===e.response.status&&(z.a.remove("lemonToken"),n.showErrorToast("請重新登入"),n.$router.push("/entrance/login"),n.emitter.emit("changeCartBadgeCount",0)),400===e.response.status&&n.showErrorToast("最小購買量為 1")})).finally((function(){n.loadingItem=""}))},showErrorToast:function(e){this.$toast.add({severity:"error",summary:e,life:5e3})},showSuccessToast:function(e){this.$toast.add({severity:"success",summary:e,life:2e3})},typeText:function(e){return"drip_bag"===e?"耳掛":"half_pound"===e?"半磅":"one_pound"===e?"一磅":void 0},groundText:function(e){return!0===e?"磨粉":!1===e?"原豆":void 0},updateShippingFee:function(e){switch(e){case"home_delivery":this.origin_shipping_fee=100;break;default:this.origin_shipping_fee=0;break}}},computed:{subtotal:function(){var e=0;return this.cartItems.forEach((function(t){e+=t.unit_price*t.quantity})),e},final_shipping_fee:function(){return this.subtotal>=1e3?0:this.origin_shipping_fee},free_shipping:function(){return 0===this.final_shipping_fee}},created:function(){this.getCart()}};n("e287");const me=le()(ue,[["render",w],["__scopeId","data-v-05839e26"]]);t["default"]=me},e287:function(e,t,n){"use strict";n("f665")},e800:function(e,t,n){"use strict";n("3324")},f665:function(e,t,n){}}]);
//# sourceMappingURL=chunk-79864127.d396812e.js.map