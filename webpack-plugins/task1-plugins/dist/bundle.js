!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=42)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(22))},function(t,n,r){var e=r(2);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(9),o=e.all;t.exports=e.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},function(t,n,r){var e=r(7),o=Function.prototype,i=o.call,u=e&&o.bind.bind(i,i);t.exports=e?u:function(t){return function(){return i.apply(t,arguments)}}},function(t,n,r){var e=r(3),o=r(9),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:e(t)||t===i}:function(t){return"object"==typeof t?null!==t:e(t)}},function(t,n,r){var e=r(4),o=r(17),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},function(t,n,r){var e=r(2);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},function(t,n){t.exports=function(t){return null==t}},function(t,n){var r="object"==typeof document&&document.all,e=void 0===r&&void 0!==r;t.exports={all:r,IS_HTMLDDA:e}},function(t,n,r){var e=r(7),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},function(t,n,r){var e=r(12),o=r(3),i=r(27),u=r(13),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=e("Symbol");return o(n)&&i(n.prototype,c(t))}},function(t,n,r){var e=r(0),o=r(3),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},function(t,n,r){var e=r(14);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(28),o=r(2);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},function(t,n,r){var e=r(1),o=r(16).EXISTS,i=r(4),u=r(19).f,c=Function.prototype,f=i(c.toString),a=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,p=i(a.exec);e&&!o&&u(c,"name",{configurable:!0,get:function(){try{return p(a,f(this))[1]}catch(t){return""}}})},function(t,n,r){var e=r(1),o=r(6),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),f=c&&"something"===function(){}.name,a=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:f,CONFIGURABLE:a}},function(t,n,r){var e=r(18),o=Object;t.exports=function(t){return o(e(t))}},function(t,n,r){var e=r(8),o=TypeError;t.exports=function(t){if(e(t))throw o("Can't call method on "+t);return t}},function(t,n,r){var e=r(1),o=r(20),i=r(23),u=r(24),c=r(25),f=TypeError,a=Object.defineProperty,p=Object.getOwnPropertyDescriptor;n.f=e?i?function(t,n,r){if(u(t),n=c(n),u(r),"function"==typeof t&&"prototype"===n&&"value"in r&&"writable"in r&&!r.writable){var e=p(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:"configurable"in r?r.configurable:e.configurable,enumerable:"enumerable"in r?r.enumerable:e.enumerable,writable:!1})}return a(t,n,r)}:a:function(t,n,r){if(u(t),n=c(n),u(r),o)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw f("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(1),o=r(2),i=r(21);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(0),o=r(5),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(1),o=r(2);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},function(t,n,r){var e=r(5),o=String,i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not an object")}},function(t,n,r){var e=r(26),o=r(11);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},function(t,n,r){var e=r(10),o=r(5),i=r(11),u=r(30),c=r(33),f=r(34),a=TypeError,p=f("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var r,f=u(t,p);if(f){if(void 0===n&&(n="default"),r=e(f,t,n),!o(r)||i(r))return r;throw a("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},function(t,n,r){var e=r(4);t.exports=e({}.isPrototypeOf)},function(t,n,r){var e,o,i=r(0),u=r(29),c=i.process,f=i.Deno,a=c&&c.versions||f&&f.version,p=a&&a.v8;p&&(o=(e=p.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},function(t,n,r){var e=r(12);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(31),o=r(8);t.exports=function(t,n){var r=t[n];return o(r)?void 0:e(r)}},function(t,n,r){var e=r(3),o=r(32),i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not a function")}},function(t,n){var r=String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},function(t,n,r){var e=r(10),o=r(3),i=r(5),u=TypeError;t.exports=function(t,n){var r,c;if("string"===n&&o(r=t.toString)&&!i(c=e(r,t)))return c;if(o(r=t.valueOf)&&!i(c=e(r,t)))return c;if("string"!==n&&o(r=t.toString)&&!i(c=e(r,t)))return c;throw u("Can't convert object to primitive value")}},function(t,n,r){var e=r(0),o=r(35),i=r(6),u=r(39),c=r(14),f=r(13),a=o("wks"),p=e.Symbol,l=p&&p.for,s=f?p:p&&p.withoutSetter||u;t.exports=function(t){if(!i(a,t)||!c&&"string"!=typeof a[t]){var n="Symbol."+t;c&&i(p,t)?a[t]=p[t]:a[t]=f&&l?l(n):s(n)}return a[t]}},function(t,n,r){var e=r(36),o=r(37);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.26.1",mode:e?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},function(t,n){t.exports=!1},function(t,n,r){var e=r(0),o=r(38),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(0),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(4),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},function(t,n,r){},function(t,n,r){},function(t,n,r){"use strict";r.r(n);var e,o,i,u,c;r(15),r(40),r(41);o=(e={name:"Tom",location:"The World"}).name,i=e.location,u=document.querySelector(".profile__name"),c=document.querySelector(".profile__location"),u.textContent=o,c.textContent="from ".concat(i)}]);