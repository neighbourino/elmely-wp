(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[39],{271:function(e,t,c){"use strict";var n=c(21),o=c.n(n),a=c(172);t.a=function(e){return function(t){return function(c){var n=Object(a.a)(e,c);return React.createElement(t,o()({},c,n))}}}},272:function(e,t,c){"use strict";var n=c(21),o=c.n(n),a=c(26),r=c.n(a),s=c(8),l=c.n(s),i=(c(9),c(273),["children","className","headingLevel"]);t.a=function(e){var t=e.children,c=e.className,n=e.headingLevel,a=r()(e,i),s=l()("wc-block-components-title",c),m="h".concat(n);return React.createElement(m,o()({className:s},a),t)}},273:function(e,t){},274:function(e,t,c){"use strict";t.a=function(e){var t=e.label,c=e.secondaryLabel,n=e.description,o=e.secondaryDescription,a=e.id;return React.createElement("div",{className:"wc-block-components-radio-control__option-layout"},React.createElement("div",{className:"wc-block-components-radio-control__label-group"},t&&React.createElement("span",{id:a&&"".concat(a,"__label"),className:"wc-block-components-radio-control__label"},t),c&&React.createElement("span",{id:a&&"".concat(a,"__secondary-label"),className:"wc-block-components-radio-control__secondary-label"},c)),React.createElement("div",{className:"wc-block-components-radio-control__description-group"},n&&React.createElement("span",{id:a&&"".concat(a,"__description"),className:"wc-block-components-radio-control__description"},n),o&&React.createElement("span",{id:a&&"".concat(a,"__secondary-description"),className:"wc-block-components-radio-control__secondary-description"},o)))}},275:function(e,t,c){"use strict";var n=c(4),o=c.n(n),a=c(8),r=c.n(a),s=c(274);t.a=function(e){var t,c=e.checked,n=e.name,a=e.onChange,l=e.option,i=l.value,m=l.label,u=l.description,d=l.secondaryLabel,p=l.secondaryDescription;return React.createElement("label",{className:r()("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":c}),htmlFor:"".concat(n,"-").concat(i)},React.createElement("input",{id:"".concat(n,"-").concat(i),className:"wc-block-components-radio-control__input",type:"radio",name:n,value:i,onChange:function(e){return a(e.target.value)},checked:c,"aria-describedby":r()((t={},o()(t,"".concat(n,"-").concat(i,"__label"),m),o()(t,"".concat(n,"-").concat(i,"__secondary-label"),d),o()(t,"".concat(n,"-").concat(i,"__description"),u),o()(t,"".concat(n,"-").concat(i,"__secondary-description"),p),t))}),React.createElement(s.a,{id:"".concat(n,"-").concat(i),label:m,secondaryLabel:d,description:u,secondaryDescription:p}))}},277:function(e,t){},280:function(e,t,c){"use strict";var n=c(21),o=c.n(n),a=c(26),r=c.n(a),s=c(25),l=c(8),i=c.n(l),m=(c(281),["className","label","id","instanceId","onChange","children","hasError"]);t.a=Object(s.withInstanceId)((function(e){var t=e.className,c=e.label,n=e.id,a=e.instanceId,s=e.onChange,l=e.children,u=e.hasError,d=void 0!==u&&u,p=r()(e,m),b=n||"checkbox-control-".concat(a);return React.createElement("label",{className:i()("wc-block-components-checkbox",{"has-error":d},t),htmlFor:b},React.createElement("input",o()({id:b,className:"wc-block-components-checkbox__input",type:"checkbox",onChange:function(e){return s(e.target.checked)},"aria-invalid":!0===d},p)),React.createElement("svg",{className:"wc-block-components-checkbox__mark","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 20"},React.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})),c&&React.createElement("span",{className:"wc-block-components-checkbox__label"},c),l)}))},281:function(e,t){},282:function(e,t,c){"use strict";var n=c(1);t.a=function(e){var t=e.defaultTitle,c=void 0===t?Object(n.__)("Step","woo-gutenberg-products-block"):t,o=e.defaultDescription,a=void 0===o?Object(n.__)("Step description text.","woo-gutenberg-products-block"):o,r=e.defaultShowStepNumber;return{title:{type:"string",default:c},description:{type:"string",default:a},showStepNumber:{type:"boolean",default:void 0===r||r}}}},285:function(e,t,c){"use strict";var n=c(8),o=c.n(n),a=c(25),r=c(275);c(286),t.a=Object(a.withInstanceId)((function(e){var t=e.className,c=e.instanceId,n=e.id,a=e.selected,s=e.onChange,l=e.options,i=void 0===l?[]:l,m=n||c;return i.length&&React.createElement("div",{className:o()("wc-block-components-radio-control",t)},i.map((function(e){return React.createElement(r.a,{key:"".concat(m,"-").concat(e.value),name:"radio-control-".concat(m),checked:e.value===a,option:e,onChange:function(t){s(t),"function"==typeof e.onChange&&e.onChange(t)}})})))}))},286:function(e,t){},291:function(e,t,c){"use strict";var n=c(8),o=c.n(n),a=(c(9),c(272)),r=(c(277),function(e){var t=e.title,c=e.stepHeadingContent;return React.createElement("div",{className:"wc-block-components-checkout-step__heading"},React.createElement(a.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!c&&React.createElement("span",{className:"wc-block-components-checkout-step__heading-content"},c))});t.a=function(e){var t=e.id,c=e.className,n=e.title,a=e.legend,s=e.description,l=e.children,i=e.disabled,m=void 0!==i&&i,u=e.showStepNumber,d=void 0===u||u,p=e.stepHeadingContent,b=void 0===p?function(){}:p,h=a||n?"fieldset":"div";return React.createElement(h,{className:o()(c,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":d,"wc-block-components-checkout-step--disabled":m}),id:t,disabled:m},!(!a&&!n)&&React.createElement("legend",{className:"screen-reader-text"},a||n),!!n&&React.createElement(r,{title:n,stepHeadingContent:b()}),React.createElement("div",{className:"wc-block-components-checkout-step__container"},!!s&&React.createElement("p",{className:"wc-block-components-checkout-step__description"},s),React.createElement("div",{className:"wc-block-components-checkout-step__content"},l)))}},319:function(e,t,c){"use strict";var n=c(13),o=c(20),a=c(18),r=c(0),s=c(8),l=c.n(s),i=c(25),m=c(86);t.a=function(e){var t,c=e.icon,s=e.children,u=e.label,d=e.instructions,p=e.className,b=e.notices,h=e.preview,v=e.isColumnLayout,f=Object(a.a)(e,["icon","children","label","instructions","className","notices","preview","isColumnLayout"]),y=Object(i.useResizeObserver)(),O=Object(o.a)(y,2),g=O[0],w=O[1].width;"number"==typeof w&&(t={"is-large":w>=320,"is-medium":w>=160&&w<320,"is-small":w<160});var k=l()("components-placeholder",p,t),j=l()("components-placeholder__fieldset",{"is-column-layout":v});return Object(r.createElement)("div",Object(n.a)({},f,{className:k}),g,b,h&&Object(r.createElement)("div",{className:"components-placeholder__preview"},h),Object(r.createElement)("div",{className:"components-placeholder__label"},Object(r.createElement)(m.a,{icon:c}),u),!!d&&Object(r.createElement)("div",{className:"components-placeholder__instructions"},d),Object(r.createElement)("div",{className:j},s))}},364:function(e,t){},395:function(e,t,c){"use strict";c.r(t);var n=c(8),o=c.n(n),a=c(41),r=c(46),s=c(271),l=c(291),i=c(61),m=c(100),u=c(290),d=c(1),p=c(48),b=c(249),h=c(319),v=c(82),f=c(152),y=c(149),O=c(389),g=c(2),w=c(43),k=(c(364),function(){return React.createElement(h.a,{icon:React.createElement(y.a,{srcElement:O.a}),label:Object(d.__)("Payment methods","woo-gutenberg-products-block"),className:"wc-block-checkout__no-payment-methods-placeholder"},React.createElement("span",{className:"wc-block-checkout__no-payment-methods-placeholder-description"},Object(d.__)("Your store does not have any payment methods configured that support the checkout block. Once you have configured a compatible payment method (e.g. Stripe) it will be shown here.","woo-gutenberg-products-block")),React.createElement(v.a,{isSecondary:!0,href:"".concat(g.ADMIN_URL,"admin.php?page=wc-settings&tab=checkout"),target:"_blank",rel:"noopener noreferrer"},Object(d.__)("Configure Payment Methods","woo-gutenberg-products-block")))}),j=function(){return React.createElement(f.a,{isDismissible:!1,className:o()("wc-block-checkout__no-payment-methods-notice","woocommerce-message","woocommerce-error")},Object(d.__)("There are no payment methods available. This may be an error on our side. Please contact us if you need any help placing your order.","woo-gutenberg-products-block"))},_=function(){return Object(w.a)().isEditor?React.createElement(k,null):React.createElement(j,null)},E=c(4),R=c.n(E),N=c(26),P=c.n(N),S=c(397),C=c(60),D=c(0),M=c(23),x=c.n(M),I=c(25),T=c(275),L=Object(I.withInstanceId)((function(e){var t=e.className,c=e.instanceId,n=e.id,a=e.selected,r=e.onChange,s=e.options,l=void 0===s?[]:s,i=n||c;return l.length&&React.createElement("div",{className:o()("wc-block-components-radio-control",t)},l.map((function(e){var t="object"===x()(e)&&"content"in e,c=e.value===a;return React.createElement("div",{className:"wc-block-components-radio-control-accordion-option",key:e.value},React.createElement(T.a,{name:"radio-control-".concat(i),checked:c,option:e,onChange:function(t){r(t),"function"==typeof e.onChange&&e.onChange(t)}}),t&&c&&React.createElement("div",{className:o()("wc-block-components-radio-control-accordion-content",{"wc-block-components-radio-control-accordion-content-hide":!c})},e.content))})))})),A=c(280),F=(c(9),c(309)),B=function(e){var t=e.children,c=e.showSaveOption,n=Object(w.a)().isEditor,o=Object(b.b)(),a=o.shouldSavePayment,r=o.setShouldSavePayment,s=Object(i.b)().customerId;return React.createElement(F.a,{isEditor:n},t,s>0&&c&&React.createElement(A.a,{className:"wc-block-components-payment-methods__save-card-info",label:Object(d.__)("Save payment information to my account for future purchases.","woo-gutenberg-products-block"),checked:a,onChange:function(){return r(!a)}}))},Y=["activePaymentMethod"];function z(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function H(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?z(Object(c),!0).forEach((function(t){R()(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):z(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var $=function(){var e=Object(b.b)(),t=e.setActivePaymentMethod,c=e.activeSavedToken,n=e.setActiveSavedToken,a=e.isExpressPaymentMethodActive,s=e.customerPaymentMethods,l=Object(u.b)().paymentMethods,i=Object(S.a)(),m=i.activePaymentMethod,d=P()(i,Y),p=Object(r.c)().noticeContexts,h=Object(C.a)().removeNotice,v=Object(w.a)().isEditor,f=Object.keys(l).map((function(e){var t=l[e],c=t.edit,n=t.content,o=t.label,a=t.supports,r=v?c:n;return{value:e,label:"string"==typeof o?o:Object(D.cloneElement)(o,{components:d.components}),name:"wc-saved-payment-method-token-".concat(e),content:React.createElement(B,{showSaveOption:a.showSaveOption},Object(D.cloneElement)(r,H({activePaymentMethod:m},d)))}})),y=0===Object.keys(s).length&&1===Object.keys(l).length,O=o()({"disable-radio-control":y});return a?null:React.createElement(L,{id:"wc-payment-method-options",className:O,selected:c?null:m,onChange:function(e){t(e),n(""),h("wc-payment-error",p.PAYMENTS)},options:f})},J=c(285),U=c(32);function W(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}var q=function(){var e,t,c=Object(b.b)(),n=c.setPaymentStatus,o=c.customerPaymentMethods,a=c.activePaymentMethod,r=c.setActivePaymentMethod,s=c.activeSavedToken,l=c.setActiveSavedToken,i=Object(U.getPaymentMethods)(),m=Object(u.b)().paymentMethods,p=Object(S.a)(),h=Object(D.useRef)([]),v=Object(D.useCallback)((function(e){l(e)}),[l]);Object(D.useEffect)((function(){var e=Object.keys(o).flatMap((function(e){return o[e].map((function(t){var c="cc"===e||"echeck"===e?function(e,t,c){var n=e.method,o=e.expires,a=e.tokenId;return{value:a+"",label:Object(d.sprintf)(
/* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */
Object(d.__)("%1$s ending in %2$s (expires %3$s)","woo-gutenberg-product-blocks"),n.brand,n.last4,o),name:"wc-saved-payment-method-token-".concat(a),onChange:function(e){var o,a="wc-".concat(n.gateway,"-payment-token");t(n.gateway),c().started((o={payment_method:n.gateway},R()(o,a,e+""),R()(o,"isSavedToken",!0),o))}}}(t,r,n):function(e,t,c){var n=e.method,o=e.tokenId;return{value:o+"",label:Object(d.sprintf)(
/* translators: %s is the name of the payment method gateway. */
Object(d.__)("Saved token for %s","woo-gutenberg-products-block"),n.gateway),name:"wc-saved-payment-method-token-".concat(o),onChange:function(e){var o,a="wc-".concat(n.gateway,"-payment-token");t(n.gateway),c().started((o={payment_method:n.gateway},R()(o,a,e+""),R()(o,"isSavedToken",!0),o))}}}(t,r,n);return!a&&t.is_default&&""===s&&(v(t.tokenId+""),c.onChange(t.tokenId)),c}))})).filter(Boolean);h.current=e}),[o,v,s,a,r,n,i]);var f=s&&m[a]&&null!==(e=m[a])&&void 0!==e&&e.savedTokenComponent?Object(D.cloneElement)(null===(t=m[a])||void 0===t?void 0:t.savedTokenComponent,function(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?W(Object(c),!0).forEach((function(t){R()(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):W(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}({token:s},p)):null;return h.current.length>0?React.createElement(React.Fragment,null,React.createElement(J.a,{id:"wc-payment-method-saved-tokens",selected:s,onChange:v,options:h.current}),f):null},G=function(){var e=Object(u.b)(),t=e.isInitialized,c=e.paymentMethods,n=Object(b.b)().customerPaymentMethods;return t&&0===Object.keys(c).length?React.createElement(_,null):React.createElement(React.Fragment,null,React.createElement(q,null),Object.keys(n).length>0&&React.createElement(p.a,{label:Object(d.__)("Use another payment method.","woo-gutenberg-products-block"),screenReaderLabel:Object(d.__)("Other available payment methods","woo-gutenberg-products-block"),wrapperElement:"p",wrapperProps:{className:["wc-block-components-checkout-step__description wc-block-components-checkout-step__description-payments-aligned"]}}),React.createElement($,null))},K=function(){var e=Object(r.c)().noticeContexts;return React.createElement(m.a,{context:e.PAYMENTS},React.createElement(G,null))},Q=c(282);function V(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function X(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?V(Object(c),!0).forEach((function(t){R()(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):V(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var Z=X(X({},Object(Q.a)({defaultTitle:Object(d.__)("Payment options","woo-gutenberg-products-block"),defaultDescription:""})),{},{className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}});t.default=Object(s.a)(Z)((function(e){var t=e.title,c=e.description,n=e.showStepNumber,s=e.children,u=e.className,d=Object(i.b)().isProcessing,p=Object(a.a)().cartNeedsPayment,b=Object(r.c)().noticeContexts;return p?React.createElement(l.a,{id:"payment-method",disabled:d,className:o()("wc-block-checkout__payment-method",u),title:t,description:c,showStepNumber:n},React.createElement(m.a,{context:b.PAYMENTS},React.createElement(K,null)),s):null}))},48:function(e,t,c){"use strict";var n=c(4),o=c.n(n),a=c(0),r=c(8),s=c.n(r);function l(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function i(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?l(Object(c),!0).forEach((function(t){o()(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):l(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}t.a=function(e){var t,c=e.label,n=e.screenReaderLabel,o=e.wrapperElement,r=e.wrapperProps,l=void 0===r?{}:r,m=null!=c,u=null!=n;return!m&&u?(t=o||"span",l=i(i({},l),{},{className:s()(l.className,"screen-reader-text")}),React.createElement(t,l,n)):(t=o||a.Fragment,m&&u&&c!==n?React.createElement(t,l,React.createElement("span",{"aria-hidden":"true"},c),React.createElement("span",{className:"screen-reader-text"},n)):React.createElement(t,l,c))}}}]);