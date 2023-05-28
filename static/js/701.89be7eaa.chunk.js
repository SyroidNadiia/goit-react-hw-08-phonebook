"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[701],{245:function(n,e,t){t.d(e,{_R:function(){return s}});var r,i,u,o,c=t(168),a=t(7691),l=t(5705),s=a.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  margin-top: 70px;\n  "])));(0,a.ZP)(l.l0)(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 20px;\n"]))),a.ZP.label(u||(u=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),(0,a.ZP)(l.Bc)(o||(o=(0,c.Z)(["\n  color: red;\n"])))},5701:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r=t(9439),i=t(2791),u=t(9434),o=t(4270),c="NOT_FOUND";var a=function(n,e){return n===e};function l(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?a:r,u=t.maxSize,o=void 0===u?1:u,l=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),f=1===o?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:c},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return c}return{get:r,put:function(e,i){r(e)===c&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,s);function d(){var e=f.get(arguments);if(e===c){if(e=n.apply(null,arguments),l){var t=f.getEntries(),r=t.find((function(n){return l(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return d.clearCache=function(){return f.clear()},d}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function f(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var u,o=0,c={memoizeOptions:void 0},a=r.pop();if("object"===typeof a&&(c=a,a=r.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=c,f=l.memoizeOptions,d=void 0===f?t:f,p=Array.isArray(d)?d:[d],m=s(r),v=n.apply(void 0,[function(){return o++,a.apply(null,arguments)}].concat(p)),h=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return u=v.apply(null,n)}));return Object.assign(h,{resultFunc:a,memoizedResultFunc:v,dependencies:m,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return i}var d=f(l),p=function(n){return n.contacts.items},m=function(n){return n.contacts.isLoading},v=d([p,function(n){return n.filter}],(function(n,e){return Array.isArray(n)?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):[]})),h=t(3634),x="ContactListItem_item__UAAix",y=t(184),g=function(n){var e=n.contact,t=(0,u.I0)();return(0,y.jsxs)("li",{className:x,children:[e.name,(0,y.jsx)("button",{onClick:function(){t((0,h.GK)(e.id))},children:"Delete"})]},e.id)},b="ContactList_list__csErn",j=function(){var n=(0,u.v9)(v);return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("ul",{className:b,children:n.map((function(n){return(0,y.jsx)(g,{contact:n},n.id)}))})})},_=t(1686),C=t.n(_),k=t(5705),w=t(6727),A=w.Ry({name:w.Z_().required("Required"),number:w.Rx().required("Required")}),N=function(n){var e=n.handleCloseModal,t=(0,u.I0)(),r=(0,u.v9)(p);return(0,y.jsx)(k.J9,{initialValues:{name:"",number:""},validationSchema:A,onSubmit:function(n,i){var u=i.setSubmitting,o=i.resetForm,c=n.name,a=n.number,l={name:c,number:a};r.find((function(n){return n.name.toLowerCase()===c.toLowerCase()}))?C().Notify.failure("".concat(c," is already in contacts")):(t((0,h.uK)(l)),o(),e()),u(!1)},children:function(n){var e=n.isSubmitting;return(0,y.jsxs)(k.l0,{children:[(0,y.jsxs)("label",{children:["Name",(0,y.jsx)(k.gN,{type:"text",name:"name"}),(0,y.jsx)(k.Bc,{name:"name",component:"div"})]}),(0,y.jsxs)("label",{children:["Number",(0,y.jsx)(k.gN,{type:"tel",name:"number"}),(0,y.jsx)(k.Bc,{name:"number",component:"div"})]}),(0,y.jsx)("button",{type:"submit",disabled:e,children:"Add contact"})]})}})},F=t(3165),R=function(){var n=(0,u.I0)();return(0,y.jsxs)("label",{children:["Find contacts by name",(0,y.jsx)("input",{type:"text",name:"filter",onChange:function(e){n((0,F.T)(e.target.value))}})]})},Z="ContactForm_overlay__7064Q",q="ContactForm_form-container__f0Wf3",E=t(245);function S(){var n=(0,u.I0)(),e=(0,u.v9)(m),t=(0,i.useState)(!1),c=(0,r.Z)(t,2),a=c[0],l=c[1];(0,i.useEffect)((function(){n((0,h.yF)())}),[n]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o.q,{children:(0,y.jsx)("title",{children:"Your contacts"})}),(0,y.jsxs)(E._R,{children:[(0,y.jsx)("button",{type:"button",onClick:function(){l(!0)},children:"Add Contact"}),a&&(0,y.jsx)("div",{className:Z,children:(0,y.jsx)("div",{className:q,children:(0,y.jsx)(N,{handleCloseModal:function(){l(!1)}})})}),(0,y.jsx)("div",{children:e&&"Request in progress..."}),(0,y.jsx)(R,{}),(0,y.jsx)(j,{})]})]})}}}]);
//# sourceMappingURL=701.89be7eaa.chunk.js.map