(function(t){function e(e){for(var a,s,i=e[0],u=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("034f"),n("2877")),i={},u=Object(s["a"])(i,r,o,!1,null,null,null),c=u.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hr"),n("h2",[t._v("Registro de usuário")]),n("hr"),n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-half"},[void 0!=t.err?n("div",[n("div",{staticClass:"notification is-danger"},[n("p",[t._v(t._s(t.err))])])]):t._e(),n("p",[t._v("Nome")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Nome do usuário"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("hr"),n("p",[t._v("Trabalho")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.job,expression:"job"}],staticClass:"input",attrs:{type:"text",placeholder:"Trabalho ou Ocupação"},domProps:{value:t.job},on:{input:function(e){e.target.composing||(t.job=e.target.value)}}}),n("hr"),n("button",{staticClass:"button is-success",on:{click:function(e){return t.register()}}},[t._v("Cadastrar")])])])])},p=[],m=(n("b0c0"),n("bc3a")),v=n.n(m),h={data:function(){return{name:"",job:"",err:void 0}},methods:{register:function(){var t=this;v.a.post("https://reqres.in/api/users",{name:this.name,job:this.job}).then((function(e){console.log(e),t.$router.push({name:"User"})})).catch((function(e){var n=e.response.data.err;t.err=n}))}}},f=h,b=Object(s["a"])(f,d,p,!1,null,null,null),_=b.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hr"),n("h2",[t._v("Login de usuário")]),n("hr"),n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-half"},[n("p",[t._v("Nome")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Nome do usuário"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("hr"),n("p",[t._v("Trabalho")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.job,expression:"job"}],staticClass:"input",attrs:{type:"text",placeholder:"Trabalho ou Ocupação"},domProps:{value:t.job},on:{input:function(e){e.target.composing||(t.job=e.target.value)}}}),n("hr"),n("button",{staticClass:"button is-success",on:{click:function(e){return t.login()}}},[t._v("Logar")]),n("hr"),n("p",[t._v("Ou")]),n("br"),n("router-link",{attrs:{to:{name:"Register"}}},[n("button",{staticClass:"button is-danger"},[t._v("Cadastre-se")])])],1)])])},C=[],j={data:function(){return{name:"",job:""}},methods:{login:function(){var t=this;v.a.post("https://reqres.in/api/users?page=1",{name:this.name,job:this.job}).then((function(e){console.log(e),t.$router.push({name:"User"})})).catch((function(t){console.log(t)}))}}},w=j,y=Object(s["a"])(w,g,C,!1,null,null,null),x=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:{name:"Login"}}},[n("button",{staticClass:"button is-danger"},[t._v("Sair")])]),n("table",{staticClass:"table center is-fullwidth"},[t._m(0),n("tbody",t._l(t.users,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.first_name))]),n("td",[t._v(t._s(e.email))]),n("td",[n("img",{attrs:{src:e.avatar,alt:""}})]),n("td",[n("router-link",{attrs:{to:{name:"Edit"}}},[n("button",{staticClass:"button is-success"},[t._v("Editar")])])],1),n("td",[n("button",{staticClass:"button is-danger",on:{click:function(n){return t.showModalUser(e.id)}}},[t._v("Deletar")])])])})),0)]),n("div",{class:{modal:!0,"is-active":t.showModal}},[n("div",{staticClass:"modal-background"}),n("div",{staticClass:"modal-content"},[n("div",{staticClass:"card"},[t._m(1),t._m(2),n("footer",{staticClass:"card-footer"},[n("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){return t.hideModal()}}},[t._v("Cancelar")]),n("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){return t.deleteUser()}}},[t._v("Deletar")])])])]),n("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){return t.hideModal()}}})])],1)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Id")]),n("th",[t._v("Nome")]),n("th",[t._v("E-mail")]),n("th",[t._v("Imagem")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"card-header"},[n("div",{staticClass:"card-header-title"},[t._v(" Você quer realmente deletar? ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[n("p",[t._v("Deletar mesmo assim")])])])}],E={created:function(){var t=this;v.a.get("https://reqres.in/api/users?page=1").then((function(e){t.users=e.data.data})).catch((function(t){console.log(t)}))},methods:{hideModal:function(){this.showModal=!1},showModalUser:function(t){this.deleteUserId=t,this.showModal=!0},deleteUser:function(){var t=this;v.a.delete("https://reqres.in/api/users?page=1"+this.deleteUserId).then((function(e){console.log(e),t.showmodal=!1}))}},data:function(){return{users:{},showModal:!1,deleteUserId:-1}}},M=E,N=Object(s["a"])(M,O,k,!1,null,null,null),P=N.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hr"),n("h2",[t._v("Edição de usuário")]),n("hr"),n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-half"},[void 0!=t.err?n("div",[n("div",{staticClass:"notification is-danger"},[n("p",[t._v(t._s(t.err))])])]):t._e(),n("p",[t._v("Nome")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Nome do usuário"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("hr"),n("p",[t._v("Trabalho")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.job,expression:"job"}],staticClass:"input",attrs:{type:"text",placeholder:"Trabalho ou Ocupação"},domProps:{value:t.job},on:{input:function(e){e.target.composing||(t.job=e.target.value)}}}),n("hr"),n("button",{staticClass:"button is-success",on:{click:function(e){return t.update()}}},[t._v("Editar")])])])])},U=[],T={data:function(){return{name:"",job:"",err:void 0}},methods:{update:function(){var t=this;v.a.put("https://reqres.in/api/users/2",{name:this.name,job:this.job}).then((function(e){console.log(e),t.$router.push({name:"User"})})).catch((function(e){var n=e.response.data.err;t.err=n}))}}},q=T,S=Object(s["a"])(q,$,U,!1,null,null,null),I=S.exports;a["a"].use(l["a"]);var L=[{path:"/register",name:"Register",component:_},{path:"/user",name:"User",component:P},{path:"/",name:"Login",component:x},{path:"/edit",name:"Edit",component:I}],D=new l["a"]({mode:"history",base:"/",routes:L}),R=D;n("92c6");a["a"].config.productionTip=!1,new a["a"]({router:R,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.4207cc00.js.map