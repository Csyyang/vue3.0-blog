(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-079dfece"],{"6a67":function(t,e,n){"use strict";n.r(e);var o=n("7a23");const c={id:"login"},s={class:"form-item"},r={class:"form-item"};function a(t,e,n,a,u,d){return Object(o["u"])(),Object(o["g"])("section",c,[Object(o["h"])("form",null,[e[5]||(e[5]=Object(o["h"])("p",{class:"title"},"后管登录",-1)),Object(o["h"])("div",s,[e[3]||(e[3]=Object(o["h"])("label",{for:"user"},"用户名",-1)),Object(o["K"])(Object(o["h"])("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.user=t),name:"user",type:"text"},null,512),[[o["G"],a.user]])]),Object(o["h"])("div",r,[e[4]||(e[4]=Object(o["h"])("label",{for:"password"},"密码",-1)),Object(o["K"])(Object(o["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.password=t),name:"password",type:"password"},null,512),[[o["G"],a.password]])]),Object(o["h"])("button",{type:"button",class:"btn",onClick:e[2]||(e[2]=Object(o["L"])((...t)=>a.login&&a.login(...t),["stop"]))},"登录")])])}n("14d9");var u=n("d035"),d=n("6605"),i=n("5502"),b={setup(){const t=Object(i["b"])(),e=Object(d["d"])(),n=Object(o["x"])(""),c=Object(o["x"])(""),s=async()=>{const o=await Object(u["a"])({user:n.value,password:c.value});"00"==o.code&&(t.commit("changeRoot",!0),e.push("./index"))};return{user:n,password:c,login:s}}},l=(n("f605"),n("6b0d")),p=n.n(l);const j=p()(b,[["render",a],["__scopeId","data-v-5b51927c"]]);e["default"]=j},d035:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s}));var o=n("4020");function c(t){return Object(o["a"])({url:"/posterior/login",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/posterior/updateArticl",method:"post",data:t,header:{" Content-Type":"multipart/form-data"}})}},d047:function(t,e,n){},f605:function(t,e,n){"use strict";n("d047")}}]);
//# sourceMappingURL=chunk-079dfece.0df1b72a.js.map