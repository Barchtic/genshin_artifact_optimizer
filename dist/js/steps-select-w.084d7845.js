(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["steps-select-w"],{"09b6":function(e,t,a){},3116:function(e,t,a){"use strict";a("7df8")},4998:function(e,t,a){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var s=a("e330"),n=a("1d80"),i=a("577e"),l=a("5899"),c=s("".replace),o="["+l+"]",r=RegExp("^"+o+o+"*"),v=RegExp(o+o+"*$"),u=function(e){return function(t){var a=i(n(t));return 1&e&&(a=c(a,r,"")),2&e&&(a=c(a,v,"")),a}};e.exports={start:u(1),end:u(2),trim:u(3)}},"7df8":function(e,t,a){},a9e3:function(e,t,a){"use strict";var s=a("83ab"),n=a("da84"),i=a("e330"),l=a("94ca"),c=a("6eeb"),o=a("1a2d"),r=a("7156"),v=a("3a9b"),u=a("d9b5"),p=a("c04e"),f=a("d039"),_=a("241c").f,h=a("06cf").f,C=a("9bf2").f,d=a("408a"),g=a("58a8").trim,m="Number",w=n[m],b=w.prototype,y=n.TypeError,N=i("".slice),S=i("".charCodeAt),x=function(e){var t=p(e,"number");return"bigint"==typeof t?t:k(t)},k=function(e){var t,a,s,n,i,l,c,o,r=p(e,"number");if(u(r))throw y("Cannot convert a Symbol value to a number");if("string"==typeof r&&r.length>2)if(r=g(r),t=S(r,0),43===t||45===t){if(a=S(r,2),88===a||120===a)return NaN}else if(48===t){switch(S(r,1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+r}for(i=N(r,2),l=i.length,c=0;c<l;c++)if(o=S(i,c),o<48||o>n)return NaN;return parseInt(i,s)}return+r};if(l(m,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var E,I=function(e){var t=arguments.length<1?0:w(x(e)),a=this;return v(b,a)&&f((function(){d(a)}))?r(Object(t),a,I):t},T=s?_(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;T.length>L;L++)o(w,E=T[L])&&!o(I,E)&&C(I,E,h(w,E));I.prototype=b,b.constructor=I,c(n,m,I)}},bc75:function(e,t,a){"use strict";a("09b6")},c1f1:function(e,t,a){"use strict";a("4998")},caeb:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"config-item"},[a("h3",{staticClass:"config-title"},[e._v(e._s(e.title))]),a("div",{staticClass:"delegate",on:{click:e.handleClickLevel}},[a("div",{staticClass:"panel"},[e._l(10,(function(t){return a("span",{key:t,staticClass:"select-int",class:{active:t.toString()===e.value}},[e._v(e._s(t))])})),a("span",{staticClass:"select-int",class:{active:"10-"===e.value}},[e._v("10-")])],2),a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"10+"===e.value}},[e._v("10+")]),e._l(9,(function(t){return a("span",{key:t+10,staticClass:"select-int",class:{active:(t+10).toString()===e.value}},[e._v(e._s(t+10))])})),a("span",{staticClass:"select-int",class:{active:"20-"===e.value}},[e._v("20-")])],2),a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"20+"===e.value}},[e._v("20+")]),e._l(9,(function(t){return a("span",{key:t+20,staticClass:"select-int",class:{active:(t+20).toString()===e.value}},[e._v(e._s(t+20))])})),a("span",{staticClass:"select-int",class:{active:"30-"===e.value}},[e._v("30-")])],2),a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"30+"===e.value}},[e._v("30+")]),e._l(9,(function(t){return a("span",{key:t+30,staticClass:"select-int",class:{active:(t+30).toString()===e.value}},[e._v(e._s(t+30))])})),a("span",{staticClass:"select-int",class:{active:"40-"===e.value}},[e._v("40-")])],2),a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"40+"===e.value}},[e._v("40+")]),e._l(9,(function(t){return a("span",{key:t+40,staticClass:"select-int",class:{active:(t+40).toString()===e.value}},[e._v(e._s(t+40))])})),a("span",{staticClass:"select-int",class:{active:"50-"===e.value}},[e._v("50-")])],2),a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"50+"===e.value}},[e._v("50+")]),e._l(9,(function(t){return a("span",{key:t+50,staticClass:"select-int",class:{active:(t+50).toString()===e.value}},[e._v(e._s(t+50))])})),e.star>=3?a("span",{staticClass:"select-int",class:{active:"60-"===e.value}},[e._v("60-")]):e._e()],2),a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"60+"===e.value}},[e._v("60+")]),e._l(9,(function(t){return a("span",{key:t+60,staticClass:"select-int",class:{active:(t+60).toString()===e.value}},[e._v(e._s(t+60))])})),e.star>=3?a("span",{staticClass:"select-int",class:{active:"70-"===e.value}},[e._v("70-")]):e._e()],2),e.star>=3?a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"70+"===e.value}},[e._v("70+")]),e._l(9,(function(t){return a("span",{key:t+70,staticClass:"select-int",class:{active:t+70==e.value}},[e._v(e._s(t+70))])})),a("span",{staticClass:"select-int",class:{active:"80-"===e.value}},[e._v("80-")])],2):e._e(),e.star>=3?a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"80+"===e.value}},[e._v("80+")]),e._l(10,(function(t){return a("span",{key:t+80,staticClass:"select-int",class:{active:t+80==e.value}},[e._v(e._s(t+80))])}))],2):e._e()])])},n=[],i=(a("a9e3"),{name:"SelectLevel",props:{value:{type:String},star:{type:Number,default:5},title:{type:String,default:""}},methods:{handleClickLevel:function(e){if(e.target.classList.contains("select-int")){var t=e.target.textContent;this.$emit("input",t)}}},computed:{}}),l=i,c=(a("3116"),a("2877")),o=Object(c["a"])(l,s,n,!1,null,"57a8b480",null);t["a"]=o.exports},eba9:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"config-item select-weapon"},[a("img",{staticClass:"image",attrs:{src:e.w.url}}),a("h3",{staticClass:"config-title"},[e._v("Select a Weapon")]),a("select-weapon",{attrs:{value:e.weaponName,type:e.weaponType},on:{input:e.handleChangeWeapon}}),e.w.effect?a("div",{staticClass:"weapon-effect"},[e._v(" "+e._s(e.w.effect)+" ")]):e._e()],1),a(e.configComponent,{ref:"extraConfig",tag:"component",attrs:{if:!!e.w.config}}),e.w.star>=3?a("div",{staticClass:"config-item"},[a("h3",{staticClass:"config-title"},[e._v("Refinement Level")]),a("el-input-number",{attrs:{min:1,max:5,size:"small"},model:{value:e.refine,callback:function(t){e.refine=t},expression:"refine"}})],1):e._e(),a("select-level",{staticStyle:{height:"450px"},attrs:{star:e.w.star,value:e.levelText,title:"Weapon Level"},on:{input:e.handleClickLevel}})],1)},n=[],i=(a("b0c0"),a("d3b7"),a("25f0"),a("99af"),a("1c99")),l=a("caeb"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{attrs:{value:e.value,placeholder:"Weapons",size:"small"},on:{input:function(t){return e.$emit("input",t)}}},[a("el-option",{attrs:{value:"custom",label:"Customization"}},[a("div",{staticClass:"option-item"},[a("div",{staticStyle:{width:"40px",display:"inline-block"}}),a("span",{style:{color:e.getColor(1)}},[e._v("Customization")])])]),e._l(e.weaponTypeMap[e.type],(function(t){return a("el-option",{key:t.name,attrs:{value:t.name,label:t.chs}},[a("div",{staticClass:"option-item"},[a("img",{attrs:{src:t.url}}),a("span",{style:{color:e.getColor(t.star)}},[e._v(e._s(t.chs))])])])}))],2)},o=[],r=a("2fd2"),v={name:"SelectWeapon",created:function(){this.weaponTypeMap=i["a"]},props:{type:{default:"any"},value:{}},methods:{getColor:function(e){return r["a"][e-1]}}},u=v,p=(a("c1f1"),a("2877")),f=Object(p["a"])(u,c,o,!1,null,"16a546c8",null),_=f.exports,h={name:"SelectWeaponLevel",components:{SelectLevel:l["a"],SelectWeapon:_},inject:["notifyChange"],data:function(){return{refine:1,level:{level:1,ascend:!1},weaponName:"liegong",weaponType:"bow"}},methods:{handleChangeWeapon:function(e){e!==this.weaponName&&(this.weaponName=e,i["b"][e].star<3&&(this.level.level>70||70===this.level.level&&this.level.ascend)&&(this.level.level=70,this.level.ascend=!1),this.notifyChange("weapon",e))},handleClickLevel:function(e){this.level.level=parseInt(e),this.level.ascend=-1!==e.indexOf("+")},setWeaponType:function(e){this.weaponType!==e&&(this.weaponType=e,this.weaponName=i["a"][this.weaponType][0].name)},getWeaponConfig:function(){return{name:this.weaponName,refine:this.refine,level:this.level.level,ascend:this.level.ascend,args:this.getExtraConfig()}},setWeaponConfig:function(e){var t=this;this.refine=e.refine,this.level.level=e.level,this.level.ascend=e.ascend,this.weaponName=e.name,this.$nextTick((function(){t.w.config&&t.$refs.extraConfig.setData(e.args)}))},getExtraConfig:function(){if(!this.w.config)return{};var e=this.$refs.extraConfig;return e.compact?e.compact():Object.assign({},e.$data)}},computed:{w:function(){return i["b"][this.weaponName]},levelText:function(){var e=this.level.ascend,t=this.level.level,a=this.w.star>=3?[20,40,50,60,70,80]:[20,40,50,60];return-1===a.indexOf(t)?t.toString():"".concat(t).concat(e?"+":"-")},configComponent:function(){return"function"===typeof this.w.config?this.w.config():this.w.config}}},C=h,d=(a("bc75"),Object(p["a"])(C,s,n,!1,null,"61e1591e",null));t["default"]=d.exports}}]);