(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-123cc8fe"],{"0cb2":function(e,t,r){var n=r("7b0b"),c=Math.floor,o="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,l,s,d){var p=r+e.length,u=l.length,f=i;return void 0!==s&&(s=n(s),f=a),o.call(d,f,(function(n,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(p);case"<":a=s[o.slice(1,-1)];break;default:var i=+o;if(0===i)return n;if(i>u){var d=c(i/10);return 0===d?n:d<=u?void 0===l[d-1]?o.charAt(1):l[d-1]+o.charAt(1):n}a=l[i-1]}return void 0===a?"":a}))}},"107c":function(e,t,r){var n=r("d039"),c=r("da84"),o=c.RegExp;e.exports=n((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"110f":function(e,t,r){"use strict";r("1a0e")},"14c3":function(e,t,r){var n=r("825a"),c=r("1626"),o=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if(c(r)){var i=r.call(e,t);return null!==i&&n(i),i}if("RegExp"===o(e))return a.call(e,t);throw TypeError("RegExp#exec called on incompatible receiver")}},"1a0e":function(e,t,r){},"428d":function(e,t,r){},5319:function(e,t,r){"use strict";var n=r("d784"),c=r("d039"),o=r("825a"),a=r("1626"),i=r("5926"),l=r("50c4"),s=r("577e"),d=r("1d80"),p=r("8aa5"),u=r("dc4a"),f=r("0cb2"),b=r("14c3"),h=r("b622"),m=h("replace"),g=Math.max,O=Math.min,j=function(e){return void 0===e?e:String(e)},v=function(){return"$0"==="a".replace(/./,"$0")}(),x=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),y=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));n("replace",(function(e,t,r){var n=x?"$":"$0";return[function(e,r){var n=d(this),c=void 0==e?void 0:u(e,m);return c?c.call(e,n,r):t.call(s(n),e,r)},function(e,c){var d=o(this),u=s(e);if("string"===typeof c&&-1===c.indexOf(n)&&-1===c.indexOf("$<")){var h=r(t,d,u,c);if(h.done)return h.value}var m=a(c);m||(c=s(c));var v=d.global;if(v){var x=d.unicode;d.lastIndex=0}var y=[];while(1){var k=b(d,u);if(null===k)break;if(y.push(k),!v)break;var E=s(k[0]);""===E&&(d.lastIndex=p(u,l(d.lastIndex),x))}for(var N="",w=0,S=0;S<y.length;S++){k=y[S];for(var V=s(k[0]),_=g(O(i(k.index),u.length),0),C=[],D=1;D<k.length;D++)C.push(j(k[D]));var T=k.groups;if(m){var B=[V].concat(C,_,u);void 0!==T&&B.push(T);var A=s(c.apply(void 0,B))}else A=f(V,u,_,C,T,c);_>=w&&(N+=u.slice(w,_)+A,w=_+V.length)}return N+u.slice(w)}]}),!y||!v||x)},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("577e"),c=r("ad6d"),o=r("9f7f"),a=r("5692"),i=r("7c73"),l=r("69f3").get,s=r("fce3"),d=r("107c"),p=RegExp.prototype.exec,u=a("native-string-replace",String.prototype.replace),f=p,b=function(){var e=/a/,t=/b*/g;return p.call(e,"a"),p.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),h=o.UNSUPPORTED_Y||o.BROKEN_CARET,m=void 0!==/()??/.exec("")[1],g=b||m||h||s||d;g&&(f=function(e){var t,r,o,a,s,d,g,O=this,j=l(O),v=n(e),x=j.raw;if(x)return x.lastIndex=O.lastIndex,t=f.call(x,v),O.lastIndex=x.lastIndex,t;var y=j.groups,k=h&&O.sticky,E=c.call(O),N=O.source,w=0,S=v;if(k&&(E=E.replace("y",""),-1===E.indexOf("g")&&(E+="g"),S=v.slice(O.lastIndex),O.lastIndex>0&&(!O.multiline||O.multiline&&"\n"!==v.charAt(O.lastIndex-1))&&(N="(?: "+N+")",S=" "+S,w++),r=new RegExp("^(?:"+N+")",E)),m&&(r=new RegExp("^"+N+"$(?!\\s)",E)),b&&(o=O.lastIndex),a=p.call(k?r:O,S),k?a?(a.input=a.input.slice(w),a[0]=a[0].slice(w),a.index=O.lastIndex,O.lastIndex+=a[0].length):O.lastIndex=0:b&&a&&(O.lastIndex=O.global?a.index+a[0].length:o),m&&a&&a.length>1&&u.call(a[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a&&y)for(a.groups=d=i(null),s=0;s<y.length;s++)g=y[s],d[g[0]]=a[g[1]];return a}),e.exports=f},"99af":function(e,t,r){"use strict";var n=r("23e7"),c=r("d039"),o=r("e8b5"),a=r("861d"),i=r("7b0b"),l=r("07fa"),s=r("8418"),d=r("65f0"),p=r("1dde"),u=r("b622"),f=r("2d00"),b=u("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",g=f>=51||!c((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),O=p("concat"),j=function(e){if(!a(e))return!1;var t=e[b];return void 0!==t?!!t:o(e)},v=!g||!O;n({target:"Array",proto:!0,forced:v},{concat:function(e){var t,r,n,c,o,a=i(this),p=d(a,0),u=0;for(t=-1,n=arguments.length;t<n;t++)if(o=-1===t?a:arguments[t],j(o)){if(c=l(o),u+c>h)throw TypeError(m);for(r=0;r<c;r++,u++)r in o&&s(p,u,o[r])}else{if(u>=h)throw TypeError(m);s(p,u++,o)}return p.length=u,p}})},"9f7f":function(e,t,r){var n=r("d039"),c=r("da84"),o=c.RegExp;t.UNSUPPORTED_Y=n((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),c=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),c=r("9263"),o=r("d039"),a=r("b622"),i=r("9112"),l=a("species"),s=RegExp.prototype;e.exports=function(e,t,r,d){var p=a(e),u=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),f=u&&!o((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t}));if(!u||!f||r){var b=/./[p],h=t(p,""[e],(function(e,t,r,n,o){var a=t.exec;return a===c||a===s.exec?u&&!o?{done:!0,value:b.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}));n(String.prototype,e,h[0]),n(s,p,h[1])}d&&i(s[p],"sham",!0)}},db92:function(e,t,r){"use strict";r("428d")},e58c:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c={class:"p-text-center"},o={class:"p-input-icon-left"},a=Object(n["createElementVNode"])("i",{class:"pi pi-search"},null,-1);function i(e,t,r,i,l,s){var d=Object(n["resolveComponent"])("InputText"),p=Object(n["resolveComponent"])("Button"),u=Object(n["resolveComponent"])("Column"),f=Object(n["resolveComponent"])("DataTable"),b=Object(n["resolveComponent"])("UserSingleOrder");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(f,{value:l.orders,paginator:!0,class:"p-datatable-customers",rows:5,dataKey:"id",rowHover:!0,filters:l.filters,"onUpdate:filters":t[2]||(t[2]=function(e){return l.filters=e}),loading:l.loading,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,50],currentPageReportTemplate:"顯示第 {first} ~ {last} 筆 , 共 {totalRecords} 筆訂單",globalFilterFields:["id","created_at"],filterDisplay:"menu",responsiveLayout:"stack",breakpoint:"960px",stateStorage:"local",stateKey:"dt-state-demo-local",selection:l.orders.items,"onUpdate:selection":t[3]||(t[3]=function(e){return l.orders.items=e}),selectionMode:"single",onRowSelect:t[4]||(t[4]=function(e){return s.getTheOrder(l.orders.items.id)})},{header:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("span",o,[a,Object(n["createVNode"])(d,{modelValue:l.filters["global"].value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.filters["global"].value=e}),placeholder:"Keyword Search"},null,8,["modelValue"])]),Object(n["createVNode"])(p,{type:"button",icon:"pi pi-filter-slash",label:"清空",class:"p-button-outlined",onClick:t[1]||(t[1]=function(e){return s.clearFilters()})})])]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{field:"id",header:"訂單編號",sortable:"",style:{"min-width":"6rem"}},{body:Object(n["withCtx"])((function(e){var t=e.data;return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.id),1)]})),_:1}),Object(n["createVNode"])(u,{field:"created_at",header:"成立時間",sortable:"",style:{"min-width":"9rem"}},{body:Object(n["withCtx"])((function(e){var t=e.data;return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.created_at),1)]})),_:1}),Object(n["createVNode"])(u,{field:"status",header:"訂單狀態",sortable:!0,style:{"min-width":"6rem"}},{body:Object(n["withCtx"])((function(e){var t=e.data;return[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(s.orderStatusText(t.status)),1)]})),_:1}),Object(n["createVNode"])(u,{field:"payment_status",header:"付款狀態",sortable:"",style:{"min-width":"6rem"}},{body:Object(n["withCtx"])((function(e){var t=e.data;return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(s.paymentStatusText(t.payment_status)),1)]})),_:1}),Object(n["createVNode"])(u,{field:"shipping_status",header:"物流狀態",sortable:"",style:{"min-width":"6rem"}},{body:Object(n["withCtx"])((function(e){var t=e.data;return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(s.shippingStatusText(t.shipping_status)),1)]})),_:1})]})),_:1},8,["value","filters","loading","selection"]),Object(n["createVNode"])(b,{order:l.order},null,8,["order"])],64)}var l=r("5530"),s=(r("d3b7"),r("159b"),r("ac1f"),r("5319"),r("99af"),r("0393")),d=r("bc3a"),p=r.n(d),u=r("852e"),f=r.n(u),b=(r("b0c0"),function(e){return Object(n["pushScopeId"])("data-v-f651bc72"),e=e(),Object(n["popScopeId"])(),e}),h={class:"p-mt-0"},m={class:"p-col-12 p-lg-5 p-pl-3"},g=b((function(){return Object(n["createElementVNode"])("br",null,null,-1)})),O=b((function(){return Object(n["createElementVNode"])("br",null,null,-1)})),j={class:"p-col-5 p-lg-3 p-pl-3"},v={class:"p-col-3 p-lg-1 p-p-0 p-my-3"},x={class:"p-col-3 p-lg-2 p-text-right subtotal-container"},y={class:"p-grid p-mx-0 p-my-2"},k={class:"p-col-12"},E={class:"p-grid p-jc-between p-text-right p-ai-center"},N=b((function(){return Object(n["createElementVNode"])("div",{class:"p-col-7 p-lg-9 p-pr-0"},"小計",-1)})),w={class:"p-col-5 p-lg-3"},S=b((function(){return Object(n["createElementVNode"])("div",{class:"p-col-7 p-lg-9 p-pr-0"},"運費",-1)})),V={class:"p-col-5 p-lg-3"},_=b((function(){return Object(n["createElementVNode"])("div",{class:"p-col-7 p-lg-9 p-text-bold checkout-price p-pr-0"}," 總付款金額 ",-1)})),C={class:"p-col-5 p-lg-3 p-text-bold checkout-price"},D=b((function(){return Object(n["createElementVNode"])("div",{class:"divider p-pl-3"},[Object(n["createElementVNode"])("h4",null,"收件人資料")],-1)})),T={class:"p-grid p-m-1 p-pl-2 divider p-pb-1 p-ai-center"},B=b((function(){return Object(n["createElementVNode"])("div",{class:"p-col-12 p-lg-fixed p-text-bold",style:{width:"100px"}}," 姓名 ",-1)})),A={class:"p-col-12 p-lg-10"},I=b((function(){return Object(n["createElementVNode"])("div",{class:"p-col-12 p-lg-fixed p-text-bold",style:{width:"100px"}}," 電話 ",-1)})),U={class:"p-col-12 p-lg-10"},$=b((function(){return Object(n["createElementVNode"])("div",{class:"p-col-12 p-lg-fixed p-text-bold",style:{width:"100px"}}," Email ",-1)})),P={class:"p-col-12 p-lg-10"},R=b((function(){return Object(n["createElementVNode"])("div",{class:"p-col-12 p-lg-fixed p-text-bold",style:{width:"100px"}}," 送貨方式 ",-1)})),z={class:"p-col-12 p-lg-10"},M={key:0,class:"p-col-12 p-lg-fixed p-text-bold",style:{width:"100px"}},F={key:1,class:"p-col-12 p-lg-10"},L=b((function(){return Object(n["createElementVNode"])("div",{class:"p-col-12 p-lg-fixed p-text-bold",style:{width:"100px"}}," 付款方式 ",-1)})),K={class:"p-col-12 p-lg-10"},q=b((function(){return Object(n["createElementVNode"])("div",{class:"p-col-12 p-lg-fixed p-text-bold",style:{width:"100px"}}," 備註 ",-1)})),J={class:"p-col-12 p-lg-10"},W={class:"p-grid p-m-1 p-pl-2 p-ai-center"},Y=b((function(){return Object(n["createElementVNode"])("div",{class:"p-col-12 p-lg-fixed p-text-bold",style:{width:"100px"}}," 付款狀態 ",-1)})),H={class:"p-col-12 p-lg-10 p-d-flex p-jc-start p-ai-center"},G={key:0,class:"pi pi-check-circle p-ml-1"},Q=b((function(){return Object(n["createElementVNode"])("div",{class:"p-col-12 p-lg-fixed p-text-bold",style:{width:"100px"}}," 訂單狀態 ",-1)})),X=b((function(){return Object(n["createElementVNode"])("div",{class:"p-col-12 p-lg-fixed p-text-bold",style:{width:"100px"}}," 物流狀態 ",-1)})),Z={class:"p-d-flex p-jc-end"};function ee(e,t,r,c,o,a){var i=Object(n["resolveComponent"])("UserOrderStatus"),l=Object(n["resolveComponent"])("UserShippingStatus"),s=Object(n["resolveComponent"])("Button"),d=Object(n["resolveComponent"])("Dialog");return Object(n["openBlock"])(),Object(n["createBlock"])(d,{header:"訂單編號 ".concat(r.order.id),visible:o.isOpen,"onUpdate:visible":t[0]||(t[0]=function(e){return o.isOpen=e}),breakpoints:{"960px":"100vw"},style:{width:"60%"}},{footer:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",Z,[Object(n["createVNode"])(s,{disabled:!o.oneOrder["may_cancel?"],onClick:Object(n["withModifiers"])(a.cancelTheOrder,["prevent"]),label:"取消訂單",icon:"pi pi-times",class:"p-button-danger p-ml-3"},null,8,["disabled","onClick"]),Object(n["createVNode"])(s,{onClick:Object(n["withModifiers"])(a.closeWindow,["prevent"]),label:"關閉視窗",class:"p-button-secondary p-button-text",autofocus:""},null,8,["onClick"])])]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("h4",h,"成立時間 "+Object(n["toDisplayString"])(a.updateDateFormat(r.order.created_at)),1),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r.order.items,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:e.id,class:"p-grid p-m-0 p-py-3 divider p-ai-center p-jc-between"},[Object(n["createElementVNode"])("div",m,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.name),1),g,Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(a.groundText(e.ground)),1),O]),Object(n["createElementVNode"])("div",j," $ "+Object(n["toDisplayString"])(e.unit_price)+" / "+Object(n["toDisplayString"])(a.typeText(e.package_type)),1),Object(n["createElementVNode"])("div",v,"數量 "+Object(n["toDisplayString"])(e.quantity),1),Object(n["createElementVNode"])("div",x,[Object(n["createElementVNode"])("div",null,"$ "+Object(n["toDisplayString"])(e.unit_price*e.quantity),1)])])})),128)),Object(n["createElementVNode"])("div",y,[Object(n["createElementVNode"])("div",k,[Object(n["createElementVNode"])("div",E,[N,Object(n["createElementVNode"])("div",w,"$"+Object(n["toDisplayString"])(a.caculateSubtotal(r.order)),1),S,Object(n["createElementVNode"])("div",V," $ "+Object(n["toDisplayString"])(r.order.shipping_info.shipping_fee),1),_,Object(n["createElementVNode"])("div",C," $"+Object(n["toDisplayString"])(a.caculateSubtotal(r.order)+r.order.shipping_info.shipping_fee),1)])])]),D,Object(n["createElementVNode"])("div",T,[B,Object(n["createElementVNode"])("div",A,Object(n["toDisplayString"])(r.order.shipping_info.name),1),I,Object(n["createElementVNode"])("div",U,Object(n["toDisplayString"])(r.order.shipping_info.phone_number),1),$,Object(n["createElementVNode"])("div",P,Object(n["toDisplayString"])(r.order.shipping_info.email),1),R,Object(n["createElementVNode"])("div",z,Object(n["toDisplayString"])(a.shippingMethodText),1),a.homeDelivery?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",M," 收件地址 ")):Object(n["createCommentVNode"])("",!0),a.homeDelivery?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",F,Object(n["toDisplayString"])(r.order.shipping_info.address),1)):Object(n["createCommentVNode"])("",!0),L,Object(n["createElementVNode"])("div",K,Object(n["toDisplayString"])(a.paymentMethodText),1),q,Object(n["createElementVNode"])("div",J,Object(n["toDisplayString"])(r.order.note),1)]),Object(n["createElementVNode"])("div",W,[Y,Object(n["createElementVNode"])("div",H,[Object(n["createElementVNode"])("strong",{class:Object(n["normalizeClass"])([a.paymentStatusColor,"p-mr-4"])},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(a.paymentStatusText)+" ",1),a.paid?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",G)):Object(n["createCommentVNode"])("",!0)],2)]),Q,Object(n["createVNode"])(i,{orderData:o.oneOrder},null,8,["orderData"]),X,Object(n["createVNode"])(l,{orderData:o.oneOrder},null,8,["orderData"])])]})),_:1},8,["header","visible"])}var te=function(e){return Object(n["pushScopeId"])("data-v-68438d7c"),e=e(),Object(n["popScopeId"])(),e},re={key:0,class:"p-col-12 p-lg-10 p-d-flex p-jc-start p-ai-center"},ne=te((function(){return Object(n["createElementVNode"])("strong",{class:"cancel-color"}," 已取消 ",-1)})),ce=[ne],oe={key:1,class:"p-col-12 p-lg-10 p-d-flex p-jc-start p-ai-center"},ae=te((function(){return Object(n["createElementVNode"])("strong",{class:"progress-color"}," 備貨中 ",-1)})),ie={key:0,class:"pi pi-check-circle success-color p-ml-1"};function le(e,t,r,c,o,a){return a.canceled?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",re,ce)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",oe,[ae,Object(n["createElementVNode"])("i",{class:Object(n["normalizeClass"])([a.inPreparationArrowStyle,"pi pi-arrow-right p-mx-1"])},null,2),Object(n["createElementVNode"])("strong",{class:Object(n["normalizeClass"])(a.inPreparationStyle)}," 已發貨 ",2),Object(n["createElementVNode"])("i",{class:Object(n["normalizeClass"])([a.shippingArrowStyle,"pi pi-arrow-right p-mx-1"])},null,2),Object(n["createElementVNode"])("strong",{class:Object(n["normalizeClass"])(a.arrivedStyle)}," 已到達 ",2),Object(n["createElementVNode"])("i",{class:Object(n["normalizeClass"])([a.arrivedArrowStyle,"pi pi-arrow-right p-mx-1"])},null,2),Object(n["createElementVNode"])("strong",{class:Object(n["normalizeClass"])(a.pickedUpStyle)}," 已取貨 ",2),a.pickedUp?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",ie)):Object(n["createCommentVNode"])("",!0)]))}var se={data:function(){return{the_order:{}}},props:{orderData:{type:Object}},inject:["emitter"],computed:{inPreparation:function(){return"in_preparation"===this.the_order.shipping_status},shipping:function(){return"shipping"===this.the_order.shipping_status},arrived:function(){return"arrived"===this.the_order.shipping_status},pickedUp:function(){return"picked_up"===this.the_order.shipping_status},canceled:function(){return"canceled"===this.the_order.status},inPreparationArrowStyle:function(){return this.shipping||this.arrived||this.pickedUp?"arrow-color":"disabled-color"},inPreparationStyle:function(){return this.shipping||this.arrived||this.pickedUp?"progress-color":"disabled-color"},arrivedStyle:function(){return this.arrived||this.pickedUp?"progress-color":"disabled-color"},shippingArrowStyle:function(){return this.arrived||this.pickedUp?"arrow-color":"disabled-color"},arrivedArrowStyle:function(){return this.pickedUp?"arrow-color":"disabled-color"},pickedUpStyle:function(){return this.pickedUp?"success-color":"disabled-color"}},watch:{orderData:function(){this.the_order=Object(l["a"])({},this.orderData)}},mounted:function(){this.the_order=Object(l["a"])({},this.orderData)}},de=(r("110f"),r("6b0d")),pe=r.n(de);const ue=pe()(se,[["render",le],["__scopeId","data-v-68438d7c"]]);var fe=ue,be=function(e){return Object(n["pushScopeId"])("data-v-ca0a1bcc"),e=e(),Object(n["popScopeId"])(),e},he={key:0,class:"p-col-12 p-lg-10 p-d-flex p-jc-start p-ai-center"},me=be((function(){return Object(n["createElementVNode"])("strong",{class:"cancel-color"}," 已取消 ",-1)})),ge=[me],Oe={key:1,class:"p-col-12 p-lg-10 p-d-flex p-jc-start p-ai-center"},je=be((function(){return Object(n["createElementVNode"])("strong",{class:"progress-color"}," 處理中 ",-1)})),ve={key:2,class:"pi pi-check-circle p-ml-1 success-color"};function xe(e,t,r,c,o,a){var i=Object(n["resolveComponent"])("Button");return a.canceled?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",he,ge)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Oe,[je,Object(n["createElementVNode"])("i",{class:Object(n["normalizeClass"])([a.pendingAndConfirmedArrowStyle,"pi pi-arrow-right p-mx-1"])},null,2),Object(n["createElementVNode"])("strong",{class:Object(n["normalizeClass"])(a.confirmedStyle)},"已確認",2),Object(n["createElementVNode"])("i",{class:Object(n["normalizeClass"])([a.pendingAndConfirmedArrowStyle,"pi pi-arrow-right p-mx-1"])},null,2),a.confirmed?(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:0,disabled:!o.the_order["may_finish?"],onClick:a.finishedOrder,label:"完成訂單",class:"p-button-raised p-button-success p-button-sm p-lg-fixed p-col-3 p-px-2",style:{width:"100px"}},null,8,["disabled","onClick"])):Object(n["createCommentVNode"])("",!0),a.pending||a.finished?(Object(n["openBlock"])(),Object(n["createElementBlock"])("strong",{key:1,class:Object(n["normalizeClass"])(a.finishedStyle)},"已完成",2)):Object(n["createCommentVNode"])("",!0),a.finished?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",ve)):Object(n["createCommentVNode"])("",!0)]))}var ye={data:function(){return{the_order:{}}},props:{orderData:{type:Object}},inject:["emitter"],methods:{finishedOrder:function(){var e=this,t="".concat("https://lemon-coffee.herokuapp.com","/admin/orders/").concat(this.the_order.id,"/status"),r={Authorization:f.a.get("lemonToken")},n={status:"finished"};p.a.put(t,n,{headers:r}).then((function(t){e.the_order=t.data,e.emitter.emit("updateUserOrderAllStatus")})).catch((function(t){401===t.response.status&&(f.a.remove("lemonToken"),e.showErrorToast("請重新登入"),e.$router.push("/entrance/login"))})).finally((function(){e.loading=!1}))}},computed:{pending:function(){return"pending"===this.the_order.status},confirmed:function(){return"confirmed"===this.the_order.status},pickedUp:function(){return"picked_up"===this.the_order.shipping_status},finished:function(){return"finished"===this.the_order.status},canceled:function(){return"canceled"===this.the_order.status},paid:function(){return"paid"===this.the_order.payment_status},pendingAndConfirmedArrowStyle:function(){return this.confirmed||this.finished?"arrow-color":"disabled-color"},confirmedStyle:function(){return this.confirmed||this.finished?"progress-color":"disabled-color"},finishedStyle:function(){return this.finished?"success-color":"disabled-color"}},watch:{orderData:function(){this.the_order=Object(l["a"])({},this.orderData)}},mounted:function(){this.the_order=Object(l["a"])({},this.orderData)}};r("fbfa");const ke=pe()(ye,[["render",xe],["__scopeId","data-v-ca0a1bcc"]]);var Ee=ke,Ne={data:function(){return{isOpen:!1,oneOrder:{}}},components:{UserShippingStatus:fe,UserOrderStatus:Ee},props:{order:{type:Object,default:function(){return{}}}},watch:{order:function(){this.oneOrder=Object(l["a"])({},this.order),this.isOpen=!0}},methods:{updateDateFormat:function(e){var t=new Date(Date.parse(e)).toLocaleString(),r=t.replace("/","-").replace("/","-");return r},groundText:function(e){return!0===e?"磨粉":"原豆"},caculateSubtotal:function(e){return e.items.reduce((function(e,t){return e+t.unit_price*t.quantity}),0)},typeText:function(e){switch(e){case"drip_bag":return"耳掛";case"half_pound":return"半磅";case"one_pound":return"一磅"}},closeWindow:function(){this.isOpen=!1},cancelTheOrder:function(){var e=this,t="".concat("https://lemon-coffee.herokuapp.com","/admin/orders/").concat(this.oneOrder.id,"/status"),r={Authorization:f.a.get("lemonToken")},n={status:"canceled"};p.a.put(t,n,{headers:r}).then((function(t){e.oneOrder=t.data,e.emitter.emit("updateUserOrderAllStatus")})).catch((function(t){401===t.response.status&&(f.a.remove("lemonToken"),e.showErrorToast("請重新登入"),e.$router.push("/entrance/login"))})).finally((function(){e.loading=!1}))}},inject:["emitter"],computed:{homeDelivery:function(){return"home_delivery"===this.oneOrder.shipping_info.shipping_method},paymentMethodText:function(){return"cash_on_delivery"===this.oneOrder.payment_method?"貨到付款":""},shippingMethodText:function(){return this.homeDelivery?"宅配":""},paymentStatusText:function(){return this.outstanding?"未付款":this.paid?"已付款":"付款失敗"},paymentStatusColor:function(){return this.paid?"success-color":"blue-color"},outstanding:function(){return"outstanding"===this.oneOrder.payment_status},paid:function(){return"paid"===this.oneOrder.payment_status},pending:function(){return"pending"===this.oneOrder.status},confirmed:function(){return"confirmed"===this.oneOrder.status},inPreparation:function(){return"in_preparation"===this.oneOrder.shipping_status}}};r("db92");const we=pe()(Ne,[["render",ee],["__scopeId","data-v-f651bc72"]]);var Se=we,Ve={data:function(){return{filters:{global:{value:null,matchMode:s["a"].CONTAINS}},orders:[],order:{},loading:!0}},components:{UserSingleOrder:Se},inject:["emitter"],methods:{getOrders:function(){var e=this,t="".concat("https://lemon-coffee.herokuapp.com","/users/orders"),r={Authorization:f.a.get("lemonToken")};p.a.get(t,{headers:r}).then((function(t){e.orders=t.data,e.updateDateStyle()})).catch((function(t){401===t.response.status&&(f.a.remove("lemonToken"),e.showErrorToast("請重新登入"),e.$router.push("/entrance/login"))})).finally((function(){e.loading=!1}))},updateDateStyle:function(){this.orders.forEach((function(e){var t=new Date(Date.parse(e.created_at)).toLocaleString(),r=t.replace("/","-").replace("/","-");e.created_at=r}))},showErrorToast:function(e){this.$toast.add({severity:"error",summary:e,life:5e3})},clearFilters:function(){this.initFilters()},initFilters:function(){this.filters={global:{value:null,matchMode:s["a"].CONTAINS}}},orderStatusText:function(e){switch(e){case"pending":return"處理中";case"confirmed":return"已確認";case"finished":return"已完成";case"canceled":return"已取消"}},paymentStatusText:function(e){switch(e){case"outstanding":case"unpaid":return"未付款";case"failed":return"付款失敗";case"paid":return"已付款"}},shippingStatusText:function(e){switch(e){case"in_preparation":return"備貨中";case"shipping":return"已發貨";case"arrived":return"已到達";case"picked_up":return"已取貨"}},getTheOrder:function(e){var t=this,r="".concat("https://lemon-coffee.herokuapp.com","/admin/orders/").concat(e),n={Authorization:f.a.get("lemonToken")};p.a.get(r,{headers:n}).then((function(e){t.order=Object(l["a"])({},e.data)})).catch((function(e){401===e.response.status&&(f.a.remove("lemonToken"),t.showErrorToast("請重新登入"),t.$router.push("/entrance/login"))})).finally((function(){t.loading=!1}))}},created:function(){var e=this;this.getOrders(),this.emitter.on("updateUserOrderAllStatus",(function(){e.getOrders()}))}};const _e=pe()(Ve,[["render",i]]);t["default"]=_e},f0b3:function(e,t,r){},fbfa:function(e,t,r){"use strict";r("f0b3")},fce3:function(e,t,r){var n=r("d039"),c=r("da84"),o=c.RegExp;e.exports=n((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-123cc8fe.02354073.js.map