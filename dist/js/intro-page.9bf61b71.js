(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["intro-page"],{"0cb2":function(t,e,n){var a=n("e330"),i=n("7b0b"),r=Math.floor,s=a("".charAt),o=a("".replace),c=a("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,a,f,d){var h=n+t.length,p=a.length,v=u;return void 0!==f&&(f=i(f),v=l),o(d,v,(function(i,o){var l;switch(s(o,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,n);case"'":return c(e,h);case"<":l=f[c(o,1,-1)];break;default:var u=+o;if(0===u)return i;if(u>p){var d=r(u/10);return 0===d?i:d<=p?void 0===a[d-1]?s(o,1):a[d-1]+s(o,1):i}l=a[u-1]}return void 0===l?"":l}))}},"14c3":function(t,e,n){var a=n("da84"),i=n("c65b"),r=n("825a"),s=n("1626"),o=n("c6b6"),c=n("9263"),l=a.TypeError;t.exports=function(t,e){var n=t.exec;if(s(n)){var a=i(n,t,e);return null!==a&&r(a),a}if("RegExp"===o(t))return i(c,t,e);throw l("RegExp#exec called on incompatible receiver")}},2678:function(t,e,n){},"2b89":function(t,e,n){"use strict";e["a"]=[{time:"2021/12/10",version:"0.0.1",changes:["Ui and Calculations Need to Be Improved","Main Release"]}]},5319:function(t,e,n){"use strict";var a=n("2ba4"),i=n("c65b"),r=n("e330"),s=n("d784"),o=n("d039"),c=n("825a"),l=n("1626"),u=n("5926"),f=n("50c4"),d=n("577e"),h=n("1d80"),p=n("8aa5"),v=n("dc4a"),m=n("0cb2"),b=n("14c3"),g=n("b622"),w=g("replace"),_=Math.max,C=Math.min,k=r([].concat),x=r([].push),y=r("".indexOf),$=r("".slice),P=function(t){return void 0===t?t:String(t)},M=function(){return"$0"==="a".replace(/./,"$0")}(),E=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),A=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));s("replace",(function(t,e,n){var r=E?"$":"$0";return[function(t,n){var a=h(this),r=void 0==t?void 0:v(t,w);return r?i(r,t,a,n):i(e,d(a),t,n)},function(t,i){var s=c(this),o=d(t);if("string"==typeof i&&-1===y(i,r)&&-1===y(i,"$<")){var h=n(e,s,o,i);if(h.done)return h.value}var v=l(i);v||(i=d(i));var g=s.global;if(g){var w=s.unicode;s.lastIndex=0}var M=[];while(1){var E=b(s,o);if(null===E)break;if(x(M,E),!g)break;var A=d(E[0]);""===A&&(s.lastIndex=p(o,f(s.lastIndex),w))}for(var B="",D=0,I=0;I<M.length;I++){E=M[I];for(var S=d(E[0]),j=_(C(u(E.index),o.length),0),O=[],T=1;T<E.length;T++)x(O,P(E[T]));var q=E.groups;if(v){var G=k([S],O,j,o);void 0!==q&&x(G,q);var N=d(a(i,void 0,G))}else N=m(S,o,j,O,q,i);j>=D&&(B+=$(o,D,j)+N,D=j+S.length)}return B+$(o,D)}]}),!A||!M||E)},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},"8c78":function(t,e,n){"use strict";n("2678")},b726:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var a=n("e330"),i=n("6eeb"),r=n("9263"),s=n("d039"),o=n("b622"),c=n("9112"),l=o("species"),u=RegExp.prototype;t.exports=function(t,e,n,f){var d=o(t),h=!s((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=h&&!s((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!h||!p||n){var v=a(/./[d]),m=e(d,""[t],(function(t,e,n,i,s){var o=a(t),c=e.exec;return c===r||c===u.exec?h&&!s?{done:!0,value:v(e,n,i)}:{done:!0,value:o(n,e,i)}:{done:!1}}));i(String.prototype,t,m[0]),i(u,d,m[1])}f&&c(u[d],"sham",!0)}},fcce:function(t,e,n){"use strict";n("b726")},fecd:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-breadcrumb",[n("el-breadcrumb-item",[t._v("Main Page")])],1),n("el-divider"),n("p",{staticClass:"title"},[n("span",{staticClass:"mona"},[t._v("Genshin Artifacts Optimizer")]),t._v(" V "+t._s(t.version)+" ")]),t.needMigrate?n("migrate-notification",{staticStyle:{"margin-bottom":"16px"}}):t._e(),n("el-alert",{staticClass:"hidden-sm-and-up",staticStyle:{"margin-bottom":"16px"},attrs:{title:"Use PC access to enable full functionality, currently only information pages can be viewed",type:"error",closable:!1}}),n("el-card",{staticClass:"mb16"},[n("p",{staticClass:"big-card-title"},[t._v("Resources")]),n("el-row",{attrs:{gutter:16}},[n("el-col",{attrs:{xs:24,sm:12}},[n("el-card",{staticClass:"item mb16",attrs:{"body-style":{textAlign:"center"},shadow:"hover"},nativeOn:{click:function(e){return t.newPage(t.links.frontendProject)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","github"]}}),n("p",{staticClass:"item-title"},[t._v("Github - Project Source Code")])],1)],1),n("el-col",{attrs:{xs:24,sm:12}},[n("el-card",{staticClass:"item",attrs:{"body-style":{textAlign:"center"},shadow:"hover"},nativeOn:{click:function(e){return t.newPage(t.links.panelProject)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","github"]}}),n("p",{staticClass:"item-title"},[t._v("NPM Package - Damage Calculations (By wormtql)")])],1)],1)],1)],1),n("el-row",{attrs:{gutter:16}},[n("el-col",{attrs:{xs:24,sm:12}},[n("el-card",{staticClass:"mb16"},[n("p",{staticClass:"card-title"},[t._v("Contact the Developer")]),n("el-button",{staticClass:"data-source",on:{click:function(e){return t.newPage(t.links.issue)}}},[t._v(" Create a Github Issue "),n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),n("el-button",{staticClass:"data-source",on:{click:function(e){return t.newPage(t.links.discordDM)}}},[t._v(" BunnyHunter031#2458 "),n("font-awesome-icon",{attrs:{icon:"comment"}})],1),n("el-button",{staticClass:"data-source",on:{click:function(e){return t.newPage(t.links.discord)}}},[t._v(" Discord Server "),n("font-awesome-icon",{attrs:{icon:"comment"}})],1)],1)],1),n("el-col",{attrs:{xs:24,sm:12}},[n("el-card",{staticClass:"mb16"},[n("p",{staticClass:"card-title"},[t._v("Useful Links ")]),n("el-button",{staticClass:"data-source",on:{click:function(e){return t.$router.push("/help/basic")}}},[t._v(" Help "),n("i",{staticClass:"el-icon-question"})]),n("el-button",{staticClass:"data-source",attrs:{type:"primary"},on:{click:function(e){return t.$router.push("/help/export-tools")}}},[t._v(" Scaners and External Tools "),n("i",{staticClass:"el-icon-aim"})]),n("el-button",{staticClass:"data-source",on:{click:function(e){return t.$router.push("/help/faq")}}},[t._v(" FAQ "),n("i",{staticClass:"el-icon-question"})]),n("el-button",{staticClass:"data-source",on:{click:function(e){return t.$router.push("/calculate")}}},[t._v(" Character Calculator "),n("i",{staticClass:"el-icon-cpu"})])],1)],1)],1)],1)},i=[],r=(n("ac1f"),n("5319"),n("2b89")),s={doc:"https://wormtql.gitbook.io/mona-uranai/",frontendProject:"https://github.com/BunnyHunter031/genshin_artifact_optimizer",panelProject:"https://github.com/wormtql/genshin_panel",issue:"https://github.com/BunnyHunter031/genshin_artifact_optimizer/issues",wiki:"https://wiki.biligame.com/ys/%E9%A6%96%E9%A1%B5",wiki2:"https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki",wiki3:"https://bbs.mihoyo.com/ys/obc/?bbs_presentation_style=no_header",discord:"https://discord.gg/Vu2nEDCCUh",discordDM:"https://discord.com/channels/BunnyHunter031#2458"},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"migrate"},[t._m(0),n("p",[t._v(t._s('This Domain "'+t.host+'" No longer in use, will be deactivated in the near future, please transfer to a new domain name as soon as possible'))]),n("a",{staticClass:"el-button el-button--danger",attrs:{href:t.url,target:"_blank"}},[n("i",{staticClass:"el-icon-link"}),t._v(" "+t._s(t.url)+" ")])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticStyle:{margin:"0"}},[n("i",{staticClass:"el-icon-info"}),t._v("Important Notice")])}],l={name:"MigrateNotification",data:function(){return{url:"https://www.mona-uranai.com",host:location.hostname}}},u=l,f=(n("fcce"),n("2877")),d=Object(f["a"])(u,o,c,!1,null,"90f6c568",null),h=d.exports,p={name:"IntroPage",components:{MigrateNotification:h},created:function(){this.links=s,this.version="4.14.0",this.webTitle="GAOP",this.needMigrate=!1,this.buildDate="Wed Jan 19 2022 09:20:59 GMT-0400 (Bolivia Time)",this.lastestVersion=r["a"][r["a"].length-1],this.host=location.hostname},methods:{navigateTo:function(t){this.$router.replace(t)},newPage:function(t){window.open(t,"_blank")}}},v=p,m=(n("8c78"),Object(f["a"])(v,a,i,!1,null,"ad8a30a6",null)),b=m.exports}}]);