(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["character-presets-page"],{"2f01":function(t,e,r){"use strict";r("d41d")},"4a6b":function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return d}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-dialog",{attrs:{visible:t.showExportDialog,title:t.exportPresetTitle},on:{"update:visible":function(e){t.showExportDialog=e}}},[r("el-input",{attrs:{type:"textarea",rows:10},model:{value:t.exportPresetItemStr,callback:function(e){t.exportPresetItemStr=e},expression:"exportPresetItemStr"}}),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.showExportDialog=!1}}},[t._v("Cancel")]),t.canCopy?r("el-button",{attrs:{type:"primary"},on:{click:t.handleCopy}},[t._v("Copy")]):t._e()],1)],1),r("el-dialog",{attrs:{visible:t.showImportDialog,title:"Import"},on:{"update:visible":function(e){t.showImportDialog=e}}},[r("el-input",{attrs:{type:"textarea",rows:10},model:{value:t.importPresetStr,callback:function(e){t.importPresetStr=e},expression:"importPresetStr"}}),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.showImportDialog=!1}}},[t._v("Cancel")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleImport("append")}}},[t._v("Additional Import")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleImport("overwrite")}}},[t._v("Overwrite Import")])],1)],1),r("el-breadcrumb",[r("el-breadcrumb-item",[t._v("Preset")])],1),r("el-divider"),r("div",{staticClass:"toolbar"},[r("el-button",{attrs:{icon:"el-icon-download",circle:"",size:"small",title:"Export All"},on:{click:t.handleExportAll}}),r("el-button",{attrs:{icon:"el-icon-upload2",circle:"",size:"small",title:"Import"},on:{click:function(e){t.showImportDialog=!0}}})],1),r("div",{staticClass:"body"},[t.isEmpty?r("el-alert",{attrs:{title:"Please go to the Character Calculator page to add a preset",closable:!1}}):t._l(t.all,(function(e,o){return r("preset-item",{key:o,staticClass:"item",attrs:{item:e},on:{delete:function(e){return t.deletePreset(o)},download:function(r){return t.handleDownload(o,e)}}})}))],2)],1)},a=[],i=r("5530"),s=r("b85c"),l=(r("b64b"),r("b0c0"),r("e9c4"),r("07ac"),r("5880")),n=r("0cbd"),c={name:"CharacterPresetsPage",components:{PresetItem:n["a"]},created:function(){this.canCopy=!!navigator.clipboard},data:function(){return{showExportDialog:!1,showImportDialog:!1,exportPresetTitle:"",exportPresetItemStr:"",importPresetStr:""}},methods:{checkImportType:function(t){return Object.prototype.hasOwnProperty.call(t,"data")?"multi":"single"},handleImport:function(t){var e;try{e=JSON.parse(this.importPresetStr)}catch(h){return void this.$message.error("JSON format error, please check the format or source of the imported data")}var r=[];"overwrite"===t&&(r=Object.keys(this.all));var o,a=Object(s["a"])(r);try{for(a.s();!(o=a.n()).done;){var i=o.value;this.$store.commit("presets/delete",{name:i})}}catch(f){a.e(f)}finally{a.f()}var l=this.checkImportType(e);if("multi"===l){var n,c=Object(s["a"])(e.data);try{for(c.s();!(n=c.n()).done;){var p=n.value,u=p.name;this.$store.commit("presets/add",{name:u,value:p})}}catch(f){c.e(f)}finally{c.f()}}else if("single"===l){var m=e.name,d=e;this.$store.commit("presets/add",{name:m,value:d})}this.showImportDialog=!1},deletePreset:function(t){this.$store.commit("presets/delete",{name:t})},handleDownload:function(t,e){this.exportPresetTitle='Export preset "'.concat(t,'"'),this.exportPresetItemStr=JSON.stringify(e),this.showExportDialog=!0},handleCopy:function(){var t=this;navigator.clipboard.writeText(this.exportPresetItemStr).then((function(){t.$message("Copy Successfully")})).catch((function(){t.$message.error("Copy Failed")}))},handleExportAll:function(){this.exportPresetTitle="Export All";var t=this.all,e={data:Object.values(t)};this.exportPresetItemStr=JSON.stringify(e),this.showExportDialog=!0}},computed:Object(i["a"])(Object(i["a"])({},Object(l["mapGetters"])("presets",["all"])),{},{isEmpty:function(){return 0===Object.keys(this.all).length}})},p=c,u=(r("2f01"),r("2877")),m=Object(u["a"])(p,o,a,!1,null,"640d8072",null),d=m.exports},d41d:function(t,e,r){}}]);