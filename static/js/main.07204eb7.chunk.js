(this["webpackJsonp01-monster-roll-atack-app"]=this["webpackJsonp01-monster-roll-atack-app"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(0),c=n(1),r=n.n(c),o=n(3),a=n.n(o),i=(n(13),n(4)),u=n(5),l=n(7),h=n(6),j=(n(14),function(t){return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.monster.id,"?set=set2&size=180x180")}),Object(s.jsx)("h2",{children:t.monster.name}),Object(s.jsx)("p",{children:t.monster.email})]})}),d=(n(15),function(t){return Object(s.jsx)("div",{className:"card-list",children:t.monsters.map((function(t){return Object(s.jsx)(j,{monster:t},t.id)}))})}),m=(n(16),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).state={monsters:[],searchField:""},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){t.setState({monsters:e})}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.monsters,c=e.searchField,r=n.filter((function(t){return t.name.toLowerCase().includes(c.toLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("input",{type:"search",placeholder:"search monsters",onChange:function(e){t.setState({searchField:e.target.value})}}),Object(s.jsx)(d,{monsters:r})]})}}]),n}(c.Component)),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),s(t),c(t),r(t),o(t)}))};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),p()}],[[17,1,2]]]);
//# sourceMappingURL=main.07204eb7.chunk.js.map