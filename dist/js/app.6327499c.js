(function(t){function e(e){for(var a,o,i=e[0],l=e[1],c=e[2],m=0,d=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},r=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],o={name:"App"},i=o,l=(s("034f"),s("2877")),c=Object(l["a"])(i,n,r,!1,null,null,null),u=c.exports,m=s("8c4f"),d=s("5f5b"),f=s("b1e0"),p=(s("f9e3"),s("2dd8"),s("dbbe")),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"config"}},[s("b-modal",{attrs:{id:"modal-customer1",title:"Clientes Registrados","cancel-disabled":!0,"hide-footer":!0,"ok-disabled":!0}},[s("ModalCustomer")],1),s("h1",[t._v("Configuration")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 align-self-center"},[s("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.calculate(e)}}},[t._l(t.trainers,(function(e,a){return s("div",{key:e.title,staticClass:"form-group row justify-content-md-center col-12"},[s("div",{staticClass:"text-left col-12 mt-4 mb-md-4"},[t._v("ENTRENADOR "+t._s(a+1))]),s("div",{staticClass:"form-group mt-sm-2 col-xs-6"},[s("label",{staticClass:"pl-3 mr-sm-2"},[t._v("Nombre")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"trainer.name"}],staticClass:"form-control col-md-6",domProps:{value:e.name},on:{input:function(s){s.target.composing||t.$set(e,"name",s.target.value)}}})]),s("div",{staticClass:"form-group mt-sm-2 col-xs-6"},[s("label",{staticClass:"pl-3 mr-sm-2"},[t._v("Valoración")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.assessment,expression:"trainer.assessment"}],staticClass:"form-control col-md-3",attrs:{type:"number",max:"5",min:"0",step:"0.1"},domProps:{value:e.assessment},on:{input:function(s){s.target.composing||t.$set(e,"assessment",s.target.value)}}})]),s("div",{staticClass:"form-group mt-sm-2 col-xs-6"},[s("label",{staticClass:"pl-3 mr-sm-2"},[t._v("Máximo número de clientes")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.maxCustomer,expression:"trainer.maxCustomer"}],staticClass:"form-control col-md-3",attrs:{type:"number",max:"10",min:"0"},domProps:{value:e.maxCustomer},on:{input:function(s){s.target.composing||t.$set(e,"maxCustomer",s.target.value)}}})]),t._m(0,!0)])})),s("div",{staticClass:"col-12"},[s("b-button",{staticClass:"btn ml-2 float-right",attrs:{variant:"primary",type:"submit"}},[t._v("Calcular resultados")]),s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-customer1",modifiers:{"modal-customer1":!0}}],staticClass:"btn ml-2 float-right",attrs:{variant:"secondary"}},[t._v("Ver tabla de clientes")])],1)],2)])])],1)},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 mt-4 text-left mb-md-4"},[s("hr")])}],h=(s("7db0"),s("4160"),s("b0c0"),s("b680"),s("159b"),s("d4ec")),C=function t(e,s,a,n){Object(h["a"])(this,t),this.name=e,this.assessment=s,this.maxCustomer=a,this.customers=n},g=C,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-table",{attrs:{striped:"",hover:"",fields:t.fields,items:t.customers}})],1)},_=[],y=[{name:"q",reputationImport:2.6,assign:!1,satisfaction:0},{name:"r",reputationImport:3.7,assign:!1,satisfaction:0},{name:"s",reputationImport:8.5,assign:!1,satisfaction:0},{name:"t",reputationImport:9.7,assign:!1,satisfaction:0},{name:"u",reputationImport:2.6,assign:!1,satisfaction:0},{name:"v",reputationImport:4.7,assign:!1,satisfaction:0},{name:"w",reputationImport:5.6,assign:!1,satisfaction:0},{name:"x",reputationImport:3.7,assign:!1,satisfaction:0},{name:"y",reputationImport:8.1,assign:!1,satisfaction:0},{name:"z",reputationImport:2.5,assign:!1,satisfaction:0}],w=y,S={name:"ModalCustomer",mounted:function(){this.getCustomers()},data:function(){return{customers:[],CustomersStatic:w,fields:[{key:"id",thClass:"d-none",tdClass:"d-none"},{key:"name",label:"Nombre del Cliente",sortable:!1},{key:"reputationImport",label:"Importancia de la reputación del entrenador",sortable:!0}]}},methods:{getCustomers:function(){this.customers=this.CustomersStatic.sort()}}},E=S,I=Object(l["a"])(E,x,_,!1,null,null,null),O=I.exports,j=[],k=j;function T(t,e){var s=t/5;s*=10;var a=s/e*100;return a.toFixed(0)}var $={name:"MainConfig",components:{ModalCustomer:O},data:function(){return{customers:[],trainer:new g("",0,0,this.customers),TrainersStatic:k,CustomersStatic:w,trainers:[{title:"Entrenador 1",name:"A",assessment:4.5,maxCustomer:1,complete:!1},{title:"Entrenador 2",name:"B",assessment:3.2,maxCustomer:4,complete:!1},{title:"Entrenador 3",name:"C",assessment:1.2,maxCustomer:3,complete:!1},{title:"Entrenador 4",name:"D",assessment:3.4,maxCustomer:2,complete:!1},{title:"Entrenador 5",name:"",assessment:0,maxCustomer:0,complete:!1}]}},methods:{calculate:function(){var t=this.trainers;this.save(t),this.update(),this.$router.push("/Result")},save:function(t){var e=this;console.log("SAVE");var s=t;Array.isArray(s)&&s.forEach((function(t){if(t.name&&!e.TrainersStatic.find((function(e){return e.name==t.name}))){var s=[];t.customer=s,e.TrainersStatic.push(t)}}))},update:function(){var t=this;console.log("UPDATE");var e=this.CustomersStatic;console.log(this.CustomersStatic);var s=[],a=[];s=this.CustomersStatic.sort((function(t,e){return t.reputationImport<e.reputationImport?1:e.reputationImport<t.reputationImport?-1:0}));var n=this.TrainersStatic.sort((function(t,e){return t.assessment<e.assessment?1:e.assessment<t.assessment?-1:0}));n.forEach((function(r){var o=0;if(!r.complete){for(var i=0;i<parseInt(r.maxCustomer);i++)if(s.length>0){var l=s[0].name;e.forEach((function(e){if(e.name==l&&0==e.assign){e.assign=!0,r.customer.push(e);var s=T(r.assessment,e.reputationImport);e.satisfaction=s,a.push(e),t.CustomersStatic.push(e)}})),s.shift(),o++}parseInt(r.maxCustomer)==o&&(r.complete=!0),t.TrainersStatic=n}}))}}},P=$,M=Object(l["a"])(P,v,b,!1,null,null,null),N=M.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row"},t._l(t.trainers,(function(e,a){return s("div",{key:a,staticClass:"card mb-3 m-5",staticStyle:{"max-width":"25rem"}},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-10"},[t._v("Entrenador: "+t._s(++a))]),s("div",{staticClass:"col-md-2 text-right"},[s("b-icon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{icon:"info-circle",placement:"bottom",title:"<strong> Valoración: </strong>  "+e.assessment+"<br /> <strong> Max Cliente:</strong>  "+e.maxCustomer}})],1)])]),s("div",{staticClass:"card",staticStyle:{"max-width":"540px"}},[s("div",{staticClass:"row no-gutters"},[t._m(0,!0),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._l(e.customer,(function(e,a){return s("p",{key:a,staticClass:"card-text text-left"},[t._v('- Cliente "'+t._s(e.name)+'"')])}))],2)])])]),s("div",{staticClass:"card-footer bg-grey"},[t._v(t._s(e.customer.length)+" Clientes asignados")])])})),0)])},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-3 pt-2"},[s("img",{staticClass:"card-img rounded-circle p-2",attrs:{src:"https://www.softzone.es/app/uploads/2018/04/guest.png"}})])}],V={name:"ResultCustomer",components:{},mounted:function(){this.getTrainerCustomer()},data:function(){return{trainerVal:0,trainers:[],TrainersStatic:k}},methods:{getTrainerCustomer:function(){this.trainers=this.TrainersStatic}}},D=V,B=Object(l["a"])(D,R,A,!1,null,null,null),z=B.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"tabs"}},[s("b-card",{attrs:{"no-body":""}},[s("b-tabs",{attrs:{card:""}},[s("b-tab",{attrs:{title:"Entrenadores",active:""}},[s("ResultCustomer")],1),s("b-tab",{attrs:{title:"Valoración del conjunto"}},[s("SatisfactionCustomer")],1)],1)],1),s("b-button",{staticClass:"btn ml-2 mt-2 float-right",attrs:{variant:"secondary"},on:{click:t.goBack}},[t._v("Volver")])],1)},q=[],F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-table",{attrs:{hover:"",fields:t.fields,items:t.customers}})],1)},U=[],G=(s("4de4"),{name:"SatisfactionCustomer",components:{},mounted:function(){this.getAssignCustomers()},data:function(){return{customers:[],CustomersStatic:w,fields:[{key:"name",label:"Nombre del Cliente",sortable:!1},{key:"reputationImport",label:"Importancia de la reputación del entrenador",sortable:!0},{key:"satisfaction",label:"Satisfacción del cliente (%)",sortable:!0}]}},methods:{getAssignCustomers:function(){var t=this.CustomersStatic.filter((function(t){return 1==t.assign})).sort((function(t,e){return t.satisfaction>e.satisfaction?1:e.satisfaction>t.satisfaction?-1:0}));this.customers=t}}}),H=G,K=Object(l["a"])(H,F,U,!1,null,null,null),L=K.exports,Q={name:"ResultTab",components:{ResultCustomer:z,SatisfactionCustomer:L},data:function(){return{}},methods:{goBack:function(){this.$router.push("/")}}},W=Q,X=Object(l["a"])(W,J,q,!1,null,null,null),Y=X.exports;a["default"].config.productionTip=!1,a["default"].use(m["a"]),a["default"].use(d["a"]),a["default"].use(f["a"]),a["default"].use(p["a"]);var Z=[{path:"/mainConfig",component:N},{path:"/ResultCustomer",component:z},{path:"/Result",component:Y},{path:"/",component:N}],tt=new m["a"]({routes:Z,mode:"history"});new a["default"]({router:tt,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.6327499c.js.map