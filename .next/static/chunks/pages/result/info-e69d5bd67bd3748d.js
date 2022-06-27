(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[191],{2416:function(e,r,t){"use strict";t.d(r,{r:function(){return G}});var n=t(7294),o=t(9877);const[s,l]=function(e){const r=(0,n.createContext)(e);return[r.Provider,function(e){const t=(0,n.useContext)(r),[o]=e.split(".");if(!t)throw new Error(`${e} component was rendered outside of ${o} component context`);return t}]}(null);var i=t(7447),a=t(8067),f=Object.defineProperty,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&m(e,t,r[t]);if(c)for(var t of c(r))d.call(r,t)&&m(e,t,r[t]);return e};const h=(e,r)=>100/(r/e)+"%",v=(e,r)=>e?100/(r/e)+"%":void 0;function g({sizes:e,offsets:r,theme:t,columns:n,grow:o}){return i.j1.reduce(((s,l)=>("number"===typeof e[l]&&(s[`@media (min-width: ${t.breakpoints[l]+1}px)`]={flexBasis:h(e[l],n),flexShrink:0,maxWidth:o?"unset":h(e[l],n),marginLeft:v(r[l],n)}),s)),{})}var p=(0,a.k)(((e,{gutter:r,grow:t,offset:n,offsetXs:o,offsetSm:s,offsetMd:l,offsetLg:i,offsetXl:a,columns:f,span:c,xs:u,sm:d,md:m,lg:p,xl:y})=>({root:x({boxSizing:"border-box",flexGrow:t?1:0,padding:e.fn.size({size:r,sizes:e.spacing})/2,marginLeft:v(n,f),flexBasis:h(c,f),flexShrink:0,maxWidth:t?"unset":h(c,f)},g({sizes:{xs:u,sm:d,md:m,lg:p,xl:y},offsets:{xs:o,sm:s,md:l,lg:i,xl:a},theme:e,columns:f,grow:t}))}))),y=t(1267),b=Object.defineProperty,j=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,k=(e,r,t)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const O={offset:0,offsetXs:0,offsetSm:0,offsetMd:0,offsetLg:0,offsetXl:0};const C=(0,n.forwardRef)(((e,r)=>{const t=(0,o.Z3)("Col",O,e),{children:s,span:i,offset:a,offsetXs:f,offsetSm:c,offsetMd:u,offsetLg:d,offsetXl:m,xs:x,sm:h,md:v,lg:g,xl:b,className:C,classNames:N,styles:S,id:P}=t,X=((e,r)=>{var t={};for(var n in e)_.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&j)for(var n of j(e))r.indexOf(n)<0&&w.call(e,n)&&(t[n]=e[n]);return t})(t,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","className","classNames","styles","id"]),{columns:E,gutter:z,grow:L}=l("Grid.Col"),G=i||E,{classes:M,cx:W}=p({gutter:z,offset:a,offsetXs:f,offsetSm:c,offsetMd:u,offsetLg:d,offsetXl:m,xs:x,sm:h,md:v,lg:g,xl:b,grow:L,columns:E,span:G},{classNames:N,styles:S,name:"Col"});return!function(e){return"number"===typeof e&&e>0&&e%1===0}(G)||G>E?null:n.createElement(y.x,((e,r)=>{for(var t in r||(r={}))_.call(r,t)&&k(e,t,r[t]);if(j)for(var t of j(r))w.call(r,t)&&k(e,t,r[t]);return e})({className:W(M.root,C),ref:r},X),s)}));C.displayName="@mantine/core/Col";var N=(0,a.k)(((e,{justify:r,align:t,gutter:n})=>({root:{margin:-e.fn.size({size:n,sizes:e.spacing})/2,display:"flex",flexWrap:"wrap",justifyContent:r,alignItems:t}}))),S=Object.defineProperty,P=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,z=(e,r,t)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const L={gutter:"md",justify:"flex-start",align:"stretch",columns:12},G=(0,n.forwardRef)(((e,r)=>{const t=(0,o.Z3)("Grid",L,e),{gutter:l,children:i,grow:a,justify:f,align:c,columns:u,className:d,classNames:m,styles:x,id:h}=t,v=((e,r)=>{var t={};for(var n in e)X.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&P)for(var n of P(e))r.indexOf(n)<0&&E.call(e,n)&&(t[n]=e[n]);return t})(t,["gutter","children","grow","justify","align","columns","className","classNames","styles","id"]),{classes:g,cx:p}=N({gutter:l,justify:f,align:c},{classNames:m,styles:x,name:"Grid"});return n.createElement(s,{value:{gutter:l,grow:a,columns:u}},n.createElement(y.x,((e,r)=>{for(var t in r||(r={}))X.call(r,t)&&z(e,t,r[t]);if(P)for(var t of P(r))E.call(r,t)&&z(e,t,r[t]);return e})({className:p(g.root,d),ref:r},v),i))}));G.Col=C,G.displayName="@mantine/core/Grid"},4569:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/result/info",function(){return t(2512)}])},2512:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(2416),s=t(112),l=t(7294),i=t(8407);r.default=function(){var e=function(){var e=(0,i.S)().data,r=(0,i.e)();return{data:e,name:r.name,birth:r.birth}}(),r=e.data,t=e.name,a=e.birth,f=(0,l.useState)(),c=f[0],u=f[1];return(0,l.useEffect)((function(){console.log(r,t,a),u({name:t,birthplace:a.birthplace,lunar:r.lunar,lunar_ss:r.lunar_ss,solar:r.solar,year:r.year,month:r.month,day:r.day,time:r.time,year_kr:r.year_kr,month_kr:r.month_kr,day_kr:r.day_kr,time_kr:r.time_kr,res_str:r.res_str})}),[r,t,a]),(0,n.jsxs)(o.r,{children:[(0,n.jsx)(o.r.Col,{children:(0,n.jsxs)(s.x,{component:"div",children:["\uc774\ub984 : ",null===c||void 0===c?void 0:c.name]})}),(0,n.jsx)(o.r.Col,{children:(0,n.jsxs)(s.x,{component:"div",children:["\ucd9c\uc0dd\uc9c0 : ",null===c||void 0===c?void 0:c.birthplace]})}),(0,n.jsx)(o.r.Col,{children:(0,n.jsxs)(s.x,{component:"div",children:["\uc74c\ub825 \uc0dd\ub144\uc6d4\uc77c : ",null===c||void 0===c?void 0:c.lunar," ",null===c||void 0===c?void 0:c.lunar_ss,"\uc2dc"]})}),(0,n.jsx)(o.r.Col,{children:(0,n.jsxs)(s.x,{component:"div",children:["\uc591\ub825 \uc0dd\ub144\uc6d4\uc77c : ",null===c||void 0===c?void 0:c.solar]})}),(0,n.jsx)(o.r.Col,{children:(0,n.jsxs)(s.x,{children:["\uc5f0\uc8fc : ",null===c||void 0===c?void 0:c.year," ",null===c||void 0===c?void 0:c.year_kr]})}),(0,n.jsx)(o.r.Col,{children:(0,n.jsxs)(s.x,{children:["\uc6d4\uc8fc : ",null===c||void 0===c?void 0:c.month," ",null===c||void 0===c?void 0:c.month_kr]})}),(0,n.jsx)(o.r.Col,{children:(0,n.jsxs)(s.x,{children:["\uc77c\uc8fc : ",null===c||void 0===c?void 0:c.day," ",null===c||void 0===c?void 0:c.day_kr]})}),(0,n.jsx)(o.r.Col,{children:(0,n.jsxs)(s.x,{children:["\uc2dc\uc8fc : ",null===c||void 0===c?void 0:c.time," ",null===c||void 0===c?void 0:c.time_kr]})}),(0,n.jsx)(o.r.Col,{style:{height:"50vh",overflow:"scroll",backgroundColor:"#999999"},children:(0,n.jsx)(s.x,{color:"black",children:(null===c||void 0===c?void 0:c.res_str)&&c.res_str.split("\n").map((function(e,r){return(0,n.jsxs)(s.x,{children:[e," ",(0,n.jsx)("br",{})]},r)}))})})]})}},8407:function(e,r,t){"use strict";t.d(r,{S:function(){return l},e:function(){return s}});var n=t(6902),o=t(8597),s=(0,n.ZP)()((0,o.mW)((0,o.tJ)((0,o.XR)((function(e){return{name:"",setName:function(r){return e((function(){return{name:r}}))},gender:1,setGender:function(r){return e((function(){return{gender:r}}))},birth:{birthplace:"",calendar:"solar",birthDay:new Date,birthHour:new Date,intercalation:!1},setBirth:function(r){return e((function(){return{birth:r}}))}}})),{name:"user-storage",getStorage:function(){return sessionStorage}}))),l=(0,n.ZP)()((0,o.mW)((0,o.tJ)((0,o.XR)((function(e){return{data:{lunar:"",lunar_ss:"",solar:"",year:"",month:"",day:"",time:"",year_kr:"",month_kr:"",day_kr:"",time_kr:"",res_str:""},setSaju:function(r){return e((function(){return{data:r}}))}}})),{name:"saju-storage",getStorage:function(){return sessionStorage}})))}},function(e){e.O(0,[427,774,888,179],(function(){return r=4569,e(e.s=r);var r}));var r=e.O();_N_E=r}]);