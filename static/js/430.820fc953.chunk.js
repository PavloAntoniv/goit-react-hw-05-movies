"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[430],{524:function(n,e,t){t.d(e,{OT:function(){return s},QY:function(){return o},Y5:function(){return p},oO:function(){return d},y:function(){return f}});var r=t(861),a=t(757),u=t.n(a),c=t(44),i="a57fdaebb49bb9a8644ea8edb5d726dc";c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},430:function(n,e,t){t.r(e),t.d(e,{Reviews:function(){return f}});var r,a=t(885),u=t(689),c=t(791),i=t(524),o=t(168),s=(0,t(444).ZP)("p")(r||(r=(0,o.Z)(["\n  padding: px;\n  text-align: center;\n  font-size: 30px;\n"]))),p=t(184),f=function(){var n=(0,u.UO)().movieId,e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],o=t[1];return(0,c.useEffect)((function(){(0,i.oO)(Number(n)).then((function(n){var e=n.results;return o(e)}))}),[n]),r<1?(0,p.jsx)(s,{children:"Sorry, we don't have any reviews!"}):(0,p.jsx)("div",{children:r.map((function(n){return(0,p.jsxs)("div",{children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Author:"})," ",n.author]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Content:"})," ",n.content]}),(0,p.jsx)("hr",{})]},n.id)}))})}}}]);
//# sourceMappingURL=430.820fc953.chunk.js.map