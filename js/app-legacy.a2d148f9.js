(function(){"use strict";var e={118:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("h3",[e._v("QuickPick.js")])]),n("v-main",[n("selector-component",{on:{selected:e.setPickedNumber}}),n("result-component",{attrs:{picked:e.picked}})],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"4",sm:"2"}},[n("v-select",{attrs:{items:e.types,label:"投票形式","item-text":"label","return-object":""},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1),n("v-col",{attrs:{cols:"3",md:"1"}},[n("v-select",{attrs:{items:e.max_opt,label:"出走数"},model:{value:e.max,callback:function(t){e.max=t},expression:"max"}})],1),n("v-col",{staticClass:"d-flex",attrs:{cols:"1"}},[n("i",{staticClass:"fa-solid fa-arrow-right center"})]),n("v-col",{staticClass:"d-flex",attrs:{cols:"1"}},[n("v-btn",{attrs:{large:"",elevation:"3",color:"primary"},on:{click:e.send}},[e._v(" Go! ")])],1)],1)],1)},a=[],l=(n(7042),{name:"MainComponent",data:function(){return{type:{},types:[{label:"単勝",choices:1,multi:!1},{label:"複勝",choices:1,multi:!1},{label:"馬単",choices:2,multi:!1},{label:"馬連",choices:2,multi:!0},{label:"ワイド",choices:2,multi:!1},{label:"三連単",choices:3,multi:!0},{label:"三連複",choices:3,multi:!1},{label:"枠連",choices:2,multi:!1},{label:"枠単",choices:2,multi:!0}],max_opt:[],max:0,picked:[]}},methods:{randomPick:function(){for(var e=[],t=1;t<=this.max;t++)e.push(t);var n=e.length-1;while(n>0){var r=Math.floor(Math.random()*n),o=e[n];e[n]=e[r],e[r]=o,n-=1}this.picked=e.slice(0,this.type.choices)},send:function(){this.randomPick(),this.$emit("selected",this.picked)}},created:function(){for(var e=1;e<=18;e++)this.max_opt.push(e)}}),s=l,u=n(1001),p=n(3453),f=n.n(p),d=n(4995),m=n(2102),h=n(247),v=n(2877),b=n(2378),k=(0,u.Z)(s,c,a,!1,null,"eeb90aa6",null),Z=k.exports;f()(k,{VBtn:d.Z,VCol:m.Z,VContainer:h.Z,VRow:v.Z,VSelect:b.Z});var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",[e._v(" "+e._s(e.picked)+" ")])],1)],1)},g=[],x={name:"ResultComponent",data:function(){return{}},props:["picked"],methods:{}},w=x,_=(0,u.Z)(w,y,g,!1,null,null,null),C=_.exports;f()(_,{VCol:m.Z,VContainer:h.Z,VRow:v.Z});var O={name:"App",components:{SelectorComponent:Z,ResultComponent:C},data:function(){return{picked:[]}},methods:{setPickedNumber:function(e){this.picked=e}}},V=O,j=n(7524),P=n(7199),M=n(7877),S=(0,u.Z)(V,o,i,!1,null,null,null),T=S.exports;f()(S,{VApp:j.Z,VAppBar:P.Z,VMain:M.Z});var $=n(9132),E=n(1846);r.Z.use($.Z);var R=new $.Z({theme:{themes:{light:{primary:E.Z.green.darken1,bracket1:E.Z.shades.white,bracket2:E.Z.shades.black,bracket3:E.Z.red.darken2,bracket4:E.Z.blue.darken2,bracket5:E.Z.yellow.accent2,bracket6:E.Z.lightGreen.accent3,bracket7:E.Z.yellow.darken4,bracket8:E.Z.pink.lighten4}}}});r.Z.config.productionTip=!1,new r.Z({vuetify:R,render:function(e){return e(T)}}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(a=!1,i<c&&(c=i));if(a){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,c=r[0],a=r[1],l=r[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var u=l(n)}for(t&&t(r);s<c.length;s++)i=c[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self["webpackChunkquickpick"]=self["webpackChunkquickpick"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(118)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.a2d148f9.js.map