this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["active-filters"]=function(e){function t(t){for(var r,a,i=t[0],l=t[1],s=t[2],b=0,p=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={5:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;return o.push([792,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m}));var r=n(8),c=n.n(r),o=n(25),a=n(14),i=n(0),l=n(36),s=n.n(l),u=n(58),b=n(142),p=n(71),f=function(e){var t=Object(p.a)();e=e||t;var n=Object(a.useSelect)((function(t){return t(o.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),r=Object(a.useDispatch)(o.QUERY_STATE_STORE_KEY).setValueForQueryContext;return[n,Object(i.useCallback)((function(t){r(e,t)}),[e,r])]},d=function(e,t,n){var r=Object(p.a)();n=n||r;var c=Object(a.useSelect)((function(r){return r(o.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t)}),[n,e]),l=Object(a.useDispatch)(o.QUERY_STATE_STORE_KEY).setQueryValue;return[c,Object(i.useCallback)((function(t){l(n,e,t)}),[n,e,l])]},m=function(e,t){var n=Object(p.a)(),r=f(t=t||n),o=c()(r,2),a=o[0],l=o[1],d=Object(u.a)(a),m=Object(u.a)(e),v=Object(b.a)(m),O=Object(i.useRef)(!1);return Object(i.useEffect)((function(){s()(v,m)||(l(Object.assign({},d,m)),O.current=!0)}),[d,m,v,l]),O.current?[a,l]:[e,l]}},11:function(e,t){e.exports=window.React},115:function(e,t){},12:function(e,t){e.exports=window.wp.blockEditor},120:function(e,t,n){"use strict";var r=n(16),c=n.n(r),o=n(17),a=n.n(o),i=n(18),l=n.n(i),s=n(19),u=n.n(s),b=n(9),p=n.n(b),f=n(0),d=n(7),m=n(1),v=n(3);function O(e){var t=e.level,n={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(t)?Object(f.createElement)(v.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(f.createElement)(v.Path,{d:n[t]})):null}var h=function(e){l()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p()(t);if(n){var c=p()(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return u()(this,e)});function o(){return c()(this,o),r.apply(this,arguments)}return a()(o,[{key:"createLevelControl",value:function(e,t,n){var r=e===t;return{icon:Object(f.createElement)(O,{level:e}),
/* translators: %s: heading level e.g: "2", "3", "4" */
title:Object(m.sprintf)(Object(m.__)("Heading %d"),e),isActive:r,onClick:function(){return n(e)}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.isCollapsed,r=void 0===n||n,c=t.minLevel,o=t.maxLevel,a=t.selectedLevel,i=t.onChange;return Object(f.createElement)(v.ToolbarGroup,{isCollapsed:r,icon:Object(f.createElement)(O,{level:a}),controls:Object(d.range)(c,o).map((function(t){return e.createLevelControl(t,a,i)}))})}}]),o}(f.Component);t.a=h},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(8),c=n.n(r),o=n(0),a=function(){var e=Object(o.useState)(),t=c()(e,2)[1];return Object(o.useCallback)((function(e){t((function(){throw e}))}),[])}},14:function(e,t){e.exports=window.wp.data},140:function(e,t,n){"use strict";var r=n(0),c=(n(2),n(12)),o=n(21),a=n(1);n(194),t.a=Object(o.withInstanceId)((function(e){var t=e.className,n=e.headingLevel,o=e.onChange,i=e.heading,l=e.instanceId,s="h".concat(n);return Object(r.createElement)(s,{className:t},Object(r.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-".concat(l)},Object(a.__)("Block title","woo-gutenberg-products-block")),Object(r.createElement)(c.PlainText,{id:"block-title-".concat(l),className:"wc-block-editor-components-title",value:i,onChange:o}))}))},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(11);function c(e,t){var n=Object(r.useRef)();return Object(r.useEffect)((function(){n.current===e||t&&!t(e,n.current)||(n.current=e)}),[e,t]),n.current}},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(25),c=n(14),o=n(0),a=n(58),i=n(126),l=function(e){var t=e.namespace,n=e.resourceName,l=e.resourceValues,s=void 0===l?[]:l,u=e.query,b=void 0===u?{}:u,p=e.shouldSelect,f=void 0===p||p;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");var d=Object(o.useRef)({results:[],isLoading:!0}),m=Object(a.a)(b),v=Object(a.a)(s),O=Object(i.a)(),h=Object(c.useSelect)((function(e){if(!f)return null;var c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,m,v],a=c.getCollectionError.apply(c,o);return a&&O(a),{results:c.getCollection.apply(c,o),isLoading:!c.hasFinishedResolution("getCollection",o)}}),[t,n,v,m,f]);return null!==h&&(d.current=h),d.current}},194:function(e,t){},195:function(e,t){},21:function(e,t){e.exports=window.wp.compose},24:function(e,t){e.exports=window.wp.blocks},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(4),c=Object(r.getSetting)("attributes",[]).reduce((function(e,t){var n,r=(n=t)&&n.attribute_name?{id:parseInt(n.attribute_id,10),name:n.attribute_name,taxonomy:"pa_"+n.attribute_name,label:n.attribute_label}:null;return r.id&&e.push(r),e}),[]),o=function(e){if(e)return c.find((function(t){return t.id===e}))},a=function(e){if(e)return c.find((function(t){return t.taxonomy===e}))}},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(7),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=e.filter((function(e){return e.attribute===n.taxonomy})),a=o.length?o[0]:null;if(a&&a.slug&&Array.isArray(a.slug)&&a.slug.includes(c)){var i=a.slug.filter((function(e){return e!==c})),l=e.filter((function(e){return e.attribute!==n.taxonomy}));i.length>0&&(a.slug=i.sort(),l.push(a)),t(Object(r.sortBy)(l,"attribute"))}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in",a=e.filter((function(e){return e.attribute!==n.taxonomy}));0===c.length?t(a):(a.push({attribute:n.taxonomy,operator:o,slug:c.map((function(e){return e.slug})).sort()}),t(Object(r.sortBy)(a,"attribute")))}},25:function(e,t){e.exports=window.wc.wcBlocksData},255:function(e,t,n){"use strict";var r=n(10),c=n.n(r),o=n(20),a=n.n(o),i=n(0),l=(n(2),n(6)),s=n.n(l),u=n(1),b=n(62),p=n(328),f=(n(195),["text","screenReaderText","element","className","radius","children"]),d=function(e){var t=e.text,n=e.screenReaderText,r=void 0===n?"":n,o=e.element,l=void 0===o?"li":o,u=e.className,b=void 0===u?"":u,p=e.radius,d=void 0===p?"small":p,m=e.children,v=void 0===m?null:m,O=a()(e,f),h=l,j=s()(b,"wc-block-components-chip","wc-block-components-chip--radius-"+d),g=Boolean(r&&r!==t);return Object(i.createElement)(h,c()({className:j},O),Object(i.createElement)("span",{"aria-hidden":g,className:"wc-block-components-chip__text"},t),g&&Object(i.createElement)("span",{className:"screen-reader-text"},r),v)},m=["ariaLabel","className","disabled","onRemove","removeOnAnyClick","text","screenReaderText"];t.a=function(e){var t=e.ariaLabel,n=void 0===t?"":t,r=e.className,o=void 0===r?"":r,l=e.disabled,f=void 0!==l&&l,v=e.onRemove,O=void 0===v?function(){}:v,h=e.removeOnAnyClick,j=void 0!==h&&h,g=e.text,w=e.screenReaderText,y=void 0===w?"":w,_=a()(e,m),E=j?"span":"button";if(!n){var k=y&&"string"==typeof y?y:g;n="string"!=typeof k?
/* translators: Remove chip. */
Object(u.__)("Remove","woo-gutenberg-products-block"):Object(u.sprintf)(
/* translators: %s text of the chip to remove. */
Object(u.__)('Remove "%s"',"woo-gutenberg-products-block"),k)}var x={"aria-label":n,disabled:f,onClick:O,onKeyDown:function(e){"Backspace"!==e.key&&"Delete"!==e.key||O()}},S=j?x:{},C=j?{"aria-hidden":!0}:x;return Object(i.createElement)(d,c()({},_,S,{className:s()(o,"is-removable"),element:j?"button":_.element,screenReaderText:y,text:g}),Object(i.createElement)(E,c()({className:"wc-block-components-chip__remove"},C),Object(i.createElement)(b.a,{className:"wc-block-components-chip__remove-icon",srcElement:p.a,size:16})))}},26:function(e,t){e.exports=window.wp.htmlEntities},28:function(e,t){e.exports=window.wp.primitives},3:function(e,t){e.exports=window.wp.components},328:function(e,t,n){"use strict";var r=n(10),c=n.n(r),o=n(20),a=n.n(o),i=n(0),l=n(28),s=["className","size"],u=Object(i.createElement)((function(e){var t=e.className,n=e.size,r=a()(e,s);return Object(i.createElement)(l.SVG,c()({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:t,width:n,height:n},r),Object(i.createElement)("path",{d:"M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"}))}),null);t.a=u},36:function(e,t){e.exports=window.wp.isShallowEqual},4:function(e,t){e.exports=window.wc.wcSettings},42:function(e,t,n){"use strict";var r=n(5),c=n.n(r),o=n(0),a=n(6),i=n.n(a);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t,n=e.label,r=e.screenReaderLabel,c=e.wrapperElement,a=e.wrapperProps,l=void 0===a?{}:a,u=null!=n,b=null!=r;return!u&&b?(t=c||"span",l=s(s({},l),{},{className:i()(l.className,"screen-reader-text")}),Object(o.createElement)(t,l,r)):(t=c||o.Fragment,u&&b&&n!==r?Object(o.createElement)(t,l,Object(o.createElement)("span",{"aria-hidden":"true"},n),Object(o.createElement)("span",{className:"screen-reader-text"},r)):Object(o.createElement)(t,l,n))}},52:function(e,t){e.exports=window.wc.priceFormat},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),c=n(36),o=n.n(c);function a(e){var t=Object(r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},62:function(e,t,n){"use strict";var r=n(5),c=n.n(r),o=n(20),a=n.n(o),i=n(0),l=["srcElement","size"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.srcElement,n=e.size,r=void 0===n?24:n,o=a()(e,l);return Object(i.isValidElement)(t)?Object(i.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:r,height:r},o)):null}},7:function(e,t){e.exports=window.lodash},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),c=Object(r.createContext)("page"),o=function(){return Object(r.useContext)(c)};c.Provider},792:function(e,t,n){e.exports=n(849)},793:function(e,t){},83:function(e,t,n){"use strict";var r=n(10),c=n.n(r),o=n(16),a=n.n(o),i=n(17),l=n.n(i),s=n(13),u=n.n(s),b=n(18),p=n.n(b),f=n(19),d=n.n(f),m=n(9),v=n.n(m),O=n(0),h=n(7),j=n(6),g=n.n(j),w=n(3),y=n(21);n(115);var _=function(e){p()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=v()(t);if(n){var c=v()(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return d()(this,e)});function o(){var e;return a()(this,o),(e=r.apply(this,arguments)).onClick=e.onClick.bind(u()(e)),e}return l()(o,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.label,o=n.checked,a=n.instanceId,i=n.className,l=n.help,s=n.options,u=n.value,b="inspector-toggle-button-control-".concat(a);return l&&(e=Object(h.isFunction)(l)?l(o):l),Object(O.createElement)(w.BaseControl,{id:b,help:e,className:g()("components-toggle-button-control",i)},Object(O.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},r),Object(O.createElement)(w.ButtonGroup,{"aria-labelledby":b+"__label"},s.map((function(e,n){var o={};return u===e.value?(o.isPrimary=!0,o["aria-pressed"]=!0):(o.isSecondary=!0,o["aria-pressed"]=!1),Object(O.createElement)(w.Button,c()({key:"".concat(e.label,"-").concat(e.value,"-").concat(n),value:e.value,onClick:t.onClick,"aria-label":r+": "+e.label},o),e.label)}))))}}]),o}(O.Component);t.a=Object(y.withInstanceId)(_)},849:function(e,t,n){"use strict";n.r(t);var r=n(10),c=n.n(r),o=n(0),a=n(1),i=n(24),l=n(62),s=n(28),u=Object(o.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(o.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(o.createElement)("path",{d:"M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})),b=n(6),p=n.n(b),f=n(12),d=n(3),m=n(120),v=n(140),O=n(83),h=n(8),j=n.n(h),g=n(103),w=n(4),y=(n(2),n(42)),_=(n(793),n(245)),E=n(52),k=n(255),x=function(e,t){return Number.isFinite(e)&&Number.isFinite(t)?Object(a.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(a.__)("Between %1$s and %2$s","woo-gutenberg-products-block"),Object(E.formatPrice)(e),Object(E.formatPrice)(t)):Number.isFinite(e)?Object(a.sprintf)(
/* translators: %s min price */
Object(a.__)("From %s","woo-gutenberg-products-block"),Object(E.formatPrice)(e)):Object(a.sprintf)(
/* translators: %s max price */
Object(a.__)("Up to %s","woo-gutenberg-products-block"),Object(E.formatPrice)(t))},S=function(e){var t=e.type,n=e.name,r=e.prefix,c=e.removeCallback,i=void 0===c?function(){}:c,l=e.showLabel,s=void 0===l||l,u=e.displayStyle,b=r?Object(o.createElement)(o.Fragment,null,r," ",n):n,p=Object(a.sprintf)(
/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
Object(a.__)("Remove %s filter","woo-gutenberg-products-block"),n);return Object(o.createElement)("li",{className:"wc-block-active-filters__list-item",key:t+":"+n},s&&Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-type"},t+": "),"chips"===u?Object(o.createElement)(k.a,{element:"span",text:b,onRemove:i,radius:"large",ariaLabel:p}):Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-name"},b,Object(o.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:i},Object(o.createElement)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(o.createElement)("ellipse",{cx:"8",cy:"8",rx:"8",ry:"8",transform:"rotate(-180 8 8)",fill:"currentColor",fillOpacity:"0.7"}),Object(o.createElement)("rect",{x:"10.636",y:"3.94983",width:"2",height:"9.9466",transform:"rotate(45 10.636 3.94983)",fill:"white"}),Object(o.createElement)("rect",{x:"12.0503",y:"11.0209",width:"2",height:"9.9466",transform:"rotate(135 12.0503 11.0209)",fill:"white"})),Object(o.createElement)(y.a,{screenReaderLabel:p}))))},C=n(148),N=n(26),P=n(246),R=function(e){var t=e.attributeObject,n=void 0===t?{}:t,r=e.slugs,c=void 0===r?[]:r,i=e.operator,l=void 0===i?"in":i,s=e.displayStyle,u=Object(C.a)({namespace:"/wc/store",resourceName:"products/attributes/terms",resourceValues:[n.id]}),b=u.results,p=u.isLoading,f=Object(g.b)("attributes",[]),d=j()(f,2),m=d[0],v=d[1];if(p)return null;var O=n.label;return Object(o.createElement)("li",null,Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-type"},O,":"),Object(o.createElement)("ul",null,c.map((function(e,t){var r=b.find((function(t){return t.slug===e}));if(!r)return null;var c="";return t>0&&"and"===l&&(c=Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},Object(a.__)("and","woo-gutenberg-products-block"))),S({type:O,name:Object(N.decodeEntities)(r.name||e),prefix:c,removeCallback:function(){Object(P.a)(m,v,n,e)},showLabel:!1,displayStyle:s})}))))},L=function(e){var t=e.attributes,n=e.isEditor,r=void 0!==n&&n,c=Object(g.b)("attributes",[]),i=j()(c,2),l=i[0],s=i[1],u=Object(g.b)("stock_status",[]),b=j()(u,2),f=b[0],d=b[1],m=Object(g.b)("min_price"),v=j()(m,2),O=v[0],h=v[1],E=Object(g.b)("max_price"),k=j()(E,2),C=k[0],N=k[1],P=Object(w.getSetting)("stockStatusOptions",[]),L=Object(o.useMemo)((function(){if(f.length>0)return f.map((function(e){return S({type:Object(a.__)("Stock Status","woo-gutenberg-products-block"),name:P[e],removeCallback:function(){var t=f.filter((function(t){return t!==e}));d(t)},displayStyle:t.displayStyle})}))}),[P,f,d,t.displayStyle]),V=Object(o.useMemo)((function(){return Number.isFinite(O)||Number.isFinite(C)?S({type:Object(a.__)("Price","woo-gutenberg-products-block"),name:x(O,C),removeCallback:function(){h(void 0),N(void 0)},displayStyle:t.displayStyle}):null}),[O,C,t.displayStyle,h,N]),H=Object(o.useMemo)((function(){return l.map((function(e){var n=Object(_.b)(e.attribute);return Object(o.createElement)(R,{attributeObject:n,displayStyle:t.displayStyle,slugs:e.slug,key:e.attribute,operator:e.operator})}))}),[l,t.displayStyle]);if(!(l.length>0||f.length>0||Number.isFinite(O)||Number.isFinite(C)||r))return null;var z="h".concat(t.headingLevel),T=p()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===t.displayStyle});return Object(o.createElement)(o.Fragment,null,!r&&t.heading&&Object(o.createElement)(z,{className:"wc-block-active-filters__title"},t.heading),Object(o.createElement)("div",{className:"wc-block-active-filters"},Object(o.createElement)("ul",{className:T},r?Object(o.createElement)(o.Fragment,null,S({type:Object(a.__)("Size","woo-gutenberg-products-block"),name:Object(a.__)("Small","woo-gutenberg-products-block"),displayStyle:t.displayStyle}),S({type:Object(a.__)("Color","woo-gutenberg-products-block"),name:Object(a.__)("Blue","woo-gutenberg-products-block"),displayStyle:t.displayStyle})):Object(o.createElement)(o.Fragment,null,V,L,H)),Object(o.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:function(){h(void 0),N(void 0),s([]),d([])}},Object(o.createElement)(y.a,{label:Object(a.__)("Clear All","woo-gutenberg-products-block"),screenReaderLabel:Object(a.__)("Clear All Filters","woo-gutenberg-products-block")}))))},V=Object(d.withSpokenMessages)((function(e){var t=e.attributes,n=e.setAttributes,r=t.className,c=t.displayStyle,i=t.heading,l=t.headingLevel;return Object(o.createElement)("div",{className:r},Object(o.createElement)(f.InspectorControls,{key:"inspector"},Object(o.createElement)(d.PanelBody,{title:Object(a.__)("Block Settings","woo-gutenberg-products-block")},Object(o.createElement)(O.a,{label:Object(a.__)("Display Style","woo-gutenberg-products-block"),value:c,options:[{label:Object(a.__)("List","woo-gutenberg-products-block"),value:"list"},{
/* translators: "Chips" is a tag-like display style for chosen attributes. */
label:Object(a.__)("Chips","woo-gutenberg-products-block"),value:"chips"}],onChange:function(e){return n({displayStyle:e})}}),Object(o.createElement)("p",null,Object(a.__)("Heading Level","woo-gutenberg-products-block")),Object(o.createElement)(m.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:l,onChange:function(e){return n({headingLevel:e})}}))),Object(o.createElement)(v.a,{className:"wc-block-active-filters__title",headingLevel:l,heading:i,onChange:function(e){return n({heading:e})}}),Object(o.createElement)(d.Disabled,null,Object(o.createElement)(L,{attributes:t,isEditor:!0})))}));Object(i.registerBlockType)("woocommerce/active-filters",{title:Object(a.__)("Active Product Filters","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(l.a,{srcElement:u}),foreground:"#7f54b3"},category:"woocommerce",keywords:[Object(a.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(a.__)("Show the currently active product filters. Works in combination with the All Products and filters blocks.","woo-gutenberg-products-block"),supports:{html:!1,multiple:!1},example:{attributes:{}},attributes:{displayStyle:{type:"string",default:"list"},heading:{type:"string",default:Object(a.__)("Active filters","woo-gutenberg-products-block")},headingLevel:{type:"number",default:3}},edit:V,save:function(e){var t=e.attributes,n=t.className,r={"data-display-style":t.displayStyle,"data-heading":t.heading,"data-heading-level":t.headingLevel};return Object(o.createElement)("div",c()({className:p()("is-loading",n)},r),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-active-product-filters__placeholder"}))}})}});