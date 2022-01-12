(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["steps-select-buff"],{"0690":function(e,t,n){"use strict";n.r(t);var a=n("98b6"),l=n.n(a);t["default"]={name:"fire2",chs:"Pyro Resonance - Fervent Flames",badge:l.a,genre:"resonance",getStandardConfig:function(){return{type:"atk-percentage",value:.25}}}},"0749":function(e,t,n){"use strict";n.r(t);var a=n("be28"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r={name:"CriticalDamage.buffcfg",components:{SingleValue:s["a"]},data:function(){return{value:"20"}},methods:{getValue:function(){var e;return(null!==(e=parseFloat(this.value))&&void 0!==e?e:20)/100},getStandardConfig:function(){return{type:"criticalDamage",value:this.getValue()}},getBuff:function(){return{name:"criticalDamage",args:{value:this.getValue()}}},setBuff:function(e){this.value=(100*e.value).toString()}}},c=r,o=n("2877"),f=Object(o["a"])(c,u,i,!1,null,null,null),v=f.exports;t["default"]={name:"criticalDamage",chs:"Crit Damage",badge:l.a,config:v,genre:"custom"}},"24ab":function(e,t,n){"use strict";n.r(t);var a=n("6f2b"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value（0-100）",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("div",{staticClass:"buff-config-item"},[n("h3",{staticClass:"buff-config-title"},[e._v("Element Type")]),n("select-element-multi",{model:{value:e.elementTypes,callback:function(t){e.elementTypes=t},expression:"elementTypes"}})],1)],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r=n("c77a"),c={name:"EnemyResDown.buffcfg",components:{SingleValue:s["a"],SelectElementMulti:r["a"]},data:function(){return{value:"10",elementTypes:[]}},methods:{getStandardConfig:function(){var e;return{type:"enemyResDown",value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100,elementTypes:this.elementTypes}},getBuff:function(){return{name:"enemyResDown",args:{value:this.value,elementTypes:this.elementTypes}}},setBuff:function(e){var t,n;this.value=(null!==(t=e.value)&&void 0!==t?t:"10").toString(),this.reactionTypes=null!==(n=e.reactonTypes)&&void 0!==n?n:[]}}},o=c,f=n("2877"),v=Object(f["a"])(o,u,i,!1,null,null,null),g=v.exports;t["default"]={name:"enemyResDown",chs:"Enemy Resistance Reduction",badge:l.a,config:g,genre:"custom"}},"2f47":function(e,t,n){"use strict";n.r(t);var a=n("be28"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r={name:"AtkPercentage.buffcfg",components:{SingleValue:s["a"]},data:function(){return{value:"10"}},methods:{getStandardConfig:function(){var e;return{type:"atk-percentage",value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100}},getBuff:function(){var e;return{name:"atkPercentage",args:{value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100}}},setBuff:function(e){this.value=(100*e.value).toString()}}},c=r,o=n("2877"),f=Object(o["a"])(c,u,i,!1,null,null,null),v=f.exports;t["default"]={name:"atkPercentage",chs:"ATK Percentage",badge:l.a,config:v,genre:"custom"}},"4e85":function(e,t,n){"use strict";n.r(t);var a=n("be28"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r={name:"Bonus.buffcfg",components:{SingleValue:s["a"]},data:function(){return{value:"10"}},methods:{getStandardConfig:function(){var e;return{type:"bonus",value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100}},getBuff:function(){var e;return{name:"bonus",args:{value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100}}},setBuff:function(e){this.value=(100*e.value).toString()}}},c=r,o=n("2877"),f=Object(o["a"])(c,u,i,!1,null,null,null),v=f.exports;t["default"]={name:"bonus",chs:"Damage bonus",badge:l.a,config:v,genre:"custom"}},"4f24":function(e,t,n){"use strict";n.r(t);var a=n("b151"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select-element-type",{staticStyle:{"margin-bottom":"8px"},attrs:{elements:["fire","ice","water","thunder"]},model:{value:e.element,callback:function(t){e.element=t},expression:"element"}}),n("single-value",{staticStyle:{"margin-bottom":"0"},attrs:{title:"Kazuha's Elemental Mastery"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r=n("dbd0"),c={name:"Fengyuanwanye.buffcfg",components:{SingleValue:s["a"],SelectElementType:r["a"]},data:function(){return{value:"600",element:"fire"}},methods:{getStandardConfig:function(){var e,t=null!==(e=parseFloat(this.value))&&void 0!==e?e:600,n=.04*t/100;return{type:"elementalBonus",value:n,element:this.element}},getBuff:function(){var e;return{name:"fengyuanwanye",args:{value:null!==(e=parseFloat(this.value))&&void 0!==e?e:600,element:this.element}}},setBuff:function(e){var t;this.value=(null!==(t=e.value)&&void 0!==t?t:600).toString(),this.element=e.element}}},o=c,f=n("2877"),v=Object(f["a"])(o,u,i,!1,null,null,null),g=v.exports;t["default"]={name:"fengyuanwanye",chs:"Kaedehara Kazuha - Poetics of Fuubutsu",badge:l.a,config:g,genre:"character"}},5279:function(e,t){e.exports="data:image/png;base64,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"},"6a8d":function(e,t,n){"use strict";n.r(t);var a=n("6f2b"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("div",{staticClass:"buff-config-item"},[n("h3",{staticClass:"buff-config-title"},[e._v("Element Type")]),n("select-element-multi",{model:{value:e.elementTypes,callback:function(t){e.elementTypes=t},expression:"elementTypes"}})],1)],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r=n("c77a"),c={name:"viridecent.buffcfg",components:{SingleValue:s["a"],SelectElementMulti:r["a"]},data:function(){return{value:"40",elementTypes:[],disabled:!0}},methods:{getStandardConfig:function(){var e;return{type:"enemyResDown",value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100,elementTypes:this.elementTypes}},getBuff:function(){return{name:"enemyResDown",args:{value:this.value,elementTypes:this.elementTypes}}},setBuff:function(e){var t,n;this.value=(null!==(t=e.value)&&void 0!==t?t:"10").toString(),this.elementTypes=null!==(n=e.elementTypes)&&void 0!==n?n:[]}}},o=c,f=n("2877"),v=Object(f["a"])(o,u,i,!1,null,null,null),g=v.exports;t["default"]={name:"viridecent",chs:"Viridecent Resistance Reduction",badge:l.a,config:g,genre:"artifact"}},"6c57":function(e,t,n){"use strict";n("d134")},"6f2b":function(e,t,n){e.exports=n.p+"img/shield.6fea62bb.png"},"73aa":function(e,t,n){"use strict";n.r(t);var a=n("be28"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r={name:"DefStatic.buffcfg",components:{SingleValue:s["a"]},data:function(){return{value:"100"}},methods:{getStandardConfig:function(){var e;return{type:"def-static",value:null!==(e=parseFloat(this.value))&&void 0!==e?e:100}},getBuff:function(){var e;return{name:"defStatic",args:{value:null!==(e=parseFloat(this.value))&&void 0!==e?e:100}}},setBuff:function(e){var t;this.value=(null!==(t=e.value)&&void 0!==t?t:100).toString()}}},c=r,o=n("2877"),f=Object(o["a"])(c,u,i,!1,null,null,null),v=f.exports;t["default"]={name:"defStatic",chs:"Fixed Defense",badge:l.a,config:v,genre:"custom"}},"78f6":function(e,t,n){"use strict";n.r(t);var a=n("da4f"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Equivalent Crit Rate",percentage:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r={name:"Ice2.buffcfg",components:{SingleValue:s["a"]},data:function(){return{value:"10"}},methods:{getValue:function(){var e;return(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100},getStandardConfig:function(){return{type:"critical",value:this.getValue()}},getBuff:function(){return{name:"ice2",args:{value:this.getValue()}}},setBuff:function(e){this.value=(100*e.value).toString()}}},c=r,o=n("2877"),f=Object(o["a"])(c,u,i,!1,null,null,null),v=f.exports;t["default"]={name:"ice2",chs:"Elemental Resonance - Shattering Ice",badge:l.a,genre:"resonance",config:v}},8187:function(e,t,n){e.exports=n.p+"img/geo.b41477eb.png"},"84ce":function(e,t,n){"use strict";n.r(t);var a=n("d7d9"),l=n.n(a);t["default"]={name:"abeiduo",chs:"Albedo- Homuncular Nature",badge:l.a,genre:"character",getStandardConfig:function(){return{type:"em",value:125}}}},"84d1":function(e,t,n){"use strict";n.r(t);var a=n("8187"),l=n.n(a);t["default"]={name:"rock2",chs:"Elemental Resonance - Enduring Rock",badge:l.a,genre:"resonance",getStandardConfig:function(){return{type:"bonus",value:.15}}}},9278:function(e,t,n){"use strict";n.r(t);var a=n("be28"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r={name:"AtkStatic.buffcfg",components:{SingleValue:s["a"]},data:function(){return{value:"100"}},methods:{getStandardConfig:function(){var e;return{type:"atk-static",value:null!==(e=parseFloat(this.value))&&void 0!==e?e:100}},getBuff:function(){var e;return{name:"atkStatic",args:{value:null!==(e=parseFloat(this.value))&&void 0!==e?e:100}}},setBuff:function(e){this.value=e.value.toString()}}},c=r,o=n("2877"),f=Object(o["a"])(c,u,i,!1,null,null,null),v=f.exports;t["default"]={name:"atkStatic",chs:"Fixed Attack",badge:l.a,config:v,genre:"custom"}},9597:function(e,t,n){"use strict";n.r(t);var a=n("88e0"),l=n.n(a);t["default"]={name:"shatang1",chs:"Sucrouse - Catalyst Conversion",badge:l.a,genre:"character",getStandardConfig:function(){return{type:"em",value:50}}}},"98b6":function(e,t,n){e.exports=n.p+"img/pyro.eb0446e5.png"},"9a2d":function(e,t,n){"use strict";n.r(t);var a=n("cc89"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"buff-config-item"},[n("p",{staticClass:"buff-config-title"},[e._v("Skill Level")]),n("el-input-number",{attrs:{min:1,max:13,size:"mini"},model:{value:e.skillLevel,callback:function(t){e.skillLevel=t},expression:"skillLevel"}})],1)])},i=[],s=n("c592"),r=n("fd0d"),c={name:"Mona.buffcfg",data:function(){return{skillLevel:6}},methods:{getValue:function(){return Object(r["a"])(s["b"],"mona.skill.q.bonus")[this.skillLevel-1]},getStandardConfig:function(){return{type:"bonus",value:this.getValue()}},getBuff:function(){return{name:"mona",args:{skillLevel:this.skillLevel}}},setBuff:function(e){this.skillLevel=e.skillLevel}}},o=c,f=n("2877"),v=Object(f["a"])(o,u,i,!1,null,null,null),g=v.exports;t["default"]={name:"mona",chs:"Mona - Omen",description:"Damage bonus from Mona's Omen state",badge:l.a,config:g,genre:"character"}},"9f1d":function(e,t,n){"use strict";n.r(t);var a=n("88e0"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{staticStyle:{"margin-bottom":"0"},attrs:{title:"Sucrouse Elemental Mastery"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r={name:"Shatang2.buffcfg",components:{SingleValue:s["a"]},data:function(){return{value:"600"}},methods:{getStandardConfig:function(){var e,t=null!==(e=parseFloat(this.value))&&void 0!==e?e:600,n=.2*t;return{type:"em",value:n}},getBuff:function(){var e;return{name:"shatang2",args:{value:null!==(e=parseFloat(this.value))&&void 0!==e?e:600}}},setBuff:function(e){var t;this.value=(null!==(t=e.value)&&void 0!==t?t:600).toString()}}},c=r,o=n("2877"),f=Object(o["a"])(c,u,i,!1,null,null,null),v=f.exports;t["default"]={name:"shatang2",chs:"Sucrouse - Mollis Favonious",badge:l.a,config:v,genre:"character"}},a2d1:function(e,t,n){"use strict";n.r(t);var a=n("be28"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select-element-type",{staticStyle:{"margin-bottom":"8px"},attrs:{elements:["fire","ice","water","thunder","rock","wind"]},model:{value:e.element,callback:function(t){e.element=t},expression:"element"}}),n("single-value",{staticStyle:{"margin-bottom":"0"},attrs:{title:"Value",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r=n("dbd0"),c={name:"ElementalBonus.buffcfg",components:{SingleValue:s["a"],SelectElementType:r["a"]},data:function(){return{value:"10",element:"fire"}},methods:{getStandardConfig:function(){var e;return{type:"elementalBonus",value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100,element:this.element}},getBuff:function(){var e;return{name:"elementalBonus",args:{value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100,element:this.element}}},setBuff:function(e){this.value=(100*e.value).toString(),this.element=e.element}}},o=c,f=n("2877"),v=Object(f["a"])(o,u,i,!1,null,null,null),g=v.exports;t["default"]={name:"elementalBonus",chs:"Elemental Damage Bonus",badge:l.a,config:g,genre:"custom"}},a70c:function(e,t,n){"use strict";n.r(t);var a=n("9e0c"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Base ATK",percentage:!1},model:{value:e.baseATK,callback:function(t){e.baseATK=t},expression:"baseATK"}}),n("div",{staticClass:"buff-config-item"},[n("h3",{staticClass:"buff-config-title"},[e._v("Elemental Skill Level")]),n("el-input-number",{attrs:{size:"small",min:1,max:13},model:{value:e.skillLevel,callback:function(t){e.skillLevel=t},expression:"skillLevel"}})],1)],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r=n("c592"),c=r["b"]["jiutiaoshaluo"].skill,o={name:"Jiutiaoshaluo.buffcfg",components:{SingleValue:s["a"]},data:function(){return{skillLevel:6,baseATK:"600"}},methods:{getStandardConfig:function(){var e,t=c.e.bonus[this.skillLevel-1],n=t*(null!==(e=parseFloat(this.baseATK))&&void 0!==e?e:600);return{type:"atk-static",value:n}},getBuff:function(){var e;return{name:"jiutiaoshaluo",args:{baseATK:null!==(e=parseFloat(this.baseATK))&&void 0!==e?e:600,skillLevel:this.skillLevel}}},setBuff:function(e){var t,n;this.skillLevel=null!==(t=e.skillLevel)&&void 0!==t?t:6,this.baseATK=(null!==(n=e.baseATK)&&void 0!==n?n:600).toString()}}},f=o,v=n("2877"),g=Object(v["a"])(f,u,i,!1,null,null,null),d=g.exports;t["default"]={name:"jiutiaoshaluo",chs:"Kojou Sara-Tengu Stormcall",description:"Attack bonus provided by the E and Q skills of Kojou Sara",badge:l.a,config:d,genre:"character"}},aa7e:function(e,t,n){"use strict";n.r(t);var a=n("6f2b"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value（0-100）",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r={name:"EnemyDefDown.buffcfg",components:{SingleValue:s["a"]},data:function(){return{value:"10"}},methods:{getValue:function(){var e;return(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100},getStandardConfig:function(){return{type:"enemyDefDown",value:this.getValue()}},getBuff:function(){return{name:"enemyDefDown",args:{value:this.getValue()}}},setBuff:function(e){var t;this.value=(100*(null!==(t=e.value)&&void 0!==t?t:0)).toString()}}},c=r,o=n("2877"),f=Object(o["a"])(c,u,i,!1,null,null,null),v=f.exports;t["default"]={name:"enemyDefDown",chs:"Enemy Defense Reduction",badge:l.a,config:v,genre:"custom"}},b252:function(e,t,n){"use strict";n.r(t);var a=n("a557"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Bennett's Base Attack: "},model:{value:e.baseAtk,callback:function(t){e.baseAtk=t},expression:"baseAtk"}}),n("div",{staticClass:"buff-config-item"},[n("p",{staticClass:"buff-config-title"},[e._v("Constellation 1 Active")]),n("el-switch",{attrs:{"active-text":"Yes","inactive-text":"No"},model:{value:e.isConste1,callback:function(t){e.isConste1=t},expression:"isConste1"}})],1),n("div",{staticClass:"buff-config-item"},[n("p",{staticClass:"buff-config-title"},[e._v("Skill Level")]),n("el-input-number",{attrs:{min:1,max:13,size:"mini"},model:{value:e.skillLevel,callback:function(t){e.skillLevel=t},expression:"skillLevel"}})],1)],1)},i=[],s=(n("d3b7"),n("25f0"),n("c592")),r=n("fd0d"),c=n("c416"),o={name:"Bannite.buffcfg",components:{SingleValue:c["a"]},data:function(){return{skillLevel:6,baseAtk:"900",isConste1:!0}},methods:{getStandardConfig:function(){var e,t=null!==(e=parseFloat(this.baseAtk))&&void 0!==e?e:900,n=Object(r["a"])(s["b"],"bannite.skill.q.ratio")[this.skillLevel-1];return this.isConste1&&(n+=.2),{type:"atk-static",value:t*n}},getBuff:function(){var e;return{name:"bannite",args:{skillLevel:this.skillLevel,baseAtk:null!==(e=parseFloat(this.baseAtk))&&void 0!==e?e:900,isConste1:this.isConste1}}},setBuff:function(e){this.skillLevel=e.skillLevel,this.baseAtk=e.baseAtk.toString(),this.isConste1=e.isConste1}}},f=o,v=n("2877"),g=Object(v["a"])(f,u,i,!1,null,null,null),d=g.exports;t["default"]={name:"bannite",chs:"Bennett - Fantastic Voyage",description:"Bennett's Ultimate",badge:l.a,config:d,genre:"character"}},bb57:function(e,t,n){"use strict";n.r(t);var a=n("be28"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r={name:"DefPercentage.buffcfg",components:{SingleValue:s["a"]},data:function(){return{value:"10"}},methods:{getStandardConfig:function(){var e;return{type:"def-percentage",value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100}},getBuff:function(){var e;return{name:"defPercentage",args:{value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100}}},setBuff:function(e){var t;this.value=(100*(null!==(t=e.value)&&void 0!==t?t:.1)).toString()}}},c=r,o=n("2877"),f=Object(o["a"])(c,u,i,!1,null,null,null),v=f.exports;t["default"]={name:"defPercentage",chs:"Defense Percentage",badge:l.a,config:v,genre:"custom"}},bd87:function(e,t,n){"use strict";n.r(t);var a=n("5279"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value（0-1）"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("div",{staticClass:"buff-config-item"},[n("h3",{staticClass:"buff-config-title"},[e._v("Reaction Type")]),n("el-checkbox-group",{attrs:{size:"small"},model:{value:e.reactionTypes,callback:function(t){e.reactionTypes=t},expression:"reactionTypes"}},[n("el-checkbox-button",{attrs:{label:"melt"}},[e._v("Melt")]),n("el-checkbox-button",{attrs:{label:"vaporize"}},[e._v("Vaporize")]),n("el-checkbox-button",{attrs:{label:"overload"}},[e._v("Overload")]),n("el-checkbox-button",{attrs:{label:"superconduct"}},[e._v("Super Conduct")]),n("el-checkbox-button",{attrs:{label:"electroCharged"}},[e._v("Electro Charge")]),n("el-checkbox-button",{attrs:{label:"swirl"}},[e._v("Swirl")])],1)],1)],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r={name:"ReactionEnhance.buffcfg",components:{SingleValue:s["a"]},data:function(){return{value:"0.2",reactionTypes:[]}},methods:{getStandardConfig:function(){var e;return{type:"reactionEnhance",value:null!==(e=parseFloat(this.value))&&void 0!==e?e:.2,reactionTypes:this.reactionTypes}},getBuff:function(){return{name:"reactionEnhance",args:{value:this.value,reactonTypes:this.reactionTypes}}},setBuff:function(e){var t,n;this.value=(null!==(t=e.value)&&void 0!==t?t:"0.2").toString(),this.reactionTypes=null!==(n=e.reactonTypes)&&void 0!==n?n:[]}}},c=r,o=n("2877"),f=Object(o["a"])(c,u,i,!1,null,null,null),v=f.exports;t["default"]={name:"reactionEnhance",chs:"Reaction bonus",badge:l.a,config:v,genre:"custom"}},bdfb:function(e,t,n){"use strict";n.r(t);var a=n("6f2b"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value（0-100）",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("div",{staticClass:"buff-config-item"},[n("h3",{staticClass:"buff-config-title"},[e._v("Element Type")]),n("select-element-multi",{model:{value:e.elementTypes,callback:function(t){e.elementTypes=t},expression:"elementTypes"}})],1)],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r=n("c77a"),c={name:"EnemyResDown.buffcfg",components:{SingleValue:s["a"],SelectElementMulti:r["a"]},data:function(){return{value:"10",elementTypes:[]}},methods:{getStandardConfig:function(){var e;return{type:"enemyResDown",value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100,elementTypes:this.elementTypes}},getBuff:function(){return{name:"enemyResDown",args:{value:this.value,elementTypes:this.elementTypes}}},setBuff:function(e){var t,n;this.value=(null!==(t=e.value)&&void 0!==t?t:"10").toString(),this.elementTypes=null!==(n=e.elementTypes)&&void 0!==n?n:[]}}},o=c,f=n("2877"),v=Object(f["a"])(o,u,i,!1,null,null,null),g=v.exports;t["default"]={name:"enemyResDown",chs:"Resistance Reduction",badge:l.a,config:g,genre:"custom"}},c416:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"buff-config-item"},[n("p",{staticClass:"buff-config-title"},[e._v(e._s(e.title))]),n("el-input",{attrs:{value:e.value,size:"mini"},on:{input:function(t){return e.$emit("input",t)}}},[e.percentage?n("span",{attrs:{slot:"append"},slot:"append"},[e._v("%")]):e._e()])],1)},l=[],u={name:"SingleValue",props:["title","value","percentage"]},i=u,s=n("2877"),r=Object(s["a"])(i,a,l,!1,null,null,null);t["a"]=r.exports},c5ff:function(e,t,n){"use strict";n.r(t);var a=n("be28"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select-element-type",{staticStyle:{"margin-bottom":"8px"},attrs:{elements:["fire","ice","water","thunder","rock","wind"]},model:{value:e.element,callback:function(t){e.element=t},expression:"element"}}),n("single-value",{staticStyle:{"margin-bottom":"0"},attrs:{title:"Value",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r=n("dbd0"),c={name:"ElementalBonus.buffcfg",components:{SingleValue:s["a"],SelectElementType:r["a"]},data:function(){return{value:"10",element:"fire"}},methods:{getStandardConfig:function(){var e;return{type:"elementalBonus",value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100,element:this.element}},getBuff:function(){var e;return{name:"elementalBonus",args:{value:(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100,element:this.element}}},setBuff:function(e){this.value=(100*e.value).toString(),this.element=e.element}}},o=c,f=n("2877"),v=Object(f["a"])(o,u,i,!1,null,null,null),g=v.exports;t["default"]={name:"elementalBonus",chs:"Elemental Damage Bonus",badge:l.a,config:g,genre:"custom"}},c77a:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-checkbox-group",{attrs:{value:e.value,size:"small"},on:{input:function(t){return e.$emit("input",t)}}},[e.eleMap.has("fire")?n("el-checkbox-button",{attrs:{label:"fire"}},[e._v("Pyro")]):e._e(),e.eleMap.has("thunder")?n("el-checkbox-button",{attrs:{label:"thunder"}},[e._v("Electro")]):e._e(),e.eleMap.has("water")?n("el-checkbox-button",{attrs:{label:"water"}},[e._v("Hydro")]):e._e(),e.eleMap.has("wind")?n("el-checkbox-button",{attrs:{label:"wind"}},[e._v("Anemo")]):e._e(),e.eleMap.has("rock")?n("el-checkbox-button",{attrs:{label:"rock"}},[e._v("Geo")]):e._e(),e.eleMap.has("ice")?n("el-checkbox-button",{attrs:{label:"ice"}},[e._v("Cryo")]):e._e(),e.eleMap.has("physical")?n("el-checkbox-button",{attrs:{label:"physical"}},[e._v("Physical")]):e._e()],1)},l=[],u=n("b85c"),i=(n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),{name:"SelectElementMulti",props:{value:{},elements:{default:function(){return["fire","thunder","water","wind","rock","ice","physical"]}},multi:{default:!1}},computed:{eleMap:function(){var e,t=new Set,n=Object(u["a"])(this.elements);try{for(n.s();!(e=n.n()).done;){var a=e.value;t.add(a)}}catch(l){n.e(l)}finally{n.f()}return t}}}),s=i,r=n("2877"),c=Object(r["a"])(s,a,l,!1,null,null,null);t["a"]=c.exports},c939:function(e,t,n){"use strict";n.r(t);var a=n("be28"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r={name:"EM.buffcfg",components:{SingleValue:s["a"]},data:function(){return{value:"80"}},methods:{getValue:function(){var e;return null!==(e=parseFloat(this.value))&&void 0!==e?e:80},getStandardConfig:function(){return{type:"em",value:this.getValue()}},getBuff:function(){return{name:"em",args:{value:this.getValue()}}},setBuff:function(e){this.value=e.value.toString()}}},c=r,o=n("2877"),f=Object(o["a"])(c,u,i,!1,null,null,null),v=f.exports;t["default"]={name:"em",chs:"Elemental Mastery",badge:l.a,config:v,genre:"custom"}},d0b0:function(e,t,n){var a={"./abeiduo/abeiduo.buff.js":"84ce","./bannite/Bannnite.buff.js":"b252","./common/atk_percentage/AtkPercentage.buff.js":"2f47","./common/atk_static/AtkStatic.buff.js":"9278","./common/bonus/Bonus.buff.js":"4e85","./common/critical/Critical.buff.js":"dc14","./common/critical_damage/CriticalDamage.buff.js":"0749","./common/def_down/enemyDefDown.buff.js":"aa7e","./common/def_percentage/DefPercentage.buff.js":"bb57","./common/def_static/DefStatic.buff.js":"73aa","./common/elementalBonus/elementalBonus.buff.js":"c5ff","./common/elemental_bonus/elementalBonus.buff.js":"a2d1","./common/em/EM.buff.js":"c939","./common/enemy_ref_down/enemyResDown.buff.js":"24ab","./common/enemy_res_down/enemyResDown.buff.js":"bdfb","./common/reactionEnhance/reactionEnhance.buff.js":"bd87","./common/reaction_enhance/reactionEnhance.buff.js":"df0e","./electro/leidianjiangjun/leidianjiangjun.buff.js":"d6ff","./element/fire2/Fire2.buff.js":"0690","./element/ice2/Ice2.buff.js":"78f6","./element/rock2/Rock2.buff.js":"84d1","./fengyuanwanye/fengyuanwanye.buff.js":"4f24","./jiutiaoshaluo/jiutiaoshaluo.buff.js":"a70c","./mona/Mona.buff.js":"9a2d","./shatang/shatang.buff.js":"9597","./shatang/shatang2.buff.js":"9f1d","./viridecent/viridecent.buff.js":"6a8d","./weapon/taolong/Taolong.buff.js":"d447"};function l(e){var t=u(e);return n(t)}function u(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=u,e.exports=l,l.id="d0b0"},d134:function(e,t,n){},d447:function(e,t,n){"use strict";n.r(t);var a=n("1c99"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"buff-config-item"},[n("p",{staticClass:"buff-config-title"},[e._v("Refinement level")]),n("el-input-number",{attrs:{min:1,max:5,size:"mini"},model:{value:e.refine,callback:function(t){e.refine=t},expression:"refine"}})],1)])},u=[],i={name:"Taolong.buffcfg",data:function(){return{refine:1}},methods:{getValue:function(){return.06*this.refine+.18},getStandardConfig:function(){return{type:"atk-percentage",value:this.getValue()}},getBuff:function(){return{name:"taolong",args:{refine:this.refine}}},setBuff:function(e){this.refine=e.refine}}},s=i,r=n("2877"),c=Object(r["a"])(s,l,u,!1,null,null,null),o=c.exports;t["default"]={name:"taolong",chs:"Trilling Tales Of Dragon Slayers",badge:a["b"]["taolongyingjietan"].url,config:o,genre:"weapon"}},d6ff:function(e,t,n){"use strict";n.r(t);var a=n("c4ff"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"buff-config-item"},[n("h3",{staticClass:"buff-config-title"},[e._v("Elemental Skill Level")]),n("el-input-number",{attrs:{min:1,max:13,size:"small"},model:{value:e.skill2Level,callback:function(t){e.skill2Level=t},expression:"skill2Level"}})],1),n("div",{staticClass:"buff-config-item"},[n("h3",{staticClass:"buff-config-title"},[e._v("Maximmun Energy Recharge BUFF")]),n("el-input-number",{attrs:{min:40,max:90,size:"small"},model:{value:e.energy,callback:function(t){e.energy=t},expression:"energy"}})],1)])},i=[],s=n("c592"),r=s["b"]["leidianjiangjun"].skill,c={name:"Fengyuanwanye.buffcfg",components:{},data:function(){return{skill2Level:6,energy:80}},methods:{getStandardConfig:function(){var e=r.e.bonus[this.skill2Level-1],t=e*this.energy;return{type:"qBonus",value:t}},getBuff:function(){return{name:"leidianjiangjun",args:{skill2Level:this.skill2Level,energy:this.energy}}},setBuff:function(e){var t,n;this.skill2Level=null!==(t=e.skill2Level)&&void 0!==t?t:6,this.energy=null!==(n=e.energy)&&void 0!==n?n:80}}},o=c,f=n("2877"),v=Object(f["a"])(o,u,i,!1,null,null,null),g=v.exports;t["default"]={name:"leidianjiangjun",chs:"Raiden Shogun - Eye of Stormy Judgment",badge:l.a,config:g,genre:"character"}},da4f:function(e,t,n){e.exports=n.p+"img/cryo.208eaf1c.png"},dc14:function(e,t,n){"use strict";n.r(t);var a=n("be28"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value",percentage:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r={name:"Critical.buffcfg",components:{SingleValue:s["a"]},data:function(){return{value:"10"}},methods:{getValue:function(){var e;return(null!==(e=parseFloat(this.value))&&void 0!==e?e:10)/100},getStandardConfig:function(){return{type:"critical",value:this.getValue()}},getBuff:function(){return{name:"critical",args:{value:this.getValue()}}},setBuff:function(e){this.value=(100*e.value).toString()}}},c=r,o=n("2877"),f=Object(o["a"])(c,u,i,!1,null,null,null),v=f.exports;t["default"]={name:"critical",chs:"Crit Rate",badge:l.a,config:v,genre:"custom"}},df0e:function(e,t,n){"use strict";n.r(t);var a=n("5279"),l=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("single-value",{attrs:{title:"Value（0-1）"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("div",{staticClass:"buff-config-item"},[n("h3",{staticClass:"buff-config-title"},[e._v("Reaction Type")]),n("el-checkbox-group",{attrs:{size:"small"},model:{value:e.reactionTypes,callback:function(t){e.reactionTypes=t},expression:"reactionTypes"}},[n("el-checkbox-button",{attrs:{label:"melt"}},[e._v("Melt")]),n("el-checkbox-button",{attrs:{label:"vaporize"}},[e._v("Vaporize")]),n("el-checkbox-button",{attrs:{label:"overload"}},[e._v("Overload")]),n("el-checkbox-button",{attrs:{label:"superconduct"}},[e._v("Super Conduct")]),n("el-checkbox-button",{attrs:{label:"electroCharged"}},[e._v("Electro Charge")]),n("el-checkbox-button",{attrs:{label:"swirl"}},[e._v("Swirl")])],1)],1)],1)},i=[],s=(n("d3b7"),n("25f0"),n("c416")),r={name:"ReactionEnhance.buffcfg",components:{SingleValue:s["a"]},data:function(){return{value:"0.2",reactionTypes:[]}},methods:{getStandardConfig:function(){var e;return{type:"reactionEnhance",value:null!==(e=parseFloat(this.value))&&void 0!==e?e:.2,reactionTypes:this.reactionTypes}},getBuff:function(){return{name:"reactionEnhance",args:{value:this.value,reactonTypes:this.reactionTypes}}},setBuff:function(e){var t,n;this.value=(null!==(t=e.value)&&void 0!==t?t:"0.2").toString(),this.reactionTypes=null!==(n=e.reactonTypes)&&void 0!==n?n:[]}}},c=r,o=n("2877"),f=Object(o["a"])(c,u,i,!1,null,null,null),v=f.exports;t["default"]={name:"reactionEnhance",chs:"Reaction bonus",badge:l.a,config:v,genre:"custom"}},e45d:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dialog",{attrs:{title:"Select Buff",visible:e.selectBuffDlgVisible},on:{"update:visible":function(t){e.selectBuffDlgVisible=t}}},[n("div",{staticStyle:{padding:"16px"}},[n("el-tabs",e._l(e.genres,(function(t,a){return n("el-tab-pane",{key:a,attrs:{label:e.genre2chs[a]}},e._l(t,(function(t){return n("div",{key:t.name,staticClass:"select-buff-item flex-row",on:{click:function(n){return e.handleSelectBuff(t.name)}}},[n("img",{attrs:{src:t.badge}}),n("span",[e._v(e._s(t.chs))])])})),0)})),1)],1)]),n("el-button",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"primary",size:"small"},on:{click:e.handleAddBuff}},[n("i",{staticClass:"el-icon-plus"}),e._v(" Add Buff ")]),e._l(e.configuredBuffs,(function(t){return n("div",{key:t.id,staticClass:"config-item buff-item",class:{inactive:t.omit}},[n("div",{staticClass:"top"},[n("h3",{staticClass:"config-title"},[e._v(e._s(t.chs))]),n("div",{staticClass:"buttons"},[n("el-button",{staticStyle:{padding:"0"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.removeBuff(t.id)}}}),n("el-button",{staticStyle:{padding:"0"},attrs:{type:"text",icon:t.omit?"el-icon-unlock":"el-icon-lock"},on:{click:function(n){return e.toggleBuff(t.id)}}})],1)]),t.config?n(t.config,{ref:"buffItem",refInFor:!0,tag:"component",staticStyle:{"margin-top":"14px"}}):e._e()],1)}))],2)},l=[],u=n("b85c"),i=(n("07ac"),n("b0c0"),n("d3b7"),n("ddb0"),{});function s(e){var t,n=Object(u["a"])(e.keys());try{for(n.s();!(t=n.n()).done;){var a=t.value,l=e(a).default;i[l.name]=l}}catch(s){n.e(s)}finally{n.f()}}s(n("d0b0"));for(var r=i,c={},o=0,f=Object.values(r);o<f.length;o++){var v=f[o];c[v.genre]||(c[v.genre]=[]),c[v.genre].push(v)}var g={custom:"Custom Buffs",character:"Character Triggered Buffs",resonance:"Elemental Resonances",weapon:"Weapon Triggered Buffs",artifact:"Artifacts"},d=0,m={name:"ConfigBuff",created:function(){this.genres=c,this.genre2chs=g},data:function(){return{configuredBuffs:[],selectBuffDlgVisible:!1}},methods:{toggleBuff:function(e){for(var t=0;t<this.configuredBuffs.length;t++){var n=this.configuredBuffs[t];n.id===e&&(n.omit=!n.omit)}},handleAddBuff:function(){this.selectBuffDlgVisible=!0},handleSelectBuff:function(e){var t={config:r[e].config,name:e,id:d++,chs:r[e].chs,omit:!1};this.configuredBuffs.push(t),this.selectBuffDlgVisible=!1},removeBuff:function(e){for(var t=0;t<this.configuredBuffs.length;t++)if(this.configuredBuffs[t].id===e){this.$delete(this.configuredBuffs,t);break}},getStandardBuffs:function(){for(var e=[],t=0,n=0;n<this.configuredBuffs.length;n++){var a=this.configuredBuffs[n];if(a.config){var l=this.$refs.buffItem[t++];a.omit||e.push(l.getStandardConfig())}else a.omit||e.push(r[a.name].getStandardConfig())}return e},getBuffs:function(){for(var e=[],t=0,n=0;n<this.configuredBuffs.length;n++){var a=this.configuredBuffs[n];if(a.config){var l=this.$refs.buffItem[t++],u=l.getBuff();u.omit=a.omit,e.push(u)}else{var i={name:a.name,omit:a.omit};e.push(i)}}return e},setBuffs:function(e){var t=this;this.configuredBuffs=[];var n,a=0,l=Object(u["a"])(e);try{var i=function(){var e=n.value,l=r[e.name],u={name:e.name,id:d++,chs:l.chs,omit:e.omit};l.config&&(u.config=l.config,t.$nextTick((function(){t.$refs.buffItem[a++].setBuff(e.args)}))),t.configuredBuffs.push(u)};for(l.s();!(n=l.n()).done;)i()}catch(s){l.e(s)}finally{l.f()}}}},b=m,p=(n("6c57"),n("2877")),h=Object(p["a"])(b,a,l,!1,null,"62ba8bbe",null);t["default"]=h.exports},fd0d:function(e,t,n){"use strict";var a=n("b85c");n("ac1f"),n("1276");t["a"]=function(e,t){var n,l=t.split("."),u=e,i=Object(a["a"])(l);try{for(i.s();!(n=i.n()).done;){var s=n.value;u=u[s]}}catch(r){i.e(r)}finally{i.f()}return u}}}]);