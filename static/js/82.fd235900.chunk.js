"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[82],{524:function(n,e,r){r.d(e,{OT:function(){return u},QY:function(){return s},Y5:function(){return l},oO:function(){return d},y:function(){return p}});var t=r(861),o=r(757),a=r.n(o),i=r(44),c="a57fdaebb49bb9a8644ea8edb5d726dc";i.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,t.Z)(a().mark((function n(){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/trending/movie/day?api_key=".concat(c,"&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/search/movie?api_key=".concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},82:function(n,e,r){r.r(e),r.d(e,{MovieDetails:function(){return F}});var t,o,a,i,c,s,u,l,p,d=r(861),f=r(885),x=r(757),h=r.n(x),g=r(689),v=r(791),Z=r(524),b=r(558),m=r(168),k=r(444),w=(0,k.ZP)("div")(t||(t=(0,m.Z)(["\n  display: flex;\n  padding: 20px;\n  gap: 50px;\n  justify-content: center;\n  background-color: black;\n"]))),P=(0,k.ZP)("img")(o||(o=(0,m.Z)(["\n  display: block;\n"]))),j=(0,k.ZP)("div")(a||(a=(0,m.Z)(["\n  padding: 20px;\n  border: 2px solid black;\n  width: 600px;\n  background-color: white;\n"]))),y=(0,k.ZP)("h2")(i||(i=(0,m.Z)(["\n  text-align: center;\n  font-size: 35px;\n"]))),_=(0,k.ZP)("p")(c||(c=(0,m.Z)(["\n  font-size: 25px;\n"]))),z=(0,k.ZP)("h3")(s||(s=(0,m.Z)(["\n  font-size: 25px;\n"]))),S=(0,k.ZP)("p")(u||(u=(0,m.Z)(["\n  font-size: 20px;\n"]))),U=(0,k.ZP)("h3")(l||(l=(0,m.Z)(["\n  font-size: 25px;\n"]))),Y=(0,k.ZP)("p")(p||(p=(0,m.Z)(["\n  font-size: 25px;\n"]))),L=r(184),O=function(n){var e,r=n.movie,t=r.overview,o=r.title,a=r.release_date,i=r.genres,c=r.vote_average;return e=r.poster_path?"https://image.tmdb.org/t/p/w400/".concat(r.poster_path):"https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in",(0,L.jsxs)(w,{children:[(0,L.jsx)(P,{src:e,alt:o}),(0,L.jsxs)(j,{children:[(0,L.jsxs)(y,{children:['"',o,'"(',new Date(a).getFullYear(),")"]}),(0,L.jsxs)(_,{children:["User Score: ",Math.round(10*c),"%"]}),(0,L.jsx)(z,{children:"Overview"}),(0,L.jsx)(S,{children:t}),(0,L.jsx)(U,{children:"Genres"}),(0,L.jsx)(Y,{children:i.map((function(n){return n.name})).join(", ")})]})]})},F=function(){var n,e,r=(0,g.TH)(),t=(0,v.useState)(null),o=(0,f.Z)(t,2),a=o[0],i=o[1],c=(0,v.useState)(null),s=(0,f.Z)(c,2),u=s[0],l=s[1],p=(0,g.UO)().movieId,x=null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,v.useEffect)((function(){var n=function(){var n=(0,d.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,Z.Y5)(p);case 3:e=n.sent,i(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),l(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[p]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(b.fG,{children:[" ",(0,L.jsx)(b.Qj,{to:x,children:"Back to all movies"})]}),u&&(0,L.jsx)("div",{children:"Something wrong"}),a&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(O,{movie:a}),(0,L.jsxs)(b.tP,{children:[(0,L.jsx)(b.z_,{children:"Additiona information"}),(0,L.jsx)(b.LY,{to:"cast",state:r.state,children:"Cast"}),(0,L.jsx)(b.LY,{to:"reviews",state:r.state,children:"Reviews"})]})]})]}),(0,L.jsx)(v.Suspense,{fallback:null,children:(0,L.jsx)(g.j3,{})})]})}},558:function(n,e,r){r.d(e,{$L:function(){return C},H:function(){return M},LY:function(){return L},MA:function(){return z},OM:function(){return w},Qj:function(){return j},fG:function(){return O},kD:function(){return _},nf:function(){return k},qX:function(){return y},rS:function(){return P},tP:function(){return U},tk:function(){return S},vr:function(){return F},z_:function(){return Y}});var t,o,a,i,c,s,u,l,p,d,f,x,h,g,v,Z=r(168),b=r(444),m=r(731),k=(0,b.ZP)(m.rU)(t||(t=(0,Z.Z)(["\n  width: 400px;\n  background-color: black;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  text-decoration: none;\n  margin-bottom: 40px;\n  transition: scale 250ms linear, box-shadow 250ms linear;\n  &:hover {\n    scale: calc(1.03);\n    box-shadow: 0px 0px 20px 8px gray;\n  }\n  &:nth-last-child(-n + 4) {\n    margin-bottom: 0;\n  }\n"]))),w=(0,b.ZP)("div")(o||(o=(0,Z.Z)(["\n  padding: 50px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]))),P=(0,b.ZP)("h2")(a||(a=(0,Z.Z)(["\n  text-align: center;\n  font-size: 25px;\n  color: white;\n"]))),j=(0,b.ZP)(m.rU)(i||(i=(0,Z.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  border: 2px solid black;\n  background-color: black;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  :focus {\n    background-color: white;\n    color: black;\n  }\n"]))),y=(0,b.ZP)("button")(c||(c=(0,Z.Z)(["\n  font-size: 20px;\n  background-color: gray;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  border: 2px solid black;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  focus {\n    color: black;\n    background-color: white;\n  }\n"]))),_=(0,b.ZP)("form")(s||(s=(0,Z.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 20px;\n"]))),z=(0,b.ZP)("input")(u||(u=(0,Z.Z)(["\n  padding: 10px;\n  font-size: 20px;\n  outline: none;\n  border: 2px solid black;\n  border-radius: 5px;\n"]))),S=(0,b.ZP)("h1")(l||(l=(0,Z.Z)(["\n  text-align: center;\n  font-weight: 900;\n  font-size: 40px;\n"]))),U=(0,b.ZP)("div")(p||(p=(0,Z.Z)(["\n  padding: 50px;\n"]))),Y=(0,b.ZP)("h3")(d||(d=(0,Z.Z)(["\n  margin-top: 0;\n  font-size: 25px;\n"]))),L=(0,b.ZP)(m.OL)(f||(f=(0,Z.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  font-size: 25px;\n  color: black;\n  border-radius: 5px;\n  border: 2px solid black;\n  transition: color 250ms linear, background-color 250ms linear;\n  &:focus,\n  :hover {\n    color: white;\n    background-color: gray;\n  }\n  &.active {\n    color: white;\n    background-color: black;\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),O=(0,b.ZP)("div")(x||(x=(0,Z.Z)(["\n  padding: 20px;\n"]))),F=(0,b.ZP)("div")(h||(h=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),M=(0,b.ZP)("p")(g||(g=(0,Z.Z)(["\n  font-size: 40px;\n"]))),C=(0,b.ZP)(m.rU)(v||(v=(0,Z.Z)([""])))}}]);
//# sourceMappingURL=82.fd235900.chunk.js.map