(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["steps-select-c"],{"09d0":function(t,e,s){"use strict";s("782a")},"16f1":function(t,e,s){"use strict";s("c60f")},"3bcc":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"config-item select-character"},[s("img",{staticClass:"image",attrs:{src:t.c.cardURL}}),s("h3",{staticClass:"config-title"},[t._v("Character Name")]),s("select-character",{attrs:{value:t.characterName},on:{input:t.handleChangeCharacter}})],1),t.needExtraConfig?s(t.c.config,{ref:"extraConfig",tag:"component"}):t._e(),s("div",{staticClass:"config-item"},[s("h3",{staticClass:"config-title"},[t._v("Skill Level (Including Constellations Bonuses)")]),s("el-input-number",{staticClass:"skill",attrs:{min:1,max:11,size:"small"},model:{value:t.skill1,callback:function(e){t.skill1=e},expression:"skill1"}}),s("el-input-number",{staticClass:"skill",attrs:{min:1,max:13,size:"small"},model:{value:t.skill2,callback:function(e){t.skill2=e},expression:"skill2"}}),s("el-input-number",{staticClass:"skill",attrs:{min:1,max:13,size:"small"},model:{value:t.skill3,callback:function(e){t.skill3=e},expression:"skill3"}})],1),s("div",{staticClass:"config-item"},[s("h3",{staticClass:"config-title"},[t._v("Constellation")]),s("el-input-number",{attrs:{min:0,max:6,size:"small"},model:{value:t.constellation,callback:function(e){t.constellation=e},expression:"constellation"}})],1),s("select-level",{attrs:{value:t.levelText,title:"Character Level"},on:{input:t.handleChangeLevel}})],1)},l=[],n=(s("b0c0"),s("d3b7"),s("25f0"),s("99af"),s("c592")),i=s("caeb"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-select",{attrs:{value:t.value,placeholder:"Character",size:"small"},on:{input:function(e){return t.$emit("input",e)}}},t._l(t.charactersByElement,(function(e,a){return s("el-option-group",{key:a,attrs:{label:t.element2Chs(a)}},t._l(e,(function(e){return s("el-option",{key:e.name,attrs:{label:e.chs,value:e.name}},[s("div",{staticClass:"option-item flex-row"},[s("img",{attrs:{src:e.avatar}}),s("span",{style:{color:t.getColor(e.star)}},[t._v(t._s(e.chs))])])])})),1)})),1)},r=[],o=s("2fd2"),u={name:"SelectCharacter",props:["value"],created:function(){this.charactersByElement=n["a"]},methods:{element2Chs:function(t){switch(t){case"fire":return"Pyro";case"ice":return"Cryo";case"grass":return"Dendro";case"thunder":return"Electro";case"wind":return"Anemo";case"rock":return"Geo";case"water":return"Hydro"}},getColor:function(t){return o["a"][t-1]}}},v=u,f=(s("7e56"),s("2877")),p=Object(f["a"])(v,c,r,!1,null,"ba15dc72",null),h=p.exports,C={name:"ConfigCharacter",components:{SelectLevel:i["a"],SelectCharacter:h},inject:["notifyChange"],data:function(){return{skill1:6,skill2:6,skill3:6,constellation:0,level:{ascend:!1,level:1},characterName:"anbo"}},methods:{handleChangeCharacter:function(t){t!==this.characterName&&(this.characterName=t,this.notifyChange("character",t))},handleChangeLevel:function(t){this.level.level=parseInt(t),this.level.ascend=-1!==t.indexOf("+")},getExtraConfig:function(){if(!this.needExtraConfig)return{};var t=this.$refs.extraConfig;return t.compact?t.compact():Object.assign({},t.$data)},getCharacterConfig:function(){return{name:this.characterName,skill1:this.skill1,skill2:this.skill2,skill3:this.skill3,constellation:this.constellation,ascend:this.level.ascend,level:this.level.level,args:this.getExtraConfig()}},setCharacterConfig:function(t){var e=this;this.characterName=t.name,this.skill1=t.skill1,this.skill2=t.skill2,this.skill3=t.skill3,this.constellation=t.constellation,this.level.ascend=t.ascend,this.level.level=t.level,this.$nextTick((function(){e.needExtraConfig&&e.$refs.extraConfig.setData(t.args)}))}},computed:{levelText:function(){var t=this.level.ascend,e=this.level.level,s=[20,40,50,60,70,80];return-1===s.indexOf(e)?e.toString():"".concat(e).concat(t?"+":"-")},c:function(){return n["b"][this.characterName]},needExtraConfig:function(){return!!this.c.config}}},d=C,m=(s("09d0"),Object(f["a"])(d,a,l,!1,null,"32fe66e6",null));e["default"]=m.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("e330"),l=s("1d80"),n=s("577e"),i=s("5899"),c=a("".replace),r="["+i+"]",o=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),v=function(t){return function(e){var s=n(l(e));return 1&t&&(s=c(s,o,"")),2&t&&(s=c(s,u,"")),s}};t.exports={start:v(1),end:v(2),trim:v(3)}},"782a":function(t,e,s){},"7e56":function(t,e,s){"use strict";s("8c04")},"8c04":function(t,e,s){},a9e3:function(t,e,s){"use strict";var a=s("83ab"),l=s("da84"),n=s("e330"),i=s("94ca"),c=s("6eeb"),r=s("1a2d"),o=s("7156"),u=s("3a9b"),v=s("d9b5"),f=s("c04e"),p=s("d039"),h=s("241c").f,C=s("06cf").f,d=s("9bf2").f,m=s("408a"),_=s("58a8").trim,g="Number",k=l[g],b=k.prototype,x=l.TypeError,y=n("".slice),N=n("".charCodeAt),E=function(t){var e=f(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,s,a,l,n,i,c,r,o=f(t,"number");if(v(o))throw x("Cannot convert a Symbol value to a number");if("string"==typeof o&&o.length>2)if(o=_(o),e=N(o,0),43===e||45===e){if(s=N(o,2),88===s||120===s)return NaN}else if(48===e){switch(N(o,1)){case 66:case 98:a=2,l=49;break;case 79:case 111:a=8,l=55;break;default:return+o}for(n=y(o,2),i=n.length,c=0;c<i;c++)if(r=N(n,c),r<48||r>l)return NaN;return parseInt(n,a)}return+o};if(i(g,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var I,L=function(t){var e=arguments.length<1?0:k(E(t)),s=this;return u(b,s)&&p((function(){m(s)}))?o(Object(e),s,L):e},w=a?h(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;w.length>T;T++)r(k,I=w[T])&&!r(L,I)&&d(L,I,C(k,I));L.prototype=b,b.constructor=L,c(l,g,L)}},c60f:function(t,e,s){},caeb:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"config-item"},[s("h3",{staticClass:"config-title"},[t._v(t._s(t.title))]),s("div",{staticClass:"delegate",on:{click:t.handleClickLevel}},[s("div",{staticClass:"panel"},[t._l(10,(function(e){return s("span",{key:e,staticClass:"select-int",class:{active:e.toString()===t.value}},[t._v(t._s(e))])})),s("span",{staticClass:"select-int",class:{active:"10-"===t.value}},[t._v("10-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"10+"===t.value}},[t._v("10+")]),t._l(9,(function(e){return s("span",{key:e+10,staticClass:"select-int",class:{active:(e+10).toString()===t.value}},[t._v(t._s(e+10))])})),s("span",{staticClass:"select-int",class:{active:"20-"===t.value}},[t._v("20-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"20+"===t.value}},[t._v("20+")]),t._l(9,(function(e){return s("span",{key:e+20,staticClass:"select-int",class:{active:(e+20).toString()===t.value}},[t._v(t._s(e+20))])})),s("span",{staticClass:"select-int",class:{active:"30-"===t.value}},[t._v("30-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"30+"===t.value}},[t._v("30+")]),t._l(9,(function(e){return s("span",{key:e+30,staticClass:"select-int",class:{active:(e+30).toString()===t.value}},[t._v(t._s(e+30))])})),s("span",{staticClass:"select-int",class:{active:"40-"===t.value}},[t._v("40-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"40+"===t.value}},[t._v("40+")]),t._l(9,(function(e){return s("span",{key:e+40,staticClass:"select-int",class:{active:(e+40).toString()===t.value}},[t._v(t._s(e+40))])})),s("span",{staticClass:"select-int",class:{active:"50-"===t.value}},[t._v("50-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"50+"===t.value}},[t._v("50+")]),t._l(9,(function(e){return s("span",{key:e+50,staticClass:"select-int",class:{active:(e+50).toString()===t.value}},[t._v(t._s(e+50))])})),s("span",{staticClass:"select-int",class:{active:"60-"===t.value}},[t._v("60-")])],2),s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"60+"===t.value}},[t._v("60+")]),t._l(9,(function(e){return s("span",{key:e+60,staticClass:"select-int",class:{active:(e+60).toString()===t.value}},[t._v(t._s(e+60))])})),s("span",{staticClass:"select-int",class:{active:"70-"===t.value}},[t._v("70-")])],2),t.star>=3?s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"70+"===t.value}},[t._v("70+")]),t._l(9,(function(e){return s("span",{key:e+70,staticClass:"select-int",class:{active:e+70==t.value}},[t._v(t._s(e+70))])})),s("span",{staticClass:"select-int",class:{active:"80-"===t.value}},[t._v("80-")])],2):t._e(),t.star>=3?s("div",{staticClass:"panel"},[s("span",{staticClass:"select-int",class:{active:"80+"===t.value}},[t._v("80+")]),t._l(10,(function(e){return s("span",{key:e+80,staticClass:"select-int",class:{active:e+80==t.value}},[t._v(t._s(e+80))])}))],2):t._e()])])},l=[],n=(s("a9e3"),{name:"SelectLevel",props:{value:{type:String},star:{type:Number,default:5},title:{type:String,default:""}},methods:{handleClickLevel:function(t){if(t.target.classList.contains("select-int")){var e=t.target.textContent;this.$emit("input",e)}}},computed:{}}),i=n,c=(s("16f1"),s("2877")),r=Object(c["a"])(i,a,l,!1,null,"453e05ee",null);e["a"]=r.exports}}]);