(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[40],{271:function(e,t,n){"use strict";var c=n(21),i=n.n(c),r=n(172);t.a=function(e){return function(t){return function(n){var c=Object(r.a)(e,n);return React.createElement(t,i()({},n,c))}}}},272:function(e,t,n){"use strict";var c=n(21),i=n.n(c),r=n(26),o=n.n(r),a=n(8),s=n.n(a),l=(n(9),n(273),["children","className","headingLevel"]);t.a=function(e){var t=e.children,n=e.className,c=e.headingLevel,r=o()(e,l),a=s()("wc-block-components-title",n),u="h".concat(c);return React.createElement(u,i()({className:a},r),t)}},273:function(e,t){},277:function(e,t){},280:function(e,t,n){"use strict";var c=n(21),i=n.n(c),r=n(26),o=n.n(r),a=n(25),s=n(8),l=n.n(s),u=(n(281),["className","label","id","instanceId","onChange","children","hasError"]);t.a=Object(a.withInstanceId)((function(e){var t=e.className,n=e.label,c=e.id,r=e.instanceId,a=e.onChange,s=e.children,d=e.hasError,p=void 0!==d&&d,b=o()(e,u),h=c||"checkbox-control-".concat(r);return React.createElement("label",{className:l()("wc-block-components-checkbox",{"has-error":p},t),htmlFor:h},React.createElement("input",i()({id:h,className:"wc-block-components-checkbox__input",type:"checkbox",onChange:function(e){return a(e.target.checked)},"aria-invalid":!0===p},b)),React.createElement("svg",{className:"wc-block-components-checkbox__mark","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 20"},React.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})),n&&React.createElement("span",{className:"wc-block-components-checkbox__label"},n),s)}))},281:function(e,t){},282:function(e,t,n){"use strict";var c=n(1);t.a=function(e){var t=e.defaultTitle,n=void 0===t?Object(c.__)("Step","woo-gutenberg-products-block"):t,i=e.defaultDescription,r=void 0===i?Object(c.__)("Step description text.","woo-gutenberg-products-block"):i,o=e.defaultShowStepNumber;return{title:{type:"string",default:n},description:{type:"string",default:r},showStepNumber:{type:"boolean",default:void 0===o||o}}}},291:function(e,t,n){"use strict";var c=n(8),i=n.n(c),r=(n(9),n(272)),o=(n(277),function(e){var t=e.title,n=e.stepHeadingContent;return React.createElement("div",{className:"wc-block-components-checkout-step__heading"},React.createElement(r.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!n&&React.createElement("span",{className:"wc-block-components-checkout-step__heading-content"},n))});t.a=function(e){var t=e.id,n=e.className,c=e.title,r=e.legend,a=e.description,s=e.children,l=e.disabled,u=void 0!==l&&l,d=e.showStepNumber,p=void 0===d||d,b=e.stepHeadingContent,h=void 0===b?function(){}:b,m=r||c?"fieldset":"div";return React.createElement(m,{className:i()(n,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":p,"wc-block-components-checkout-step--disabled":u}),id:t,disabled:u},!(!r&&!c)&&React.createElement("legend",{className:"screen-reader-text"},r||c),!!c&&React.createElement(o,{title:c,stepHeadingContent:h()}),React.createElement("div",{className:"wc-block-components-checkout-step__container"},!!a&&React.createElement("p",{className:"wc-block-components-checkout-step__description"},a),React.createElement("div",{className:"wc-block-components-checkout-step__content"},s)))}},310:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(4),i=n.n(c),r=n(26),o=n.n(r),a=n(2),s=n(0),l=n(81),u=n(66),d=["email"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}var b=function(){var e=Object(l.b)().needsShipping,t=Object(u.b)(),n=t.billingData,c=t.setBillingData,r=t.shippingAddress,b=t.setShippingAddress,h=t.shippingAsBilling,m=t.setShippingAsBilling,f=Object(s.useRef)(h),g=Object(s.useRef)(n),O=Object(s.useCallback)((function(e){b(e),h&&c(e)}),[h,b,c]),v=Object(s.useCallback)((function(t){c(t),e||b(t)}),[e,b,c]);Object(s.useEffect)((function(){if(f.current!==h){if(h)g.current=n,c(r);else{var e=g.current,t=(e.email,o()(e,d));c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))}f.current=h}}),[h,c,r,n]);var w=Object(s.useCallback)((function(e){c({email:e})}),[c]),j=Object(s.useCallback)((function(e){c({phone:e})}),[c]),k=Object(s.useCallback)((function(e){O({phone:e})}),[O]);return{defaultAddressFields:a.defaultAddressFields,shippingFields:r,setShippingFields:O,billingFields:n,setBillingFields:v,setEmail:w,setPhone:j,setShippingPhone:k,shippingAsBilling:h,setShippingAsBilling:m,showShippingFields:e,showBillingFields:!e||!f.current}}},311:function(e,t,n){"use strict";var c=n(1),i=n(325);t.a=function(e){var t=e.id,n=void 0===t?"phone":t,r=e.isRequired,o=void 0!==r&&r,a=e.value,s=void 0===a?"":a,l=e.onChange;return React.createElement(i.a,{id:n,type:"tel",autoComplete:"tel",required:o,label:o?Object(c.__)("Phone","woo-gutenberg-products-block"):Object(c.__)("Phone (optional)","woo-gutenberg-products-block"),value:s,onChange:l})}},361:function(e,t,n){"use strict";var c=n(13),i=n(18),r=n(0),o=n(6),a=n(8),s=n.n(a),l=n(38),u=Object(r.createContext)(!1),d=u.Consumer,p=u.Provider,b=["BUTTON","FIELDSET","INPUT","OPTGROUP","OPTION","SELECT","TEXTAREA"];function h(e){var t=e.className,n=e.children,a=Object(i.a)(e,["className","children"]),u=Object(r.useRef)(),d=function(){l.focus.focusable.find(u.current).forEach((function(e){Object(o.includes)(b,e.nodeName)&&e.setAttribute("disabled",""),"A"===e.nodeName&&e.setAttribute("tabindex",-1);var t=e.getAttribute("tabindex");null!==t&&"-1"!==t&&e.removeAttribute("tabindex"),e.hasAttribute("contenteditable")&&e.setAttribute("contenteditable","false")}))},h=Object(r.useCallback)(Object(o.debounce)(d,{leading:!0}),[]);return Object(r.useLayoutEffect)((function(){d();var e=new window.MutationObserver(h);return e.observe(u.current,{childList:!0,attributes:!0,subtree:!0}),function(){e.disconnect(),h.cancel()}}),[]),Object(r.createElement)(p,{value:!0},Object(r.createElement)("div",Object(c.a)({ref:u,className:s()(t,"components-disabled")},a),n))}h.Consumer=d,t.a=h},403:function(e,t,n){"use strict";n.r(t);var c=n(8),i=n.n(c),r=n(271),o=n(291),a=n(61),s=n(310),l=n(1),u=n(0),d=n(361),p=n(373),b=n(53),h=n(43),m=n(280),f=n(311),g=function(e){var t=e.showCompanyField,n=void 0!==t&&t,c=e.showApartmentField,i=void 0!==c&&c,r=e.showPhoneField,o=void 0!==r&&r,a=e.requireCompanyField,g=void 0!==a&&a,O=e.requirePhoneField,v=void 0!==O&&O,w=Object(s.a)(),j=w.defaultAddressFields,k=w.setShippingFields,E=w.shippingFields,y=w.setShippingAsBilling,_=w.shippingAsBilling,N=w.setShippingPhone,P=Object(b.a)().dispatchCheckoutEvent,R=Object(h.a)().isEditor;Object(u.useEffect)((function(){o||N("")}),[o,N]);var F=Object(u.useMemo)((function(){return{company:{hidden:!n,required:g},address_2:{hidden:!i}}}),[n,g,i]),C=R?d.a:u.Fragment;return React.createElement(React.Fragment,null,React.createElement(C,null,React.createElement(p.a,{id:"shipping",type:"shipping",onChange:function(e){k(e),P("set-shipping-address")},values:E,fields:Object.keys(j),fieldConfig:F}),o&&React.createElement(f.a,{id:"shipping-phone",isRequired:v,value:E.phone,onChange:function(e){N(e),P("set-phone-number",{step:"shipping"})}})),React.createElement(m.a,{className:"wc-block-checkout__use-address-for-billing",label:Object(l.__)("Use same address for billing","woo-gutenberg-products-block"),checked:_,onChange:function(e){return y(e)}}))},O=n(4),v=n.n(O),w=n(282);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=k(k({},Object(w.a)({defaultTitle:Object(l.__)("Shipping address","woo-gutenberg-products-block"),defaultDescription:Object(l.__)("Enter the address where you want your order delivered.","woo-gutenberg-products-block")})),{},{className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}}),y=n(173);t.default=Object(r.a)(E)((function(e){var t=e.title,n=e.description,c=e.showStepNumber,r=e.children,l=e.className,u=Object(a.b)().isProcessing,d=Object(s.a)().showShippingFields,p=Object(y.b)(),b=p.requireCompanyField,h=p.requirePhoneField,m=p.showApartmentField,f=p.showCompanyField,O=p.showPhoneField;return d?React.createElement(o.a,{id:"shipping-fields",disabled:u,className:i()("wc-block-checkout__shipping-fields",l),title:t,description:n,showStepNumber:c},React.createElement(g,{requireCompanyField:b,requirePhoneField:h,showApartmentField:m,showCompanyField:f,showPhoneField:O}),r):null}))}}]);