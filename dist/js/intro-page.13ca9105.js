(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["intro-page"],{"0cb2":function(t,e,a){var n=a("e330"),i=a("7b0b"),r=Math.floor,s=n("".charAt),c=n("".replace),o=n("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,a,n,d,f){var p=a+t.length,h=n.length,v=u;return void 0!==d&&(d=i(d),v=l),c(f,v,(function(i,c){var l;switch(s(c,0)){case"$":return"$";case"&":return t;case"`":return o(e,0,a);case"'":return o(e,p);case"<":l=d[o(c,1,-1)];break;default:var u=+c;if(0===u)return i;if(u>h){var f=r(u/10);return 0===f?i:f<=h?void 0===n[f-1]?s(c,1):n[f-1]+s(c,1):i}l=n[u-1]}return void 0===l?"":l}))}},"14c3":function(t,e,a){var n=a("da84"),i=a("c65b"),r=a("825a"),s=a("1626"),c=a("c6b6"),o=a("9263"),l=n.TypeError;t.exports=function(t,e){var a=t.exec;if(s(a)){var n=i(a,t,e);return null!==n&&r(n),n}if("RegExp"===c(t))return i(o,t,e);throw l("RegExp#exec called on incompatible receiver")}},"2b89":function(t,e,a){"use strict";e["a"]=[{time:"2021/12/10",version:"0.0.1",changes:["Ui and Calculations Need to Be Improved","Main Release"]}]},5319:function(t,e,a){"use strict";var n=a("2ba4"),i=a("c65b"),r=a("e330"),s=a("d784"),c=a("d039"),o=a("825a"),l=a("1626"),u=a("5926"),d=a("50c4"),f=a("577e"),p=a("1d80"),h=a("8aa5"),v=a("dc4a"),m=a("0cb2"),b=a("14c3"),g=a("b622"),w=g("replace"),C=Math.max,_=Math.min,x=r([].concat),k=r([].push),y=r("".indexOf),$=r("".slice),P=function(t){return void 0===t?t:String(t)},M=function(){return"$0"==="a".replace(/./,"$0")}(),A=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),E=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));s("replace",(function(t,e,a){var r=A?"$":"$0";return[function(t,a){var n=p(this),r=void 0==t?void 0:v(t,w);return r?i(r,t,n,a):i(e,f(n),t,a)},function(t,i){var s=o(this),c=f(t);if("string"==typeof i&&-1===y(i,r)&&-1===y(i,"$<")){var p=a(e,s,c,i);if(p.done)return p.value}var v=l(i);v||(i=f(i));var g=s.global;if(g){var w=s.unicode;s.lastIndex=0}var M=[];while(1){var A=b(s,c);if(null===A)break;if(k(M,A),!g)break;var E=f(A[0]);""===E&&(s.lastIndex=h(c,d(s.lastIndex),w))}for(var O="",T=0,j=0;j<M.length;j++){A=M[j];for(var B=f(A[0]),I=C(_(u(A.index),c.length),0),S=[],D=1;D<A.length;D++)k(S,P(A[D]));var G=A.groups;if(v){var q=x([B],S,I,c);void 0!==G&&k(q,G);var N=f(n(i,void 0,q))}else N=m(B,c,I,S,G,i);I>=T&&(O+=$(c,T,I)+N,T=I+B.length)}return O+$(c,T)}]}),!E||!M||A)},"6d93":function(t,e,a){},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},"9bf1":function(t,e,a){},d784:function(t,e,a){"use strict";a("ac1f");var n=a("e330"),i=a("6eeb"),r=a("9263"),s=a("d039"),c=a("b622"),o=a("9112"),l=c("species"),u=RegExp.prototype;t.exports=function(t,e,a,d){var f=c(t),p=!s((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),h=p&&!s((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[f]=/./[f]),a.exec=function(){return e=!0,null},a[f](""),!e}));if(!p||!h||a){var v=n(/./[f]),m=e(f,""[t],(function(t,e,a,i,s){var c=n(t),o=e.exec;return o===r||o===u.exec?p&&!s?{done:!0,value:v(e,a,i)}:{done:!0,value:c(a,e,i)}:{done:!1}}));i(String.prototype,t,m[0]),i(u,f,m[1])}d&&o(u[f],"sham",!0)}},d931:function(t,e,a){"use strict";a("9bf1")},fc54:function(t,e,a){"use strict";a("6d93")},fecd:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return b}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",[a("el-breadcrumb-item",[t._v("Main Page")])],1),a("el-divider"),a("center",[a("p",{staticClass:"title"},[a("span",{staticClass:"mona"},[t._v("Genshin Artifacts Optimizer")])])]),t.needMigrate?a("migrate-notification",{staticStyle:{"margin-bottom":"16px"}}):t._e(),a("el-alert",{staticClass:"hidden-sm-and-up",staticStyle:{"margin-bottom":"16px"},attrs:{title:"Use PC access to enable full functionality, currently only information pages can be viewed",type:"error",closable:!1}}),a("el-card",{staticClass:"mb16"},[a("p",{staticClass:"big-card-title"},[t._v("Resources")]),a("el-row",{attrs:{gutter:16}},[a("el-col",{attrs:{xs:24,sm:12}},[a("el-card",{staticClass:"item mb16",attrs:{"body-style":{textAlign:"center"},shadow:"hover"},nativeOn:{click:function(e){return t.newPage(t.links.frontendProject)}}},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","github"]}}),a("p",{staticClass:"item-title"},[t._v("Github - Project Source Code")])],1)],1),a("el-col",{attrs:{xs:24,sm:12}},[a("el-card",{staticClass:"item",attrs:{"body-style":{textAlign:"center"},shadow:"hover"},nativeOn:{click:function(e){return t.newPage(t.links.panelProject)}}},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","github"]}}),a("p",{staticClass:"item-title"},[t._v("NPM Package - Damage Calculations (By wormtql)")])],1)],1)],1)],1),a("el-row",{attrs:{gutter:48}},[a("el-col",{attrs:{xs:24,sm:12}},[a("el-card",{staticClass:"mb16"},[a("p",{staticClass:"card-title"},[t._v("Contact the Developer")]),a("el-button",{staticClass:"data-source",on:{click:function(e){return t.newPage(t.links.issue)}}},[t._v(" Create a Github Issue "),a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),a("el-button",{staticClass:"data-source",on:{click:function(e){return t.newPage(t.links.discord)}}},[t._v(" Discord Server "),a("font-awesome-icon",{attrs:{icon:"comment"}})],1)],1)],1),a("el-col",{attrs:{xs:24,sm:12}},[a("el-card",{staticClass:"mb16"},[a("p",{staticClass:"card-title"},[t._v("Useful Links ")]),a("el-button",{staticClass:"data-source",on:{click:function(e){return t.$router.push("/help/basic")}}},[t._v(" Help "),a("i",{staticClass:"el-icon-question"})]),a("el-button",{staticClass:"data-source",attrs:{type:"primary"},on:{click:function(e){return t.$router.push("/help/export-tools")}}},[t._v(" Scaners "),a("i",{staticClass:"el-icon-aim"})]),a("el-button",{staticClass:"data-source",on:{click:function(e){return t.$router.push("/help/faq")}}},[t._v(" FAQ "),a("i",{staticClass:"el-icon-question"})]),a("el-button",{staticClass:"data-source",on:{click:function(e){return t.$router.push("/calculate")}}},[t._v(" Character Calculator "),a("i",{staticClass:"el-icon-cpu"})])],1)],1),a("el-col",{attrs:{xs:24,sm:32}},[a("el-card",{staticClass:"mb16"},[a("center",[a("p",{staticClass:"card-title"},[t._v("Tutorial On How To Use Genshin Artifact Optimizer")]),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/KiBjW41g5vA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)],1)],1)],1)},i=[],r=(a("ac1f"),a("5319"),a("2b89")),s={doc:"https://wormtql.gitbook.io/mona-uranai/",frontendProject:"https://github.com/BunnyHunter031/genshin_artifact_optimizer",panelProject:"https://github.com/wormtql/genshin_panel",issue:"https://github.com/BunnyHunter031/genshin_artifact_optimizer/issues",wiki:"https://wiki.biligame.com/ys/%E9%A6%96%E9%A1%B5",wiki2:"https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki",wiki3:"https://bbs.mihoyo.com/ys/obc/?bbs_presentation_style=no_header",discord:"https://discord.gg/Vu2nEDCCUh",discordDM:"https://discord.com/channels/BunnyHunter031#2458"},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"migrate"},[t._m(0),a("p",[t._v(t._s('This Domain "'+t.host+'" No longer in use, will be deactivated in the near future, please transfer to a new domain name as soon as possible'))]),a("a",{staticClass:"el-button el-button--danger",attrs:{href:t.url,target:"_blank"}},[a("i",{staticClass:"el-icon-link"}),t._v(" "+t._s(t.url)+" ")])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticStyle:{margin:"0"}},[a("i",{staticClass:"el-icon-info"}),t._v("Important Notice")])}],l={name:"MigrateNotification",data:function(){return{url:"",host:location.hostname}}},u=l,d=(a("fc54"),a("2877")),f=Object(d["a"])(u,c,o,!1,null,"fc22d92a",null),p=f.exports,h={name:"IntroPage",components:{MigrateNotification:p},created:function(){this.links=s,this.version="4.14.0",this.webTitle="GAOP",this.needMigrate=!1,this.buildDate="Wed Feb 16 2022 22:12:34 GMT-0400 (Bolivia Time)",this.lastestVersion=r["a"][r["a"].length-1],this.host=location.hostname},methods:{navigateTo:function(t){this.$router.replace(t)},newPage:function(t){window.open(t,"_blank")}}},v=h,m=(a("d931"),Object(d["a"])(v,n,i,!1,null,"0efbd84a",null)),b=m.exports}}]);