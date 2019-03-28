!function i(r,s,u){function l(t,e){if(!s[t]){if(!r[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(c)return c(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var a=s[t]={exports:{}};r[t][0].call(a.exports,function(e){return l(r[t][1][e]||e)},a,a.exports,i,r,s,u)}return s[t].exports}for(var c="function"==typeof require&&require,e=0;e<u.length;e++)l(u[e]);return l}({1:[function(e,t,o){!function(){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e(3);o.default={extends:"k-pages-dialog",data:function(){return{searchQuery:""}},props:{start:Boolean},computed:{filteredPages:function(){var n=this;return this.pages.filter(function(e){var t=n.removeCase(e.text).toLowerCase(),o=n.removeCase(n.searchQuery).toLowerCase();return n.start?n.startsWith(o,t):t.includes(o)})}},methods:{startsWith:function(e,t){return t.slice(0,e.length)==e},removeCase:function(e){if(!e)return"";for(var t="",o=0;o<e.length;o++)t+=n.accentMap[e.charAt(o)]||e.charAt(o);return t}}}}(),t.exports.__esModule&&(t.exports=t.exports.default);var n="function"==typeof t.exports?t.exports.options:t.exports;n.render=function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("k-dialog",{ref:"dialog",staticClass:"k-pages-dialog",attrs:{size:"medium"},on:{cancel:function(e){return o.$emit("cancel")},submit:o.submit}},[o.issue?[n("k-box",{attrs:{text:o.issue,theme:"negative"}})]:[o.model?n("header",{staticClass:"k-pages-dialog-navbar"},[n("k-button",{attrs:{disabled:!o.model.id,tooltip:o.$t("back"),icon:"angle-left"},on:{click:o.back}}),o._v(" "),n("k-headline",[o._v(o._s(o.model.title))])],1):o._e(),o._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:o.searchQuery,expression:"searchQuery"}],staticClass:"quickpages-input",attrs:{type:"text",placeholder:o.$t("quickpages.placeholder")},domProps:{value:o.searchQuery},on:{input:function(e){e.target.composing||(o.searchQuery=e.target.value)}}}),o._v(" "),o.filteredPages.length?n("k-list",o._l(o.filteredPages,function(t){return n("k-list-item",{key:t.id,attrs:{text:t.text,info:t.info,image:t.image,icon:t.icon},on:{click:function(e){return o.toggle(t)}}},[n("template",{slot:"options"},[o.isSelected(t)?n("k-button",{attrs:{slot:"options",autofocus:!0,icon:o.checkedIcon,tooltip:o.$t("remove"),theme:"positive"},slot:"options"}):n("k-button",{attrs:{slot:"options",autofocus:!0,tooltip:o.$t("select"),icon:"circle-outline"},slot:"options"}),o._v(" "),o.model?n("k-button",{attrs:{disabled:!t.hasChildren,tooltip:o.$t("open"),icon:"angle-right"},on:{click:function(e){return e.stopPropagation(),o.go(t)}}}):o._e()],1)],2)}),1):n("k-empty",{attrs:{icon:"page"}},[o._v("\n      No pages to select\n    ")])]],2)},n.staticRenderFns=[]},{3:3}],2:[function(e,t,o){!function(){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={extends:"k-pages-field",props:{start:Boolean}}}(),t.exports.__esModule&&(t.exports=t.exports.default);var n="function"==typeof t.exports?t.exports.options:t.exports;n.render=function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("k-field",o._b({staticClass:"k-pages-field k-quickpages-field"},"k-field",o.$props,!1),[o.more?n("k-button",{attrs:{slot:"options",icon:"add"},on:{click:o.open},slot:"options"},[o._v("\n    "+o._s(o.$t("select"))+"\n  ")]):o._e(),o._v(" "),o.selected.length?[n("k-draggable",{attrs:{element:o.elements.list,handle:!0,list:o.selected,"data-size":o.size},on:{end:o.onInput}},o._l(o.selected,function(e,t){return n(o.elements.item,{key:e.id,tag:"component",attrs:{sortable:1<o.selected.length,text:e.text,info:e.info,link:e.link,icon:e.icon,image:e.image}},[n("k-button",{attrs:{slot:"options",icon:"remove"},on:{click:function(e){return o.remove(t)}},slot:"options"})],1)}),1)]:n("k-empty",{attrs:{layout:o.layout,icon:"page"},on:{click:o.open}},[o._v("\n    "+o._s(o.empty||o.$t("field.pages.empty"))+"\n  ")]),o._v(" "),n("k-quickpages-dialog",{ref:"selector",attrs:{start:o.start},on:{submit:o.select}})],2)},n.staticRenderFns=[]},{}],3:[function(e,t,o){"use strict";var n;function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(o,"__esModule",{value:!0});o.accentMap=(a(n={"ẚ":"a","Á":"a","á":"a","À":"a","à":"a","Ă":"a","ă":"a","Ắ":"a","ắ":"a","Ằ":"a","ằ":"a","Ẵ":"a","ẵ":"a","Ẳ":"a","ẳ":"a","Â":"a","â":"a","Ấ":"a","ấ":"a","Ầ":"a","ầ":"a","Ẫ":"a","ẫ":"a","Ẩ":"a","ẩ":"a","Ǎ":"a","ǎ":"a","Å":"a","å":"a","Ǻ":"a","ǻ":"a","Ä":"a","ä":"a","Ǟ":"a","ǟ":"a","Ã":"a","ã":"a","Ȧ":"a","ȧ":"a","Ǡ":"a","ǡ":"a","Ą":"a","ą":"a","Ā":"a","ā":"a","Ả":"a","ả":"a","Ȁ":"a","ȁ":"a","Ȃ":"a","ȃ":"a","Ạ":"a","ạ":"a","Ặ":"a","ặ":"a","Ậ":"a","ậ":"a","Ḁ":"a","ḁ":"a","Ⱥ":"a","ⱥ":"a","Ǽ":"a","ǽ":"a","Ǣ":"a","ǣ":"a","Ḃ":"b","ḃ":"b","Ḅ":"b","ḅ":"b","Ḇ":"b","ḇ":"b","Ƀ":"b","ƀ":"b","ᵬ":"b","Ɓ":"b","ɓ":"b","Ƃ":"b","ƃ":"b","Ć":"c","ć":"c","Ĉ":"c","ĉ":"c","Č":"c","č":"c","Ċ":"c","ċ":"c","Ç":"c","ç":"c","Ḉ":"c","ḉ":"c","Ȼ":"c","ȼ":"c","Ƈ":"c","ƈ":"c","ɕ":"c","Ď":"d","ď":"d","Ḋ":"d","ḋ":"d","Ḑ":"d","ḑ":"d","Ḍ":"d","ḍ":"d","Ḓ":"d","ḓ":"d","Ḏ":"d","ḏ":"d","Đ":"d","đ":"d","ᵭ":"d","Ɖ":"d","ɖ":"d","Ɗ":"d","ɗ":"d","Ƌ":"d","ƌ":"d","ȡ":"d","ð":"d","É":"e","Ə":"e","Ǝ":"e","ǝ":"e","é":"e","È":"e","è":"e","Ĕ":"e","ĕ":"e","Ê":"e","ê":"e","Ế":"e","ế":"e","Ề":"e","ề":"e","Ễ":"e","ễ":"e","Ể":"e","ể":"e","Ě":"e","ě":"e","Ë":"e","ë":"e","Ẽ":"e","ẽ":"e","Ė":"e","ė":"e","Ȩ":"e","ȩ":"e","Ḝ":"e","ḝ":"e","Ę":"e","ę":"e","Ē":"e","ē":"e","Ḗ":"e","ḗ":"e","Ḕ":"e","ḕ":"e","Ẻ":"e","ẻ":"e","Ȅ":"e","ȅ":"e","Ȇ":"e","ȇ":"e","Ẹ":"e","ẹ":"e","Ệ":"e","ệ":"e","Ḙ":"e","ḙ":"e","Ḛ":"e","ḛ":"e","Ɇ":"e","ɇ":"e","ɚ":"e","ɝ":"e","Ḟ":"f","ḟ":"f","ᵮ":"f","Ƒ":"f","ƒ":"f","Ǵ":"g","ǵ":"g","Ğ":"g","ğ":"g","Ĝ":"g","ĝ":"g","Ǧ":"g","ǧ":"g","Ġ":"g","ġ":"g","Ģ":"g","ģ":"g","Ḡ":"g","ḡ":"g","Ǥ":"g","ǥ":"g","Ɠ":"g","ɠ":"g","Ĥ":"h","ĥ":"h","Ȟ":"h","ȟ":"h","Ḧ":"h","ḧ":"h","Ḣ":"h","ḣ":"h","Ḩ":"h","ḩ":"h","Ḥ":"h","ḥ":"h","Ḫ":"h","ḫ":"h",H:"h","̱":"h","ẖ":"h","Ħ":"h","ħ":"h","Ⱨ":"h","ⱨ":"h","Í":"i","í":"i","Ì":"i","ì":"i","Ĭ":"i","ĭ":"i","Î":"i","î":"i","Ǐ":"i","ǐ":"i","Ï":"i","ï":"i","Ḯ":"i","ḯ":"i","Ĩ":"i","ĩ":"i","İ":"i",i:"i","Į":"i","į":"i","Ī":"i","ī":"i","Ỉ":"i","ỉ":"i","Ȉ":"i","ȉ":"i","Ȋ":"i","ȋ":"i","Ị":"i","ị":"i","Ḭ":"i","ḭ":"i",I:"i","ı":"i","Ɨ":"i","ɨ":"i","Ĵ":"j","ĵ":"j",J:"j","̌":"j","ǰ":"j","ȷ":"j","Ɉ":"j","ɉ":"j","ʝ":"j","ɟ":"j","ʄ":"j","Ḱ":"k","ḱ":"k","Ǩ":"k","ǩ":"k","Ķ":"k","ķ":"k","Ḳ":"k","ḳ":"k","Ḵ":"k","ḵ":"k","Ƙ":"k","ƙ":"k","Ⱪ":"k","ⱪ":"k","Ĺ":"a","ĺ":"l","Ľ":"l","ľ":"l","Ļ":"l","ļ":"l","Ḷ":"l","ḷ":"l","Ḹ":"l","ḹ":"l","Ḽ":"l","ḽ":"l","Ḻ":"l","ḻ":"l","Ł":"l","ł":"l"},"Ł","l"),a(n,"̣","l"),a(n,"ł","l"),a(n,"̣","l"),a(n,"Ŀ","l"),a(n,"ŀ","l"),a(n,"Ƚ","l"),a(n,"ƚ","l"),a(n,"Ⱡ","l"),a(n,"ⱡ","l"),a(n,"Ɫ","l"),a(n,"ɫ","l"),a(n,"ɬ","l"),a(n,"ɭ","l"),a(n,"ȴ","l"),a(n,"Ḿ","m"),a(n,"ḿ","m"),a(n,"Ṁ","m"),a(n,"ṁ","m"),a(n,"Ṃ","m"),a(n,"ṃ","m"),a(n,"ɱ","m"),a(n,"Ń","n"),a(n,"ń","n"),a(n,"Ǹ","n"),a(n,"ǹ","n"),a(n,"Ň","n"),a(n,"ň","n"),a(n,"Ñ","n"),a(n,"ñ","n"),a(n,"Ṅ","n"),a(n,"ṅ","n"),a(n,"Ņ","n"),a(n,"ņ","n"),a(n,"Ṇ","n"),a(n,"ṇ","n"),a(n,"Ṋ","n"),a(n,"ṋ","n"),a(n,"Ṉ","n"),a(n,"ṉ","n"),a(n,"Ɲ","n"),a(n,"ɲ","n"),a(n,"Ƞ","n"),a(n,"ƞ","n"),a(n,"ɳ","n"),a(n,"ȵ","n"),a(n,"N","n"),a(n,"̈","n"),a(n,"n","n"),a(n,"̈","n"),a(n,"Ó","o"),a(n,"ó","o"),a(n,"Ò","o"),a(n,"ò","o"),a(n,"Ŏ","o"),a(n,"ŏ","o"),a(n,"Ô","o"),a(n,"ô","o"),a(n,"Ố","o"),a(n,"ố","o"),a(n,"Ồ","o"),a(n,"ồ","o"),a(n,"Ỗ","o"),a(n,"ỗ","o"),a(n,"Ổ","o"),a(n,"ổ","o"),a(n,"Ǒ","o"),a(n,"ǒ","o"),a(n,"Ö","o"),a(n,"ö","o"),a(n,"Ȫ","o"),a(n,"ȫ","o"),a(n,"Ő","o"),a(n,"ő","o"),a(n,"Õ","o"),a(n,"õ","o"),a(n,"Ṍ","o"),a(n,"ṍ","o"),a(n,"Ṏ","o"),a(n,"ṏ","o"),a(n,"Ȭ","o"),a(n,"ȭ","o"),a(n,"Ȯ","o"),a(n,"ȯ","o"),a(n,"Ȱ","o"),a(n,"ȱ","o"),a(n,"Ø","o"),a(n,"ø","o"),a(n,"Ǿ","o"),a(n,"ǿ","o"),a(n,"Ǫ","o"),a(n,"ǫ","o"),a(n,"Ǭ","o"),a(n,"ǭ","o"),a(n,"Ō","o"),a(n,"ō","o"),a(n,"Ṓ","o"),a(n,"ṓ","o"),a(n,"Ṑ","o"),a(n,"ṑ","o"),a(n,"Ỏ","o"),a(n,"ỏ","o"),a(n,"Ȍ","o"),a(n,"ȍ","o"),a(n,"Ȏ","o"),a(n,"ȏ","o"),a(n,"Ơ","o"),a(n,"ơ","o"),a(n,"Ớ","o"),a(n,"ớ","o"),a(n,"Ờ","o"),a(n,"ờ","o"),a(n,"Ỡ","o"),a(n,"ỡ","o"),a(n,"Ở","o"),a(n,"ở","o"),a(n,"Ợ","o"),a(n,"ợ","o"),a(n,"Ọ","o"),a(n,"ọ","o"),a(n,"Ộ","o"),a(n,"ộ","o"),a(n,"Ɵ","o"),a(n,"ɵ","o"),a(n,"Ṕ","p"),a(n,"ṕ","p"),a(n,"Ṗ","p"),a(n,"ṗ","p"),a(n,"Ᵽ","p"),a(n,"Ƥ","p"),a(n,"ƥ","p"),a(n,"P","p"),a(n,"̃","p"),a(n,"p","p"),a(n,"̃","p"),a(n,"ʠ","q"),a(n,"Ɋ","q"),a(n,"ɋ","q"),a(n,"Ŕ","r"),a(n,"ŕ","r"),a(n,"Ř","r"),a(n,"ř","r"),a(n,"Ṙ","r"),a(n,"ṙ","r"),a(n,"Ŗ","r"),a(n,"ŗ","r"),a(n,"Ȑ","r"),a(n,"ȑ","r"),a(n,"Ȓ","r"),a(n,"ȓ","r"),a(n,"Ṛ","r"),a(n,"ṛ","r"),a(n,"Ṝ","r"),a(n,"ṝ","r"),a(n,"Ṟ","r"),a(n,"ṟ","r"),a(n,"Ɍ","r"),a(n,"ɍ","r"),a(n,"ᵲ","r"),a(n,"ɼ","r"),a(n,"Ɽ","r"),a(n,"ɽ","r"),a(n,"ɾ","r"),a(n,"ᵳ","r"),a(n,"ß","s"),a(n,"Ś","s"),a(n,"ś","s"),a(n,"Ṥ","s"),a(n,"ṥ","s"),a(n,"Ŝ","s"),a(n,"ŝ","s"),a(n,"Š","s"),a(n,"š","s"),a(n,"Ṧ","s"),a(n,"ṧ","s"),a(n,"Ṡ","s"),a(n,"ṡ","s"),a(n,"ẛ","s"),a(n,"Ş","s"),a(n,"ş","s"),a(n,"Ṣ","s"),a(n,"ṣ","s"),a(n,"Ṩ","s"),a(n,"ṩ","s"),a(n,"Ș","s"),a(n,"ș","s"),a(n,"ʂ","s"),a(n,"S","s"),a(n,"̩","s"),a(n,"s","s"),a(n,"̩","s"),a(n,"Þ","t"),a(n,"þ","t"),a(n,"Ť","t"),a(n,"ť","t"),a(n,"T","t"),a(n,"̈","t"),a(n,"ẗ","t"),a(n,"Ṫ","t"),a(n,"ṫ","t"),a(n,"Ţ","t"),a(n,"ţ","t"),a(n,"Ṭ","t"),a(n,"ṭ","t"),a(n,"Ț","t"),a(n,"ț","t"),a(n,"Ṱ","t"),a(n,"ṱ","t"),a(n,"Ṯ","t"),a(n,"ṯ","t"),a(n,"Ŧ","t"),a(n,"ŧ","t"),a(n,"Ⱦ","t"),a(n,"ⱦ","t"),a(n,"ᵵ","t"),a(n,"ƫ","t"),a(n,"Ƭ","t"),a(n,"ƭ","t"),a(n,"Ʈ","t"),a(n,"ʈ","t"),a(n,"ȶ","t"),a(n,"Ú","u"),a(n,"ú","u"),a(n,"Ù","u"),a(n,"ù","u"),a(n,"Ŭ","u"),a(n,"ŭ","u"),a(n,"Û","u"),a(n,"û","u"),a(n,"Ǔ","u"),a(n,"ǔ","u"),a(n,"Ů","u"),a(n,"ů","u"),a(n,"Ü","u"),a(n,"ü","u"),a(n,"Ǘ","u"),a(n,"ǘ","u"),a(n,"Ǜ","u"),a(n,"ǜ","u"),a(n,"Ǚ","u"),a(n,"ǚ","u"),a(n,"Ǖ","u"),a(n,"ǖ","u"),a(n,"Ű","u"),a(n,"ű","u"),a(n,"Ũ","u"),a(n,"ũ","u"),a(n,"Ṹ","u"),a(n,"ṹ","u"),a(n,"Ų","u"),a(n,"ų","u"),a(n,"Ū","u"),a(n,"ū","u"),a(n,"Ṻ","u"),a(n,"ṻ","u"),a(n,"Ủ","u"),a(n,"ủ","u"),a(n,"Ȕ","u"),a(n,"ȕ","u"),a(n,"Ȗ","u"),a(n,"ȗ","u"),a(n,"Ư","u"),a(n,"ư","u"),a(n,"Ứ","u"),a(n,"ứ","u"),a(n,"Ừ","u"),a(n,"ừ","u"),a(n,"Ữ","u"),a(n,"ữ","u"),a(n,"Ử","u"),a(n,"ử","u"),a(n,"Ự","u"),a(n,"ự","u"),a(n,"Ụ","u"),a(n,"ụ","u"),a(n,"Ṳ","u"),a(n,"ṳ","u"),a(n,"Ṷ","u"),a(n,"ṷ","u"),a(n,"Ṵ","u"),a(n,"ṵ","u"),a(n,"Ʉ","u"),a(n,"ʉ","u"),a(n,"Ṽ","v"),a(n,"ṽ","v"),a(n,"Ṿ","v"),a(n,"ṿ","v"),a(n,"Ʋ","v"),a(n,"ʋ","v"),a(n,"Ẃ","w"),a(n,"ẃ","w"),a(n,"Ẁ","w"),a(n,"ẁ","w"),a(n,"Ŵ","w"),a(n,"ŵ","w"),a(n,"W","w"),a(n,"̊","w"),a(n,"ẘ","w"),a(n,"Ẅ","w"),a(n,"ẅ","w"),a(n,"Ẇ","w"),a(n,"ẇ","w"),a(n,"Ẉ","w"),a(n,"ẉ","w"),a(n,"Ẍ","x"),a(n,"ẍ","x"),a(n,"Ẋ","x"),a(n,"ẋ","x"),a(n,"Ý","y"),a(n,"ý","y"),a(n,"Ỳ","y"),a(n,"ỳ","y"),a(n,"Ŷ","y"),a(n,"ŷ","y"),a(n,"Y","y"),a(n,"̊","y"),a(n,"ẙ","y"),a(n,"Ÿ","y"),a(n,"ÿ","y"),a(n,"Ỹ","y"),a(n,"ỹ","y"),a(n,"Ẏ","y"),a(n,"ẏ","y"),a(n,"Ȳ","y"),a(n,"ȳ","y"),a(n,"Ỷ","y"),a(n,"ỷ","y"),a(n,"Ỵ","y"),a(n,"ỵ","y"),a(n,"ʏ","y"),a(n,"Ɏ","y"),a(n,"ɏ","y"),a(n,"Ƴ","y"),a(n,"ƴ","y"),a(n,"Ź","z"),a(n,"ź","z"),a(n,"Ẑ","z"),a(n,"ẑ","z"),a(n,"Ž","z"),a(n,"ž","z"),a(n,"Ż","z"),a(n,"ż","z"),a(n,"Ẓ","z"),a(n,"ẓ","z"),a(n,"Ẕ","z"),a(n,"ẕ","z"),a(n,"Ƶ","z"),a(n,"ƶ","z"),a(n,"Ȥ","z"),a(n,"ȥ","z"),a(n,"ʐ","z"),a(n,"ʑ","z"),a(n,"Ⱬ","z"),a(n,"ⱬ","z"),a(n,"Ǯ","z"),a(n,"ǯ","z"),a(n,"ƺ","z"),a(n,"２","2"),a(n,"６","6"),a(n,"Ｂ","B"),a(n,"Ｆ","F"),a(n,"Ｊ","J"),a(n,"Ｎ","N"),a(n,"Ｒ","R"),a(n,"Ｖ","V"),a(n,"Ｚ","Z"),a(n,"ｂ","b"),a(n,"ｆ","f"),a(n,"ｊ","j"),a(n,"ｎ","n"),a(n,"ｒ","r"),a(n,"ｖ","v"),a(n,"ｚ","z"),a(n,"１","1"),a(n,"５","5"),a(n,"９","9"),a(n,"Ａ","A"),a(n,"Ｅ","E"),a(n,"Ｉ","I"),a(n,"Ｍ","M"),a(n,"Ｑ","Q"),a(n,"Ｕ","U"),a(n,"Ｙ","Y"),a(n,"ａ","a"),a(n,"ｅ","e"),a(n,"ｉ","i"),a(n,"ｍ","m"),a(n,"ｑ","q"),a(n,"ｕ","u"),a(n,"ｙ","y"),a(n,"０","0"),a(n,"４","4"),a(n,"８","8"),a(n,"Ｄ","D"),a(n,"Ｈ","H"),a(n,"Ｌ","L"),a(n,"Ｐ","P"),a(n,"Ｔ","T"),a(n,"Ｘ","X"),a(n,"ｄ","d"),a(n,"ｈ","h"),a(n,"ｌ","l"),a(n,"ｐ","p"),a(n,"ｔ","t"),a(n,"ｘ","x"),a(n,"３","3"),a(n,"７","7"),a(n,"Ｃ","C"),a(n,"Ｇ","G"),a(n,"Ｋ","K"),a(n,"Ｏ","O"),a(n,"Ｓ","S"),a(n,"Ｗ","W"),a(n,"ｃ","c"),a(n,"ｇ","g"),a(n,"ｋ","k"),a(n,"ｏ","o"),a(n,"ｓ","s"),a(n,"ｗ","w"),n)},{}],4:[function(e,t,o){"use strict";var n=i(e(2)),a=i(e(1));function i(e){return e&&e.__esModule?e:{default:e}}panel.plugin("sylvainjule/quickpages",{fields:{quickpages:n.default},components:{"k-quickpages-dialog":a.default}})},{1:1,2:2}]},{},[4]);