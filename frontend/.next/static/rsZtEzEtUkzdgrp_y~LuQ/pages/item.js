(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{26:function(e,t,n){e.exports=n(59)},298:function(e,t,n){__NEXT_REGISTER_PAGE("/item",function(){return e.exports=n(321),{page:e.exports.default}})},321:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(7),u=n.n(i),a=n(5),c=n(12),l=n(6),f=n(26),p=n.n(f);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    query SINGLE_ITEM_QUERY($id: ID!) {\n        item(where: { id: $id }) {\n            id\n            title\n            description\n            largeImage\n        }\n    }\n"]);return h=function(){return e},e}var g=l.b.div.withConfig({displayName:"SingleItem__SingleItemStyles",componentId:"mflgtv-0"})(["max-width:1200px;margin:2rem auto;box-shadow:",";display:grid;grid-auto-columns:1fr;grid-auto-flow:column;min-height:800px;img{width:100%;height:100%;object-fit:contain;}.details{margin:3rem;font-size:2rem;}"],function(e){return e.theme.bs}),E=u()(h()),v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(l,r["Component"]);var t,n,i,u=y(l);function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),u.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this;return o.a.createElement(a.Query,{query:E,variables:{id:this.props.id}},function(t){var n=t.error,r=t.loading,i=t.data;if(n)return o.a.createElement(c.a,{error:n});if(r)return o.a.createElement("p",null,"Loading...");if(!i.item)return o.a.createElement("p",null,"No Item Found for ",e.props.id);var u=i.item;return o.a.createElement(g,null,o.a.createElement(p.a,null,o.a.createElement("title",null,"Sick Fits | ",u.title)),o.a.createElement("img",{src:u.largeImage,alt:u.title}),o.a.createElement("div",{className:"details"},o.a.createElement("h2",null,"Viewing ",u.title),o.a.createElement("p",null,u.description)))})}}])&&m(t.prototype,n),i&&m(t,i),l}();t.default=function(e){return o.a.createElement("div",null,o.a.createElement(v,{id:e.query.id}))}}},[[298,1,0]]]);