"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[999],{7999:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r=t(2791),i=t(8687),s=t(8683),o=t(885),l="Pagination_page__pon+n",a="Pagination_selectedPage__SKRhW",u="Pagination_paginator__ki8fv",c="Pagination_btn__Hy26O",f=t(184),d=function(n){for(var e=n.currentPage,t=n.onPageChanged,i=void 0===t?function(n){return n}:t,s=n.totalItemsCount,d=n.pageSize,g=n.portionSize,m=void 0===g?10:g,h=Math.ceil(s/d),v=[],x=1;x<=h;x++)v.push(x);var j=Math.ceil(h/m),p=(0,r.useState)(1),_=(0,o.Z)(p,2),P=_[0],w=_[1],b=(P-1)*m+1,C=P*m;return(0,f.jsxs)("div",{className:u,children:[P>1&&(0,f.jsx)("button",{className:c,onClick:function(){w(P-1)},children:"< Prev"}),v.filter((function(n){return n>=b&&n<=C})).map((function(n){return(0,f.jsx)("span",{className:"".concat(e===n&&a," ").concat(l),onClick:function(e){i(n)},children:n},n)})),j>P&&(0,f.jsx)("button",{onClick:function(){w(P+1)},children:"Next >"})]})},g="User_users__wOmTD",m="User_photo__Q+DdV",h="User_flex__kIygj",v="User_avatar__B37xj",x=t(8987),j=t(3504),p=function(n){var e=n.user,t=n.followingInProgress,r=n.unfollow,i=n.follow;return(0,f.jsxs)("div",{className:g,children:[(0,f.jsxs)("div",{className:m,children:[(0,f.jsx)(j.OL,{to:"/profile/"+e.id,children:(0,f.jsx)("img",{className:v,src:null!=e.photos.small?e.photos.small:x,alt:""})}),e.followed?(0,f.jsx)("button",{disabled:t.some((function(n){return n===e.id})),onClick:function(){r(e.id)},children:"Unfollow"}):(0,f.jsx)("button",{disabled:t.some((function(n){return n===e.id})),onClick:function(){i(e.id)},children:"Follow"})]}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("div",{children:e.name}),(0,f.jsx)("div",{children:e.status})]}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("div",{children:"u.location.city"}),(0,f.jsx)("div",{children:"u.location.country"})]})]})},_=t(5705),P=function(n){return n.usersPage.users},w=function(n){return n.usersPage.pageSize},b=function(n){return n.usersPage.totalUsersCount},C=function(n){return n.usersPage.currentPage},S=function(n){return n.usersPage.isFetching},k=function(n){return n.usersPage.followingInProgress},N=function(n){return n.usersPage.filter},y=function(n){return{}},I=function(n){var e=n.onFilterChanged,t=(0,i.v9)(N);return(0,f.jsx)("div",{children:(0,f.jsx)(_.J9,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:y,onSubmit:function(n,t){var r=t.setSubmitting,i={term:n.term,friend:"null"===n.friend?null:"true"===n.friend};e(i),r(!1)},children:function(n){var e=n.isSubmitting;return(0,f.jsxs)(_.l0,{children:[(0,f.jsx)(_.gN,{type:"text",name:"term"}),(0,f.jsxs)(_.gN,{name:"friend",as:"select",children:[(0,f.jsx)("option",{value:"null",children:"All"}),(0,f.jsx)("option",{value:"true",children:"Only followed"}),(0,f.jsx)("option",{value:"false",children:"Only unfollowed"})]}),(0,f.jsx)("button",{type:"submit",disabled:e,children:"Find"})]})}})})},U=t(2304),Z=t(6871),F=function(){var n=(0,i.v9)(b),e=(0,i.v9)(C),t=(0,i.v9)(w),o=(0,i.v9)(N),l=(0,i.v9)(P),a=(0,i.v9)(k),u=(0,i.I0)(),c=(0,Z.s0)(),g=(0,Z.TH)().search;(0,r.useEffect)((function(){var n=new URLSearchParams(g),r=e,i={term:o.term,friend:o.friend};n.get("page")&&(r=Number(n.get("page"))),n.get("term")&&(i=(0,s.Z)((0,s.Z)({},i),{},{term:n.get("term")})),n.get("friend")&&(i=(0,s.Z)((0,s.Z)({},i),{},{friend:"true"==n.get("friend")||"false"!=n.get("friend")&&null})),u((0,U.Rf)(r,t,i))}),[]),(0,r.useEffect)((function(){var n={};o.term&&(n.term=o.term),o.friend&&(n.friend=String(o.friend)),1!==e&&(n.page=String(e)),c("/users?".concat(e&&"page=".concat(e)).concat(o.term&&"&term=".concat(o.term)).concat("null"!=String(o.friend)?"&friend=".concat(o.friend):""))}),[o,e]);var m=function(n){u((0,U.fv)(n))},h=function(n){u((0,U.ZN)(n))};return(0,f.jsxs)("div",{children:[(0,f.jsx)(I,{onFilterChanged:function(n){u((0,U.Rf)(1,t,n))}}),(0,f.jsx)(d,{currentPage:e,onPageChanged:function(n){u((0,U.Rf)(n,t,o))},totalItemsCount:n,pageSize:t}),l.map((function(n){return(0,f.jsx)(p,{user:n,followingInProgress:a,unfollow:m,follow:h},n.id)}))]})},R=t(321),z=r.memo((function(){var n=(0,i.v9)(S);return(0,f.jsxs)(f.Fragment,{children:[n?(0,f.jsx)(R.Z,{}):null,(0,f.jsx)(F,{})]})}))}}]);
//# sourceMappingURL=999.4e9cf3d7.chunk.js.map