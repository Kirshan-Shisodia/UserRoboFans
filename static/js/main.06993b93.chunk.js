(this.webpackJsonprobofan=this.webpackJsonprobofan||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(3),r=n.n(s),i=(n(12),n(0)),a=function(e){var t=e.id,n=e.name,c=e.email;return Object(i.jsxs)("div",{className:"bg-gold dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(i.jsx)("img",{src:"https://robohash.org/".concat(t),alt:"robots images"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:n}),Object(i.jsx)("p",{children:c})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),s(e),r(e)}))},u=(n(14),n(4)),l=n(5),j=n(7),b=n(6),p=function(e){var t=e.robots;return Object(i.jsx)("div",{children:t.map((function(e,n){return Object(i.jsx)(a,{id:t[n].id,name:t[n].name,email:t[n].email})}))})},d=function(e){var t=e.searchChange;return Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"search",placeholder:"Search Robots",onChange:t,className:"pa2 ma1 ba b-green bg-light-blue"})})},f=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"RoboFans"})})},O=(n(15),function(e){return Object(i.jsx)("div",{style:{overflowY:"scroll",border:"",height:"550px"},children:e.children})}),x=(n(16),function(e){return Object(i.jsx)("div",{className:"popup--back",children:Object(i.jsx)("div",{className:"popup--content",children:Object(i.jsx)("div",{className:"popup--close",onClick:e.closePopup,children:"x"})})})}),g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.openPopup=function(){e.setState({popup:!0})},e.closePopup=function(){e.setState({popup:!1})},e.state={robots:[],searchfield:"",popup:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return c.length?Object(i.jsxs)(o.a.Fragment,{children:[this.state.popup?Object(i.jsx)(x,{closePopup:this.closePopup}):"",Object(i.jsxs)("div",{className:"tc",children:[Object(i.jsx)(f,{message:0===c.length?"No Record Found":"RoboFans"}),Object(i.jsx)("button",{onClick:this.openPopup,children:"Popup"}),Object(i.jsx)(d,{searchChange:this.onSearchChange}),Object(i.jsx)(O,{children:Object(i.jsx)(p,{robots:c})})]})]}):Object(i.jsx)("h1",{children:"Loading........"})}}]),n}(o.a.Component);r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),h()}},[[17,1,2]]]);
//# sourceMappingURL=main.06993b93.chunk.js.map