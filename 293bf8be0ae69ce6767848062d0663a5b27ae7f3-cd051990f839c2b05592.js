(self.webpackChunkDeeksha=self.webpackChunkDeeksha||[]).push([[947],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},913:function(e,t,n){"use strict";n.d(t,{A:function(){return Qe}});var r,o,i,a,c=n(7294),u=n(5444),s=n(9),l=n(5697),f=n.n(l),p=n(4839),d=n.n(p),M=n(2993),g=n.n(M),y=n(6494),m=n.n(y),h="bodyAttributes",T="htmlAttributes",b="titleAttributes",I={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(I).map((function(e){return I[e]})),"charset"),N="cssText",j="href",x="http-equiv",v="innerHTML",A="itemprop",C="name",D="property",E="rel",O="src",z="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",S="defer",P="encodeSpecialCharacters",Q="onChangeClientState",Y="titleTemplate",B=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),U=[I.NOSCRIPT,I.SCRIPT,I.STYLE],R="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},H=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=ee(e,I.TITLE),n=ee(e,Y);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ee(e,k);return t||r||void 0},X=function(e){return ee(e,Q)||function(){}},q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return G({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[I.BASE]})).map((function(e){return e[I.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===E&&"canonical"===e[n].toLowerCase()||u===E&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==v&&c!==N&&c!==A||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ee=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},te=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){te(e)}),0)}),ne=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:n.g.requestAnimationFrame||te,oe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:n.g.cancelAnimationFrame||ne,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ce=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;le(I.BODY,r),le(I.HTML,o),se(f,p);var d={baseTag:fe(I.BASE,n),linkTags:fe(I.LINK,i),metaTags:fe(I.META,a),noscriptTags:fe(I.NOSCRIPT,c),scriptTags:fe(I.SCRIPT,s),styleTags:fe(I.STYLE,l)},M={},g={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(M[e]=n),r.length&&(g[e]=d[e].oldTags)})),t&&t(),u(e,M,g)},ue=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ue(e)),le(I.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(R),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(R):n.getAttribute(R)!==a.join(",")&&n.setAttribute(R,a.join(","))}},fe=function(e,t){var n=document.head||document.querySelector(I.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===v)n.innerHTML=t.innerHTML;else if(r===N)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(R,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},Me=function(e,t,n){switch(e){case I.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[R]=!0,o=de(n,r),[c.createElement(I.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=pe(n),i=ue(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+J(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case T:return{toComponent:function(){return de(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[R]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===v||n===N){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===v||e===N)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+J(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===U.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ge=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:Me(I.BASE,t,r),bodyAttributes:Me(h,n,r),htmlAttributes:Me(T,o,r),link:Me(I.LINK,i,r),meta:Me(I.META,a,r),noscript:Me(I.NOSCRIPT,c,r),script:Me(I.SCRIPT,u,r),style:Me(I.STYLE,s,r),title:Me(I.TITLE,{title:f,titleAttributes:p},r)}},ye=d()((function(e){return{baseTag:K([j,z],e),bodyAttributes:q(h,e),defer:ee(e,S),encode:ee(e,P),htmlAttributes:q(T,e),linkTags:$(I.LINK,[E,j],e),metaTags:$(I.META,[C,w,x,D,A],e),noscriptTags:$(I.NOSCRIPT,[v],e),onChangeClientState:X(e),scriptTags:$(I.SCRIPT,[O,v],e),styleTags:$(I.STYLE,[N],e),title:V(e),titleAttributes:q(b,e)}}),(function(e){ae&&oe(ae),e.defer?ae=re((function(){ce(e,(function(){ae=null}))})):(ce(e),ae=null)}),ge)((function(){return null})),me=(o=ye,a=i=function(e){function t(){return Z(this,t),H(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!g()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case I.SCRIPT:case I.NOSCRIPT:return{innerHTML:t};case I.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return G({},r,((t={})[n.type]=[].concat(r[n.type]||[],[G({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case I.TITLE:return G({},o,((t={})[r.type]=a,t.titleAttributes=G({},i),t));case I.BODY:return G({},o,{bodyAttributes:G({},i)});case I.HTML:return G({},o,{htmlAttributes:G({},i)})}return G({},o,((n={})[r.type]=G({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=G({},t);return Object.keys(e).forEach((function(t){var r;n=G({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(F(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case I.LINK:case I.META:case I.NOSCRIPT:case I.SCRIPT:case I.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=G({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},_(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:f().object,bodyAttributes:f().object,children:f().oneOfType([f().arrayOf(f().node),f().node]),defaultTitle:f().string,defer:f().bool,encodeSpecialCharacters:f().bool,htmlAttributes:f().object,link:f().arrayOf(f().object),meta:f().arrayOf(f().object),noscript:f().arrayOf(f().object),onChangeClientState:f().func,script:f().arrayOf(f().object),style:f().arrayOf(f().object),title:f().string,titleAttributes:f().object,titleTemplate:f().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=ge({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var he="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BcnRib2FyZCAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkFydGJvYXJkLTMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJDaGFyYWN0ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAyLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNCIgZmlsbD0iIzdGQTFFOCIgeD0iMCIgeT0iMCIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiByeD0iMTQiPjwvcmVjdD4KICAgICAgICAgICAgPHBhdGggZD0iTTE1LjgxNjc5MzksMjAuNzA5NDUzNCBMMTUuODE2NzkzOSwyMyBMMTMuMTgzMjA2MSwyMyBMMTMuMTgzMjA2MSwyMC43MDk0NTM0IEM5LjY3NDkxNzA1LDIwLjEyNzA1MTcgNywxNy4wNzgzNDQ2IDcsMTMuNDA0ODc3MSBDNyw5LjMxNTI3NjQyIDEwLjMxNTI3NjQsNiAxNC40MDQ4NzcxLDYgTDE0LjU5NTEyMjksNiBDMTguNjg0NzIzNiw2IDIyLDkuMzE1Mjc2NDIgMjIsMTMuNDA0ODc3MSBDMjIsMTcuMDc4MzQ0NiAxOS4zMjUwODMsMjAuMTI3MDUxNyAxNS44MTY3OTM5LDIwLjcwOTQ1MzQgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRTlCRjdCIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMSwyMyBMMTYsMjMgQzE4Ljc2MTQyMzcsMjMgMjEsMjUuMjM4NTc2MyAyMSwyOCBMNiwyOCBDNiwyNS4yMzg1NzYzIDguMjM4NTc2MjUsMjMgMTEsMjMgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjMkIyQjJEIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS42NzMxMzk0LDYgTDE0LjQ5MDE1MTgsNiBDMTguNjI2ODQ4NSw2IDIxLjk4MDMwMzcsOS4zNTM0NTUxOSAyMS45ODAzMDM4LDEzLjQ5MDE1MTggTDIxLjk4MDMwMzgsMTMuNjE0MjI5MyBDMjIuMDc4Mjg5OCwxNC44MDc1NTI5IDIxLjgxMDY3NTQsMTUuOTY4MzE3IDIxLjE3NzQ2MDYsMTcuMDk2NTIxNiBDMjAuNTQ0MjQ1OCwxOC4yMjQ3MjYyIDE5LjYxNzE3MDEsMTkuMTkyNTUyMyAxOC4zOTYyMzM1LDIwIEMxOS4zMTUyMjMzLDE4Ljg4MDQ2OTYgMTkuOTI1MzE3MywxNy43NzE0NzE5IDIwLjIyNjUxNTUsMTYuNjczMDA3IEMyMC41Mjc3MTM3LDE1LjU3NDU0MiAyMC41Mjc3MTM3LDE0LjQ1ODUzNyAyMC4yMjY1MTU1LDEzLjMyNDk5MTkgQzE5LjkwNjQ4MzIsMTMuMDg5OTYwOCAxOS41NzEwNTA2LDEyLjc0Mjk5MjUgMTkuMjIwMjE3NSwxMi4yODQwODcgQzE4Ljg2OTM4NDQsMTEuODI1MTgxNCAxOC41NjM3ODk4LDExLjMzMzY1NjggMTguMzAzNDMzNCwxMC44MDk1MTMyIEMxNy4zNTY1Mjg1LDEyLjMyMTUwMyAxNS44NjA5Mzc1LDEzLjUxMjQwOSAxMy44MTY2NjA0LDE0LjM4MjIzMTIgQzEyLjExNjkxMjEsMTUuMTA1NDU5NCAxMC4yNTk1NzgzLDE1LjUxMjM2MTUgOC4yNDQ2NTkwMywxNS42MDI5Mzc1IEM3Ljk3MjM4NDM5LDE1LjYxNTE3NjkgNy45NzIzODQzOSwxNi4yOTYzODIyIDguMjQ0NjU5MDMsMTcuNjQ2NTUzMyBMOC4yNDQ2NTkwMywxNy42NDY1NTMzIEM3LjQyNzc3NTcsMTYuMTM2ODU3OSA3LDE0LjQ0NzM4NjMgNywxMi43MzA4NTU0IEw3LDEwLjY3MzEzOTQgQzcsOC4wOTIyMzU3NiA5LjA5MjIzNTc2LDYgMTEuNjczMTM5NCw2IFoiIGlkPSJSZWN0YW5nbGUtOSIgZmlsbD0iIzI2MkIzMSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTgsNi44NzUwNzczMSBMMTgsMTAuNzM0ODA3IEMxNy4wNjMxMjAzLDEyLjA3MTg5NzIgMTUuNjMzODI5OCwxMy4xMzI1OTMzIDEzLjcxMjEyODQsMTMuOTE2ODk1MyBDMTIuMDM4NDQ1MywxNC41OTk5NzM4IDEwLjIwOTU5MzQsMTQuOTg0Mjg2OSA4LjIyNTU3MjQ1LDE1LjA2OTgzNDYgQzcuOTU3NDczMDcsMTUuMDgxMzk0NiA3Ljk1NzQ3MzA3LDE1LjcyNDc4MzEgOC4yMjU1NzI0NSwxNyBDNy40MjIxNDQ1NSwxNS41NzU3NjEgNywxMy45NjgyMzAzIDcsMTIuMzMzMDA3NyBMNywxMC40MTM3MTIxIEM3LDcuOTc2MDg2MjEgOC45NzYwODYyMSw2IDExLjQxMzcxMjEsNiBMMTQuNTU5MDU1MSw2IEMxNS44MDU1Mjk2LDYgMTYuOTc3OTM3MSw2LjMxNzExODMxIDE4LDYuODc1MDc3MzEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjMjEyNjJCIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",Te={title:"Deeksha Juneja",favicon:he,author:"Deeksha Juneja",description:"Deeksha Juneja is an MBA executive and entrepreneur",copyright:"Deeksha Juneja, Copyright (c) 2020",keywords:["Deeksha Juneja","deeksha","deeksha juneja","deeksha rotman","entrepreneur"]},be=n(8037),Ie=(0,s.default)(be.ZP).withConfig({displayName:"navLink__LinkNav",componentId:"sc-mqw3wi-0"})(["color:#e2f2f7;margin-right:35px;transition:color 0.2s ease-out;text-decoration:none;white-space:nowrap;> span{color:",";}@media (max-width:700px){margin-right:14px;:last-of-type{display:flex;}}"],(function(e){return e.bgcolor?"#eace6b":"#FFF"})),we=s.default.span.withConfig({displayName:"navLink__NavLabel",componentId:"sc-mqw3wi-1"})(["color:#fff;font-style:montserrat;font-weight:700;font-size:17px;line-height:21px;display:flex;align-items:center;text-align:center;"]),Ne=function(e){var t=e.info,n=e.bgcolor;return c.createElement(Ie,{to:t.path,activeClassName:"active",bgcolor:n},c.createElement(we,null,t.label))},je=[{label:"Home",path:"/"},{label:"About Me",path:"/about/"},{label:"Experience",path:"/experience/"},{label:"Skills",path:"/skills/"},{label:"Projects",path:"/projects/"}],xe={label:"Contact Me",path:"/contact/"},ve=s.default.nav.withConfig({displayName:"headerstyles__Nav",componentId:"sc-1k63fxo-0"})(["display:flex;align-items:center;justify-content:",";padding-top:4vh;padding-right:4vw;@media (max-width:700px){.nav{margin-left:-35px;}}"],(function(e){return e.isMobile?"flex-start":"flex-end"})),Ae=s.default.div.withConfig({displayName:"headerstyles__NavList",componentId:"sc-1k63fxo-1"})(["display:flex;align-items:center;@media (max-width:700px){.nav-list > a{width:8.5vw;}}@media (max-width:425px){align-items:flex-start;flex-direction:column;}"]),Ce=s.default.button.withConfig({displayName:"headerstyles__ContactButton",componentId:"sc-1k63fxo-2"})(["display:flex;width:135px !important;height:30px !important;align-items:center;justify-content:space-around;border-radius:30px;border:none;cursor:pointer;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));background-color:",";:active{border-style:outset;}font-style:montserrat;font-weight:700;font-size:15px;line-height:21px;display:flex;align-items:center;text-align:center;text-transform:uppercase;"],(function(e){return e.bgcolor?"#eace6b":"#FFF"})),De=n(6717),Ee=s.default.nav.withConfig({displayName:"mobileNav__StyledMenu",componentId:"sc-87a1ll-0"})(["display:flex;flex-direction:column;justify-content:center;background:#effffa;transform:",";height:100vh;text-align:left;padding:2rem;position:absolute;top:0;left:0;transition:transform 0.3s ease-in-out;@media (max-width:576px){width:100%;background-color:rgba(0,0,0,0.9);z-index:100;}a{font-size:2rem;text-transform:uppercase;padding:2rem 0;font-weight:bold;letter-spacing:0.5rem;color:#0d0c1d;text-decoration:none;transition:color 0.3s linear;@media (max-width:576px){font-size:1.5rem;text-align:center;}&:hover{color:#343078;}}"],(function(e){return e.open?"translateX(0)":"translateX(-100%)"})),Oe=function(e){var t=e.open,n=e.bgcolor,r=(0,De.h)();return c.createElement(Ee,{open:t},c.createElement(ve,{isMobile:r},c.createElement(Ae,null,je.map((function(e){return c.createElement(Ne,{info:e,key:e.label,bgcolor:n})})),c.createElement(Ne,{info:xe,key:xe.label,bgcolor:n}))))},ze=s.default.button.withConfig({displayName:"mobileNav__StyledBurger",componentId:"sc-87a1ll-1"})(["position:absolute;top:5%;right:2rem;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:1000;&:focus{outline:none;}div{width:2rem;height:0.25rem;border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;background-color:",";transform:",";:nth-child(1){width:30px;}:nth-child(2){width:40px;}}"],(function(e){return e.bgcolor?"#eace6b":"#FFF"}),(function(e){return e.open?"rotate(30deg)":"rotate(0)"})),Le=function(e){var t=e.open,n=e.setOpen,r=e.bgcolor;return c.createElement(ze,{open:t,onClick:function(){return n(!t)},bgcolor:r},c.createElement("div",null),c.createElement("div",null),c.createElement("div",null))},ke=function(e){var t=e.bgcolor,n=(0,c.useState)(!1),r=n[0],o=n[1],i=(0,c.useRef)();return c.createElement("div",{ref:i},c.createElement(Le,{open:r,setOpen:o,bgcolor:t}),c.createElement(Oe,{open:r,bgcolor:t}))},Se=function(e){var t=e.bgcolor,n=(0,De.h)();return n?c.createElement(ke,{bgcolor:t}):c.createElement(ve,{isMobile:n},c.createElement(Ae,null,je.map((function(e){return c.createElement(Ne,{info:e,key:e.label,bgcolor:t})})),c.createElement(Ce,{bgcolor:t,onClick:function(){(0,be.c4)(xe.path)}},xe.label)))},Pe=s.default.div.withConfig({displayName:"layout__Wrapper",componentId:"sc-5p095t-0"})(["width:100%;background-repeat:no-repeat;background-size:cover;min-height:100vh;height:100vh;background-position:bottom;padding:0;position:relative;@media (max-width:700px){overflow:hidden;padding:3%;}background-color:",";"],(function(e){var t=e.bgcolor;return t||"#eace6b"})),Qe=function(e){var t=e.children,n=e.bgcolor;return c.createElement(u.StaticQuery,{query:"3649515864",render:function(e){return c.createElement(c.Fragment,null,c.createElement(me,{title:e.site.siteMetadata.title,meta:[{name:"description",content:Te.description},{name:"keywords",content:Te.keywords.join(", ")},{name:"author",content:Te.author},{name:"copyright",content:Te.copyright}],link:[{rel:"shortcut icon",type:"image/png",href:""+he},{rel:"preconnect",href:"https://fonts.googleapis.com"},{name:"viewport",content:"initial-scale=1.0, width=device-width"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOriginIsolated:!0},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Sacramento&family=Warnes&display=swap"}]}),c.createElement(Pe,{className:"/"===location.pathname?"cutBackground":"",bgcolor:n},c.createElement(Se,{bgcolor:n}),t))}})}},6717:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(7294),o=function(){var e=(0,r.useState)(window.innerWidth),t=e[0],n=e[1];function o(){n(window.innerWidth)}return(0,r.useEffect)((function(){return window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}}),[]),t<=425}}}]);
//# sourceMappingURL=293bf8be0ae69ce6767848062d0663a5b27ae7f3-cd051990f839c2b05592.js.map