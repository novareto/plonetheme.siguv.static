/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
//# sourceMappingURL=jquery.min.map
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.2.0 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/requirejs/LICENSE
 */
//Not using strict: uneven strict support in browsers, #392, and causes
//problems with requirejs.exec()/transpiler plugins that may not be strict.
/*jslint regexp: true, nomen: true, sloppy: true */
/*global window, navigator, document, importScripts, setTimeout, opera */

var requirejs, require, define;
(function (global) {
    var req, s, head, baseElement, dataMain, src,
        interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = '2.2.0',
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document),
        isWebWorker = !isBrowser && typeof importScripts !== 'undefined',
        //PS3 indicates loaded and complete, but need to wait for complete
        //specifically. Sequence is 'loading', 'loaded', execution,
        // then 'complete'. The UA check is unfortunate, but not sure how
        //to feature test w/o causing perf issues.
        readyRegExp = isBrowser && navigator.platform === 'PLAYSTATION 3' ?
                      /^complete$/ : /^(complete|loaded)$/,
        defContextName = '_',
        //Oh the tragedy, detecting opera. See the usage of isOpera for reason.
        isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = false;

    //Could match something like ')//comment', do not lose the prefix to comment.
    function commentReplace(match, multi, multiText, singlePrefix) {
        return singlePrefix || '';
    }

    function isFunction(it) {
        return ostring.call(it) === '[object Function]';
    }

    function isArray(it) {
        return ostring.call(it) === '[object Array]';
    }

    /**
     * Helper function for iterating over an array. If the func returns
     * a true value, it will break out of the loop.
     */
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    /**
     * Helper function for iterating over an array backwards. If the func
     * returns a true value, it will break out of the loop.
     */
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop];
    }

    /**
     * Cycles over properties in an object and calls a function for each
     * property value. If the function returns a truthy value, then the
     * iteration is stopped.
     */
    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break;
                }
            }
        }
    }

    /**
     * Simple function to mix in properties from source into target,
     * but only if target does not already have a property of the same name.
     */
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value === 'object' && value &&
                        !isArray(value) && !isFunction(value) &&
                        !(value instanceof RegExp)) {

                        if (!target[prop]) {
                            target[prop] = {};
                        }
                        mixin(target[prop], value, force, deepStringMixin);
                    } else {
                        target[prop] = value;
                    }
                }
            });
        }
        return target;
    }

    //Similar to Function.prototype.bind, but the 'this' object is specified
    //first, since it is easier to read/figure out what 'this' will be.
    function bind(obj, fn) {
        return function () {
            return fn.apply(obj, arguments);
        };
    }

    function scripts() {
        return document.getElementsByTagName('script');
    }

    function defaultOnError(err) {
        throw err;
    }

    //Allow getting a global that is expressed in
    //dot notation, like 'a.b.c'.
    function getGlobal(value) {
        if (!value) {
            return value;
        }
        var g = global;
        each(value.split('.'), function (part) {
            g = g[part];
        });
        return g;
    }

    /**
     * Constructs an error with a pointer to an URL with more information.
     * @param {String} id the error ID that maps to an ID on a web page.
     * @param {String} message human readable error.
     * @param {Error} [err] the original error, if there is one.
     *
     * @returns {Error}
     */
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + '\nhttp://requirejs.org/docs/errors.html#' + id);
        e.requireType = id;
        e.requireModules = requireModules;
        if (err) {
            e.originalError = err;
        }
        return e;
    }

    if (typeof define !== 'undefined') {
        //If a define is already in play via another AMD loader,
        //do not overwrite.
        return;
    }

    if (typeof requirejs !== 'undefined') {
        if (isFunction(requirejs)) {
            //Do not overwrite an existing requirejs instance.
            return;
        }
        cfg = requirejs;
        requirejs = undefined;
    }

    //Allow for a require config object
    if (typeof require !== 'undefined' && !isFunction(require)) {
        //assume it is a config object.
        cfg = require;
        require = undefined;
    }

    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers,
            checkLoadedTimeoutId,
            config = {
                //Defaults. Do not set a default for map
                //config to speed up normalize(), which
                //will run faster if there is no default.
                waitSeconds: 7,
                baseUrl: './',
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            registry = {},
            //registry of just enabled modules, to speed
            //cycle breaking code when lots of modules
            //are registered, but not activated.
            enabledRegistry = {},
            undefEvents = {},
            defQueue = [],
            defined = {},
            urlFetched = {},
            bundlesMap = {},
            requireCounter = 1,
            unnormalizedCounter = 1;

        /**
         * Trims the . and .. from an array of path segments.
         * It will keep a leading path segment if a .. will become
         * the first path segment, to help with module name lookups,
         * which act like paths, but can be remapped. But the end result,
         * all paths that use this function should look normalized.
         * NOTE: this method MODIFIES the input array.
         * @param {Array} ary the array of path segments.
         */
        function trimDots(ary) {
            var i, part;
            for (i = 0; i < ary.length; i++) {
                part = ary[i];
                if (part === '.') {
                    ary.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && ary[2] === '..') || ary[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        ary.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
        }

        /**
         * Given a relative module name, like ./something, normalize it to
         * a real name that can be mapped to a path.
         * @param {String} name the relative name
         * @param {String} baseName a real name that the name arg is relative
         * to.
         * @param {Boolean} applyMap apply the map config to the value. Should
         * only be done if this normalization is for a dependency ID.
         * @returns {String} normalized name
         */
        function normalize(name, baseName, applyMap) {
            var pkgMain, mapValue, nameParts, i, j, nameSegment, lastIndex,
                foundMap, foundI, foundStarMap, starI, normalizedBaseParts,
                baseParts = (baseName && baseName.split('/')),
                map = config.map,
                starMap = map && map['*'];

            //Adjust any relative paths.
            if (name) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // If wanting node ID compatibility, strip .js from end
                // of IDs. Have to do this here, and not in nameToUrl
                // because node allows either .js or non .js to map
                // to same file.
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                // Starts with a '.' so need the baseName
                if (name[0].charAt(0) === '.' && baseParts) {
                    //Convert baseName to array, and lop off the last part,
                    //so that . matches that 'directory' and not name of the baseName's
                    //module. For instance, baseName of 'one/two/three', maps to
                    //'one/two/three.js', but we want the directory, 'one/two' for
                    //this normalization.
                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                    name = normalizedBaseParts.concat(name);
                }

                trimDots(name);
                name = name.join('/');
            }

            //Apply map config if available.
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split('/');

                outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join('/');

                    if (baseParts) {
                        //Find the longest baseName segment match in the config.
                        //So, do joins on the biggest to smallest lengths of baseParts.
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join('/'));

                            //baseName segment has config, find if it has one for
                            //this name.
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    //Match, update name to the new value.
                                    foundMap = mapValue;
                                    foundI = i;
                                    break outerLoop;
                                }
                            }
                        }
                    }

                    //Check for a star map match, but just hold on to it,
                    //if there is a shorter segment match later in a matching
                    //config, then favor over this star map.
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i;
                    }
                }

                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI;
                }

                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join('/');
                }
            }

            // If the name points to a package's name, use
            // the package main instead.
            pkgMain = getOwn(config.pkgs, name);

            return pkgMain ? pkgMain : name;
        }

        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function (scriptNode) {
                    if (scriptNode.getAttribute('data-requiremodule') === name &&
                            scriptNode.getAttribute('data-requirecontext') === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true;
                    }
                });
            }
        }

        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                //Pop off the first array value, since it failed, and
                //retry
                pathConfig.shift();
                context.require.undef(id);

                //Custom require that does not do map translation, since
                //ID is "absolute", already mapped/resolved.
                context.makeRequire(null, {
                    skipMap: true
                })([id]);

                return true;
            }
        }

        //Turns a plugin!resource to [plugin, resource]
        //with the plugin being undefined if the name
        //did not have a plugin prefix.
        function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
        }

        /**
         * Creates a module mapping that includes plugin prefix, module
         * name, and path. If parentModuleMap is provided it will
         * also normalize the name via require.normalize()
         *
         * @param {String} name the module name
         * @param {String} [parentModuleMap] parent module map
         * for the module name, used to resolve relative names.
         * @param {Boolean} isNormalized: is the ID already normalized.
         * This is true if this call is done for a define() module ID.
         * @param {Boolean} applyMap: apply the map config to the ID.
         * Should only be true if this map is for a dependency.
         *
         * @returns {Object}
         */
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts,
                prefix = null,
                parentName = parentModuleMap ? parentModuleMap.name : null,
                originalName = name,
                isDefine = true,
                normalizedName = '';

            //If no name, then it means it is a require call, generate an
            //internal name.
            if (!name) {
                isDefine = false;
                name = '_@r' + (requireCounter += 1);
            }

            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];

            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix);
            }

            //Account for relative paths if there is a base name.
            if (name) {
                if (prefix) {
                    if (pluginModule && pluginModule.normalize) {
                        //Plugin is loaded, use its normalize method.
                        normalizedName = pluginModule.normalize(name, function (name) {
                            return normalize(name, parentName, applyMap);
                        });
                    } else {
                        // If nested plugin references, then do not try to
                        // normalize, as it will not normalize correctly. This
                        // places a restriction on resourceIds, and the longer
                        // term solution is not to normalize until plugins are
                        // loaded and all normalizations to allow for async
                        // loading of a loader plugin. But for now, fixes the
                        // common uses. Details in #1131
                        normalizedName = name.indexOf('!') === -1 ?
                                         normalize(name, parentName, applyMap) :
                                         name;
                    }
                } else {
                    //A regular module.
                    normalizedName = normalize(name, parentName, applyMap);

                    //Normalized name may be a plugin ID due to map config
                    //application in normalize. The map config values must
                    //already be normalized, so do not need to redo that part.
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;

                    url = context.nameToUrl(normalizedName);
                }
            }

            //If the id is a plugin id that cannot be determined if it needs
            //normalization, stamp it with a unique ID so two matching relative
            //ids that may conflict can be separate.
            suffix = prefix && !pluginModule && !isNormalized ?
                     '_unnormalized' + (unnormalizedCounter += 1) :
                     '';

            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ?
                        prefix + '!' + normalizedName :
                        normalizedName) + suffix
            };
        }

        function getModule(depMap) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (!mod) {
                mod = registry[id] = new context.Module(depMap);
            }

            return mod;
        }

        function on(depMap, name, fn) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (hasProp(defined, id) &&
                    (!mod || mod.defineEmitComplete)) {
                if (name === 'defined') {
                    fn(defined[id]);
                }
            } else {
                mod = getModule(depMap);
                if (mod.error && name === 'error') {
                    fn(mod.error);
                } else {
                    mod.on(name, fn);
                }
            }
        }

        function onError(err, errback) {
            var ids = err.requireModules,
                notified = false;

            if (errback) {
                errback(err);
            } else {
                each(ids, function (id) {
                    var mod = getOwn(registry, id);
                    if (mod) {
                        //Set error on module, so it skips timeout checks.
                        mod.error = err;
                        if (mod.events.error) {
                            notified = true;
                            mod.emit('error', err);
                        }
                    }
                });

                if (!notified) {
                    req.onError(err);
                }
            }
        }

        /**
         * Internal method to transfer globalQueue items to this context's
         * defQueue.
         */
        function takeGlobalQueue() {
            //Push all the globalDefQueue items into the context's defQueue
            if (globalDefQueue.length) {
                each(globalDefQueue, function(queueItem) {
                    var id = queueItem[0];
                    if (typeof id === 'string') {
                        context.defQueueMap[id] = true;
                    }
                    defQueue.push(queueItem);
                });
                globalDefQueue = [];
            }
        }

        handlers = {
            'require': function (mod) {
                if (mod.require) {
                    return mod.require;
                } else {
                    return (mod.require = context.makeRequire(mod.map));
                }
            },
            'exports': function (mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return (defined[mod.map.id] = mod.exports);
                    } else {
                        return (mod.exports = defined[mod.map.id] = {});
                    }
                }
            },
            'module': function (mod) {
                if (mod.module) {
                    return mod.module;
                } else {
                    return (mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function () {
                            return getOwn(config.config, mod.map.id) || {};
                        },
                        exports: mod.exports || (mod.exports = {})
                    });
                }
            }
        };

        function cleanRegistry(id) {
            //Clean up machinery used for waiting modules.
            delete registry[id];
            delete enabledRegistry[id];
        }

        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;

            if (mod.error) {
                mod.emit('error', mod.error);
            } else {
                traced[id] = true;
                each(mod.depMaps, function (depMap, i) {
                    var depId = depMap.id,
                        dep = getOwn(registry, depId);

                    //Only force things that have not completed
                    //being defined, so still in the registry,
                    //and only if it has not been matched up
                    //in the module already.
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check(); //pass false?
                        } else {
                            breakCycle(dep, traced, processed);
                        }
                    }
                });
                processed[id] = true;
            }
        }

        function checkLoaded() {
            var err, usingPathFallback,
                waitInterval = config.waitSeconds * 1000,
                //It is possible to disable the wait interval by using waitSeconds of 0.
                expired = waitInterval && (context.startTime + waitInterval) < new Date().getTime(),
                noLoads = [],
                reqCalls = [],
                stillLoading = false,
                needCycleCheck = true;

            //Do not bother if this call was a result of a cycle break.
            if (inCheckLoaded) {
                return;
            }

            inCheckLoaded = true;

            //Figure out the state of all the modules.
            eachProp(enabledRegistry, function (mod) {
                var map = mod.map,
                    modId = map.id;

                //Skip things that are not enabled or in error state.
                if (!mod.enabled) {
                    return;
                }

                if (!map.isDefine) {
                    reqCalls.push(mod);
                }

                if (!mod.error) {
                    //If the module should be executed, and it has not
                    //been inited and time is up, remember it.
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true;
                        } else {
                            noLoads.push(modId);
                            removeScript(modId);
                        }
                    } else if (!mod.inited && mod.fetched && map.isDefine) {
                        stillLoading = true;
                        if (!map.prefix) {
                            //No reason to keep looking for unfinished
                            //loading. If the only stillLoading is a
                            //plugin resource though, keep going,
                            //because it may be that a plugin resource
                            //is waiting on a non-plugin cycle.
                            return (needCycleCheck = false);
                        }
                    }
                }
            });

            if (expired && noLoads.length) {
                //If wait time expired, throw error of unloaded modules.
                err = makeError('timeout', 'Load timeout for modules: ' + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err);
            }

            //Not expired, check for a cycle.
            if (needCycleCheck) {
                each(reqCalls, function (mod) {
                    breakCycle(mod, {}, {});
                });
            }

            //If still waiting on loads, and the waiting load is something
            //other than a plugin resource, or there are still outstanding
            //scripts, then just try back later.
            if ((!expired || usingPathFallback) && stillLoading) {
                //Something is still waiting to load. Wait for it, but only
                //if a timeout is not already in effect.
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function () {
                        checkLoadedTimeoutId = 0;
                        checkLoaded();
                    }, 50);
                }
            }

            inCheckLoaded = false;
        }

        Module = function (map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0;

            /* this.exports this.factory
               this.depMaps = [],
               this.enabled, this.fetched
            */
        };

        Module.prototype = {
            init: function (depMaps, factory, errback, options) {
                options = options || {};

                //Do not do more inits if already done. Can happen if there
                //are multiple define calls for the same module. That is not
                //a normal, common case, but it is also not unexpected.
                if (this.inited) {
                    return;
                }

                this.factory = factory;

                if (errback) {
                    //Register for errors on this module.
                    this.on('error', errback);
                } else if (this.events.error) {
                    //If no errback already, but there are error listeners
                    //on this module, set up an errback to pass to the deps.
                    errback = bind(this, function (err) {
                        this.emit('error', err);
                    });
                }

                //Do a copy of the dependency array, so that
                //source inputs are not modified. For example
                //"shim" deps are passed in here directly, and
                //doing a direct modification of the depMaps array
                //would affect that config.
                this.depMaps = depMaps && depMaps.slice(0);

                this.errback = errback;

                //Indicate this module has be initialized
                this.inited = true;

                this.ignore = options.ignore;

                //Could have option to init this module in enabled mode,
                //or could have been previously marked as enabled. However,
                //the dependencies are not known until init is called. So
                //if enabled previously, now trigger dependencies as enabled.
                if (options.enabled || this.enabled) {
                    //Enable this module and dependencies.
                    //Will call this.check()
                    this.enable();
                } else {
                    this.check();
                }
            },

            defineDep: function (i, depExports) {
                //Because of cycles, defined callback for a given
                //export can be called more than once.
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports;
                }
            },

            fetch: function () {
                if (this.fetched) {
                    return;
                }
                this.fetched = true;

                context.startTime = (new Date()).getTime();

                var map = this.map;

                //If the manager is for a plugin managed resource,
                //ask the plugin to load it now.
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(this.shim.deps || [], bind(this, function () {
                        return map.prefix ? this.callPlugin() : this.load();
                    }));
                } else {
                    //Regular dependency.
                    return map.prefix ? this.callPlugin() : this.load();
                }
            },

            load: function () {
                var url = this.map.url;

                //Regular dependency.
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url);
                }
            },

            /**
             * Checks if the module is ready to define itself, and if so,
             * define it.
             */
            check: function () {
                if (!this.enabled || this.enabling) {
                    return;
                }

                var err, cjsModule,
                    id = this.map.id,
                    depExports = this.depExports,
                    exports = this.exports,
                    factory = this.factory;

                if (!this.inited) {
                    // Only fetch if not already in the defQueue.
                    if (!hasProp(context.defQueueMap, id)) {
                        this.fetch();
                    }
                } else if (this.error) {
                    this.emit('error', this.error);
                } else if (!this.defining) {
                    //The factory could trigger another require call
                    //that would result in checking this module to
                    //define itself again. If already in the process
                    //of doing that, skip this work.
                    this.defining = true;

                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(factory)) {
                            //If there is an error listener, favor passing
                            //to that instead of throwing an error. However,
                            //only do it for define()'d  modules. require
                            //errbacks should not be called for failures in
                            //their callbacks (#699). However if a global
                            //onError is set, use that.
                            if ((this.events.error && this.map.isDefine) ||
                                req.onError !== defaultOnError) {
                                try {
                                    exports = context.execCb(id, factory, depExports, exports);
                                } catch (e) {
                                    err = e;
                                }
                            } else {
                                exports = context.execCb(id, factory, depExports, exports);
                            }

                            // Favor return value over exports. If node/cjs in play,
                            // then will not have a return value anyway. Favor
                            // module.exports assignment over exports object.
                            if (this.map.isDefine && exports === undefined) {
                                cjsModule = this.module;
                                if (cjsModule) {
                                    exports = cjsModule.exports;
                                } else if (this.usingExports) {
                                    //exports already set the defined value.
                                    exports = this.exports;
                                }
                            }

                            if (err) {
                                err.requireMap = this.map;
                                err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                err.requireType = this.map.isDefine ? 'define' : 'require';
                                return onError((this.error = err));
                            }

                        } else {
                            //Just a literal value
                            exports = factory;
                        }

                        this.exports = exports;

                        if (this.map.isDefine && !this.ignore) {
                            defined[id] = exports;

                            if (req.onResourceLoad) {
                                var resLoadMaps = [];
                                each(this.depMaps, function (depMap) {
                                    resLoadMaps.push(depMap.normalizedMap || depMap);
                                });
                                req.onResourceLoad(context, this.map, resLoadMaps);
                            }
                        }

                        //Clean up
                        cleanRegistry(id);

                        this.defined = true;
                    }

                    //Finished the define stage. Allow calling check again
                    //to allow define notifications below in the case of a
                    //cycle.
                    this.defining = false;

                    if (this.defined && !this.defineEmitted) {
                        this.defineEmitted = true;
                        this.emit('defined', this.exports);
                        this.defineEmitComplete = true;
                    }

                }
            },

            callPlugin: function () {
                var map = this.map,
                    id = map.id,
                    //Map already normalized the prefix.
                    pluginMap = makeModuleMap(map.prefix);

                //Mark this as a dependency for this plugin, so it
                //can be traced for cycles.
                this.depMaps.push(pluginMap);

                on(pluginMap, 'defined', bind(this, function (plugin) {
                    var load, normalizedMap, normalizedMod,
                        bundleId = getOwn(bundlesMap, this.map.id),
                        name = this.map.name,
                        parentName = this.map.parentMap ? this.map.parentMap.name : null,
                        localRequire = context.makeRequire(map.parentMap, {
                            enableBuildCallback: true
                        });

                    //If current map is not normalized, wait for that
                    //normalized name to load instead of continuing.
                    if (this.map.unnormalized) {
                        //Normalize the ID if the plugin allows it.
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function (name) {
                                return normalize(name, parentName, true);
                            }) || '';
                        }

                        //prefix and name should already be normalized, no need
                        //for applying map config again either.
                        normalizedMap = makeModuleMap(map.prefix + '!' + name,
                                                      this.map.parentMap);
                        on(normalizedMap,
                            'defined', bind(this, function (value) {
                                this.map.normalizedMap = normalizedMap;
                                this.init([], function () { return value; }, null, {
                                    enabled: true,
                                    ignore: true
                                });
                            }));

                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            //Mark this as a dependency for this plugin, so it
                            //can be traced for cycles.
                            this.depMaps.push(normalizedMap);

                            if (this.events.error) {
                                normalizedMod.on('error', bind(this, function (err) {
                                    this.emit('error', err);
                                }));
                            }
                            normalizedMod.enable();
                        }

                        return;
                    }

                    //If a paths config, then just load that file instead to
                    //resolve the plugin, as it is built into that paths layer.
                    if (bundleId) {
                        this.map.url = context.nameToUrl(bundleId);
                        this.load();
                        return;
                    }

                    load = bind(this, function (value) {
                        this.init([], function () { return value; }, null, {
                            enabled: true
                        });
                    });

                    load.error = bind(this, function (err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];

                        //Remove temp unnormalized modules for this module,
                        //since they will never be resolved otherwise now.
                        eachProp(registry, function (mod) {
                            if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
                                cleanRegistry(mod.map.id);
                            }
                        });

                        onError(err);
                    });

                    //Allow plugins to load other code without having to know the
                    //context or how to 'complete' the load.
                    load.fromText = bind(this, function (text, textAlt) {
                        /*jslint evil: true */
                        var moduleName = map.name,
                            moduleMap = makeModuleMap(moduleName),
                            hasInteractive = useInteractive;

                        //As of 2.1.0, support just passing the text, to reinforce
                        //fromText only being called once per resource. Still
                        //support old style of passing moduleName but discard
                        //that moduleName in favor of the internal ref.
                        if (textAlt) {
                            text = textAlt;
                        }

                        //Turn off interactive script matching for IE for any define
                        //calls in the text, then turn it back on at the end.
                        if (hasInteractive) {
                            useInteractive = false;
                        }

                        //Prime the system by creating a module instance for
                        //it.
                        getModule(moduleMap);

                        //Transfer any config to this other module.
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id];
                        }

                        try {
                            req.exec(text);
                        } catch (e) {
                            return onError(makeError('fromtexteval',
                                             'fromText eval for ' + id +
                                            ' failed: ' + e,
                                             e,
                                             [id]));
                        }

                        if (hasInteractive) {
                            useInteractive = true;
                        }

                        //Mark this as a dependency for the plugin
                        //resource
                        this.depMaps.push(moduleMap);

                        //Support anonymous modules.
                        context.completeLoad(moduleName);

                        //Bind the value of that module to the value for this
                        //resource ID.
                        localRequire([moduleName], load);
                    });

                    //Use parentName here since the plugin's name is not reliable,
                    //could be some weird string with no path that actually wants to
                    //reference the parentName's path.
                    plugin.load(map.name, localRequire, load, config);
                }));

                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap;
            },

            enable: function () {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;

                //Set flag mentioning that the module is enabling,
                //so that immediate calls to the defined callbacks
                //for dependencies do not trigger inadvertent load
                //with the depCount still being zero.
                this.enabling = true;

                //Enable each dependency
                each(this.depMaps, bind(this, function (depMap, i) {
                    var id, mod, handler;

                    if (typeof depMap === 'string') {
                        //Dependency needs to be converted to a depMap
                        //and wired up to this module.
                        depMap = makeModuleMap(depMap,
                                               (this.map.isDefine ? this.map : this.map.parentMap),
                                               false,
                                               !this.skipMap);
                        this.depMaps[i] = depMap;

                        handler = getOwn(handlers, depMap.id);

                        if (handler) {
                            this.depExports[i] = handler(this);
                            return;
                        }

                        this.depCount += 1;

                        on(depMap, 'defined', bind(this, function (depExports) {
                            if (this.undefed) {
                                return;
                            }
                            this.defineDep(i, depExports);
                            this.check();
                        }));

                        if (this.errback) {
                            on(depMap, 'error', bind(this, this.errback));
                        } else if (this.events.error) {
                            // No direct errback on this module, but something
                            // else is listening for errors, so be sure to
                            // propagate the error correctly.
                            on(depMap, 'error', bind(this, function(err) {
                                this.emit('error', err);
                            }));
                        }
                    }

                    id = depMap.id;
                    mod = registry[id];

                    //Skip special modules like 'require', 'exports', 'module'
                    //Also, don't call enable if it is already enabled,
                    //important in circular dependency cases.
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this);
                    }
                }));

                //Enable each plugin that is used in
                //a dependency
                eachProp(this.pluginMaps, bind(this, function (pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this);
                    }
                }));

                this.enabling = false;

                this.check();
            },

            on: function (name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = [];
                }
                cbs.push(cb);
            },

            emit: function (name, evt) {
                each(this.events[name], function (cb) {
                    cb(evt);
                });
                if (name === 'error') {
                    //Now that the error handler was triggered, remove
                    //the listeners, since this broken Module instance
                    //can stay around for a while in the registry.
                    delete this.events[name];
                }
            }
        };

        function callGetModule(args) {
            //Skip modules already defined.
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
            }
        }

        function removeListener(node, func, name, ieName) {
            //Favor detachEvent because of IE9
            //issue, see attachEvent/addEventListener comment elsewhere
            //in this file.
            if (node.detachEvent && !isOpera) {
                //Probably IE. If not it will throw an error, which will be
                //useful to know.
                if (ieName) {
                    node.detachEvent(ieName, func);
                }
            } else {
                node.removeEventListener(name, func, false);
            }
        }

        /**
         * Given an event from a script node, get the requirejs info from it,
         * and then removes the event listeners on the node.
         * @param {Event} evt
         * @returns {Object}
         */
        function getScriptData(evt) {
            //Using currentTarget instead of target for Firefox 2.0's sake. Not
            //all old browsers will be supported, but this one was easy enough
            //to support and still makes sense.
            var node = evt.currentTarget || evt.srcElement;

            //Remove the listeners once here.
            removeListener(node, context.onScriptLoad, 'load', 'onreadystatechange');
            removeListener(node, context.onScriptError, 'error');

            return {
                node: node,
                id: node && node.getAttribute('data-requiremodule')
            };
        }

        function intakeDefines() {
            var args;

            //Any defined modules in the global queue, intake them now.
            takeGlobalQueue();

            //Make sure any remaining defQueue items get properly processed.
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError('mismatch', 'Mismatched anonymous define() module: ' +
                        args[args.length - 1]));
                } else {
                    //args are id, deps, factory. Should be normalized by the
                    //define() function.
                    callGetModule(args);
                }
            }
            context.defQueueMap = {};
        }

        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            defQueueMap: {},
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,

            /**
             * Set a configuration for the context.
             * @param {Object} cfg config object to integrate.
             */
            configure: function (cfg) {
                //Make sure the baseUrl ends in a slash.
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
                        cfg.baseUrl += '/';
                    }
                }

                // Convert old style urlArgs string to a function.
                if (typeof cfg.urlArgs === 'string') {
                    var urlArgs = cfg.urlArgs;
                    cfg.urlArgs = function(id, url) {
                        return (url.indexOf('?') === -1 ? '?' : '&') + urlArgs;
                    };
                }

                //Save off the paths since they require special processing,
                //they are additive.
                var shim = config.shim,
                    objs = {
                        paths: true,
                        bundles: true,
                        config: true,
                        map: true
                    };

                eachProp(cfg, function (value, prop) {
                    if (objs[prop]) {
                        if (!config[prop]) {
                            config[prop] = {};
                        }
                        mixin(config[prop], value, true, true);
                    } else {
                        config[prop] = value;
                    }
                });

                //Reverse map the bundles
                if (cfg.bundles) {
                    eachProp(cfg.bundles, function (value, prop) {
                        each(value, function (v) {
                            if (v !== prop) {
                                bundlesMap[v] = prop;
                            }
                        });
                    });
                }

                //Merge shim
                if (cfg.shim) {
                    eachProp(cfg.shim, function (value, id) {
                        //Normalize the structure
                        if (isArray(value)) {
                            value = {
                                deps: value
                            };
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value);
                        }
                        shim[id] = value;
                    });
                    config.shim = shim;
                }

                //Adjust packages if necessary.
                if (cfg.packages) {
                    each(cfg.packages, function (pkgObj) {
                        var location, name;

                        pkgObj = typeof pkgObj === 'string' ? {name: pkgObj} : pkgObj;

                        name = pkgObj.name;
                        location = pkgObj.location;
                        if (location) {
                            config.paths[name] = pkgObj.location;
                        }

                        //Save pointer to main module ID for pkg name.
                        //Remove leading dot in main, so main paths are normalized,
                        //and remove any trailing .js, since different package
                        //envs have different conventions: some use a module name,
                        //some use a file name.
                        config.pkgs[name] = pkgObj.name + '/' + (pkgObj.main || 'main')
                                     .replace(currDirRegExp, '')
                                     .replace(jsSuffixRegExp, '');
                    });
                }

                //If there are any "waiting to execute" modules in the registry,
                //update the maps for them, since their info, like URLs to load,
                //may have changed.
                eachProp(registry, function (mod, id) {
                    //If module already has init called, since it is too
                    //late to modify them, and ignore unnormalized ones
                    //since they are transient.
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id, null, true);
                    }
                });

                //If a deps array or a config callback is specified, then call
                //require with those args. This is useful when require is defined as a
                //config object before require.js is loaded.
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback);
                }
            },

            makeShimExports: function (value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments);
                    }
                    return ret || (value.exports && getGlobal(value.exports));
                }
                return fn;
            },

            makeRequire: function (relMap, options) {
                options = options || {};

                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;

                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true;
                    }

                    if (typeof deps === 'string') {
                        if (isFunction(callback)) {
                            //Invalid call
                            return onError(makeError('requireargs', 'Invalid require call'), errback);
                        }

                        //If require|exports|module are requested, get the
                        //value for them from the special handlers. Caveat:
                        //this only works while module is being defined.
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id]);
                        }

                        //Synchronous access to one module. If require.get is
                        //available (as in the Node adapter), prefer that.
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire);
                        }

                        //Normalize module name, if it contains . or ..
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;

                        if (!hasProp(defined, id)) {
                            return onError(makeError('notloaded', 'Module name "' +
                                        id +
                                        '" has not been loaded yet for context: ' +
                                        contextName +
                                        (relMap ? '' : '. Use require([])')));
                        }
                        return defined[id];
                    }

                    //Grab defines waiting in the global queue.
                    intakeDefines();

                    //Mark all the dependencies as needing to be loaded.
                    context.nextTick(function () {
                        //Some defines could have been added since the
                        //require call, collect them.
                        intakeDefines();

                        requireMod = getModule(makeModuleMap(null, relMap));

                        //Store if map config should be applied to this require
                        //call for dependencies.
                        requireMod.skipMap = options.skipMap;

                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        });

                        checkLoaded();
                    });

                    return localRequire;
                }

                mixin(localRequire, {
                    isBrowser: isBrowser,

                    /**
                     * Converts a module name + .extension into an URL path.
                     * *Requires* the use of a module name. It does not support using
                     * plain URLs like nameToUrl.
                     */
                    toUrl: function (moduleNamePlusExt) {
                        var ext,
                            index = moduleNamePlusExt.lastIndexOf('.'),
                            segment = moduleNamePlusExt.split('/')[0],
                            isRelative = segment === '.' || segment === '..';

                        //Have a file extension alias, and it is not the
                        //dots from a relative path.
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
                        }

                        return context.nameToUrl(normalize(moduleNamePlusExt,
                                                relMap && relMap.id, true), ext,  true);
                    },

                    defined: function (id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id);
                    },

                    specified: function (id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id);
                    }
                });

                //Only allow undef on top level require calls
                if (!relMap) {
                    localRequire.undef = function (id) {
                        //Bind any waiting define() calls to this context,
                        //fix for #408
                        takeGlobalQueue();

                        var map = makeModuleMap(id, relMap, true),
                            mod = getOwn(registry, id);

                        mod.undefed = true;
                        removeScript(id);

                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];

                        //Clean queued defines too. Go backwards
                        //in array so that the splices do not
                        //mess up the iteration.
                        eachReverse(defQueue, function(args, i) {
                            if (args[0] === id) {
                                defQueue.splice(i, 1);
                            }
                        });
                        delete context.defQueueMap[id];

                        if (mod) {
                            //Hold on to listeners in case the
                            //module will be attempted to be reloaded
                            //using a different config.
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events;
                            }

                            cleanRegistry(id);
                        }
                    };
                }

                return localRequire;
            },

            /**
             * Called to enable a module if it is still in the registry
             * awaiting enablement. A second arg, parent, the parent module,
             * is passed in for context, when this method is overridden by
             * the optimizer. Not shown here to keep code compact.
             */
            enable: function (depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable();
                }
            },

            /**
             * Internal method used by environment adapters to complete a load event.
             * A load event could be a script load or just a load pass from a synchronous
             * load call.
             * @param {String} moduleName the name of the module to potentially complete.
             */
            completeLoad: function (moduleName) {
                var found, args, mod,
                    shim = getOwn(config.shim, moduleName) || {},
                    shExports = shim.exports;

                takeGlobalQueue();

                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        //If already found an anonymous module and bound it
                        //to this name, then this is some other anon module
                        //waiting for its completeLoad to fire.
                        if (found) {
                            break;
                        }
                        found = true;
                    } else if (args[0] === moduleName) {
                        //Found matching define call for this script!
                        found = true;
                    }

                    callGetModule(args);
                }
                context.defQueueMap = {};

                //Do this after the cycle of callGetModule in case the result
                //of those calls/init calls changes the registry.
                mod = getOwn(registry, moduleName);

                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return;
                        } else {
                            return onError(makeError('nodefine',
                                             'No define call for ' + moduleName,
                                             null,
                                             [moduleName]));
                        }
                    } else {
                        //A script that does not call define(), so just simulate
                        //the call for it.
                        callGetModule([moduleName, (shim.deps || []), shim.exportsFn]);
                    }
                }

                checkLoaded();
            },

            /**
             * Converts a module name to a file path. Supports cases where
             * moduleName may actually be just an URL.
             * Note that it **does not** call normalize on the moduleName,
             * it is assumed to have already been normalized. This is an
             * internal API, not a public one. Use toUrl for the public API.
             */
            nameToUrl: function (moduleName, ext, skipExt) {
                var paths, syms, i, parentModule, url,
                    parentPath, bundleId,
                    pkgMain = getOwn(config.pkgs, moduleName);

                if (pkgMain) {
                    moduleName = pkgMain;
                }

                bundleId = getOwn(bundlesMap, moduleName);

                if (bundleId) {
                    return context.nameToUrl(bundleId, ext, skipExt);
                }

                //If a colon is in the URL, it indicates a protocol is used and it is just
                //an URL to a file, or if it starts with a slash, contains a query arg (i.e. ?)
                //or ends with .js, then assume the user meant to use an url and not a module id.
                //The slash is important for protocol-less URLs as well as full paths.
                if (req.jsExtRegExp.test(moduleName)) {
                    //Just a plain path, not module name lookup, so just return it.
                    //Add extension if it is included. This is a bit wonky, only non-.js things pass
                    //an extension, this method probably needs to be reworked.
                    url = moduleName + (ext || '');
                } else {
                    //A module that needs to be converted to a path.
                    paths = config.paths;

                    syms = moduleName.split('/');
                    //For each module name segment, see if there is a path
                    //registered for it. Start with most specific name
                    //and work up from it.
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join('/');

                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            //If an array, it means there are a few choices,
                            //Choose the one that is desired
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0];
                            }
                            syms.splice(0, i, parentPath);
                            break;
                        }
                    }

                    //Join the path parts together, then figure out if baseUrl is needed.
                    url = syms.join('/');
                    url += (ext || (/^data\:|^blob\:|\?/.test(url) || skipExt ? '' : '.js'));
                    url = (url.charAt(0) === '/' || url.match(/^[\w\+\.\-]+:/) ? '' : config.baseUrl) + url;
                }

                return config.urlArgs && !/^blob\:/.test(url) ?
                       url + config.urlArgs(moduleName, url) : url;
            },

            //Delegates to req.load. Broken out as a separate function to
            //allow overriding in the optimizer.
            load: function (id, url) {
                req.load(context, id, url);
            },

            /**
             * Executes a module callback function. Broken out as a separate function
             * solely to allow the build system to sequence the files in the built
             * layer in the right sequence.
             *
             * @private
             */
            execCb: function (name, callback, args, exports) {
                return callback.apply(exports, args);
            },

            /**
             * callback for script loads, used to check status of loading.
             *
             * @param {Event} evt the event from the browser for the script
             * that was loaded.
             */
            onScriptLoad: function (evt) {
                //Using currentTarget instead of target for Firefox 2.0's sake. Not
                //all old browsers will be supported, but this one was easy enough
                //to support and still makes sense.
                if (evt.type === 'load' ||
                        (readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
                    //Reset interactive script so a script node is not held onto for
                    //to long.
                    interactiveScript = null;

                    //Pull out the name of the module and the context.
                    var data = getScriptData(evt);
                    context.completeLoad(data.id);
                }
            },

            /**
             * Callback for script errors.
             */
            onScriptError: function (evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    var parents = [];
                    eachProp(registry, function(value, key) {
                        if (key.indexOf('_@r') !== 0) {
                            each(value.depMaps, function(depMap) {
                                if (depMap.id === data.id) {
                                    parents.push(key);
                                    return true;
                                }
                            });
                        }
                    });
                    return onError(makeError('scripterror', 'Script error for "' + data.id +
                                             (parents.length ?
                                             '", needed by: ' + parents.join(', ') :
                                             '"'), evt, [data.id]));
                }
            }
        };

        context.require = context.makeRequire();
        return context;
    }

    /**
     * Main entry point.
     *
     * If the only argument to require is a string, then the module that
     * is represented by that string is fetched for the appropriate context.
     *
     * If the first argument is an array, then it will be treated as an array
     * of dependency string names to fetch. An optional function callback can
     * be specified to execute when all of those dependencies are available.
     *
     * Make a local req variable to help Caja compliance (it assumes things
     * on a require that are not standardized), and to give a short
     * name for minification/local scope use.
     */
    req = requirejs = function (deps, callback, errback, optional) {

        //Find the right context, use default
        var context, config,
            contextName = defContextName;

        // Determine if have config object in the call.
        if (!isArray(deps) && typeof deps !== 'string') {
            // deps is a config object
            config = deps;
            if (isArray(callback)) {
                // Adjust args if there are dependencies
                deps = callback;
                callback = errback;
                errback = optional;
            } else {
                deps = [];
            }
        }

        if (config && config.context) {
            contextName = config.context;
        }

        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName);
        }

        if (config) {
            context.configure(config);
        }

        return context.require(deps, callback, errback);
    };

    /**
     * Support require.config() to make it easier to cooperate with other
     * AMD loaders on globally agreed names.
     */
    req.config = function (config) {
        return req(config);
    };

    /**
     * Execute something after the current tick
     * of the event loop. Override for other envs
     * that have a better solution than setTimeout.
     * @param  {Function} fn function to execute later.
     */
    req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
        setTimeout(fn, 4);
    } : function (fn) { fn(); };

    /**
     * Export require as a global, but only if it does not already exist.
     */
    if (!require) {
        require = req;
    }

    req.version = version;

    //Used to filter out dependencies that are already paths.
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    };

    //Create default context.
    req({});

    //Exports some context-sensitive methods on global require.
    each([
        'toUrl',
        'undef',
        'defined',
        'specified'
    ], function (prop) {
        //Reference from contexts instead of early binding to default context,
        //so that during builds, the latest instance of the default context
        //with its config gets used.
        req[prop] = function () {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments);
        };
    });

    if (isBrowser) {
        head = s.head = document.getElementsByTagName('head')[0];
        //If BASE tag is in play, using appendChild is a problem for IE6.
        //When that browser dies, this can be removed. Details in this jQuery bug:
        //http://dev.jquery.com/ticket/2709
        baseElement = document.getElementsByTagName('base')[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode;
        }
    }

    /**
     * Any errors that require explicitly generates will be passed to this
     * function. Intercept/override it if you want custom error handling.
     * @param {Error} err the error object.
     */
    req.onError = defaultOnError;

    /**
     * Creates the node for the load command. Only used in browser envs.
     */
    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ?
                document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') :
                document.createElement('script');
        node.type = config.scriptType || 'text/javascript';
        node.charset = 'utf-8';
        node.async = true;
        return node;
    };

    /**
     * Does the request to load a module for the browser case.
     * Make this a separate function to allow other environments
     * to override it.
     *
     * @param {Object} context the require context to find state.
     * @param {String} moduleName the name of the module.
     * @param {Object} url the URL to the module.
     */
    req.load = function (context, moduleName, url) {
        var config = (context && context.config) || {},
            node;
        if (isBrowser) {
            //In the browser so use a script tag
            node = req.createNode(config, moduleName, url);

            node.setAttribute('data-requirecontext', context.contextName);
            node.setAttribute('data-requiremodule', moduleName);

            //Set up load listener. Test attachEvent first because IE9 has
            //a subtle issue in its addEventListener and script onload firings
            //that do not match the behavior of all other browsers with
            //addEventListener support, which fire the onload event for a
            //script right after the script execution. See:
            //https://connect.microsoft.com/IE/feedback/details/648057/script-onload-event-is-not-fired-immediately-after-script-execution
            //UNFORTUNATELY Opera implements attachEvent but does not follow the script
            //script execution mode.
            if (node.attachEvent &&
                    //Check if node.attachEvent is artificially added by custom script or
                    //natively supported by browser
                    //read https://github.com/requirejs/requirejs/issues/187
                    //if we can NOT find [native code] then it must NOT natively supported.
                    //in IE8, node.attachEvent does not have toString()
                    //Note the test for "[native code" with no closing brace, see:
                    //https://github.com/requirejs/requirejs/issues/273
                    !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
                    !isOpera) {
                //Probably IE. IE (at least 6-8) do not fire
                //script onload right after executing the script, so
                //we cannot tie the anonymous define call to a name.
                //However, IE reports the script as being in 'interactive'
                //readyState at the time of the define call.
                useInteractive = true;

                node.attachEvent('onreadystatechange', context.onScriptLoad);
                //It would be great to add an error handler here to catch
                //404s in IE9+. However, onreadystatechange will fire before
                //the error handler, so that does not help. If addEventListener
                //is used, then IE will fire error before load, but we cannot
                //use that pathway given the connect.microsoft.com issue
                //mentioned above about not doing the 'script execute,
                //then fire the script load event listener before execute
                //next script' that other browsers do.
                //Best hope: IE10 fixes the issues,
                //and then destroys all installs of IE 6-9.
                //node.attachEvent('onerror', context.onScriptError);
            } else {
                node.addEventListener('load', context.onScriptLoad, false);
                node.addEventListener('error', context.onScriptError, false);
            }
            node.src = url;

            //Calling onNodeCreated after all properties on the node have been
            //set, but before it is placed in the DOM.
            if (config.onNodeCreated) {
                config.onNodeCreated(node, config, moduleName, url);
            }

            //For some cache cases in IE 6-8, the script executes before the end
            //of the appendChild execution, so to tie an anonymous define
            //call to the module name (which is stored on the node), hold on
            //to a reference to this node, but clear after the DOM insertion.
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement);
            } else {
                head.appendChild(node);
            }
            currentlyAddingScript = null;

            return node;
        } else if (isWebWorker) {
            try {
                //In a web worker, use importScripts. This is not a very
                //efficient use of importScripts, importScripts will block until
                //its script is downloaded and evaluated. However, if web workers
                //are in play, the expectation is that a build has been done so
                //that only one script needs to be loaded anyway. This may need
                //to be reevaluated if other use cases become common.

                // Post a task to the event loop to work around a bug in WebKit
                // where the worker gets garbage-collected after calling
                // importScripts(): https://webkit.org/b/153317
                setTimeout(function() {}, 0);
                importScripts(url);

                //Account for anonymous modules
                context.completeLoad(moduleName);
            } catch (e) {
                context.onError(makeError('importscripts',
                                'importScripts failed for ' +
                                    moduleName + ' at ' + url,
                                e,
                                [moduleName]));
            }
        }
    };

    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === 'interactive') {
            return interactiveScript;
        }

        eachReverse(scripts(), function (script) {
            if (script.readyState === 'interactive') {
                return (interactiveScript = script);
            }
        });
        return interactiveScript;
    }

    //Look for a data-main script attribute, which could also adjust the baseUrl.
    if (isBrowser && !cfg.skipDataMain) {
        //Figure out baseUrl. Get it from the script tag with require.js in it.
        eachReverse(scripts(), function (script) {
            //Set the 'head' where we can append children by
            //using the script's parent.
            if (!head) {
                head = script.parentNode;
            }

            //Look for a data-main attribute to set main script for the page
            //to load. If it is there, the path to data main becomes the
            //baseUrl, if it is not already set.
            dataMain = script.getAttribute('data-main');
            if (dataMain) {
                //Preserve dataMain in case it is a path (i.e. contains '?')
                mainScript = dataMain;

                //Set final baseUrl if there is not already an explicit one,
                //but only do so if the data-main value is not a loader plugin
                //module ID.
                if (!cfg.baseUrl && mainScript.indexOf('!') === -1) {
                    //Pull off the directory of data-main for use as the
                    //baseUrl.
                    src = mainScript.split('/');
                    mainScript = src.pop();
                    subPath = src.length ? src.join('/')  + '/' : './';

                    cfg.baseUrl = subPath;
                }

                //Strip off any trailing .js since mainScript is now
                //like a module name.
                mainScript = mainScript.replace(jsSuffixRegExp, '');

                //If mainScript is still a path, fall back to dataMain
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain;
                }

                //Put the data-main script in the files to load.
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];

                return true;
            }
        });
    }

    /**
     * The function that handles definitions of modules. Differs from
     * require() in that a string for the module should be the first argument,
     * and the function to execute after dependencies are loaded should
     * return a value to define the module corresponding to the first argument's
     * name.
     */
    define = function (name, deps, callback) {
        var node, context;

        //Allow for anonymous modules
        if (typeof name !== 'string') {
            //Adjust args appropriately
            callback = deps;
            deps = name;
            name = null;
        }

        //This module may not have dependencies
        if (!isArray(deps)) {
            callback = deps;
            deps = null;
        }

        //If no name, and callback is a function, then figure out if it a
        //CommonJS thing with dependencies.
        if (!deps && isFunction(callback)) {
            deps = [];
            //Remove comments from the callback string,
            //look for require calls, and pull them into the dependencies,
            //but only if there are function args.
            if (callback.length) {
                callback
                    .toString()
                    .replace(commentRegExp, commentReplace)
                    .replace(cjsRequireRegExp, function (match, dep) {
                        deps.push(dep);
                    });

                //May be a CommonJS thing even without require calls, but still
                //could use exports, and module. Avoid doing exports and module
                //work though if it just needs require.
                //REQUIRES the function to expect the CommonJS variables in the
                //order listed below.
                deps = (callback.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(deps);
            }
        }

        //If in IE 6-8 and hit an anonymous define() call, do the interactive
        //work.
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute('data-requiremodule');
                }
                context = contexts[node.getAttribute('data-requirecontext')];
            }
        }

        //Always save off evaluating the def call until the script onload handler.
        //This allows multiple modules to be in a file without prematurely
        //tracing dependencies, and allows for anonymous module support,
        //where the module name is not known until the script onload event
        //occurs. If no context, use the global queue, and get it processed
        //in the onscript load callback.
        if (context) {
            context.defQueue.push([name, deps, callback]);
            context.defQueueMap[name] = true;
        } else {
            globalDefQueue.push([name, deps, callback]);
        }
    };

    define.amd = {
        jQuery: true
    };

    /**
     * Executes the text. Normally just uses eval, but can be modified
     * to use a better, environment-specific call. Only used for transpiling
     * loader plugins, not for plain JS modules.
     * @param {String} text the text to execute/evaluate.
     */
    req.exec = function (text) {
        /*jslint evil: true */
        return eval(text);
    };

    //Set up with config info.
    req(cfg);
}(this));

requirejs.config({
    baseUrl: PORTAL_URL,
    paths: {
    "ace-mode-css": "++plone++static/components/ace-builds/src/mode-css",
    "ace-mode-javascript": "++plone++static/components/ace-builds/src/mode-javascript",
    "ace-mode-text": "++plone++static/components/ace-builds/src/mode-text",
    "ace-theme-monokai": "++plone++static/components/ace-builds/src/theme-monokai",
    "ace": "++plone++static/components/ace-builds/src/ace",
    "backbone": "++plone++static/components/backbone/backbone",
    "backbone.paginator": "++plone++static/components/backbone.paginator/lib/backbone.paginator",
    "bootstrap-alert": "++plone++static/components/bootstrap/js/alert",
    "bootstrap-collapse": "++plone++static/components/bootstrap/js/collapse",
    "bootstrap-dropdown": "++plone++static/components/bootstrap/js/dropdown",
    "bootstrap-tooltip": "++plone++static/components/bootstrap/js/tooltip",
    "bootstrap-transition": "++plone++static/components/bootstrap/js/transition",
    "datatables.net-autofill-bs": "++plone++static/components/datatables.net-autofill-bs/js/autoFill.bootstrap",
    "datatables.net-autofill": "++plone++static/components/datatables.net-autofill/js/dataTables.autoFill.min",
    "datatables.net-bs": "++plone++static/components/datatables.net-bs/js/dataTables.bootstrap",
    "datatables.net-buttons-bs": "++plone++static/components/datatables.net-buttons-bs/js/buttons.bootstrap.min",
    "datatables.net-buttons-colvis": "++plone++static/components/datatables.net-buttons/js/buttons.colVis.min",
    "datatables.net-buttons-flash": "++plone++static/components/datatables.net-buttons/js/buttons.flash.min",
    "datatables.net-buttons-html5": "++plone++static/components/datatables.net-buttons/js/buttons.html5.min",
    "datatables.net-buttons-print": "++plone++static/components/datatables.net-buttons/js/buttons.print.min",
    "datatables.net-buttons": "++plone++static/components/datatables.net-buttons/js/dataTables.buttons.min",
    "datatables.net-colreorder": "++plone++static/components/datatables.net-colreorder/js/dataTables.colReorder.min",
    "datatables.net-fixedcolumns": "++plone++static/components/datatables.net-fixedcolumns/js/dataTables.fixedColumns.min",
    "datatables.net-fixedheader": "++plone++static/components/datatables.net-fixedheader/js/dataTables.fixedHeader.min",
    "datatables.net-keytable": "++plone++static/components/datatables.net-keytable/js/dataTables.keyTable.min",
    "datatables.net-responsive-bs": "++plone++static/components/datatables.net-responsive-bs/js/responsive.bootstrap.min",
    "datatables.net-responsive": "++plone++static/components/datatables.net-responsive/js/dataTables.responsive.min",
    "datatables.net-rowreorder": "++plone++static/components/datatables.net-rowreorder/js/dataTables.rowReorder.min",
    "datatables.net-scroller": "++plone++static/components/datatables.net-scroller/js/dataTables.scroller.min",
    "datatables.net-select": "++plone++static/components/datatables.net-select/js/dataTables.select.min",
    "datatables.net": "++plone++static/components/datatables.net/js/jquery.dataTables",
    "dropzone": "++plone++static/components/dropzone/dist/dropzone-amd-module",
    "filemanager": "++plone++static/filemanager",
    "jqtree-contextmenu": "++plone++static/components/cs-jqtree-contextmenu/src/jqTreeContextMenu",
    "jqtree": "++plone++static/components/jqtree/tree.jquery",
    "jquery.browser": "++plone++static/components/jquery.browser/dist/jquery.browser",
    "jquery": "++plone++static/components/jquery/dist/jquery.min",
    "jquery.cookie": "++plone++static/components/jquery.cookie/jquery.cookie",
    "jquery.event.drag": "++resource++mockuplib/jquery.event.drag",
    "jquery.event.drop": "++resource++mockuplib/jquery.event.drop",
    "jquery.form": "++plone++static/components/jquery-form/jquery.form",
    "jquery.recurrenceinput": "++plone++static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput",
    "jquery.tmpl": "++plone++static/components/jquery.recurrenceinput.js/lib/jquery.tmpl",
    "less": "++plone++static/components/less/dist/less",
    "logging": "++plone++static/components/logging/src/logging",
    "mockup-i18n": "++resource++mockupjs/i18n",
    "mockup-patterns-autotoc": "++resource++mockup/autotoc/pattern",
    "mockup-patterns-backdrop": "++resource++mockup/backdrop/pattern",
    "mockup-patterns-base": "++resource++mockup/base/pattern",
    "mockup-patterns-contentloader": "++resource++mockup/contentloader/pattern",
    "mockup-patterns-cookietrigger": "++resource++mockup/cookietrigger/pattern",
    "mockup-patterns-datatables": "++resource++mockup/datatables/pattern",
    "mockup-patterns-filemanager": "++resource++mockup/filemanager/pattern",
    "mockup-patterns-filemanager-url": "++resource++mockup/filemanager",
    "mockup-patterns-formautofocus": "++resource++mockup/formautofocus/pattern",
    "mockup-patterns-formunloadalert": "++resource++mockup/formunloadalert/pattern",
    "mockup-patterns-inlinevalidation": "++resource++mockup/inlinevalidation/pattern",
    "mockup-patterns-livesearch": "++resource++mockup/livesearch/pattern",
    "mockup-patterns-markspeciallinks": "++resource++mockup/markspeciallinks/pattern",
    "mockup-patterns-modal": "++resource++mockup/modal/pattern",
    "mockup-patterns-moment": "++resource++mockup/moment/pattern",
    "mockup-patterns-navigationmarker": "++resource++mockup/navigationmarker/pattern",
    "mockup-patterns-pickadate": "++resource++mockup/pickadate/pattern",
    "mockup-patterns-preventdoublesubmit": "++resource++mockup/preventdoublesubmit/pattern",
    "mockup-patterns-querystring": "++resource++mockup/querystring/pattern",
    "mockup-patterns-recurrence": "++resource++mockup/recurrence/pattern",
    "mockup-patterns-relateditems-upload": "++resource++mockup/relateditems/upload",
    "mockup-patterns-relateditems": "++resource++mockup/relateditems/pattern",
    "mockup-patterns-relateditems-url": "++resource++mockup/relateditems",
    "mockup-patterns-resourceregistry": "++resource++mockup/resourceregistry/pattern",
    "mockup-patterns-resourceregistry-url": "++resource++mockup/resourceregistry",
    "mockup-patterns-select2": "++resource++mockup/select2/pattern",
    "mockup-patterns-sortable": "++resource++mockup/sortable/pattern",
    "mockup-patterns-structure": "++resource++mockup/structure/pattern",
    "mockup-patterns-structure-url": "++resource++mockup/structure",
    "mockup-patterns-structureupdater": "++resource++collective.sidebar/mockup-patterns-structureupdater.min",
    "mockup-patterns-textareamimetypeselector": "++resource++mockup/textareamimetypeselector/pattern",
    "mockup-patterns-texteditor": "++resource++mockup/texteditor/pattern",
    "mockup-patterns-thememapper": "++resource++mockup/thememapper/pattern",
    "mockup-patterns-thememapper-url": "++resource++mockup/thememapper",
    "mockup-patterns-tinymce": "++resource++mockup/tinymce/pattern",
    "mockup-patterns-tinymce-url": "++resource++mockup/tinymce",
    "mockup-patterns-toggle": "++resource++mockup/toggle/pattern",
    "mockup-patterns-tooltip": "++resource++mockup/tooltip/pattern",
    "mockup-patterns-tree": "++resource++mockup/tree/pattern",
    "mockup-patterns-upload": "++resource++mockup/upload/pattern",
    "mockup-patterns-upload-url": "++resource++mockup/upload",
    "mockup-router": "++resource++mockupjs/router",
    "mockup-ui-url": "++resource++mockupjs/ui",
    "mockup-utils": "++resource++mockupjs/utils",
    "moment": "++plone++static/components/moment/min/moment.min",
    "moment-url": "++plone++static/components/moment/locale",
    "pat-base": "++plone++static/components/patternslib/src/core/base",
    "pat-compat": "++plone++static/components/patternslib/src/core/compat",
    "pat-jquery-ext": "++plone++static/components/patternslib/src/core/jquery-ext",
    "pat-logger": "++plone++static/components/patternslib/src/core/logger",
    "pat-mockup-parser": "++plone++static/components/patternslib/src/core/mockup-parser",
    "pat-registry": "++plone++static/components/patternslib/src/core/registry",
    "pat-utils": "++plone++static/components/patternslib/src/core/utils",
    "picker": "++plone++static/components/pickadate/lib/picker",
    "picker.date": "++plone++static/components/pickadate/lib/picker.date",
    "picker.time": "++plone++static/components/pickadate/lib/picker.time",
    "plone-app-discussion": "++plone++plone.app.discussion.javascripts/comments",
    "plone-app-event": "++plone++plone.app.event/event",
    "plone-base": "++resource++plone-base",
    "plone-logged-in": "++resource++plone-logged-in",
    "plone-patterns-portletmanager": "++resource++manage-portlets",
    "plone-patterns-toolbar": "++resource++mockup/toolbar/pattern",
    "plone": "++resource++plone",
    "resource-plone-app-jquerytools-dateinput-js": "++plone++static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput",
    "resource-plone-app-jquerytools-js": "++plone++static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay",
    "resourceregistry": "++plone++static/resourceregistry",
    "select2": "++plone++static/components/select2/select2",
    "siguv": "++theme++plonetheme.siguv/js/siguv",
    "text": "++plone++static/components/requirejs-text/text",
    "thememapper": "++plone++static/thememapper",
    "tinymce-advlist": "++plone++static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin",
    "tinymce-anchor": "++plone++static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin",
    "tinymce-autolink": "++plone++static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin",
    "tinymce-autoresize": "++plone++static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin",
    "tinymce-autosave": "++plone++static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin",
    "tinymce-bbcode": "++plone++static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin",
    "tinymce-charmap": "++plone++static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin",
    "tinymce-code": "++plone++static/components/tinymce-builded/js/tinymce/plugins/code/plugin",
    "tinymce-colorpicker": "++plone++static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin",
    "tinymce-compat3x": "++plone++static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin",
    "tinymce-contextmenu": "++plone++static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin",
    "tinymce-directionality": "++plone++static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin",
    "tinymce-emoticons": "++plone++static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin",
    "tinymce-fullpage": "++plone++static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin",
    "tinymce-fullscreen": "++plone++static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin",
    "tinymce-hr": "++plone++static/components/tinymce-builded/js/tinymce/plugins/hr/plugin",
    "tinymce-image": "++plone++static/components/tinymce-builded/js/tinymce/plugins/image/plugin",
    "tinymce-importcss": "++plone++static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin",
    "tinymce-insertdatetime": "++plone++static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin",
    "tinymce-legacyoutput": "++plone++static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin",
    "tinymce-link": "++plone++static/components/tinymce-builded/js/tinymce/plugins/link/plugin",
    "tinymce-lists": "++plone++static/components/tinymce-builded/js/tinymce/plugins/lists/plugin",
    "tinymce-media": "++plone++static/components/tinymce-builded/js/tinymce/plugins/media/plugin",
    "tinymce-modern-theme": "++plone++static/components/tinymce-builded/js/tinymce/themes/modern/theme",
    "tinymce-nonbreaking": "++plone++static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin",
    "tinymce-noneditable": "++plone++static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin",
    "tinymce-pagebreak": "++plone++static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin",
    "tinymce-paste": "++plone++static/components/tinymce-builded/js/tinymce/plugins/paste/plugin",
    "tinymce-preview": "++plone++static/components/tinymce-builded/js/tinymce/plugins/preview/plugin",
    "tinymce-print": "++plone++static/components/tinymce-builded/js/tinymce/plugins/print/plugin",
    "tinymce-save": "++plone++static/components/tinymce-builded/js/tinymce/plugins/save/plugin",
    "tinymce-searchreplace": "++plone++static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin",
    "tinymce-spellchecker": "++plone++static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin",
    "tinymce-tabfocus": "++plone++static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin",
    "tinymce-table": "++plone++static/components/tinymce-builded/js/tinymce/plugins/table/plugin",
    "tinymce-template": "++plone++static/components/tinymce-builded/js/tinymce/plugins/template/plugin",
    "tinymce-textcolor": "++plone++static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin",
    "tinymce-textpattern": "++plone++static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin",
    "tinymce-visualblocks": "++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin",
    "tinymce-visualchars": "++plone++static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin",
    "tinymce-wordcount": "++plone++static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin",
    "tinymce": "++plone++static/components/tinymce-builded/js/tinymce/tinymce",
    "tokyo": "++theme++plonetheme.tokyo/js/tokyo",
    "translate": "++resource++mockupjs/i18n-wrapper",
    "underscore": "++plone++static/components/underscore/underscore",
    "z3cform_datagridfield_js": "++resource++collective.z3cform.datagridfield/datagridfield"
},
    shim: {
        "backbone": {
            exports: "window.Backbone",
            deps: ["underscore", "jquery"]
        },
        "backbone.paginator": {
            exports: "window.Backbone.Paginator",
            deps: ["backbone"]
        },
        "bootstrap-alert": {
            deps: ["jquery"]
        },
        "bootstrap-collapse": {
            exports: "window.jQuery.fn.collapse.Constructor",
            deps: ["jquery"]
        },
        "bootstrap-dropdown": {
            deps: ["jquery"]
        },
        "bootstrap-tooltip": {
            deps: ["jquery"]
        },
        "bootstrap-transition": {
            exports: "window.jQuery.support.transition",
            deps: ["jquery"]
        },
        "jqtree-contextmenu": {
            deps: ["jqtree"]
        },
        "jqtree": {
            deps: ["jquery"]
        },
        "jquery.browser": {
            deps: ["jquery"]
        },
        "jquery.cookie": {
            deps: ["jquery"]
        },
        "jquery.event.drag": {
            deps: ["jquery"]
        },
        "jquery.event.drop": {
            exports: "$.drop",
            deps: ["jquery"]
        },
        "jquery.recurrenceinput": {
            deps: ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]
        },
        "jquery.tmpl": {
            deps: ["jquery"]
        },
        "picker.date": {
            deps: ["picker"]
        },
        "picker.time": {
            deps: ["picker"]
        },
        "resource-plone-app-jquerytools-dateinput-js": {
            deps: ["jquery"]
        },
        "resource-plone-app-jquerytools-js": {
            deps: ["jquery"]
        },
        "tinymce-advlist": {
            deps: ["tinymce"]
        },
        "tinymce-anchor": {
            deps: ["tinymce"]
        },
        "tinymce-autolink": {
            deps: ["tinymce"]
        },
        "tinymce-autoresize": {
            deps: ["tinymce"]
        },
        "tinymce-autosave": {
            deps: ["tinymce"]
        },
        "tinymce-bbcode": {
            deps: ["tinymce"]
        },
        "tinymce-charmap": {
            deps: ["tinymce"]
        },
        "tinymce-code": {
            deps: ["tinymce"]
        },
        "tinymce-colorpicker": {
            deps: ["tinymce"]
        },
        "tinymce-compat3x": {
            deps: ["tinymce"]
        },
        "tinymce-contextmenu": {
            deps: ["tinymce"]
        },
        "tinymce-directionality": {
            deps: ["tinymce"]
        },
        "tinymce-emoticons": {
            deps: ["tinymce"]
        },
        "tinymce-fullpage": {
            deps: ["tinymce"]
        },
        "tinymce-fullscreen": {
            deps: ["tinymce"]
        },
        "tinymce-hr": {
            deps: ["tinymce"]
        },
        "tinymce-image": {
            deps: ["tinymce"]
        },
        "tinymce-importcss": {
            deps: ["tinymce"]
        },
        "tinymce-insertdatetime": {
            deps: ["tinymce"]
        },
        "tinymce-legacyoutput": {
            deps: ["tinymce"]
        },
        "tinymce-link": {
            deps: ["tinymce"]
        },
        "tinymce-lists": {
            deps: ["tinymce"]
        },
        "tinymce-media": {
            deps: ["tinymce"]
        },
        "tinymce-modern-theme": {
            deps: ["tinymce"]
        },
        "tinymce-nonbreaking": {
            deps: ["tinymce"]
        },
        "tinymce-noneditable": {
            deps: ["tinymce"]
        },
        "tinymce-pagebreak": {
            deps: ["tinymce"]
        },
        "tinymce-paste": {
            deps: ["tinymce"]
        },
        "tinymce-preview": {
            deps: ["tinymce"]
        },
        "tinymce-print": {
            deps: ["tinymce"]
        },
        "tinymce-save": {
            deps: ["tinymce"]
        },
        "tinymce-searchreplace": {
            deps: ["tinymce"]
        },
        "tinymce-spellchecker": {
            deps: ["tinymce"]
        },
        "tinymce-tabfocus": {
            deps: ["tinymce"]
        },
        "tinymce-table": {
            deps: ["tinymce"]
        },
        "tinymce-template": {
            deps: ["tinymce"]
        },
        "tinymce-textcolor": {
            deps: ["tinymce"]
        },
        "tinymce-textpattern": {
            deps: ["tinymce"]
        },
        "tinymce-visualblocks": {
            deps: ["tinymce"]
        },
        "tinymce-visualchars": {
            deps: ["tinymce"]
        },
        "tinymce-wordcount": {
            deps: ["tinymce"]
        },
        "tinymce": {
            exports: "window.tinyMCE",
            init: function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }
        },
        "tokyo": {
            deps: ["jquery"]
        },
        "underscore": {
            exports: "window._"
        }
    },
    optimize: 'uglify',
    wrapShim: true
});
/*global window, console*/

require([
    'jquery',
    'pat-registry',
  ], function ($, patRegistry) {

      // No globals, dude!
      "use strict";

      // Local singleton object containing our functions
      var dataGridField2Functions = {};

      dataGridField2Functions.getInputOrSelect = function(node) {
          /* Get the (first) input or select form element under the given node */
          var inputs = node.getElementsByTagName("input");
          if(inputs.length > 0) {
              return inputs[0];
          }
          var selects = node.getElementsByTagName("select");
          if(selects.length > 0) {
              return selects[0];
          }
          return null;
      };

      dataGridField2Functions.getWidgetRows = function(currnode) {
          /* Return primary nodes with class of datagridwidget-row,
             they can be any tag: tr, div, etc. */
          var tbody = this.getParentByClass(currnode, "datagridwidget-body");
          return this.getRows(tbody);
      };

      dataGridField2Functions.getRows = function(tbody) {
          /* Return primary nodes with class of datagridwidget-row,
             they can be any tag: tr, div, etc. */
          var rows = $(tbody).children('.datagridwidget-row');
          return rows;
      };


      /**
       * Get all visible rows of DGF
       *
       * Incl. normal rows + AA row
       */
      dataGridField2Functions.getVisibleRows = function(tbody) {
          var rows = this.getRows(tbody);
          // We rape jQuery.filter here, because of
          // IE8 Array.filter http://kangax.github.com/es5-compat-table/

          // Consider "real" rows only
          var filteredRows = $(rows).filter(function() {
              var $tr = $(this);
              return !$tr.hasClass("datagridwidget-empty-row");
          });
          return filteredRows;
      };

      /**
       * Handle auto insert events by auto append
       */
      dataGridField2Functions.onInsert = function(e) {
          var currnode = e.currentTarget;
          this.autoInsertRow(currnode);
      },

      /**
       * Add a new row when changing the last row
       *
       * @param {Boolean} ensureMinimumRows we insert a special minimum row so the widget is not empty
       */
      dataGridField2Functions.autoInsertRow = function(currnode, ensureMinimumRows) {
          // fetch required data structure
          var dgf = $(dataGridField2Functions.getParentByClass(currnode, "datagridwidget-table-view"));
          var tbody = dataGridField2Functions.getParentByClass(currnode, "datagridwidget-body");
          var thisRow = dataGridField2Functions.getParentRow(currnode); // The new row we are working on
          var $thisRow = $(thisRow);
          var autoAppendMode = $(tbody).data("auto-append");

          if($thisRow.hasClass("minimum-row")) {
              // The change event was not triggered on real AA row,
              // but on a minimum ensured row (row 0).
              // 1. Don't add new row
              // 2. Make widget to "normal" state now as the user has edited the empty row so we assume it's a real row
              this.supressEnsureMinimum(tbody);
              return;
          }

          // Remove the auto-append functionality from the all rows in this widget
          var autoAppendHandlers = dgf.find('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell');
          autoAppendHandlers.unbind('change.dgf');
          $thisRow.removeClass('auto-append');

          // Create a new row
          var newtr = dataGridField2Functions.createNewRow(thisRow), $newtr = $(newtr);
          // Add auto-append functionality to our new row
          $newtr.addClass('auto-append');

          /* Put new row to DOM tree after our current row.  Do this before
           * reindexing to ensure that any Javascript we insert that depends on
           * DOM element IDs (such as plone.formwidget.autocomplete) will
           * pick up this row before any IDs get changed.  At this point,
           * we techinically have duplicate TT IDs in our document
           * (one for this new row, one for the hidden row), but jQuery
           * selectors will pick up elements in this new row first.
           */

          dgf.trigger("beforeaddrowauto", [dgf, newtr]);

          if(ensureMinimumRows) {
              // Add a special class so we can later deal with it
              $newtr.addClass("minimum-row");
              $newtr.insertBefore(thisRow);
          } else {
              $newtr.insertAfter(thisRow);
          }

          // Re-enable auto-append change handler feature on the new auto-appended row
          $(dgf).find('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell').bind("change.dgf", $.proxy(dataGridField2Functions.onInsert, dataGridField2Functions));
          dataGridField2Functions.reindexRow(tbody, newtr, 'AA');

          // Update order index to give rows correct values
          dataGridField2Functions.updateOrderIndex(tbody, true, ensureMinimumRows);
          dgf.trigger("afteraddrowauto", [dgf, newtr]);
      };

      /**
       * Creates a new row after the the target row.
       *
       * @param {Object} currnode DOM <tr>
       */
      dataGridField2Functions.addRowAfter = function(currnode) {
          // fetch required data structure
          var tbody = this.getParentByClass(currnode, "datagridwidget-body");
          var dgf = $(dataGridField2Functions.getParentByClass(currnode, "datagridwidget-table-view"));
          var thisRow = this.getParentRow(currnode);
          var newtr = this.createNewRow(thisRow);
          dgf.trigger("beforeaddrow", [dgf, newtr]);
          var filteredRows = this.getVisibleRows(currnode);

          // If using auto-append we add the "real" row before AA
          // We have a special case when there is only one visible in the gid
          if (thisRow.hasClass('auto-append') && !thisRow.hasClass("minimum-row")) {
              $(newtr).insertBefore(thisRow);
          } else {
              $(newtr).insertAfter(thisRow);
          }

          // Ensure minimum special behavior is no longer needed as we have now at least 2 rows
          if(thisRow.hasClass("minimum-row")) {
              this.supressEnsureMinimum(tbody);
          }

          // update orderindex hidden fields
          this.updateOrderIndex(tbody, true);
          dgf.trigger("afteraddrow", [dgf, newtr]);
      };

      /**
       * Creates a new row.
       *
       * The row is not inserted to the table, but is returned.
       *
       * @param {Object} <tr> or <tbody> DOM node in a table where we'll be adding the new row
       */
      dataGridField2Functions.createNewRow = function(node) {
          var tbody = this.getParentByClass(node, "datagridwidget-body");
          // hidden template row
          var emptyRow = $(tbody).children('.datagridwidget-empty-row').first();
          if(emptyRow.size() === 0) {
              // Ghetto assert()
              throw new Error("Could not locate empty template row in DGF");
          }
          var new_row = emptyRow.clone(true).removeClass('datagridwidget-empty-row');

          // enable patternslib
          $(new_row).find('*[class^="dgw-disabled-pat-"]')
          .attr('class', function(i, cls) {
            return cls.replace(/dgw\-disabled-pat-/, 'pat-');
          });
          patRegistry.scan(new_row);
          return new_row;
      };


      dataGridField2Functions.removeFieldRow = function(node) {
          /* Remove the row in which the given node is found */
          var tbody = this.getParentByClass(node, "datagridwidget-body");
          var row = this.getParentRow(node);
          $(row).remove();
          // ensure minimum rows in non-auto-append mode, reindex if no
          // minimal row was added, otherwise reindexing is done by ensureMinimumRows
          if ($(tbody).data("auto-append") || !this.ensureMinimumRows(tbody)) {
              this.updateOrderIndex(tbody, false);
          }
      };

      dataGridField2Functions.moveRow = function(currnode, direction){
          /* Move the given row down one */
          var nextRow;
          var dgf = $(dataGridField2Functions.getParentByClass(currnode, "datagridwidget-table-view"));
          var tbody = this.getParentByClass(currnode, "datagridwidget-body");
          var rows = this.getWidgetRows(currnode);
          var row = this.getParentRow(currnode);
          if(!row) {
              throw new Error("Couldn't find DataGridWidget row");
          }
          var idx = null;

          // We can't use nextSibling because of blank text nodes in some browsers
          // Need to find the index of the row
          rows.each(function (i) {
              if (this == row[0]) {
                  idx = i;
              }
          });

          // Abort if the current row wasn't found
          if (idx == null)
              return;

          // The up and down should cycle through the rows, excluding the auto-append and
          // empty-row rows.
          var validrows = 0;
          rows.each(function (i) {
              if (!$(this).hasClass('datagridwidget-empty-row') && !$(this).hasClass('auto-append')) {
                  validrows+=1;
              }
          });

          if (idx+1 == validrows) {
              if (direction == "down") {
                  this.moveRowToTop(row);
              } else {
                  nextRow = rows[idx-1];
                  this.shiftRow(nextRow, row);
              }
          } else if (idx === 0) {
              if (direction == "up") {
                  this.moveRowToBottom(row);
              } else {
                  nextRow = rows[parseInt(idx+1, 10)];
                  this.shiftRow(row, nextRow);
              }
          } else {
              if (direction == "up") {
                  nextRow = rows[idx-1];
                  this.shiftRow(nextRow, row);
              } else {
                  nextRow = rows[parseInt(idx+1, 10)];
                  this.shiftRow(row, nextRow);
              }
          }
          this.updateOrderIndex(tbody);
          dgf.trigger("aftermoverow", [dgf, row]);
      };

      dataGridField2Functions.moveRowDown = function(currnode){
          this.moveRow(currnode, "down");
      };

      dataGridField2Functions.moveRowUp = function(currnode){
          this.moveRow(currnode, "up");
      };

      dataGridField2Functions.shiftRow = function(bottom, top){
          /* Put node top before node bottom */
          $(top).insertBefore(bottom);
      };

      dataGridField2Functions.moveRowToTop = function (row) {
          var rows = this.getWidgetRows(row);
          $(row).insertBefore(rows[0]);
      };

      dataGridField2Functions.moveRowToBottom = function (row) {
          var rows = this.getWidgetRows(row);

          // make sure we insert the directly above any auto appended rows
          var insert_after = 0;
          rows.each(function (i) {
              if (!$(this).hasClass('datagridwidget-empty-row')  && !$(this).hasClass('auto-append')) {
                  insert_after = i;
              }
          });
          $(row).insertAfter(rows[insert_after]);
      };

      /**
       * Fixup all attributes on all child elements that contain
       * the row index. The following attributes are scanned:
       * - name
       * - id
       * - for
       * - href
       * - data-fieldname
       *
       * On the server side, the DGF logic will rebuild rows based
       * on this information.
       *
       * If indexing for some reasons fails you'll get double
       * input values and Zope converts inputs to list, failing
       * in funny ways.
       *
       * @param  {DOM} tbody
       * @param  {DOM} row
       * @param  {Number} newindex
       */
      dataGridField2Functions.reindexRow = function (tbody, row, newindex) {
          var name_prefix = $(tbody).data('name_prefix') + '.';
          var id_prefix = $(tbody).data('id_prefix') + '-';
          var $row = $(row);
          var oldindex = $row.data('index');

          function replaceIndex(el, attr, prefix) {
              if (el.attr(attr)) {
                  var val = el.attr(attr);
                  var pattern = new RegExp('^' + prefix + oldindex);
                  el.attr(attr, val.replace(pattern, prefix + newindex));
                  if (attr.indexOf('data-') === 0) {
                      var key = attr.substr(5);
                      var data = el.data(key);
                      el.data(key, data.replace(pattern, prefix + newindex));
                  }
              }
          }

          // update index data
          $row.data('index', newindex);
          $row.attr('data-index', newindex);

          $row.find('[id^="formfield-' + id_prefix + '"]').each(function(i, el) {
              replaceIndex($(el), 'id', 'formfield-' + id_prefix);
          });
          $row.find('[name^="' + name_prefix +'"]').each(function(i, el) {
              replaceIndex($(el), 'name', name_prefix);
          });
          $row.find('[id^="' + id_prefix +'"]').each(function(i, el) {
              replaceIndex($(el), 'id', id_prefix);
          });
          $row.find('[for^="' + id_prefix +'"]').each(function(i, el) {
              replaceIndex($(el), 'for', id_prefix);
          });
          $row.find('[href*="#' + id_prefix +'"]').each(function(i, el){
              replaceIndex($(el), 'href', '#' + id_prefix);
          });
          $row.find('[data-fieldname^="' + name_prefix + '"]').each(function(i, el) {
              replaceIndex($(el), 'data-fieldname', name_prefix);
          });
      };

      /**
       * Stop ensure miminum special behavior.
       *
       * The caller is responsible to check there was one and only one minimum-row in the table.
       *
       * Call when data is edited for the first time or a row added.
       */
      dataGridField2Functions.supressEnsureMinimum = function(tbody) {
          var autoAppendHandlers = $(tbody).find('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell');
          autoAppendHandlers.unbind('change.dgf');
          tbody.children().removeClass("auto-append");
          tbody.children().removeClass("minimum-row");
          dataGridField2Functions.updateOrderIndex(tbody, true, false);
      };

      /**
       * Update all row indexes on a DGF table.
       *
       * Each <tr> and input widget has recalculated row index number in its name,
       * so that the server can then parsit the submitted data in the correct order.
       *
       * @param  {Object} tbody     DOM of DGF <tbody>
       * @param  {Boolean} backwards iterate rows backwards
       * @param  {Boolean} ensureMinimumRows We have inserted a special auto-append row
       */
      dataGridField2Functions.updateOrderIndex = function (tbody, backwards, ensureMinimumRows) {
          var $tbody = $(tbody);
          var name_prefix = $tbody.attr('data-name_prefix') + '.';
          var i, idx, row, $row, $nextRow;

          // Was this auto-append table
          var autoAppend = false;
          var rows = this.getRows(tbody);
          for (i=0; i<rows.length; i++) {
              idx = backwards ? rows.length-i-1 : i;
              row = rows[idx], $row = $(row);

              if ($row.hasClass('datagridwidget-empty-row')) {
                  continue;
              }
              if($row.hasClass('auto-append')) {
                  autoAppend = true;
              }
              this.reindexRow(tbody, row, idx);
          }

          // Handle a special case where
          // 1. Widget is empty
          // 2. We don't have AA mode turned on
          // 3. We need to have minimum editable row count of 1
          if(ensureMinimumRows) {
              this.reindexRow(tbody, rows[0], "AA");
              autoAppend = true;
          }

          // Add a special first and class row classes
          // to hide manipulation handles
          // AA handling is different once again
          var visibleRows = this.getVisibleRows(tbody);
          for (i=0; i<visibleRows.length; i++) {
              row = visibleRows[i], $row = $(row);
              if(i<visibleRows.length-2) {
                  $nextRow = $(visibleRows[i+1]);
              }
              if(i===0) {
                  $row.addClass("datagridfield-first-filled-row");
              } else {
                  $row.removeClass("datagridfield-first-filled-row");
              }
              // Last visible before AA
              if(autoAppend) {
                  if($nextRow && $nextRow.hasClass("auto-append")) {
                      $row.addClass("datagridfield-last-filled-row");
                  } else {
                      $row.removeClass("datagridfield-last-filled-row");
                  }
              } else {
                  if(i==visibleRows.length-1) {
                      $row.addClass("datagridfield-last-filled-row");
                  } else {
                      $row.removeClass("datagridfield-last-filled-row");
                  }
              }
          }

          // Set total visible row counts and such and hint CSS
          var vis = this.getVisibleRows(tbody).length;
          $tbody.attr("data-count", this.getRows(tbody).length);
          $tbody.attr("data-visible-count", this.getVisibleRows(tbody).length);
          $tbody.attr("data-many-rows", vis >= 2 ? "true" : "false");

          $(document).find('input[name="' + name_prefix + 'count"]').each(function(){
              // do not include the TT and the AA rows in the count
              var count = rows.length;
              if ($(rows[count-1]).hasClass('datagridwidget-empty-row')) {
                  count--;
              }
              if ($(rows[count-1]).hasClass('auto-append')) {
                  count--;
              }
              this.value = count;
          });
      };

      dataGridField2Functions.getParentElement = function(currnode, tagname) {
          /* Find the first parent node with the given tag name */
          tagname = tagname.toUpperCase();
          var parent = currnode.parentNode;
          while(parent.tagName.toUpperCase() != tagname) {
              parent = parent.parentNode;
              // Next line is a safety belt
              if(parent.tagName.toUpperCase() == "BODY")
                  return null;
          }
          return parent;
      };

      dataGridField2Functions.getParentRow = function (node) {
          return this.getParentByClass(node, 'datagridwidget-row');
      };

      dataGridField2Functions.getParentByClass = function(node, klass) {
          var parent = $(node).closest("." + klass);

          if (parent.length) {
              return parent;
          }

          return null;
      };

      /**
       * Find the first parent node with the given id
       *
       * Id is partially matched: the beginning of
       * an element id matches parameter id string.
       *
       * @param  {DOM} currnode Node where ascending in DOM tree beings
       * @param  {String} id       Id string to look for.
       * @return {DOM} Found node or null
       */
      dataGridField2Functions.getParentElementById = function(currnode, id) {
          /*
          */

          id = id.toLowerCase();
          var parent = currnode.parentNode;

          while(true) {

              var parentId = parent.getAttribute("id");
              if(parentId) {
                   if(parentId.toLowerCase().substring(0, id.length) == id) break;
              }

              parent = parent.parentNode;
              // Next line is a safety belt
              if(parent.tagName.toUpperCase() == "BODY")
                  return null;
          }

          return parent;
      };


      /**
       * Make sure there is at least one visible row available in DGF
       * to edit in all the time.
       *
       * We need a lot of special logic for the case where
       * we have empty datagridfield and need to have one OPTIONAL
       * row present there for the editing when the user opens
       * the form for the first time.
       *
       * There are cases where one doesn't want to have the count of DGF
       * rows to go down to zero. Otherwise there no insert handle left
       * on the edit mode and the user cannot add any more rows.
       *
       * One should case is when
       *
       * - DGF is empty on new form
       *
       * - Auto append is set to false (initial row is not visible)
       *
       * We fix this situation by checking the available rows
       * and generating one empty AA row if needed.
       *
       * ... or simply when the user removes all the rows
       *
       * @param {Object} tbody DOM object of <tbody>
       */
      dataGridField2Functions.ensureMinimumRows = function(tbody) {
          var rows = this.getRows(tbody);
          var filteredRows = this.getVisibleRows(tbody);
          var self = this;

          // Rows = 0 -> make one AA row available
          if(filteredRows.length === 0) {
              // XXX: make the function call signatures more sane
              var child = rows[0];
              this.autoInsertRow(child, true);
              return true;
          }
          return false;
      },


      /**
       * When DOM model is ready execute this actions to wire up page logic.
       */
      dataGridField2Functions.init = function() {

          // Reindex all rows to get proper row classes on them
          $(".datagridwidget-body").each(function() {

              // Initialize widget data on <tbody>
              // We keep some mode attributes around
              var $this = $(this);
              var aa;

              // Check if this widget is in auto-append mode
              // and store for later usage
              aa = $this.children(".auto-append").size() > 0;
              $this.data("auto-append", aa);

              // Hint CSS
              if(aa) {
                  $this.addClass("datagridwidget-body-auto-append");
              } else {
                  $this.addClass("datagridwidget-body-non-auto-append");
              }

              dataGridField2Functions.updateOrderIndex(this, false);

              if(!aa) {
                  dataGridField2Functions.ensureMinimumRows(this);
              }
          });

          // Bind the handlers to the auto append rows
          // Use namespaced jQuery events to avoid unbind() conflicts later on
          $('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell').bind("change.dgf", $.proxy(dataGridField2Functions.onInsert, dataGridField2Functions));

          $(document).trigger("afterdatagridfieldinit");
      };


      $(document).ready(dataGridField2Functions.init);

      // Export module for customizers to mess around
      window.dataGridField2Functions = dataGridField2Functions;


  });

!function(){var t="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},e=t._,r=Array.prototype,a=Object.prototype,f="undefined"!=typeof Symbol?Symbol.prototype:null,i=r.push,l=r.slice,p=a.toString,o=a.hasOwnProperty,n=Array.isArray,u=Object.keys,s=Object.create,c=function(){},h=function(t){return t instanceof h?t:this instanceof h?void(this._wrapped=t):new h(t)};"undefined"==typeof exports||exports.nodeType?t._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.1";var d,v=function(i,o,t){if(void 0===o)return i;switch(null==t?3:t){case 1:return function(t){return i.call(o,t)};case 3:return function(t,e,n){return i.call(o,t,e,n)};case 4:return function(t,e,n,r){return i.call(o,t,e,n,r)}}return function(){return i.apply(o,arguments)}},y=function(t,e,n){return h.iteratee!==d?h.iteratee(t,e):null==t?h.identity:h.isFunction(t)?v(t,e,n):h.isObject(t)&&!h.isArray(t)?h.matcher(t):h.property(t)};h.iteratee=d=function(t,e){return y(t,e,1/0)};var g=function(i,o){return o=null==o?i.length-1:+o,function(){for(var t=Math.max(arguments.length-o,0),e=Array(t),n=0;n<t;n++)e[n]=arguments[n+o];switch(o){case 0:return i.call(this,e);case 1:return i.call(this,arguments[0],e);case 2:return i.call(this,arguments[0],arguments[1],e)}var r=Array(o+1);for(n=0;n<o;n++)r[n]=arguments[n];return r[o]=e,i.apply(this,r)}},m=function(t){if(!h.isObject(t))return{};if(s)return s(t);c.prototype=t;var e=new c;return c.prototype=null,e},w=function(e){return function(t){return null==t?void 0:t[e]}},b=function(t,e){return null!=t&&o.call(t,e)},x=function(t,e){for(var n=e.length,r=0;r<n;r++){if(null==t)return;t=t[e[r]]}return n?t:void 0},j=Math.pow(2,53)-1,A=w("length"),E=function(t){var e=A(t);return"number"==typeof e&&0<=e&&e<=j};h.each=h.forEach=function(t,e,n){var r,i;if(e=v(e,n),E(t))for(r=0,i=t.length;r<i;r++)e(t[r],r,t);else{var o=h.keys(t);for(r=0,i=o.length;r<i;r++)e(t[o[r]],o[r],t)}return t},h.map=h.collect=function(t,e,n){e=y(e,n);for(var r=!E(t)&&h.keys(t),i=(r||t).length,o=Array(i),a=0;a<i;a++){var u=r?r[a]:a;o[a]=e(t[u],u,t)}return o};var _=function(l){return function(t,e,n,r){var i=3<=arguments.length;return function(t,e,n,r){var i=!E(t)&&h.keys(t),o=(i||t).length,a=0<l?0:o-1;for(r||(n=t[i?i[a]:a],a+=l);0<=a&&a<o;a+=l){var u=i?i[a]:a;n=e(n,t[u],u,t)}return n}(t,v(e,r,4),n,i)}};h.reduce=h.foldl=h.inject=_(1),h.reduceRight=h.foldr=_(-1),h.find=h.detect=function(t,e,n){var r=(E(t)?h.findIndex:h.findKey)(t,e,n);if(void 0!==r&&-1!==r)return t[r]},h.filter=h.select=function(t,r,e){var i=[];return r=y(r,e),h.each(t,function(t,e,n){r(t,e,n)&&i.push(t)}),i},h.reject=function(t,e,n){return h.filter(t,h.negate(y(e)),n)},h.every=h.all=function(t,e,n){e=y(e,n);for(var r=!E(t)&&h.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(!e(t[a],a,t))return!1}return!0},h.some=h.any=function(t,e,n){e=y(e,n);for(var r=!E(t)&&h.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(e(t[a],a,t))return!0}return!1},h.contains=h.includes=h.include=function(t,e,n,r){return E(t)||(t=h.values(t)),("number"!=typeof n||r)&&(n=0),0<=h.indexOf(t,e,n)},h.invoke=g(function(t,n,r){var i,o;return h.isFunction(n)?o=n:h.isArray(n)&&(i=n.slice(0,-1),n=n[n.length-1]),h.map(t,function(t){var e=o;if(!e){if(i&&i.length&&(t=x(t,i)),null==t)return;e=t[n]}return null==e?e:e.apply(t,r)})}),h.pluck=function(t,e){return h.map(t,h.property(e))},h.where=function(t,e){return h.filter(t,h.matcher(e))},h.findWhere=function(t,e){return h.find(t,h.matcher(e))},h.max=function(t,r,e){var n,i,o=-1/0,a=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof t[0]&&null!=t)for(var u=0,l=(t=E(t)?t:h.values(t)).length;u<l;u++)null!=(n=t[u])&&o<n&&(o=n);else r=y(r,e),h.each(t,function(t,e,n){i=r(t,e,n),(a<i||i===-1/0&&o===-1/0)&&(o=t,a=i)});return o},h.min=function(t,r,e){var n,i,o=1/0,a=1/0;if(null==r||"number"==typeof r&&"object"!=typeof t[0]&&null!=t)for(var u=0,l=(t=E(t)?t:h.values(t)).length;u<l;u++)null!=(n=t[u])&&n<o&&(o=n);else r=y(r,e),h.each(t,function(t,e,n){((i=r(t,e,n))<a||i===1/0&&o===1/0)&&(o=t,a=i)});return o},h.shuffle=function(t){return h.sample(t,1/0)},h.sample=function(t,e,n){if(null==e||n)return E(t)||(t=h.values(t)),t[h.random(t.length-1)];var r=E(t)?h.clone(t):h.values(t),i=A(r);e=Math.max(Math.min(e,i),0);for(var o=i-1,a=0;a<e;a++){var u=h.random(a,o),l=r[a];r[a]=r[u],r[u]=l}return r.slice(0,e)},h.sortBy=function(t,r,e){var i=0;return r=y(r,e),h.pluck(h.map(t,function(t,e,n){return{value:t,index:i++,criteria:r(t,e,n)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(r<n||void 0===n)return 1;if(n<r||void 0===r)return-1}return t.index-e.index}),"value")};var O=function(a,e){return function(r,i,t){var o=e?[[],[]]:{};return i=y(i,t),h.each(r,function(t,e){var n=i(t,e,r);a(o,t,n)}),o}};h.groupBy=O(function(t,e,n){b(t,n)?t[n].push(e):t[n]=[e]}),h.indexBy=O(function(t,e,n){t[n]=e}),h.countBy=O(function(t,e,n){b(t,n)?t[n]++:t[n]=1});var k=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(t){return t?h.isArray(t)?l.call(t):h.isString(t)?t.match(k):E(t)?h.map(t,h.identity):h.values(t):[]},h.size=function(t){return null==t?0:E(t)?t.length:h.keys(t).length},h.partition=O(function(t,e,n){t[n?0:1].push(e)},!0),h.first=h.head=h.take=function(t,e,n){return null==t||t.length<1?null==e?void 0:[]:null==e||n?t[0]:h.initial(t,t.length-e)},h.initial=function(t,e,n){return l.call(t,0,Math.max(0,t.length-(null==e||n?1:e)))},h.last=function(t,e,n){return null==t||t.length<1?null==e?void 0:[]:null==e||n?t[t.length-1]:h.rest(t,Math.max(0,t.length-e))},h.rest=h.tail=h.drop=function(t,e,n){return l.call(t,null==e||n?1:e)},h.compact=function(t){return h.filter(t,Boolean)};var T=function(t,e,n,r){for(var i=(r=r||[]).length,o=0,a=A(t);o<a;o++){var u=t[o];if(E(u)&&(h.isArray(u)||h.isArguments(u)))if(e)for(var l=0,s=u.length;l<s;)r[i++]=u[l++];else T(u,e,n,r),i=r.length;else n||(r[i++]=u)}return r};h.flatten=function(t,e){return T(t,e,!1)},h.without=g(function(t,e){return h.difference(t,e)}),h.uniq=h.unique=function(t,e,n,r){h.isBoolean(e)||(r=n,n=e,e=!1),null!=n&&(n=y(n,r));for(var i=[],o=[],a=0,u=A(t);a<u;a++){var l=t[a],s=n?n(l,a,t):l;e&&!n?(a&&o===s||i.push(l),o=s):n?h.contains(o,s)||(o.push(s),i.push(l)):h.contains(i,l)||i.push(l)}return i},h.union=g(function(t){return h.uniq(T(t,!0,!0))}),h.intersection=function(t){for(var e=[],n=arguments.length,r=0,i=A(t);r<i;r++){var o=t[r];if(!h.contains(e,o)){var a;for(a=1;a<n&&h.contains(arguments[a],o);a++);a===n&&e.push(o)}}return e},h.difference=g(function(t,e){return e=T(e,!0,!0),h.filter(t,function(t){return!h.contains(e,t)})}),h.unzip=function(t){for(var e=t&&h.max(t,A).length||0,n=Array(e),r=0;r<e;r++)n[r]=h.pluck(t,r);return n},h.zip=g(h.unzip),h.object=function(t,e){for(var n={},r=0,i=A(t);r<i;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n};var I=function(o){return function(t,e,n){e=y(e,n);for(var r=A(t),i=0<o?0:r-1;0<=i&&i<r;i+=o)if(e(t[i],i,t))return i;return-1}};h.findIndex=I(1),h.findLastIndex=I(-1),h.sortedIndex=function(t,e,n,r){for(var i=(n=y(n,r,1))(e),o=0,a=A(t);o<a;){var u=Math.floor((o+a)/2);n(t[u])<i?o=u+1:a=u}return o};var F=function(o,a,u){return function(t,e,n){var r=0,i=A(t);if("number"==typeof n)0<o?r=0<=n?n:Math.max(n+i,r):i=0<=n?Math.min(n+1,i):n+i+1;else if(u&&n&&i)return t[n=u(t,e)]===e?n:-1;if(e!=e)return 0<=(n=a(l.call(t,r,i),h.isNaN))?n+r:-1;for(n=0<o?r:i-1;0<=n&&n<i;n+=o)if(t[n]===e)return n;return-1}};h.indexOf=F(1,h.findIndex,h.sortedIndex),h.lastIndexOf=F(-1,h.findLastIndex),h.range=function(t,e,n){null==e&&(e=t||0,t=0),n||(n=e<t?-1:1);for(var r=Math.max(Math.ceil((e-t)/n),0),i=Array(r),o=0;o<r;o++,t+=n)i[o]=t;return i},h.chunk=function(t,e){if(null==e||e<1)return[];for(var n=[],r=0,i=t.length;r<i;)n.push(l.call(t,r,r+=e));return n};var S=function(t,e,n,r,i){if(!(r instanceof e))return t.apply(n,i);var o=m(t.prototype),a=t.apply(o,i);return h.isObject(a)?a:o};h.bind=g(function(e,n,r){if(!h.isFunction(e))throw new TypeError("Bind must be called on a function");var i=g(function(t){return S(e,i,n,this,r.concat(t))});return i}),h.partial=g(function(i,o){var a=h.partial.placeholder,u=function(){for(var t=0,e=o.length,n=Array(e),r=0;r<e;r++)n[r]=o[r]===a?arguments[t++]:o[r];for(;t<arguments.length;)n.push(arguments[t++]);return S(i,u,this,this,n)};return u}),(h.partial.placeholder=h).bindAll=g(function(t,e){var n=(e=T(e,!1,!1)).length;if(n<1)throw new Error("bindAll must be passed function names");for(;n--;){var r=e[n];t[r]=h.bind(t[r],t)}}),h.memoize=function(r,i){var o=function(t){var e=o.cache,n=""+(i?i.apply(this,arguments):t);return b(e,n)||(e[n]=r.apply(this,arguments)),e[n]};return o.cache={},o},h.delay=g(function(t,e,n){return setTimeout(function(){return t.apply(null,n)},e)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(n,r,i){var o,a,u,l,s=0;i||(i={});var c=function(){s=!1===i.leading?0:h.now(),o=null,l=n.apply(a,u),o||(a=u=null)},t=function(){var t=h.now();s||!1!==i.leading||(s=t);var e=r-(t-s);return a=this,u=arguments,e<=0||r<e?(o&&(clearTimeout(o),o=null),s=t,l=n.apply(a,u),o||(a=u=null)):o||!1===i.trailing||(o=setTimeout(c,e)),l};return t.cancel=function(){clearTimeout(o),s=0,o=a=u=null},t},h.debounce=function(n,r,i){var o,a,u=function(t,e){o=null,e&&(a=n.apply(t,e))},t=g(function(t){if(o&&clearTimeout(o),i){var e=!o;o=setTimeout(u,r),e&&(a=n.apply(this,t))}else o=h.delay(u,r,this,t);return a});return t.cancel=function(){clearTimeout(o),o=null},t},h.wrap=function(t,e){return h.partial(e,t)},h.negate=function(t){return function(){return!t.apply(this,arguments)}},h.compose=function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},h.after=function(t,e){return function(){if(--t<1)return e.apply(this,arguments)}},h.before=function(t,e){var n;return function(){return 0<--t&&(n=e.apply(this,arguments)),t<=1&&(e=null),n}},h.once=h.partial(h.before,2),h.restArguments=g;var M=!{toString:null}.propertyIsEnumerable("toString"),N=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],R=function(t,e){var n=N.length,r=t.constructor,i=h.isFunction(r)&&r.prototype||a,o="constructor";for(b(t,o)&&!h.contains(e,o)&&e.push(o);n--;)(o=N[n])in t&&t[o]!==i[o]&&!h.contains(e,o)&&e.push(o)};h.keys=function(t){if(!h.isObject(t))return[];if(u)return u(t);var e=[];for(var n in t)b(t,n)&&e.push(n);return M&&R(t,e),e},h.allKeys=function(t){if(!h.isObject(t))return[];var e=[];for(var n in t)e.push(n);return M&&R(t,e),e},h.values=function(t){for(var e=h.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=t[e[i]];return r},h.mapObject=function(t,e,n){e=y(e,n);for(var r=h.keys(t),i=r.length,o={},a=0;a<i;a++){var u=r[a];o[u]=e(t[u],u,t)}return o},h.pairs=function(t){for(var e=h.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=[e[i],t[e[i]]];return r},h.invert=function(t){for(var e={},n=h.keys(t),r=0,i=n.length;r<i;r++)e[t[n[r]]]=n[r];return e},h.functions=h.methods=function(t){var e=[];for(var n in t)h.isFunction(t[n])&&e.push(n);return e.sort()};var L=function(l,s){return function(t){var e=arguments.length;if(s&&(t=Object(t)),e<2||null==t)return t;for(var n=1;n<e;n++)for(var r=arguments[n],i=l(r),o=i.length,a=0;a<o;a++){var u=i[a];s&&void 0!==t[u]||(t[u]=r[u])}return t}};h.extend=L(h.allKeys),h.extendOwn=h.assign=L(h.keys),h.findKey=function(t,e,n){e=y(e,n);for(var r,i=h.keys(t),o=0,a=i.length;o<a;o++)if(e(t[r=i[o]],r,t))return r};var P,q,B=function(t,e,n){return e in n};h.pick=g(function(t,e){var n={},r=e[0];if(null==t)return n;h.isFunction(r)?(1<e.length&&(r=v(r,e[1])),e=h.allKeys(t)):(r=B,e=T(e,!1,!1),t=Object(t));for(var i=0,o=e.length;i<o;i++){var a=e[i],u=t[a];r(u,a,t)&&(n[a]=u)}return n}),h.omit=g(function(t,n){var e,r=n[0];return h.isFunction(r)?(r=h.negate(r),1<n.length&&(e=n[1])):(n=h.map(T(n,!1,!1),String),r=function(t,e){return!h.contains(n,e)}),h.pick(t,r,e)}),h.defaults=L(h.allKeys,!0),h.create=function(t,e){var n=m(t);return e&&h.extendOwn(n,e),n},h.clone=function(t){return h.isObject(t)?h.isArray(t)?t.slice():h.extend({},t):t},h.tap=function(t,e){return e(t),t},h.isMatch=function(t,e){var n=h.keys(e),r=n.length;if(null==t)return!r;for(var i=Object(t),o=0;o<r;o++){var a=n[o];if(e[a]!==i[a]||!(a in i))return!1}return!0},P=function(t,e,n,r){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return!1;if(t!=t)return e!=e;var i=typeof t;return("function"===i||"object"===i||"object"==typeof e)&&q(t,e,n,r)},q=function(t,e,n,r){t instanceof h&&(t=t._wrapped),e instanceof h&&(e=e._wrapped);var i=p.call(t);if(i!==p.call(e))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:0==+t?1/+t==1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object Symbol]":return f.valueOf.call(t)===f.valueOf.call(e)}var o="[object Array]"===i;if(!o){if("object"!=typeof t||"object"!=typeof e)return!1;var a=t.constructor,u=e.constructor;if(a!==u&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(u)&&u instanceof u)&&"constructor"in t&&"constructor"in e)return!1}r=r||[];for(var l=(n=n||[]).length;l--;)if(n[l]===t)return r[l]===e;if(n.push(t),r.push(e),o){if((l=t.length)!==e.length)return!1;for(;l--;)if(!P(t[l],e[l],n,r))return!1}else{var s,c=h.keys(t);if(l=c.length,h.keys(e).length!==l)return!1;for(;l--;)if(s=c[l],!b(e,s)||!P(t[s],e[s],n,r))return!1}return n.pop(),r.pop(),!0},h.isEqual=function(t,e){return P(t,e)},h.isEmpty=function(t){return null==t||(E(t)&&(h.isArray(t)||h.isString(t)||h.isArguments(t))?0===t.length:0===h.keys(t).length)},h.isElement=function(t){return!(!t||1!==t.nodeType)},h.isArray=n||function(t){return"[object Array]"===p.call(t)},h.isObject=function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(e){h["is"+e]=function(t){return p.call(t)==="[object "+e+"]"}}),h.isArguments(arguments)||(h.isArguments=function(t){return b(t,"callee")});var C=t.document&&t.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof C&&(h.isFunction=function(t){return"function"==typeof t||!1}),h.isFinite=function(t){return!h.isSymbol(t)&&isFinite(t)&&!isNaN(parseFloat(t))},h.isNaN=function(t){return h.isNumber(t)&&isNaN(t)},h.isBoolean=function(t){return!0===t||!1===t||"[object Boolean]"===p.call(t)},h.isNull=function(t){return null===t},h.isUndefined=function(t){return void 0===t},h.has=function(t,e){if(!h.isArray(e))return b(t,e);for(var n=e.length,r=0;r<n;r++){var i=e[r];if(null==t||!o.call(t,i))return!1;t=t[i]}return!!n},h.noConflict=function(){return t._=e,this},h.identity=function(t){return t},h.constant=function(t){return function(){return t}},h.noop=function(){},h.property=function(e){return h.isArray(e)?function(t){return x(t,e)}:w(e)},h.propertyOf=function(e){return null==e?function(){}:function(t){return h.isArray(t)?x(e,t):e[t]}},h.matcher=h.matches=function(e){return e=h.extendOwn({},e),function(t){return h.isMatch(t,e)}},h.times=function(t,e,n){var r=Array(Math.max(0,t));e=v(e,n,1);for(var i=0;i<t;i++)r[i]=e(i);return r},h.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},h.now=Date.now||function(){return(new Date).getTime()};var W={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},U=h.invert(W),D=function(e){var n=function(t){return e[t]},t="(?:"+h.keys(e).join("|")+")",r=RegExp(t),i=RegExp(t,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,n):t}};h.escape=D(W),h.unescape=D(U),h.result=function(t,e,n){h.isArray(e)||(e=[e]);var r=e.length;if(!r)return h.isFunction(n)?n.call(t):n;for(var i=0;i<r;i++){var o=null==t?void 0:t[e[i]];void 0===o&&(o=n,i=r),t=h.isFunction(o)?o.call(t):o}return t};var $=0;h.uniqueId=function(t){var e=++$+"";return t?t+e:e},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var z=/(.)^/,Q={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},G=/\\|'|\r|\n|\u2028|\u2029/g,H=function(t){return"\\"+Q[t]};h.template=function(o,t,e){!t&&e&&(t=e),t=h.defaults({},t,h.templateSettings);var n,r=RegExp([(t.escape||z).source,(t.interpolate||z).source,(t.evaluate||z).source].join("|")+"|$","g"),a=0,u="__p+='";o.replace(r,function(t,e,n,r,i){return u+=o.slice(a,i).replace(G,H),a=i+t.length,e?u+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":n?u+="'+\n((__t=("+n+"))==null?'':__t)+\n'":r&&(u+="';\n"+r+"\n__p+='"),t}),u+="';\n",t.variable||(u="with(obj||{}){\n"+u+"}\n"),u="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+u+"return __p;\n";try{n=new Function(t.variable||"obj","_",u)}catch(t){throw t.source=u,t}var i=function(t){return n.call(this,t,h)},l=t.variable||"obj";return i.source="function("+l+"){\n"+u+"}",i},h.chain=function(t){var e=h(t);return e._chain=!0,e};var K=function(t,e){return t._chain?h(e).chain():e};h.mixin=function(n){return h.each(h.functions(n),function(t){var e=h[t]=n[t];h.prototype[t]=function(){var t=[this._wrapped];return i.apply(t,arguments),K(this,e.apply(h,t))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var n=r[e];h.prototype[e]=function(){var t=this._wrapped;return n.apply(t,arguments),"shift"!==e&&"splice"!==e||0!==t.length||delete t[0],K(this,t)}}),h.each(["concat","join","slice"],function(t){var e=r[t];h.prototype[t]=function(){return K(this,e.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}(),function(){var t,n;Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,r=function(){},i=function(){return n.apply(this instanceof r&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return r.prototype=this.prototype,i.prototype=new r,i});var o={DEBUG:10,INFO:20,WARN:30,ERROR:40,FATAL:50};function e(){}function r(){}function a(t,e){this._loggers={},this.name=t||"",this._parent=e||null,e||(this._enabled=!0,this._level=o.WARN)}function i(t){n=t}e.prototype={output:function(t,e,n){if(void 0!==window.console&&void 0!==console.log){t&&n.unshift(t+":");var r,i=n.join(" ");if(void 0===typeof console.info)r=e<=o.DEBUG?"DEBUG":e<=o.INFO?"INFO":e<=o.WARN?"WARN":e<=o.ERROR?"ERROR":"FATAL",console.log("["+r+"] "+i);else e<=o.DEBUG?(i="[DEBUG] "+i,console.log(i)):e<=o.INFO?console.info(i):e<=o.WARN?console.warn(i):console.error(i)}}},r.prototype={output:function(t,e,n){t&&n.unshift(t+":"),e<=o.DEBUG?(n.unshift("[DEBUG]"),console.log.apply(console,n)):e<=o.INFO?console.info.apply(console,n):e<=o.WARN?console.warn.apply(console,n):console.error.apply(console,n)}},a.prototype={getLogger:function(t){for(var e=t.split("."),n=this,r=this.name?[this.name]:[];e.length;){var i=e.shift();r.push(i),i in n._loggers||(n._loggers[i]=new a(r.join("."),n)),n=n._loggers[i]}return n},_getFlag:function(t){var e=this;for(t="_"+t;null!==e;){if(void 0!==e[t])return e[t];e=e._parent}return null},setEnabled:function(t){this._enabled=!!t},isEnabled:function(){this._getFlag("enabled")},setLevel:function(t){"number"==typeof t?this._level=t:"string"==typeof t&&(t=t.toUpperCase())in o&&(this._level=o[t])},getLevel:function(){return this._getFlag("level")},log:function(t,e){!e.length||!this._getFlag("enabled")||t<this._getFlag("level")||(e=Array.prototype.slice.call(e),n.output(this.name,t,e))},debug:function(){this.log(o.DEBUG,arguments)},info:function(){this.log(o.INFO,arguments)},warn:function(){this.log(o.WARN,arguments)},error:function(){this.log(o.ERROR,arguments)},fatal:function(){this.log(o.FATAL,arguments)}},window.console&&window.console.log&&"function"==typeof window.console.log.apply?i(new r):i(new e),t=new a;for(var u,l=/loglevel(|-[^=]+)=([^&]+)/g;null!==(u=l.exec(window.location.search));){(""===u[1]?t:t.getLogger(u[1].slice(1))).setLevel(u[2].toUpperCase())}var s={Level:o,getLogger:t.getLogger.bind(t),setEnabled:t.setEnabled.bind(t),isEnabled:t.isEnabled.bind(t),setLevel:t.setLevel.bind(t),getLevel:t.getLevel.bind(t),debug:t.debug.bind(t),info:t.info.bind(t),warn:t.warn.bind(t),error:t.error.bind(t),fatal:t.fatal.bind(t),getWriter:function(){return n},setWriter:i};"function"==typeof define?define("logging",[],function(){return s}):window.logging=s}(),define("pat-logger",["logging"],function(t){return t.getLogger("patterns")}),function(e){"function"==typeof define&&define.amd?define("jquery.browser",["jquery"],function(t){return e(t)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=e(require("jquery")):e(window.jQuery)}(function(t){"use strict";function e(t){void 0===t&&(t=window.navigator.userAgent),t=t.toLowerCase();var e=/(edge)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(chrome)[ \/]([\w.]+)/.exec(t)||/(iemobile)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||0<=t.indexOf("trident")&&/(rv)(?::| )([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[],n=/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[],r={},i={browser:e[5]||e[3]||e[1]||"",version:e[2]||e[4]||"0",versionNumber:e[4]||e[2]||"0",platform:n[0]||""};if(i.browser&&(r[i.browser]=!0,r.version=i.version,r.versionNumber=parseInt(i.versionNumber,10)),i.platform&&(r[i.platform]=!0),(r.android||r.bb||r.blackberry||r.ipad||r.iphone||r.ipod||r.kindle||r.playbook||r.silk||r["windows phone"])&&(r.mobile=!0),(r.cros||r.mac||r.linux||r.win)&&(r.desktop=!0),(r.chrome||r.opr||r.safari)&&(r.webkit=!0),r.rv||r.iemobile){i.browser="msie",r.msie=!0}if(r.edge){delete r.edge;i.browser="msedge",r.msedge=!0}if(r.safari&&r.blackberry){var o="blackberry";r[i.browser=o]=!0}if(r.safari&&r.playbook){var a="playbook";r[i.browser=a]=!0}if(r.bb){var u="blackberry";r[i.browser=u]=!0}if(r.opr){i.browser="opera",r.opera=!0}if(r.safari&&r.android){var l="android";r[i.browser=l]=!0}if(r.safari&&r.kindle){i.browser="kindle",r.kindle=!0}if(r.safari&&r.silk){i.browser="silk",r.silk=!0}return r.name=i.browser,r.platform=i.platform,r}return window.jQBrowser=e(window.navigator.userAgent),window.jQBrowser.uaMatch=e,t&&(t.browser=window.jQBrowser),window.jQBrowser}),define("pat-utils",["jquery","underscore","jquery.browser"],function(o,a){o.fn.safeClone=function(){var t=this.clone();return void 0!==o.browser.msie&&t.findInclusive(":input[placeholder]").each(function(t,e){var n=o(e);n.attr("placeholder")===n.val()&&n.val("")}),t},Array.prototype.forEach||(Array.prototype.forEach=function(t,e){var n,r;if(null===this)throw new TypeError(" this is null or not defined");var i=Object(this),o=i.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(1<arguments.length&&(n=e),r=0;r<o;){var a;r in i&&(a=i[r],t.call(n,a,r,i)),r++}});function u(t){var e=typeof t;return"function"===e||"object"===e&&!!t}var l={none:{hide:"hide",show:"show"},fade:{hide:"fadeOut",show:"fadeIn"},slide:{hide:"slideUp",show:"slideDown"}};return isElementInViewport=function(t,e,n){if(t===[])return!1;t instanceof o&&(t=t[0]);var r=t.getBoundingClientRect(),i=[r.top,r.bottom,r.left,r.right];return!a.every(i,function(t){if(0===t)return!0})&&(e?(void 0===n&&(n=0),r.top<=0+n&&r.bottom>=0+n):0<=r.top&&0<=r.left&&r.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&r.right<=(window.innerWidth||document.documentElement.clientWidth))},{jqueryPlugin:function(n){return function(t,e){return 0===this.length?this:("object"==typeof t&&(e=t,t=void 0),"function"==typeof n?function(n,r,i){return this.each(function(){var t,e=o(this);if(t=n.init(e,i),r){if(void 0===t[r])return o.error("Method "+r+" does not exist on jQuery."+n.name),!1;if("_"===r.charAt(0))return o.error("Method "+r+" is private on jQuery."+n.name),!1;t[r].apply(t,[i])}}),this}.call(this,n,t,e):function(t,e,n){var r=this;if(e){if(t[e])return t[e].apply(r,[r].concat([n]));o.error("Method "+e+" does not exist on jQuery."+t.name)}else t.init.apply(r,[r].concat([n]));return r}.call(this,n,t,e))}},debounce:function(n,r){var i;return function(){var t=this,e=arguments;clearTimeout(i),i=setTimeout(function(){i=null,n.apply(t,e)},r)}},escapeRegExp:function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isObject:u,extend:function(t){if(!u(t))return t;for(var e,n,r=1,i=arguments.length;r<i;r++)for(n in e=arguments[r])hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},rebaseURL:function(t,e){return-1!==e.indexOf("://")||"/"===e[0]?e:t.slice(0,t.lastIndexOf("/")+1)+e},findLabel:function(t){for(var e,n=t.parentNode;n&&11!==n.nodeType;n=n.parentNode)if("LABEL"===n.tagName)return n;return t.id&&(e=o('label[for="'+t.id+'"]')),e&&0===e.length&&t.form&&(e=o('label[for="'+t.name+'"]',t.form)),e&&e.length?e[0]:null},elementInViewport:function(t){var e=t.getBoundingClientRect(),n=document.documentElement,r=window.innerWidth||n.clientWidth,i=window.innerHeight||n.clientHeight;return!(e.right<0||e.bottom<0||e.left>r||e.top>i)},removeWildcardClass:function(t,e){if(-1===e.indexOf("*"))t.removeClass(e);else{var i=e.replace(/[\-\[\]{}()+?.,\\\^$|#\s]/g,"\\$&");i=i.replace(/[*]/g,".*"),i=new RegExp("^"+i+"$"),t.filter("[class]").each(function(){for(var t=o(this),e=t.attr("class").split(/\s+/),n=[],r=0;r<e.length;r++)i.test(e[r])||n.push(e[r]);n.length?t.attr("class",n.join(" ")):t.removeAttr("class")})}},hideOrShow:function(t,e,n,r){var i="css"===n.transition||"none"===n.transition?null:n.effect.duration;t.removeClass("visible hidden in-progress");var o=function(){t.removeClass("in-progress").addClass(e?"visible":"hidden").trigger("pat-update",{pattern:r,transition:"complete"})};if(i){var a=l[n.transition];t.addClass("in-progress").trigger("pat-update",{pattern:r,transition:"start"}),t[e?a.show:a.hide]({duration:i,easing:n.effect.easing,complete:o})}else"css"!==n.transition&&t[e?"show":"hide"](),o()},addURLQueryParameter:function(t,e,n){var r=new RegExp("(\\?|\\&)"+e+"=.*?(?=(&|$))"),i=t.toString().split("#"),o=i[0],a=i[1],u=o;return u=r.test(o)?o.replace(r,"$1"+e+"="+n):/\?.+$/.test(o)?o+"&"+e+"="+n:o+"?"+e+"="+n,a&&(u+="#"+a),u},removeDuplicateObjects:function(t){return a.reduce(t,function(t,e){var n=!1;return a.each(t,function(t){n=a.keys(t).length===a.keys(e).length&&!a.chain(t).omit(function(t,e){return this[e]===t}.bind(e)).keys().value().length}),n||t.push(e),t},[])},mergeStack:function(t,r){for(var i=[],e=0;e<r;e++)i.push({});return a.each(t,function(t){for(var e=t.length-1,n=0;n<r;n++)i[n]=o.extend(i[n]||{},t[e<n?e:n])}),i},isElementInViewport:isElementInViewport}}),define("pat-compat",[],function(){var i,o,a,u;Array.prototype.every||(Array.prototype.every=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError;for(var r=arguments[1],i=0;i<n;i++)if(i in e&&!t.call(r,e[i],i,e))return!1;return!0}),Array.prototype.filter||(Array.prototype.filter=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError;for(var r=[],i=arguments[1],o=0;o<n;o++)if(o in e){var a=e[o];t.call(i,a,o,e)&&r.push(a)}return r}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){var n,r;if(null===this)throw new TypeError(" this is null or not defined");var i=Object(this),o=i.length>>>0;if("[object Function]"!=={}.toString.call(t))throw new TypeError(t+" is not a function");for(e&&(n=e),r=0;r<o;){var a;r in i&&(a=i[r],t.call(n,a,r,i)),r++}}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if(0===n)return-1;var r=0;if(0<arguments.length&&((r=Number(arguments[1]))!=r?r=0:0!==r&&r!==1/0&&r!==-1/0&&(r=(0<r||-1)*Math.floor(Math.abs(r)))),n<=r)return-1;for(var i=0<=r?r:Math.max(n-Math.abs(r),0);i<n;i++)if(i in e&&e[i]===t)return i;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if(0===n)return-1;var r=n;1<arguments.length&&((r=Number(arguments[1]))!=r?r=0:0!==r&&r!==1/0&&r!==-1/0&&(r=(0<r||-1)*Math.floor(Math.abs(r))));for(var i=0<=r?Math.min(r,n-1):n-Math.abs(r);0<=i;i--)if(i in e&&e[i]===t)return i;return-1}),Array.prototype.map||(Array.prototype.map=function(t,e){var n,r,i;if(null===this)throw new TypeError(" this is null or not defined");var o=Object(this),a=o.length>>>0;if("[object Function]"!=={}.toString.call(t))throw new TypeError(t+" is not a function");for(e&&(n=e),r=new Array(a),i=0;i<a;){var u,l;i in o&&(u=o[i],l=t.call(n,u,i,o),r[i]=l),i++}return r}),Array.prototype.reduce||(Array.prototype.reduce=function(t){if(null==this)throw new TypeError("Object is null or undefined");var e,n=0,r=this.length>>0;if("function"!=typeof t)throw new TypeError("First argument is not callable");if(arguments.length<2){if(0===r)throw new TypeError("Array length is 0 and no second argument");e=this[0],n=1}else e=arguments[1];for(;n<r;)n in this&&(e=t.call(void 0,e,this[n],n,this)),++n;return e}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError;if(0===n&&1===arguments.length)throw new TypeError;var r,i=n-1;if(2<=arguments.length)r=arguments[1];else for(;;){if(i in this){r=this[i--];break}if(--i<0)throw new TypeError}for(;0<=i;)i in e&&(r=t.call(void 0,r,e[i],i,e)),i--;return r}),Array.prototype.some||(Array.prototype.some=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError;for(var r=arguments[1],i=0;i<n;i++)if(i in e&&t.call(r,e[i],i,e))return!0;return!1}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,r=function(){},i=function(){return n.apply(this instanceof r&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return r.prototype=this.prototype,i.prototype=new r,i}),Object.keys||(Object.keys=(i=Object.prototype.hasOwnProperty,o=!{toString:null}.propertyIsEnumerable("toString"),u=(a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on non-object");var e=[];for(var n in t)i.call(t,n)&&e.push(n);if(o)for(var r=0;r<u;r++)i.call(t,a[r])&&e.push(a[r]);return e}))}),define("pat-jquery-ext",["jquery"],function(c){var r={init:function(e){var n={time:3,initialTime:8,exceptionAreas:[]};return this.each(function(){var t=c(this);t.data("timeout")||(e&&c.extend(n,e),t.data("timeout",{lastEvent:new Date,trueTime:n.time,time:n.initialTime,untouched:!0,inExceptionArea:!1}),t.bind("mouseover.timeout",r.mouseMoved),t.bind("mouseenter.timeout",r.mouseMoved),c(n.exceptionAreas).each(function(){t.find(this).live("mouseover.timeout",{parent:t},r.enteredException).live("mouseleave.timeout",{parent:t},r.leftException)}),0<n.initialTime?t.timeout("startTimer"):t.addClass("timeout"))})},enteredException:function(t){var e=t.data.parent.data("timeout");e.inExceptionArea=!0,t.data.parent.data("timeout",e),t.data.parent.trigger("mouseover")},leftException:function(t){var e=t.data.parent.data("timeout");e.inExceptionArea=!1,t.data.parent.data("timeout",e)},destroy:function(){return this.each(function(){var t=c(this),e=t.data("timeout");c(window).unbind(".timeout"),e.timeout.remove(),t.removeData("timeout")})},mouseMoved:function(){var t=c(this),e=t.data("timeout");t.hasClass("timeout")?(t.removeClass("timeout"),t.timeout("startTimer")):e.untouched&&(e.untouched=!1,e.time=e.trueTime),e.lastEvent=new Date,t.data("timeout",e)},startTimer:function(){var r=c(this),t=r.data("timeout"),i=function(){var t=r.data("timeout");if(t&&t.lastEvent)if(t.inExceptionArea)setTimeout(i,Math.floor(1e3*t.time));else{var e=new Date,n=Math.floor(1e3*t.time)-(e-t.lastEvent);0<n?setTimeout(i,n+100):r.addClass("timeout")}};setTimeout(i,Math.floor(1e3*t.time))}};c.fn.timeout=function(t){return r[t]?r[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void c.error("Method "+t+" does not exist on jQuery.timeout"):r.init.apply(this,arguments)},c.extend(c.expr[":"],{scrollable:function(t){return"scroll"===c(t).css("overflow")||"scroll"===c(t).css("overflowX")||"scroll"===c(t).css("overflowY")||(t.clientHeight<t.scrollHeight&&(-1!==c.inArray(c(t).css("overflowY"),["scroll","auto"])||-1!==c.inArray(c(t).css("overflow"),["scroll","auto"]))||t.clientWidth<t.scrollWidth&&(-1!==c.inArray(c(t).css("overflowX"),["scroll","auto"])||-1!==c.inArray(c(t).css("overflow"),["scroll","auto"])))}}),c.fn.makeVisibleInScroll=function(t){var a=null;return"string"==typeof t?a=c("#"+t):t&&(a=c(t)),this.each(function(){var t,e=c(this);t=a||(0<(t=e.parents(":scrollable")).length?c(t[0]):c(window));var n=e.position().top,r=e.height()+n,i=t.scrollTop(),o=t.height()+i;n<i?t.scrollTop(n):r>o-t.height()/2&&t.scrollTop(n-(t.height()-e.height())/2)})},c.fn.setPositionAbsolute=function(u,l,s){return this.each(function(){var t=c(this),e=c(this).width(),n=u.offset(),r=u.width(),i=u.height(),o=n.left+r-e+s,a=n.top+i+l;t.css({"z-index":1,position:"absolute",marginLeft:0,marginTop:0,left:o+"px",top:a+"px",width:e}),t.remove().appendTo("body").show()})},c.fn.positionAncestor=function(a){var u=0,l=0;return this.each(function(){var t=c(this).closest(a);if(t.length&&"static"!==t.css("position")){var e=c(this),n=e.offset().left-parseInt(e.css("marginLeft"),10),r=e.offset().top-parseInt(e.css("marginTop"),10),i=t.offset().left+parseInt(t.css("borderLeftWidth"),10),o=t.offset().top+parseInt(t.css("borderTopWidth"),10);return u=n-i,l=r-o,!1}}),{left:u,top:l}},String.prototype.startsWith=function(t){return null!==this.match("^"+t)},String.prototype.endsWith=function(t){return null!==this.match(t+"$")},c.simplePlaceholder={placeholder_class:null,hide_placeholder:function(){var t=c(this);t.val()===t.attr("placeholder")&&t.val("").removeClass(c.simplePlaceholder.placeholder_class)},show_placeholder:function(){var t=c(this);""===t.val()&&t.val(t.attr("placeholder")).addClass(c.simplePlaceholder.placeholder_class)},prevent_placeholder_submit:function(){return c(this).find(".simple-placeholder").each(function(){var t=c(this);t.val()===t.attr("placeholder")&&t.val("")}),!0}},c.fn.simplePlaceholder=function(t){if(void 0===document.createElement("input").placeholder){var e={placeholder_class:"placeholding"};t&&c.extend(e,t),c.simplePlaceholder.placeholder_class=e.placeholder_class,this.each(function(){var t=c(this);t.focus(c.simplePlaceholder.hide_placeholder),t.blur(c.simplePlaceholder.show_placeholder),""===t.val()&&(t.val(t.attr("placeholder")),t.addClass(c.simplePlaceholder.placeholder_class)),t.addClass("simple-placeholder"),c(this.form).submit(c.simplePlaceholder.prevent_placeholder_submit)})}return this},c.fn.findInclusive=function(t){return this.find("*").addBack().filter(t)},c.fn.slideIn=function(t,e,n){return this.animate({width:"show"},t,e,n)},c.fn.slideOut=function(t,e,n){return this.animate({width:"hide"},t,e,n)},c.expr[":"].Contains=function(t,e,n){return 0<=c(t).text().toUpperCase().indexOf(n[3].toUpperCase())},c.fn.scopedFind=function(t){return t.startsWith("#")?c(t):this.find(t)}}),define("pat-registry",["jquery","underscore","pat-logger","pat-utils","pat-compat","pat-jquery-ext"],function(o,a,u,r){for(var t,i=u.getLogger("registry"),e=/patterns-disable=([^&]+)/g,n=/patterns-dont-catch/g,l=!1,s={};null!==(t=e.exec(window.location.search));)s[t[1]]=!0,i.info("Pattern disabled via url config:",t[1]);for(;null!==(t=n.exec(window.location.search));)l=!0,i.info("I will not catch init exceptions");var c={patterns:{},initialized:!1,init:function(){o(document).ready(function(){i.info("loaded: "+Object.keys(c.patterns).sort().join(", ")),c.scan(document.body),c.initialized=!0,i.info("finished initial scan.")})},clear:function(){this.patterns={}},transformPattern:function(e,t){if(s[e])i.debug("Skipping disabled pattern:",e);else{var n=c.patterns[e];if(n.transform)try{n.transform(o(t))}catch(t){if(l)throw t;i.error("Transform error for pattern"+e,t)}}},initPattern:function(t,e,n){var r=o(e),i=c.patterns[t];if(i.init&&(plog=u.getLogger("pat."+t),r.is(i.trigger))){plog.debug("Initialising:",r);try{i.init(r,null,n),plog.debug("done.")}catch(t){if(l)throw t;plog.error("Caught error:",t)}}},orderPatterns:function(t){return a.contains(t,"validation")&&a.contains(t,"inject")&&(t.splice(t.indexOf("validation"),1),t.unshift("validation")),t},scan:function(t,n,r){var i=[];(n=this.orderPatterns(n||Object.keys(c.patterns))).forEach(a.partial(this.transformPattern,a,t)),n=a.each(n,function(t){var e=c.patterns[t];e.trigger&&i.unshift(e.trigger)}),o(t).findInclusive(i.join(",")).filter(function(){return 0===o(this).parents("pre").length}).filter(":not(.cant-touch-this)").toArray().reduceRight(function(t,e){n.forEach(a.partial(this.initPattern,a,e,r))}.bind(this),null),o("body").addClass("patterns-loaded")},register:function(t,e){var n;return(e=e||t.name)?c.patterns[e]?(i.error("Already have a pattern called: "+e),!1):((c.patterns[e]=t).jquery_plugin&&(n=("pat-"+e).replace(/-([a-zA-Z])/g,function(t,e){return e.toUpperCase()}),o.fn[n]=r.jqueryPlugin(t),o.fn[n.replace(/^pat/,"pattern")]=o.fn[n]),i.debug("Registered pattern:",e,t),c.initialized&&c.scan(document.body,[e]),!0):(i.error("Pattern lacks a name:",t),!1)}};return c}),define("pat-mockup-parser",["jquery"],function(a){"use strict";return{getOptions:function t(e,n,r){r=r||{},0===e.length||a.nodeName(e[0],"body")||(r=t(e.parent(),n,r));var i={};if(0!==e.length&&(i=e.data("pat-"+n))&&"string"==typeof i){var o={};a.each(i.split(";"),function(t,e){(e=e.split(":")).reverse();var n=e.pop();n=n.replace(/^\s+|\s+$/g,""),e.reverse();var r=e.join(":");r=r.replace(/^\s+|\s+$/g,""),o[n]=r}),i=o}return a.extend(!0,{},r,i)}}}),define("pat-base",["jquery","pat-registry","pat-mockup-parser","pat-logger"],function(i,a,u,l){"use strict";var o=l.getLogger("Patternslib Base"),s=function(t,e,n){var r=this.prototype.name,i=l.getLogger("pat."+r),o=t.data("pattern-"+r);if(void 0===o&&a.patterns[r]){try{e="mockup"===this.prototype.parser?u.getOptions(t,r,e):e,o=new a.patterns[r](t,e,n)}catch(t){i.error("Failed while initializing '"+r+"' pattern.",t)}t.data("pattern-"+r,o)}return o},c=function(t,e,n){this.$el=t,this.options=i.extend(!0,{},this.defaults||{},e||{}),this.init(t,e,n),this.emit("init")};return c.prototype={constructor:c,on:function(t,e){this.$el.on(t+"."+this.name+".patterns",e)},emit:function(t,e){void 0===e&&(e=[]),this.$el.trigger(t+"."+this.name+".patterns",e)}},c.extend=function(t){var e,n=this;if(!t)throw new Error("Pattern configuration properties required when calling Base.extend");(e=t.hasOwnProperty("constructor")?t.constructor:function(){n.apply(this,arguments)}).extend=c.extend,e.init=s,e.jquery_plugin=!0,e.trigger=t.trigger;var r=function(){this.constructor=e};return r.prototype=n.prototype,e.prototype=new r,i.extend(!0,e.prototype,t),e.__super__=n.prototype,t.name?t.trigger?a.register(e,t.name):o.warn("The pattern '"+t.name+"' does not have a trigger attribute, it will not be registered."):o.warn("This pattern without a name attribute will not be registered!"),e},c}),define("mockup-patterns-base",["pat-base"],function(e){"use strict";var t=function(){return e.apply(this,arguments)};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return((t.prototype=e.prototype).constructor=t).extend=function(){console.log("Usage of the mockup-patterns-base pattern is deprecated and it will eventually be removed.Instead, use pat-base and explicitly set parser to 'mockup' when calling extend.");var t=e.extend.apply(this,arguments);return t.prototype.parser="mockup",t},t}),window.jQuery&&define("jquery",[],function(){"use strict";return window.jQuery}),require(["jquery","pat-registry","mockup-patterns-base"],function(i,t,e){"use strict";window.parent!==window&&"IFRAME"!==window.frameElement.nodeName||i(document).ready(function(){i("body").addClass("pat-plone"),t.initialized||t.init()}),i(document).ready(function(){!0!==("selected"===i("#form-widgets-use_cookie_negotiation > input").value)?i("#formfield-form-widgets-authenticated_users_only").hide():i("#formfield-form-widgets-authenticated_users_only").show()}),i(document).ready(function(){function t(t){var e=i("#form-widgets-highpixeldensity_scales option:selected").attr("value"),n=i('div[data-fieldname="form.widgets.quality_2x"]'),r=i('div[data-fieldname="form.widgets.quality_3x"]');"disabled"==e?(n.fadeOut(),r.fadeOut()):"2x"==e?(n.fadeIn(),r.fadeOut()):"3x"==e&&(n.fadeIn(),r.fadeIn())}i("#ImagingSettings")&&(i('div[data-fieldname="form.widgets.quality_2x"]').hide(),i('div[data-fieldname="form.widgets.quality_3x"]').hide(),t(),i("#form-widgets-highpixeldensity_scales").change(t))})}),define("/Users/peter/workspace/buildout.coredev52py37/src/plone.staticresources/src/plone/staticresources/static/plone-base.js",function(){});
//# sourceMappingURL=plone-base-compiled.min.js.map

/* reset requirejs definitions so that people who
   put requirejs in legacy compilation do not get errors */
var _old_define = define;
var _old_require = require;
define = undefined;
require = undefined;
try{

/* resource: ++plone++plone.app.discussion.javascripts/comments.js */
if(require===undefined){require=function(reqs,torun){'use strict';return torun(window.jQuery);};}require(['jquery'],function($){'use strict';$.createReplyForm=function(comment_div){var comment_id=comment_div.attr('id');var reply_button=comment_div.find('.reply-to-comment-button');var reply_div=$('#commenting').clone(true);reply_div.find('#formfield-form-widgets-captcha').find('script').remove();reply_div.appendTo(comment_div).css('display','none');reply_div.removeAttr('id');$(reply_button).css('display','none');var reply_form=reply_div.find('form');reply_form.find('#formfield-form-widgets-comment-text').attr('id','formfield-form-widgets-new-textarea'+comment_id);reply_form.find('#form-widgets-comment-text').attr('id','form-widgets-new-textarea'+comment_id);reply_form.find('input[name="form.widgets.in_reply_to"]').val(comment_id);var cancel_reply_button=reply_div.find('.cancelreplytocomment');cancel_reply_button.attr('id',comment_id);reply_form.find('input[name="form.buttons.cancel"]').css('display','inline');reply_div.slideDown('slow');cancel_reply_button.css('display','inline');};$.clearForm=function(form_div){form_div.find('.error').removeClass('error');form_div.find('.fieldErrorBox').remove();form_div.find('input[type="text"]').attr('value','');form_div.find('textarea').attr('value','');};$(window).load(function(){var post_comment_div=$('#commenting');var in_reply_to_field=post_comment_div.find('input[name="form.widgets.in_reply_to"]');if(in_reply_to_field.length!==0&&in_reply_to_field.val()!==''){var current_reply_id='#'+in_reply_to_field.val();var current_reply_to_div=$('.discussion').find(current_reply_id);$.createReplyForm(current_reply_to_div);$.clearForm(post_comment_div);}$('.reply-to-comment-button').bind('click',function(e){var comment_div=$(this).parents().filter('.comment');$.createReplyForm(comment_div);$.clearForm(comment_div);});$('#commenting #form-buttons-cancel').bind('click',function(e){e.preventDefault();var reply_to_comment_button=$(this).parents().filter('.comment').find('.reply-to-comment-button');$.reply_to_comment_form=$(this).parents().filter('.reply');$.reply_to_comment_form.slideUp('slow',function(){$(this).remove();});reply_to_comment_button.css('display','inline');});$('input[name="form.button.PublishComment"]').on('click',function(){var trigger=this;var form=$(this).parents('form');var data=$(form).serialize();var form_url=$(form).attr('action');$.ajax({type:'GET',url:form_url,data:data,context:trigger,success:function(msg){form.find('input[name="form.button.PublishComment"]').remove();form.parents('.state-pending').toggleClass('state-pending').toggleClass('state-published');},error:function(msg){return true;}});return false;});if($.fn.prepOverlay){$('form[name="edit"]').prepOverlay({cssclass:'overlay-edit-comment',width:'60%',subtype:'ajax',filter:'#content>*'});}$('input[name="form.button.DeleteComment"]').on('click',function(){var trigger=this;var form=$(this).parents('form');var data=$(form).serialize();var form_url=$(form).attr('action');$.ajax({type:'POST',url:form_url,data:data,context:$(trigger).parents('.comment'),success:function(data){var comment=$(this);var clss=comment.attr('class');var treelevel=parseInt(clss[clss.indexOf('replyTreeLevel')+'replyTreeLevel'.length],10);var selector='.replyTreeLevel'+treelevel;for(var i=0; i<treelevel; i++){selector+=', .replyTreeLevel'+i;}comment.nextUntil(selector).each(function(){$(this).fadeOut('fast',function(){$(this).remove();});});var parent=comment.prev('[class*="replyTreeLevel'+(treelevel-1)+'"]');parent.find('form[name="delete"]').css('display','inline');$(this).fadeOut('fast',function(){$(this).remove();});},error:function(req,error){return true;}});return false;});$('.reply').find('input[name="form.buttons.reply"]').css('display','none');$('.reply').find('input[name="form.buttons.cancel"]').css('display','none');$('.reply-to-comment-button').removeClass('hide');});});
/* resource: ++plone++plone.app.event/event.js */
(function($){var eventedit={start_end_delta:1/24,$start_input:undefined,$start_container:undefined,$pickadate_starttime:undefined,$end_input:undefined,$end_container:undefined,$pickadate_endtime:undefined,$whole_day_input:undefined,$open_end_input:undefined,get_dom_element:function(sel,$container){var $el;if($container){$el=$(sel,$container);}else{$el=$(sel);}return $el.length?$el:undefined;},getDateTime:function(datetimewidget){var date,time,datetime,set_time;date=$('input[name="_submit"]:first',datetimewidget).prop('value');if(!date){return;}date=date.split('-');time=$('input[name="_submit"]:last',datetimewidget).prop('value');if(!time){set_time=true;time='00:00';}time=time.split(':');datetime=new Date(parseInt(date[0],10),parseInt(date[1],10)-1,parseInt(date[2],10),parseInt(time[0],10),parseInt(time[1],10));if(set_time){$('.pattern-pickadate-time',datetimewidget).pickatime('picker').set('select',datetime);}return datetime;},initStartEndDelta:function(start_container,end_container){var start_datetime=this.getDateTime(start_container);var end_datetime=this.getDateTime(end_container);if(!start_datetime||!end_datetime){return;}this.start_end_delta=(end_datetime-start_datetime)/1000/60;},updateEndDate:function(start_container,end_container){var start_date=this.getDateTime(start_container);if(!start_date){return;}var new_end_date=new Date(start_date);new_end_date.setMinutes(start_date.getMinutes()+this.start_end_delta);$('.pattern-pickadate-date',end_container).pickadate('picker').set('select',new_end_date);$('.pattern-pickadate-time',end_container).pickatime('picker').set('select',new_end_date);},validateEndDate:function(start_container,end_container){var start_datetime=this.getDateTime(start_container);var end_datetime=this.getDateTime(end_container);if(!start_datetime||!end_datetime){return;}if(end_datetime<start_datetime){start_container.addClass('error');}else{end_container.removeClass('error');}},show_hide_widget:function(widget,hide,fade){var $widget=$(widget);if(hide===true){if(fade===true){$widget.fadeOut();}else{$widget.hide();}}else{if(fade===true){$widget.fadeIn();}else{$widget.show();}}},event_listing_calendar_init:function(cal){if($().dateinput&&cal.length>0){var get_req_param,val;get_req_param=function(name){if(name===new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)').exec(window.location.search)){return decodeURIComponent(name[1]);}};val=get_req_param('date');if(val===undefined){val=new Date();}else{val=new Date(val);}cal.dateinput({selectors:true,trigger:true,format:'yyyy-mm-dd',yearRange:[-10,10],firstDay:1,value:val,change:function(){var value=this.getValue('yyyy-mm-dd');window.location.href='event_listing?mode=day&date='+value;}}).unbind('change').bind('onShow',function(){var trigger_offset=$(this).next().offset();$(this).data('dateinput').getCalendar().offset({top:trigger_offset.top+20,left:trigger_offset.left});});}},initilize_event:function(){var $start_container=this.$start_container,$end_container=this.$end_container,$pickadate_starttime=this.$pickadate_starttime,$pickadate_endtime=this.$pickadate_endtime,$open_end_input=this.$open_end_input,$whole_day_input=this.$whole_day_input;if($whole_day_input.length>0){$whole_day_input.bind('change',function(e){this.show_hide_widget($pickadate_starttime,e.target.checked,true);this.show_hide_widget($pickadate_endtime,e.target.checked,true);}.bind(this));this.show_hide_widget($pickadate_starttime,$whole_day_input.get(0).checked,false);this.show_hide_widget($pickadate_endtime,$whole_day_input.get(0).checked,false);}if($open_end_input.length>0){$open_end_input.bind('change',function(e){this.show_hide_widget($end_container,e.target.checked,true);}.bind(this));this.show_hide_widget($end_container,$open_end_input.get(0).checked,false);}$start_container.on('focus','.picker__input',function(){this.initStartEndDelta($start_container,$end_container);}.bind(this));$start_container.on('change','.picker__input',function(){this.updateEndDate($start_container,$end_container);}.bind(this));$end_container.on('focus','.picker__input',function(){this.initStartEndDelta($start_container,$end_container);}.bind(this));$end_container.on('change','.picker__input',function(){this.validateEndDate($start_container,$end_container);}.bind(this));}};$(document).ready(function(){eventedit.$start_input=eventedit.get_dom_element('form input.event_start');if(!eventedit.$start_input){return;}eventedit.$end_input=eventedit.get_dom_element('form input.event_end');if(!eventedit.$end_input){return;}eventedit.$start_container=eventedit.$start_input.closest('div');eventedit.$end_container=eventedit.$end_input.closest('div');eventedit.$whole_day_input=eventedit.get_dom_element('form input.event_whole_day');eventedit.$open_end_input=eventedit.get_dom_element('form input.event_open_end');var interval=setInterval(function(){eventedit.$pickadate_starttime=!eventedit.$pickadate_starttime&&eventedit.get_dom_element('.pattern-pickadate-time-wrapper',eventedit.$start_container);eventedit.$pickadate_endtime=!eventedit.$pickadate_endtime&&eventedit.get_dom_element('.pattern-pickadate-time-wrapper',eventedit.$end_container);if(eventedit.$pickadate_starttime&&eventedit.$pickadate_endtime){clearInterval(interval);eventedit.initilize_event();}},100);eventedit.event_listing_calendar_init($('#event_listing_calendar'));});})(jQuery);
}catch(e){
    // log it
    if (typeof console !== "undefined"){
        console.log('Error loading javascripts!' + e);
    }
}finally{
    define = _old_define;
    require = _old_require;
}

define("pat-mockup-parser",["jquery"],function(s){"use strict";return{getOptions:function t(e,n,i){i=i||{},0===e.length||s.nodeName(e[0],"body")||(i=t(e.parent(),n,i));var o={};if(0!==e.length&&(o=e.data("pat-"+n))&&"string"==typeof o){var r={};s.each(o.split(";"),function(t,e){(e=e.split(":")).reverse();var n=e.pop();n=n.replace(/^\s+|\s+$/g,""),e.reverse();var i=e.join(":");i=i.replace(/^\s+|\s+$/g,""),r[n]=i}),o=r}return s.extend(!0,{},i,o)}}}),function(){var t,n;Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,i=function(){},o=function(){return n.apply(this instanceof i&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,o.prototype=new i,o});var r={DEBUG:10,INFO:20,WARN:30,ERROR:40,FATAL:50};function e(){}function i(){}function s(t,e){this._loggers={},this.name=t||"",this._parent=e||null,e||(this._enabled=!0,this._level=r.WARN)}function o(t){n=t}e.prototype={output:function(t,e,n){if(void 0!==window.console&&void 0!==console.log){t&&n.unshift(t+":");var i,o=n.join(" ");if(void 0===typeof console.info)i=e<=r.DEBUG?"DEBUG":e<=r.INFO?"INFO":e<=r.WARN?"WARN":e<=r.ERROR?"ERROR":"FATAL",console.log("["+i+"] "+o);else e<=r.DEBUG?(o="[DEBUG] "+o,console.log(o)):e<=r.INFO?console.info(o):e<=r.WARN?console.warn(o):console.error(o)}}},i.prototype={output:function(t,e,n){t&&n.unshift(t+":"),e<=r.DEBUG?(n.unshift("[DEBUG]"),console.log.apply(console,n)):e<=r.INFO?console.info.apply(console,n):e<=r.WARN?console.warn.apply(console,n):console.error.apply(console,n)}},s.prototype={getLogger:function(t){for(var e=t.split("."),n=this,i=this.name?[this.name]:[];e.length;){var o=e.shift();i.push(o),o in n._loggers||(n._loggers[o]=new s(i.join("."),n)),n=n._loggers[o]}return n},_getFlag:function(t){var e=this;for(t="_"+t;null!==e;){if(void 0!==e[t])return e[t];e=e._parent}return null},setEnabled:function(t){this._enabled=!!t},isEnabled:function(){this._getFlag("enabled")},setLevel:function(t){"number"==typeof t?this._level=t:"string"==typeof t&&(t=t.toUpperCase())in r&&(this._level=r[t])},getLevel:function(){return this._getFlag("level")},log:function(t,e){!e.length||!this._getFlag("enabled")||t<this._getFlag("level")||(e=Array.prototype.slice.call(e),n.output(this.name,t,e))},debug:function(){this.log(r.DEBUG,arguments)},info:function(){this.log(r.INFO,arguments)},warn:function(){this.log(r.WARN,arguments)},error:function(){this.log(r.ERROR,arguments)},fatal:function(){this.log(r.FATAL,arguments)}},window.console&&window.console.log&&"function"==typeof window.console.log.apply?o(new i):o(new e),t=new s;for(var a,l=/loglevel(|-[^=]+)=([^&]+)/g;null!==(a=l.exec(window.location.search));){(""===a[1]?t:t.getLogger(a[1].slice(1))).setLevel(a[2].toUpperCase())}var c={Level:r,getLogger:t.getLogger.bind(t),setEnabled:t.setEnabled.bind(t),isEnabled:t.isEnabled.bind(t),setLevel:t.setLevel.bind(t),getLevel:t.getLevel.bind(t),debug:t.debug.bind(t),info:t.info.bind(t),warn:t.warn.bind(t),error:t.error.bind(t),fatal:t.fatal.bind(t),getWriter:function(){return n},setWriter:o};"function"==typeof define?define("logging",[],function(){return c}):window.logging=c}(),define("pat-logger",["logging"],function(t){return t.getLogger("patterns")}),define("pat-base",["jquery","pat-registry","pat-mockup-parser","pat-logger"],function(o,s,a,l){"use strict";var r=l.getLogger("Patternslib Base"),c=function(t,e,n){var i=this.prototype.name,o=l.getLogger("pat."+i),r=t.data("pattern-"+i);if(void 0===r&&s.patterns[i]){try{e="mockup"===this.prototype.parser?a.getOptions(t,i,e):e,r=new s.patterns[i](t,e,n)}catch(t){o.error("Failed while initializing '"+i+"' pattern.",t)}t.data("pattern-"+i,r)}return r},u=function(t,e,n){this.$el=t,this.options=o.extend(!0,{},this.defaults||{},e||{}),this.init(t,e,n),this.emit("init")};return u.prototype={constructor:u,on:function(t,e){this.$el.on(t+"."+this.name+".patterns",e)},emit:function(t,e){void 0===e&&(e=[]),this.$el.trigger(t+"."+this.name+".patterns",e)}},u.extend=function(t){var e,n=this;if(!t)throw new Error("Pattern configuration properties required when calling Base.extend");(e=t.hasOwnProperty("constructor")?t.constructor:function(){n.apply(this,arguments)}).extend=u.extend,e.init=c,e.jquery_plugin=!0,e.trigger=t.trigger;var i=function(){this.constructor=e};return i.prototype=n.prototype,e.prototype=new i,o.extend(!0,e.prototype,t),e.__super__=n.prototype,t.name?t.trigger?s.register(e,t.name):r.warn("The pattern '"+t.name+"' does not have a trigger attribute, it will not be registered."):r.warn("This pattern without a name attribute will not be registered!"),e},u}),define("mockup-patterns-autotoc",["jquery","pat-base"],function(s,t){"use strict";return t.extend({name:"autotoc",trigger:".pat-autotoc",parser:"mockup",defaults:{section:"section",levels:"h1,h2,h3",IDPrefix:"autotoc-item-",classTOCName:"autotoc-nav",classSectionName:"autotoc-section",classLevelPrefixName:"autotoc-level-",classActiveName:"active",scrollDuration:"slow",scrollEasing:"swing"},init:function(){var o=this;o.$toc=s("<nav/>").addClass(o.options.classTOCName),o.options.prependTo?o.$toc.prependTo(o.options.prependTo):o.options.appendTo?o.$toc.appendTo(o.options.appendTo):o.$toc.prependTo(o.$el),o.options.className&&o.$el.addClass(o.options.className),s(o.options.section,o.$el).addClass(o.options.classSectionName);var r=o.$el.hasClass("autotabs"),n=null;s(o.options.levels,o.$el).each(function(t){var i=s(this),e=i.prop("id")?i.prop("id"):i.parents(o.options.section).prop("id");(!e||0<s("#"+e).length)&&(e=o.options.IDPrefix+o.name+"-"+t),window.location.hash==="#"+e&&(n=e),i.data("navref",e),s("<a/>").appendTo(o.$toc).text(i.text()).attr("id",e).attr("href","#"+e).addClass(o.options.classLevelPrefixName+o.getLevel(i)).on("click",function(t,e){t.stopPropagation(),t.preventDefault(),e||(e={doScroll:!0,skipHash:!1});var n=s(this);o.$toc.children("."+o.options.classActiveName).removeClass(o.options.classActiveName),o.$el.children("."+o.options.classActiveName).removeClass(o.options.classActiveName),s(t.target).addClass(o.options.classActiveName),i.parents(o.options.section).addClass(o.options.classActiveName),!1!==e.doScroll&&o.options.scrollDuration&&i&&!r&&s("body,html").animate({scrollTop:i.offset().top},o.options.scrollDuration,o.options.scrollEasing),0!==o.$el.parents(".plone-modal").size()&&o.$el.trigger("resize.plone-modal.patterns"),s(this).trigger("clicked"),e.skipHash||window.history&&window.history.pushState&&window.history.pushState({},"","#"+n.attr("id"))})}),n?s("a#"+n).trigger("click",{doScroll:!0,skipHash:!0}):o.$toc.find("a").first().trigger("click",{doScroll:!1,skipHash:!0})},getLevel:function(n){var i=0;return s.each(this.options.levels.split(","),function(t,e){if(1===n.filter(e).size())return i=t+1,!1}),i}})}),define("mockup-utils",["jquery"],function(c){"use strict";var t=function(t){var n=this;n.className="plone-loader";return t||(t={}),n.options=c.extend({},{backdrop:null,zIndex:10005},t),n.init=function(){n.$el=c("."+n.className),0===n.$el.length&&(n.$el=c("<div><div></div></div>"),n.$el.addClass(n.className).hide().appendTo("body"))},n.show=function(t){n.init(),n.$el.show();var e=n.options.zIndex;"function"==typeof e?e=Math.max(e(),10005):(e=10005,c(".plone-modal-wrapper,.plone-modal-backdrop").each(function(){e=Math.max(e,c(this).css("zIndex")||10005)}),e+=1),n.$el.css("zIndex",e),void 0===t&&(t=!0),n.options.backdrop&&(n.options.backdrop.closeOnClick=t,n.options.backdrop.closeOnEsc=t,n.options.backdrop.init(),n.options.backdrop.show())},n.hide=function(){n.init(),n.$el.hide()},n},i=function(t){return void 0===t&&(t="id"),t+Math.floor(65536*(1+Math.random())).toString(16).substring(1)},e={get:function(t){if(window.localStorage){var e=window.localStorage[t];return"string"==typeof e?JSON.parse(e):void 0}},set:function(t,e){window.localStorage&&(window.localStorage[t]=JSON.stringify(e))}};return{bool:function(t){return"string"==typeof t&&(t=c.trim(t).toLowerCase()),-1===["false",!1,"0",0,"",void 0,null].indexOf(t)},escapeHTML:function(t){return c("<div/>").text(t).html()},removeHTML:function(t){return t.replace(/<[^>]+>/gi,"")},featureSupport:{dragAndDrop:function(){return"draggable"in document.createElement("span")},fileApi:function(){return"undefined"!=typeof FileReader},history:function(){return!(!window.history||!window.history.pushState)}},generateId:i,getAuthenticator:function(){var t=c('input[name="_authenticator"]');return 0===t.length?0<(t=c('a[href*="_authenticator"]')).length?t.attr("href").split("_authenticator=")[1]:"":t.val()},getWindow:function(){var t=window;return t.parent!==window&&(t=t.parent),t},Loading:t,loading:new t,parseBodyTag:function(t){return c(/<body[^>]*>[^]*<\/body>/im.exec(t)[0].replace("<body","<div").replace("</body>","</div>")).eq(0).html()},QueryHelper:function(t){var l=this;return l.options=c.extend({},{pattern:null,vocabularyUrl:null,searchParam:"SearchableText",pathOperator:"plone.app.querystring.operation.string.path",attributes:["UID","Title","Description","getURL","portal_type"],batchSize:10,baseCriteria:[],sort_on:"is_folderish",sort_order:"reverse",pathDepth:1},t),l.pattern=l.options.pattern,void 0!==l.pattern&&null!==l.pattern||(l.pattern={browsing:!1,basePath:"/"}),l.options.url&&!l.options.vocabularyUrl?l.options.vocabularyUrl=l.options.url:l.pattern.vocabularyUrl&&(l.options.vocabularyUrl=l.pattern.vocabularyUrl),l.valid=Boolean(l.options.vocabularyUrl),l.getBatch=function(t){return{page:t||1,size:l.options.batchSize}},l.getCurrentPath=function(){var t,e=l.pattern;"function"==typeof(t=l.currentPath?l.currentPath:e.currentPath)&&(t=t());var n=t;return n||(n=e.basePath?e.basePath:e.options.basePath?e.options.basePath:"/"),n},l.getCriterias=function(t,e){void 0===e&&(e={});var n=[];return(e=c.extend({},{useBaseCriteria:!0,additionalCriterias:[]},e)).useBaseCriteria&&(n=l.options.baseCriteria.slice(0)),t&&(t+="*",n.push({i:l.options.searchParam,o:"plone.app.querystring.operation.string.contains",v:t})),e.searchPath?n.push({i:"path",o:l.options.pathOperator,v:e.searchPath+"::"+l.options.pathDepth}):l.pattern.browsing&&n.push({i:"path",o:l.options.pathOperator,v:l.getCurrentPath()+"::"+l.options.pathDepth}),n=n.concat(e.additionalCriterias)},l.getQueryData=function(t,e){var n={query:JSON.stringify({criteria:l.getCriterias(t),sort_on:l.options.sort_on,sort_order:l.options.sort_order}),attributes:JSON.stringify(l.options.attributes)};return e&&(n.batch=JSON.stringify(l.getBatch(e))),n},l.getUrl=function(){var t=l.options.vocabularyUrl;return-1===t.indexOf("?")?t+="?":t+="&",t+c.param(l.getQueryData())},l.selectAjax=function(){return{url:l.options.vocabularyUrl,dataType:"JSON",quietMillis:100,data:function(t,e){return l.getQueryData(t,e)},results:function(t,e){var n=10*e<t.total;return{results:t.results,more:n}}}},l.search=function(t,e,n,i,o,r){void 0===o&&(o=!0),void 0===r&&(r="GET");var s=[];o&&(s=l.options.baseCriteria.slice(0)),s.push({i:t,o:e,v:n});var a={query:JSON.stringify({criteria:s}),attributes:JSON.stringify(l.options.attributes)};c.ajax({url:l.options.vocabularyUrl,dataType:"JSON",data:a,type:r,success:i})},l},setId:function(t,e){void 0===e&&(e="id");var n=t.attr("id");return n=void 0===n?i(e):n.replace(/\./g,"-"),t.attr("id",n),n},storage:e}}),function(){var t="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},e=t._,i=Array.prototype,s=Object.prototype,h="undefined"!=typeof Symbol?Symbol.prototype:null,o=i.push,l=i.slice,d=s.toString,r=s.hasOwnProperty,n=Array.isArray,a=Object.keys,c=Object.create,u=function(){},p=function(t){return t instanceof p?t:this instanceof p?void(this._wrapped=t):new p(t)};"undefined"==typeof exports||exports.nodeType?t._=p:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=p),exports._=p),p.VERSION="1.9.1";var f,m=function(o,r,t){if(void 0===r)return o;switch(null==t?3:t){case 1:return function(t){return o.call(r,t)};case 3:return function(t,e,n){return o.call(r,t,e,n)};case 4:return function(t,e,n,i){return o.call(r,t,e,n,i)}}return function(){return o.apply(r,arguments)}},g=function(t,e,n){return p.iteratee!==f?p.iteratee(t,e):null==t?p.identity:p.isFunction(t)?m(t,e,n):p.isObject(t)&&!p.isArray(t)?p.matcher(t):p.property(t)};p.iteratee=f=function(t,e){return g(t,e,1/0)};var v=function(o,r){return r=null==r?o.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),n=0;n<t;n++)e[n]=arguments[n+r];switch(r){case 0:return o.call(this,e);case 1:return o.call(this,arguments[0],e);case 2:return o.call(this,arguments[0],arguments[1],e)}var i=Array(r+1);for(n=0;n<r;n++)i[n]=arguments[n];return i[r]=e,o.apply(this,i)}},y=function(t){if(!p.isObject(t))return{};if(c)return c(t);u.prototype=t;var e=new u;return u.prototype=null,e},b=function(e){return function(t){return null==t?void 0:t[e]}},w=function(t,e){return null!=t&&r.call(t,e)},k=function(t,e){for(var n=e.length,i=0;i<n;i++){if(null==t)return;t=t[e[i]]}return n?t:void 0},_=Math.pow(2,53)-1,x=b("length"),S=function(t){var e=x(t);return"number"==typeof e&&0<=e&&e<=_};p.each=p.forEach=function(t,e,n){var i,o;if(e=m(e,n),S(t))for(i=0,o=t.length;i<o;i++)e(t[i],i,t);else{var r=p.keys(t);for(i=0,o=r.length;i<o;i++)e(t[r[i]],r[i],t)}return t},p.map=p.collect=function(t,e,n){e=g(e,n);for(var i=!S(t)&&p.keys(t),o=(i||t).length,r=Array(o),s=0;s<o;s++){var a=i?i[s]:s;r[s]=e(t[a],a,t)}return r};var T=function(l){return function(t,e,n,i){var o=3<=arguments.length;return function(t,e,n,i){var o=!S(t)&&p.keys(t),r=(o||t).length,s=0<l?0:r-1;for(i||(n=t[o?o[s]:s],s+=l);0<=s&&s<r;s+=l){var a=o?o[s]:s;n=e(n,t[a],a,t)}return n}(t,m(e,i,4),n,o)}};p.reduce=p.foldl=p.inject=T(1),p.reduceRight=p.foldr=T(-1),p.find=p.detect=function(t,e,n){var i=(S(t)?p.findIndex:p.findKey)(t,e,n);if(void 0!==i&&-1!==i)return t[i]},p.filter=p.select=function(t,i,e){var o=[];return i=g(i,e),p.each(t,function(t,e,n){i(t,e,n)&&o.push(t)}),o},p.reject=function(t,e,n){return p.filter(t,p.negate(g(e)),n)},p.every=p.all=function(t,e,n){e=g(e,n);for(var i=!S(t)&&p.keys(t),o=(i||t).length,r=0;r<o;r++){var s=i?i[r]:r;if(!e(t[s],s,t))return!1}return!0},p.some=p.any=function(t,e,n){e=g(e,n);for(var i=!S(t)&&p.keys(t),o=(i||t).length,r=0;r<o;r++){var s=i?i[r]:r;if(e(t[s],s,t))return!0}return!1},p.contains=p.includes=p.include=function(t,e,n,i){return S(t)||(t=p.values(t)),("number"!=typeof n||i)&&(n=0),0<=p.indexOf(t,e,n)},p.invoke=v(function(t,n,i){var o,r;return p.isFunction(n)?r=n:p.isArray(n)&&(o=n.slice(0,-1),n=n[n.length-1]),p.map(t,function(t){var e=r;if(!e){if(o&&o.length&&(t=k(t,o)),null==t)return;e=t[n]}return null==e?e:e.apply(t,i)})}),p.pluck=function(t,e){return p.map(t,p.property(e))},p.where=function(t,e){return p.filter(t,p.matcher(e))},p.findWhere=function(t,e){return p.find(t,p.matcher(e))},p.max=function(t,i,e){var n,o,r=-1/0,s=-1/0;if(null==i||"number"==typeof i&&"object"!=typeof t[0]&&null!=t)for(var a=0,l=(t=S(t)?t:p.values(t)).length;a<l;a++)null!=(n=t[a])&&r<n&&(r=n);else i=g(i,e),p.each(t,function(t,e,n){o=i(t,e,n),(s<o||o===-1/0&&r===-1/0)&&(r=t,s=o)});return r},p.min=function(t,i,e){var n,o,r=1/0,s=1/0;if(null==i||"number"==typeof i&&"object"!=typeof t[0]&&null!=t)for(var a=0,l=(t=S(t)?t:p.values(t)).length;a<l;a++)null!=(n=t[a])&&n<r&&(r=n);else i=g(i,e),p.each(t,function(t,e,n){((o=i(t,e,n))<s||o===1/0&&r===1/0)&&(r=t,s=o)});return r},p.shuffle=function(t){return p.sample(t,1/0)},p.sample=function(t,e,n){if(null==e||n)return S(t)||(t=p.values(t)),t[p.random(t.length-1)];var i=S(t)?p.clone(t):p.values(t),o=x(i);e=Math.max(Math.min(e,o),0);for(var r=o-1,s=0;s<e;s++){var a=p.random(s,r),l=i[s];i[s]=i[a],i[a]=l}return i.slice(0,e)},p.sortBy=function(t,i,e){var o=0;return i=g(i,e),p.pluck(p.map(t,function(t,e,n){return{value:t,index:o++,criteria:i(t,e,n)}}).sort(function(t,e){var n=t.criteria,i=e.criteria;if(n!==i){if(i<n||void 0===n)return 1;if(n<i||void 0===i)return-1}return t.index-e.index}),"value")};var C=function(s,e){return function(i,o,t){var r=e?[[],[]]:{};return o=g(o,t),p.each(i,function(t,e){var n=o(t,e,i);s(r,t,n)}),r}};p.groupBy=C(function(t,e,n){w(t,n)?t[n].push(e):t[n]=[e]}),p.indexBy=C(function(t,e,n){t[n]=e}),p.countBy=C(function(t,e,n){w(t,n)?t[n]++:t[n]=1});var O=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;p.toArray=function(t){return t?p.isArray(t)?l.call(t):p.isString(t)?t.match(O):S(t)?p.map(t,p.identity):p.values(t):[]},p.size=function(t){return null==t?0:S(t)?t.length:p.keys(t).length},p.partition=C(function(t,e,n){t[n?0:1].push(e)},!0),p.first=p.head=p.take=function(t,e,n){return null==t||t.length<1?null==e?void 0:[]:null==e||n?t[0]:p.initial(t,t.length-e)},p.initial=function(t,e,n){return l.call(t,0,Math.max(0,t.length-(null==e||n?1:e)))},p.last=function(t,e,n){return null==t||t.length<1?null==e?void 0:[]:null==e||n?t[t.length-1]:p.rest(t,Math.max(0,t.length-e))},p.rest=p.tail=p.drop=function(t,e,n){return l.call(t,null==e||n?1:e)},p.compact=function(t){return p.filter(t,Boolean)};var D=function(t,e,n,i){for(var o=(i=i||[]).length,r=0,s=x(t);r<s;r++){var a=t[r];if(S(a)&&(p.isArray(a)||p.isArguments(a)))if(e)for(var l=0,c=a.length;l<c;)i[o++]=a[l++];else D(a,e,n,i),o=i.length;else n||(i[o++]=a)}return i};p.flatten=function(t,e){return D(t,e,!1)},p.without=v(function(t,e){return p.difference(t,e)}),p.uniq=p.unique=function(t,e,n,i){p.isBoolean(e)||(i=n,n=e,e=!1),null!=n&&(n=g(n,i));for(var o=[],r=[],s=0,a=x(t);s<a;s++){var l=t[s],c=n?n(l,s,t):l;e&&!n?(s&&r===c||o.push(l),r=c):n?p.contains(r,c)||(r.push(c),o.push(l)):p.contains(o,l)||o.push(l)}return o},p.union=v(function(t){return p.uniq(D(t,!0,!0))}),p.intersection=function(t){for(var e=[],n=arguments.length,i=0,o=x(t);i<o;i++){var r=t[i];if(!p.contains(e,r)){var s;for(s=1;s<n&&p.contains(arguments[s],r);s++);s===n&&e.push(r)}}return e},p.difference=v(function(t,e){return e=D(e,!0,!0),p.filter(t,function(t){return!p.contains(e,t)})}),p.unzip=function(t){for(var e=t&&p.max(t,x).length||0,n=Array(e),i=0;i<e;i++)n[i]=p.pluck(t,i);return n},p.zip=v(p.unzip),p.object=function(t,e){for(var n={},i=0,o=x(t);i<o;i++)e?n[t[i]]=e[i]:n[t[i][0]]=t[i][1];return n};var M=function(r){return function(t,e,n){e=g(e,n);for(var i=x(t),o=0<r?0:i-1;0<=o&&o<i;o+=r)if(e(t[o],o,t))return o;return-1}};p.findIndex=M(1),p.findLastIndex=M(-1),p.sortedIndex=function(t,e,n,i){for(var o=(n=g(n,i,1))(e),r=0,s=x(t);r<s;){var a=Math.floor((r+s)/2);n(t[a])<o?r=a+1:s=a}return r};var E=function(r,s,a){return function(t,e,n){var i=0,o=x(t);if("number"==typeof n)0<r?i=0<=n?n:Math.max(n+o,i):o=0<=n?Math.min(n+1,o):n+o+1;else if(a&&n&&o)return t[n=a(t,e)]===e?n:-1;if(e!=e)return 0<=(n=s(l.call(t,i,o),p.isNaN))?n+i:-1;for(n=0<r?i:o-1;0<=n&&n<o;n+=r)if(t[n]===e)return n;return-1}};p.indexOf=E(1,p.findIndex,p.sortedIndex),p.lastIndexOf=E(-1,p.findLastIndex),p.range=function(t,e,n){null==e&&(e=t||0,t=0),n||(n=e<t?-1:1);for(var i=Math.max(Math.ceil((e-t)/n),0),o=Array(i),r=0;r<i;r++,t+=n)o[r]=t;return o},p.chunk=function(t,e){if(null==e||e<1)return[];for(var n=[],i=0,o=t.length;i<o;)n.push(l.call(t,i,i+=e));return n};var $=function(t,e,n,i,o){if(!(i instanceof e))return t.apply(n,o);var r=y(t.prototype),s=t.apply(r,o);return p.isObject(s)?s:r};p.bind=v(function(e,n,i){if(!p.isFunction(e))throw new TypeError("Bind must be called on a function");var o=v(function(t){return $(e,o,n,this,i.concat(t))});return o}),p.partial=v(function(o,r){var s=p.partial.placeholder,a=function(){for(var t=0,e=r.length,n=Array(e),i=0;i<e;i++)n[i]=r[i]===s?arguments[t++]:r[i];for(;t<arguments.length;)n.push(arguments[t++]);return $(o,a,this,this,n)};return a}),(p.partial.placeholder=p).bindAll=v(function(t,e){var n=(e=D(e,!1,!1)).length;if(n<1)throw new Error("bindAll must be passed function names");for(;n--;){var i=e[n];t[i]=p.bind(t[i],t)}}),p.memoize=function(i,o){var r=function(t){var e=r.cache,n=""+(o?o.apply(this,arguments):t);return w(e,n)||(e[n]=i.apply(this,arguments)),e[n]};return r.cache={},r},p.delay=v(function(t,e,n){return setTimeout(function(){return t.apply(null,n)},e)}),p.defer=p.partial(p.delay,p,1),p.throttle=function(n,i,o){var r,s,a,l,c=0;o||(o={});var u=function(){c=!1===o.leading?0:p.now(),r=null,l=n.apply(s,a),r||(s=a=null)},t=function(){var t=p.now();c||!1!==o.leading||(c=t);var e=i-(t-c);return s=this,a=arguments,e<=0||i<e?(r&&(clearTimeout(r),r=null),c=t,l=n.apply(s,a),r||(s=a=null)):r||!1===o.trailing||(r=setTimeout(u,e)),l};return t.cancel=function(){clearTimeout(r),c=0,r=s=a=null},t},p.debounce=function(n,i,o){var r,s,a=function(t,e){r=null,e&&(s=n.apply(t,e))},t=v(function(t){if(r&&clearTimeout(r),o){var e=!r;r=setTimeout(a,i),e&&(s=n.apply(this,t))}else r=p.delay(a,i,this,t);return s});return t.cancel=function(){clearTimeout(r),r=null},t},p.wrap=function(t,e){return p.partial(e,t)},p.negate=function(t){return function(){return!t.apply(this,arguments)}},p.compose=function(){var n=arguments,i=n.length-1;return function(){for(var t=i,e=n[i].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},p.after=function(t,e){return function(){if(--t<1)return e.apply(this,arguments)}},p.before=function(t,e){var n;return function(){return 0<--t&&(n=e.apply(this,arguments)),t<=1&&(e=null),n}},p.once=p.partial(p.before,2),p.restArguments=v;var A=!{toString:null}.propertyIsEnumerable("toString"),j=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],N=function(t,e){var n=j.length,i=t.constructor,o=p.isFunction(i)&&i.prototype||s,r="constructor";for(w(t,r)&&!p.contains(e,r)&&e.push(r);n--;)(r=j[n])in t&&t[r]!==o[r]&&!p.contains(e,r)&&e.push(r)};p.keys=function(t){if(!p.isObject(t))return[];if(a)return a(t);var e=[];for(var n in t)w(t,n)&&e.push(n);return A&&N(t,e),e},p.allKeys=function(t){if(!p.isObject(t))return[];var e=[];for(var n in t)e.push(n);return A&&N(t,e),e},p.values=function(t){for(var e=p.keys(t),n=e.length,i=Array(n),o=0;o<n;o++)i[o]=t[e[o]];return i},p.mapObject=function(t,e,n){e=g(e,n);for(var i=p.keys(t),o=i.length,r={},s=0;s<o;s++){var a=i[s];r[a]=e(t[a],a,t)}return r},p.pairs=function(t){for(var e=p.keys(t),n=e.length,i=Array(n),o=0;o<n;o++)i[o]=[e[o],t[e[o]]];return i},p.invert=function(t){for(var e={},n=p.keys(t),i=0,o=n.length;i<o;i++)e[t[n[i]]]=n[i];return e},p.functions=p.methods=function(t){var e=[];for(var n in t)p.isFunction(t[n])&&e.push(n);return e.sort()};var P=function(l,c){return function(t){var e=arguments.length;if(c&&(t=Object(t)),e<2||null==t)return t;for(var n=1;n<e;n++)for(var i=arguments[n],o=l(i),r=o.length,s=0;s<r;s++){var a=o[s];c&&void 0!==t[a]||(t[a]=i[a])}return t}};p.extend=P(p.allKeys),p.extendOwn=p.assign=P(p.keys),p.findKey=function(t,e,n){e=g(e,n);for(var i,o=p.keys(t),r=0,s=o.length;r<s;r++)if(e(t[i=o[r]],i,t))return i};var I,R,Y=function(t,e,n){return e in n};p.pick=v(function(t,e){var n={},i=e[0];if(null==t)return n;p.isFunction(i)?(1<e.length&&(i=m(i,e[1])),e=p.allKeys(t)):(i=Y,e=D(e,!1,!1),t=Object(t));for(var o=0,r=e.length;o<r;o++){var s=e[o],a=t[s];i(a,s,t)&&(n[s]=a)}return n}),p.omit=v(function(t,n){var e,i=n[0];return p.isFunction(i)?(i=p.negate(i),1<n.length&&(e=n[1])):(n=p.map(D(n,!1,!1),String),i=function(t,e){return!p.contains(n,e)}),p.pick(t,i,e)}),p.defaults=P(p.allKeys,!0),p.create=function(t,e){var n=y(t);return e&&p.extendOwn(n,e),n},p.clone=function(t){return p.isObject(t)?p.isArray(t)?t.slice():p.extend({},t):t},p.tap=function(t,e){return e(t),t},p.isMatch=function(t,e){var n=p.keys(e),i=n.length;if(null==t)return!i;for(var o=Object(t),r=0;r<i;r++){var s=n[r];if(e[s]!==o[s]||!(s in o))return!1}return!0},I=function(t,e,n,i){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return!1;if(t!=t)return e!=e;var o=typeof t;return("function"===o||"object"===o||"object"==typeof e)&&R(t,e,n,i)},R=function(t,e,n,i){t instanceof p&&(t=t._wrapped),e instanceof p&&(e=e._wrapped);var o=d.call(t);if(o!==d.call(e))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:0==+t?1/+t==1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object Symbol]":return h.valueOf.call(t)===h.valueOf.call(e)}var r="[object Array]"===o;if(!r){if("object"!=typeof t||"object"!=typeof e)return!1;var s=t.constructor,a=e.constructor;if(s!==a&&!(p.isFunction(s)&&s instanceof s&&p.isFunction(a)&&a instanceof a)&&"constructor"in t&&"constructor"in e)return!1}i=i||[];for(var l=(n=n||[]).length;l--;)if(n[l]===t)return i[l]===e;if(n.push(t),i.push(e),r){if((l=t.length)!==e.length)return!1;for(;l--;)if(!I(t[l],e[l],n,i))return!1}else{var c,u=p.keys(t);if(l=u.length,p.keys(e).length!==l)return!1;for(;l--;)if(c=u[l],!w(e,c)||!I(t[c],e[c],n,i))return!1}return n.pop(),i.pop(),!0},p.isEqual=function(t,e){return I(t,e)},p.isEmpty=function(t){return null==t||(S(t)&&(p.isArray(t)||p.isString(t)||p.isArguments(t))?0===t.length:0===p.keys(t).length)},p.isElement=function(t){return!(!t||1!==t.nodeType)},p.isArray=n||function(t){return"[object Array]"===d.call(t)},p.isObject=function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},p.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(e){p["is"+e]=function(t){return d.call(t)==="[object "+e+"]"}}),p.isArguments(arguments)||(p.isArguments=function(t){return w(t,"callee")});var F=t.document&&t.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof F&&(p.isFunction=function(t){return"function"==typeof t||!1}),p.isFinite=function(t){return!p.isSymbol(t)&&isFinite(t)&&!isNaN(parseFloat(t))},p.isNaN=function(t){return p.isNumber(t)&&isNaN(t)},p.isBoolean=function(t){return!0===t||!1===t||"[object Boolean]"===d.call(t)},p.isNull=function(t){return null===t},p.isUndefined=function(t){return void 0===t},p.has=function(t,e){if(!p.isArray(e))return w(t,e);for(var n=e.length,i=0;i<n;i++){var o=e[i];if(null==t||!r.call(t,o))return!1;t=t[o]}return!!n},p.noConflict=function(){return t._=e,this},p.identity=function(t){return t},p.constant=function(t){return function(){return t}},p.noop=function(){},p.property=function(e){return p.isArray(e)?function(t){return k(t,e)}:b(e)},p.propertyOf=function(e){return null==e?function(){}:function(t){return p.isArray(t)?k(e,t):e[t]}},p.matcher=p.matches=function(e){return e=p.extendOwn({},e),function(t){return p.isMatch(t,e)}},p.times=function(t,e,n){var i=Array(Math.max(0,t));e=m(e,n,1);for(var o=0;o<t;o++)i[o]=e(o);return i},p.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},p.now=Date.now||function(){return(new Date).getTime()};var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},H=p.invert(L),U=function(e){var n=function(t){return e[t]},t="(?:"+p.keys(e).join("|")+")",i=RegExp(t),o=RegExp(t,"g");return function(t){return t=null==t?"":""+t,i.test(t)?t.replace(o,n):t}};p.escape=U(L),p.unescape=U(H),p.result=function(t,e,n){p.isArray(e)||(e=[e]);var i=e.length;if(!i)return p.isFunction(n)?n.call(t):n;for(var o=0;o<i;o++){var r=null==t?void 0:t[e[o]];void 0===r&&(r=n,o=i),t=p.isFunction(r)?r.call(t):r}return t};var W=0;p.uniqueId=function(t){var e=++W+"";return t?t+e:e},p.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var z=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\u2028|\u2029/g,G=function(t){return"\\"+q[t]};p.template=function(r,t,e){!t&&e&&(t=e),t=p.defaults({},t,p.templateSettings);var n,i=RegExp([(t.escape||z).source,(t.interpolate||z).source,(t.evaluate||z).source].join("|")+"|$","g"),s=0,a="__p+='";r.replace(i,function(t,e,n,i,o){return a+=r.slice(s,o).replace(V,G),s=o+t.length,e?a+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":n?a+="'+\n((__t=("+n+"))==null?'':__t)+\n'":i&&(a+="';\n"+i+"\n__p+='"),t}),a+="';\n",t.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{n=new Function(t.variable||"obj","_",a)}catch(t){throw t.source=a,t}var o=function(t){return n.call(this,t,p)},l=t.variable||"obj";return o.source="function("+l+"){\n"+a+"}",o},p.chain=function(t){var e=p(t);return e._chain=!0,e};var B=function(t,e){return t._chain?p(e).chain():e};p.mixin=function(n){return p.each(p.functions(n),function(t){var e=p[t]=n[t];p.prototype[t]=function(){var t=[this._wrapped];return o.apply(t,arguments),B(this,e.apply(p,t))}}),p},p.mixin(p),p.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var n=i[e];p.prototype[e]=function(){var t=this._wrapped;return n.apply(t,arguments),"shift"!==e&&"splice"!==e||0!==t.length||delete t[0],B(this,t)}}),p.each(["concat","join","slice"],function(t){var e=i[t];p.prototype[t]=function(){return B(this,e.apply(this._wrapped,arguments))}}),p.prototype.value=function(){return this._wrapped},p.prototype.valueOf=p.prototype.toJSON=p.prototype.value,p.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return p})}(),define("mockup-patterns-contentloader",["jquery","pat-base","pat-logger","pat-registry","mockup-utils","underscore"],function(i,t,e,o,r,s){"use strict";var a=e.getLogger("pat-contentloader");return t.extend({name:"contentloader",trigger:".pat-contentloader",parser:"mockup",defaults:{url:null,content:null,trigger:"click",target:null,template:null,dataType:"html"},init:function(){var e=this;"el"===e.options.url&&"A"===e.$el[0].tagName&&(e.options.url=e.$el.attr("href")),e.$el.removeClass("loading-content"),e.$el.removeClass("content-load-error"),"immediate"===e.options.trigger?e._load():e.$el.on(e.options.trigger,function(t){t.preventDefault(),e._load()})},_load:function(){this.$el.addClass("loading-content"),this.options.url?this.loadRemote():this.loadLocal()},loadRemote:function(){var n=this;i.ajax({url:n.options.url,dataType:n.options.dataType,success:function(t){var e;if("html"===n.options.dataType)-1!==t.indexOf("<html")&&(t=r.parseBodyTag(t)),e=i("<div>"+t+"</div>");else if(-1!==n.options.dataType.indexOf("json")){t.constructor===Array&&1===t.length&&(t=t[0]);try{e=i(s.template(n.options.template)(t))}catch(t){return n.$el.removeClass("loading-content"),n.$el.addClass("content-load-error"),void a.warn("error rendering template. pat-contentloader will not work")}}null!==n.options.content&&(e=e.find(n.options.content)),n.loadLocal(e)},error:function(){n.$el.removeClass("loading-content"),n.$el.addClass("content-load-error")}})},loadLocal:function(t){var e=this;if(!t&&null===e.options.content)return e.$el.removeClass("loading-content"),e.$el.addClass("content-load-error"),void a.warn("No selector configured");var n=e.$el;if(null!==e.options.target&&0===(n=i(e.options.target)).size())return e.$el.removeClass("loading-content"),e.$el.addClass("content-load-error"),void a.warn("No target nodes found");t||(t=i(e.options.content).clone()),t.length?(t.show(),n.replaceWith(t),o.scan(t)):n.empty(),e.$el.removeClass("loading-content"),e.emit("loading-done")}})}),define("mockup-patterns-cookietrigger",["pat-base"],function(t){"use strict";return t.extend({name:"cookietrigger",trigger:".pat-cookietrigger",parser:"mockup",isCookiesEnabled:function(){var t="areYourCookiesEnabled=0";document.cookie=t;var e=document.cookie;return-1===e.indexOf(t)?0:(t="areYourCookiesEnabled=1",document.cookie=t,-1===(e=document.cookie).indexOf(t)?0:(document.cookie="areYourCookiesEnabled=; expires=Thu, 01-Jan-70 00:00:01 GMT",1))},showIfCookiesDisabled:function(){this.isCookiesEnabled()?this.$el.hide():this.$el.show()},init:function(){this.showIfCookiesDisabled()}})}),define("mockup-patterns-formautofocus",["jquery","pat-base"],function(e,t,n){"use strict";return t.extend({name:"formautofocus",trigger:".pat-formautofocus",parser:"mockup",defaults:{condition:"div.error",target:"div.error :input:not(.formTabs):visible:first",always:":input:not(.formTabs):visible:first"},init:function(){var t=this;0!==e(t.options.condition,t.$el).size()?e(t.options.target,t.$el).focus():e(t.options.always,t.$el).focus()}})}),define("mockup-i18n",["jquery"],function(o){"use strict";return function(){var a=this;a.baseUrl=o("body").attr("data-i18ncatalogurl"),a.currentLanguage=o("html").attr("lang")||"en",1<a.currentLanguage.split("-").length&&(a.currentLanguage=a.currentLanguage.split("-")[0]+"_"+a.currentLanguage.split("-")[1].toUpperCase()),a.storage=null,a.catalogs={},a.ttl=864e5,Date.now||(Date.now=function(){return(new Date).valueOf()});try{"localStorage"in window&&null!==window.localStorage&&"JSON"in window&&null!==window.JSON&&(a.storage=window.localStorage)}catch(t){}a.configure=function(t){for(var e in t)a[e]=t[e]},a._setCatalog=function(t,e,n){t in a.catalogs||(a.catalogs[t]={}),a.catalogs[t][e]=n},a._storeCatalog=function(t,e,n){var i=t+"-"+e;null!==a.storage&&null!==n&&(a.storage.setItem(i,JSON.stringify(n)),a.storage.setItem(i+"-updated",Date.now()))},a.getUrl=function(t,e){return a.baseUrl+"?domain="+t+"&language="+e},a.loadCatalog=function(e,n){if(void 0===n&&(n=a.currentLanguage),null!==a.storage){var t=e+"-"+n;if(t in a.storage&&Date.now()-parseInt(a.storage.getItem(t+"-updated"),10)<a.ttl){var i=JSON.parse(a.storage.getItem(t));return void a._setCatalog(e,n,i)}}a.baseUrl&&o.getJSON(a.getUrl(e,n),function(t){null!==t&&(a._setCatalog(e,n,t),a._storeCatalog(e,n,t))})},a.MessageFactory=function(r,s){return s=s||a.currentLanguage,function(t,e){var n,i,o;if(n=r in a.catalogs&&s in a.catalogs[r]&&t in a.catalogs[r][s]?a.catalogs[r][s][t]:t,e)for(o in e)e.hasOwnProperty(o)&&(i=new RegExp("\\$\\{"+o+"\\}","g"),n=n.replace(i,e[o]));return n}}}}),define("translate",["mockup-i18n"],function(i){"use strict";var o=null;return function(t,e){if(null===o){var n=new i;n.loadCatalog("widgets"),o=n.MessageFactory("widgets")}return o(t,e)}}),define("mockup-patterns-formunloadalert",["jquery","pat-base","translate"],function(o,t,e){"use strict";return t.extend({name:"formunloadalert",trigger:".pat-formunloadalert",parser:"mockup",_changed:!1,_suppressed:!1,defaults:{message:e("Discard changes? If you click OK, any changes you have made will be lost."),changingEvents:"change keyup paste",changingFields:"input,select,textarea,fileupload"},init:function(){var n=this;if(n.$el.is("form")){o(n.options.changingFields,n.$el).on(n.options.changingEvents,function(t){n._changed=!0});var i=n.$el.parents(".plone-modal");0!==i.size()?i.data("patternPloneModal").on("hide",function(t){var e=i.data("patternPloneModal");e&&(e._suppressHide=n._handleUnload.call(n,t))}):o(window).on("beforeunload",function(t){return n._handleUnload(t)}),n.$el.on("submit",function(t){n._suppressed=!0})}},_handleUnload:function(t){var e=this;if(e._suppressed)e._suppressed=!1;else if(e._changed){var n=e.options.message;return e._handleMsg(t,n),o(window).trigger("messageset"),n}},_handleMsg:function(t,e){(t||window.event).returnValue=e}})}),define("mockup-patterns-livesearch",["jquery","pat-base","underscore","translate"],function(s,t,a,l){"use strict";return t.extend({name:"livesearch",trigger:".pat-livesearch",parser:"mockup",timeout:null,active:!1,results:null,selectedItem:-1,resultsClass:"livesearch-results",defaults:{ajaxUrl:null,defaultSortOn:"",perPage:7,quietMillis:350,minimumInputLength:4,inputSelector:'input[type="text"]',itemTemplate:'<li class="search-result <%- state %>"><h4 class="title"><a href="<%- url %>"><%- title %></a></h4><p class="description"><%- description %></p></li>'},doSearch:function(e){var o=this;o.active=!0,o.render(),o.$el.addClass("searching");var n=o.$el.serialize();void 0===e&&(e=1);var t=function(){var t=location.search,e=t.indexOf("sort_on");if(-1===e){var n=s("#search-results");return 0<n.length?n.attr("data-default-sort"):o.options.defaultSortOn}var i=t.substring(e);return i=(i=i.split("&")[0]).split("=")[1]}();s.ajax({url:o.options.ajaxUrl+"?"+n+"&page="+e+"&perPage="+o.options.perPage+"&sort_on="+t,dataType:"json"}).done(function(t){o.results=t,o.page=e,n!==o.$el.serialize()&&o.doSearch()}).fail(function(){o.results={items:[{url:"",title:l("Error"),description:l("There was an error searching…"),state:"error",error:!1}],total:1},o.page=1}).always(function(){o.active=!1,o.selectedItem=-1,o.$el.removeClass("searching"),o.render()})},render:function(){var i=this;if(i.$results.empty(),i.active?i.$results.append(s('<li class="searching">'+l("searching…")+"</li>")):null===i.results?i.$results.append(s('<li class="no-results no-search">'+l("enter search phrase")+"</li>")):0===i.results.total?i.$results.append(s('<li class="no-results">'+l("no results found")+"</li>")):i.$results.append(s('<li class="results-summary">'+l("found")+" "+i.results.total+" "+l("results")+"</li>")),null!==i.results){var o=a.template(i.options.itemTemplate);a.each(i.results.items,function(t,e){var n=s(o(s.extend({_t:l},t)));n.attr("data-url",t.url).on("click",function(){t.error||(window.location=t.url)}),e===i.selectedItem&&n.addClass("selected"),i.$results.append(n)});var t=[];if(1<i.page){var e=s('<a href="#" class="prev">'+l("Previous")+"</a>");e.click(function(t){i.disableHiding=!0,t.preventDefault(),i.doSearch(i.page-1)}),t.push(e)}if(i.page*i.options.perPage<i.results.total){var n=s('<a href="#" class="next">'+l("Next")+"</a>");n.click(function(t){i.disableHiding=!0,t.preventDefault(),i.doSearch(i.page+1)}),t.push(n)}if(0<t.length){var r=s('<li class="load-more"><div class="page">'+i.page+"</div></li>");r.prepend(t),i.$results.append(r)}}i.position()},position:function(){var t=this;t.$el.addClass("livesearch-active");var e=t.$input.position();t.$results.width(t.$el.outerWidth()),t.$results.css({top:e.top+t.$input.outerHeight(),left:e.left}),t.$results.show()},hide:function(){this.$results.hide(),this.$el.removeClass("livesearch-active")},init:function(){var n=this;n.$input=n.$el.find(n.options.inputSelector),n.$input.off("focusout").on("focusout",function(){setTimeout(function(){n.disableHiding?(n.disableHiding=!1,n.$input.focus()):n.hide()},200)}).off("focusin").on("focusin",function(){n.onceFocused?n.$results.is(":visible")||n.render():(n.onceFocused=!0,n.$input.val().length>=n.options.minimumInputLength&&n.doSearch())}).attr("autocomplete","off").off("keyup").on("keyup",function(t){var e=t.keyCode||t.which;if(27===e)return n.$input.val(""),void n.hide();if(n.results&&n.results.items&&0<n.results.items.length){if(13===e)return void(-1!==n.selectedItem&&(window.location=n.results.items[n.selectedItem].url));if(38===e)return void(-1!==n.selectedItem&&(n.selectedItem-=1,n.render()));if(40===e)return void(n.selectedItem<n.results.items.length&&(n.selectedItem+=1,n.render()))}null!==n.timeout&&(clearTimeout(n.timeout),n.timeout=null),n.active||(n.$input.val().length>=n.options.minimumInputLength?n.timeout=setTimeout(function(){n.doSearch()},n.options.quietMillis):(n.results=null,n.render()))}),s("#sorting-options a").click(function(t){t.preventDefault(),n.onceFocused=!1}),n.$results=s('<ul class="'+n.resultsClass+'"></ul>').hide().insertAfter(n.$input)}})}),define("mockup-patterns-markspeciallinks",["pat-base","jquery"],function(t,l){"use strict";return t.extend({name:"markspeciallinks",trigger:".pat-markspeciallinks",parser:"mockup",defaults:{external_links_open_new_window:!1,mark_special_links:!0},init:function(){var t,e,n,i,o,r,s=this,a=s.$el;"string"==typeof s.options.external_links_open_new_window?t="true"===s.options.external_links_open_new_window.toLowerCase():"boolean"==typeof s.options.external_links_open_new_window&&(t=s.options.external_links_open_new_window),"string"==typeof s.options.mark_special_links?e="true"===s.options.mark_special_links.toLowerCase():"boolean"==typeof s.options.mark_special_links&&(e=s.options.mark_special_links),n=window.location.protocol+"//"+window.location.host,i=/^(mailto|ftp|news|irc|h323|sip|callto|https|feed|webcal)/,o=a,t&&o.find('a[href^="http"]:not(.link-plain):not([href^="'+n+'"])').attr("target","_blank").attr("rel","noopener"),e&&(o.find('a[href^="http:"]:not(.link-plain):not([href^="'+n+'"]):not(:has(img))').before('<i class="glyphicon link-external"></i>'),o.find('a[href]:not([href^="http:"]):not(.link-plain):not([href^="'+n+'"]):not(:has(img)):not([href^="#"])').each(function(){if(r=i.exec(l(this).attr("href"))){var t="glyphicon link-"+r[0];l(this).before('<i class="'+t+'"></i>')}}))}})}),define("mockup-patterns-backdrop",["jquery","pat-base"],function(t,e){"use strict";return e.extend({name:"backdrop",trigger:".pat-backdrop",parser:"mockup",defaults:{zIndex:null,opacity:.8,className:"plone-backdrop",classActiveName:"plone-backdrop-active",closeOnEsc:!0,closeOnClick:!0},init:function(){var n=this;n.$backdrop=t("> ."+n.options.className,n.$el),0===n.$backdrop.size()&&(n.$backdrop=t("<div/>").hide().appendTo(n.$el).addClass(n.options.className),null!==n.options.zIndex&&n.$backdrop.css("z-index",n.options.zIndex)),!0===n.options.closeOnEsc&&t(document).on("keydown",function(t,e){n.$el.is("."+n.options.classActiveName)&&27===t.keyCode&&n.hide()}),!0===n.options.closeOnClick&&n.$backdrop.on("click",function(){n.$el.is("."+n.options.classActiveName)&&n.hide()})},show:function(){var t=this;t.$el.hasClass(t.options.classActiveName)||(t.emit("show"),t.$backdrop.css("opacity","0").show(),t.$el.addClass(t.options.classActiveName),t.$backdrop.animate({opacity:t.options.opacity},500),t.emit("shown"))},hide:function(){var t=this;t.$el.hasClass(t.options.classActiveName)&&(t.emit("hide"),t.$backdrop.animate({opacity:"0"},500).hide(),t.$el.removeClass(t.options.classActiveName),t.emit("hidden"))}})}),function(i,o){if("function"==typeof define&&define.amd)define("backbone",["underscore","jquery","exports"],function(t,e,n){i.Backbone=o(i,n,t,e)});else if("undefined"!=typeof exports){var t=require("underscore");o(i,exports,t)}else i.Backbone=o(i,{},i._,i.jQuery||i.Zepto||i.ender||i.$)}(this,function(t,a,_,e){var n=t.Backbone,i=[],o=i.slice;a.VERSION="1.1.2",a.$=e,a.noConflict=function(){return t.Backbone=n,this},a.emulateHTTP=!1,a.emulateJSON=!1;var r=a.Events={on:function(t,e,n){return h(this,"on",t,[e,n])&&e&&(this._events||(this._events={}),(this._events[t]||(this._events[t]=[])).push({callback:e,context:n,ctx:n||this})),this},once:function(t,e,n){if(!h(this,"once",t,[e,n])||!e)return this;var i=this,o=_.once(function(){i.off(t,o),e.apply(this,arguments)});return o._callback=e,this.on(t,o,n)},off:function(t,e,n){var i,o,r,s,a,l,c,u;if(!this._events||!h(this,"off",t,[e,n]))return this;if(!t&&!e&&!n)return this._events=void 0,this;for(a=0,l=(s=t?[t]:_.keys(this._events)).length;a<l;a++)if(t=s[a],r=this._events[t]){if(this._events[t]=i=[],e||n)for(c=0,u=r.length;c<u;c++)o=r[c],(e&&e!==o.callback&&e!==o.callback._callback||n&&n!==o.context)&&i.push(o);i.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;var e=o.call(arguments,1);if(!h(this,"trigger",t,e))return this;var n=this._events[t],i=this._events.all;return n&&s(n,e),i&&s(i,arguments),this},stopListening:function(t,e,n){var i=this._listeningTo;if(!i)return this;var o=!e&&!n;for(var r in n||"object"!=typeof e||(n=this),t&&((i={})[t._listenId]=t),i)(t=i[r]).off(e,n,this),(o||_.isEmpty(t._events))&&delete this._listeningTo[r];return this}},l=/\s+/,h=function(t,e,n,i){if(!n)return!0;if("object"==typeof n){for(var o in n)t[e].apply(t,[o,n[o]].concat(i));return!1}if(l.test(n)){for(var r=n.split(l),s=0,a=r.length;s<a;s++)t[e].apply(t,[r[s]].concat(i));return!1}return!0},s=function(t,e){var n,i=-1,o=t.length,r=e[0],s=e[1],a=e[2];switch(e.length){case 0:for(;++i<o;)(n=t[i]).callback.call(n.ctx);return;case 1:for(;++i<o;)(n=t[i]).callback.call(n.ctx,r);return;case 2:for(;++i<o;)(n=t[i]).callback.call(n.ctx,r,s);return;case 3:for(;++i<o;)(n=t[i]).callback.call(n.ctx,r,s,a);return;default:for(;++i<o;)(n=t[i]).callback.apply(n.ctx,e);return}};_.each({listenTo:"on",listenToOnce:"once"},function(o,t){r[t]=function(t,e,n){var i=this._listeningTo||(this._listeningTo={});return n||"object"!=typeof e||(n=this),(i[t._listenId||(t._listenId=_.uniqueId("l"))]=t)[o](e,n,this),this}}),r.bind=r.on,r.unbind=r.off,_.extend(a,r);var x=a.Model=function(t,e){var n=t||{};e||(e={}),this.cid=_.uniqueId("c"),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(n=this.parse(n,e)||{}),n=_.defaults({},n,_.result(this,"defaults")),this.set(n,e),this.changed={},this.initialize.apply(this,arguments)};_.extend(x.prototype,r,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return _.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return _.escape(this.get(t))},has:function(t){return null!=this.get(t)},set:function(t,e,n){var i,o,r,s,a,l,c,u;if(null==t)return this;if("object"==typeof t?(o=t,n=e):(o={})[t]=e,n||(n={}),!this._validate(o,n))return!1;for(i in r=n.unset,a=n.silent,s=[],l=this._changing,this._changing=!0,l||(this._previousAttributes=_.clone(this.attributes),this.changed={}),u=this.attributes,c=this._previousAttributes,this.idAttribute in o&&(this.id=o[this.idAttribute]),o)e=o[i],_.isEqual(u[i],e)||s.push(i),_.isEqual(c[i],e)?delete this.changed[i]:this.changed[i]=e,r?delete u[i]:u[i]=e;if(!a){s.length&&(this._pending=n);for(var h=0,d=s.length;h<d;h++)this.trigger("change:"+s[h],this,u[s[h]],n)}if(l)return this;if(!a)for(;this._pending;)n=this._pending,this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,_.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,_.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!_.isEmpty(this.changed):_.has(this.changed,t)},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&_.clone(this.changed);var e,n=!1,i=this._changing?this._previousAttributes:this.attributes;for(var o in t)_.isEqual(i[o],e=t[o])||((n||(n={}))[o]=e);return n},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return _.clone(this._previousAttributes)},fetch:function(e){void 0===(e=e?_.clone(e):{}).parse&&(e.parse=!0);var n=this,i=e.success;return e.success=function(t){if(!n.set(n.parse(t,e),e))return!1;i&&i(n,t,e),n.trigger("sync",n,t,e)},A(this,e),this.sync("read",this,e)},save:function(t,e,n){var i,o,r,s=this.attributes;if(null==t||"object"==typeof t?(i=t,n=e):(i={})[t]=e,n=_.extend({validate:!0},n),i&&!n.wait){if(!this.set(i,n))return!1}else if(!this._validate(i,n))return!1;i&&n.wait&&(this.attributes=_.extend({},s,i)),void 0===n.parse&&(n.parse=!0);var a=this,l=n.success;return n.success=function(t){a.attributes=s;var e=a.parse(t,n);if(n.wait&&(e=_.extend(i||{},e)),_.isObject(e)&&!a.set(e,n))return!1;l&&l(a,t,n),a.trigger("sync",a,t,n)},A(this,n),"patch"===(o=this.isNew()?"create":n.patch?"patch":"update")&&(n.attrs=i),r=this.sync(o,this,n),i&&n.wait&&(this.attributes=s),r},destroy:function(e){e=e?_.clone(e):{};var n=this,i=e.success,o=function(){n.trigger("destroy",n,n.collection,e)};if(e.success=function(t){(e.wait||n.isNew())&&o(),i&&i(n,t,e),n.isNew()||n.trigger("sync",n,t,e)},this.isNew())return e.success(),!1;A(this,e);var t=this.sync("delete",this,e);return e.wait||o(),t},url:function(){var t=_.result(this,"urlRoot")||_.result(this.collection,"url")||$();return this.isNew()?t:t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},_.extend(t||{},{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=_.extend({},this.attributes,t);var n=this.validationError=this.validate(t,e)||null;return!n||(this.trigger("invalid",this,n,_.extend(e,{validationError:n})),!1)}});_.each(["keys","values","pairs","invert","pick","omit"],function(e){x.prototype[e]=function(){var t=o.call(arguments);return t.unshift(this.attributes),_[e].apply(_,t)}});var c=a.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,_.extend({silent:!0},e))},S={add:!0,remove:!0,merge:!0},u={add:!0,remove:!1};_.extend(c.prototype,r,{model:x,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,_.extend({merge:!1},e,u))},remove:function(t,e){var n,i,o,r,s=!_.isArray(t);for(e||(e={}),n=0,i=(t=s?[t]:_.clone(t)).length;n<i;n++)(r=t[n]=this.get(t[n]))&&(delete this._byId[r.id],delete this._byId[r.cid],o=this.indexOf(r),this.models.splice(o,1),this.length--,e.silent||(e.index=o,r.trigger("remove",r,this,e)),this._removeReference(r,e));return s?t[0]:t},set:function(t,e){(e=_.defaults({},e,S)).parse&&(t=this.parse(t,e));var n,i,o,r,s,a,l,c=!_.isArray(t);t=c?t?[t]:[]:_.clone(t);var u=e.at,h=this.model,d=this.comparator&&null==u&&!1!==e.sort,p=_.isString(this.comparator)?this.comparator:null,f=[],m=[],g={},v=e.add,y=e.merge,b=e.remove,w=!(d||!v||!b)&&[];for(n=0,i=t.length;n<i;n++){if(o=(s=t[n]||{})instanceof x?r=s:s[h.prototype.idAttribute||"id"],a=this.get(o))b&&(g[a.cid]=!0),y&&(s=s===r?r.attributes:s,e.parse&&(s=a.parse(s,e)),a.set(s,e),d&&!l&&a.hasChanged(p)&&(l=!0)),t[n]=a;else if(v){if(!(r=t[n]=this._prepareModel(s,e)))continue;f.push(r),this._addReference(r,e)}r=a||r,!w||!r.isNew()&&g[r.id]||w.push(r),g[r.id]=!0}if(b){for(n=0,i=this.length;n<i;++n)g[(r=this.models[n]).cid]||m.push(r);m.length&&this.remove(m,e)}if(f.length||w&&w.length)if(d&&(l=!0),this.length+=f.length,null!=u)for(n=0,i=f.length;n<i;n++)this.models.splice(u+n,0,f[n]);else{w&&(this.models.length=0);var k=w||f;for(n=0,i=k.length;n<i;n++)this.models.push(k[n])}if(l&&this.sort({silent:!0}),!e.silent){for(n=0,i=f.length;n<i;n++)(r=f[n]).trigger("add",r,this,e);(l||w&&w.length)&&this.trigger("sort",this,e)}return c?t[0]:t},reset:function(t,e){e||(e={});for(var n=0,i=this.models.length;n<i;n++)this._removeReference(this.models[n],e);return e.previousModels=this.models,this._reset(),t=this.add(t,_.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,_.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return this.add(t,_.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t),e},slice:function(){return o.apply(this.models,arguments)},get:function(t){if(null!=t)return this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(n,t){return _.isEmpty(n)?t?void 0:[]:this[t?"find":"filter"](function(t){for(var e in n)if(n[e]!==t.get(e))return!1;return!0})},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return t||(t={}),_.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(_.bind(this.comparator,this)),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return _.invoke(this.models,"get",t)},fetch:function(n){void 0===(n=n?_.clone(n):{}).parse&&(n.parse=!0);var i=n.success,o=this;return n.success=function(t){var e=n.reset?"reset":"set";o[e](t,n),i&&i(o,t,n),o.trigger("sync",o,t,n)},A(this,n),this.sync("read",this,n)},create:function(t,n){if(n=n?_.clone(n):{},!(t=this._prepareModel(t,n)))return!1;n.wait||this.add(t,n);var i=this,o=n.success;return n.success=function(t,e){n.wait&&i.add(t,n),o&&o(t,e,n)},t.save(null,n),t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(t instanceof x)return t;var n=new(((e=e?_.clone(e):{}).collection=this).model)(t,e);return n.validationError?(this.trigger("invalid",this,n.validationError,e),!1):n},_addReference:function(t,e){null!=(this._byId[t.cid]=t).id&&(this._byId[t.id]=t),t.collection||(t.collection=this),t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,n,i){("add"!==t&&"remove"!==t||n===this)&&("destroy"===t&&this.remove(e,i),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],null!=e.id&&(this._byId[e.id]=e)),this.trigger.apply(this,arguments))}});_.each(["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"],function(e){c.prototype[e]=function(){var t=o.call(arguments);return t.unshift(this.models),_[e].apply(_,t)}});_.each(["groupBy","countBy","sortBy","indexBy"],function(i){c.prototype[i]=function(e,t){var n=_.isFunction(e)?e:function(t){return t.get(e)};return _[i](this.models,n,t)}});var d=a.View=function(t){this.cid=_.uniqueId("view"),t||(t={}),_.extend(this,_.pick(t,f)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},p=/^(\S+)\s*(.*)$/,f=["model","collection","el","id","attributes","className","tagName","events"];_.extend(d.prototype,r,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(t,e){return this.$el&&this.undelegateEvents(),this.$el=t instanceof a.$?t:a.$(t),this.el=this.$el[0],!1!==e&&this.delegateEvents(),this},delegateEvents:function(t){if(!t&&!(t=_.result(this,"events")))return this;for(var e in this.undelegateEvents(),t){var n=t[e];if(_.isFunction(n)||(n=this[t[e]]),n){var i=e.match(p),o=i[1],r=i[2];n=_.bind(n,this),o+=".delegateEvents"+this.cid,""===r?this.$el.on(o,n):this.$el.on(o,r,n)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(this.el)this.setElement(_.result(this,"el"),!1);else{var t=_.extend({},_.result(this,"attributes"));this.id&&(t.id=_.result(this,"id")),this.className&&(t.class=_.result(this,"className"));var e=a.$("<"+_.result(this,"tagName")+">").attr(t);this.setElement(e,!1)}}}),a.sync=function(t,e,n){var i=g[t];_.defaults(n||(n={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var o={type:i,dataType:"json"};if(n.url||(o.url=_.result(e,"url")||$()),null!=n.data||!e||"create"!==t&&"update"!==t&&"patch"!==t||(o.contentType="application/json",o.data=JSON.stringify(n.attrs||e.toJSON(n))),n.emulateJSON&&(o.contentType="application/x-www-form-urlencoded",o.data=o.data?{model:o.data}:{}),n.emulateHTTP&&("PUT"===i||"DELETE"===i||"PATCH"===i)){o.type="POST",n.emulateJSON&&(o.data._method=i);var r=n.beforeSend;n.beforeSend=function(t){if(t.setRequestHeader("X-HTTP-Method-Override",i),r)return r.apply(this,arguments)}}"GET"===o.type||n.emulateJSON||(o.processData=!1),"PATCH"===o.type&&m&&(o.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var s=n.xhr=a.ajax(_.extend(o,n));return e.trigger("request",e,s,n),s};var m=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),g={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var v=a.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},y=/\((.*?)\)/g,b=/(\(\?)?:\w+/g,w=/\*\w+/g,k=/[\-{}\[\]+?.,\\\^$|#\s]/g;_.extend(v.prototype,r,{initialize:function(){},route:function(n,i,o){_.isRegExp(n)||(n=this._routeToRegExp(n)),_.isFunction(i)&&(o=i,i=""),o||(o=this[i]);var r=this;return a.history.route(n,function(t){var e=r._extractParameters(n,t);r.execute(o,e),r.trigger.apply(r,["route:"+i].concat(e)),r.trigger("route",i,e),a.history.trigger("route",r,i,e)}),this},execute:function(t,e){t&&t.apply(this,e)},navigate:function(t,e){return a.history.navigate(t,e),this},_bindRoutes:function(){if(this.routes){this.routes=_.result(this,"routes");for(var t,e=_.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(k,"\\$&").replace(y,"(?:$1)?").replace(b,function(t,e){return e?t:"([^/?]+)"}).replace(w,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);return _.map(n,function(t,e){return e===n.length-1?t||null:t?decodeURIComponent(t):null})}});var T=a.History=function(){this.handlers=[],_.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},C=/^[#\/]|\s+$/g,O=/^\/+|\/+$/g,D=/msie [\w.]+/,M=/\/$/,E=/#.*$/;T.started=!1,_.extend(T.prototype,r,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var n=this.root.replace(M,"");t.indexOf(n)||(t=t.slice(n.length))}else t=this.getHash();return t.replace(C,"")},start:function(t){if(T.started)throw new Error("Backbone.history has already been started");T.started=!0,this.options=_.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment(),n=document.documentMode,i=D.exec(navigator.userAgent.toLowerCase())&&(!n||n<=7);if(this.root=("/"+this.root+"/").replace(O,"/"),i&&this._wantsHashChange){var o=a.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=o.hide().appendTo("body")[0].contentWindow,this.navigate(e)}this._hasPushState?a.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!i?a.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=e;var r=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&r.hash&&(this.fragment=this.getHash().replace(C,""),this.history.replaceState({},document.title,this.root+this.fragment))}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),T.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe&&(e=this.getFragment(this.getHash(this.iframe))),e===this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()},loadUrl:function(e){return e=this.fragment=this.getFragment(e),_.any(this.handlers,function(t){if(t.route.test(e))return t.callback(e),!0})},navigate:function(t,e){if(!T.started)return!1;e&&!0!==e||(e={trigger:!!e});var n=this.root+(t=this.getFragment(t||""));if(t=t.replace(E,""),this.fragment!==t){if(""===(this.fragment=t)&&"/"!==n&&(n=n.slice(0,-1)),this._hasPushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,t,e.replace))}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,n){if(n){var i=t.href.replace(/(javascript:|#).*$/,"");t.replace(i+"#"+e)}else t.hash="#"+e}}),a.history=new T;x.extend=c.extend=v.extend=d.extend=T.extend=function(t,e){var n,i=this;n=t&&_.has(t,"constructor")?t.constructor:function(){return i.apply(this,arguments)},_.extend(n,i,e);var o=function(){this.constructor=n};return o.prototype=i.prototype,n.prototype=new o,t&&_.extend(n.prototype,t),n.__super__=i.prototype,n};var $=function(){throw new Error('A "url" property or function must be specified')},A=function(e,n){var i=n.error;n.error=function(t){i&&i(e,t,n),e.trigger("error",e,t,n)}};return a}),define("mockup-router",["underscore","backbone"],function(a,t){"use strict";var l=function(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")};return new(t.Router.extend({actions:[],redirects:{},addRoute:function(t,e,n,i,o,r){void 0===a.findWhere(this.patterns,{patternName:t,id:e})&&this.actions.push({patternName:t,id:e,callback:n,context:i,pathExp:o,expReplace:r});var s=new RegExp("("+l(t)+":"+l(e)+")");this.route(s,"handleRoute")},addRedirect:function(t,e){this.redirects[t]=e},handleRoute:function(t){var e=t.split(":"),n=e[0],i=e[1],o=a.findWhere(this.actions,{patternName:n,id:i});o&&o.callback.call(o.context)},redirect:function(){var n,i,o,r=window.parent.location.pathname;if(a.some(this.actions,function(t){if(t.pathExp&&(i=new RegExp(t.pathExp),r.match(i))){o="!/"+t.patternName+":"+t.id;var e="";return t.expReplace&&(e=t.expReplace),n=r.replace(i,e),!0}},this),void 0===o)for(var t in this.redirects)if(i=new RegExp(t),r.match(i)){o="!/"+this.redirects[t],n=r.replace(i,"");break}void 0!==o&&this._changeLocation.apply(this,[n,o])},_changeLocation:function(t,e){window.parent.location.hash=e,window.parent.location.pathname=t},start:function(){t.history.start()},reset:function(){this.actions=[]}}))}),function(t){"use strict";"function"==typeof define&&define.amd?define("jquery.form",["jquery"],t):t("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(j){"use strict";var b={};b.fileapi=void 0!==j("<input type='file'/>").get(0).files,b.formdata=void 0!==window.FormData;var N=!!j.fn.prop;function n(t){var e=t.data;t.isDefaultPrevented()||(t.preventDefault(),j(t.target).ajaxSubmit(e))}function i(t){var e=t.target,n=j(e);if(!n.is("[type=submit],[type=image]")){var i=n.closest("[type=submit]");if(0===i.length)return;e=i[0]}var o=this;if("image"==(o.clk=e).type)if(void 0!==t.offsetX)o.clk_x=t.offsetX,o.clk_y=t.offsetY;else if("function"==typeof j.fn.offset){var r=n.offset();o.clk_x=t.pageX-r.left,o.clk_y=t.pageY-r.top}else o.clk_x=t.pageX-e.offsetLeft,o.clk_y=t.pageY-e.offsetTop;setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function P(){if(j.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}j.fn.attr2=function(){if(!N)return this.attr.apply(this,arguments);var t=this.prop.apply(this,arguments);return t&&t.jquery||"string"==typeof t?t:this.attr.apply(this,arguments)},j.fn.ajaxSubmit=function(M){if(!this.length)return P("ajaxSubmit: skipping submit process - no element selected"),this;var E,t,e,$=this;"function"==typeof M?M={success:M}:void 0===M&&(M={}),E=M.type||this.attr2("method"),(e=(e="string"==typeof(t=M.url||this.attr2("action"))?j.trim(t):"")||window.location.href||"")&&(e=(e.match(/^([^#]+)/)||[])[1]),M=j.extend(!0,{url:e,success:j.ajaxSettings.success,type:E||j.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},M);var n={};if(this.trigger("form-pre-serialize",[this,M,n]),n.veto)return P("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return P("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var i=M.traditional;void 0===i&&(i=j.ajaxSettings.traditional);var o,A=[],r=this.formToArray(M.semantic,A);if(M.data&&(M.extraData=M.data,o=j.param(M.data,i)),M.beforeSubmit&&!1===M.beforeSubmit(r,this,M))return P("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[r,this,M,n]),n.veto)return P("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var s=j.param(r,i);o&&(s=s?s+"&"+o:o),"GET"==M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+s,M.data=null):M.data=s;var a=[];if(M.resetForm&&a.push(function(){$.resetForm()}),M.clearForm&&a.push(function(){$.clearForm(M.includeHidden)}),!M.dataType&&M.target){var l=M.success||function(){};a.push(function(t){var e=M.replaceTarget?"replaceWith":"html";j(M.target)[e](t).each(l,arguments)})}else M.success&&a.push(M.success);if(M.success=function(t,e,n){for(var i=M.context||this,o=0,r=a.length;o<r;o++)a[o].apply(i,[t,e,n||$,$])},M.error){var c=M.error;M.error=function(t,e,n){var i=M.context||this;c.apply(i,[t,e,n,$])}}if(M.complete){var u=M.complete;M.complete=function(t,e){var n=M.context||this;u.apply(n,[t,e,$])}}var h=0<j("input[type=file]:enabled",this).filter(function(){return""!==j(this).val()}).length,d="multipart/form-data",p=$.attr("enctype")==d||$.attr("encoding")==d,f=b.fileapi&&b.formdata;P("fileAPI :"+f);var m,g=(h||p)&&!f;!1!==M.iframe&&(M.iframe||g)?M.closeKeepAlive?j.get(M.closeKeepAlive,function(){m=y(r)}):m=y(r):m=(h||p)&&f?function(t){for(var n=new FormData,e=0;e<t.length;e++)n.append(t[e].name,t[e].value);if(M.extraData){var i=function(t){var e,n,i=j.param(t,M.traditional).split("&"),o=i.length,r=[];for(e=0;e<o;e++)i[e]=i[e].replace(/\+/g," "),n=i[e].split("="),r.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return r}(M.extraData);for(e=0;e<i.length;e++)i[e]&&n.append(i[e][0],i[e][1])}M.data=null;var o=j.extend(!0,{},j.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:E||"POST"});M.uploadProgress&&(o.xhr=function(){var t=j.ajaxSettings.xhr();return t.upload&&t.upload.addEventListener("progress",function(t){var e=0,n=t.loaded||t.position,i=t.total;t.lengthComputable&&(e=Math.ceil(n/i*100)),M.uploadProgress(t,n,i,e)},!1),t});o.data=null;var r=o.beforeSend;return o.beforeSend=function(t,e){M.formData?e.data=M.formData:e.data=n,r&&r.call(this,t,e)},j.ajax(o)}(r):j.ajax(M),$.removeData("jqxhr").data("jqxhr",m);for(var v=0;v<A.length;v++)A[v]=null;return this.trigger("form-submit-notify",[this,M]),this;function y(t){var e,n,u,h,r,d,p,f,i,o,m,g,s=$[0],v=j.Deferred();if(v.abort=function(t){f.abort(t)},t)for(n=0;n<A.length;n++)e=j(A[n]),N?e.prop("disabled",!1):e.removeAttr("disabled");if((u=j.extend(!0,{},j.ajaxSettings,M)).context=u.context||u,r="jqFormIO"+(new Date).getTime(),u.iframeTarget?(o=(d=j(u.iframeTarget)).attr2("name"))?r=o:d.attr2("name",r):(d=j('<iframe name="'+r+'" src="'+u.iframeSrc+'" />')).css({position:"absolute",top:"-1000px",left:"-1000px"}),p=d[0],f={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var e="timeout"===t?"timeout":"aborted";P("aborting upload... "+e),this.aborted=1;try{p.contentWindow.document.execCommand&&p.contentWindow.document.execCommand("Stop")}catch(t){}d.attr("src",u.iframeSrc),f.error=e,u.error&&u.error.call(u.context,f,e,t),h&&j.event.trigger("ajaxError",[f,u,e]),u.complete&&u.complete.call(u.context,f,e)}},(h=u.global)&&0==j.active++&&j.event.trigger("ajaxStart"),h&&j.event.trigger("ajaxSend",[f,u]),u.beforeSend&&!1===u.beforeSend.call(u.context,f,u))return u.global&&j.active--,v.reject(),v;if(f.aborted)return v.reject(),v;(i=s.clk)&&(o=i.name)&&!i.disabled&&(u.extraData=u.extraData||{},u.extraData[o]=i.value,"image"==i.type&&(u.extraData[o+".x"]=s.clk_x,u.extraData[o+".y"]=s.clk_y));var y=1,b=2;function w(e){var n=null;try{e.contentWindow&&(n=e.contentWindow.document)}catch(t){P("cannot get iframe.contentWindow document: "+t)}if(n)return n;try{n=e.contentDocument?e.contentDocument:e.document}catch(t){P("cannot get iframe.contentDocument: "+t),n=e.document}return n}var a=j("meta[name=csrf-token]").attr("content"),l=j("meta[name=csrf-param]").attr("content");function c(){var t=$.attr2("target"),e=$.attr2("action"),n=$.attr("enctype")||$.attr("encoding")||"multipart/form-data";s.setAttribute("target",r),E&&!/post/i.test(E)||s.setAttribute("method","POST"),e!=u.url&&s.setAttribute("action",u.url),u.skipEncodingOverride||E&&!/post/i.test(E)||$.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),u.timeout&&(g=setTimeout(function(){m=!0,T(y)},u.timeout));var i=[];try{if(u.extraData)for(var o in u.extraData)u.extraData.hasOwnProperty(o)&&(j.isPlainObject(u.extraData[o])&&u.extraData[o].hasOwnProperty("name")&&u.extraData[o].hasOwnProperty("value")?i.push(j('<input type="hidden" name="'+u.extraData[o].name+'">').val(u.extraData[o].value).appendTo(s)[0]):i.push(j('<input type="hidden" name="'+o+'">').val(u.extraData[o]).appendTo(s)[0]));u.iframeTarget||d.appendTo("body"),p.attachEvent?p.attachEvent("onload",T):p.addEventListener("load",T,!1),setTimeout(function t(){try{var e=w(p).readyState;P("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(t){P("Server abort: ",t," (",t.name,")"),T(b),g&&clearTimeout(g),g=void 0}},15);try{s.submit()}catch(t){document.createElement("form").submit.apply(s)}}finally{s.setAttribute("action",e),s.setAttribute("enctype",n),t?s.setAttribute("target",t):$.removeAttr("target"),j(i).remove()}}l&&a&&(u.extraData=u.extraData||{},u.extraData[l]=a),u.forceSync?c():setTimeout(c,10);var k,_,x,S=50;function T(t){if(!f.aborted&&!x){if((_=w(p))||(P("cannot access response document"),t=b),t===y&&f)return f.abort("timeout"),void v.reject(f,"timeout");if(t==b&&f)return f.abort("server abort"),void v.reject(f,"error","server abort");if(_&&_.location.href!=u.iframeSrc||m){p.detachEvent?p.detachEvent("onload",T):p.removeEventListener("load",T,!1);var e,n="success";try{if(m)throw"timeout";var i="xml"==u.dataType||_.XMLDocument||j.isXMLDoc(_);if(P("isXml="+i),!i&&window.opera&&(null===_.body||!_.body.innerHTML)&&--S)return P("requeing onLoad callback, DOM not available"),void setTimeout(T,250);var o=_.body?_.body:_.documentElement;f.responseText=o?o.innerHTML:null,f.responseXML=_.XMLDocument?_.XMLDocument:_,i&&(u.dataType="xml"),f.getResponseHeader=function(t){return{"content-type":u.dataType}[t.toLowerCase()]},o&&(f.status=Number(o.getAttribute("status"))||f.status,f.statusText=o.getAttribute("statusText")||f.statusText);var r=(u.dataType||"").toLowerCase(),s=/(json|script|text)/.test(r);if(s||u.textarea){var a=_.getElementsByTagName("textarea")[0];if(a)f.responseText=a.value,f.status=Number(a.getAttribute("status"))||f.status,f.statusText=a.getAttribute("statusText")||f.statusText;else if(s){var l=_.getElementsByTagName("pre")[0],c=_.getElementsByTagName("body")[0];l?f.responseText=l.textContent?l.textContent:l.innerText:c&&(f.responseText=c.textContent?c.textContent:c.innerText)}}else"xml"==r&&!f.responseXML&&f.responseText&&(f.responseXML=C(f.responseText));try{k=D(f,r,u)}catch(t){n="parsererror",f.error=e=t||n}}catch(t){P("error caught: ",t),n="error",f.error=e=t||n}f.aborted&&(P("upload aborted"),n=null),f.status&&(n=200<=f.status&&f.status<300||304===f.status?"success":"error"),"success"===n?(u.success&&u.success.call(u.context,k,"success",f),v.resolve(f.responseText,"success",f),h&&j.event.trigger("ajaxSuccess",[f,u])):n&&(void 0===e&&(e=f.statusText),u.error&&u.error.call(u.context,f,n,e),v.reject(f,"error",e),h&&j.event.trigger("ajaxError",[f,u,e])),h&&j.event.trigger("ajaxComplete",[f,u]),h&&!--j.active&&j.event.trigger("ajaxStop"),u.complete&&u.complete.call(u.context,f,n),x=!0,u.timeout&&clearTimeout(g),setTimeout(function(){u.iframeTarget?d.attr("src",u.iframeSrc):d.remove(),f.responseXML=null},100)}}}var C=j.parseXML||function(t,e){return window.ActiveXObject?((e=new ActiveXObject("Microsoft.XMLDOM")).async="false",e.loadXML(t)):e=(new DOMParser).parseFromString(t,"text/xml"),e&&e.documentElement&&"parsererror"!=e.documentElement.nodeName?e:null},O=j.parseJSON||function(t){return window.eval("("+t+")")},D=function(t,e,n){var i=t.getResponseHeader("content-type")||"",o="xml"===e||!e&&0<=i.indexOf("xml"),r=o?t.responseXML:t.responseText;return o&&"parsererror"===r.documentElement.nodeName&&j.error&&j.error("parsererror"),n&&n.dataFilter&&(r=n.dataFilter(r,e)),"string"==typeof r&&("json"===e||!e&&0<=i.indexOf("json")?r=O(r):("script"===e||!e&&0<=i.indexOf("javascript"))&&j.globalEval(r)),r};return v}},j.fn.ajaxForm=function(t){if((t=t||{}).delegation=t.delegation&&j.isFunction(j.fn.on),t.delegation||0!==this.length)return t.delegation?(j(document).off("submit.form-plugin",this.selector,n).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,t,n).on("click.form-plugin",this.selector,t,i),this):this.ajaxFormUnbind().bind("submit.form-plugin",t,n).bind("click.form-plugin",t,i);var e={s:this.selector,c:this.context};return!j.isReady&&e.s?(P("DOM not ready, queuing ajaxForm"),j(function(){j(e.s,e.c).ajaxForm(t)})):P("terminating; zero elements found by selector"+(j.isReady?"":" (DOM not ready)")),this},j.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},j.fn.formToArray=function(t,e){var n=[];if(0===this.length)return n;var i,o,r,s,a,l,c,u,h=this[0],d=this.attr("id"),p=t?h.getElementsByTagName("*"):h.elements;if(p&&!/MSIE [678]/.test(navigator.userAgent)&&(p=j(p).get()),d&&(i=j(':input[form="'+d+'"]').get()).length&&(p=(p||[]).concat(i)),!p||!p.length)return n;for(o=0,c=p.length;o<c;o++)if((s=(l=p[o]).name)&&!l.disabled)if(t&&h.clk&&"image"==l.type)h.clk==l&&(n.push({name:s,value:j(l).val(),type:l.type}),n.push({name:s+".x",value:h.clk_x},{name:s+".y",value:h.clk_y}));else if((a=j.fieldValue(l,!0))&&a.constructor==Array)for(e&&e.push(l),r=0,u=a.length;r<u;r++)n.push({name:s,value:a[r]});else if(b.fileapi&&"file"==l.type){e&&e.push(l);var f=l.files;if(f.length)for(r=0;r<f.length;r++)n.push({name:s,value:f[r],type:l.type});else n.push({name:s,value:"",type:l.type})}else null!=a&&(e&&e.push(l),n.push({name:s,value:a,type:l.type,required:l.required}));if(!t&&h.clk){var m=j(h.clk),g=m[0];(s=g.name)&&!g.disabled&&"image"==g.type&&(n.push({name:s,value:m.val()}),n.push({name:s+".x",value:h.clk_x},{name:s+".y",value:h.clk_y}))}return n},j.fn.formSerialize=function(t){return j.param(this.formToArray(t))},j.fn.fieldSerialize=function(o){var r=[];return this.each(function(){var t=this.name;if(t){var e=j.fieldValue(this,o);if(e&&e.constructor==Array)for(var n=0,i=e.length;n<i;n++)r.push({name:t,value:e[n]});else null!=e&&r.push({name:this.name,value:e})}}),j.param(r)},j.fn.fieldValue=function(t){for(var e=[],n=0,i=this.length;n<i;n++){var o=this[n],r=j.fieldValue(o,t);null==r||r.constructor==Array&&!r.length||(r.constructor==Array?j.merge(e,r):e.push(r))}return e},j.fieldValue=function(t,e){var n=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===e&&(e=!0),e&&(!n||t.disabled||"reset"==i||"button"==i||("checkbox"==i||"radio"==i)&&!t.checked||("submit"==i||"image"==i)&&t.form&&t.form.clk!=t||"select"==o&&-1==t.selectedIndex))return null;if("select"!=o)return j(t).val();var r=t.selectedIndex;if(r<0)return null;for(var s=[],a=t.options,l="select-one"==i,c=l?r+1:a.length,u=l?r:0;u<c;u++){var h=a[u];if(h.selected){var d=h.value;if(d||(d=h.attributes&&h.attributes.value&&!h.attributes.value.specified?h.text:h.value),l)return d;s.push(d)}}return s},j.fn.clearForm=function(t){return this.each(function(){j("input,select,textarea",this).clearFields(t)})},j.fn.clearFields=j.fn.clearInputs=function(n){var i=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var t=this.type,e=this.tagName.toLowerCase();i.test(t)||"textarea"==e?this.value="":"checkbox"==t||"radio"==t?this.checked=!1:"select"==e?this.selectedIndex=-1:"file"==t?/MSIE/.test(navigator.userAgent)?j(this).replaceWith(j(this).clone(!0)):j(this).val(""):n&&(!0===n&&/hidden/.test(t)||"string"==typeof n&&j(this).is(n))&&(this.value="")})},j.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},j.fn.enable=function(t){return void 0===t&&(t=!0),this.each(function(){this.disabled=!t})},j.fn.selected=function(n){return void 0===n&&(n=!0),this.each(function(){var t=this.type;if("checkbox"==t||"radio"==t)this.checked=n;else if("option"==this.tagName.toLowerCase()){var e=j(this).parent("select");n&&e[0]&&"select-one"==e[0].type&&e.find("option").selected(!1),this.selected=n}})},j.fn.ajaxSubmit.debug=!1}),define("mockup-patterns-modal",["jquery","underscore","pat-base","mockup-patterns-backdrop","pat-registry","mockup-router","mockup-utils","translate","jquery.form"],function(h,l,t,i,o,e,r,s){"use strict";return t.extend({name:"plone-modal",trigger:".pat-plone-modal",parser:"mockup",createModal:null,$model:null,defaults:{width:"",height:"",margin:20,position:"center middle",triggers:[],zIndexSelector:".plone-modal-wrapper,.plone-modal-backdrop",backdrop:"body",backdropOptions:{zIndex:"1040",opacity:"0.85",className:"plone-modal-backdrop",classActiveName:"plone-backdrop-active",closeOnEsc:!0,closeOnClick:!0},title:null,titleSelector:"h1:first",buttons:'.formControls > input[type="submit"]',content:"#content",automaticallyAddButtonActions:!0,loadLinksWithinModal:!0,prependContent:".portalMessage",templateOptions:{className:"plone-modal fade",classDialog:"plone-modal-dialog",classModal:"plone-modal-content",classHeaderName:"plone-modal-header",classBodyName:"plone-modal-body",classFooterName:"plone-modal-footer",classWrapperName:"plone-modal-wrapper",classWrapperInnerName:"modal-wrapper-inner",classActiveName:"in",classPrependName:"",classContentName:"",template:'<div class="<%= options.className %>">  <div class="<%= options.classDialog %>">    <div class="<%= options.classModal %>">      <div class="<%= options.classHeaderName %>">        <a class="plone-modal-close">&times;</a>        <% if (title) { %><h2 class="plone-modal-title"><%= title %></h2><% } %>      </div>      <div class="<%= options.classBodyName %>">        <div class="<%= options.classPrependName %>"><%= prepend %></div>         <div class="<%= options.classContentName %>"><%= content %></div>      </div>      <div class="<%= options.classFooterName %>">         <% if (buttons) { %><%= buttons %><% } %>      </div>    </div>  </div></div>'},actions:{},actionOptions:{eventType:"click",disableAjaxFormSubmit:!1,target:null,ajaxUrl:null,modalFunction:null,isForm:!1,timeout:5e3,displayInModal:!0,reloadWindowOnClose:!0,error:".portalMessage.error",formFieldError:".field.error",onSuccess:null,onError:null,onFormError:null,onTimeout:null,redirectOnResponse:!1,redirectToUrl:function(t,e,n){var i;return(i=/<body.*data-view-url=[\"'](.*)[\"'].*/im.exec(e))&&1<i.length?i[1].split('"')[0]:(i=/<body.*data-base-url=[\"'](.*)[\"'].*/im.exec(e))&&1<i.length?i[1].split('"')[0]:(i=/<base.*href=[\"'](.*)[\"'].*/im.exec(e))&&1<i.length?i[1]:""}},routerOptions:{id:null,pathExp:null},form:function(t){var s=this,a=s.$modal;s.options.automaticallyAddButtonActions&&(t[s.options.buttons]={}),t.a={},h.each(t,function(t,n){var e=l.union(l.keys(s.options.actionOptions),["templateOptions"]),i=h.extend(!0,{},s.options.actionOptions,l.pick(n,e));n.templateOptions=h.extend(!0,n.templateOptions,s.options.templateOptions);var o=l.union(l.keys(s.options.actionOptions),["actions","actionOptions"]),r=h.extend(!0,l.omit(n,o),s.options);h(t,h("."+n.templateOptions.classBodyName,a)).each(function(t){var e=h(this);e.on(i.eventType,function(t){t.stopPropagation(),t.preventDefault(),s.loading.show(!1),null!==i.modalFunction?s[i.modalFunction]():h.nodeName(e[0],"input")||h.nodeName(e[0],"button")||!0===n.isForm?s.options.handleFormAction.apply(s,[e,i,r]):(null!==n.ajaxUrl||h.nodeName(e[0],"a"))&&s.options.handleLinkAction.apply(s,[e,i,r])})})})},handleFormAction:function(o,r,s){var t,e,a=this,n={};if(n[o.attr("name")]=o.attr("value"),t=h.nodeName(o[0],"form")?o:o.parents("form:not(.disableAutoSubmit)"),e=null!==r.ajaxUrl?"function"==typeof r.ajaxUrl?r.ajaxUrl.apply(a,[o,r]):r.ajaxUrl:o.parents("form").attr("action"),r.disableAjaxFormSubmit)return o.attr("name")&&o.attr("value")&&t.append(h('<input type="hidden" name="'+o.attr("name")+'" value="'+o.attr("value")+'" />')),void t.trigger("submit");t.on("submit",function(t){t.preventDefault()}),t.trigger("submit"),a.loading.show(!1),t.ajaxSubmit({timeout:r.timeout,data:n,url:e,error:function(t,e,n){a.loading.hide(),"timeout"===e&&r.onTimeout?r.onTimeout.apply(a,t,n):r.onError?r.onError(t,e,n):console.log("error happened do something"),a.emit("formActionError",[t,e,n])},success:function(t,e,n,i){a.loading.hide(),0===h(r.error,t).size()&&0===h(r.formFieldError,t).size()?!0!==r.redirectOnResponse?(r.onSuccess&&r.onSuccess(a,t,e,n,i),!0===r.displayInModal?a.redraw(t,s):(o.trigger("destroy.plone-modal.patterns"),r.reloadWindowOnClose&&a.reloadWindow()),a.emit("formActionSuccess",[t,e,n,i])):"function"==typeof r.redirectToUrl?window.parent.location.href=r.redirectToUrl.apply(a,[o,t,r]):window.parent.location.href=r.redirectToUrl:r.onFormError?r.onFormError(a,t,e,n,i):a.redraw(t,s)}})},handleLinkAction:function(t,i,o){var e,r=this;e=i.ajaxUrl?"function"==typeof i.ajaxUrl?i.ajaxUrl.apply(r,[t,i]):i.ajaxUrl:t.attr("href"),!1!==i.displayInModal?h.ajax({url:e}).fail(function(t,e,n){"timeout"===e&&i.onTimeout?i.onTimeout(r.$modal,t,n):i.onError?i.onError(t,e,n):window.alert(s("There was an error loading modal.")),r.emit("linkActionError",[t,e,n])}).done(function(t,e,n){r.redraw(t,o),i.onSuccess&&i.onSuccess(r,t,e,n),r.emit("linkActionSuccess",[t,e,n])}).always(function(){r.loading.hide()}):"_blank"===t.attr("target")?(window.open(e,"_blank"),r.loading.hide()):window.location=e},render:function(t){var n=this;if(n.emit("before-render"),n.$raw){var e=n.$raw.clone();h("input:checked",e).each(function(){this.setAttribute&&this.setAttribute("checked","checked")});var i={title:"",prepend:"<div />",content:"",buttons:'<div class="pattern-modal-buttons"></div>',options:t.templateOptions};if(null===t.title){var o=h(t.titleSelector,e);i.title=o.html(),h(t.titleSelector,e).remove()}else i.title=t.title;t.prependContent&&(i.prepend=h("<div />").append(h(t.prependContent,e).clone()).html(),h(t.prependContent,e).remove()),t.content?i.content=h(t.content,e).html():i.content=e.html(),n.$modal=h(l.template(n.options.templateOptions.template)(i)),n.$modalDialog=h("> ."+n.options.templateOptions.classDialog,n.$modal),n.$modalContent=h("> ."+n.options.templateOptions.classModal,n.$modalDialog),h("form",n.$modal).on("keydown",function(t){13===t.keyCode&&"TEXTAREA"!==t.target.nodeName&&(t.preventDefault(),h("input[type=submit], button[type=submit], button:not(type)",this).eq(0).trigger("click"))}),h(t.buttons,n.$modal).each(function(){var e=h(this);e.on("click",function(t){t.stopPropagation(),t.preventDefault()}).clone().appendTo(h(".pattern-modal-buttons",n.$modal)).off("click").on("click",function(t){t.stopPropagation(),t.preventDefault(),e.trigger("click")}),e.hide()}),n.emit("before-events-setup"),h(".plone-modal-header > a.plone-modal-close, .plone-modal-footer > a.plone-modal-close",n.$modal).off("click").on("click",function(t){t.stopPropagation(),t.preventDefault(),h(t.target).trigger("destroy.plone-modal.patterns")}),t.form&&t.form.apply(n,[t.actions]),n.$modal.addClass(n.options.templateOptions.className).on("destroy.plone-modal.patterns",function(t){t.stopPropagation(),n.hide()}).on("resize.plone-modal.patterns",function(t){t.stopPropagation(),t.preventDefault(),n.positionModal()}).appendTo(n.$wrapperInner),n.options.loadLinksWithinModal&&n.$modal.on("click",function(t){t.stopPropagation(),h.nodeName(t.target,"a")&&t.preventDefault(),n.$modal.trigger("modal-click")}),n.$modal.data("pattern-"+n.name,n),n.emit("after-render")}}},reloadWindow:function(){window.parent.location.reload()},init:function(){var o=this;o.options.loadLinksWithinModal=h.parseJSON(o.options.loadLinksWithinModal),null!==o.options.routerOptions.id&&e.addRoute("modal",o.options.routerOptions.id,function(){this.show()},o,o.options.routerOptions.pathExp,o.options.routerOptions.expReplace),!0===o.options.backdropOptions.closeOnEsc&&h(document).on("keydown",function(t,e){o.$el.is("."+o.options.templateOptions.classActiveName)&&27===t.keyCode&&o.hide()}),h(window.parent).resize(function(){o.positionModal()}),o.options.triggers&&h.each(o.options.triggers,function(t,e){var n=e.substring(0,e.indexOf(" ")),i=e.substring(e.indexOf(" "),e.length);h(i||o.$el).on(n,function(t){t.stopPropagation(),t.preventDefault(),o.show()})}),o.$el.is("a")&&(o.$el.attr("href")&&!o.options.image&&(o.options.target||"#"!==o.$el.attr("href").substr(0,1)||(o.options.target=o.$el.attr("href"),o.options.content=""),o.options.ajaxUrl||"#"===o.$el.attr("href").substr(0,1)||(o.options.ajaxUrl=function(){return o.$el.attr("href")})),o.$el.on("click",function(t){t.stopPropagation(),t.preventDefault(),o.show()})),o.initModal()},createAjaxModal:function(){var o=this;o.emit("before-ajax"),o.loading.show();var t=o.options.ajaxUrl;"function"==typeof t&&(t=t.apply(o,[o.options])),o.ajaxXHR=h.ajax({url:t,type:o.options.ajaxType}).done(function(t,e,n){o.ajaxXHR=void 0,o.$raw=h("<div />").append(h(r.parseBodyTag(t))),o.emit("after-ajax",o,e,n),o._show()}).fail(function(t,e,n){var i=o.options.actionOptions;"timeout"===e&&i.onTimeout?i.onTimeout(o.$modal,t,n):i.onError?i.onError(t,e,n):(window.alert(s("There was an error loading modal.")),o.hide()),o.emit("linkActionError",[t,e,n])}).always(function(){o.loading.hide()})},createTargetModal:function(){this.$raw=h(this.options.target).clone(),this._show()},createBasicModal:function(){this.$raw=h("<div/>").html(this.$el.clone()),this._show()},createHtmlModal:function(){var t=h(this.options.html);this.$raw=t,this._show()},createImageModal:function(){var t=this;t.$wrapper.addClass("image-modal");var e=t.$el.attr("href"),n=t.$el.attr("data-modal-srcset")||"",i=h.trim(t.$el.context.innerText)||"Image";t.$raw=h("<div><h1>"+i+'</h1><div id="content"><div class="modal-image"><img src="'+e+'" srcset="'+n+'" /></div></div></div>'),t._show()},initModal:function(){var t=this;t.options.ajaxUrl?t.createModal=t.createAjaxModal:t.options.target?t.createModal=t.createTargetModal:t.options.html?t.createModal=t.createHtmlModal:t.options.image?t.createModal=t.createImageModal:t.createModal=t.createBasicModal},findPosition:function(t,e,n,i,o,r,s){var a,l,c,u,h={};return u=c=a=c="auto",h.left="left"===t?(c=n+"px",r<i&&(c="0px"),c):"right"===t?(u=n+"px",r<i&&(u="0px"),h.right=u,"auto"):(c=r/2-i/2-n+"px",r<i&&(c="0px"),c),h.top="top"===e?(a=n+"px",s<o&&(a="0px"),a):"bottom"===e?(l=n+"px",s<o&&(l="0px"),h.bottom=l,"auto"):(a=s/2-o/2-n+"px",s<o&&(a="0px"),a),h},modalInitialized:function(){return null!==this.$modal&&void 0!==this.$modal},positionModal:function(){var t=this;if(t.modalInitialized()){t.$modal.removeAttr("style"),t.$wrapper.parent().is("body")&&t.$wrapper.height(h(window.parent).height());var e="function"==typeof t.options.margin?t.options.margin():t.options.margin;t.$modal.css({position:"absolute",padding:e}),t.$modalDialog.css({margin:"0",padding:"0",width:t.options.width,height:t.options.height}),t.$modalContent.css({width:t.options.width});var n=t.options.position.split(" "),i=n[0],o=n[1],r=t.$modalDialog.outerWidth(!0),s=t.$modalDialog.outerHeight(!0),a=t.$wrapperInner.width(),l=t.$wrapperInner.height(),c=t.findPosition(i,o,e,r,s,a,l);for(var u in c)t.$modalDialog.css(u,c[u])}},render:function(t){this.emit("render"),this.options.render.apply(this,[t]),this.emit("rendered")},show:function(){this.backdrop=this.createBackdrop(),this.createModal()},createBackdrop:function(){var e=this,n=new i(e.$el.parents(e.options.backdrop),e.options.backdropOptions),t=1041;return h(e.options.zIndexSelector).each(function(){t=Math.max(t,parseInt(h(this).css("zIndex"))+1||1041)}),e.$wrapper=h("<div/>").hide().css({"z-index":t,"overflow-y":"auto",position:"fixed",height:"100%",width:"100%",bottom:"0",left:"0",right:"0",top:"0"}).addClass(e.options.templateOptions.classWrapperName).insertBefore(n.$backdrop).on("click",function(t){e.options.backdropOptions.closeOnClick&&(t.stopPropagation(),t.preventDefault(),n.hide())}),n.on("hidden",function(t){void 0!==e.$modal&&e.$modal.hasClass(e.options.templateOptions.classActiveName)&&e.hide()}),e.loading=new r.Loading({backdrop:n}),e.$wrapperInner=h("<div/>").addClass(e.options.classWrapperInnerName).css({position:"absolute",bottom:"0",left:"0",right:"0",top:"0"}).appendTo(e.$wrapper),n},_show:function(){var t=this;t.render.apply(t,[t.options]),t.emit("show"),t.backdrop.show(),t.$wrapper.show(),t.loading.hide(),t.$el.addClass(t.options.templateOptions.classActiveName),t.$modal.addClass(t.options.templateOptions.classActiveName),o.scan(t.$modal),t.positionModal(),h(window.parent).on("resize.plone-modal.patterns",function(){t.positionModal()}),h("body").addClass("plone-modal-open"),t.emit("shown")},hide:function(){var t=this;t.ajaxXHR&&t.ajaxXHR.abort(),t.emit("hide"),t._suppressHide&&!window.confirm(t._suppressHide)||(t.loading.hide(),t.$el.removeClass(t.options.templateOptions.classActiveName),void 0!==t.$modal&&(t.$modal.remove(),t.initModal()),t.$wrapper.remove(),h(".plone-modal",h("body")).size()<1&&(t._suppressHide=void 0,t.backdrop.hide(),h("body").removeClass("plone-modal-open"),h(window.parent).off("resize.plone-modal.patterns")),t.emit("hidden"))},redraw:function(t,e){var n=this;n.emit("beforeDraw"),n.$modal.remove(),n.$raw=h("<div />").append(h(r.parseBodyTag(t))),n.render.apply(n,[e||n.options]),n.$modal.addClass(n.options.templateOptions.classActiveName),n.positionModal(),o.scan(n.$modal),n.emit("afterDraw")}})}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define("moment",e):t.moment=e()}(this,function(){"use strict";var t,o;function y(){return t.apply(null,arguments)}function a(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function l(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function c(t){return void 0===t}function u(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}function h(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function d(t,e){var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}function b(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function p(t,e){for(var n in e)b(e,n)&&(t[n]=e[n]);return b(e,"toString")&&(t.toString=e.toString),b(e,"valueOf")&&(t.valueOf=e.valueOf),t}function f(t,e,n,i){return Te(t,e,n,i,!0).utc()}function w(t){return null==t._pf&&(t._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),t._pf}function m(t){if(null==t._isValid){var e=w(t),n=o.call(e.parsedDateParts,function(t){return null!=t}),i=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n);if(t._strict&&(i=i&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return i;t._isValid=i}return t._isValid}function g(t){var e=f(NaN);return null!=t?p(w(e),t):w(e).userInvalidated=!0,e}o=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),n=e.length>>>0,i=0;i<n;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};var r=y.momentProperties=[];function v(t,e){var n,i,o;if(c(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),c(e._i)||(t._i=e._i),c(e._f)||(t._f=e._f),c(e._l)||(t._l=e._l),c(e._strict)||(t._strict=e._strict),c(e._tzm)||(t._tzm=e._tzm),c(e._isUTC)||(t._isUTC=e._isUTC),c(e._offset)||(t._offset=e._offset),c(e._pf)||(t._pf=w(e)),c(e._locale)||(t._locale=e._locale),0<r.length)for(n=0;n<r.length;n++)c(o=e[i=r[n]])||(t[i]=o);return t}var e=!1;function k(t){v(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===e&&(e=!0,y.updateOffset(this),e=!1)}function _(t){return t instanceof k||null!=t&&null!=t._isAMomentObject}function x(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function S(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=x(e)),n}function s(t,e,n){var i,o=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),s=0;for(i=0;i<o;i++)(n&&t[i]!==e[i]||!n&&S(t[i])!==S(e[i]))&&s++;return s+r}function T(t){!1===y.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function n(o,r){var s=!0;return p(function(){if(null!=y.deprecationHandler&&y.deprecationHandler(null,o),s){for(var t,e=[],n=0;n<arguments.length;n++){if(t="","object"==typeof arguments[n]){for(var i in t+="\n["+n+"] ",arguments[0])t+=i+": "+arguments[0][i]+", ";t=t.slice(0,-2)}else t=arguments[n];e.push(t)}T(o+"\nArguments: "+Array.prototype.slice.call(e).join("")+"\n"+(new Error).stack),s=!1}return r.apply(this,arguments)},r)}var i,C={};function O(t,e){null!=y.deprecationHandler&&y.deprecationHandler(t,e),C[t]||(T(e),C[t]=!0)}function D(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function M(t,e){var n,i=p({},t);for(n in e)b(e,n)&&(l(t[n])&&l(e[n])?(i[n]={},p(i[n],t[n]),p(i[n],e[n])):null!=e[n]?i[n]=e[n]:delete i[n]);for(n in t)b(t,n)&&!b(e,n)&&l(t[n])&&(i[n]=p({},i[n]));return i}function E(t){null!=t&&this.set(t)}y.suppressDeprecationWarnings=!1,y.deprecationHandler=null,i=Object.keys?Object.keys:function(t){var e,n=[];for(e in t)b(t,e)&&n.push(e);return n};var $={};function A(t,e){var n=t.toLowerCase();$[n]=$[n+"s"]=$[e]=t}function j(t){return"string"==typeof t?$[t]||$[t.toLowerCase()]:void 0}function N(t){var e,n,i={};for(n in t)b(t,n)&&(e=j(n))&&(i[e]=t[n]);return i}var P={};function I(t,e){P[t]=e}function R(t,e,n){var i=""+Math.abs(t),o=e-i.length;return(0<=t?n?"+":"":"-")+Math.pow(10,Math.max(0,o)).toString().substr(1)+i}var Y=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,F=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,L={},H={};function U(t,e,n,i){var o=i;"string"==typeof i&&(o=function(){return this[i]()}),t&&(H[t]=o),e&&(H[e[0]]=function(){return R(o.apply(this,arguments),e[1],e[2])}),n&&(H[n]=function(){return this.localeData().ordinal(o.apply(this,arguments),t)})}function W(t,e){return t.isValid()?(e=z(e,t.localeData()),L[e]=L[e]||function(i){var t,o,e,r=i.match(Y);for(t=0,o=r.length;t<o;t++)H[r[t]]?r[t]=H[r[t]]:r[t]=(e=r[t]).match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"");return function(t){var e,n="";for(e=0;e<o;e++)n+=D(r[e])?r[e].call(t,i):r[e];return n}}(e),L[e](t)):t.localeData().invalidDate()}function z(t,e){var n=5;function i(t){return e.longDateFormat(t)||t}for(F.lastIndex=0;0<=n&&F.test(t);)t=t.replace(F,i),F.lastIndex=0,n-=1;return t}var q=/\d/,V=/\d\d/,G=/\d{3}/,B=/\d{4}/,X=/[+-]?\d{6}/,J=/\d\d?/,Z=/\d\d\d\d?/,K=/\d\d\d\d\d\d?/,Q=/\d{1,3}/,tt=/\d{1,4}/,et=/[+-]?\d{1,6}/,nt=/\d+/,it=/[+-]?\d+/,ot=/Z|[+-]\d\d:?\d\d/gi,rt=/Z|[+-]\d\d(?::?\d\d)?/gi,st=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,at={};function lt(t,n,i){at[t]=D(n)?n:function(t,e){return t&&i?i:n}}function ct(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var ut={};function ht(t,n){var e,i=n;for("string"==typeof t&&(t=[t]),u(n)&&(i=function(t,e){e[n]=S(t)}),e=0;e<t.length;e++)ut[t[e]]=i}function dt(t,o){ht(t,function(t,e,n,i){n._w=n._w||{},o(t,n._w,n,i)})}var pt=0,ft=1,mt=2,gt=3,vt=4,yt=5,bt=6,wt=7,kt=8;function _t(t){return xt(t)?366:365}function xt(t){return t%4==0&&t%100!=0||t%400==0}U("Y",0,0,function(){var t=this.year();return t<=9999?""+t:"+"+t}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),A("year","y"),I("year",1),lt("Y",it),lt("YY",J,V),lt("YYYY",tt,B),lt("YYYYY",et,X),lt("YYYYYY",et,X),ht(["YYYYY","YYYYYY"],pt),ht("YYYY",function(t,e){e[pt]=2===t.length?y.parseTwoDigitYear(t):S(t)}),ht("YY",function(t,e){e[pt]=y.parseTwoDigitYear(t)}),ht("Y",function(t,e){e[pt]=parseInt(t,10)}),y.parseTwoDigitYear=function(t){return S(t)+(68<S(t)?1900:2e3)};var St,Tt=Ct("FullYear",!0);function Ct(e,n){return function(t){return null!=t?(Dt(this,e,t),y.updateOffset(this,n),this):Ot(this,e)}}function Ot(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function Dt(t,e,n){t.isValid()&&!isNaN(n)&&("FullYear"===e&&xt(t.year())&&1===t.month()&&29===t.date()?t._d["set"+(t._isUTC?"UTC":"")+e](n,t.month(),Mt(n,t.month())):t._d["set"+(t._isUTC?"UTC":"")+e](n))}function Mt(t,e){if(isNaN(t)||isNaN(e))return NaN;var n=(e%12+12)%12;return t+=(e-n)/12,1===n?xt(t)?29:28:31-n%7%2}St=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1},U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),U("MMMM",0,0,function(t){return this.localeData().months(this,t)}),A("month","M"),I("month",8),lt("M",J),lt("MM",J,V),lt("MMM",function(t,e){return e.monthsShortRegex(t)}),lt("MMMM",function(t,e){return e.monthsRegex(t)}),ht(["M","MM"],function(t,e){e[ft]=S(t)-1}),ht(["MMM","MMMM"],function(t,e,n,i){var o=n._locale.monthsParse(t,i,n._strict);null!=o?e[ft]=o:w(n).invalidMonth=t});var Et=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,$t="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),At="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function jt(t,e){var n;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=S(e);else if(!u(e=t.localeData().monthsParse(e)))return t;return n=Math.min(t.date(),Mt(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function Nt(t){return null!=t?(jt(this,t),y.updateOffset(this,!0),this):Ot(this,"Month")}var Pt=st,It=st;function Rt(){function t(t,e){return e.length-t.length}var e,n,i=[],o=[],r=[];for(e=0;e<12;e++)n=f([2e3,e]),i.push(this.monthsShort(n,"")),o.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(i.sort(t),o.sort(t),r.sort(t),e=0;e<12;e++)i[e]=ct(i[e]),o[e]=ct(o[e]);for(e=0;e<24;e++)r[e]=ct(r[e]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function Yt(t){var e;if(t<100&&0<=t){var n=Array.prototype.slice.call(arguments);n[0]=t+400,e=new Date(Date.UTC.apply(null,n)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)}else e=new Date(Date.UTC.apply(null,arguments));return e}function Ft(t,e,n){var i=7+e-n;return-(7+Yt(t,0,i).getUTCDay()-e)%7+i-1}function Lt(t,e,n,i,o){var r,s,a=1+7*(e-1)+(7+n-i)%7+Ft(t,i,o);return s=a<=0?_t(r=t-1)+a:a>_t(t)?(r=t+1,a-_t(t)):(r=t,a),{year:r,dayOfYear:s}}function Ht(t,e,n){var i,o,r=Ft(t.year(),e,n),s=Math.floor((t.dayOfYear()-r-1)/7)+1;return s<1?i=s+Ut(o=t.year()-1,e,n):s>Ut(t.year(),e,n)?(i=s-Ut(t.year(),e,n),o=t.year()+1):(o=t.year(),i=s),{week:i,year:o}}function Ut(t,e,n){var i=Ft(t,e,n),o=Ft(t+1,e,n);return(_t(t)-i+o)/7}function Wt(t,e){return t.slice(e,7).concat(t.slice(0,e))}U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),A("week","w"),A("isoWeek","W"),I("week",5),I("isoWeek",5),lt("w",J),lt("ww",J,V),lt("W",J),lt("WW",J,V),dt(["w","ww","W","WW"],function(t,e,n,i){e[i.substr(0,1)]=S(t)}),U("d",0,"do","day"),U("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),U("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),U("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),A("day","d"),A("weekday","e"),A("isoWeekday","E"),I("day",11),I("weekday",11),I("isoWeekday",11),lt("d",J),lt("e",J),lt("E",J),lt("dd",function(t,e){return e.weekdaysMinRegex(t)}),lt("ddd",function(t,e){return e.weekdaysShortRegex(t)}),lt("dddd",function(t,e){return e.weekdaysRegex(t)}),dt(["dd","ddd","dddd"],function(t,e,n,i){var o=n._locale.weekdaysParse(t,i,n._strict);null!=o?e.d=o:w(n).invalidWeekday=t}),dt(["d","e","E"],function(t,e,n,i){e[i]=S(t)});var zt="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),qt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Vt="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Gt=st,Bt=st,Xt=st;function Jt(){function t(t,e){return e.length-t.length}var e,n,i,o,r,s=[],a=[],l=[],c=[];for(e=0;e<7;e++)n=f([2e3,1]).day(e),i=this.weekdaysMin(n,""),o=this.weekdaysShort(n,""),r=this.weekdays(n,""),s.push(i),a.push(o),l.push(r),c.push(i),c.push(o),c.push(r);for(s.sort(t),a.sort(t),l.sort(t),c.sort(t),e=0;e<7;e++)a[e]=ct(a[e]),l[e]=ct(l[e]),c[e]=ct(c[e]);this._weekdaysRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Zt(){return this.hours()%12||12}function Kt(t,e){U(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function Qt(t,e){return e._meridiemParse}U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Zt),U("k",["kk",2],0,function(){return this.hours()||24}),U("hmm",0,0,function(){return""+Zt.apply(this)+R(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Zt.apply(this)+R(this.minutes(),2)+R(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+R(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+R(this.minutes(),2)+R(this.seconds(),2)}),Kt("a",!0),Kt("A",!1),A("hour","h"),I("hour",13),lt("a",Qt),lt("A",Qt),lt("H",J),lt("h",J),lt("k",J),lt("HH",J,V),lt("hh",J,V),lt("kk",J,V),lt("hmm",Z),lt("hmmss",K),lt("Hmm",Z),lt("Hmmss",K),ht(["H","HH"],gt),ht(["k","kk"],function(t,e,n){var i=S(t);e[gt]=24===i?0:i}),ht(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t}),ht(["h","hh"],function(t,e,n){e[gt]=S(t),w(n).bigHour=!0}),ht("hmm",function(t,e,n){var i=t.length-2;e[gt]=S(t.substr(0,i)),e[vt]=S(t.substr(i)),w(n).bigHour=!0}),ht("hmmss",function(t,e,n){var i=t.length-4,o=t.length-2;e[gt]=S(t.substr(0,i)),e[vt]=S(t.substr(i,2)),e[yt]=S(t.substr(o)),w(n).bigHour=!0}),ht("Hmm",function(t,e,n){var i=t.length-2;e[gt]=S(t.substr(0,i)),e[vt]=S(t.substr(i))}),ht("Hmmss",function(t,e,n){var i=t.length-4,o=t.length-2;e[gt]=S(t.substr(0,i)),e[vt]=S(t.substr(i,2)),e[yt]=S(t.substr(o))});var te,ee=Ct("Hours",!0),ne={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:$t,monthsShort:At,week:{dow:0,doy:6},weekdays:zt,weekdaysMin:Vt,weekdaysShort:qt,meridiemParse:/[ap]\.?m?\.?/i},ie={},oe={};function re(t){return t?t.toLowerCase().replace("_","-"):t}function se(t){var e=null;if(!ie[t]&&"undefined"!=typeof module&&module&&module.exports)try{e=te._abbr,require("./locale/"+t),ae(e)}catch(t){}return ie[t]}function ae(t,e){var n;return t&&((n=c(e)?ce(t):le(t,e))?te=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),te._abbr}function le(t,e){if(null===e)return delete ie[t],null;var n,i=ne;if(e.abbr=t,null!=ie[t])O("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=ie[t]._config;else if(null!=e.parentLocale)if(null!=ie[e.parentLocale])i=ie[e.parentLocale]._config;else{if(null==(n=se(e.parentLocale)))return oe[e.parentLocale]||(oe[e.parentLocale]=[]),oe[e.parentLocale].push({name:t,config:e}),null;i=n._config}return ie[t]=new E(M(i,e)),oe[t]&&oe[t].forEach(function(t){le(t.name,t.config)}),ae(t),ie[t]}function ce(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return te;if(!a(t)){if(e=se(t))return e;t=[t]}return function(t){for(var e,n,i,o,r=0;r<t.length;){for(e=(o=re(t[r]).split("-")).length,n=(n=re(t[r+1]))?n.split("-"):null;0<e;){if(i=se(o.slice(0,e).join("-")))return i;if(n&&n.length>=e&&s(o,n,!0)>=e-1)break;e--}r++}return te}(t)}function ue(t){var e,n=t._a;return n&&-2===w(t).overflow&&(e=n[ft]<0||11<n[ft]?ft:n[mt]<1||n[mt]>Mt(n[pt],n[ft])?mt:n[gt]<0||24<n[gt]||24===n[gt]&&(0!==n[vt]||0!==n[yt]||0!==n[bt])?gt:n[vt]<0||59<n[vt]?vt:n[yt]<0||59<n[yt]?yt:n[bt]<0||999<n[bt]?bt:-1,w(t)._overflowDayOfYear&&(e<pt||mt<e)&&(e=mt),w(t)._overflowWeeks&&-1===e&&(e=wt),w(t)._overflowWeekday&&-1===e&&(e=kt),w(t).overflow=e),t}function he(t,e,n){return null!=t?t:null!=e?e:n}function de(t){var e,n,i,o,r,s=[];if(!t._d){var a,l;for(a=t,l=new Date(y.now()),i=a._useUTC?[l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()]:[l.getFullYear(),l.getMonth(),l.getDate()],t._w&&null==t._a[mt]&&null==t._a[ft]&&function(t){var e,n,i,o,r,s,a,l;if(null!=(e=t._w).GG||null!=e.W||null!=e.E)r=1,s=4,n=he(e.GG,t._a[pt],Ht(Ce(),1,4).year),i=he(e.W,1),((o=he(e.E,1))<1||7<o)&&(l=!0);else{r=t._locale._week.dow,s=t._locale._week.doy;var c=Ht(Ce(),r,s);n=he(e.gg,t._a[pt],c.year),i=he(e.w,c.week),null!=e.d?((o=e.d)<0||6<o)&&(l=!0):null!=e.e?(o=e.e+r,(e.e<0||6<e.e)&&(l=!0)):o=r}i<1||i>Ut(n,r,s)?w(t)._overflowWeeks=!0:null!=l?w(t)._overflowWeekday=!0:(a=Lt(n,i,o,r,s),t._a[pt]=a.year,t._dayOfYear=a.dayOfYear)}(t),null!=t._dayOfYear&&(r=he(t._a[pt],i[pt]),(t._dayOfYear>_t(r)||0===t._dayOfYear)&&(w(t)._overflowDayOfYear=!0),n=Yt(r,0,t._dayOfYear),t._a[ft]=n.getUTCMonth(),t._a[mt]=n.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=s[e]=i[e];for(;e<7;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[gt]&&0===t._a[vt]&&0===t._a[yt]&&0===t._a[bt]&&(t._nextDay=!0,t._a[gt]=0),t._d=(t._useUTC?Yt:function(t,e,n,i,o,r,s){var a;return t<100&&0<=t?(a=new Date(t+400,e,n,i,o,r,s),isFinite(a.getFullYear())&&a.setFullYear(t)):a=new Date(t,e,n,i,o,r,s),a}).apply(null,s),o=t._useUTC?t._d.getUTCDay():t._d.getDay(),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[gt]=24),t._w&&void 0!==t._w.d&&t._w.d!==o&&(w(t).weekdayMismatch=!0)}}var pe=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,fe=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,me=/Z|[+-]\d\d(?::?\d\d)?/,ge=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],ve=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],ye=/^\/?Date\((\-?\d+)/i;function be(t){var e,n,i,o,r,s,a=t._i,l=pe.exec(a)||fe.exec(a);if(l){for(w(t).iso=!0,e=0,n=ge.length;e<n;e++)if(ge[e][1].exec(l[1])){o=ge[e][0],i=!1!==ge[e][2];break}if(null==o)return void(t._isValid=!1);if(l[3]){for(e=0,n=ve.length;e<n;e++)if(ve[e][1].exec(l[3])){r=(l[2]||" ")+ve[e][0];break}if(null==r)return void(t._isValid=!1)}if(!i&&null!=r)return void(t._isValid=!1);if(l[4]){if(!me.exec(l[4]))return void(t._isValid=!1);s="Z"}t._f=o+(r||"")+(s||""),xe(t)}else t._isValid=!1}var we=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;var ke={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function _e(t){var e,n,i,o,r,s,a,l,c,u,h,d=we.exec(t._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(d){var p=(o=d[4],r=d[3],s=d[2],a=d[5],l=d[6],c=d[7],h=[(u=parseInt(o,10),u<=49?2e3+u:u<=999?1900+u:u),At.indexOf(r),parseInt(s,10),parseInt(a,10),parseInt(l,10)],c&&h.push(parseInt(c,10)),h);if(n=p,i=t,(e=d[1])&&qt.indexOf(e)!==new Date(n[0],n[1],n[2]).getDay()&&(w(i).weekdayMismatch=!0,!(i._isValid=!1)))return;t._a=p,t._tzm=function(t,e,n){if(t)return ke[t];if(e)return 0;var i=parseInt(n,10),o=i%100;return(i-o)/100*60+o}(d[8],d[9],d[10]),t._d=Yt.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),w(t).rfc2822=!0}else t._isValid=!1}function xe(t){if(t._f!==y.ISO_8601)if(t._f!==y.RFC_2822){t._a=[],w(t).empty=!0;var e,n,i,o,r,s,a,l,c=""+t._i,u=c.length,h=0;for(i=z(t._f,t._locale).match(Y)||[],e=0;e<i.length;e++)o=i[e],(n=(c.match((g=o,v=t,b(at,g)?at[g](v._strict,v._locale):new RegExp(ct(g.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,i,o){return e||n||i||o})))))||[])[0])&&(0<(r=c.substr(0,c.indexOf(n))).length&&w(t).unusedInput.push(r),c=c.slice(c.indexOf(n)+n.length),h+=n.length),H[o]?(n?w(t).empty=!1:w(t).unusedTokens.push(o),s=o,l=t,null!=(a=n)&&b(ut,s)&&ut[s](a,l._a,l,s)):t._strict&&!n&&w(t).unusedTokens.push(o);w(t).charsLeftOver=u-h,0<c.length&&w(t).unusedInput.push(c),t._a[gt]<=12&&!0===w(t).bigHour&&0<t._a[gt]&&(w(t).bigHour=void 0),w(t).parsedDateParts=t._a.slice(0),w(t).meridiem=t._meridiem,t._a[gt]=(d=t._locale,p=t._a[gt],null==(f=t._meridiem)?p:null!=d.meridiemHour?d.meridiemHour(p,f):(null!=d.isPM&&((m=d.isPM(f))&&p<12&&(p+=12),m||12!==p||(p=0)),p)),de(t),ue(t)}else _e(t);else be(t);var d,p,f,m,g,v}function Se(t){var e,n,i,o,r=t._i,s=t._f;return t._locale=t._locale||ce(t._l),null===r||void 0===s&&""===r?g({nullInput:!0}):("string"==typeof r&&(t._i=r=t._locale.preparse(r)),_(r)?new k(ue(r)):(h(r)?t._d=r:a(s)?function(t){var e,n,i,o,r;if(0===t._f.length)return w(t).invalidFormat=!0,t._d=new Date(NaN);for(o=0;o<t._f.length;o++)r=0,e=v({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[o],xe(e),m(e)&&(r+=w(e).charsLeftOver,r+=10*w(e).unusedTokens.length,w(e).score=r,(null==i||r<i)&&(i=r,n=e));p(t,n||e)}(t):s?xe(t):c(n=(e=t)._i)?e._d=new Date(y.now()):h(n)?e._d=new Date(n.valueOf()):"string"==typeof n?(i=e,null===(o=ye.exec(i._i))?(be(i),!1===i._isValid&&(delete i._isValid,_e(i),!1===i._isValid&&(delete i._isValid,y.createFromInputFallback(i)))):i._d=new Date(+o[1])):a(n)?(e._a=d(n.slice(0),function(t){return parseInt(t,10)}),de(e)):l(n)?function(t){if(!t._d){var e=N(t._i);t._a=d([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),de(t)}}(e):u(n)?e._d=new Date(n):y.createFromInputFallback(e),m(t)||(t._d=null),t))}function Te(t,e,n,i,o){var r,s={};return!0!==n&&!1!==n||(i=n,n=void 0),(l(t)&&function(t){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(t).length;var e;for(e in t)if(t.hasOwnProperty(e))return!1;return!0}(t)||a(t)&&0===t.length)&&(t=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=o,s._l=n,s._i=t,s._f=e,s._strict=i,(r=new k(ue(Se(s))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Ce(t,e,n,i){return Te(t,e,n,i,!1)}y.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),y.ISO_8601=function(){},y.RFC_2822=function(){};var Oe=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Ce.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:g()}),De=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Ce.apply(null,arguments);return this.isValid()&&t.isValid()?this<t?this:t:g()});function Me(t,e){var n,i;if(1===e.length&&a(e[0])&&(e=e[0]),!e.length)return Ce();for(n=e[0],i=1;i<e.length;++i)e[i].isValid()&&!e[i][t](n)||(n=e[i]);return n}var Ee=["year","quarter","month","week","day","hour","minute","second","millisecond"];function $e(t){var e=N(t),n=e.year||0,i=e.quarter||0,o=e.month||0,r=e.week||e.isoWeek||0,s=e.day||0,a=e.hour||0,l=e.minute||0,c=e.second||0,u=e.millisecond||0;this._isValid=function(t){for(var e in t)if(-1===St.call(Ee,e)||null!=t[e]&&isNaN(t[e]))return!1;for(var n=!1,i=0;i<Ee.length;++i)if(t[Ee[i]]){if(n)return!1;parseFloat(t[Ee[i]])!==S(t[Ee[i]])&&(n=!0)}return!0}(e),this._milliseconds=+u+1e3*c+6e4*l+1e3*a*60*60,this._days=+s+7*r,this._months=+o+3*i+12*n,this._data={},this._locale=ce(),this._bubble()}function Ae(t){return t instanceof $e}function je(t){return t<0?-1*Math.round(-1*t):Math.round(t)}function Ne(t,n){U(t,0,0,function(){var t=this.utcOffset(),e="+";return t<0&&(t=-t,e="-"),e+R(~~(t/60),2)+n+R(~~t%60,2)})}Ne("Z",":"),Ne("ZZ",""),lt("Z",rt),lt("ZZ",rt),ht(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=Ie(rt,t)});var Pe=/([\+\-]|\d\d)/gi;function Ie(t,e){var n=(e||"").match(t);if(null===n)return null;var i=((n[n.length-1]||[])+"").match(Pe)||["-",0,0],o=60*i[1]+S(i[2]);return 0===o?0:"+"===i[0]?o:-o}function Re(t,e){var n,i;return e._isUTC?(n=e.clone(),i=(_(t)||h(t)?t.valueOf():Ce(t).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+i),y.updateOffset(n,!1),n):Ce(t).local()}function Ye(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function Fe(){return!!this.isValid()&&this._isUTC&&0===this._offset}y.updateOffset=function(){};var Le=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,He=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ue(t,e){var n,i,o,r,s,a,l=t,c=null;return Ae(t)?l={ms:t._milliseconds,d:t._days,M:t._months}:u(t)?(l={},e?l[e]=t:l.milliseconds=t):(c=Le.exec(t))?(n="-"===c[1]?-1:1,l={y:0,d:S(c[mt])*n,h:S(c[gt])*n,m:S(c[vt])*n,s:S(c[yt])*n,ms:S(je(1e3*c[bt]))*n}):(c=He.exec(t))?(n="-"===c[1]?-1:1,l={y:We(c[2],n),M:We(c[3],n),w:We(c[4],n),d:We(c[5],n),h:We(c[6],n),m:We(c[7],n),s:We(c[8],n)}):null==l?l={}:"object"==typeof l&&("from"in l||"to"in l)&&(r=Ce(l.from),s=Ce(l.to),o=r.isValid()&&s.isValid()?(s=Re(s,r),r.isBefore(s)?a=ze(r,s):((a=ze(s,r)).milliseconds=-a.milliseconds,a.months=-a.months),a):{milliseconds:0,months:0},(l={}).ms=o.milliseconds,l.M=o.months),i=new $e(l),Ae(t)&&b(t,"_locale")&&(i._locale=t._locale),i}function We(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function ze(t,e){var n={};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function qe(i,o){return function(t,e){var n;return null===e||isNaN(+e)||(O(o,"moment()."+o+"(period, number) is deprecated. Please use moment()."+o+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=t,t=e,e=n),Ve(this,Ue(t="string"==typeof t?+t:t,e),i),this}}function Ve(t,e,n,i){var o=e._milliseconds,r=je(e._days),s=je(e._months);t.isValid()&&(i=null==i||i,s&&jt(t,Ot(t,"Month")+s*n),r&&Dt(t,"Date",Ot(t,"Date")+r*n),o&&t._d.setTime(t._d.valueOf()+o*n),i&&y.updateOffset(t,r||s))}Ue.fn=$e.prototype,Ue.invalid=function(){return Ue(NaN)};var Ge=qe(1,"add"),Be=qe(-1,"subtract");function Xe(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(n,"months");return-(n+(e-i<0?(e-i)/(i-t.clone().add(n-1,"months")):(e-i)/(t.clone().add(n+1,"months")-i)))||0}function Je(t){var e;return void 0===t?this._locale._abbr:(null!=(e=ce(t))&&(this._locale=e),this)}y.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",y.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Ze=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});function Ke(){return this._locale}var Qe=126227808e5;function tn(t,e){return(t%e+e)%e}function en(t,e,n){return t<100&&0<=t?new Date(t+400,e,n)-Qe:new Date(t,e,n).valueOf()}function nn(t,e,n){return t<100&&0<=t?Date.UTC(t+400,e,n)-Qe:Date.UTC(t,e,n)}function on(t,e){U(0,[t,t.length],0,e)}function rn(t,e,n,i,o){var r;return null==t?Ht(this,i,o).year:((r=Ut(t,i,o))<e&&(e=r),function(t,e,n,i,o){var r=Lt(t,e,n,i,o),s=Yt(r.year,0,r.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}.call(this,t,e,n,i,o))}U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),on("gggg","weekYear"),on("ggggg","weekYear"),on("GGGG","isoWeekYear"),on("GGGGG","isoWeekYear"),A("weekYear","gg"),A("isoWeekYear","GG"),I("weekYear",1),I("isoWeekYear",1),lt("G",it),lt("g",it),lt("GG",J,V),lt("gg",J,V),lt("GGGG",tt,B),lt("gggg",tt,B),lt("GGGGG",et,X),lt("ggggg",et,X),dt(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){e[i.substr(0,2)]=S(t)}),dt(["gg","GG"],function(t,e,n,i){e[i]=y.parseTwoDigitYear(t)}),U("Q",0,"Qo","quarter"),A("quarter","Q"),I("quarter",7),lt("Q",q),ht("Q",function(t,e){e[ft]=3*(S(t)-1)}),U("D",["DD",2],"Do","date"),A("date","D"),I("date",9),lt("D",J),lt("DD",J,V),lt("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient}),ht(["D","DD"],mt),ht("Do",function(t,e){e[mt]=S(t.match(J)[0])});var sn=Ct("Date",!0);U("DDD",["DDDD",3],"DDDo","dayOfYear"),A("dayOfYear","DDD"),I("dayOfYear",4),lt("DDD",Q),lt("DDDD",G),ht(["DDD","DDDD"],function(t,e,n){n._dayOfYear=S(t)}),U("m",["mm",2],0,"minute"),A("minute","m"),I("minute",14),lt("m",J),lt("mm",J,V),ht(["m","mm"],vt);var an=Ct("Minutes",!1);U("s",["ss",2],0,"second"),A("second","s"),I("second",15),lt("s",J),lt("ss",J,V),ht(["s","ss"],yt);var ln,cn=Ct("Seconds",!1);for(U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),A("millisecond","ms"),I("millisecond",16),lt("S",Q,q),lt("SS",Q,V),lt("SSS",Q,G),ln="SSSS";ln.length<=9;ln+="S")lt(ln,nt);function un(t,e){e[bt]=S(1e3*("0."+t))}for(ln="S";ln.length<=9;ln+="S")ht(ln,un);var hn=Ct("Milliseconds",!1);U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var dn=k.prototype;function pn(t){return t}dn.add=Ge,dn.calendar=function(t,e){var n=t||Ce(),i=Re(n,this).startOf("day"),o=y.calendarFormat(this,i)||"sameElse",r=e&&(D(e[o])?e[o].call(this,n):e[o]);return this.format(r||this.localeData().calendar(o,this,Ce(n)))},dn.clone=function(){return new k(this)},dn.diff=function(t,e,n){var i,o,r;if(!this.isValid())return NaN;if(!(i=Re(t,this)).isValid())return NaN;switch(o=6e4*(i.utcOffset()-this.utcOffset()),e=j(e)){case"year":r=Xe(this,i)/12;break;case"month":r=Xe(this,i);break;case"quarter":r=Xe(this,i)/3;break;case"second":r=(this-i)/1e3;break;case"minute":r=(this-i)/6e4;break;case"hour":r=(this-i)/36e5;break;case"day":r=(this-i-o)/864e5;break;case"week":r=(this-i-o)/6048e5;break;default:r=this-i}return n?r:x(r)},dn.endOf=function(t){var e;if(void 0===(t=j(t))||"millisecond"===t||!this.isValid())return this;var n=this._isUTC?nn:en;switch(t){case"year":e=n(this.year()+1,0,1)-1;break;case"quarter":e=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=n(this.year(),this.month()+1,1)-1;break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=36e5-tn(e+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":e=this._d.valueOf(),e+=6e4-tn(e,6e4)-1;break;case"second":e=this._d.valueOf(),e+=1e3-tn(e,1e3)-1}return this._d.setTime(e),y.updateOffset(this,!0),this},dn.format=function(t){t||(t=this.isUtc()?y.defaultFormatUtc:y.defaultFormat);var e=W(this,t);return this.localeData().postformat(e)},dn.from=function(t,e){return this.isValid()&&(_(t)&&t.isValid()||Ce(t).isValid())?Ue({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},dn.fromNow=function(t){return this.from(Ce(),t)},dn.to=function(t,e){return this.isValid()&&(_(t)&&t.isValid()||Ce(t).isValid())?Ue({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},dn.toNow=function(t){return this.to(Ce(),t)},dn.get=function(t){return D(this[t=j(t)])?this[t]():this},dn.invalidAt=function(){return w(this).overflow},dn.isAfter=function(t,e){var n=_(t)?t:Ce(t);return!(!this.isValid()||!n.isValid())&&("millisecond"===(e=j(e)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf())},dn.isBefore=function(t,e){var n=_(t)?t:Ce(t);return!(!this.isValid()||!n.isValid())&&("millisecond"===(e=j(e)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf())},dn.isBetween=function(t,e,n,i){var o=_(t)?t:Ce(t),r=_(e)?e:Ce(e);return!!(this.isValid()&&o.isValid()&&r.isValid())&&("("===(i=i||"()")[0]?this.isAfter(o,n):!this.isBefore(o,n))&&(")"===i[1]?this.isBefore(r,n):!this.isAfter(r,n))},dn.isSame=function(t,e){var n,i=_(t)?t:Ce(t);return!(!this.isValid()||!i.isValid())&&("millisecond"===(e=j(e)||"millisecond")?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(e).valueOf()<=n&&n<=this.clone().endOf(e).valueOf()))},dn.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)},dn.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)},dn.isValid=function(){return m(this)},dn.lang=Ze,dn.locale=Je,dn.localeData=Ke,dn.max=De,dn.min=Oe,dn.parsingFlags=function(){return p({},w(this))},dn.set=function(t,e){if("object"==typeof t)for(var n=function(t){var e=[];for(var n in t)e.push({unit:n,priority:P[n]});return e.sort(function(t,e){return t.priority-e.priority}),e}(t=N(t)),i=0;i<n.length;i++)this[n[i].unit](t[n[i].unit]);else if(D(this[t=j(t)]))return this[t](e);return this},dn.startOf=function(t){var e;if(void 0===(t=j(t))||"millisecond"===t||!this.isValid())return this;var n=this._isUTC?nn:en;switch(t){case"year":e=n(this.year(),0,1);break;case"quarter":e=n(this.year(),this.month()-this.month()%3,1);break;case"month":e=n(this.year(),this.month(),1);break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=n(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=tn(e+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":e=this._d.valueOf(),e-=tn(e,6e4);break;case"second":e=this._d.valueOf(),e-=tn(e,1e3)}return this._d.setTime(e),y.updateOffset(this,!0),this},dn.subtract=Be,dn.toArray=function(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]},dn.toObject=function(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}},dn.toDate=function(){return new Date(this.valueOf())},dn.toISOString=function(t){if(!this.isValid())return null;var e=!0!==t,n=e?this.clone().utc():this;return n.year()<0||9999<n.year()?W(n,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):D(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",W(n,"Z")):W(n,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},dn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="";this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",e="Z");var n="["+t+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",o=e+'[")]';return this.format(n+i+"-MM-DD[T]HH:mm:ss.SSS"+o)},dn.toJSON=function(){return this.isValid()?this.toISOString():null},dn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},dn.unix=function(){return Math.floor(this.valueOf()/1e3)},dn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},dn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},dn.year=Tt,dn.isLeapYear=function(){return xt(this.year())},dn.weekYear=function(t){return rn.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},dn.isoWeekYear=function(t){return rn.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)},dn.quarter=dn.quarters=function(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)},dn.month=Nt,dn.daysInMonth=function(){return Mt(this.year(),this.month())},dn.week=dn.weeks=function(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")},dn.isoWeek=dn.isoWeeks=function(t){var e=Ht(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")},dn.weeksInYear=function(){var t=this.localeData()._week;return Ut(this.year(),t.dow,t.doy)},dn.isoWeeksInYear=function(){return Ut(this.year(),1,4)},dn.date=sn,dn.day=dn.days=function(t){if(!this.isValid())return null!=t?this:NaN;var e,n,i=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(e=t,n=this.localeData(),t="string"!=typeof e?e:isNaN(e)?"number"==typeof(e=n.weekdaysParse(e))?e:null:parseInt(e,10),this.add(t-i,"d")):i},dn.weekday=function(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")},dn.isoWeekday=function(t){if(!this.isValid())return null!=t?this:NaN;if(null==t)return this.day()||7;var e,n,i=(e=t,n=this.localeData(),"string"==typeof e?n.weekdaysParse(e)%7||7:isNaN(e)?null:e);return this.day(this.day()%7?i:i-7)},dn.dayOfYear=function(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")},dn.hour=dn.hours=ee,dn.minute=dn.minutes=an,dn.second=dn.seconds=cn,dn.millisecond=dn.milliseconds=hn,dn.utcOffset=function(t,e,n){var i,o=this._offset||0;if(!this.isValid())return null!=t?this:NaN;if(null==t)return this._isUTC?o:Ye(this);if("string"==typeof t){if(null===(t=Ie(rt,t)))return this}else Math.abs(t)<16&&!n&&(t*=60);return!this._isUTC&&e&&(i=Ye(this)),this._offset=t,this._isUTC=!0,null!=i&&this.add(i,"m"),o!==t&&(!e||this._changeInProgress?Ve(this,Ue(t-o,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,y.updateOffset(this,!0),this._changeInProgress=null)),this},dn.utc=function(t){return this.utcOffset(0,t)},dn.local=function(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Ye(this),"m")),this},dn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var t=Ie(ot,this._i);null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this},dn.hasAlignedHourOffset=function(t){return!!this.isValid()&&(t=t?Ce(t).utcOffset():0,(this.utcOffset()-t)%60==0)},dn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},dn.isLocal=function(){return!!this.isValid()&&!this._isUTC},dn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},dn.isUtc=Fe,dn.isUTC=Fe,dn.zoneAbbr=function(){return this._isUTC?"UTC":""},dn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},dn.dates=n("dates accessor is deprecated. Use date instead.",sn),dn.months=n("months accessor is deprecated. Use month instead",Nt),dn.years=n("years accessor is deprecated. Use year instead",Tt),dn.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}),dn.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!c(this._isDSTShifted))return this._isDSTShifted;var t={};if(v(t,this),(t=Se(t))._a){var e=t._isUTC?f(t._a):Ce(t._a);this._isDSTShifted=this.isValid()&&0<s(t._a,e.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var fn=E.prototype;function mn(t,e,n,i){var o=ce(),r=f().set(i,e);return o[n](r,t)}function gn(t,e,n){if(u(t)&&(e=t,t=void 0),t=t||"",null!=e)return mn(t,e,n,"month");var i,o=[];for(i=0;i<12;i++)o[i]=mn(t,i,n,"month");return o}function vn(t,e,n,i){"boolean"==typeof t?u(e)&&(n=e,e=void 0):(e=t,t=!1,u(n=e)&&(n=e,e=void 0)),e=e||"";var o,r=ce(),s=t?r._week.dow:0;if(null!=n)return mn(e,(n+s)%7,i,"day");var a=[];for(o=0;o<7;o++)a[o]=mn(e,(o+s)%7,i,"day");return a}fn.calendar=function(t,e,n){var i=this._calendar[t]||this._calendar.sameElse;return D(i)?i.call(e,n):i},fn.longDateFormat=function(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])},fn.invalidDate=function(){return this._invalidDate},fn.ordinal=function(t){return this._ordinal.replace("%d",t)},fn.preparse=pn,fn.postformat=pn,fn.relativeTime=function(t,e,n,i){var o=this._relativeTime[n];return D(o)?o(t,e,n,i):o.replace(/%d/i,t)},fn.pastFuture=function(t,e){var n=this._relativeTime[0<t?"future":"past"];return D(n)?n(e):n.replace(/%s/i,e)},fn.set=function(t){var e,n;for(n in t)D(e=t[n])?this[n]=e:this["_"+n]=e;this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},fn.months=function(t,e){return t?a(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||Et).test(e)?"format":"standalone"][t.month()]:a(this._months)?this._months:this._months.standalone},fn.monthsShort=function(t,e){return t?a(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Et.test(e)?"format":"standalone"][t.month()]:a(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},fn.monthsParse=function(t,e,n){var i,o,r;if(this._monthsParseExact)return function(t,e,n){var i,o,r,s=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)r=f([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===e?-1!==(o=St.call(this._shortMonthsParse,s))?o:null:-1!==(o=St.call(this._longMonthsParse,s))?o:null:"MMM"===e?-1!==(o=St.call(this._shortMonthsParse,s))?o:-1!==(o=St.call(this._longMonthsParse,s))?o:null:-1!==(o=St.call(this._longMonthsParse,s))?o:-1!==(o=St.call(this._shortMonthsParse,s))?o:null}.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(o=f([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(o,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(o,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(r="^"+this.months(o,"")+"|^"+this.monthsShort(o,""),this._monthsParse[i]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}},fn.monthsRegex=function(t){return this._monthsParseExact?(b(this,"_monthsRegex")||Rt.call(this),t?this._monthsStrictRegex:this._monthsRegex):(b(this,"_monthsRegex")||(this._monthsRegex=It),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)},fn.monthsShortRegex=function(t){return this._monthsParseExact?(b(this,"_monthsRegex")||Rt.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(b(this,"_monthsShortRegex")||(this._monthsShortRegex=Pt),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)},fn.week=function(t){return Ht(t,this._week.dow,this._week.doy).week},fn.firstDayOfYear=function(){return this._week.doy},fn.firstDayOfWeek=function(){return this._week.dow},fn.weekdays=function(t,e){var n=a(this._weekdays)?this._weekdays:this._weekdays[t&&!0!==t&&this._weekdays.isFormat.test(e)?"format":"standalone"];return!0===t?Wt(n,this._week.dow):t?n[t.day()]:n},fn.weekdaysMin=function(t){return!0===t?Wt(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin},fn.weekdaysShort=function(t){return!0===t?Wt(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort},fn.weekdaysParse=function(t,e,n){var i,o,r;if(this._weekdaysParseExact)return function(t,e,n){var i,o,r,s=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)r=f([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===e?-1!==(o=St.call(this._weekdaysParse,s))?o:null:"ddd"===e?-1!==(o=St.call(this._shortWeekdaysParse,s))?o:null:-1!==(o=St.call(this._minWeekdaysParse,s))?o:null:"dddd"===e?-1!==(o=St.call(this._weekdaysParse,s))?o:-1!==(o=St.call(this._shortWeekdaysParse,s))?o:-1!==(o=St.call(this._minWeekdaysParse,s))?o:null:"ddd"===e?-1!==(o=St.call(this._shortWeekdaysParse,s))?o:-1!==(o=St.call(this._weekdaysParse,s))?o:-1!==(o=St.call(this._minWeekdaysParse,s))?o:null:-1!==(o=St.call(this._minWeekdaysParse,s))?o:-1!==(o=St.call(this._weekdaysParse,s))?o:-1!==(o=St.call(this._shortWeekdaysParse,s))?o:null}.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(o=f([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(o,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(o,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(o,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(r="^"+this.weekdays(o,"")+"|^"+this.weekdaysShort(o,"")+"|^"+this.weekdaysMin(o,""),this._weekdaysParse[i]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[i].test(t))return i;if(n&&"ddd"===e&&this._shortWeekdaysParse[i].test(t))return i;if(n&&"dd"===e&&this._minWeekdaysParse[i].test(t))return i;if(!n&&this._weekdaysParse[i].test(t))return i}},fn.weekdaysRegex=function(t){return this._weekdaysParseExact?(b(this,"_weekdaysRegex")||Jt.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(b(this,"_weekdaysRegex")||(this._weekdaysRegex=Gt),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)},fn.weekdaysShortRegex=function(t){return this._weekdaysParseExact?(b(this,"_weekdaysRegex")||Jt.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(b(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Bt),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},fn.weekdaysMinRegex=function(t){return this._weekdaysParseExact?(b(this,"_weekdaysRegex")||Jt.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(b(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Xt),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},fn.isPM=function(t){return"p"===(t+"").toLowerCase().charAt(0)},fn.meridiem=function(t,e,n){return 11<t?n?"pm":"PM":n?"am":"AM"},ae("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10;return t+(1===S(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}}),y.lang=n("moment.lang is deprecated. Use moment.locale instead.",ae),y.langData=n("moment.langData is deprecated. Use moment.localeData instead.",ce);var yn=Math.abs;function bn(t,e,n,i){var o=Ue(e,n);return t._milliseconds+=i*o._milliseconds,t._days+=i*o._days,t._months+=i*o._months,t._bubble()}function wn(t){return t<0?Math.floor(t):Math.ceil(t)}function kn(t){return 4800*t/146097}function _n(t){return 146097*t/4800}function xn(t){return function(){return this.as(t)}}var Sn=xn("ms"),Tn=xn("s"),Cn=xn("m"),On=xn("h"),Dn=xn("d"),Mn=xn("w"),En=xn("M"),$n=xn("Q"),An=xn("y");function jn(t){return function(){return this.isValid()?this._data[t]:NaN}}var Nn=jn("milliseconds"),Pn=jn("seconds"),In=jn("minutes"),Rn=jn("hours"),Yn=jn("days"),Fn=jn("months"),Ln=jn("years"),Hn=Math.round,Un={ss:44,s:45,m:45,h:22,d:26,M:11},Wn=Math.abs;function zn(t){return(0<t)-(t<0)||+t}function qn(){if(!this.isValid())return this.localeData().invalidDate();var t,e,n=Wn(this._milliseconds)/1e3,i=Wn(this._days),o=Wn(this._months);e=x((t=x(n/60))/60),n%=60,t%=60;var r=x(o/12),s=o%=12,a=i,l=e,c=t,u=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var d=h<0?"-":"",p=zn(this._months)!==zn(h)?"-":"",f=zn(this._days)!==zn(h)?"-":"",m=zn(this._milliseconds)!==zn(h)?"-":"";return d+"P"+(r?p+r+"Y":"")+(s?p+s+"M":"")+(a?f+a+"D":"")+(l||c||u?"T":"")+(l?m+l+"H":"")+(c?m+c+"M":"")+(u?m+u+"S":"")}var Vn=$e.prototype;return Vn.isValid=function(){return this._isValid},Vn.abs=function(){var t=this._data;return this._milliseconds=yn(this._milliseconds),this._days=yn(this._days),this._months=yn(this._months),t.milliseconds=yn(t.milliseconds),t.seconds=yn(t.seconds),t.minutes=yn(t.minutes),t.hours=yn(t.hours),t.months=yn(t.months),t.years=yn(t.years),this},Vn.add=function(t,e){return bn(this,t,e,1)},Vn.subtract=function(t,e){return bn(this,t,e,-1)},Vn.as=function(t){if(!this.isValid())return NaN;var e,n,i=this._milliseconds;if("month"===(t=j(t))||"quarter"===t||"year"===t)switch(e=this._days+i/864e5,n=this._months+kn(e),t){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(e=this._days+Math.round(_n(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;default:throw new Error("Unknown unit "+t)}},Vn.asMilliseconds=Sn,Vn.asSeconds=Tn,Vn.asMinutes=Cn,Vn.asHours=On,Vn.asDays=Dn,Vn.asWeeks=Mn,Vn.asMonths=En,Vn.asQuarters=$n,Vn.asYears=An,Vn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*S(this._months/12):NaN},Vn._bubble=function(){var t,e,n,i,o,r=this._milliseconds,s=this._days,a=this._months,l=this._data;return 0<=r&&0<=s&&0<=a||r<=0&&s<=0&&a<=0||(r+=864e5*wn(_n(a)+s),a=s=0),l.milliseconds=r%1e3,t=x(r/1e3),l.seconds=t%60,e=x(t/60),l.minutes=e%60,n=x(e/60),l.hours=n%24,a+=o=x(kn(s+=x(n/24))),s-=wn(_n(o)),i=x(a/12),a%=12,l.days=s,l.months=a,l.years=i,this},Vn.clone=function(){return Ue(this)},Vn.get=function(t){return t=j(t),this.isValid()?this[t+"s"]():NaN},Vn.milliseconds=Nn,Vn.seconds=Pn,Vn.minutes=In,Vn.hours=Rn,Vn.days=Yn,Vn.weeks=function(){return x(this.days()/7)},Vn.months=Fn,Vn.years=Ln,Vn.humanize=function(t){if(!this.isValid())return this.localeData().invalidDate();var e,n,i,o,r,s,a,l,c,u,h=this.localeData(),d=(e=!t,n=h,i=Ue(this).abs(),o=Hn(i.as("s")),r=Hn(i.as("m")),s=Hn(i.as("h")),a=Hn(i.as("d")),l=Hn(i.as("M")),c=Hn(i.as("y")),(u=o<=Un.ss&&["s",o]||o<Un.s&&["ss",o]||r<=1&&["m"]||r<Un.m&&["mm",r]||s<=1&&["h"]||s<Un.h&&["hh",s]||a<=1&&["d"]||a<Un.d&&["dd",a]||l<=1&&["M"]||l<Un.M&&["MM",l]||c<=1&&["y"]||["yy",c])[2]=e,u[3]=0<+this,u[4]=n,function(t,e,n,i,o){return o.relativeTime(e||1,!!n,t,i)}.apply(null,u));return t&&(d=h.pastFuture(+this,d)),h.postformat(d)},Vn.toISOString=qn,Vn.toString=qn,Vn.toJSON=qn,Vn.locale=Je,Vn.localeData=Ke,Vn.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",qn),Vn.lang=Ze,U("X",0,0,"unix"),U("x",0,0,"valueOf"),lt("x",it),lt("X",/[+-]?\d+(\.\d{1,3})?/),ht("X",function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))}),ht("x",function(t,e,n){n._d=new Date(S(t))}),y.version="2.24.0",t=Ce,y.fn=dn,y.min=function(){return Me("isBefore",[].slice.call(arguments,0))},y.max=function(){return Me("isAfter",[].slice.call(arguments,0))},y.now=function(){return Date.now?Date.now():+new Date},y.utc=f,y.unix=function(t){return Ce(1e3*t)},y.months=function(t,e){return gn(t,e,"months")},y.isDate=h,y.locale=ae,y.invalid=g,y.duration=Ue,y.isMoment=_,y.weekdays=function(t,e,n){return vn(t,e,n,"weekdays")},y.parseZone=function(){return Ce.apply(null,arguments).parseZone()},y.localeData=ce,y.isDuration=Ae,y.monthsShort=function(t,e){return gn(t,e,"monthsShort")},y.weekdaysMin=function(t,e,n){return vn(t,e,n,"weekdaysMin")},y.defineLocale=le,y.updateLocale=function(t,e){if(null!=e){var n,i,o=ne;null!=(i=se(t))&&(o=i._config),(n=new E(e=M(o,e))).parentLocale=ie[t],ie[t]=n,ae(t)}else null!=ie[t]&&(null!=ie[t].parentLocale?ie[t]=ie[t].parentLocale:null!=ie[t]&&delete ie[t]);return ie[t]},y.locales=function(){return i(ie)},y.weekdaysShort=function(t,e,n){return vn(t,e,n,"weekdaysShort")},y.normalizeUnits=j,y.relativeTimeRounding=function(t){return void 0===t?Hn:"function"==typeof t&&(Hn=t,!0)},y.relativeTimeThreshold=function(t,e){return void 0!==Un[t]&&(void 0===e?Un[t]:(Un[t]=e,"s"===t&&(Un.ss=e-1),!0))},y.calendarFormat=function(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},y.prototype=dn,y.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},y}),define("mockup-patterns-moment",["jquery","pat-base","mockup-i18n","moment"],function(i,t,e,o){var r=(new e).currentLanguage,n="ar-sa ar-tn ar az be bg bn bo br bs ca cs cv cy da de-at de dv el en-au en-ca en-gb en-ie en-nz eo es et eu fa fi fo fr-ca fr-ch fr fy gd gl he hi hr hu hy-am id is it ja jv ka kk km ko lb lo lt lv me mk ml mr ms-my ms my nb ne nl nn pl pt-br pt ro ru se si sk sl sq sr-cyrl sr sv sw ta te th tl-ph tlh tr tzl tzm-latn tzm uk uz vi zh-cn zh-tw";function s(t){return-1!==n.split(" ").indexOf(t)}return function(){if("en"!==r){var t=r.replace("_","-").toLowerCase();"en"!==(t=s(t=s(t)?t:t.split("-")[0])?t:"en")&&require(["moment-url/"+t])}}(),t.extend({name:"moment",trigger:".pat-moment",parser:"mockup",moment_i18n_map:{no:"nb"},defaults:{selector:null,format:"LLL",setTitle:!1},convert:function(t){var e=this,n=t.attr("data-date");n||(n=i.trim(t.html())),n&&"None"!==n&&(r in e.moment_i18n_map&&(r=e.moment_i18n_map[r]),o.locale([r,"en"]),(n=o(n)).isValid()&&(e.options.setTitle&&t.attr("title",n.format("LLLL")),(n="relative"===e.options.format?n.fromNow():"calendar"===e.options.format?n.calendar():n.format(e.options.format))&&t.html(n)))},init:function(){var t=this;t.options.selector?t.$el.find(t.options.selector).each(function(){t.convert(i(this))}):t.convert(t.$el)}})}),function(t){"function"==typeof define&&define.amd?define("picker",["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):this.Picker=t(jQuery)}(function(m){var i=m(window),g=m(document),v=m(document.documentElement),y=null!=document.documentElement.style.transition;function b(i,t,e,n){if(!i)return b;var o=!1,a={id:i.id||"P"+Math.abs(~~(Math.random()*new Date))},l=e?m.extend(!0,{},e.defaults,n):n||{},r=m.extend({},b.klasses(),l.klass),c=m(i),s=function(){return this.start()},u=s.prototype={constructor:s,$node:c,start:function(){return a&&a.start?u:(a.methods={},a.start=!0,a.open=!1,a.type=i.type,i.autofocus=i==_(),i.readOnly=!l.editable,i.id=i.id||a.id,"text"!=i.type&&(i.type="text"),u.component=new e(u,l),u.$root=m('<div class="'+r.picker+'" id="'+i.id+'_root" />'),k(u.$root[0],"hidden",!0),u.$holder=m(h()).appendTo(u.$root),d(),l.formatSubmit&&function(){var t;!0===l.hiddenName?(t=i.name,i.name=""):t=(t=["string"==typeof l.hiddenPrefix?l.hiddenPrefix:"","string"==typeof l.hiddenSuffix?l.hiddenSuffix:"_submit"])[0]+i.name+t[1];u._hidden=m('<input type=hidden name="'+t+'"'+(c.data("value")||i.value?' value="'+u.get("select",l.formatSubmit)+'"':"")+">")[0],c.on("change."+a.id,function(){u._hidden.value=i.value?u.get("select",l.formatSubmit):""})}(),function(){c.data(t,u).addClass(r.input).val(c.data("value")?u.get("select",l.format):i.value),l.editable||c.on("focus."+a.id+" click."+a.id,function(t){t.preventDefault(),u.open()}).on("keydown."+a.id,f);k(i,{haspopup:!0,expanded:!1,readonly:!1,owns:i.id+"_root"})}(),l.containerHidden?m(l.containerHidden).append(u._hidden):c.after(u._hidden),l.container?m(l.container).append(u.$root):c.after(u.$root),u.on({start:u.component.onStart,render:u.component.onRender,stop:u.component.onStop,open:u.component.onOpen,close:u.component.onClose,set:u.component.onSet}).on({start:l.onStart,render:l.onRender,stop:l.onStop,open:l.onOpen,close:l.onClose,set:l.onSet}),o=function(t){var e,n="position";t.currentStyle?e=t.currentStyle[n]:window.getComputedStyle&&(e=getComputedStyle(t)[n]);return"fixed"==e}(u.$holder[0]),i.autofocus&&u.open(),u.trigger("start").trigger("render"))},render:function(t){return t?(u.$holder=m(h()),d(),u.$root.html(u.$holder)):u.$root.find("."+r.box).html(u.component.nodes(a.open)),u.trigger("render")},stop:function(){return a.start&&(u.close(),u._hidden&&u._hidden.parentNode.removeChild(u._hidden),u.$root.remove(),c.removeClass(r.input).removeData(t),setTimeout(function(){c.off("."+a.id)},0),i.type=a.type,i.readOnly=!1,u.trigger("stop"),a.methods={},a.start=!1),u},open:function(t){return a.open?u:(c.addClass(r.active),k(i,"expanded",!0),setTimeout(function(){u.$root.addClass(r.opened),k(u.$root[0],"hidden",!1)},0),!1!==t&&(a.open=!0,o&&v.css("overflow","hidden").css("padding-right","+="+w()),o&&y?u.$holder.find("."+r.frame).one("transitionend",function(){u.$holder[0].focus()}):u.$holder[0].focus(),g.on("click."+a.id+" focusin."+a.id,function(t){var e=t.target;e!=i&&e!=document&&3!=t.which&&u.close(e===u.$holder[0])}).on("keydown."+a.id,function(t){var e=t.keyCode,n=u.component.key[e],i=t.target;27==e?u.close(!0):i!=u.$holder[0]||!n&&13!=e?m.contains(u.$root[0],i)&&13==e&&(t.preventDefault(),i.click()):(t.preventDefault(),n?b._.trigger(u.component.key.go,u,[b._.trigger(n)]):u.$root.find("."+r.highlighted).hasClass(r.disabled)||(u.set("select",u.component.item.highlight),l.closeOnSelect&&u.close(!0)))})),u.trigger("open"))},close:function(t){return t&&(l.editable?i.focus():(u.$holder.off("focus.toOpen").focus(),setTimeout(function(){u.$holder.on("focus.toOpen",p)},0))),c.removeClass(r.active),k(i,"expanded",!1),setTimeout(function(){u.$root.removeClass(r.opened+" "+r.focused),k(u.$root[0],"hidden",!0)},0),a.open?(a.open=!1,o&&v.css("overflow","").css("padding-right","-="+w()),g.off("."+a.id),u.trigger("close")):u},clear:function(t){return u.set("clear",null,t)},set:function(t,e,n){var i,o,r=m.isPlainObject(t),s=r?t:{};if(n=r&&m.isPlainObject(e)?e:n||{},t){for(i in r||(s[t]=e),s)o=s[i],i in u.component.item&&(void 0===o&&(o=null),u.component.set(i,o,n)),"select"!=i&&"clear"!=i||c.val("clear"==i?"":u.get(i,l.format)).trigger("change");u.render()}return n.muted?u:u.trigger("set",s)},get:function(t,e){if(null!=a[t=t||"value"])return a[t];if("valueSubmit"==t){if(u._hidden)return u._hidden.value;t="value"}if("value"==t)return i.value;if(t in u.component.item){if("string"!=typeof e)return u.component.get(t);var n=u.component.get(t);return n?b._.trigger(u.component.formats.toString,u.component,[e,n]):""}},on:function(t,e,n){var i,o,r=m.isPlainObject(t),s=r?t:{};if(t)for(i in r||(s[t]=e),s)o=s[i],n&&(i="_"+i),a.methods[i]=a.methods[i]||[],a.methods[i].push(o);return u},off:function(){var t,e,n=arguments;for(t=0,namesCount=n.length;t<namesCount;t+=1)(e=n[t])in a.methods&&delete a.methods[e];return u},trigger:function(t,n){var e=function(t){var e=a.methods[t];e&&e.map(function(t){b._.trigger(t,u,[n])})};return e("_"+t),e(t),u}};function h(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",u.component.nodes(a.open),r.box),r.wrap),r.frame),r.holder,'tabindex="-1"')}function d(){u.$holder.on({keydown:f,"focus.toOpen":p,blur:function(){c.removeClass(r.target)},focusin:function(t){u.$root.removeClass(r.focused),t.stopPropagation()},"mousedown click":function(t){var e=t.target;e!=u.$holder[0]&&(t.stopPropagation(),"mousedown"!=t.type||m(e).is("input, select, textarea, button, option")||(t.preventDefault(),u.$holder[0].focus()))}}).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var t=m(this),e=t.data(),n=t.hasClass(r.navDisabled)||t.hasClass(r.disabled),i=_();i=i&&(i.type||i.href),(n||i&&!m.contains(u.$root[0],i))&&u.$holder[0].focus(),!n&&e.nav?u.set("highlight",u.component.item.highlight,{nav:e.nav}):!n&&"pick"in e?(u.set("select",e.pick),l.closeOnSelect&&u.close(!0)):e.clear?(u.clear(),l.closeOnClear&&u.close(!0)):e.close&&u.close(!0)})}function p(t){t.stopPropagation(),c.addClass(r.target),u.$root.addClass(r.focused),u.open()}function f(t){var e=t.keyCode,n=/^(8|46)$/.test(e);if(27==e)return u.close(!0),!1;(32==e||n||!a.open&&u.component.key[e])&&(t.preventDefault(),t.stopPropagation(),n?u.clear().close():u.open())}return new s}function w(){if(v.height()<=i.height())return 0;var t=m('<div style="visibility:hidden;width:100px" />').appendTo("body"),e=t[0].offsetWidth;t.css("overflow","scroll");var n=m('<div style="width:100%" />').appendTo(t)[0].offsetWidth;return t.remove(),e-n}function k(t,e,n){if(m.isPlainObject(e))for(var i in e)o(t,i,e[i]);else o(t,e,n)}function o(t,e,n){t.setAttribute(("role"==e?"":"aria-")+e,n)}function _(){try{return document.activeElement}catch(t){}}return b.klasses=function(t){return{picker:t=t||"picker",opened:t+"--opened",focused:t+"--focused",input:t+"__input",active:t+"__input--active",target:t+"__input--target",holder:t+"__holder",frame:t+"__frame",wrap:t+"__wrap",box:t+"__box"}},b._={group:function(t){for(var e,n="",i=b._.trigger(t.min,t);i<=b._.trigger(t.max,t,[i]);i+=t.i)e=b._.trigger(t.item,t,[i]),n+=b._.node(t.node,e[0],e[1],e[2]);return n},node:function(t,e,n,i){return e?"<"+t+(n=n?' class="'+n+'"':"")+(i=i?" "+i:"")+">"+(e=m.isArray(e)?e.join(""):e)+"</"+t+">":""},lead:function(t){return(t<10?"0":"")+t},trigger:function(t,e,n){return"function"==typeof t?t.apply(e,n||[]):t},digits:function(t){return/\d/.test(t[1])?2:1},isDate:function(t){return-1<{}.toString.call(t).indexOf("Date")&&this.isInteger(t.getDate())},isInteger:function(t){return-1<{}.toString.call(t).indexOf("Number")&&t%1==0},ariaAttr:function(t,e){m.isPlainObject(t)||(t={attribute:e});for(var n in e="",t){var i=("role"==n?"":"aria-")+n,o=t[n];e+=null==o?"":i+'="'+t[n]+'"'}return e}},b.extend=function(i,o){m.fn[i]=function(t,e){var n=this.data(i);return"picker"==t?n:n&&"string"==typeof t?b._.trigger(n[t],n,[e]):this.each(function(){m(this).data(i)||new b(this,i,o,t)})},m.fn[i].defaults=o.defaults},b}),function(t){"function"==typeof define&&define.amd?define("picker.date",["picker","jquery"],t):"object"==typeof exports?module.exports=t(require("./picker.js"),require("jquery")):t(Picker,jQuery)}(function(t,f){var e,v=t._;function n(e,n){var t,i=this,o=e.$node[0],r=o.value,s=e.$node.data("value"),a=s||r,l=s?n.formatSubmit:n.format,c=function(){return o.currentStyle?"rtl"==o.currentStyle.direction:"rtl"==getComputedStyle(e.$root[0]).direction};i.settings=n,i.$node=e.$node,i.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},i.item={},i.item.clear=null,i.item.disable=(n.disable||[]).slice(0),i.item.enable=-(!0===(t=i.item.disable)[0]?t.shift():-1),i.set("min",n.min).set("max",n.max).set("now"),a?i.set("select",a,{format:l,defaultValue:!0}):i.set("select",null).set("highlight",i.item.now),i.key={40:7,38:-7,39:function(){return c()?-1:1},37:function(){return c()?1:-1},go:function(t){var e=i.item.highlight,n=new Date(e.year,e.month,e.date+t);i.set("highlight",n,{interval:t}),this.render()}},e.on("render",function(){e.$root.find("."+n.klass.selectMonth).on("change",function(){var t=this.value;t&&(e.set("highlight",[e.get("view").year,t,e.get("highlight").date]),e.$root.find("."+n.klass.selectMonth).trigger("focus"))}),e.$root.find("."+n.klass.selectYear).on("change",function(){var t=this.value;t&&(e.set("highlight",[t,e.get("view").month,e.get("highlight").date]),e.$root.find("."+n.klass.selectYear).trigger("focus"))})},1).on("open",function(){var t="";i.disabled(i.get("now"))&&(t=":not(."+n.klass.buttonToday+")"),e.$root.find("button"+t+", select").attr("disabled",!1)},1).on("close",function(){e.$root.find("button, select").attr("disabled",!0)},1)}n.prototype.set=function(e,n,i){var o=this,t=o.item;return null===n?("clear"==e&&(e="select"),t[e]=n):(t["enable"==e?"disable":"flip"==e?"enable":e]=o.queue[e].split(" ").map(function(t){return n=o[t](e,n,i)}).pop(),"select"==e?o.set("highlight",t.select,i):"highlight"==e?o.set("view",t.highlight,i):e.match(/^(flip|min|max|disable|enable)$/)&&(t.select&&o.disabled(t.select)&&o.set("select",t.select,i),t.highlight&&o.disabled(t.highlight)&&o.set("highlight",t.highlight,i))),o},n.prototype.get=function(t){return this.item[t]},n.prototype.create=function(t,e,n){var i;return(e=void 0===e?t:e)==-1/0||e==1/0?i=e:e=f.isPlainObject(e)&&v.isInteger(e.pick)?e.obj:f.isArray(e)?(e=new Date(e[0],e[1],e[2]),v.isDate(e)?e:this.create().obj):v.isInteger(e)||v.isDate(e)?this.normalize(new Date(e),n):this.now(t,e,n),{year:i||e.getFullYear(),month:i||e.getMonth(),date:i||e.getDate(),day:i||e.getDay(),obj:i||e,pick:i||e.getTime()}},n.prototype.createRange=function(t,e){var n=this,i=function(t){return!0===t||f.isArray(t)||v.isDate(t)?n.create(t):t};return v.isInteger(t)||(t=i(t)),v.isInteger(e)||(e=i(e)),v.isInteger(t)&&f.isPlainObject(e)?t=[e.year,e.month,e.date+t]:v.isInteger(e)&&f.isPlainObject(t)&&(e=[t.year,t.month,t.date+e]),{from:i(t),to:i(e)}},n.prototype.withinRange=function(t,e){return t=this.createRange(t.from,t.to),e.pick>=t.from.pick&&e.pick<=t.to.pick},n.prototype.overlapRanges=function(t,e){var n=this;return t=n.createRange(t.from,t.to),e=n.createRange(e.from,e.to),n.withinRange(t,e.from)||n.withinRange(t,e.to)||n.withinRange(e,t.from)||n.withinRange(e,t.to)},n.prototype.now=function(t,e,n){return e=new Date,n&&n.rel&&e.setDate(e.getDate()+n.rel),this.normalize(e,n)},n.prototype.navigate=function(t,e,n){var i,o,r,s,a=f.isArray(e),l=f.isPlainObject(e),c=this.item.view;if(a||l){for(s=l?(o=e.year,r=e.month,e.date):(o=+e[0],r=+e[1],+e[2]),n&&n.nav&&c&&c.month!==r&&(o=c.year,r=c.month),o=(i=new Date(o,r+(n&&n.nav?n.nav:0),1)).getFullYear(),r=i.getMonth();new Date(o,r,s).getMonth()!==r;)s-=1;e=[o,r,s]}return e},n.prototype.normalize=function(t){return t.setHours(0,0,0,0),t},n.prototype.measure=function(t,e){return e?"string"==typeof e?e=this.parse(t,e):v.isInteger(e)&&(e=this.now(t,e,{rel:e})):e="min"==t?-1/0:1/0,e},n.prototype.viewset=function(t,e){return this.create([e.year,e.month,1])},n.prototype.validate=function(t,n,e){var i,o,r,s,a=this,l=n,c=e&&e.interval?e.interval:1,u=-1===a.item.enable,h=a.item.min,d=a.item.max,p=u&&a.item.disable.filter(function(t){if(f.isArray(t)){var e=a.create(t).pick;e<n.pick?i=!0:e>n.pick&&(o=!0)}return v.isInteger(t)}).length;if((!e||!e.nav&&!e.defaultValue)&&(!u&&a.disabled(n)||u&&a.disabled(n)&&(p||i||o)||!u&&(n.pick<=h.pick||n.pick>=d.pick)))for(u&&!p&&(!o&&0<c||!i&&c<0)&&(c*=-1);a.disabled(n)&&(1<Math.abs(c)&&(n.month<l.month||n.month>l.month)&&(n=l,c=0<c?1:-1),n.pick<=h.pick?(r=!0,c=1,n=a.create([h.year,h.month,h.date+(n.pick===h.pick?0:-1)])):n.pick>=d.pick&&(s=!0,c=-1,n=a.create([d.year,d.month,d.date+(n.pick===d.pick?0:1)])),!r||!s);)n=a.create([n.year,n.month,n.date+c]);return n},n.prototype.disabled=function(e){var n=this,t=n.item.disable.filter(function(t){return v.isInteger(t)?e.day===(n.settings.firstDay?t:t-1)%7:f.isArray(t)||v.isDate(t)?e.pick===n.create(t).pick:f.isPlainObject(t)?n.withinRange(t,e):void 0});return t=t.length&&!t.filter(function(t){return f.isArray(t)&&"inverted"==t[3]||f.isPlainObject(t)&&t.inverted}).length,-1===n.item.enable?!t:t||e.pick<n.item.min.pick||e.pick>n.item.max.pick},n.prototype.parse=function(t,i,e){var o=this,r={};return i&&"string"==typeof i?(e&&e.format||((e=e||{}).format=o.settings.format),o.formats.toArray(e.format).map(function(t){var e=o.formats[t],n=e?v.trigger(e,o,[i,r]):t.replace(/^!/,"").length;e&&(r[t]=i.substr(0,n)),i=i.substr(n)}),[r.yyyy||r.yy,+(r.mm||r.m)-1,r.dd||r.d]):i},n.prototype.formats=function(){function i(t,e,n){var i=t.match(/[^\x00-\x7F]+|\w+/)[0];return n.mm||n.m||(n.m=e.indexOf(i)+1),i.length}function n(t){return t.match(/\w+/)[0].length}return{d:function(t,e){return t?v.digits(t):e.date},dd:function(t,e){return t?2:v.lead(e.date)},ddd:function(t,e){return t?n(t):this.settings.weekdaysShort[e.day]},dddd:function(t,e){return t?n(t):this.settings.weekdaysFull[e.day]},m:function(t,e){return t?v.digits(t):e.month+1},mm:function(t,e){return t?2:v.lead(e.month+1)},mmm:function(t,e){var n=this.settings.monthsShort;return t?i(t,n,e):n[e.month]},mmmm:function(t,e){var n=this.settings.monthsFull;return t?i(t,n,e):n[e.month]},yy:function(t,e){return t?2:(""+e.year).slice(2)},yyyy:function(t,e){return t?4:e.year},toArray:function(t){return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(t,e){var n=this;return n.formats.toArray(t).map(function(t){return v.trigger(n.formats[t],n,[0,e])||t.replace(/^!/,"")}).join("")}}}(),n.prototype.isDateExact=function(t,e){return v.isInteger(t)&&v.isInteger(e)||"boolean"==typeof t&&"boolean"==typeof e?t===e:(v.isDate(t)||f.isArray(t))&&(v.isDate(e)||f.isArray(e))?this.create(t).pick===this.create(e).pick:!(!f.isPlainObject(t)||!f.isPlainObject(e))&&(this.isDateExact(t.from,e.from)&&this.isDateExact(t.to,e.to))},n.prototype.isDateOverlap=function(t,e){var n=this.settings.firstDay?1:0;return v.isInteger(t)&&(v.isDate(e)||f.isArray(e))?(t=t%7+n)===this.create(e).day+1:v.isInteger(e)&&(v.isDate(t)||f.isArray(t))?(e=e%7+n)===this.create(t).day+1:!(!f.isPlainObject(t)||!f.isPlainObject(e))&&this.overlapRanges(t,e)},n.prototype.flipEnable=function(t){var e=this.item;e.enable=t||(-1==e.enable?1:-1)},n.prototype.deactivate=function(t,e){var i=this,o=i.item.disable.slice(0);return"flip"==e?i.flipEnable():!1===e?(i.flipEnable(1),o=[]):!0===e?(i.flipEnable(-1),o=[]):e.map(function(t){for(var e,n=0;n<o.length;n+=1)if(i.isDateExact(t,o[n])){e=!0;break}e||(v.isInteger(t)||v.isDate(t)||f.isArray(t)||f.isPlainObject(t)&&t.from&&t.to)&&o.push(t)}),o},n.prototype.activate=function(t,e){var r=this,s=r.item.disable,a=s.length;return"flip"==e?r.flipEnable():!0===e?(r.flipEnable(1),s=[]):!1===e?(r.flipEnable(-1),s=[]):e.map(function(t){var e,n,i,o;for(i=0;i<a;i+=1){if(n=s[i],r.isDateExact(n,t)){e=s[i]=null,o=!0;break}if(r.isDateOverlap(n,t)){f.isPlainObject(t)?(t.inverted=!0,e=t):f.isArray(t)?(e=t)[3]||e.push("inverted"):v.isDate(t)&&(e=[t.getFullYear(),t.getMonth(),t.getDate(),"inverted"]);break}}if(e)for(i=0;i<a;i+=1)if(r.isDateExact(s[i],t)){s[i]=null;break}if(o)for(i=0;i<a;i+=1)if(r.isDateOverlap(s[i],t)){s[i]=null;break}e&&s.push(e)}),s.filter(function(t){return null!=t})},n.prototype.nodes=function(l){var e,n,c=this,u=c.settings,t=c.item,s=t.now,a=t.select,h=t.highlight,d=t.view,p=t.disable,f=t.min,m=t.max,i=(e=(u.showWeekdaysFull?u.weekdaysFull:u.weekdaysShort).slice(0),n=u.weekdaysFull.slice(0),u.firstDay&&(e.push(e.shift()),n.push(n.shift())),v.node("thead",v.node("tr",v.group({min:0,max:6,i:1,node:"th",item:function(t){return[e[t],u.klass.weekdays,'scope=col title="'+n[t]+'"']}})))),o=function(t){return v.node("div"," ",u.klass["nav"+(t?"Next":"Prev")]+(t&&d.year>=m.year&&d.month>=m.month||!t&&d.year<=f.year&&d.month<=f.month?" "+u.klass.navDisabled:""),"data-nav="+(t||-1)+" "+v.ariaAttr({role:"button",controls:c.$node[0].id+"_table"})+' title="'+(t?u.labelMonthNext:u.labelMonthPrev)+'"')},r=function(){var e=u.showMonthsShort?u.monthsShort:u.monthsFull;return u.selectMonths?v.node("select",v.group({min:0,max:11,i:1,node:"option",item:function(t){return[e[t],0,"value="+t+(d.month==t?" selected":"")+(d.year==f.year&&t<f.month||d.year==m.year&&t>m.month?" disabled":"")]}}),u.klass.selectMonth,(l?"":"disabled")+" "+v.ariaAttr({controls:c.$node[0].id+"_table"})+' title="'+u.labelMonthSelect+'"'):v.node("div",e[d.month],u.klass.month)},g=function(){var e=d.year,t=!0===u.selectYears?5:~~(u.selectYears/2);if(t){var n=f.year,i=m.year,o=e-t,r=e+t;if(o<n&&(r+=n-o,o=n),i<r){var s=o-n,a=r-i;o-=a<s?a:s,r=i}return v.node("select",v.group({min:o,max:r,i:1,node:"option",item:function(t){return[t,0,"value="+t+(e==t?" selected":"")]}}),u.klass.selectYear,(l?"":"disabled")+" "+v.ariaAttr({controls:c.$node[0].id+"_table"})+' title="'+u.labelYearSelect+'"')}return v.node("div",e,u.klass.year)};return v.node("div",(u.selectYears?g()+r():r()+g())+o()+o(1),u.klass.header)+v.node("table",i+v.node("tbody",v.group({min:0,max:5,i:1,node:"tr",item:function(t){var e=u.firstDay&&0===c.create([d.year,d.month,1]).day?-7:0;return[v.group({min:7*t-d.day+e+1,max:function(){return this.min+7-1},i:1,node:"td",item:function(t){t=c.create([d.year,d.month,t+(u.firstDay?1:0)]);var e,n=a&&a.pick==t.pick,i=h&&h.pick==t.pick,o=p&&c.disabled(t)||t.pick<f.pick||t.pick>m.pick,r=v.trigger(c.formats.toString,c,[u.format,t]);return[v.node("div",t.date,(e=[u.klass.day],e.push(d.month==t.month?u.klass.infocus:u.klass.outfocus),s.pick==t.pick&&e.push(u.klass.now),n&&e.push(u.klass.selected),i&&e.push(u.klass.highlighted),o&&e.push(u.klass.disabled),e.join(" ")),"data-pick="+t.pick+" "+v.ariaAttr({role:"gridcell",label:r,selected:!(!n||c.$node.val()!==r)||null,activedescendant:!!i||null,disabled:!!o||null})),"",v.ariaAttr({role:"presentation"})]}})]}})),u.klass.table,'id="'+c.$node[0].id+'_table" '+v.ariaAttr({role:"grid",controls:c.$node[0].id,readonly:!0}))+v.node("div",v.node("button",u.today,u.klass.buttonToday,"type=button data-pick="+s.pick+(l&&!c.disabled(s)?"":" disabled")+" "+v.ariaAttr({controls:c.$node[0].id}))+v.node("button",u.clear,u.klass.buttonClear,"type=button data-clear=1"+(l?"":" disabled")+" "+v.ariaAttr({controls:c.$node[0].id}))+v.node("button",u.close,u.klass.buttonClose,"type=button data-close=true "+(l?"":" disabled")+" "+v.ariaAttr({controls:c.$node[0].id})),u.klass.footer)},n.defaults={labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],today:"Today",clear:"Clear",close:"Close",closeOnSelect:!0,closeOnClear:!0,format:"d mmmm, yyyy",klass:{table:(e=t.klasses().picker+"__")+"table",header:e+"header",navPrev:e+"nav--prev",navNext:e+"nav--next",navDisabled:e+"nav--disabled",month:e+"month",year:e+"year",selectMonth:e+"select--month",selectYear:e+"select--year",weekdays:e+"weekday",day:e+"day",disabled:e+"day--disabled",selected:e+"day--selected",highlighted:e+"day--highlighted",now:e+"day--today",infocus:e+"day--infocus",outfocus:e+"day--outfocus",footer:e+"footer",buttonClear:e+"button--clear",buttonToday:e+"button--today",buttonClose:e+"button--close"}},t.extend("pickadate",n)}),function(t){"function"==typeof define&&define.amd?define("picker.time",["picker","jquery"],t):"object"==typeof exports?module.exports=t(require("./picker.js"),require("jquery")):t(Picker,jQuery)}(function(t,l){var e,o=1440,p=t._;function n(o,r){var t,e=this,n=o.$node[0].value,i=o.$node.data("value"),s=i||n,a=i?r.formatSubmit:r.format;e.settings=r,e.$node=o.$node,e.queue={interval:"i",min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse create validate",view:"parse create validate",disable:"deactivate",enable:"activate"},e.item={},e.item.clear=null,e.item.interval=r.interval||30,e.item.disable=(r.disable||[]).slice(0),e.item.enable=-(!0===(t=e.item.disable)[0]?t.shift():-1),e.set("min",r.min).set("max",r.max).set("now"),s?e.set("select",s,{format:a}):e.set("select",null).set("highlight",e.item.now),e.key={40:1,38:-1,39:1,37:-1,go:function(t){e.set("highlight",e.item.highlight.pick+t*e.item.interval,{interval:t*e.item.interval}),this.render()}},o.on("render",function(){var t=o.$root.children(),e=t.find("."+r.klass.viewset),i=function(e){return["webkit","moz","ms","o",""].map(function(t){return(t?"-"+t+"-":"")+e})},n=function(e,n){i("transform").map(function(t){e.css(t,n)}),i("transition").map(function(t){e.css(t,n)})};e.length&&(n(t,"none"),t[0].scrollTop=~~e.position().top-2*e[0].clientHeight,n(t,""))},1).on("open",function(){o.$root.find("button").attr("disabled",!1)},1).on("close",function(){o.$root.find("button").attr("disabled",!0)},1)}n.prototype.set=function(e,n,i){var o=this,t=o.item;return null===n?("clear"==e&&(e="select"),t[e]=n):(t["enable"==e?"disable":"flip"==e?"enable":e]=o.queue[e].split(" ").map(function(t){return n=o[t](e,n,i)}).pop(),"select"==e?o.set("highlight",t.select,i):"highlight"==e?o.set("view",t.highlight,i):"interval"==e?o.set("min",t.min,i).set("max",t.max,i):e.match(/^(flip|min|max|disable|enable)$/)&&(t.select&&o.disabled(t.select)&&o.set("select",n,i),t.highlight&&o.disabled(t.highlight)&&o.set("highlight",n,i),"min"==e&&o.set("max",t.max,i))),o},n.prototype.get=function(t){return this.item[t]},n.prototype.create=function(t,e,n){var i=this;return e=void 0===e?t:e,p.isDate(e)&&(e=[e.getHours(),e.getMinutes()]),l.isPlainObject(e)&&p.isInteger(e.pick)?e=e.pick:l.isArray(e)?e=60*+e[0]+ +e[1]:p.isInteger(e)||(e=i.now(t,e,n)),"max"==t&&e<i.item.min.pick&&(e+=o),"min"!=t&&"max"!=t&&(e-i.item.min.pick)%i.item.interval!=0&&(e+=i.item.interval),{hour:~~(24+(e=i.normalize(t,e,n))/60)%24,mins:(60+e%60)%60,time:(o+e)%o,pick:e%o}},n.prototype.createRange=function(t,e){var n=this,i=function(t){return!0===t||l.isArray(t)||p.isDate(t)?n.create(t):t};return p.isInteger(t)||(t=i(t)),p.isInteger(e)||(e=i(e)),p.isInteger(t)&&l.isPlainObject(e)?t=[e.hour,e.mins+t*n.settings.interval]:p.isInteger(e)&&l.isPlainObject(t)&&(e=[t.hour,t.mins+e*n.settings.interval]),{from:i(t),to:i(e)}},n.prototype.withinRange=function(t,e){return t=this.createRange(t.from,t.to),e.pick>=t.from.pick&&e.pick<=t.to.pick},n.prototype.overlapRanges=function(t,e){var n=this;return t=n.createRange(t.from,t.to),e=n.createRange(e.from,e.to),n.withinRange(t,e.from)||n.withinRange(t,e.to)||n.withinRange(e,t.from)||n.withinRange(e,t.to)},n.prototype.now=function(t,e){var n,i=this.item.interval,o=new Date,r=60*o.getHours()+o.getMinutes();return r-=r%i,n=e<0&&i*e+r<=-i,r+="min"==t&&n?0:i,p.isInteger(e)&&(r+=i*(n&&"max"!=t?e+1:e)),r},n.prototype.normalize=function(t,e){var n=this.item.interval,i=this.item.min&&this.item.min.pick||0;return e-="min"==t?0:(e-i)%n},n.prototype.measure=function(t,e,n){return e||(e="min"==t?[0,0]:[23,59]),"string"==typeof e?e=this.parse(t,e):!0===e||p.isInteger(e)?e=this.now(t,e,n):l.isPlainObject(e)&&p.isInteger(e.pick)&&(e=this.normalize(t,e.pick,n)),e},n.prototype.validate=function(t,e,n){var i=this,o=n&&n.interval?n.interval:i.item.interval;return i.disabled(e)&&(e=i.shift(e,o)),e=i.scope(e),i.disabled(e)&&(e=i.shift(e,-1*o)),e},n.prototype.disabled=function(e){var n=this,t=n.item.disable.filter(function(t){return p.isInteger(t)?e.hour==t:l.isArray(t)||p.isDate(t)?e.pick==n.create(t).pick:l.isPlainObject(t)?n.withinRange(t,e):void 0});return t=t.length&&!t.filter(function(t){return l.isArray(t)&&"inverted"==t[2]||l.isPlainObject(t)&&t.inverted}).length,-1===n.item.enable?!t:t||e.pick<n.item.min.pick||e.pick>n.item.max.pick},n.prototype.shift=function(t,e){var n=this,i=n.item.min.pick,o=n.item.max.pick;for(e=e||n.item.interval;n.disabled(t)&&!((t=n.create(t.pick+=e)).pick<=i||t.pick>=o););return t},n.prototype.scope=function(t){var e=this.item.min.pick,n=this.item.max.pick;return this.create(t.pick>n?n:t.pick<e?e:t)},n.prototype.parse=function(t,o,e){var n,i,r,s,a,l=this,c={};if(!o||"string"!=typeof o)return o;for(s in e&&e.format||((e=e||{}).format=l.settings.format),l.formats.toArray(e.format).map(function(t){var e,n=l.formats[t],i=n?p.trigger(n,l,[o,c]):t.replace(/^!/,"").length;n&&(e=o.substr(0,i),c[t]=e.match(/^\d+$/)?+e:e),o=o.substr(i)}),c)a=c[s],p.isInteger(a)?s.match(/^(h|hh)$/i)?(n=a,"h"!=s&&"hh"!=s||(n%=12)):"i"==s&&(i=a):s.match(/^a$/i)&&a.match(/^p/i)&&("h"in c||"hh"in c)&&(r=!0);return 60*(r?n+12:n)+i},n.prototype.formats={h:function(t,e){return t?p.digits(t):e.hour%12||12},hh:function(t,e){return t?2:p.lead(e.hour%12||12)},H:function(t,e){return t?p.digits(t):""+e.hour%24},HH:function(t,e){return t?p.digits(t):p.lead(e.hour%24)},i:function(t,e){return t?2:p.lead(e.mins)},a:function(t,e){return t?4:e.time%o<720?"a.m.":"p.m."},A:function(t,e){return t?2:e.time%o<720?"AM":"PM"},toArray:function(t){return t.split(/(h{1,2}|H{1,2}|i|a|A|!.)/g)},toString:function(t,e){var n=this;return n.formats.toArray(t).map(function(t){return p.trigger(n.formats[t],n,[0,e])||t.replace(/^!/,"")}).join("")}},n.prototype.isTimeExact=function(t,e){return p.isInteger(t)&&p.isInteger(e)||"boolean"==typeof t&&"boolean"==typeof e?t===e:(p.isDate(t)||l.isArray(t))&&(p.isDate(e)||l.isArray(e))?this.create(t).pick===this.create(e).pick:!(!l.isPlainObject(t)||!l.isPlainObject(e))&&(this.isTimeExact(t.from,e.from)&&this.isTimeExact(t.to,e.to))},n.prototype.isTimeOverlap=function(t,e){return p.isInteger(t)&&(p.isDate(e)||l.isArray(e))?t===this.create(e).hour:p.isInteger(e)&&(p.isDate(t)||l.isArray(t))?e===this.create(t).hour:!(!l.isPlainObject(t)||!l.isPlainObject(e))&&this.overlapRanges(t,e)},n.prototype.flipEnable=function(t){var e=this.item;e.enable=t||(-1==e.enable?1:-1)},n.prototype.deactivate=function(t,e){var i=this,o=i.item.disable.slice(0);return"flip"==e?i.flipEnable():!1===e?(i.flipEnable(1),o=[]):!0===e?(i.flipEnable(-1),o=[]):e.map(function(t){for(var e,n=0;n<o.length;n+=1)if(i.isTimeExact(t,o[n])){e=!0;break}e||(p.isInteger(t)||p.isDate(t)||l.isArray(t)||l.isPlainObject(t)&&t.from&&t.to)&&o.push(t)}),o},n.prototype.activate=function(t,e){var r=this,s=r.item.disable,a=s.length;return"flip"==e?r.flipEnable():!0===e?(r.flipEnable(1),s=[]):!1===e?(r.flipEnable(-1),s=[]):e.map(function(t){var e,n,i,o;for(i=0;i<a;i+=1){if(n=s[i],r.isTimeExact(n,t)){e=s[i]=null,o=!0;break}if(r.isTimeOverlap(n,t)){l.isPlainObject(t)?(t.inverted=!0,e=t):l.isArray(t)?(e=t)[2]||e.push("inverted"):p.isDate(t)&&(e=[t.getFullYear(),t.getMonth(),t.getDate(),"inverted"]);break}}if(e)for(i=0;i<a;i+=1)if(r.isTimeExact(s[i],t)){s[i]=null;break}if(o)for(i=0;i<a;i+=1)if(r.isTimeOverlap(s[i],t)){s[i]=null;break}e&&s.push(e)}),s.filter(function(t){return null!=t})},n.prototype.i=function(t,e){return p.isInteger(e)&&0<e?e:this.item.interval},n.prototype.nodes=function(t){var a=this,l=a.settings,c=a.item.select,u=a.item.highlight,h=a.item.view,d=a.item.disable;return p.node("ul",p.group({min:a.item.min.pick,max:a.item.max.pick,i:a.item.interval,node:"li",item:function(t){var e,n=(t=a.create(t)).pick,i=c&&c.pick==n,o=u&&u.pick==n,r=d&&a.disabled(t),s=p.trigger(a.formats.toString,a,[l.format,t]);return[p.trigger(a.formats.toString,a,[p.trigger(l.formatLabel,a,[t])||l.format,t]),(e=[l.klass.listItem],i&&e.push(l.klass.selected),o&&e.push(l.klass.highlighted),h&&h.pick==n&&e.push(l.klass.viewset),r&&e.push(l.klass.disabled),e.join(" ")),"data-pick="+t.pick+" "+p.ariaAttr({role:"option",label:s,selected:!(!i||a.$node.val()!==s)||null,activedescendant:!!o||null,disabled:!!r||null})]}})+p.node("li",p.node("button",l.clear,l.klass.buttonClear,"type=button data-clear=1"+(t?"":" disabled")+" "+p.ariaAttr({controls:a.$node[0].id})),"",p.ariaAttr({role:"presentation"})),l.klass.list,p.ariaAttr({role:"listbox",controls:a.$node[0].id}))},n.defaults={clear:"Clear",format:"h:i A",interval:30,closeOnSelect:!0,closeOnClear:!0,klass:{picker:(e=t.klasses().picker)+" "+e+"--time",holder:e+"__holder",list:e+"__list",listItem:e+"__list-item",disabled:e+"__list-item--disabled",selected:e+"__list-item--selected",highlighted:e+"__list-item--highlighted",viewset:e+"__list-item--viewset",now:e+"__list-item--now",buttonClear:e+"__button--clear"}},t.extend("pickatime",n)}),function(t){define("select2",[],function(){return function(){var o;void 0===(o=jQuery).fn.each2&&o.extend(o.fn,{each2:function(t){for(var e=o([0]),n=-1,i=this.length;++n<i&&(e.context=e[0]=this[n])&&!1!==t.call(e[0],n,e););return this}}),function(k,w){"use strict";if(window.Select2===w){var t,e,n,_,r,o,x,i,c={x:0,y:0},a={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(t){switch(t=t.which?t.which:t){case a.LEFT:case a.RIGHT:case a.UP:case a.DOWN:return!0}return!1},isControl:function(t){switch(t.which){case a.SHIFT:case a.CTRL:case a.ALT:return!0}return!!t.metaKey},isFunctionKey:function(t){return 112<=(t=t.which?t.which:t)&&t<=123}},s={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};o=k(document),i=1,_=function(){return i++},e=$(t=$(Object,{bind:function(t){var e=this;return function(){t.apply(e,arguments)}},init:function(t){var r,e,n,i,o,s=".select2-results";this.opts=t=this.prepareOpts(t),this.id=t.id,t.element.data("select2")!==w&&null!==t.element.data("select2")&&t.element.data("select2").destroy(),this.container=this.createContainer(),this.liveRegion=k(".select2-hidden-accessible"),0==this.liveRegion.length&&(this.liveRegion=k("<span>",{role:"status","aria-live":"polite"}).addClass("select2-hidden-accessible").appendTo(document.body)),this.containerId="s2id_"+(t.element.attr("id")||"autogen"+_()),this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.container.attr("title",t.element.attr("title")),this.body=k(document.body),y(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",t.element.attr("style")),this.container.css(M(t.containerCss,this.opts.element)),this.container.addClass(M(t.containerCssClass,this.opts.element)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",v),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),y(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(M(t.dropdownCssClass,this.opts.element)),this.dropdown.data("select2",this),this.dropdown.on("click",v),this.results=r=this.container.find(s),this.search=e=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),this.container.on("click",v),this.results.on("mousemove",function(t){var e=c;e!==w&&e.x===t.pageX&&e.y===t.pageY||k(t.target).trigger("mousemove-filtered",t)}),this.dropdown.on("mousemove-filtered",s,this.bind(this.highlightUnderEvent)),this.dropdown.on("touchstart touchmove touchend",s,this.bind(function(t){this._touchEvent=!0,this.highlightUnderEvent(t)})),this.dropdown.on("touchmove",s,this.bind(this.touchMoved)),this.dropdown.on("touchstart touchend",s,this.bind(this.clearTouchMoved)),this.dropdown.on("click",this.bind(function(t){this._touchEvent&&(this._touchEvent=!1,this.selectHighlighted())})),n=80,i=this.results,o=g(n,function(t){i.trigger("scroll-debounced",t)}),i.on("scroll",function(t){0<=h(t.target,i.get())&&o(t)}),this.dropdown.on("scroll-debounced",s,this.bind(this.loadMoreIfNeeded)),k(this.container).on("change",".select2-input",function(t){t.stopPropagation()}),k(this.dropdown).on("change",".select2-input",function(t){t.stopPropagation()}),k.fn.mousewheel&&r.mousewheel(function(t,e,n,i){var o=r.scrollTop();0<i&&o-i<=0?(r.scrollTop(0),v(t)):i<0&&r.get(0).scrollHeight-r.scrollTop()+i<=r.height()&&(r.scrollTop(r.get(0).scrollHeight-r.height()),v(t))}),m(e),e.on("keyup-change input paste",this.bind(this.updateResults)),e.on("focus",function(){e.addClass("select2-focused")}),e.on("blur",function(){e.removeClass("select2-focused")}),this.dropdown.on("mouseup",s,this.bind(function(t){0<k(t.target).closest(".select2-result-selectable").length&&(this.highlightUnderEvent(t),this.selectHighlighted(t))})),this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(t){t.stopPropagation()}),this.lastSearchTerm=w,k.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==t.maximumInputLength&&this.search.attr("maxlength",t.maximumInputLength);var a=t.element.prop("disabled");a===w&&(a=!1),this.enable(!a);var l=t.element.prop("readonly");l===w&&(l=!1),this.readonly(l),x=x||function(){var t=k("<div class='select2-measure-scrollbar'></div>");t.appendTo(document.body);var e={width:t.width()-t[0].clientWidth,height:t.height()-t[0].clientHeight};return t.remove(),e}(),this.autofocus=t.element.prop("autofocus"),t.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.search.attr("placeholder",t.searchInputPlaceholder)},destroy:function(){var t=this.opts.element,e=t.data("select2"),n=this;this.close(),t.length&&t[0].detachEvent&&n._sync&&t.each(function(){n._sync&&this.detachEvent("onpropertychange",n._sync)}),this.propertyObserver&&(this.propertyObserver.disconnect(),this.propertyObserver=null),this._sync=null,e!==w&&(e.container.remove(),e.liveRegion.remove(),e.dropdown.remove(),t.removeData("select2").off(".select2"),t.is("input[type='hidden']")?t.css("display",""):(t.show().prop("autofocus",this.autofocus||!1),this.elementTabIndex?t.attr({tabindex:this.elementTabIndex}):t.removeAttr("tabindex"),t.show())),E.call(this,"container","liveRegion","dropdown","results","search")},optionToData:function(t){return t.is("option")?{id:t.prop("value"),text:t.text(),element:t.get(),css:t.attr("class"),disabled:t.prop("disabled"),locked:p(t.attr("locked"),"locked")||p(t.data("locked"),!0)}:t.is("optgroup")?{text:t.attr("label"),children:[],element:t.get(),css:t.attr("class")}:void 0},prepareOpts:function(y){var s,t,e,n,b=this;if("select"===(s=y.element).get(0).tagName.toLowerCase()&&(this.select=t=y.element),t&&k.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in y)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),y.debug=y.debug||k.fn.select2.defaults.debug,y.debug&&console&&console.warn&&(null!=y.id&&console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),null!=y.text&&console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),null!=y.sortResults&&console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. "),null!=y.selectOnBlur&&console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0."),null!=y.ajax&&null!=y.ajax.results&&console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0."),null!=y.formatNoResults&&console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0."),null!=y.formatSearching&&console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0."),null!=y.formatInputTooShort&&console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0."),null!=y.formatInputTooLong&&console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0."),null!=y.formatLoading&&console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0."),null!=y.formatSelectionTooBig&&console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0."),y.element.data("select2Tags")&&console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")),null!=y.element.data("tags")){var i=y.element.data("tags");k.isArray(i)||(i=[]),y.element.data("select2Tags",i)}if(null!=y.sorter&&(y.sortResults=y.sorter),null!=y.selectOnClose&&(y.selectOnBlur=y.selectOnClose),null!=y.ajax&&k.isFunction(y.ajax.processResults)&&(y.ajax.results=y.ajax.processResults),null!=y.language){var o=y.language;k.isFunction(o.noMatches)&&(y.formatNoMatches=o.noMatches),k.isFunction(o.searching)&&(y.formatSearching=o.searching),k.isFunction(o.inputTooShort)&&(y.formatInputTooShort=o.inputTooShort),k.isFunction(o.inputTooLong)&&(y.formatInputTooLong=o.inputTooLong),k.isFunction(o.loadingMore)&&(y.formatLoading=o.loadingMore),k.isFunction(o.maximumSelected)&&(y.formatSelectionTooBig=o.maximumSelected)}if("function"!=typeof(y=k.extend({},{populateResults:function(t,e,f){var m,g=this.opts.id,v=this.liveRegion;(m=function(t,e,n){var i,o,r,s,a,l,c,u,h,d,p=[];for(i=0,o=(t=y.sortResults(t,e,f)).length;i<o;i+=1)s=!(a=!0===(r=t[i]).disabled)&&g(r)!==w,l=r.children&&0<r.children.length,(c=k("<li></li>")).addClass("select2-results-dept-"+n),c.addClass("select2-result"),c.addClass(s?"select2-result-selectable":"select2-result-unselectable"),a&&c.addClass("select2-disabled"),l&&c.addClass("select2-result-with-children"),c.addClass(b.opts.formatResultCssClass(r)),c.attr("role","presentation"),(u=k(document.createElement("div"))).addClass("select2-result-label"),u.attr("id","select2-result-label-"+_()),u.attr("role","option"),(d=y.formatResult(r,u,f,b.opts.escapeMarkup))!==w&&(u.html(d),c.append(u)),l&&((h=k("<ul></ul>")).addClass("select2-result-sub"),m(r.children,h,n+1),c.append(h)),c.data("select2-data",r),p.push(c[0]);e.append(p),v.text(y.formatMatches(t.length))})(e,t,0)}},k.fn.select2.defaults,y)).id&&(e=y.id,y.id=function(t){return t[e]}),k.isArray(y.element.data("select2Tags"))){if("tags"in y)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+y.element.attr("id");y.tags=y.element.data("select2Tags")}if(t?(y.query=this.bind(function(i){var t,e,o,n={results:[],more:!1},r=i.term;o=function(t,e){var n;t.is("option")?i.matcher(r,t.text(),t)&&e.push(b.optionToData(t)):t.is("optgroup")&&(n=b.optionToData(t),t.children().each2(function(t,e){o(e,n.children)}),0<n.children.length&&e.push(n))},t=s.children(),this.getPlaceholder()!==w&&0<t.length&&(e=this.getPlaceholderOption())&&(t=t.not(e)),t.each2(function(t,e){o(e,n.results)}),i.callback(n)}),y.id=function(t){return t.id}):"query"in y||("ajax"in y?((n=y.element.data("ajax-url"))&&0<n.length&&(y.ajax.url=n),y.query=T.call(y.element,y.ajax)):"data"in y?y.query=C(y.data):"tags"in y&&(y.query=O(y.tags),y.createSearchChoice===w&&(y.createSearchChoice=function(t){return{id:k.trim(t),text:k.trim(t)}}),y.initSelection===w&&(y.initSelection=function(t,e){var n=[];k(d(t.val(),y.separator,y.transformVal)).each(function(){var t={id:this,text:this},e=y.tags;k.isFunction(e)&&(e=e()),k(e).each(function(){if(p(this.id,t.id))return t=this,!1}),n.push(t)}),e(n)}))),"function"!=typeof y.query)throw"query function not defined for Select2 "+y.element.attr("id");if("top"===y.createSearchChoicePosition)y.createSearchChoicePosition=function(t,e){t.unshift(e)};else if("bottom"===y.createSearchChoicePosition)y.createSearchChoicePosition=function(t,e){t.push(e)};else if("function"!=typeof y.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";return y},monitorSource:function(){var t,n=this.opts.element,e=this;n.on("change.select2",this.bind(function(t){!0!==this.opts.element.data("select2-change-triggered")&&this.initSelection()})),this._sync=this.bind(function(){var t=n.prop("disabled");t===w&&(t=!1),this.enable(!t);var e=n.prop("readonly");e===w&&(e=!1),this.readonly(e),this.container&&(y(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(M(this.opts.containerCssClass,this.opts.element))),this.dropdown&&(y(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(M(this.opts.dropdownCssClass,this.opts.element)))}),n.length&&n[0].attachEvent&&n.each(function(){this.attachEvent("onpropertychange",e._sync)}),(t=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver)!==w&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new t(function(t){k.each(t,e._sync)}),this.propertyObserver.observe(n.get(0),{attributes:!0,subtree:!1}))},triggerSelect:function(t){var e=k.Event("select2-selecting",{val:this.id(t),object:t,choice:t});return this.opts.element.trigger(e),!e.isDefaultPrevented()},triggerChange:function(t){t=t||{},t=k.extend({},t,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(t),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},isInterfaceEnabled:function(){return!0===this.enabledInterface},enableInterface:function(){var t=this._enabled&&!this._readonly,e=!t;return t!==this.enabledInterface&&(this.container.toggleClass("select2-container-disabled",e),this.close(),this.enabledInterface=t,!0)},enable:function(t){t===w&&(t=!0),this._enabled!==t&&(this._enabled=t,this.opts.element.prop("disabled",!t),this.enableInterface())},disable:function(){this.enable(!1)},readonly:function(t){t===w&&(t=!1),this._readonly!==t&&(this._readonly=t,this.opts.element.prop("readonly",t),this.enableInterface())},opened:function(){return!!this.container&&this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var t,e,n,i,o,r=this.dropdown,s=this.container,a=s.offset(),l=s.outerHeight(!1),c=s.outerWidth(!1),u=r.outerHeight(!1),h=k(window),d=h.width(),p=h.height(),f=h.scrollLeft()+d,m=h.scrollTop()+p,g=a.top+l,v=a.left,y=g+u<=m,b=a.top-u>=h.scrollTop(),w=r.outerWidth(!1);r.hasClass("select2-drop-above")?(e=!0,!b&&y&&(e=!(n=!0))):(e=!1,!y&&b&&(e=n=!0)),n&&(r.hide(),a=this.container.offset(),l=this.container.outerHeight(!1),c=this.container.outerWidth(!1),u=r.outerHeight(!1),f=h.scrollLeft()+d,m=h.scrollTop()+p,g=a.top+l,v=a.left,w=r.outerWidth(!1),r.show(),this.focusSearch()),this.opts.dropdownAutoWidth?(o=k(".select2-results",r)[0],r.addClass("select2-drop-auto-width"),r.css("width",""),c<(w=r.outerWidth(!1)+(o.scrollHeight===o.clientHeight?0:x.width))?c=w:w=c,u=r.outerHeight(!1)):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body.css("position")&&(g-=(t=this.body.offset()).top,v-=t.left),!(v+w<=f)&&a.left+f+s.outerWidth(!1)>w&&(v=a.left+this.container.outerWidth(!1)-w),i={left:v,width:c},e?(this.container.addClass("select2-drop-above"),r.addClass("select2-drop-above"),u=r.outerHeight(!1),i.top=a.top-u,i.bottom="auto"):(i.top=g,i.bottom="auto",this.container.removeClass("select2-drop-above"),r.removeClass("select2-drop-above")),i=k.extend(i,M(this.opts.dropdownCss,this.opts.element)),r.css(i)},shouldOpen:function(){var t;return!this.opened()&&(!1!==this._enabled&&!0!==this._readonly&&(t=k.Event("select2-opening"),this.opts.element.trigger(t),!t.isDefaultPrevented()))},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:function(){return!!this.shouldOpen()&&(this.opening(),o.on("mousemove.select2Event",function(t){c.x=t.pageX,c.y=t.pageY}),!0)},opening:function(){var i,t=this.containerEventName,e="scroll."+t,n="resize."+t,o="orientationchange."+t;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body.children().last()[0]&&this.dropdown.detach().appendTo(this.body),0===(i=k("#select2-drop-mask")).length&&((i=k(document.createElement("div"))).attr("id","select2-drop-mask").attr("class","select2-drop-mask"),i.hide(),i.appendTo(this.body),i.on("mousedown touchstart click",function(t){l(i);var e,n=k("#select2-drop");0<n.length&&((e=n.data("select2")).opts.selectOnBlur&&e.selectHighlighted({noFocus:!0}),e.close(),t.preventDefault(),t.stopPropagation())})),this.dropdown.prev()[0]!==i[0]&&this.dropdown.before(i),k("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),i.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var r=this;this.container.parents().add(window).each(function(){k(this).on(n+" "+e+" "+o,function(t){r.opened()&&r.positionDropdown()})})},close:function(){if(this.opened()){var t=this.containerEventName,e="scroll."+t,n="resize."+t,i="orientationchange."+t;this.container.parents().add(window).each(function(){k(this).off(e).off(n).off(i)}),this.clearDropdownAlignmentPreference(),k("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),this.results.empty(),o.off("mousemove.select2Event"),this.clearSearch(),this.search.removeClass("select2-active"),this.search.removeAttr("aria-activedescendant"),this.opts.element.trigger(k.Event("select2-close"))}},externalSearch:function(t){this.open(),this.search.val(t),this.updateResults(!1)},clearSearch:function(){},prefillNextSearchTerm:function(){if(""!==this.search.val())return!1;var t=this.opts.nextSearchTerm(this.data(),this.lastSearchTerm);return t!==w&&(this.search.val(t),this.search.select(),!0)},getMaximumSelectionSize:function(){return M(this.opts.maximumSelectionSize,this.opts.element)},ensureHighlightVisible:function(){var t,e,n,i,o,r,s,a,l=this.results;(e=this.highlight())<0||(0!=e?(t=this.findHighlightableChoices().find(".select2-result-label"),i=(a=((n=k(t[e])).offset()||{}).top||0)+n.outerHeight(!0),e===t.length-1&&0<(s=l.find("li.select2-more-results")).length&&(i=s.offset().top+s.outerHeight(!0)),(o=l.offset().top+l.outerHeight(!1))<i&&l.scrollTop(l.scrollTop()+(i-o)),(r=a-l.offset().top)<0&&"none"!=n.css("display")&&l.scrollTop(l.scrollTop()+r)):l.scrollTop(0))},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled)")},moveHighlight:function(t){for(var e=this.findHighlightableChoices(),n=this.highlight();-1<n&&n<e.length;){var i=k(e[n+=t]);if(i.hasClass("select2-result-selectable")&&!i.hasClass("select2-disabled")){this.highlight(n);break}}},highlight:function(t){var e,n,i=this.findHighlightableChoices();if(0===arguments.length)return h(i.filter(".select2-highlighted")[0],i.get());t>=i.length&&(t=i.length-1),t<0&&(t=0),this.removeHighlight(),(e=k(i[t])).addClass("select2-highlighted"),this.search.attr("aria-activedescendant",e.find(".select2-result-label").attr("id")),this.ensureHighlightVisible(),this.liveRegion.text(e.text()),(n=e.data("select2-data"))&&this.opts.element.trigger({type:"select2-highlight",val:this.id(n),choice:n})},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},touchMoved:function(){this._touchMoved=!0},clearTouchMoved:function(){this._touchMoved=!1},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(t){var e=k(t.target).closest(".select2-result-selectable");if(0<e.length&&!e.is(".select2-highlighted")){var n=this.findHighlightableChoices();this.highlight(n.index(e))}else 0==e.length&&this.removeHighlight()},loadMoreIfNeeded:function(){var e=this.results,n=e.find("li.select2-more-results"),i=this.resultsPage+1,o=this,r=this.search.val(),s=this.context;0!==n.length&&n.offset().top-e.offset().top-e.height()<=this.opts.loadMorePadding&&(n.addClass("select2-active"),this.opts.query({element:this.opts.element,term:r,page:i,context:s,matcher:this.opts.matcher,callback:this.bind(function(t){o.opened()&&(o.opts.populateResults.call(this,e,t.results,{term:r,page:i,context:s}),o.postprocessResults(t,!1,!1),!0===t.more?(n.detach().appendTo(e).html(o.opts.escapeMarkup(M(o.opts.formatLoadMore,o.opts.element,i+1))),window.setTimeout(function(){o.loadMoreIfNeeded()},10)):n.remove(),o.positionDropdown(),o.resultsPage=i,o.context=t.context,this.opts.element.trigger({type:"select2-loaded",items:t}))})}))},tokenize:function(){},updateResults:function(n){var t,e,i,o=this.search,r=this.results,s=this.opts,a=this,l=o.val(),c=k.data(this.container,"select2-last-term");if((!0===n||!c||!p(l,c))&&(k.data(this.container,"select2-last-term",l),!0===n||!1!==this.showSearchInput&&this.opened())){i=++this.queryCount;var u=this.getMaximumSelectionSize();if(!(1<=u&&(t=this.data(),k.isArray(t)&&t.length>=u&&D(s.formatSelectionTooBig,"formatSelectionTooBig"))))return o.val().length<s.minimumInputLength?(D(s.formatInputTooShort,"formatInputTooShort")?d("<li class='select2-no-results'>"+M(s.formatInputTooShort,s.element,o.val(),s.minimumInputLength)+"</li>"):d(""),void(n&&this.showSearch&&this.showSearch(!0))):void(s.maximumInputLength&&o.val().length>s.maximumInputLength?D(s.formatInputTooLong,"formatInputTooLong")?d("<li class='select2-no-results'>"+M(s.formatInputTooLong,s.element,o.val(),s.maximumInputLength)+"</li>"):d(""):(s.formatSearching&&0===this.findHighlightableChoices().length&&d("<li class='select2-searching'>"+M(s.formatSearching,s.element)+"</li>"),o.addClass("select2-active"),this.removeHighlight(),(e=this.tokenize())!=w&&null!=e&&o.val(e),this.resultsPage=1,s.query({element:s.element,term:o.val(),page:this.resultsPage,context:null,matcher:s.matcher,callback:this.bind(function(t){var e;if(i==this.queryCount)if(this.opened())if(t.hasError!==w&&D(s.formatAjaxError,"formatAjaxError"))d("<li class='select2-ajax-error'>"+M(s.formatAjaxError,s.element,t.jqXHR,t.textStatus,t.errorThrown)+"</li>");else{if(this.context=t.context===w?null:t.context,this.opts.createSearchChoice&&""!==o.val()&&(e=this.opts.createSearchChoice.call(a,o.val(),t.results))!==w&&null!==e&&a.id(e)!==w&&null!==a.id(e)&&0===k(t.results).filter(function(){return p(a.id(this),a.id(e))}).length&&this.opts.createSearchChoicePosition(t.results,e),0===t.results.length&&D(s.formatNoMatches,"formatNoMatches"))return d("<li class='select2-no-results'>"+M(s.formatNoMatches,s.element,o.val())+"</li>"),void(this.showSearch&&this.showSearch(o.val()));r.empty(),a.opts.populateResults.call(this,r,t.results,{term:o.val(),page:this.resultsPage,context:null}),!0===t.more&&D(s.formatLoadMore,"formatLoadMore")&&(r.append("<li class='select2-more-results'>"+s.escapeMarkup(M(s.formatLoadMore,s.element,this.resultsPage))+"</li>"),window.setTimeout(function(){a.loadMoreIfNeeded()},10)),this.postprocessResults(t,n),h(),this.opts.element.trigger({type:"select2-loaded",items:t})}else this.search.removeClass("select2-active")})})));d("<li class='select2-selection-limit'>"+M(s.formatSelectionTooBig,s.element,u)+"</li>")}function h(){o.removeClass("select2-active"),a.positionDropdown(),r.find(".select2-no-results,.select2-selection-limit,.select2-searching").length?a.liveRegion.text(r.text()):a.liveRegion.text(a.opts.formatMatches(r.find('.select2-result-selectable:not(".select2-selected")').length))}function d(t){r.html(t),h()}},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){var i;(i=this.search)[0]!==document.activeElement&&window.setTimeout(function(){var t,e=i[0],n=i.val().length;i.focus(),(0<e.offsetWidth||0<e.offsetHeight)&&e===document.activeElement&&(e.setSelectionRange?e.setSelectionRange(n,n):e.createTextRange&&((t=e.createTextRange()).collapse(!1),t.select()))},0)},selectHighlighted:function(t){if(this._touchMoved)this.clearTouchMoved();else{var e=this.highlight(),n=this.results.find(".select2-highlighted:not(.select2-selected)").closest(".select2-result").data("select2-data");n?(this.highlight(e),this.onSelect(n,t)):t&&t.noFocus&&this.close()}},getPlaceholder:function(){var t;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((t=this.getPlaceholderOption())!==w?t.text():w)},getPlaceholderOption:function(){if(this.select){var t=this.select.children("option").first();if(this.opts.placeholderOption!==w)return"first"===this.opts.placeholderOption&&t||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);if(""===k.trim(t.text())&&""===t.val())return t}},initContainerWidth:function(){var t=function(){var t,e,n,i,o;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"!==this.opts.width&&"resolve"!==this.opts.width)return k.isFunction(this.opts.width)?this.opts.width():this.opts.width;if("string"==typeof(t=this.opts.element.attr("style")))for(i=0,o=(e=t.split(";")).length;i<o;i+=1)if(null!==(n=e[i].replace(/\s/g,"").match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i))&&1<=n.length)return n[1];return"resolve"===this.opts.width?0<(t=this.opts.element.css("width")).indexOf("%")?t:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px":null}.call(this);null!==t&&this.container.css("width",t)}}),{createContainer:function(){return k(document.createElement("div")).attr({class:"select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>","</a>","<label for='' class='select2-offscreen'></label>","<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <label for='' class='select2-offscreen'></label>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'","       aria-autocomplete='list' />","   </div>","   <ul class='select2-results' role='listbox'>","   </ul>","</div>"].join(""))},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:function(){var t,e,n;0<=this.opts.minimumResultsForSearch&&this.showSearch(!0),this.parent.opening.apply(this,arguments),!1!==this.showSearchInput&&this.search.val(this.focusser.val()),this.opts.shouldFocusInput(this)&&(this.search.focus(),(t=this.search.get(0)).createTextRange?((e=t.createTextRange()).collapse(!1),e.select()):t.setSelectionRange&&(n=this.search.val().length,t.setSelectionRange(n,n))),this.prefillNextSearchTerm(),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(k.Event("select2-open"))},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},focus:function(){this.opened()?this.close():(this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus()},destroy:function(){k("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),E.call(this,"selection","focusser")},initContainer:function(){var e,t,n=this.container,i=this.dropdown,o=_();this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=e=n.find(".select2-choice"),this.focusser=n.find(".select2-focusser"),e.find(".select2-chosen").attr("id","select2-chosen-"+o),this.focusser.attr("aria-labelledby","select2-chosen-"+o),this.results.attr("id","select2-results-"+o),this.search.attr("aria-owns","select2-results-"+o),this.focusser.attr("id","s2id_autogen"+o),t=k("label[for='"+this.opts.element.attr("id")+"']"),this.opts.element.on("focus.select2",this.bind(function(){this.focus()})),this.focusser.prev().text(t.text()).attr("for",this.focusser.attr("id"));var r=this.opts.element.attr("title");this.opts.element.attr("title",r||t.text()),this.focusser.attr("tabindex",this.elementTabIndex),this.search.attr("id",this.focusser.attr("id")+"_search"),this.search.prev().text(k("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("keydown",this.bind(function(t){if(this.isInterfaceEnabled()&&229!=t.keyCode)if(t.which!==a.PAGE_UP&&t.which!==a.PAGE_DOWN)switch(t.which){case a.UP:case a.DOWN:return this.moveHighlight(t.which===a.UP?-1:1),void v(t);case a.ENTER:return this.selectHighlighted(),void v(t);case a.TAB:return void this.selectHighlighted({noFocus:!0});case a.ESC:return this.cancel(t),void v(t)}else v(t)})),this.search.on("blur",this.bind(function(t){document.activeElement===this.body.get(0)&&window.setTimeout(this.bind(function(){this.opened()&&this.results&&1<this.results.length&&this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(t){if(this.isInterfaceEnabled()&&t.which!==a.TAB&&!a.isControl(t)&&!a.isFunctionKey(t)&&t.which!==a.ESC){if(!1!==this.opts.openOnEnter||t.which!==a.ENTER){if(t.which==a.DOWN||t.which==a.UP||t.which==a.ENTER&&this.opts.openOnEnter){if(t.altKey||t.ctrlKey||t.shiftKey||t.metaKey)return;return this.open(),void v(t)}return t.which==a.DELETE||t.which==a.BACKSPACE?(this.opts.allowClear&&this.clear(),void v(t)):void 0}v(t)}})),m(this.focusser),this.focusser.on("keyup-change input",this.bind(function(t){if(0<=this.opts.minimumResultsForSearch){if(t.stopPropagation(),this.opened())return;this.open()}})),e.on("mousedown touchstart","abbr",this.bind(function(t){var e;this.isInterfaceEnabled()&&(this.clear(),(e=t).preventDefault(),e.stopImmediatePropagation(),this.close(),this.selection&&this.selection.focus())})),e.on("mousedown touchstart",this.bind(function(t){l(e),this.container.hasClass("select2-container-active")||this.opts.element.trigger(k.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),v(t)})),i.on("mousedown touchstart",this.bind(function(){this.opts.shouldFocusInput(this)&&this.search.focus()})),e.on("focus",this.bind(function(t){v(t)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(k.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(k.Event("select2-blur")))})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(k.Event("select2-focus")),this.container.addClass("select2-container-active")})),this.initContainerWidth(),this.opts.element.hide(),this.setPlaceholder()},clear:function(t){var e=this.selection.data("select2-data");if(e){var n=k.Event("select2-clearing");if(this.opts.element.trigger(n),n.isDefaultPrevented())return;var i=this.getPlaceholderOption();this.opts.element.val(i?i.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),!1!==t&&(this.opts.element.trigger({type:"select2-removed",val:this.id(e),choice:e}),this.triggerChange({removed:e}))}},initSelection:function(){if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();else{var e=this;this.opts.initSelection.call(null,this.opts.element,function(t){t!==w&&null!==t&&(e.updateSelection(t),e.close(),e.setPlaceholder(),e.lastSearchTerm=e.search.val())})}},isPlaceholderOptionSelected:function(){var t;return this.getPlaceholder()!==w&&((t=this.getPlaceholderOption())!==w&&t.prop("selected")||""===this.opts.element.val()||this.opts.element.val()===w||null===this.opts.element.val())},prepareOpts:function(){var s=this.parent.prepareOpts.apply(this,arguments),i=this;return"select"===s.element.get(0).tagName.toLowerCase()?s.initSelection=function(t,e){var n=t.find("option").filter(function(){return this.selected&&!this.disabled});e(i.optionToData(n))}:"data"in s&&(s.initSelection=s.initSelection||function(t,e){var o=t.val(),r=null;s.query({matcher:function(t,e,n){var i=p(o,s.id(n));return i&&(r=n),i},callback:k.isFunction(e)?function(){e(r)}:k.noop})}),s},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===w?w:this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var t=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&t!==w){if(this.select&&this.getPlaceholderOption()===w)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(t)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")}},postprocessResults:function(t,e,n){var i=0,o=this;if(this.findHighlightableChoices().each2(function(t,e){if(p(o.id(e.data("select2-data")),o.opts.element.val()))return i=t,!1}),!1!==n&&(!0===e&&0<=i?this.highlight(i):this.highlight(0)),!0===e){var r=this.opts.minimumResultsForSearch;0<=r&&this.showSearch(function n(t){var i=0;return k.each(t,function(t,e){e.children?i+=n(e.children):i++}),i}(t.results)>=r)}},showSearch:function(t){this.showSearchInput!==t&&(this.showSearchInput=t,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!t),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!t),k(this.dropdown,this.container).toggleClass("select2-with-searchbox",t))},onSelect:function(t,e){if(this.triggerSelect(t)){var n=this.opts.element.val(),i=this.data();this.opts.element.val(this.id(t)),this.updateSelection(t),this.opts.element.trigger({type:"select2-selected",val:this.id(t),choice:t}),this.lastSearchTerm=this.search.val(),this.close(),e&&e.noFocus||!this.opts.shouldFocusInput(this)||this.focusser.focus(),p(n,this.id(t))||this.triggerChange({added:t,removed:i})}},updateSelection:function(t){var e,n,i=this.selection.find(".select2-chosen");this.selection.data("select2-data",t),i.empty(),null!==t&&(e=this.opts.formatSelection(t,i,this.opts.escapeMarkup)),e!==w&&i.append(e),(n=this.opts.formatSelectionCssClass(t,i))!==w&&i.addClass(n),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==w&&this.container.addClass("select2-allowclear")},val:function(){var t,e=!1,n=null,i=this,o=this.data();if(0===arguments.length)return this.opts.element.val();if(t=arguments[0],1<arguments.length&&(e=arguments[1],this.opts.debug&&console&&console.warn&&console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')),this.select)this.opts.debug&&console&&console.warn&&console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'),this.select.val(t).find("option").filter(function(){return this.selected}).each2(function(t,e){return n=i.optionToData(e),!1}),this.updateSelection(n),this.setPlaceholder(),e&&this.triggerChange({added:n,removed:o});else{if(!t&&0!==t)return void this.clear(e);if(this.opts.initSelection===w)throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(t),this.opts.initSelection(this.opts.element,function(t){i.opts.element.val(t?i.id(t):""),i.updateSelection(t),i.setPlaceholder(),e&&i.triggerChange({added:t,removed:o})})}},clearSearch:function(){this.search.val(""),this.focusser.val("")},data:function(t){var e,n=!1;if(0===arguments.length)return(e=this.selection.data("select2-data"))==w&&(e=null),e;this.opts.debug&&console&&console.warn&&console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.'),1<arguments.length&&(n=arguments[1]),t?(e=this.data(),this.opts.element.val(t?this.id(t):""),this.updateSelection(t),n&&this.triggerChange({added:t,removed:e})):this.clear(n)}}),n=$(t,{createContainer:function(){return k(document.createElement("div")).attr({class:"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <label for='' class='select2-offscreen'></label>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""))},prepareOpts:function(){var l=this.parent.prepareOpts.apply(this,arguments),i=this;return"select"===l.element.get(0).tagName.toLowerCase()?l.initSelection=function(t,e){var n=[];t.find("option").filter(function(){return this.selected&&!this.disabled}).each2(function(t,e){n.push(i.optionToData(e))}),e(n)}:"data"in l&&(l.initSelection=l.initSelection||function(t,r){var s=d(t.val(),l.separator,l.transformVal),a=[];l.query({matcher:function(t,e,n){var i=k.grep(s,function(t){return p(t,l.id(n))}).length;return i&&a.push(n),i},callback:k.isFunction(r)?function(){for(var t=[],e=0;e<s.length;e++)for(var n=s[e],i=0;i<a.length;i++){var o=a[i];if(p(n,l.id(o))){t.push(o),a.splice(i,1);break}}r(t)}:k.noop})}),l},selectChoice:function(t){var e=this.container.find(".select2-search-choice-focus");e.length&&t&&t[0]==e[0]||(e.length&&this.opts.element.trigger("choice-deselected",e),e.removeClass("select2-search-choice-focus"),t&&t.length&&(this.close(),t.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",t)))},destroy:function(){k("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),E.call(this,"searchContainer","selection")},initContainer:function(){var s,t=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=s=this.container.find(t);var e=this;this.selection.on("click",".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)",function(t){e.search[0].focus(),e.selectChoice(k(this))}),this.search.attr("id","s2id_autogen"+_()),this.search.prev().text(k("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.opts.element.on("focus.select2",this.bind(function(){this.focus()})),this.search.on("input paste",this.bind(function(){this.search.attr("placeholder")&&0==this.search.val().length||this.isInterfaceEnabled()&&(this.opened()||this.open())})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(t){if(this.isInterfaceEnabled()){++this.keydowns;var e=s.find(".select2-search-choice-focus"),n=e.prev(".select2-search-choice:not(.select2-locked)"),i=e.next(".select2-search-choice:not(.select2-locked)"),o=function(t){var e=0,n=0;if("selectionStart"in(t=k(t)[0]))e=t.selectionStart,n=t.selectionEnd-e;else if("selection"in document){t.focus();var i=document.selection.createRange();n=document.selection.createRange().text.length,i.moveStart("character",-t.value.length),e=i.text.length-n}return{offset:e,length:n}}(this.search);if(e.length&&(t.which==a.LEFT||t.which==a.RIGHT||t.which==a.BACKSPACE||t.which==a.DELETE||t.which==a.ENTER)){var r=e;return t.which==a.LEFT&&n.length?r=n:t.which==a.RIGHT?r=i.length?i:null:t.which===a.BACKSPACE?this.unselect(e.first())&&(this.search.width(10),r=n.length?n:i):t.which==a.DELETE?this.unselect(e.first())&&(this.search.width(10),r=i.length?i:null):t.which==a.ENTER&&(r=null),this.selectChoice(r),v(t),void(r&&r.length||this.open())}if((t.which===a.BACKSPACE&&1==this.keydowns||t.which==a.LEFT&&!this.opened())&&0==o.offset&&!o.length)return this.selectChoice(s.find(".select2-search-choice:not(.select2-locked)").last()),void v(t);if(this.selectChoice(null),this.opened())switch(t.which){case a.UP:case a.DOWN:return this.moveHighlight(t.which===a.UP?-1:1),void v(t);case a.ENTER:return this.selectHighlighted(),void v(t);case a.TAB:return this.selectHighlighted({noFocus:!0}),void this.close();case a.ESC:return this.cancel(t),void v(t)}if(t.which!==a.TAB&&!a.isControl(t)&&!a.isFunctionKey(t)&&t.which!==a.BACKSPACE&&t.which!==a.ESC){if(t.which===a.ENTER){if(!1===this.opts.openOnEnter)return;if(t.altKey||t.ctrlKey||t.shiftKey||t.metaKey)return}this.open(),t.which!==a.PAGE_UP&&t.which!==a.PAGE_DOWN||v(t),t.which===a.ENTER&&v(t)}}})),this.search.on("keyup",this.bind(function(t){this.keydowns=0,this.resizeSearch()})),this.search.on("blur",this.bind(function(t){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),t.stopImmediatePropagation(),this.opts.element.trigger(k.Event("select2-blur"))})),this.container.on("click",t,this.bind(function(t){this.isInterfaceEnabled()&&(0<k(t.target).closest(".select2-search-choice").length||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(k.Event("select2-focus")),this.open(),this.focusSearch(),t.preventDefault()))})),this.container.on("focus",t,this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(k.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())})),this.initContainerWidth(),this.opts.element.hide(),this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var e=this;this.opts.initSelection.call(null,this.opts.element,function(t){t!==w&&null!==t&&(e.updateSelection(t),e.close(),e.clearSearch())})}},clearSearch:function(){var t=this.getPlaceholder(),e=this.getMaxSearchWidth();t!==w&&0===this.getVal().length&&!1===this.search.hasClass("select2-focused")?(this.search.val(t).addClass("select2-default"),this.search.width(0<e?e:this.container.css("width"))):this.search.val("").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),this.prefillNextSearchTerm(),this.updateResults(!0),this.opts.shouldFocusInput(this)&&this.search.focus(),this.opts.element.trigger(k.Event("select2-open"))},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(t){var e={},n=[],i=this;k(t).each(function(){i.id(this)in e||(e[i.id(this)]=0,n.push(this))}),this.selection.find(".select2-search-choice").remove(),this.addSelectedChoice(n),i.postprocessResults()},tokenize:function(){var t=this.search.val();null!=(t=this.opts.tokenizer.call(this,t,this.data(),this.bind(this.onSelect),this.opts))&&t!=w&&(this.search.val(t),0<t.length&&this.open())},onSelect:function(t,e){this.triggerSelect(t)&&""!==t.text&&(this.addSelectedChoice(t),this.opts.element.trigger({type:"selected",val:this.id(t),choice:t}),this.lastSearchTerm=this.search.val(),this.clearSearch(),this.updateResults(),!this.select&&this.opts.closeOnSelect||this.postprocessResults(t,!1,!0===this.opts.closeOnSelect),this.opts.closeOnSelect?(this.close(),this.search.width(10)):0<this.countSelectableResults()?(this.search.width(10),this.resizeSearch(),0<this.getMaximumSelectionSize()&&this.val().length>=this.getMaximumSelectionSize()?this.updateResults(!0):this.prefillNextSearchTerm()&&this.updateResults(),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:t}),e&&e.noFocus||this.focusSearch())},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(t){var e=this.getVal(),n=this;k(t).each(function(){e.push(n.createChoice(this))}),this.setVal(e)},createChoice:function(t){var e,n,i=!t.locked,o=k("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),r=k("<li class='select2-search-choice select2-locked'><div></div></li>"),s=i?o:r,a=this.id(t);return(e=this.opts.formatSelection(t,s.find("div"),this.opts.escapeMarkup))!=w&&s.find("div").replaceWith(k("<div></div>").html(e)),(n=this.opts.formatSelectionCssClass(t,s.find("div")))!=w&&s.addClass(n),i&&s.find(".select2-search-choice-close").on("mousedown",v).on("click dblclick",this.bind(function(t){this.isInterfaceEnabled()&&(this.unselect(k(t.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),v(t),this.close(),this.focusSearch())})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))})),s.data("select2-data",t),s.insertBefore(this.searchContainer),a},unselect:function(t){var e,n,i=this.getVal();if(0===(t=t.closest(".select2-search-choice")).length)throw"Invalid argument: "+t+". Must be .select2-search-choice";if(e=t.data("select2-data")){var o=k.Event("select2-removing");if(o.val=this.id(e),o.choice=e,this.opts.element.trigger(o),o.isDefaultPrevented())return!1;for(;0<=(n=h(this.id(e),i));)i.splice(n,1),this.setVal(i),this.select&&this.postprocessResults();return t.remove(),this.opts.element.trigger({type:"select2-removed",val:this.id(e),choice:e}),this.triggerChange({removed:e}),!0}},postprocessResults:function(t,e,n){var i=this.getVal(),o=this.results.find(".select2-result"),r=this.results.find(".select2-result-with-children"),s=this;o.each2(function(t,e){0<=h(s.id(e.data("select2-data")),i)&&(e.addClass("select2-selected"),e.find(".select2-result-selectable").addClass("select2-selected"))}),r.each2(function(t,e){e.is(".select2-result-selectable")||0!==e.find(".select2-result-selectable:not(.select2-selected)").length||e.addClass("select2-selected")}),-1==this.highlight()&&!1!==n&&!0===this.opts.closeOnSelect&&s.highlight(0),!this.opts.createSearchChoice&&0<!o.filter(".select2-result:not(.select2-selected)").length&&(!t||t&&!t.more&&0===this.results.find(".select2-no-results").length)&&D(s.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+M(s.opts.formatNoMatches,s.opts.element,s.search.val())+"</li>")},getMaxSearchWidth:function(){return this.selection.width()-f(this.search)},resizeSearch:function(){var t,e,n,i,o=f(this.search);t=function(t){if(!r){var e=t[0].currentStyle||window.getComputedStyle(t[0],null);(r=k(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:e.fontSize,fontFamily:e.fontFamily,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,textTransform:e.textTransform,whiteSpace:"nowrap"})).attr("class","select2-sizer"),k(document.body).append(r)}return r.text(t.val()),r.width()}(this.search)+10,e=this.search.offset().left,(i=(n=this.selection.width())-(e-this.selection.offset().left)-o)<t&&(i=n-o),i<40&&(i=n-o),i<=0&&(i=t),this.search.width(Math.floor(i))},getVal:function(){var t;return this.select?null===(t=this.select.val())?[]:t:d(t=this.opts.element.val(),this.opts.separator,this.opts.transformVal)},setVal:function(t){if(this.select)this.select.val(t);else{var e=[],n={};k(t).each(function(){this in n||(e.push(this),n[this]=0)}),this.opts.element.val(0===e.length?"":e.join(this.opts.separator))}},buildChangeDetails:function(t,e){e=e.slice(0),t=t.slice(0);for(var n=0;n<e.length;n++)for(var i=0;i<t.length;i++)if(p(this.opts.id(e[n]),this.opts.id(t[i]))){e.splice(n,1),n--,t.splice(i,1);break}return{added:e,removed:t}},val:function(t,n){var i,o=this;if(0===arguments.length)return this.getVal();if((i=this.data()).length||(i=[]),!t&&0!==t)return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),void(n&&this.triggerChange({added:this.data(),removed:i}));if(this.setVal(t),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),n&&this.triggerChange(this.buildChangeDetails(i,this.data()));else{if(this.opts.initSelection===w)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(t){var e=k.map(t,o.id);o.setVal(e),o.updateSelection(t),o.clearSearch(),n&&o.triggerChange(o.buildChangeDetails(i,o.data()))})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var t=[],e=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){t.push(e.opts.id(k(this).data("select2-data")))}),this.setVal(t),this.triggerChange()},data:function(t,e){var n,i,o=this;if(0===arguments.length)return this.selection.children(".select2-search-choice").map(function(){return k(this).data("select2-data")}).get();i=this.data(),t||(t=[]),n=k.map(t,function(t){return o.opts.id(t)}),this.setVal(n),this.updateSelection(t),this.clearSearch(),e&&this.triggerChange(this.buildChangeDetails(i,this.data()))}}),k.fn.select2=function(){var t,e,n,i,o,r=Array.prototype.slice.call(arguments,0),s=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],a=["opened","isFocused","container","dropdown"],l=["val","data"],c={search:"externalSearch"};return this.each(function(){if(0===r.length||"object"==typeof r[0])(t=0===r.length?{}:k.extend({},r[0])).element=k(this),"select"===t.element.get(0).tagName.toLowerCase()?o=t.element.prop("multiple"):(o=t.multiple||!1,"tags"in t&&(t.multiple=o=!0)),(e=o?new window.Select2.class.multi:new window.Select2.class.single).init(t);else{if("string"!=typeof r[0])throw"Invalid arguments to select2 plugin: "+r;if(h(r[0],s)<0)throw"Unknown method: "+r[0];if(i=w,(e=k(this).data("select2"))===w)return;if(n=r[0],i="container"===n?e.container:"dropdown"===n?e.dropdown:(c[n]&&(n=c[n]),e[n].apply(e,r.slice(1))),0<=h(r[0],a)||0<=h(r[0],l)&&1==r.length)return!1}}),i===w?this:i},k.fn.select2.defaults={debug:!1,width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(t,e,n,i){var o=[];return b(this.text(t),n.term,o,i),o.join("")},transformVal:function(t){return k.trim(t)},formatSelection:function(t,e,n){return t?n(this.text(t)):w},sortResults:function(t,e,n){return t},formatResultCssClass:function(t){return t.css},formatSelectionCssClass:function(t,e){return w},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(t){return t==w?null:t.id},text:function(t){return t&&this.data&&this.data.text?k.isFunction(this.data.text)?this.data.text(t):t[this.data.text]:t.text},matcher:function(t,e){return 0<=u(""+e).toUpperCase().indexOf(u(""+t).toUpperCase())},separator:",",tokenSeparators:[],tokenizer:function(t,e,n,i){var o,r,s,a,l,c=t,u=!1;if(!i.createSearchChoice||!i.tokenSeparators||i.tokenSeparators.length<1)return w;for(;;){for(r=-1,s=0,a=i.tokenSeparators.length;s<a&&(l=i.tokenSeparators[s],!(0<=(r=t.indexOf(l))));s++);if(r<0)break;if(o=t.substring(0,r),t=t.substring(r+l.length),0<o.length&&(o=i.createSearchChoice.call(this,o,e))!==w&&null!==o&&i.id(o)!==w&&null!==i.id(o)){for(u=!1,s=0,a=e.length;s<a;s++)if(p(i.id(o),i.id(e[s]))){u=!0;break}u||n(o)}}return c!==t?t:void 0},escapeMarkup:S,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(t){return t},adaptDropdownCssClass:function(t){return null},nextSearchTerm:function(t,e){return w},searchInputPlaceholder:"",createSearchChoicePosition:"top",shouldFocusInput:function(t){return!("ontouchstart"in window||0<navigator.msMaxTouchPoints)||!(t.opts.minimumResultsForSearch<0)}},k.fn.select2.locales=[],k.fn.select2.locales.en={formatMatches:function(t){return 1===t?"One result is available, press enter to select it.":t+" results are available, use up and down arrow keys to navigate."},formatNoMatches:function(){return"No matches found"},formatAjaxError:function(t,e,n){return"Loading failed"},formatInputTooShort:function(t,e){var n=e-t.length;return"Please enter "+n+" or more character"+(1==n?"":"s")},formatInputTooLong:function(t,e){var n=t.length-e;return"Please delete "+n+" character"+(1==n?"":"s")},formatSelectionTooBig:function(t){return"You can only select "+t+" item"+(1==t?"":"s")},formatLoadMore:function(t){return"Loading more results…"},formatSearching:function(){return"Searching…"}},k.extend(k.fn.select2.defaults,k.fn.select2.locales.en),k.fn.select2.ajaxDefaults={transport:k.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:T,local:C,tags:O},util:{debounce:g,markMatch:b,escapeMarkup:S,stripDiacritics:u},class:{abstract:t,single:e,multi:n}}}function l(t){var e=k(document.createTextNode(""));t.before(e),e.before(t),e.remove()}function u(t){return t.replace(/[^\u0000-\u007E]/g,function(t){return s[t]||t})}function h(t,e){for(var n=0,i=e.length;n<i;n+=1)if(p(t,e[n]))return n;return-1}function p(t,e){return t===e||t!==w&&e!==w&&(null!==t&&null!==e&&(t.constructor===String?t+""==e+"":e.constructor===String&&e+""==t+""))}function d(t,e,n){var i,o,r;if(null===t||t.length<1)return[];for(o=0,r=(i=t.split(e)).length;o<r;o+=1)i[o]=n(i[o]);return i}function f(t){return t.outerWidth(!1)-t.width()}function m(e){var n="keyup-change-value";e.on("keydown",function(){k.data(e,n)===w&&k.data(e,n,e.val())}),e.on("keyup",function(){var t=k.data(e,n);t!==w&&e.val()!==t&&(k.removeData(e,n),e.trigger("keyup-change"))})}function g(e,n,i){var o;return i=i||w,function(){var t=arguments;window.clearTimeout(o),o=window.setTimeout(function(){n.apply(i,t)},e)}}function v(t){t.preventDefault(),t.stopPropagation()}function y(t,e,n){var i,o,r=[];(i=k.trim(t.attr("class")))&&k((i=""+i).split(/\s+/)).each2(function(){0===this.indexOf("select2-")&&r.push(this)}),(i=k.trim(e.attr("class")))&&k((i=""+i).split(/\s+/)).each2(function(){0!==this.indexOf("select2-")&&(o=n(this))&&r.push(o)}),t.attr("class",r.join(" "))}function b(t,e,n,i){var o=u(t.toUpperCase()).indexOf(u(e.toUpperCase())),r=e.length;o<0?n.push(i(t)):(n.push(i(t.substring(0,o))),n.push("<span class='select2-match'>"),n.push(i(t.substring(o,o+r))),n.push("</span>"),n.push(i(t.substring(o+r,t.length))))}function S(t){var e={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(t).replace(/[&<>"'\/\\]/g,function(t){return e[t]})}function T(s){var t,a=null,e=s.quietMillis||100,l=s.url,c=this;return function(r){window.clearTimeout(t),t=window.setTimeout(function(){var t=s.data,e=l,n=s.transport||k.fn.select2.ajaxDefaults.transport,i={type:s.type||"GET",cache:s.cache||!1,jsonpCallback:s.jsonpCallback||w,dataType:s.dataType||"json"},o=k.extend({},k.fn.select2.ajaxDefaults.params,i);t=t?t.call(c,r.term,r.page,r.context):null,e="function"==typeof e?e.call(c,r.term,r.page,r.context):e,a&&"function"==typeof a.abort&&a.abort(),s.params&&(k.isFunction(s.params)?k.extend(o,s.params.call(c)):k.extend(o,s.params)),k.extend(o,{url:e,dataType:s.dataType,data:t,success:function(t){var e=s.results(t,r.page,r);r.callback(e)},error:function(t,e,n){var i={hasError:!0,jqXHR:t,textStatus:e,errorThrown:n};r.callback(i)}}),a=n.call(c,o)},e)}}function C(t){var e,n,i=t,a=function(t){return""+t.text};k.isArray(i)&&(i={results:n=i}),!1===k.isFunction(i)&&(n=i,i=function(){return n});var o=i();return o.text&&(a=o.text,k.isFunction(a)||(e=o.text,a=function(t){return t[e]})),function(o){var r,s=o.term,n={results:[]};""!==s?(r=function(t,e){var n,i;if((t=t[0]).children){for(i in n={},t)t.hasOwnProperty(i)&&(n[i]=t[i]);n.children=[],k(t.children).each2(function(t,e){r(e,n.children)}),(n.children.length||o.matcher(s,a(n),t))&&e.push(n)}else o.matcher(s,a(t),t)&&e.push(t)},k(i().results).each2(function(t,e){r(e,n.results)}),o.callback(n)):o.callback(i())}}function O(e){var r=k.isFunction(e);return function(n){var i=n.term,o={results:[]},t=r?e(n):e;k.isArray(t)&&(k(t).each(function(){var t=this.text!==w,e=t?this.text:this;(""===i||n.matcher(i,e))&&o.results.push(t?this:{id:this,text:this})}),n.callback(o))}}function D(t,e){if(k.isFunction(t))return!0;if(!t)return!1;if("string"==typeof t)return!0;throw new Error(e+" must be a string, function, or falsy value")}function M(t,e){if(k.isFunction(t)){var n=Array.prototype.slice.call(arguments,2);return t.apply(e,n)}return t}function E(){var n=this;k.each(arguments,function(t,e){n[e].remove(),n[e]=null})}function $(t,e){var n=function(){};return((n.prototype=new t).constructor=n).prototype.parent=t.prototype,n.prototype=k.extend(n.prototype,e),n}}(jQuery)}.apply(t,arguments)})}(this),function(t){define("jquery.event.drag",["jquery"],function(){return function(){!function(d){d.fn.drag=function(t,e,n){var i="string"==typeof t?t:"",o=d.isFunction(t)?t:d.isFunction(e)?e:null;return 0!==i.indexOf("drag")&&(i="drag"+i),n=(t==o?e:n)||{},o?this.bind(i,n,o):this.trigger(i)};var p=d.event,i=p.special,f=i.drag={defaults:{which:1,distance:0,not:":input",handle:null,relative:!1,drop:!0,click:!1},datakey:"dragdata",noBubble:!0,add:function(t){var n=d.data(this,f.datakey),i=t.data||{};n.related+=1,d.each(f.defaults,function(t,e){void 0!==i[t]&&(n[t]=i[t])})},remove:function(){d.data(this,f.datakey).related-=1},setup:function(){if(!d.data(this,f.datakey)){var t=d.extend({related:0},f.defaults);d.data(this,f.datakey,t),p.add(this,"touchstart mousedown",f.init,t),this.attachEvent&&this.attachEvent("ondragstart",f.dontstart)}},teardown:function(){(d.data(this,f.datakey)||{}).related||(d.removeData(this,f.datakey),p.remove(this,"touchstart mousedown",f.init),f.textselect(!0),this.detachEvent&&this.detachEvent("ondragstart",f.dontstart))},init:function(t){if(!f.touched){var e,n=t.data;if(!(0!=t.which&&0<n.which&&t.which!=n.which)&&!d(t.target).is(n.not)&&(!n.handle||d(t.target).closest(n.handle,t.currentTarget).length)&&(f.touched="touchstart"==t.type?this:null,n.propagates=1,n.mousedown=this,n.interactions=[f.interaction(this,n)],n.target=t.target,n.pageX=t.pageX,n.pageY=t.pageY,n.dragging=null,e=f.hijack(t,"draginit",n),n.propagates))return(e=f.flatten(e))&&e.length&&(n.interactions=[],d.each(e,function(){n.interactions.push(f.interaction(this,n))})),n.propagates=n.interactions.length,!1!==n.drop&&i.drop&&i.drop.handler(t,n),f.textselect(!1),f.touched?p.add(f.touched,"touchmove touchend",f.handler,n):p.add(document,"mousemove mouseup",f.handler,n),!(!f.touched||n.live)&&void 0}},interaction:function(t,e){var n=d(t)[e.relative?"position":"offset"]()||{top:0,left:0};return{drag:t,callback:new f.callback,droppable:[],offset:n}},handler:function(t){var e=t.data;switch(t.type){case!e.dragging&&"touchmove":t.preventDefault();case!e.dragging&&"mousemove":if(Math.pow(t.pageX-e.pageX,2)+Math.pow(t.pageY-e.pageY,2)<Math.pow(e.distance,2))break;t.target=e.target,f.hijack(t,"dragstart",e),e.propagates&&(e.dragging=!0);case"touchmove":t.preventDefault();case"mousemove":if(e.dragging){if(f.hijack(t,"drag",e),e.propagates){!1!==e.drop&&i.drop&&i.drop.handler(t,e);break}t.type="mouseup"}case"touchend":case"mouseup":default:f.touched?p.remove(f.touched,"touchmove touchend",f.handler):p.remove(document,"mousemove mouseup",f.handler),e.dragging&&(!1!==e.drop&&i.drop&&i.drop.handler(t,e),f.hijack(t,"dragend",e)),f.textselect(!0),!1===e.click&&e.dragging&&d.data(e.mousedown,"suppress.click",(new Date).getTime()+5),e.dragging=f.touched=!1}},hijack:function(n,i,o,t,e){if(o){var r,s,a,l={event:n.originalEvent,type:n.type},c=i.indexOf("drop")?"drag":"drop",u=t||0,h=isNaN(t)?o.interactions.length:t;n.type=i,n.originalEvent=null,o.results=[];do{if(s=o.interactions[u]){if("dragend"!==i&&s.cancelled)continue;a=f.properties(n,o,s),s.results=[],d(e||s[c]||o.droppable).each(function(t,e){if(a.target=e,!(n.isPropagationStopped=function(){return!1})===(r=e?p.dispatch.call(e,n,a):null)?("drag"==c&&(s.cancelled=!0,o.propagates-=1),"drop"==i&&(s[c][t]=null)):"dropinit"==i&&s.droppable.push(f.element(r)||e),"dragstart"==i&&(s.proxy=d(f.element(r)||s.drag)[0]),s.results.push(r),delete n.result,"dropinit"!==i)return r}),o.results[u]=f.flatten(s.results),"dropinit"==i&&(s.droppable=f.flatten(s.droppable)),"dragstart"!=i||s.cancelled||a.update()}}while(++u<h);return n.type=l.type,n.originalEvent=l.event,f.flatten(o.results)}},properties:function(t,e,n){var i=n.callback;return i.drag=n.drag,i.proxy=n.proxy||n.drag,i.startX=e.pageX,i.startY=e.pageY,i.deltaX=t.pageX-e.pageX,i.deltaY=t.pageY-e.pageY,i.originalX=n.offset.left,i.originalY=n.offset.top,i.offsetX=i.originalX+i.deltaX,i.offsetY=i.originalY+i.deltaY,i.drop=f.flatten((n.drop||[]).slice()),i.available=f.flatten((n.droppable||[]).slice()),i},element:function(t){if(t&&(t.jquery||1==t.nodeType))return t},flatten:function(t){return d.map(t,function(t){return t&&t.jquery?d.makeArray(t):t&&t.length?f.flatten(t):t})},textselect:function(t){d(document)[t?"unbind":"bind"]("selectstart",f.dontstart).css("MozUserSelect",t?"":"none"),document.unselectable=t?"off":"on"},dontstart:function(){return!1},callback:function(){}};f.callback.prototype={update:function(){i.drop&&this.available.length&&d.each(this.available,function(t){i.drop.locate(this,t)})}};var e=p.dispatch;p.dispatch=function(t){if(!(0<d.data(this,"suppress."+t.type)-(new Date).getTime()))return e.apply(this,arguments);d.removeData(this,"suppress."+t.type)};var o=p.fixHooks.touchstart=p.fixHooks.touchmove=p.fixHooks.touchend=p.fixHooks.touchcancel={props:"clientX clientY pageX pageY screenX screenY".split(" "),filter:function(n,t){if(t){var i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0]||null;i&&d.each(o.props,function(t,e){n[e]=i[e]})}return n}}}(jQuery)}.apply(t,arguments)})}(this),function(t){define("jquery.event.drop",["jquery"],function(){return function(){return function(p){p.fn.drop=function(t,e,n){var i="string"==typeof t?t:"",o=p.isFunction(t)?t:p.isFunction(e)?e:null;return 0!==i.indexOf("drop")&&(i="drop"+i),n=(t==o?e:n)||{},o?this.bind(i,n,o):this.trigger(i)},p.drop=function(t){t=t||{},m.multi=!0===t.multi?1/0:!1===t.multi?1:isNaN(t.multi)?m.multi:t.multi,m.delay=t.delay||m.delay,m.tolerance=p.isFunction(t.tolerance)?t.tolerance:null===t.tolerance?null:m.tolerance,m.mode=t.mode||m.mode||"intersect"};var f=p.event.special,m=p.event.special.drop={multi:1,delay:20,mode:"overlap",targets:[],datakey:"dropdata",noBubble:!0,add:function(t){p.data(this,m.datakey).related+=1},remove:function(){p.data(this,m.datakey).related-=1},setup:function(){if(!p.data(this,m.datakey)){p.data(this,m.datakey,{related:0,active:[],anyactive:0,winner:0,location:{}}),m.targets.push(this)}},teardown:function(){if(!(p.data(this,m.datakey)||{}).related){p.removeData(this,m.datakey);var e=this;m.targets=p.grep(m.targets,function(t){return t!==e})}},handler:function(t,e){var n;if(e)switch(t.type){case"mousedown":case"touchstart":n=p(m.targets),"string"==typeof e.drop&&(n=n.filter(e.drop)),n.each(function(){var t=p.data(this,m.datakey);t.active=[],t.anyactive=0,t.winner=0}),e.droppable=n,f.drag.hijack(t,"dropinit",e);break;case"mousemove":case"touchmove":m.event=t,m.timer||m.tolerate(e);break;case"mouseup":case"touchend":m.timer=clearTimeout(m.timer),e.propagates&&(f.drag.hijack(t,"drop",e),f.drag.hijack(t,"dropend",e))}},locate:function(t,e){var n=p.data(t,m.datakey),i=p(t),o=i.offset()||{},r=i.outerHeight(),s=i.outerWidth(),a={elem:t,width:s,height:r,top:o.top,left:o.left,right:o.left+s,bottom:o.top+r};return n&&(n.location=a,n.index=e,n.elem=t),a},contains:function(t,e){return(e[0]||e.left)>=t.left&&(e[0]||e.right)<=t.right&&(e[1]||e.top)>=t.top&&(e[1]||e.bottom)<=t.bottom},modes:{intersect:function(t,e,n){return this.contains(n,[t.pageX,t.pageY])?1e9:this.modes.overlap.apply(this,arguments)},overlap:function(t,e,n){return Math.max(0,Math.min(n.bottom,e.bottom)-Math.max(n.top,e.top))*Math.max(0,Math.min(n.right,e.right)-Math.max(n.left,e.left))},fit:function(t,e,n){return this.contains(n,e)?1:0},middle:function(t,e,n){return this.contains(n,[e.left+.5*e.width,e.top+.5*e.height])?1:0}},sort:function(t,e){return e.winner-t.winner||t.index-e.index},tolerate:function(t){var e,n,i,o,r,s,a,l,c=0,u=t.interactions.length,h=[m.event.pageX,m.event.pageY],d=m.tolerance||m.modes[m.mode];do{if(l=t.interactions[c]){if(!l)return;l.drop=[],r=[],s=l.droppable.length,d&&(i=m.locate(l.proxy)),e=0;do{if(a=l.droppable[e]){if(!(n=(o=p.data(a,m.datakey)).location))continue;o.winner=d?d.call(m,m.event,i,n):m.contains(n,h)?1:0,r.push(o)}}while(++e<s);for(r.sort(m.sort),e=0;(o=r[e])&&(o.winner&&l.drop.length<m.multi?(o.active[c]||o.anyactive||(!1!==f.drag.hijack(m.event,"dropstart",t,c,o.elem)[0]?(o.active[c]=1,o.anyactive+=1):o.winner=0),o.winner&&l.drop.push(o.elem)):o.active[c]&&1==o.anyactive&&(f.drag.hijack(m.event,"dropend",t,c,o.elem),o.active[c]=0,o.anyactive-=1)),++e<s;);}}while(++c<u);m.last&&h[0]==m.last.pageX&&h[1]==m.last.pageY?delete m.timer:m.timer=setTimeout(function(){m.tolerate(t)},m.delay),m.last=m.event}};f.dropinit=f.dropstart=f.dropend=m}(jQuery),$.drop}.apply(t,arguments)})}(this),define("mockup-patterns-select2",["jquery","pat-base","mockup-utils","select2","jquery.event.drag","jquery.event.drop"],function(a,t,l){"use strict";return t.extend({name:"select2",trigger:".pat-select2",parser:"mockup",defaults:{separator:","},initializeValues:function(){var r=this;r.options.initialValues&&(r.options.id=function(t){return t.id},r.options.initSelection=function(t,e){var n=[],i=t.val(),o=r.options.initialValues;"string"==typeof r.options.initialValues&&""!==r.options.initialValues&&("{"===r.options.initialValues[0]?o=JSON.parse(r.options.initialValues):(o={},a(r.options.initialValues.split(r.options.separator)).each(function(){var t=this.split(":"),e=a.trim(t[0]),n=a.trim(t[1]);o[e]=n}))),a(i.split(r.options.separator)).each(function(){var t=this;o[this]&&(t=o[this]),n.push({id:l.removeHTML(this),text:l.removeHTML(t)})}),e(n)})},initializeTags:function(){var t=this;t.options.tags&&"string"==typeof t.options.tags&&("["===t.options.tags.substr(0,1)?t.options.tags=JSON.parse(t.options.tags):t.options.tags=t.options.tags.split(t.options.separator)),t.options.tags&&!t.options.allowNewItems&&(t.options.data=a.map(t.options.tags,function(t,e){return{id:t,text:t}}),t.options.multiple=!0,delete t.options.tags)},initializeOrdering:function(){var n=this;if(n.options.orderable){var i=function(t,e){return t?t.text:void 0};n.options.formatSelection&&(i=n.options.formatSelection),n.options.formatSelection=function(t,e){return e.parents("li").drag("start",function(t,e){return a(this).addClass("select2-choice-dragging"),n.$el.select2("onSortStart"),a.drop({tolerance:function(t,e,n){var i=t.pageY>n.top+n.height/2;return a.data(n.elem,"drop+reorder",i?"insertAfter":"insertBefore"),this.contains(n,[t.pageX,t.pageY])}}),a(this).clone().addClass("dragging").css({opacity:.75,position:"absolute"}).appendTo(document.body)}).drag(function(t,e){a(e.proxy).css({top:e.offsetY,left:e.offsetX});var n=e.drop[0],i=a.data(n||{},"drop+reorder");!n||n==e.current&&i==e.method||(a(this)[i](n),e.current=n,e.method=i,e.update())}).drag("end",function(t,e){a(this).removeClass("select2-choice-dragging"),n.$el.select2("onSortEnd"),a(e.proxy).remove()}).drop("init",function(t,e){return this!=e.drag}),i(t,e)}}},initializeSelect2:function(){this.options.formatResultCssClass=function(t){if(t.id)return"select2-option-"+t.id.toLowerCase().replace(/[ \:\)\(\[\]\{\}\_\+\=\&\*\%\#]/g,"-")},this.$el.select2(this.options),this.$select2=this.$el.parent().find(".select2-container"),this.$el.parent().off("close.plone-modal.patterns"),this.options.orderable&&this.$select2.addClass("select2-orderable")},opened:function(){return 1===a(".select2-dropdown-open",this.$el.parent()).length},init:function(){var r=this;if(r.options.allowNewItems=!r.options.hasOwnProperty("allowNewItems")||JSON.parse(r.options.allowNewItems),r.options.ajax||r.options.vocabularyUrl){r.options.vocabularyUrl&&(r.options.multiple=void 0===r.options.multiple||r.options.multiple,r.options.ajax=r.options.ajax||{},r.options.ajax.url=r.options.vocabularyUrl,r.options.initSelection=function(t,e){var n=[],i=t.val();a(i.split(r.options.separator)).each(function(){var t=l.removeHTML(this);n.push({id:t,text:t})}),e(n)});var s="";r.options.ajax=a.extend({quietMillis:300,data:function(t,e){return{query:s=t,page_limit:10,page:e}},results:function(t,e){var n=t.results;if(r.options.vocabularyUrl){var i=[];a.each(t.results,function(t,e){i.push(e.id)}),n=[];var o=""===s||0<=a.inArray(s,i);r.options.allowNewItems&&!o&&(s=l.removeHTML(s),n.push({id:s,text:s})),a.each(t.results,function(t,e){n.push(e)})}return{results:n}}},r.options.ajax)}else if(r.options.multiple&&r.$el.is("select")){var t=r.$el.val()||[],e=a.map(r.$el.find("option"),function(t){return{text:a(t).html(),id:t.value}}),n=a('<input type="hidden" />');n.val(t.join(r.options.separator)),n.attr("class",r.$el.attr("class")),n.attr("name",r.$el.attr("name")),n.attr("id",r.$el.attr("id")),r.$orig=r.$el,r.$el.replaceWith(n),r.$el=n,r.options.data=e}r.initializeValues(),r.initializeTags(),r.initializeOrdering(),r.initializeSelect2()}})}),define("mockup-patterns-pickadate",["jquery","pat-base","mockup-utils","translate","picker","picker.date","picker.time","mockup-patterns-select2"],function(s,t,a,e){"use strict";return t.extend({name:"pickadate",trigger:".pat-pickadate",parser:"mockup",defaults:{separator:" ",date:{selectYears:!0,selectMonths:!0,formatSubmit:"yyyy-mm-dd",format:"yyyy-mm-dd",labelMonthNext:e("Next month"),labelMonthPrev:e("Previous month"),labelMonthSelect:e("Select a month"),labelYearSelect:e("Select a year"),clear:!1,close:!1,today:!1},time:{clear:!1},today:e("Today"),clear:e("Clear"),timezone:null,autoSetTimeOnDateChange:"+[0,0]",classWrapperName:"pattern-pickadate-wrapper",classSeparatorName:"pattern-pickadate-separator",classDateName:"pattern-pickadate-date",classDateWrapperName:"pattern-pickadate-date-wrapper",classTimeName:"pattern-pickadate-time",classTimeWrapperName:"pattern-pickadate-time-wrapper",classTimezoneName:"pattern-pickadate-timezone",classTimezoneWrapperName:"pattern-pickadate-timezone-wrapper",classClearName:"pattern-pickadate-clear",classNowName:"pattern-pickadate-now",placeholderDate:e("Enter date..."),placeholderTime:e("Enter time..."),placeholderTimezone:e("Enter timezone...")},parseTimeOffset:function(e){var t=void 0;0===e.indexOf("+")?(t="+",e=e.split("+")[1]):0===e.indexOf("-")&&(t="-",e=e.split("-")[1]);try{e=JSON.parse(e)}catch(t){e=void 0}if(!1===e)return!1;if(!0===e||!0!==Array.isArray(e))return[0,0];var n=parseInt(e[0],10)||0,i=parseInt(e[1],10)||0;if("+"===t||"-"===t){var o=new Date,r=o.getHours(),s=o.getMinutes();"+"===t?(23<(n=r+n)&&(n=23),59<(i=s+i)&&(i=59)):"-"===t&&((n=r-n)<0&&(n=0),(i=s-i)<0&&(i=0))}return[n,i]},init:function(){var n=this,t=n.$el.val().split(" "),e=t[0]||"",i=t[1]||"";if(!1===a.bool(n.options.date)&&(n.options.date=!1),!1===a.bool(n.options.time)&&(n.options.time=!1),n.options.autoSetTimeOnDateChange=n.parseTimeOffset(n.options.autoSetTimeOnDateChange),!1===n.options.date&&(i=t[0]),n.$el.hide(),n.$wrapper=s("<div/>").addClass(n.options.classWrapperName).insertAfter(n.$el),!1!==n.options.date&&(n.$date=s('<input type="text"/>').attr("placeholder",n.options.placeholderDate).attr("data-value",e).addClass(n.options.classDateName).appendTo(s("<div/>").addClass(n.options.classDateWrapperName).appendTo(n.$wrapper)).pickadate(s.extend(!0,{},n.options.date,{onSet:function(t){void 0!==t.select&&(n.$date.attr("data-value",t.select),!1!==n.options.autoSetTimeOnDateChange&&n.$time&&(n.$time.pickatime("picker").get("select")||n.$time.pickatime("picker").set("select",n.options.autoSetTimeOnDateChange)),!1!==n.options.time&&""===n.$time.attr("data-value")||n.updateValue.call(n)),t.hasOwnProperty("clear")&&(n.$el.val(""),n.$date.attr("data-value",""))}}))),!1!==n.options.time&&(n.options.time.formatSubmit="HH:i",n.$time=s('<input type="text"/>').attr("placeholder",n.options.placeholderTime).attr("data-value",i).addClass(n.options.classTimeName).appendTo(s("<div/>").addClass(n.options.classTimeWrapperName).appendTo(n.$wrapper)).pickatime(s.extend(!0,{},n.options.time,{onSet:function(t){void 0!==t.select&&(n.$time.attr("data-value",t.select),!1!==n.options.date&&""===n.$date.attr("data-value")||n.updateValue.call(n)),t.hasOwnProperty("clear")&&(n.$el.val(""),n.$time.attr("data-value",""))}})),"string"==typeof i&&"00"===i.substring(0,2)&&(n.$time.pickatime("picker").set("select",i.split(":")),n.$time.attr("data-value",i))),!1!==n.options.date&&!1!==n.options.time&&n.options.timezone&&(n.$separator=s("<span/>").addClass(n.options.classSeparatorName).html(" "===n.options.separator?"&nbsp;":n.options.separator).appendTo(n.$wrapper)),null!==n.options.timezone){n.$timezone=s('<input type="text"/>').addClass(n.options.classTimezoneName).appendTo(s("<div/>").addClass(n.options.classTimezoneWrapperName).appendTo(n.$wrapper)).patternSelect2(s.extend(!0,{placeholder:n.options.placeholderTimezone,width:"10em"},n.options.timezone,{multiple:!1})).on("change",function(t){void 0!==t.val&&(n.$timezone.attr("data-value",t.val),!1!==n.options.date&&""===n.$date.attr("data-value")||!1!==n.options.time&&""===n.$time.attr("data-value")||n.updateValue.call(n))});var o,r=n.options.timezone.default;if(r)n.options.timezone.data.some(function(t){return o=t.text===n.options.timezone.default}),o&&(n.$timezone.attr("data-value",r),n.$timezone.parent().find(".select2-chosen").text(r));1===n.options.timezone.data.length&&(n.$timezone.attr("data-value",n.options.timezone.data[0].text),n.$timezone.parent().find(".select2-chosen").text(n.options.timezone.data[0].text),n.$timezone.select2("enable",!1))}a.bool(n.options.today)&&(n.$now=s('<button type="button" class="btn btn-xs btn-info" title="'+n.options.today+'"><span class="glyphicon glyphicon-time"></span></button>').addClass(n.options.classNowName).on("click",function(t){t.preventDefault();var e=new Date;n.$date&&n.$date.data("pickadate").set("select",e),n.$time&&n.$time.data("pickatime").set("select",e),n.emit("updated")}).appendTo(n.$wrapper)),a.bool(n.options.clear)&&(n.$clear=s('<button type="button" class="btn btn-xs btn-danger" title="'+n.options.clear+'"><span class="glyphicon glyphicon-trash"></span></button>').addClass(n.options.classClearName).on("click",function(t){t.preventDefault(),n.$date&&n.$date.data("pickadate").clear(),n.$time&&n.$time.data("pickatime").clear(),n.emit("updated")}).appendTo(n.$wrapper))},updateValue:function(){var t=this,e="";if(!1!==t.options.date){var n=t.$date.data("pickadate").component,i=t.$date.data("pickadate").get("select"),o=n.formats.toString;i&&(e+=o.apply(n,[t.options.date.formatSubmit,i]))}if(!1!==t.options.date&&!1!==t.options.time&&(e+=" "),!1!==t.options.time){var r=t.$time.data("pickatime").component,s=t.$time.data("pickatime").get("select"),a=r.formats.toString;s&&(e+=a.apply(r,["HH:i",s]))}if(null!==t.options.timezone){var l=" "+t.$timezone.attr("data-value");l&&(e+=l)}t.$el.val(e),t.emit("updated")}})}),define("mockup-patterns-navigationmarker",["jquery","pat-base"],function(c,t){return t.extend({name:"navigationmarker",trigger:".pat-navigationmarker",parser:"mockup",init:function(){var l=document.querySelector('head link[rel="canonical"]').href||window.location.href;c("a",this.$el).each(function(){var t=this.href.replace("/view","");if(-1!==l.indexOf(t)){var e=c(this).parent(),n=e.find("> input");n.length&&(n[0].checked=!0);for(var i=l.split("/"),o=t.split("/"),r=0,s=o.length;r<s;r++){var a=!1;o[r]===i[r]&&(a=!0)}a&&e.addClass("inPath"),l===t&&e.addClass("current")}})}})}),define("mockup-patterns-preventdoublesubmit",["jquery","pat-base","translate"],function(n,t,e){"use strict";return t.extend({name:"preventdoublesubmit",trigger:".pat-preventdoublesubmit",parser:"mockup",defaults:{message:e("You already clicked the submit button. Do you really want to submit this form again?"),guardClassName:"submitting",optOutClassName:"allowMultiSubmit"},init:function(){var e=this;e.$el.is("form")&&n(":submit",e.$el).click(function(t){if(n(":submit").removeAttr("clicked"),n(this).attr("clicked","clicked"),n(this).hasClass(e.options.guardClassName)&&!n(this).hasClass(e.options.optOutClassName))return e._confirm.call(e);n(this).addClass(e.options.guardClassName)})},_confirm:function(t){return window.confirm(this.options.message)}})}),function(t){define("bootstrap-collapse",["jquery"],function(){return function(){return function(s){"use strict";var a=function(t,e){this.$element=s(t),this.options=s.extend({},a.DEFAULTS,e),this.$trigger=s('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function o(t){var e,n=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return s(n)}function l(i){return this.each(function(){var t=s(this),e=t.data("bs.collapse"),n=s.extend({},a.DEFAULTS,t.data(),"object"==typeof i&&i);!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||t.data("bs.collapse",e=new a(this,n)),"string"==typeof i&&e[i]()})}a.VERSION="3.3.6",a.TRANSITION_DURATION=350,a.DEFAULTS={toggle:!0},a.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},a.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var n=s.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var o=function(){this.$element.removeClass("collapsing").addClass("collapse in")[i](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!s.support.transition)return o.call(this);var r=s.camelCase(["scroll",i].join("-"));this.$element.one("bsTransitionEnd",s.proxy(o,this)).emulateTransitionEnd(a.TRANSITION_DURATION)[i](this.$element[0][r])}}}},a.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=s.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!s.support.transition)return n.call(this);this.$element[e](0).one("bsTransitionEnd",s.proxy(n,this)).emulateTransitionEnd(a.TRANSITION_DURATION)}}},a.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},a.prototype.getParent=function(){return s(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(s.proxy(function(t,e){var n=s(e);this.addAriaAndCollapsedClass(o(n),n)},this)).end()},a.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in");t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)};var t=s.fn.collapse;s.fn.collapse=l,s.fn.collapse.Constructor=a,s.fn.collapse.noConflict=function(){return s.fn.collapse=t,this},s(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=s(this);e.attr("data-target")||t.preventDefault();var n=o(e),i=n.data("bs.collapse")?"toggle":e.data();l.call(n,i)})}(jQuery),window.jQuery.fn.collapse.Constructor}.apply(t,arguments)})}(this),function(t){define("bootstrap-dropdown",["jquery"],function(){return function(){!function(s){"use strict";var a='[data-toggle="dropdown"]',i=function(t){s(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var n=e&&s(e);return n&&n.length?n:t.parent()}function r(i){i&&3===i.which||(s(".dropdown-backdrop").remove(),s(a).each(function(){var t=s(this),e=l(t),n={relatedTarget:this};e.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&s.contains(e[0],i.target)||(e.trigger(i=s.Event("hide.bs.dropdown",n)),i.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(s.Event("hidden.bs.dropdown",n)))))}))}i.VERSION="3.3.6",i.prototype.toggle=function(t){var e=s(this);if(!e.is(".disabled, :disabled")){var n=l(e),i=n.hasClass("open");if(r(),!i){"ontouchstart"in document.documentElement&&!n.closest(".navbar-nav").length&&s(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(s(this)).on("click",r);var o={relatedTarget:this};if(n.trigger(t=s.Event("show.bs.dropdown",o)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),n.toggleClass("open").trigger(s.Event("shown.bs.dropdown",o))}return!1}},i.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=s(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var n=l(e),i=n.hasClass("open");if(!i&&27!=t.which||i&&27==t.which)return 27==t.which&&n.find(a).trigger("focus"),e.trigger("click");var o=n.find(".dropdown-menu li:not(.disabled):visible a");if(o.length){var r=o.index(t.target);38==t.which&&0<r&&r--,40==t.which&&r<o.length-1&&r++,~r||(r=0),o.eq(r).trigger("focus")}}}};var t=s.fn.dropdown;s.fn.dropdown=function(n){return this.each(function(){var t=s(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new i(this)),"string"==typeof n&&e[n].call(t)})},s.fn.dropdown.Constructor=i,s.fn.dropdown.noConflict=function(){return s.fn.dropdown=t,this},s(document).on("click.bs.dropdown.data-api",r).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",a,i.prototype.toggle).on("keydown.bs.dropdown.data-api",a,i.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",i.prototype.keydown)}(jQuery)}.apply(t,arguments)})}(this),function(t){define("bootstrap-tooltip",["jquery"],function(){return function(){!function(m){"use strict";var g=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};g.VERSION="3.3.6",g.TRANSITION_DURATION=150,g.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},g.prototype.init=function(t,e,n){if(this.enabled=!0,this.type=t,this.$element=m(e),this.options=this.getOptions(n),this.$viewport=this.options.viewport&&m(m.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var i=this.options.trigger.split(" "),o=i.length;o--;){var r=i[o];if("click"==r)this.$element.on("click."+this.type,this.options.selector,m.proxy(this.toggle,this));else if("manual"!=r){var s="hover"==r?"mouseenter":"focusin",a="hover"==r?"mouseleave":"focusout";this.$element.on(s+"."+this.type,this.options.selector,m.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,m.proxy(this.leave,this))}}this.options.selector?this._options=m.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},g.prototype.getDefaults=function(){return g.DEFAULTS},g.prototype.getOptions=function(t){return(t=m.extend({},this.getDefaults(),this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},g.prototype.getDelegateOptions=function(){var n={},i=this.getDefaults();return this._options&&m.each(this._options,function(t,e){i[t]!=e&&(n[t]=e)}),n},g.prototype.enter=function(t){var e=t instanceof this.constructor?t:m(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),m(t.currentTarget).data("bs."+this.type,e)),t instanceof m.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},g.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},g.prototype.leave=function(t){var e=t instanceof this.constructor?t:m(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),m(t.currentTarget).data("bs."+this.type,e)),t instanceof m.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},g.prototype.show=function(){var t=m.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=m.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var n=this,i=this.tip(),o=this.getUID(this.type);this.setContent(),i.attr("id",o),this.$element.attr("aria-describedby",o),this.options.animation&&i.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,i[0],this.$element[0]):this.options.placement,s=/\s?auto?\s?/i,a=s.test(r);a&&(r=r.replace(s,"")||"top"),i.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?i.appendTo(this.options.container):i.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),c=i[0].offsetWidth,u=i[0].offsetHeight;if(a){var h=r,d=this.getPosition(this.$viewport);r="bottom"==r&&l.bottom+u>d.bottom?"top":"top"==r&&l.top-u<d.top?"bottom":"right"==r&&l.right+c>d.width?"left":"left"==r&&l.left-c<d.left?"right":r,i.removeClass(h).addClass(r)}var p=this.getCalculatedOffset(r,l,c,u);this.applyPlacement(p,r);var f=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};m.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",f).emulateTransitionEnd(g.TRANSITION_DURATION):f()}},g.prototype.applyPlacement=function(t,e){var n=this.tip(),i=n[0].offsetWidth,o=n[0].offsetHeight,r=parseInt(n.css("margin-top"),10),s=parseInt(n.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(s)&&(s=0),t.top+=r,t.left+=s,m.offset.setOffset(n[0],m.extend({using:function(t){n.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),n.addClass("in");var a=n[0].offsetWidth,l=n[0].offsetHeight;"top"==e&&l!=o&&(t.top=t.top+o-l);var c=this.getViewportAdjustedDelta(e,t,a,l);c.left?t.left+=c.left:t.top+=c.top;var u=/top|bottom/.test(e),h=u?2*c.left-i+a:2*c.top-o+l,d=u?"offsetWidth":"offsetHeight";n.offset(t),this.replaceArrow(h,n[0][d],u)},g.prototype.replaceArrow=function(t,e,n){this.arrow().css(n?"left":"top",50*(1-t/e)+"%").css(n?"top":"left","")},g.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},g.prototype.hide=function(t){var e=this,n=m(this.$tip),i=m.Event("hide.bs."+this.type);function o(){"in"!=e.hoverState&&n.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(i),!i.isDefaultPrevented())return n.removeClass("in"),m.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",o).emulateTransitionEnd(g.TRANSITION_DURATION):o(),this.hoverState=null,this},g.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},g.prototype.hasContent=function(){return this.getTitle()},g.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],n="BODY"==e.tagName,i=e.getBoundingClientRect();null==i.width&&(i=m.extend({},i,{width:i.right-i.left,height:i.bottom-i.top}));var o=n?{top:0,left:0}:t.offset(),r={scroll:n?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},s=n?{width:m(window).width(),height:m(window).height()}:null;return m.extend({},i,r,s,o)},g.prototype.getCalculatedOffset=function(t,e,n,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-n}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},g.prototype.getViewportAdjustedDelta=function(t,e,n,i){var o={top:0,left:0};if(!this.$viewport)return o;var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-r-s.scroll,l=e.top+r-s.scroll+i;a<s.top?o.top=s.top-a:l>s.top+s.height&&(o.top=s.top+s.height-l)}else{var c=e.left-r,u=e.left+r+n;c<s.left?o.left=s.left-c:u>s.right&&(o.left=s.left+s.width-u)}return o},g.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},g.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},g.prototype.tip=function(){if(!this.$tip&&(this.$tip=m(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},g.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},g.prototype.enable=function(){this.enabled=!0},g.prototype.disable=function(){this.enabled=!1},g.prototype.toggleEnabled=function(){this.enabled=!this.enabled},g.prototype.toggle=function(t){var e=this;t&&((e=m(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),m(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},g.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})};var t=m.fn.tooltip;m.fn.tooltip=function(i){return this.each(function(){var t=m(this),e=t.data("bs.tooltip"),n="object"==typeof i&&i;!e&&/destroy|hide/.test(i)||(e||t.data("bs.tooltip",e=new g(this,n)),"string"==typeof i&&e[i]())})},m.fn.tooltip.Constructor=g,m.fn.tooltip.noConflict=function(){return m.fn.tooltip=t,this}}(jQuery)}.apply(t,arguments)})}(this),require(["mockup-patterns-autotoc","mockup-patterns-contentloader","mockup-patterns-cookietrigger","mockup-patterns-formautofocus","mockup-patterns-formunloadalert","mockup-patterns-livesearch","mockup-patterns-markspeciallinks","mockup-patterns-modal","mockup-patterns-moment","mockup-patterns-pickadate","mockup-patterns-navigationmarker","mockup-patterns-preventdoublesubmit","mockup-patterns-select2","bootstrap-collapse","bootstrap-dropdown","bootstrap-tooltip"],function(){}),define("/Users/peter/workspace/buildout.coredev52py37/src/plone.staticresources/src/plone/staticresources/static/plone.js",function(){});
//# sourceMappingURL=plone-compiled.min.js.map
