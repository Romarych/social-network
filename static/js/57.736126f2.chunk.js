"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[57],{57:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var s=t(8683),r=t(5987),i=t(2791),o=t(8687),a=t(1961),u=t(885),c="Pagination_page__pon+n",l="Pagination_selectedPage__SKRhW",g="Pagination_paginator__ki8fv",d="Pagination_btn__Hy26O",f=t(184),h=function(e){for(var n=e.currentPage,t=e.onPageChanged,s=e.totalItemsCount,r=e.pageSize,o=e.portionSize,a=void 0===o?10:o,h=Math.ceil(s/r),P=[],j=1;j<=h;j++)P.push(j);var p=Math.ceil(h/a),x=(0,i.useState)(1),_=(0,u.Z)(x,2),C=_[0],m=_[1],v=(C-1)*a+1,w=C*a;return(0,f.jsxs)("div",{className:g,children:[C>1&&(0,f.jsx)("button",{className:d,onClick:function(){m(C-1)},children:"<< Prev"}),P.filter((function(e){return e>=v&&e<=w})).map((function(e){return(0,f.jsx)("span",{className:"".concat(n===e&&l," ").concat(c),onClick:function(n){t(e)},children:e},e)})),p>C&&(0,f.jsx)("button",{onClick:function(){m(C+1)},children:"Next >>"})]})},P="User_users__wOmTD",j="User_photo__Q+DdV",p="User_flex__kIygj",x=t(4353),_=t(3504),C=function(e){var n=e.user,t=e.followingInProgress,s=e.unfollow,r=e.follow;return(0,f.jsxs)("div",{className:P,children:[(0,f.jsxs)("div",{className:j,children:[(0,f.jsx)(_.OL,{to:"/profile/"+n.id,children:(0,f.jsx)("img",{src:null!=n.photos.small?n.photos.small:x,alt:""})}),n.followed?(0,f.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){s(n.id)},children:"Unfollow"}):(0,f.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)},children:"Follow"})]}),(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("div",{children:n.name}),(0,f.jsx)("div",{children:n.status})]}),(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("div",{children:"u.location.city"}),(0,f.jsx)("div",{children:"u.location.country"})]})]})},m=["currentPage","onPageChanged","totalUsersCount","pageSize","users"],v=function(e){var n=e.currentPage,t=e.onPageChanged,i=e.totalUsersCount,o=e.pageSize,a=e.users,u=(0,r.Z)(e,m);return(0,f.jsxs)("div",{children:[(0,f.jsx)(h,{currentPage:n,onPageChanged:t,totalItemsCount:i,pageSize:o}),a.map((function(e){return(0,f.jsx)(C,(0,s.Z)({user:e},u),e.id)})),(0,f.jsx)(h,{currentPage:n,onPageChanged:t,totalItemsCount:i,pageSize:o})]})},w=t(6990),k=t(7781),S=function(e){return e.usersPage.users},z=function(e){return e.usersPage.pageSize},U=function(e){return e.usersPage.totalUsersCount},b=function(e){return e.usersPage.currentPage},N=function(e){return e.usersPage.isFetching},Z=function(e){return e.usersPage.followingInProgress},I=["currentPage","pageSize","getUsers","isFetching"],F=(0,k.qC)((0,o.$j)((function(e){return{users:S(e),pageSize:z(e),totalUsersCount:U(e),currentPage:b(e),isFetching:N(e),followingInProgress:Z(e)}}),{getUsers:a.Rf,follow:a.ZN,unfollow:a.fv}))((function(e){var n=e.currentPage,t=e.pageSize,o=e.getUsers,a=e.isFetching,u=(0,r.Z)(e,I);(0,i.useEffect)((function(){o(n,t)}),[n,t]);return(0,f.jsxs)(f.Fragment,{children:[a?(0,f.jsx)(w.Z,{}):null,(0,f.jsx)(v,(0,s.Z)((0,s.Z)({},u),{},{onPageChanged:function(e){o(e,t)},currentPage:n,pageSize:t}))]})}))}}]);
//# sourceMappingURL=57.736126f2.chunk.js.map