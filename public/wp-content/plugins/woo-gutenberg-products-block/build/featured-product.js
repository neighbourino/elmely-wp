this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["featured-product"]=function(e){function t(t){for(var n,i,a=t[0],u=t[1],s=t[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(l&&l(t);p.length;)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={23:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=u;return c.push([754,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},101:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(62)),i=r(136),a=r(6),u=r.n(a),s=r(3),l=r(48);r(137),t.a=function(e){var t=e.className,r=e.error,a=e.isLoading,d=e.onRetry;return Object(n.createElement)(s.Placeholder,{icon:Object(n.createElement)(c.a,{srcElement:i.a}),label:Object(o.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:u()("wc-block-api-error",t)},Object(n.createElement)(l.a,{error:r}),d&&Object(n.createElement)(n.Fragment,null,a?Object(n.createElement)(s.Spinner,null):Object(n.createElement)(s.Button,{isSecondary:!0,onClick:d},Object(o.__)("Retry","woo-gutenberg-products-block"))))}},11:function(e,t){e.exports=window.React},113:function(e,t){},114:function(e,t){e.exports=window.wp.coreData},119:function(e,t,r){"use strict";var n=r(10),o=r.n(n),c=r(20),i=r.n(c),a=r(0),u=r(46),s=r(3),l=r(6),d=r.n(l),p=["className","item","isSelected","isLoading","onSelect","disabled"];t.a=function(e){var t=e.className,r=e.item,n=e.isSelected,c=e.isLoading,l=e.onSelect,f=e.disabled,b=i()(e,p);return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(u.c,o()({},b,{key:r.id,className:t,isSelected:n,item:r,onSelect:l,isSingle:!0,disabled:f})),n&&c&&Object(a.createElement)("div",{key:"loading",className:d()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},Object(a.createElement)(s.Spinner,null)))}},12:function(e,t){e.exports=window.wp.blockEditor},135:function(e,t,r){"use strict";var n=r(33),o=r.n(n),c=r(5),i=r.n(c),a=r(10),u=r.n(a),s=r(0),l=r(1),d=r(7),p=(r(2),r(46)),f=r(21),b=r(16),g=r.n(b),m=r(17),h=r.n(m),w=r(18),O=r.n(w),v=r(19),j=r.n(v),y=r(9),_=r.n(y);var k=Object(f.createHigherOrderComponent)((function(e){var t=function(t){O()(c,t);var r,n,o=(r=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_()(r);if(n){var o=_()(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return j()(this,e)});function c(){return g()(this,c),o.apply(this,arguments)}return h()(c,[{key:"render",value:function(){var t=this.props.selected,r=null==t;return Object(s.createElement)(e,u()({},this.props,{selected:r?[]:[t]}))}}]),c}(s.Component);return t.defaultProps={selected:null},t}),"withTransformSingleSelectToMultipleSelect"),P=r(273),S=r(29),E=r.n(S),x=r(13),C=r.n(x),R=r(22),A=r.n(R),I=r(36),D=r.n(I),T=r(38),B=r(40);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=Object(f.createHigherOrderComponent)((function(e){var t=function(t){O()(c,t);var r,n,o=(r=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_()(r);if(n){var o=_()(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return j()(this,e)});function c(){var e;g()(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=o.call.apply(o,[this].concat(r)),i()(C()(e),"state",{error:null,loading:!1,variations:{}}),i()(C()(e),"loadVariations",(function(){var t=e.props.products,r=e.state,n=r.loading,o=r.variations;if(!n){var c=e.getExpandedProduct();if(c&&!o[c]){var a=t.find((function(e){return e.id===c}));a.variations&&0!==a.variations.length?(e.setState({loading:!0}),Object(T.g)(c).then((function(t){var r=t.map((function(e){return M(M({},e),{},{parent:c})}));e.setState({variations:M(M({},e.state.variations),{},i()({},c,r)),loading:!1,error:null})})).catch(function(){var t=E()(A.a.mark((function t(r){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(B.a)(r);case 2:n=t.sent,e.setState({variations:M(M({},e.state.variations),{},i()({},c,null)),loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(_x){return t.apply(this,arguments)}}())):e.setState({variations:M(M({},e.state.variations),{},i()({},c,null)),loading:!1,error:null})}}})),e}return h()(c,[{key:"componentDidMount",value:function(){var e=this.props,t=e.selected,r=e.showVariations;t&&r&&this.loadVariations()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.isLoading,n=t.selected;t.showVariations&&(!D()(e.selected,n)||e.isLoading&&!r)&&this.loadVariations()}},{key:"isProductId",value:function(e){return this.props.products.some((function(t){return t.id===e}))}},{key:"findParentProduct",value:function(e){return this.props.products.filter((function(t){return t.variations&&t.variations.find((function(t){return t.id===e}))}))[0].id}},{key:"getExpandedProduct",value:function(){var e=this.props,t=e.isLoading,r=e.selected;if(!e.showVariations)return null;var n=r&&r.length?r[0]:null;return n?this.prevSelectedItem=n:this.prevSelectedItem&&(t||this.isProductId(this.prevSelectedItem)||(n=this.prevSelectedItem)),!t&&n?this.isProductId(n)?n:this.findParentProduct(n):null}},{key:"render",value:function(){var t=this.props,r=t.error,n=t.isLoading,o=this.state,c=o.error,i=o.loading,a=o.variations;return Object(s.createElement)(e,u()({},this.props,{error:c||r,expandedProduct:this.getExpandedProduct(),isLoading:n,variations:a,variationsLoading:i}))}}]),c}(s.Component);return i()(t,"defaultProps",{selected:[],showVariations:!1}),t}),"withProductVariations"),U=r(48),V=r(6),G=r.n(V),F=r(119);function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(191);var q={list:Object(l.__)("Products","woo-gutenberg-products-block"),noItems:Object(l.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(l.__)("Search for a product to display","woo-gutenberg-products-block"),updated:Object(l.__)("Product search results updated.","woo-gutenberg-products-block")},Q=function(e){var t=e.expandedProduct,r=e.error,n=e.instanceId,c=e.isCompact,i=e.isLoading,a=e.onChange,f=e.onSearch,b=e.products,g=e.renderItem,m=e.selected,h=e.showVariations,w=e.variations,O=e.variationsLoading;if(r)return Object(s.createElement)(U.a,{error:r});var v=w&&w[t]?w[t]:[],j=[].concat(o()(b),o()(v));return Object(s.createElement)(p.b,{className:"woocommerce-products",list:j,isCompact:c,isLoading:i,isSingle:!0,selected:j.filter((function(e){var t=e.id;return m.includes(t)})),onChange:a,renderItem:g||(h?function(e){var t=e.item,r=e.search,o=e.depth,c=void 0===o?0:o,a=e.isSelected,f=e.onSelect,b=t.variations&&Array.isArray(t.variations)?t.variations.length:0,g=G()("woocommerce-search-product__item","woocommerce-search-list__item","depth-".concat(c),"has-count",{"is-searching":r.length>0,"is-skip-level":0===c&&0!==t.parent,"is-variable":b>0});if(!t.breadcrumbs.length)return Object(s.createElement)(F.a,u()({},e,{className:G()(g,{"is-selected":a}),isSelected:a,item:t,onSelect:function(){return function(){f(t)()}},isLoading:i||O,countLabel:t.variations.length>0?Object(l.sprintf)(
/* translators: %1$d is the number of variations of a product product. */
Object(l.__)("%1$d variations","woo-gutenberg-products-block"),t.variations.length):null,name:"products-".concat(n),"aria-label":Object(l.sprintf)(
/* translators: %1$s is the product name, %2$d is the number of variations of that product. */
Object(l._n)("%1$s, has %2$d variation","%1$s, has %2$d variations",t.variations.length,"woo-gutenberg-products-block"),t.name,t.variations.length)}));var m=Object(d.isEmpty)(t.variation)?e:z(z({},e),{},{item:z(z({},e.item),{},{name:t.variation}),"aria-label":"".concat(t.breadcrumbs[0],": ").concat(t.variation)});return Object(s.createElement)(p.c,u()({},m,{className:g,name:"variations-".concat(n)}))}:null),onSearch:f,messages:q,isHierarchical:!0})};Q.defaultProps={isCompact:!1,expandedProduct:null,selected:[],showVariations:!1},t.a=k(Object(P.a)(N(Object(f.withInstanceId)(Q))))},136:function(e,t,r){"use strict";var n=r(0),o=r(28),c=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}));t.a=c},137:function(e,t){},14:function(e,t){e.exports=window.wp.data},15:function(e,t){e.exports=window.wp.apiFetch},191:function(e,t){},21:function(e,t){e.exports=window.wp.compose},22:function(e,t){e.exports=window.regeneratorRuntime},23:function(e,t){e.exports=window.wp.url},24:function(e,t){e.exports=window.wp.blocks},26:function(e,t){e.exports=window.wp.htmlEntities},27:function(e,t){e.exports=window.moment},273:function(e,t,r){"use strict";var n=r(10),o=r.n(n),c=r(29),i=r.n(c),a=r(8),u=r.n(a),s=r(20),l=r.n(s),d=r(0),p=r(22),f=r.n(p),b=r(39),g=r(38),m=r(201),h=r(40),w=["selected"];t.a=function(e){return function(t){var r=t.selected,n=l()(t,w),c=Object(d.useState)(!0),a=u()(c,2),s=a[0],p=a[1],O=Object(d.useState)(null),v=u()(O,2),j=v[0],y=v[1],_=Object(d.useState)([]),k=u()(_,2),P=k[0],S=k[1],E=b.o.productCount>100,x=function(){var e=i()(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)(t);case 2:r=e.sent,y(r),p(!1);case 5:case"end":return e.stop()}}),e)})));return function(_x){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){Object(g.h)({selected:r}).then((function(e){S(e),p(!1)})).catch(x)}),[r]);var C=Object(m.a)((function(e){Object(g.h)({selected:r,search:e}).then((function(e){S(e),p(!1)})).catch(x)}),400),R=u()(C,1)[0],A=Object(d.useCallback)((function(e){p(!0),R(e)}),[p,R]);return Object(d.createElement)(e,o()({},n,{selected:r,error:j,products:P,isLoading:s,onSearch:E?A:null}))}}},28:function(e,t){e.exports=window.wp.primitives},3:function(e,t){e.exports=window.wp.components},35:function(e,t){e.exports=window.wp.dataControls},36:function(e,t){e.exports=window.wp.isShallowEqual},38:function(e,t,r){"use strict";r.d(t,"h",(function(){return f})),r.d(t,"e",(function(){return b})),r.d(t,"b",(function(){return g})),r.d(t,"i",(function(){return m})),r.d(t,"f",(function(){return h})),r.d(t,"c",(function(){return w})),r.d(t,"d",(function(){return O})),r.d(t,"g",(function(){return v})),r.d(t,"a",(function(){return j}));var n=r(5),o=r.n(n),c=r(23),i=r(15),a=r.n(i),u=r(7),s=r(4),l=r(39);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,s=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,a=void 0===i?{}:i,u=l.o.productCount>100,s={per_page:u?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},d=[Object(c.addQueryArgs)("/wc/store/products",p(p({},s),a))];return u&&r.length&&d.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r,per_page:0})),d}({selected:r,search:o,queryArgs:void 0===i?{}:i});return Promise.all(s.map((function(e){return a()({path:e})}))).then((function(e){return Object(u.uniqBy)(Object(u.flatten)(e),"id").map((function(e){return p(p({},e),{},{parent:0})}))})).catch((function(e){throw e}))},b=function(e){return a()({path:"/wc/store/products/".concat(e)})},g=function(){return a()({path:"wc/store/products/attributes"})},m=function(e){return a()({path:"wc/store/products/attributes/".concat(e,"/terms")})},h=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=Object(s.getSetting)("limitTags",!1),i=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:o?100:0,orderby:o?"count":"name",order:o?"desc":"asc",search:n})];return o&&r.length&&i.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:r})),i}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return a()({path:e})}))).then((function(e){return Object(u.uniqBy)(Object(u.flatten)(e),"id")}))},w=function(e){return a()({path:Object(c.addQueryArgs)("wc/store/products/categories",p({per_page:0},e))})},O=function(e){return a()({path:"wc/store/products/categories/".concat(e)})},v=function(e){return a()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:e})})},j=function(e,t){if(!e.title.raw)return e.slug;var r=1===t.filter((function(t){return t.title.raw===e.title.raw})).length;return e.title.raw+(r?"":" - ".concat(e.slug))}},39:function(e,t,r){"use strict";r.d(t,"o",(function(){return c})),r.d(t,"m",(function(){return i})),r.d(t,"l",(function(){return a})),r.d(t,"n",(function(){return u})),r.d(t,"j",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return p})),r.d(t,"k",(function(){return f})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return g})),r.d(t,"h",(function(){return m})),r.d(t,"a",(function(){return h})),r.d(t,"i",(function(){return w})),r.d(t,"b",(function(){return O}));var n,o=r(4),c=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=c.pluginUrl+"images/",a=c.pluginUrl+"build/",u=c.buildPhase,s=null===(n=o.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,l=o.STORE_PAGES.checkout.id,d=o.STORE_PAGES.checkout.permalink,p=o.STORE_PAGES.privacy.permalink,f=(o.STORE_PAGES.privacy.title,o.STORE_PAGES.terms.permalink),b=(o.STORE_PAGES.terms.title,o.STORE_PAGES.cart.id),g=o.STORE_PAGES.cart.permalink,m=(o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),Object(o.getSetting)("shippingCountries",{})),h=Object(o.getSetting)("allowedCountries",{}),w=Object(o.getSetting)("shippingStates",{}),O=Object(o.getSetting)("allowedStates",{})},4:function(e,t){e.exports=window.wc.wcSettings},40:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(29),o=r.n(n),c=r(22),i=r.n(c),a=r(1),u=function(){var e=o()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(_x){return e.apply(this,arguments)}}(),s=function(e){if(e.data&&"rest_invalid_param"===e.code){var t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(a.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},44:function(e,t){e.exports=window.wp.keycodes},45:function(e,t){e.exports=window.wp.escapeHtml},472:function(e,t,r){"use strict";var n=r(10),o=r.n(n),c=r(29),i=r.n(c),a=r(16),u=r.n(a),s=r(17),l=r.n(s),d=r(13),p=r.n(d),f=r(18),b=r.n(f),g=r(19),m=r.n(g),h=r(9),w=r.n(h),O=r(5),v=r.n(O),j=r(0),y=r(22),_=r.n(y),k=r(21),P=r(38),S=r(40);var E=Object(k.createHigherOrderComponent)((function(e){return function(t){b()(a,t);var r,n,c=(r=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w()(r);if(n){var o=w()(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return m()(this,e)});function a(){var e;u()(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=c.call.apply(c,[this].concat(r)),v()(p()(e),"state",{error:null,loading:!1,product:"preview"===e.props.attributes.productId?e.props.attributes.previewProduct:null}),v()(p()(e),"loadProduct",(function(){var t=e.props.attributes.productId;"preview"!==t&&(t?(e.setState({loading:!0}),Object(P.e)(t).then((function(t){e.setState({product:t,loading:!1,error:null})})).catch(function(){var t=i()(_.a.mark((function t(r){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(S.a)(r);case 2:n=t.sent,e.setState({product:null,loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(_x){return t.apply(this,arguments)}}())):e.setState({product:null,loading:!1,error:null}))})),e}return l()(a,[{key:"componentDidMount",value:function(){this.loadProduct()}},{key:"componentDidUpdate",value:function(e){e.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}},{key:"render",value:function(){var t=this.state,r=t.error,n=t.loading,c=t.product;return Object(j.createElement)(e,o()({},this.props,{error:r,getProduct:this.loadProduct,isLoading:n,product:c}))}}]),a}(j.Component)}),"withProduct");t.a=E},48:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(45));t.a=function(e){var t,r,i,a=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=a).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},50:function(e,t){e.exports=window.wp.hooks},54:function(e,t){e.exports=window.wp.deprecated},62:function(e,t,r){"use strict";var n=r(5),o=r.n(n),c=r(20),i=r.n(c),a=r(0),u=["srcElement","size"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=i()(e,u);return Object(a.isValidElement)(t)?Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c)):null}},7:function(e,t){e.exports=window.lodash},70:function(e,t){e.exports=window.wp.dom},754:function(e,t,r){e.exports=r(852)},755:function(e,t){},756:function(e,t){},757:function(e,t,r){"use strict";var n=r(0),o=r(28),c=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}));t.a=c},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(1),o=r(39),c=[{id:1,name:"WordPress Pennant",variation:"",permalink:"https://example.org",sku:"wp-pennant",short_description:Object(n.__)("Fly your WordPress banner with this beauty! Deck out your office space or add it to your kids walls. This banner will spruce up any space it’s hung!","woo-gutenberg-products-block"),description:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",price:"7.99",price_html:'<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>7.99</span>',images:[{id:1,src:o.m+"previews/pennant.jpg",thumbnail:o.m+"previews/pennant.jpg",name:"pennant-1.jpg",alt:"WordPress Pennant",srcset:"",sizes:""}],average_rating:5,review_count:1,prices:{currency_code:"GBP",decimal_separator:".",thousand_separator:",",decimals:2,price_prefix:"£",price_suffix:"",price:"7.99",regular_price:"9.99",sale_price:"7.99",price_range:null},add_to_cart:{text:Object(n.__)("Add to cart","woo-gutenberg-products-block"),description:Object(n.__)("Add to cart","woo-gutenberg-products-block")},has_options:!1,is_purchasable:!0,is_in_stock:!0,on_sale:!0}]},82:function(e,t){e.exports=window.ReactDOM},85:function(e,t){e.exports=window.wp.viewport},852:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(1),c=r(12),i=r(24),a=r(4),u=r(62),s=r(757),l=(r(755),r(756),r(758)),d={attributes:{contentAlign:"center",dimRatio:50,editMode:!1,height:Object(a.getSetting)("default_height",500),mediaSrc:"",showDesc:!0,productId:"preview",previewProduct:l.a[0]}},p=r(10),f=r.n(p),b=r(16),g=r.n(b),m=r(17),h=r.n(m),w=r(13),O=r.n(w),v=r(18),j=r.n(v),y=r(19),_=r.n(y),k=r(9),P=r.n(k),S=r(5),E=r.n(S),x=r(14),C=r(3),R=r(6),A=r.n(R),I=r(21),D=r(7),T=(r(2),r(135)),B=r(101),L=r(472);function M(e){return e&&e.images&&e.images.length&&e.images[0].src||""}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=Object(I.compose)([L.a,Object(c.withColors)({overlayColor:"background-color"}),C.withSpokenMessages,Object(x.withSelect)((function(e,t,r){var n,o,c=t.clientId,i=r.dispatch,a=e("core/block-editor").getBlock(c),u=(null==a||null===(n=a.innerBlocks[0])||void 0===n?void 0:n.clientId)||"";return{updateBlockAttributes:function(e){u&&i("core/block-editor").updateBlockAttributes(u,e)},currentButtonAttributes:(null==a||null===(o=a.innerBlocks[0])||void 0===o?void 0:o.attributes)||{}}})),Object(I.createHigherOrderComponent)((function(e){return function(t){j()(i,t);var r,o,c=(r=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P()(r);if(o){var n=P()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _()(this,e)});function i(){var e;g()(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=c.call.apply(c,[this].concat(r)),E()(O()(e),"state",{doUrlUpdate:!1}),E()(O()(e),"triggerUrlUpdate",(function(){e.setState({doUrlUpdate:!0})})),e}return h()(i,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.attributes,r=e.updateBlockAttributes,n=e.currentButtonAttributes,o=e.product;this.state.doUrlUpdate&&!t.editMode&&null!=o&&o.permalink&&null!=n&&n.url&&o.permalink!==n.url&&(r(U(U({},n),{},{url:o.permalink})),this.setState({doUrlUpdate:!1}))}},{key:"render",value:function(){return Object(n.createElement)(e,f()({triggerUrlUpdate:this.triggerUrlUpdate},this.props))}}]),i}(n.Component)}),"withUpdateButtonAttributes")])((function(e){var t,r,i,l,d=e.attributes,p=e.debouncedSpeak,f=e.error,b=e.getProduct,g=e.isLoading,m=e.isSelected,h=e.overlayColor,w=e.product,O=e.setAttributes,v=e.setOverlayColor,j=e.triggerUrlUpdate,y=void 0===j?function(){}:j,_=function(){var e=d.contentAlign,t=d.editMode,r=d.mediaSrc,i=d.mediaId||function(e){return e&&e.images&&e.images.length&&e.images[0].id||0}(w);return Object(n.createElement)(c.BlockControls,null,Object(n.createElement)(c.AlignmentToolbar,{value:e,onChange:function(e){O({contentAlign:e})}}),Object(n.createElement)(c.MediaReplaceFlow,{mediaId:i,mediaURL:r,accept:"image/*",onSelect:function(e){O({mediaId:e.id,mediaSrc:e.url})},allowedTypes:["image"]}),Object(n.createElement)(C.ToolbarGroup,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return O({editMode:!t})},isActive:t}]}))},k=d.editMode;return f?Object(n.createElement)(B.a,{className:"wc-block-featured-product-error",error:f,isLoading:g,onRetry:b}):k?Object(n.createElement)(n.Fragment,null,_(),Object(n.createElement)(C.Placeholder,{icon:Object(n.createElement)(u.a,{srcElement:s.a}),label:Object(o.__)("Featured Product","woo-gutenberg-products-block"),className:"wc-block-featured-product"},Object(o.__)("Visually highlight a product or variation and encourage prompt action","woo-gutenberg-products-block"),Object(n.createElement)("div",{className:"wc-block-featured-product__selection"},Object(n.createElement)(T.a,{selected:d.productId||0,showVariations:!0,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e[0]?e[0].id:0;O({productId:t,mediaId:0,mediaSrc:""}),y()}}),Object(n.createElement)(C.Button,{isPrimary:!0,onClick:function(){O({editMode:!1}),p(Object(o.__)("Showing Featured Product block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Done","woo-gutenberg-products-block"))))):Object(n.createElement)(n.Fragment,null,_(),(t=d.mediaSrc||M(w),i=void 0===(r=d.focalPoint)?{x:.5,y:.5}:r,l="function"==typeof C.FocalPointPicker,Object(n.createElement)(c.InspectorControls,{key:"inspector"},Object(n.createElement)(C.PanelBody,{title:Object(o.__)("Content","woo-gutenberg-products-block")},Object(n.createElement)(C.ToggleControl,{label:Object(o.__)("Show description","woo-gutenberg-products-block"),checked:d.showDesc,onChange:function(){return O({showDesc:!d.showDesc})}}),Object(n.createElement)(C.ToggleControl,{label:Object(o.__)("Show price","woo-gutenberg-products-block"),checked:d.showPrice,onChange:function(){return O({showPrice:!d.showPrice})}})),Object(n.createElement)(c.PanelColorSettings,{title:Object(o.__)("Overlay","woo-gutenberg-products-block"),colorSettings:[{value:h.color,onChange:v,label:Object(o.__)("Overlay Color","woo-gutenberg-products-block")}]},!!t&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)(C.RangeControl,{label:Object(o.__)("Background Opacity","woo-gutenberg-products-block"),value:d.dimRatio,onChange:function(e){return O({dimRatio:e})},min:0,max:100,step:10}),l&&Object(n.createElement)(C.FocalPointPicker,{label:Object(o.__)("Focal Point Picker"),url:t,value:i,onChange:function(e){return O({focalPoint:e})}}))))),w?function(){var e,t,r,i=d.className,u=d.contentAlign,s=d.dimRatio,l=d.focalPoint,p=d.height,f=d.showDesc,b=d.showPrice,v=A()("wc-block-featured-product",{"is-selected":m&&"preview"!==d.productId,"is-loading":!w&&g,"is-not-found":!w&&!g,"has-background-dim":0!==s},0===(e=s)||50===e?null:"has-background-dim-".concat(10*Math.round(e/10)),"center"!==u&&"has-".concat(u,"-content"),i),j=(t=d.mediaSrc||w,Object(D.isObject)(t)&&(t=M(t)),t?{backgroundImage:"url(".concat(t,")")}:{});if(h.color&&(j.backgroundColor=h.color),l){var y=100*l.x,_=100*l.y;j.backgroundPosition="".concat(y,"% ").concat(_,"%")}return Object(n.createElement)(C.ResizableBox,{className:v,size:{height:p},minHeight:Object(a.getSetting)("min_height",500),enable:{bottom:!0},onResizeStop:function(e,t,r){O({height:parseInt(r.style.height,10)})},style:j},Object(n.createElement)("div",{className:"wc-block-featured-product__wrapper"},Object(n.createElement)("h2",{className:"wc-block-featured-product__title",dangerouslySetInnerHTML:{__html:w.name}}),!Object(D.isEmpty)(w.variation)&&Object(n.createElement)("h3",{className:"wc-block-featured-product__variation",dangerouslySetInnerHTML:{__html:w.variation}}),f&&Object(n.createElement)("div",{className:"wc-block-featured-product__description",dangerouslySetInnerHTML:{__html:w.short_description}}),b&&Object(n.createElement)("div",{className:"wc-block-featured-product__price",dangerouslySetInnerHTML:{__html:w.price_html}}),Object(n.createElement)("div",{className:"wc-block-featured-product__link"},(r=A()("wp-block-button__link","is-style-fill"),"preview"===d.productId?Object(n.createElement)("div",{className:"wp-block-button aligncenter",style:{width:"100%"}},Object(n.createElement)(c.RichText.Content,{tagName:"a",className:r,href:w.permalink,title:d.linkText,style:{backgroundColor:"vivid-green-cyan",borderRadius:"5px"},value:d.linkText,target:w.permalink})):Object(n.createElement)(c.InnerBlocks,{template:[["core/button",{text:Object(o.__)("Shop now","woo-gutenberg-products-block"),url:w.permalink,align:"center"}]],templateLock:"all"})))))}():Object(n.createElement)(C.Placeholder,{className:"wc-block-featured-product",icon:Object(n.createElement)(u.a,{srcElement:s.a}),label:Object(o.__)("Featured Product","woo-gutenberg-products-block")},g?Object(n.createElement)(C.Spinner,null):Object(o.__)("No product is selected.","woo-gutenberg-products-block")))}));Object(i.registerBlockType)("woocommerce/featured-product",{title:Object(o.__)("Featured Product","woo-gutenberg-products-block"),icon:{src:Object(n.createElement)(u.a,{srcElement:s.a}),foreground:"#7f54b3"},category:"woocommerce",keywords:[Object(o.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(o.__)("Visually highlight a product or variation and encourage prompt action.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:d,attributes:{contentAlign:{type:"string",default:"center"},dimRatio:{type:"number",default:50},editMode:{type:"boolean",default:!0},focalPoint:{type:"object"},height:{type:"number",default:Object(a.getSetting)("default_height",500)},mediaId:{type:"number",default:0},mediaSrc:{type:"string",default:""},overlayColor:{type:"string"},customOverlayColor:{type:"string"},linkText:{type:"string",default:Object(o.__)("Shop now","woo-gutenberg-products-block")},productId:{type:"number"},showDesc:{type:"boolean",default:!0},showPrice:{type:"boolean",default:!0},previewProduct:{type:"object",default:null}},edit:function(e){return Object(n.createElement)(V,e)},save:function(){return Object(n.createElement)(c.InnerBlocks.Content,null)}})},91:function(e,t){e.exports=window.wp.date}});