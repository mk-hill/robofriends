(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){},19:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(7),o=n.n(i),l=(n(13),n(1)),m=n(2),c=n(4),s=n(3),u=n(5),d=function(e){var a=e.id,n=e.name,t=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow be shadow-5 tc"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))},h=function(e){var a=e.robots;return r.a.createElement("div",null,a.map(function(e,n){return r.a.createElement(d,{key:a[n].id,id:a[n].id,name:a[n].name,email:a[n].email})}))},b=function(e){e.searchField;var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:a}))},g=function(e){return r.a.createElement("div",{style:{marginTop:"20px",overflowY:"scroll",border:"2px solid rgba(12, 202, 196, .2)",borderRadius:"10px",height:"800px"}},e.children)},p=function(e){function a(e){var n;return Object(l.a)(this,a),(n=Object(c.a)(this,Object(s.a)(a).call(this,e))).state={hasError:!1},n}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong :("):this.props.children}}]),a}(t.Component),f=[{id:1,name:"Legion",username:"123e4567-e89b",email:"123e4567@geth-r.us"},{id:2,name:"C-3PO",username:"Antonette",email:"peeo@consular.org"},{id:3,name:"Liberty Prime",username:"Democracy_Non_Negotiable",email:"lib_prime@army.mil"},{id:4,name:"Bender",username:"Karianne",email:"2716057@industrial.bot"},{id:5,name:"Data",username:"Lore",email:"lore@fleet.fed"},{id:6,name:"GLaDOS",username:"Samantha",email:"os@aperture.sci"},{id:7,name:"Centurion",username:"Elwyn.Skiles",email:"cent_e89b@cylon.net"},{id:8,name:"Servitor",username:"Maxime_Nienow",email:"01@mechanicus.me"},{id:9,name:"HAL 9000",username:"Delphine",email:"hal@dana.ai"},{id:10,name:"HK-47",username:"hunter-killer",email:"hk-47@assassin.io"},{id:11,name:"EDI",username:"Enhanced.Defense.Intelligence",email:"edi@cerberus.biz"},{id:12,name:"Cyberking",username:"Cyberking",email:"king@cybermen.org"},{id:13,name:"Adjutant",username:"terran.adjutant",email:"adjutant@terran-confederacy.gov"},{id:14,name:"Nordom",username:"Moriah.Stanton",email:"Nordom@modron.mech"},{id:15,name:"Dalek Supreme",username:"Moriah.Stanton",email:"supreme@skaro.com"}],E=(n(15),function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(s.a)(a).call(this))).onSearchChange=function(a){e.setState({searchField:a.target.value})},e.state={robots:[],searchField:""},e}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState({robots:f})}},{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchField,t=a.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return a.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(p,null,r.a.createElement(h,{robots:t})))):r.a.createElement("h1",{className:"tc f1 mt5"},"Loading RoboFriends")}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.dc661f68.chunk.js.map