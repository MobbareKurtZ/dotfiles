"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[8785],{47585:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var c=a(84875),r=a.n(c),t=a(97533),n=a(13803),l=a(59496),h=a(31752),i=a(2988),o=a(34463),d=a(37773),g=a(99714),u=a(30549),p=a(22128),j=a(79448);const x="Ul_eSpTV7OKDhvXcgfzw",f="HFNTjI36ujrPacyLOwTT";var y=a(4637);const v=()=>{const{searchHistory:e,clearSearchHistory:s}=(0,j.u)(),a=(0,h.s0)(),{spec:c,logger:r,UBIFragment:t}=(0,u.fU)(o.createDesktopRecentSearchesEventFactory,{data:{uri:"spotify:app:recent-searches"}}),v=(0,l.useMemo)((()=>c.recentSearchesCardsFactory()),[c]),b=(0,l.useCallback)((()=>{const e=c.clearButtonFactory().hitClearRecentSearches();r.logInteraction(e),s(),a("/search")}),[s,r,a,c]),k=(0,l.useCallback)((c=>{const r=e.length;s(c),1===r&&a("/search")}),[s,a,e.length]);return 0===e.length?null:(0,y.jsxs)("div",{className:x,children:[(0,y.jsx)(t,{spec:v,children:(0,y.jsx)(p.P,{title:n.ag.get("search.title.recent-searches"),showAll:!0,children:e.map(((e,s)=>(0,y.jsx)(g.ZP,{index:s,value:"search-history",children:(0,y.jsx)(d.q,{clearSearchHistory:k,entity:e,index:s})},e.uri)))})}),(0,y.jsx)("button",{onClick:b,className:f,children:(0,y.jsx)(i.D,{variant:"mestoBold",children:n.ag.get("search.clear-recent-searches")})})]})};var b=a(54940),k=a(94190),w=a(37738);const m=()=>{const e=(0,t.W6)(b.Dzq);return(0,y.jsxs)(g.ZP,{value:"search-page",children:[(0,y.jsx)(k.$,{children:n.ag.get("search.page-title")}),(0,y.jsx)("div",{className:r()("contentSpacing",{[w.Z.narrowPage]:e}),id:"searchPage",children:(0,y.jsx)(v,{})})]})}}}]);
//# sourceMappingURL=xpui-routes-recent-searches.js.map