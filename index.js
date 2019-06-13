(function () {var c={extends:"k-pages-field",props:{start:Boolean}};if(typeof c==="function"){c=c.options}Object.assign(c,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("k-field",_vm._b({staticClass:"k-pages-field k-quickpages-field"},"k-field",_vm.$props,false),[_vm.more?_c("k-button",{attrs:{"slot":"options","icon":"add"},on:{"click":_vm.open},slot:"options"},[_vm._v(" "+_vm._s(_vm.$t("select"))+" ")]):_vm._e(),_vm._v(" "),_vm.selected.length?[_c("k-draggable",{attrs:{"element":_vm.elements.list,"handle":true,"list":_vm.selected,"data-size":_vm.size},on:{"end":_vm.onInput}},_vm._l(_vm.selected,function(page,index){return _c(_vm.elements.item,{key:page.id,tag:"component",attrs:{"sortable":_vm.selected.length>1,"text":page.text,"info":page.info,"link":page.link,"icon":page.icon,"image":page.image}},[_c("k-button",{attrs:{"slot":"options","icon":"remove"},on:{"click":function($event){return _vm.remove(index)}},slot:"options"})],1)}),1)]:_c("k-empty",{attrs:{"layout":_vm.layout,"icon":"page"},on:{"click":_vm.open}},[_vm._v(" "+_vm._s(_vm.empty||_vm.$t("field.pages.empty"))+" ")]),_vm._v(" "),_c("k-quickpages-dialog",{ref:"selector",attrs:{"start":_vm.start},on:{"submit":_vm.select}})],2)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var a;function b($,a,e){return a in $?Object.defineProperty($,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):$[a]=e,$}var f=(b(a={"\u1E9A":"a","\xC1":"a","\xE1":"a","\xC0":"a","\xE0":"a","\u0102":"a","\u0103":"a","\u1EAE":"a","\u1EAF":"a","\u1EB0":"a","\u1EB1":"a","\u1EB4":"a","\u1EB5":"a","\u1EB2":"a","\u1EB3":"a","\xC2":"a","\xE2":"a","\u1EA4":"a","\u1EA5":"a","\u1EA6":"a","\u1EA7":"a","\u1EAA":"a","\u1EAB":"a","\u1EA8":"a","\u1EA9":"a","\u01CD":"a","\u01CE":"a","\xC5":"a","\xE5":"a","\u01FA":"a","\u01FB":"a","\xC4":"a","\xE4":"a","\u01DE":"a","\u01DF":"a","\xC3":"a","\xE3":"a","\u0226":"a","\u0227":"a","\u01E0":"a","\u01E1":"a","\u0104":"a","\u0105":"a","\u0100":"a","\u0101":"a","\u1EA2":"a","\u1EA3":"a","\u0200":"a","\u0201":"a","\u0202":"a","\u0203":"a","\u1EA0":"a","\u1EA1":"a","\u1EB6":"a","\u1EB7":"a","\u1EAC":"a","\u1EAD":"a","\u1E00":"a","\u1E01":"a","\u023A":"a","\u2C65":"a","\u01FC":"a","\u01FD":"a","\u01E2":"a","\u01E3":"a","\u1E02":"b","\u1E03":"b","\u1E04":"b","\u1E05":"b","\u1E06":"b","\u1E07":"b","\u0243":"b","\u0180":"b","\u1D6C":"b","\u0181":"b","\u0253":"b","\u0182":"b","\u0183":"b","\u0106":"c","\u0107":"c","\u0108":"c","\u0109":"c","\u010C":"c","\u010D":"c","\u010A":"c","\u010B":"c","\xC7":"c","\xE7":"c","\u1E08":"c","\u1E09":"c","\u023B":"c","\u023C":"c","\u0187":"c","\u0188":"c","\u0255":"c","\u010E":"d","\u010F":"d","\u1E0A":"d","\u1E0B":"d","\u1E10":"d","\u1E11":"d","\u1E0C":"d","\u1E0D":"d","\u1E12":"d","\u1E13":"d","\u1E0E":"d","\u1E0F":"d","\u0110":"d","\u0111":"d","\u1D6D":"d","\u0189":"d","\u0256":"d","\u018A":"d","\u0257":"d","\u018B":"d","\u018C":"d","\u0221":"d","\xF0":"d","\xC9":"e","\u018F":"e","\u018E":"e","\u01DD":"e","\xE9":"e","\xC8":"e","\xE8":"e","\u0114":"e","\u0115":"e","\xCA":"e","\xEA":"e","\u1EBE":"e","\u1EBF":"e","\u1EC0":"e","\u1EC1":"e","\u1EC4":"e","\u1EC5":"e","\u1EC2":"e","\u1EC3":"e","\u011A":"e","\u011B":"e","\xCB":"e","\xEB":"e","\u1EBC":"e","\u1EBD":"e","\u0116":"e","\u0117":"e","\u0228":"e","\u0229":"e","\u1E1C":"e","\u1E1D":"e","\u0118":"e","\u0119":"e","\u0112":"e","\u0113":"e","\u1E16":"e","\u1E17":"e","\u1E14":"e","\u1E15":"e","\u1EBA":"e","\u1EBB":"e","\u0204":"e","\u0205":"e","\u0206":"e","\u0207":"e","\u1EB8":"e","\u1EB9":"e","\u1EC6":"e","\u1EC7":"e","\u1E18":"e","\u1E19":"e","\u1E1A":"e","\u1E1B":"e","\u0246":"e","\u0247":"e","\u025A":"e","\u025D":"e","\u1E1E":"f","\u1E1F":"f","\u1D6E":"f","\u0191":"f","\u0192":"f","\u01F4":"g","\u01F5":"g","\u011E":"g","\u011F":"g","\u011C":"g","\u011D":"g","\u01E6":"g","\u01E7":"g","\u0120":"g","\u0121":"g","\u0122":"g","\u0123":"g","\u1E20":"g","\u1E21":"g","\u01E4":"g","\u01E5":"g","\u0193":"g","\u0260":"g","\u0124":"h","\u0125":"h","\u021E":"h","\u021F":"h","\u1E26":"h","\u1E27":"h","\u1E22":"h","\u1E23":"h","\u1E28":"h","\u1E29":"h","\u1E24":"h","\u1E25":"h","\u1E2A":"h","\u1E2B":"h",H:"h","\u0331":"h","\u1E96":"h","\u0126":"h","\u0127":"h","\u2C67":"h","\u2C68":"h","\xCD":"i","\xED":"i","\xCC":"i","\xEC":"i","\u012C":"i","\u012D":"i","\xCE":"i","\xEE":"i","\u01CF":"i","\u01D0":"i","\xCF":"i","\xEF":"i","\u1E2E":"i","\u1E2F":"i","\u0128":"i","\u0129":"i","\u0130":"i",i:"i","\u012E":"i","\u012F":"i","\u012A":"i","\u012B":"i","\u1EC8":"i","\u1EC9":"i","\u0208":"i","\u0209":"i","\u020A":"i","\u020B":"i","\u1ECA":"i","\u1ECB":"i","\u1E2C":"i","\u1E2D":"i",I:"i","\u0131":"i","\u0197":"i","\u0268":"i","\u0134":"j","\u0135":"j",J:"j","\u030C":"j","\u01F0":"j","\u0237":"j","\u0248":"j","\u0249":"j","\u029D":"j","\u025F":"j","\u0284":"j","\u1E30":"k","\u1E31":"k","\u01E8":"k","\u01E9":"k","\u0136":"k","\u0137":"k","\u1E32":"k","\u1E33":"k","\u1E34":"k","\u1E35":"k","\u0198":"k","\u0199":"k","\u2C69":"k","\u2C6A":"k","\u0139":"a","\u013A":"l","\u013D":"l","\u013E":"l","\u013B":"l","\u013C":"l","\u1E36":"l","\u1E37":"l","\u1E38":"l","\u1E39":"l","\u1E3C":"l","\u1E3D":"l","\u1E3A":"l","\u1E3B":"l","\u0141":"l","\u0142":"l"},"\u0141","l"),b(a,"\u0323","l"),b(a,"\u0142","l"),b(a,"\u0323","l"),b(a,"\u013F","l"),b(a,"\u0140","l"),b(a,"\u023D","l"),b(a,"\u019A","l"),b(a,"\u2C60","l"),b(a,"\u2C61","l"),b(a,"\u2C62","l"),b(a,"\u026B","l"),b(a,"\u026C","l"),b(a,"\u026D","l"),b(a,"\u0234","l"),b(a,"\u1E3E","m"),b(a,"\u1E3F","m"),b(a,"\u1E40","m"),b(a,"\u1E41","m"),b(a,"\u1E42","m"),b(a,"\u1E43","m"),b(a,"\u0271","m"),b(a,"\u0143","n"),b(a,"\u0144","n"),b(a,"\u01F8","n"),b(a,"\u01F9","n"),b(a,"\u0147","n"),b(a,"\u0148","n"),b(a,"\xD1","n"),b(a,"\xF1","n"),b(a,"\u1E44","n"),b(a,"\u1E45","n"),b(a,"\u0145","n"),b(a,"\u0146","n"),b(a,"\u1E46","n"),b(a,"\u1E47","n"),b(a,"\u1E4A","n"),b(a,"\u1E4B","n"),b(a,"\u1E48","n"),b(a,"\u1E49","n"),b(a,"\u019D","n"),b(a,"\u0272","n"),b(a,"\u0220","n"),b(a,"\u019E","n"),b(a,"\u0273","n"),b(a,"\u0235","n"),b(a,"N","n"),b(a,"\u0308","n"),b(a,"n","n"),b(a,"\u0308","n"),b(a,"\xD3","o"),b(a,"\xF3","o"),b(a,"\xD2","o"),b(a,"\xF2","o"),b(a,"\u014E","o"),b(a,"\u014F","o"),b(a,"\xD4","o"),b(a,"\xF4","o"),b(a,"\u1ED0","o"),b(a,"\u1ED1","o"),b(a,"\u1ED2","o"),b(a,"\u1ED3","o"),b(a,"\u1ED6","o"),b(a,"\u1ED7","o"),b(a,"\u1ED4","o"),b(a,"\u1ED5","o"),b(a,"\u01D1","o"),b(a,"\u01D2","o"),b(a,"\xD6","o"),b(a,"\xF6","o"),b(a,"\u022A","o"),b(a,"\u022B","o"),b(a,"\u0150","o"),b(a,"\u0151","o"),b(a,"\xD5","o"),b(a,"\xF5","o"),b(a,"\u1E4C","o"),b(a,"\u1E4D","o"),b(a,"\u1E4E","o"),b(a,"\u1E4F","o"),b(a,"\u022C","o"),b(a,"\u022D","o"),b(a,"\u022E","o"),b(a,"\u022F","o"),b(a,"\u0230","o"),b(a,"\u0231","o"),b(a,"\xD8","o"),b(a,"\xF8","o"),b(a,"\u01FE","o"),b(a,"\u01FF","o"),b(a,"\u01EA","o"),b(a,"\u01EB","o"),b(a,"\u01EC","o"),b(a,"\u01ED","o"),b(a,"\u014C","o"),b(a,"\u014D","o"),b(a,"\u1E52","o"),b(a,"\u1E53","o"),b(a,"\u1E50","o"),b(a,"\u1E51","o"),b(a,"\u1ECE","o"),b(a,"\u1ECF","o"),b(a,"\u020C","o"),b(a,"\u020D","o"),b(a,"\u020E","o"),b(a,"\u020F","o"),b(a,"\u01A0","o"),b(a,"\u01A1","o"),b(a,"\u1EDA","o"),b(a,"\u1EDB","o"),b(a,"\u1EDC","o"),b(a,"\u1EDD","o"),b(a,"\u1EE0","o"),b(a,"\u1EE1","o"),b(a,"\u1EDE","o"),b(a,"\u1EDF","o"),b(a,"\u1EE2","o"),b(a,"\u1EE3","o"),b(a,"\u1ECC","o"),b(a,"\u1ECD","o"),b(a,"\u1ED8","o"),b(a,"\u1ED9","o"),b(a,"\u019F","o"),b(a,"\u0275","o"),b(a,"\u1E54","p"),b(a,"\u1E55","p"),b(a,"\u1E56","p"),b(a,"\u1E57","p"),b(a,"\u2C63","p"),b(a,"\u01A4","p"),b(a,"\u01A5","p"),b(a,"P","p"),b(a,"\u0303","p"),b(a,"p","p"),b(a,"\u0303","p"),b(a,"\u02A0","q"),b(a,"\u024A","q"),b(a,"\u024B","q"),b(a,"\u0154","r"),b(a,"\u0155","r"),b(a,"\u0158","r"),b(a,"\u0159","r"),b(a,"\u1E58","r"),b(a,"\u1E59","r"),b(a,"\u0156","r"),b(a,"\u0157","r"),b(a,"\u0210","r"),b(a,"\u0211","r"),b(a,"\u0212","r"),b(a,"\u0213","r"),b(a,"\u1E5A","r"),b(a,"\u1E5B","r"),b(a,"\u1E5C","r"),b(a,"\u1E5D","r"),b(a,"\u1E5E","r"),b(a,"\u1E5F","r"),b(a,"\u024C","r"),b(a,"\u024D","r"),b(a,"\u1D72","r"),b(a,"\u027C","r"),b(a,"\u2C64","r"),b(a,"\u027D","r"),b(a,"\u027E","r"),b(a,"\u1D73","r"),b(a,"\xDF","s"),b(a,"\u015A","s"),b(a,"\u015B","s"),b(a,"\u1E64","s"),b(a,"\u1E65","s"),b(a,"\u015C","s"),b(a,"\u015D","s"),b(a,"\u0160","s"),b(a,"\u0161","s"),b(a,"\u1E66","s"),b(a,"\u1E67","s"),b(a,"\u1E60","s"),b(a,"\u1E61","s"),b(a,"\u1E9B","s"),b(a,"\u015E","s"),b(a,"\u015F","s"),b(a,"\u1E62","s"),b(a,"\u1E63","s"),b(a,"\u1E68","s"),b(a,"\u1E69","s"),b(a,"\u0218","s"),b(a,"\u0219","s"),b(a,"\u0282","s"),b(a,"S","s"),b(a,"\u0329","s"),b(a,"s","s"),b(a,"\u0329","s"),b(a,"\xDE","t"),b(a,"\xFE","t"),b(a,"\u0164","t"),b(a,"\u0165","t"),b(a,"T","t"),b(a,"\u0308","t"),b(a,"\u1E97","t"),b(a,"\u1E6A","t"),b(a,"\u1E6B","t"),b(a,"\u0162","t"),b(a,"\u0163","t"),b(a,"\u1E6C","t"),b(a,"\u1E6D","t"),b(a,"\u021A","t"),b(a,"\u021B","t"),b(a,"\u1E70","t"),b(a,"\u1E71","t"),b(a,"\u1E6E","t"),b(a,"\u1E6F","t"),b(a,"\u0166","t"),b(a,"\u0167","t"),b(a,"\u023E","t"),b(a,"\u2C66","t"),b(a,"\u1D75","t"),b(a,"\u01AB","t"),b(a,"\u01AC","t"),b(a,"\u01AD","t"),b(a,"\u01AE","t"),b(a,"\u0288","t"),b(a,"\u0236","t"),b(a,"\xDA","u"),b(a,"\xFA","u"),b(a,"\xD9","u"),b(a,"\xF9","u"),b(a,"\u016C","u"),b(a,"\u016D","u"),b(a,"\xDB","u"),b(a,"\xFB","u"),b(a,"\u01D3","u"),b(a,"\u01D4","u"),b(a,"\u016E","u"),b(a,"\u016F","u"),b(a,"\xDC","u"),b(a,"\xFC","u"),b(a,"\u01D7","u"),b(a,"\u01D8","u"),b(a,"\u01DB","u"),b(a,"\u01DC","u"),b(a,"\u01D9","u"),b(a,"\u01DA","u"),b(a,"\u01D5","u"),b(a,"\u01D6","u"),b(a,"\u0170","u"),b(a,"\u0171","u"),b(a,"\u0168","u"),b(a,"\u0169","u"),b(a,"\u1E78","u"),b(a,"\u1E79","u"),b(a,"\u0172","u"),b(a,"\u0173","u"),b(a,"\u016A","u"),b(a,"\u016B","u"),b(a,"\u1E7A","u"),b(a,"\u1E7B","u"),b(a,"\u1EE6","u"),b(a,"\u1EE7","u"),b(a,"\u0214","u"),b(a,"\u0215","u"),b(a,"\u0216","u"),b(a,"\u0217","u"),b(a,"\u01AF","u"),b(a,"\u01B0","u"),b(a,"\u1EE8","u"),b(a,"\u1EE9","u"),b(a,"\u1EEA","u"),b(a,"\u1EEB","u"),b(a,"\u1EEE","u"),b(a,"\u1EEF","u"),b(a,"\u1EEC","u"),b(a,"\u1EED","u"),b(a,"\u1EF0","u"),b(a,"\u1EF1","u"),b(a,"\u1EE4","u"),b(a,"\u1EE5","u"),b(a,"\u1E72","u"),b(a,"\u1E73","u"),b(a,"\u1E76","u"),b(a,"\u1E77","u"),b(a,"\u1E74","u"),b(a,"\u1E75","u"),b(a,"\u0244","u"),b(a,"\u0289","u"),b(a,"\u1E7C","v"),b(a,"\u1E7D","v"),b(a,"\u1E7E","v"),b(a,"\u1E7F","v"),b(a,"\u01B2","v"),b(a,"\u028B","v"),b(a,"\u1E82","w"),b(a,"\u1E83","w"),b(a,"\u1E80","w"),b(a,"\u1E81","w"),b(a,"\u0174","w"),b(a,"\u0175","w"),b(a,"W","w"),b(a,"\u030A","w"),b(a,"\u1E98","w"),b(a,"\u1E84","w"),b(a,"\u1E85","w"),b(a,"\u1E86","w"),b(a,"\u1E87","w"),b(a,"\u1E88","w"),b(a,"\u1E89","w"),b(a,"\u1E8C","x"),b(a,"\u1E8D","x"),b(a,"\u1E8A","x"),b(a,"\u1E8B","x"),b(a,"\xDD","y"),b(a,"\xFD","y"),b(a,"\u1EF2","y"),b(a,"\u1EF3","y"),b(a,"\u0176","y"),b(a,"\u0177","y"),b(a,"Y","y"),b(a,"\u030A","y"),b(a,"\u1E99","y"),b(a,"\u0178","y"),b(a,"\xFF","y"),b(a,"\u1EF8","y"),b(a,"\u1EF9","y"),b(a,"\u1E8E","y"),b(a,"\u1E8F","y"),b(a,"\u0232","y"),b(a,"\u0233","y"),b(a,"\u1EF6","y"),b(a,"\u1EF7","y"),b(a,"\u1EF4","y"),b(a,"\u1EF5","y"),b(a,"\u028F","y"),b(a,"\u024E","y"),b(a,"\u024F","y"),b(a,"\u01B3","y"),b(a,"\u01B4","y"),b(a,"\u0179","z"),b(a,"\u017A","z"),b(a,"\u1E90","z"),b(a,"\u1E91","z"),b(a,"\u017D","z"),b(a,"\u017E","z"),b(a,"\u017B","z"),b(a,"\u017C","z"),b(a,"\u1E92","z"),b(a,"\u1E93","z"),b(a,"\u1E94","z"),b(a,"\u1E95","z"),b(a,"\u01B5","z"),b(a,"\u01B6","z"),b(a,"\u0224","z"),b(a,"\u0225","z"),b(a,"\u0290","z"),b(a,"\u0291","z"),b(a,"\u2C6B","z"),b(a,"\u2C6C","z"),b(a,"\u01EE","z"),b(a,"\u01EF","z"),b(a,"\u01BA","z"),b(a,"\uFF12","2"),b(a,"\uFF16","6"),b(a,"\uFF22","B"),b(a,"\uFF26","F"),b(a,"\uFF2A","J"),b(a,"\uFF2E","N"),b(a,"\uFF32","R"),b(a,"\uFF36","V"),b(a,"\uFF3A","Z"),b(a,"\uFF42","b"),b(a,"\uFF46","f"),b(a,"\uFF4A","j"),b(a,"\uFF4E","n"),b(a,"\uFF52","r"),b(a,"\uFF56","v"),b(a,"\uFF5A","z"),b(a,"\uFF11","1"),b(a,"\uFF15","5"),b(a,"\uFF19","9"),b(a,"\uFF21","A"),b(a,"\uFF25","E"),b(a,"\uFF29","I"),b(a,"\uFF2D","M"),b(a,"\uFF31","Q"),b(a,"\uFF35","U"),b(a,"\uFF39","Y"),b(a,"\uFF41","a"),b(a,"\uFF45","e"),b(a,"\uFF49","i"),b(a,"\uFF4D","m"),b(a,"\uFF51","q"),b(a,"\uFF55","u"),b(a,"\uFF59","y"),b(a,"\uFF10","0"),b(a,"\uFF14","4"),b(a,"\uFF18","8"),b(a,"\uFF24","D"),b(a,"\uFF28","H"),b(a,"\uFF2C","L"),b(a,"\uFF30","P"),b(a,"\uFF34","T"),b(a,"\uFF38","X"),b(a,"\uFF44","d"),b(a,"\uFF48","h"),b(a,"\uFF4C","l"),b(a,"\uFF50","p"),b(a,"\uFF54","t"),b(a,"\uFF58","x"),b(a,"\uFF13","3"),b(a,"\uFF17","7"),b(a,"\uFF23","C"),b(a,"\uFF27","G"),b(a,"\uFF2B","K"),b(a,"\uFF2F","O"),b(a,"\uFF33","S"),b(a,"\uFF37","W"),b(a,"\uFF43","c"),b(a,"\uFF47","g"),b(a,"\uFF4B","k"),b(a,"\uFF4F","o"),b(a,"\uFF53","s"),b(a,"\uFF57","w"),a);var d={extends:"k-pages-dialog",data:function(){return{searchQuery:""}},props:{start:Boolean},computed:{filteredPages:function(){var e=this;return this.pages.filter(function(t){var r=e.removeCase(t.text).toLowerCase(),a=e.removeCase(e.searchQuery).toLowerCase();return e.start?e.startsWith(a,r):r.includes(a)})}},methods:{startsWith:function(e,t){return t.slice(0,e.length)==e},removeCase:function(e){if(!e)return"";for(var t="",r=0;r<e.length;r++)t+=f[e.charAt(r)]||e.charAt(r);return t}}};if(typeof d==="function"){d=d.options}Object.assign(d,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("k-dialog",{ref:"dialog",staticClass:"k-pages-dialog",attrs:{"size":"medium"},on:{"cancel":function($event){return _vm.$emit("cancel")},"submit":_vm.submit}},[_vm.issue?[_c("k-box",{attrs:{"text":_vm.issue,"theme":"negative"}})]:[_vm.model?_c("header",{staticClass:"k-pages-dialog-navbar"},[_c("k-button",{attrs:{"disabled":!_vm.model.id,"tooltip":_vm.$t("back"),"icon":"angle-left"},on:{"click":_vm.back}}),_vm._v(" "),_c("k-headline",[_vm._v(_vm._s(_vm.model.title))])],1):_vm._e(),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.searchQuery,expression:"searchQuery"}],staticClass:"quickpages-input",attrs:{"type":"text","placeholder":_vm.$t("quickpages.placeholder")},domProps:{"value":_vm.searchQuery},on:{"input":function($event){if($event.target.composing){return}_vm.searchQuery=$event.target.value}}}),_vm._v(" "),_vm.filteredPages.length?_c("k-list",_vm._l(_vm.filteredPages,function(page){return _c("k-list-item",{key:page.id,attrs:{"text":page.text,"info":page.info,"image":page.image,"icon":page.icon},on:{"click":function($event){return _vm.toggle(page)}}},[_c("template",{slot:"options"},[_vm.isSelected(page)?_c("k-button",{attrs:{"slot":"options","autofocus":true,"icon":_vm.checkedIcon,"tooltip":_vm.$t("remove"),"theme":"positive"},slot:"options"}):_c("k-button",{attrs:{"slot":"options","autofocus":true,"tooltip":_vm.$t("select"),"icon":"circle-outline"},slot:"options"}),_vm._v(" "),_vm.model?_c("k-button",{attrs:{"disabled":!page.hasChildren,"tooltip":_vm.$t("open"),"icon":"angle-right"},on:{"click":function($event){$event.stopPropagation();return _vm.go(page)}}}):_vm._e()],1)],2)}),1):_c("k-empty",{attrs:{"icon":"page"}},[_vm._v(" No pages to select ")])]],2)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());panel.plugin("sylvainjule/quickpages",{fields:{quickpages:c},components:{"k-quickpages-dialog":d}});})();