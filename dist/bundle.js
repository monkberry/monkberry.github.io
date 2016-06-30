!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=document.querySelector(".js-intro");e&&e.classList.add("-visible")}function o(){var e=document.querySelector(".js-stars");if(e){var t=document.body,n=document.documentElement,o=Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight);e.style.height=o+"px",e.classList.add("-visible")}setTimeout(r,700)}function i(){var t=document.querySelector(".js-version");t&&e("https://api.github.com/repos/monkberry/monkberry/tags").then(function(e){return e.json()}).then(function(e){return t.textContent="v"+e[0].name})}function s(){for(var e=document.querySelectorAll("pre code"),t=0;t<e.length;t++)c["default"].highlightBlock(e[t])}function a(){var e=document.querySelector(".js-result");e&&(0,d["default"])(e)}var u=n(4),c=t(u),l=n(2),d=t(l);document.addEventListener("DOMContentLoaded",function(){setTimeout(o,500),i(),s(),a()}),window.addEventListener("resize",function(){o()})}).call(t,n(8))},function(e,t,n){!function(t){function n(){this.parent=null,this.nested=[],this.nodes=[],this.context=null,this.onRender=null,this.onUpdate=null,this.onRemove=null}function r(){this.items=Object.create(null),this.length=0,this.next=0}function o(e,t,n,r){if(r){var o={__index__:n};return o[r.value]=e[n],r.key&&(o[r.key]=n),o}return e[n]}function i(e,t,n,r){if(r){var o={__index__:n};return o[r.value]=e[t[n]],r.key&&(o[r.key]=t[n]),o}return e[t[n]]}n.render=function(e,t,n){var r;return r=n&&n.noCache?new e:e.pool.pop()||new e,8==t.nodeType?r.insertBefore(t):r.appendTo(t),n&&n.context&&(r.context=n.context),r.onRender&&r.onRender(),r},n.prerender=function(e,t){for(;t--;)e.pool.push(new e)},n.loop=function(e,t,r,s,a,u){var c,l,d,f,h,p,m=r.length;Array.isArray(a)?(h=o,p=a.length):(h=i,f=Object.keys(a),p=f.length),d=m-p;for(c in r.items){if(!(d-- >0))break;r.items[c].remove()}l=0;for(c in r.items)r.items[c].update(h(a,f,l,u)),l++;for(l=m,d=p;l<d;l++){var g=n.render(s,t);g.parent=e,e.nested.push(g),e.context&&(g.context=e.context),c=r.push(g),g.onRemove=function(e){return function(){r.remove(e)}}(c),g.update(h(a,f,l,u))}},n.cond=function(e,t,r,o,i){if(r.ref)i||r.ref.remove();else if(i){var s=n.render(o,t);s.parent=e,e.nested.push(s),e.context&&(s.context=e.context),r.ref=s,s.onRemove=function(){r.ref=null}}return i},n.insert=function(e,t,r,o,i){if(r.ref)r.ref.update(i);else{var s=n.render(o,t);s.parent=e,e.nested.push(s),e.context&&(s.context=e.context),r.ref=s,s.onRemove=function(){r.ref=null},s.update(i)}},n.prototype.remove=function(){for(var e=this.nodes.length;e--;)this.nodes[e].parentNode.removeChild(this.nodes[e]);for(this.onRemove&&this.onRemove(),e=this.nested.length;e--;)this.nested[e].remove();this.parent&&(e=this.parent.nested.indexOf(this),this.parent.nested.splice(e,1),this.parent=null),this.constructor.pool.push(this)},n.prototype.appendTo=function(e){for(var t=0,n=this.nodes.length;t<n;t++)e.appendChild(this.nodes[t])},n.prototype.insertBefore=function(e){if(!e.parentNode)throw new Error("Can not insert child view into parent node. You need append your view first and then update.");for(var t=0,n=this.nodes.length;t<n;t++)e.parentNode.insertBefore(this.nodes[t],e)},n.prototype.createDocument=function(){if(1==this.nodes.length)return this.nodes[0];for(var e=t.createDocumentFragment(),n=0,r=this.nodes.length;n<r;n++)e.appendChild(this.nodes[n]);return e},n.prototype.querySelector=function(e){for(var t=0;t<this.nodes.length;t++){if(this.nodes[t].matches&&this.nodes[t].matches(e))return this.nodes[t];if(8===this.nodes[t].nodeType)throw"Can not use querySelector with non-element nodes on first level.";if(this.nodes[t].querySelector){var n=this.nodes[t].querySelector(e);if(n)return n}}return null},r.prototype.push=function(e){return this.items[this.next]=e,this.length+=1,this.next+=1,this.next-1},r.prototype.remove=function(e){if(!(e in this.items))throw new Error('You are trying to delete not existing element "'+e+'" form map.');delete this.items[e],this.length-=1},r.prototype.forEach=function(e){for(var t in this.items)e(this.items[t])},n.Map=r,e.exports=n}(window.document)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t={todos:[{text:"Primum",complete:!0},{text:"Secundo",complete:!1},{text:"Tertium",complete:!1}]},n=i["default"].render(a["default"],e);n.update(t),n.on("submit","form",function(e){e.preventDefault();var r=n.querySelector("input");t.todos.push({text:r.value,complete:!1}),n.update(t),r.value=""})};var o=n(1),i=r(o);n(9);var s=n(12),a=r(s)},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(e){"object"==("undefined"==typeof window?"undefined":r(window))&&window||"object"==("undefined"==typeof self?"undefined":r(self))&&self;e(t)}(function(e){function t(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function r(e,t){var n=e&&e.exec(t);return n&&0==n.index}function o(e){return/^(no-?highlight|plain|text)$/i.test(e)}function i(e){var t,n,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",n=/\blang(?:uage)?-([\w-]+)\b/i.exec(i))return E(n[1])?n[1]:"no-highlight";for(i=i.split(/\s+/),t=0,r=i.length;t<r;t++)if(E(i[t])||o(i[t]))return i[t]}function s(e,t){var n,r={};for(n in e)r[n]=e[n];if(t)for(n in t)r[n]=t[n];return r}function a(e){var t=[];return function r(e,o){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?o+=i.nodeValue.length:1==i.nodeType&&(t.push({event:"start",offset:o,node:i}),o=r(i,o),n(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:o,node:i}));return o}(e,0),t}function u(e,r,o){function i(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function s(e){function r(e){return" "+e.nodeName+'="'+t(e.value)+'"'}l+="<"+n(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function a(e){l+="</"+n(e)+">"}function u(e){("start"==e.event?s:a)(e.node)}for(var c=0,l="",d=[];e.length||r.length;){var f=i();if(l+=t(o.substr(c,f[0].offset-c)),c=f[0].offset,f==e){d.reverse().forEach(a);do u(f.splice(0,1)[0]),f=i();while(f==e&&f.length&&f[0].offset==c);d.reverse().forEach(s)}else"start"==f[0].event?d.push(f[0].node):d.pop(),u(f.splice(0,1)[0])}return l+t(o.substr(c))}function c(e){function t(e){return e&&e.source||e}function n(n,r){return new RegExp(t(n),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function r(o,i){if(!o.compiled){if(o.compiled=!0,o.keywords=o.keywords||o.beginKeywords,o.keywords){var a={},u=function(t,n){e.case_insensitive&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");a[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof o.keywords?u("keyword",o.keywords):Object.keys(o.keywords).forEach(function(e){u(e,o.keywords[e])}),o.keywords=a}o.lexemesRe=n(o.lexemes||/\b\w+\b/,!0),i&&(o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")\\b"),o.begin||(o.begin=/\B|\b/),o.beginRe=n(o.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(o.endRe=n(o.end)),o.terminator_end=t(o.end)||"",o.endsWithParent&&i.terminator_end&&(o.terminator_end+=(o.end?"|":"")+i.terminator_end)),o.illegal&&(o.illegalRe=n(o.illegal)),void 0===o.relevance&&(o.relevance=1),o.contains||(o.contains=[]);var c=[];o.contains.forEach(function(e){e.variants?e.variants.forEach(function(t){c.push(s(e,t))}):c.push("self"==e?o:e)}),o.contains=c,o.contains.forEach(function(e){r(e,o)}),o.starts&&r(o.starts,i);var l=o.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([o.terminator_end,o.illegal]).map(t).filter(Boolean);o.terminators=l.length?n(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function l(e,n,o,i){function s(e,t){for(var n=0;n<t.contains.length;n++)if(r(t.contains[n].beginRe,e))return t.contains[n]}function a(e,t){if(r(e.endRe,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return a(e.parent,t)}function u(e,t){return!o&&r(t.illegalRe,e)}function f(e,t){var n=b.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(n)&&e.keywords[n]}function h(e,t,n,r){var o=r?"":_.classPrefix,i='<span class="'+o,s=n?"":"</span>";return i+=e+'">',i+t+s}function p(){if(!N.keywords)return t(M);var e="",n=0;N.lexemesRe.lastIndex=0;for(var r=N.lexemesRe.exec(M);r;){e+=t(M.substr(n,r.index-n));var o=f(N,r);o?(T+=o[1],e+=h(o[0],t(r[0]))):e+=t(r[0]),n=N.lexemesRe.lastIndex,r=N.lexemesRe.exec(M)}return e+t(M.substr(n))}function m(){var e="string"==typeof N.subLanguage;if(e&&!w[N.subLanguage])return t(M);var n=e?l(N.subLanguage,M,!0,R[N.subLanguage]):d(M,N.subLanguage.length?N.subLanguage:void 0);return N.relevance>0&&(T+=n.relevance),e&&(R[N.subLanguage]=n.top),h(n.language,n.value,!1,!0)}function g(){O+=void 0!==N.subLanguage?m():p(),M=""}function y(e,t){O+=e.className?h(e.className,"",!0):"",N=Object.create(e,{parent:{value:N}})}function v(e,t){if(M+=e,void 0===t)return g(),0;var n=s(t,N);if(n)return n.skip?M+=t:(n.excludeBegin&&(M+=t),g(),n.returnBegin||n.excludeBegin||(M=t)),y(n,t),n.returnBegin?0:t.length;var r=a(N,t);if(r){var o=N;o.skip?M+=t:(o.returnEnd||o.excludeEnd||(M+=t),g(),o.excludeEnd&&(M=t));do N.className&&(O+="</span>"),N.skip||(T+=N.relevance),N=N.parent;while(N!=r.parent);return r.starts&&y(r.starts,""),o.returnEnd?0:t.length}if(u(t,N))throw new Error('Illegal lexeme "'+t+'" for mode "'+(N.className||"<unnamed>")+'"');return M+=t,t.length||1}var b=E(e);if(!b)throw new Error('Unknown language: "'+e+'"');c(b);var x,N=i||b,R={},O="";for(x=N;x!=b;x=x.parent)x.className&&(O=h(x.className,"",!0)+O);var M="",T=0;try{for(var C,S,L=0;;){if(N.terminators.lastIndex=L,C=N.terminators.exec(n),!C)break;S=v(n.substr(L,C.index-L),C[0]),L=C.index+S}for(v(n.substr(L)),x=N;x.parent;x=x.parent)x.className&&(O+="</span>");return{relevance:T,value:O,language:e,top:N}}catch(A){if(A.message.indexOf("Illegal")!=-1)return{relevance:0,value:t(n)};throw A}}function d(e,n){n=n||_.languages||Object.keys(w);var r={relevance:0,value:t(e)},o=r;return n.forEach(function(t){if(E(t)){var n=l(t,e,!1);n.language=t,n.relevance>o.relevance&&(o=n),n.relevance>r.relevance&&(o=r,r=n)}}),o.language&&(r.second_best=o),r}function f(e){return _.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,_.tabReplace)})),_.useBR&&(e=e.replace(/\n/g,"<br>")),e}function h(e,t,n){var r=t?x[t]:n,o=[e.trim()];return e.match(/\bhljs\b/)||o.push("hljs"),e.indexOf(r)===-1&&o.push(r),o.join(" ").trim()}function p(e){var t=i(e);if(!o(t)){var n;_.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e;var r=n.textContent,s=t?l(t,r,!0):d(r),c=a(n);if(c.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=s.value,s.value=u(c,a(p),r)}s.value=f(s.value),e.innerHTML=s.value,e.className=h(e.className,t,s.language),e.result={language:s.language,re:s.relevance},s.second_best&&(e.second_best={language:s.second_best.language,re:s.second_best.relevance})}}function m(e){_=s(_,e)}function g(){if(!g.called){g.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function y(){addEventListener("DOMContentLoaded",g,!1),addEventListener("load",g,!1)}function v(t,n){var r=w[t]=n(e);r.aliases&&r.aliases.forEach(function(e){x[e]=t})}function b(){return Object.keys(w)}function E(e){return e=(e||"").toLowerCase(),w[e]||w[x[e]]}var _={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},w={},x={};return e.highlight=l,e.highlightAuto=d,e.fixMarkup=f,e.highlightBlock=p,e.configure=m,e.initHighlighting=g,e.initHighlightingOnLoad=y,e.registerLanguage=v,e.listLanguages=b,e.getLanguage=E,e.inherit=s,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.COMMENT=function(t,n,r){var o=e.inherit({className:"comment",begin:t,end:n,contains:[]},r||{});return o.contains.push(e.PHRASAL_WORDS_MODE),o.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),o},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);r.registerLanguage("js",n(5)),r.registerLanguage("xml",n(7)),r.registerLanguage("monk",n(6)),r.configure({languages:["js","xml","monk"]}),t["default"]=r},function(e,t){"use strict";e.exports=function(e){return{aliases:["js","jsx"],keywords:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise",monkberry:"Monkberry Template"},contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,{className:"subst",begin:"\\$\\{",end:"\\}"}]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},function(e,t){"use strict";e.exports=function(e){var t={className:"params",begin:"\\(",end:"\\)"},n="attribute block constant cycle date dump include max min parent random range source template_from_string",r={beginKeywords:n,keywords:{name:n},relevance:0,contains:[t]},o={begin:/\|[A-Za-z_]+:?/,keywords:"abs batch capitalize convert_encoding date date_modify default escape first format join json_encode keys last length lower merge nl2br number_format raw replace reverse round slice sort split striptags title trim upper url_encode",contains:[r]},i={beginKeywords:"of",keywords:{keyword:"of"},relevance:0},s="for endfor if endif else import unsafe";return{aliases:["monk"],case_insensitive:!0,subLanguage:"xml",contains:[e.COMMENT(/\{#/,/#}/),{className:"template-tag",begin:/\{%/,end:/%}/,contains:[{className:"name",begin:/\w+/,keywords:s,starts:{endsWithParent:!0,contains:[i,o,r,e.QUOTE_STRING_MODE],relevance:0}}]},{className:"template-variable",begin:/\{\{/,end:/}}/,contains:["self",o,r]},{className:"directive",begin:/:/,contains:[{className:"template-variable",begin:/\{\{/,end:/}}/,contains:["self",o,r]}]}]}}},function(e,t){"use strict";e.exports=function(e){var t="[A-Za-z0-9\\._:-]+",n={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:t,relevance:0},{begin:"=",relevance:0,contains:[{className:"string",variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("<!--","-->",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[n],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[n],starts:{end:"</script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"meta",variants:[{begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?\w+/,end:/\?>/}]},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},n]}]}}},function(e,t){(function(t){(function(){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return m.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function s(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function a(e){var t=new FileReader;return t.readAsArrayBuffer(e),s(t)}function u(e){var t=new FileReader;return t.readAsText(e),s(t)}function c(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,"string"==typeof e)this._bodyText=e;else if(m.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(m.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(e){if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob?(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(a)},this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var e=i(this);return e?e:Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(f)}),this.json=function(){return this.text().then(JSON.parse)},this}function l(e){var t=e.toUpperCase();return g.indexOf(t)>-1?t:e}function d(e,t){t=t||{};var n=t.body;if(d.prototype.isPrototypeOf(e)){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,n||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=e;if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=l(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function f(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function h(e){var t=new o,n=(e.getAllResponseHeaders()||"").trim().split("\n");return n.forEach(function(e){var n=e.trim().split(":"),r=n.shift().trim(),o=n.join(":").trim();t.append(r,o)}),t}function p(e,t){t||(t={}),this.type="default",this.status=t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText,this.headers=t.headers instanceof o?t.headers:new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var m={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};o.prototype.append=function(e,r){e=t(e),r=n(r);var o=this.map[e];o||(o=[],this.map[e]=o),o.push(r)},o.prototype["delete"]=function(e){delete this.map[t(e)]},o.prototype.get=function(e){var n=this.map[t(e)];return n?n[0]:null},o.prototype.getAll=function(e){return this.map[t(e)]||[]},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,r){this.map[t(e)]=[n(r)]},o.prototype.forEach=function(e,t){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(r){e.call(t,r,n,this)},this)},this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this)},c.call(d.prototype),c.call(p.prototype),p.prototype.clone=function(){return new p(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},p.error=function(){var e=new p(null,{status:0,statusText:""});return e.type="error",e};var y=[301,302,303,307,308];p.redirect=function(e,t){if(y.indexOf(t)===-1)throw new RangeError("Invalid status code");return new p(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=d,e.Response=p,e.fetch=function(e,t){return new Promise(function(n,r){function o(){return"responseURL"in s?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):void 0}var i;i=d.prototype.isPrototypeOf(e)&&!t?e:new d(e,t);var s=new XMLHttpRequest;s.onload=function(){var e={status:s.status,statusText:s.statusText,headers:h(s),url:o()},t="response"in s?s.response:s.responseText;n(new p(t,e))},s.onerror=function(){r(new TypeError("Network request failed"))},s.ontimeout=function(){r(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&m.blob&&(s.responseType="blob"),i.headers.forEach(function(e,t){s.setRequestHeader(t,e)}),s.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this),e.exports=t.fetch}).call(t)}).call(t,function(){return this}())},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),i=r(o),s=n(11);i["default"].prototype.on=function(e,t,n){var r=this,o=arguments.length<=3||void 0===arguments[3]?void 0:arguments[3];this.delegates||(this.delegates=[],this.nodes.forEach(function(e,t){if(8===e.nodeType)throw"Can not use event delegating with non-element nodes on first level.";r.delegates[t]=new s.Delegate(e)})),this.delegates.forEach(function(r){return r.on(e,t,n,o)})},i["default"].prototype.off=function(){var e=arguments.length<=0||void 0===arguments[0]?void 0:arguments[0],t=arguments.length<=1||void 0===arguments[1]?void 0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?void 0:arguments[2],r=arguments.length<=3||void 0===arguments[3]?void 0:arguments[3];this.delegates.forEach(function(o){return o.off(e,t,n,r)})}},function(e,t){"use strict";function n(e){this.listenerMap=[{},{}],e&&this.root(e),this.handle=n.prototype.handle.bind(this)}function r(e,t){return e.toLowerCase()===t.tagName.toLowerCase()}function o(e,t){return this.rootElement===window?t===document:this.rootElement===t}function i(e,t){return e===t.id}e.exports=n,n.prototype.root=function(e){var t,n=this.listenerMap;if(this.rootElement){for(t in n[1])n[1].hasOwnProperty(t)&&this.rootElement.removeEventListener(t,this.handle,!0);for(t in n[0])n[0].hasOwnProperty(t)&&this.rootElement.removeEventListener(t,this.handle,!1)}if(!e||!e.addEventListener)return this.rootElement&&delete this.rootElement,this;this.rootElement=e;for(t in n[1])n[1].hasOwnProperty(t)&&this.rootElement.addEventListener(t,this.handle,!0);for(t in n[0])n[0].hasOwnProperty(t)&&this.rootElement.addEventListener(t,this.handle,!1);return this},n.prototype.captureForType=function(e){return["blur","error","focus","load","resize","scroll"].indexOf(e)!==-1},n.prototype.on=function(e,t,n,a){var u,c,l,d;if(!e)throw new TypeError("Invalid event type: "+e);if("function"==typeof t&&(a=n,n=t,t=null),void 0===a&&(a=this.captureForType(e)),"function"!=typeof n)throw new TypeError("Handler must be a type of Function");return u=this.rootElement,c=this.listenerMap[a?1:0],c[e]||(u&&u.addEventListener(e,this.handle,a),c[e]=[]),t?/^[a-z]+$/i.test(t)?(d=t,l=r):/^#[a-z0-9\-_]+$/i.test(t)?(d=t.slice(1),l=i):(d=t,l=s):(d=null,l=o.bind(this)),c[e].push({selector:t,handler:n,matcher:l,matcherParam:d}),this},n.prototype.off=function(e,t,n,r){var o,i,s,a,u;if("function"==typeof t&&(r=n,n=t,t=null),void 0===r)return this.off(e,t,n,!0),this.off(e,t,n,!1),this;if(s=this.listenerMap[r?1:0],!e){for(u in s)s.hasOwnProperty(u)&&this.off(u,t,n);return this}if(a=s[e],!a||!a.length)return this;for(o=a.length-1;o>=0;o--)i=a[o],t&&t!==i.selector||n&&n!==i.handler||a.splice(o,1);return a.length||(delete s[e],this.rootElement&&this.rootElement.removeEventListener(e,this.handle,r)),this},n.prototype.handle=function(e){var t,n,r,o,i,s,a,u=e.type,c=[],l="ftLabsDelegateIgnore";if(e[l]!==!0){switch(a=e.target,3===a.nodeType&&(a=a.parentNode),r=this.rootElement,o=e.eventPhase||(e.target!==e.currentTarget?3:2)){case 1:c=this.listenerMap[1][u];break;case 2:this.listenerMap[0]&&this.listenerMap[0][u]&&(c=c.concat(this.listenerMap[0][u])),this.listenerMap[1]&&this.listenerMap[1][u]&&(c=c.concat(this.listenerMap[1][u]));break;case 3:c=this.listenerMap[0][u]}for(n=c.length;a&&n;){for(t=0;t<n&&(i=c[t],i);t++)if(i.matcher.call(a,i.matcherParam,a)&&(s=this.fire(e,a,i)),s===!1)return e[l]=!0,void e.preventDefault();if(a===r)break;n=c.length,a=a.parentElement}}},n.prototype.fire=function(e,t,n){return n.handler.call(t,e,t)};var s=function(e){if(e){var t=e.prototype;return t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector}}(Element);n.prototype.destroy=function(){this.off(),this.root()}},function(e,t,n){"use strict";/**
	 * @preserve Create and manage a DOM event delegator.
	 *
	 * @version 0.3.0
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
var r=n(10);e.exports=function(e){return new r(e)},e.exports.Delegate=r},function(e,t,n){function r(){a.call(this);var e=this,t=document.createElement("ol"),n=new a.Map,r=document.createElement("form"),i=document.createElement("input"),s=document.createElement("button"),u=document.createTextNode("");i.setAttribute("type","text"),s.appendChild(document.createTextNode("Add #")),s.appendChild(u),s.setAttribute("type","submit"),r.appendChild(i),r.appendChild(s),this.__update__={todos:function(r){a.loop(e,t,n,o,r,{key:"i",value:"todo"}),u.textContent=r.length+1}},this.onUpdate=function(e){n.forEach(function(t){t.update(e)})},this.nodes=[t,r]}function o(){a.call(this);var e=this,t=document.createElement("li"),n={},r={};this.__update__={todo:function(o){var u;u=a.cond(e,t,n,i,o.complete),a.cond(e,t,r,s,!u)}},this.onUpdate=function(e){n.ref&&n.ref.update(e),r.ref&&r.ref.update(e)},this.nodes=[t]}function i(){a.call(this);var e=document.createElement("del"),t=document.createTextNode("");e.appendChild(t),this.__update__={todo:function(e){t.textContent=e.text}},this.nodes=[e]}function s(){a.call(this);var e=document.createElement("em"),t=document.createTextNode("");e.appendChild(t),this.__update__={todo:function(e){t.textContent=e.text}},this.nodes=[e]}var a=n(1);r.prototype=Object.create(a.prototype),r.prototype.constructor=r,r.pool=[],r.filters={},r.prototype.update=function(e){void 0!==e.todos&&this.__update__.todos(e.todos),this.onUpdate(e)},o.prototype=Object.create(a.prototype),o.prototype.constructor=o,o.pool=[],o.prototype.update=function(e){void 0!==e.todo&&void 0!==e.__index__&&this.__update__.todo(e.todo),this.onUpdate(e)},i.prototype=Object.create(a.prototype),i.prototype.constructor=i,i.pool=[],i.prototype.update=function(e){void 0!==e.todo&&this.__update__.todo(e.todo)},s.prototype=Object.create(a.prototype),s.prototype.constructor=s,s.pool=[],s.prototype.update=function(e){void 0!==e.todo&&this.__update__.todo(e.todo)},e.exports=r}]);
//# sourceMappingURL=bundle.js.map