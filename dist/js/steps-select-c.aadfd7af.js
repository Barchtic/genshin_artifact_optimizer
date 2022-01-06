(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["steps-select-c"],{"08c8":function(t,e,a){"use strict";a("be77")},"09d0":function(t,e,a){"use strict";a("782a")},"36c4":function(t,e,a){},"3bcc":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"config-item select-character"},[a("img",{staticClass:"image",attrs:{src:t.c.cardURL}}),a("h3",{staticClass:"config-title"},[t._v("Character Name")]),a("select-character",{attrs:{value:t.characterName},on:{input:t.handleChangeCharacter}})],1),t.needExtraConfig?a(t.c.config,{ref:"extraConfig",tag:"component"}):t._e(),a("div",{staticClass:"config-item"},[a("h3",{staticClass:"config-title"},[t._v("Skill Level (Including Constellations Bonuses)")]),a("el-input-number",{staticClass:"skill",attrs:{min:1,max:11,size:"small"},model:{value:t.skill1,callback:function(e){t.skill1=e},expression:"skill1"}}),a("el-input-number",{staticClass:"skill",attrs:{min:1,max:13,size:"small"},model:{value:t.skill2,callback:function(e){t.skill2=e},expression:"skill2"}}),a("el-input-number",{staticClass:"skill",attrs:{min:1,max:13,size:"small"},model:{value:t.skill3,callback:function(e){t.skill3=e},expression:"skill3"}})],1),a("div",{staticClass:"config-item"},[a("h3",{staticClass:"config-title"},[t._v("Constellation")]),a("el-input-number",{attrs:{min:0,max:6,size:"small"},model:{value:t.constellation,callback:function(e){t.constellation=e},expression:"constellation"}})],1),a("select-level",{attrs:{value:t.levelText,title:"Character Level"},on:{input:t.handleChangeLevel}})],1)},l=[],n=(a("99af"),a("c975"),a("b0c0"),a("d3b7"),a("25f0"),a("c592")),i=a("caeb"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-select",{attrs:{value:t.value,placeholder:"角色",size:"small"},on:{input:function(e){return t.$emit("input",e)}}},t._l(t.charactersByElement,(function(e,s){return a("el-option-group",{key:s,attrs:{label:t.element2Chs(s)}},t._l(e,(function(e){return a("el-option",{key:e.name,attrs:{label:e.chs,value:e.name}},[a("div",{staticClass:"option-item flex-row"},[a("img",{attrs:{src:e.avatar}}),a("span",{style:{color:t.getColor(e.star)}},[t._v(t._s(e.chs))])])])})),1)})),1)},r=[],o=a("2fd2"),u={name:"SelectCharacter",props:["value"],created:function(){this.charactersByElement=n["a"]},methods:{element2Chs:function(t){switch(t){case"fire":return"Pyro";case"ice":return"Cryo";case"grass":return"Dendro";case"thunder":return"Electro";case"wind":return"Anemo";case"rock":return"Geo";case"water":return"Hydro"}},getColor:function(t){return o["a"][t-1]}}},v=u,f=(a("5fc7"),a("2877")),h=Object(f["a"])(v,c,r,!1,null,"6a22cadc",null),p=h.exports,C={name:"ConfigCharacter",components:{SelectLevel:i["a"],SelectCharacter:p},inject:["notifyChange"],data:function(){return{skill1:6,skill2:6,skill3:6,constellation:0,level:{ascend:!1,level:1},characterName:"anbo"}},methods:{handleChangeCharacter:function(t){t!==this.characterName&&(this.characterName=t,this.notifyChange("character",t))},handleChangeLevel:function(t){this.level.level=parseInt(t),this.level.ascend=-1!==t.indexOf("+")},getExtraConfig:function(){if(!this.needExtraConfig)return{};var t=this.$refs.extraConfig;return t.compact?t.compact():Object.assign({},t.$data)},getCharacterConfig:function(){return{name:this.characterName,skill1:this.skill1,skill2:this.skill2,skill3:this.skill3,constellation:this.constellation,ascend:this.level.ascend,level:this.level.level,args:this.getExtraConfig()}},setCharacterConfig:function(t){var e=this;this.characterName=t.name,this.skill1=t.skill1,this.skill2=t.skill2,this.skill3=t.skill3,this.constellation=t.constellation,this.level.ascend=t.ascend,this.level.level=t.level,this.$nextTick((function(){e.needExtraConfig&&e.$refs.extraConfig.setData(t.args)}))}},computed:{levelText:function(){var t=this.level.ascend,e=this.level.level,a=[20,40,50,60,70,80];return-1===a.indexOf(e)?e.toString():"".concat(e).concat(t?"+":"-")},c:function(){return n["b"][this.characterName]},needExtraConfig:function(){return!!this.c.config}}},d=C,m=(a("09d0"),Object(f["a"])(d,s,l,!1,null,"32fe66e6",null));e["default"]=m.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var s=a("1d80"),l=a("5899"),n="["+l+"]",i=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),r=function(t){return function(e){var a=String(s(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:r(1),end:r(2),trim:r(3)}},"5fc7":function(t,e,a){"use strict";a("36c4")},"782a":function(t,e,a){},a9e3:function(t,e,a){"use strict";var s=a("83ab"),l=a("da84"),n=a("94ca"),i=a("6eeb"),c=a("5135"),r=a("c6b6"),o=a("7156"),u=a("c04e"),v=a("d039"),f=a("7c73"),h=a("241c").f,p=a("06cf").f,C=a("9bf2").f,d=a("58a8").trim,m="Number",g=l[m],_=g.prototype,k=r(f(_))==m,b=function(t){var e,a,s,l,n,i,c,r,o=u(t,!1);if("string"==typeof o&&o.length>2)if(o=d(o),e=o.charCodeAt(0),43===e||45===e){if(a=o.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:s=2,l=49;break;case 79:case 111:s=8,l=55;break;default:return+o}for(n=o.slice(2),i=n.length,c=0;c<i;c++)if(r=n.charCodeAt(c),r<48||r>l)return NaN;return parseInt(n,s)}return+o};if(n(m,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var x,N=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof N&&(k?v((function(){_.valueOf.call(a)})):r(a)!=m)?o(new g(b(e)),a,N):b(e)},E=s?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;E.length>y;y++)c(g,x=E[y])&&!c(N,x)&&C(N,x,p(g,x));N.prototype=_,_.constructor=N,i(l,m,N)}},be77:function(t,e,a){},caeb:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"config-item"},[a("h3",{staticClass:"config-title"},[t._v(t._s(t.title))]),a("div",{staticClass:"delegate",on:{click:t.handleClickLevel}},[a("div",{staticClass:"panel"},[t._l(19,(function(e){return a("span",{key:e,staticClass:"select-int",class:{active:e.toString()===t.value}},[t._v(t._s(e))])})),a("span",{staticClass:"select-int",class:{active:"20-"===t.value}},[t._v("20-")])],2),a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"20+"===t.value}},[t._v("20+")]),t._l(19,(function(e){return a("span",{key:e+20,staticClass:"select-int",class:{active:(e+20).toString()===t.value}},[t._v(t._s(e+20))])})),a("span",{staticClass:"select-int",class:{active:"40-"===t.value}},[t._v("40-")])],2),a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"40+"===t.value}},[t._v("40+")]),t._l(9,(function(e){return a("span",{key:e+40,staticClass:"select-int",class:{active:(e+40).toString()===t.value}},[t._v(t._s(e+40))])})),a("span",{staticClass:"select-int",class:{active:"50-"===t.value}},[t._v("50-")])],2),a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"50+"===t.value}},[t._v("50+")]),t._l(9,(function(e){return a("span",{key:e+50,staticClass:"select-int",class:{active:(e+50).toString()===t.value}},[t._v(t._s(e+50))])})),a("span",{staticClass:"select-int",class:{active:"60-"===t.value}},[t._v("60-")])],2),a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"60+"===t.value}},[t._v("60+")]),t._l(9,(function(e){return a("span",{key:e+60,staticClass:"select-int",class:{active:(e+60).toString()===t.value}},[t._v(t._s(e+60))])})),t.star>=3?a("span",{staticClass:"select-int",class:{active:"70-"===t.value}},[t._v("70-")]):a("span",{staticClass:"select-int",class:{active:"70"===t.value}},[t._v("70")])],2),t.star>=3?a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"70+"===t.value}},[t._v("70+")]),t._l(9,(function(e){return a("span",{key:e+70,staticClass:"select-int",class:{active:e+70==t.value}},[t._v(t._s(e+70))])})),a("span",{staticClass:"select-int",class:{active:"80-"===t.value}},[t._v("80-")])],2):t._e(),t.star>=3?a("div",{staticClass:"panel"},[a("span",{staticClass:"select-int",class:{active:"80+"===t.value}},[t._v("80+")]),t._l(10,(function(e){return a("span",{key:e+80,staticClass:"select-int",class:{active:e+80==t.value}},[t._v(t._s(e+80))])}))],2):t._e()])])},l=[],n=(a("a9e3"),{name:"SelectLevel",props:{value:{type:String},star:{type:Number,default:5},title:{type:String,default:""}},methods:{handleClickLevel:function(t){if(t.target.classList.contains("select-int")){var e=t.target.textContent;this.$emit("input",e)}}},computed:{}}),i=n,c=(a("08c8"),a("2877")),r=Object(c["a"])(i,s,l,!1,null,"65bad336",null);e["a"]=r.exports}}]);