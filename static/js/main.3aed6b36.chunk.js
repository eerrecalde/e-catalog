(this.webpackJsonpecatalog=this.webpackJsonpecatalog||[]).push([[0],{28:function(e,t,a){e.exports=a(46)},29:function(e,t){!function(e){if(e.search){var t={};e.search.slice(1).split("&").forEach((function(e){var a=e.split("=");t[a[0]]=a.slice(1).join("=").replace(/~and~/g,"&")})),void 0!==t.p&&window.history.replaceState(null,null,e.pathname.slice(0,-1)+(t.p||"")+(t.q?"?"+t.q:"")+e.hash)}}(window.location)},39:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),i=a(9),o=a(10);var m=function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Not Found"),r.a.createElement("p",null,r.a.createElement("span",null,"Page not found.. Tried the"),r.a.createElement("a",{href:"/"}," /"),r.a.createElement("span",null," ?"))))},s=a(13),u=[{id:"GBP",symbol:"\xa3"},{id:"EUR",symbol:"\u20ac"},{id:"USD",symbol:"$"},{id:"ARP",symbol:"ar$"}],d=u[0];var p=function(e){var t=e.type,a=u.find((function(e){return e.id===t}))||d;return r.a.createElement("span",null,a.symbol)},g=a(23),v=a(24),f=a(3),h=function(e,t,a,r){var l=Object(n.useState)(e),c=Object(f.a)(l,2),i=c[0],o=c[1],m=!1;return{checked:i,handleInputChange:function(e){e.persist();var n,l="checkbox"===e.target.type?e.target.checked:e.target.value;o(l),(n=l)&&t&&!m?(m=!0,t()):a&&a(),r(n)}}};function E(e){var t=e.id,a=e.isChecked,n=e.onCheckChanged;var l=h(a,(function(){console.log("Checked")}),(function(){console.log("unchecked")}),(function(){n(t)})),c=l.checked,i=l.handleInputChange;return r.a.createElement("span",null,r.a.createElement("input",{type:"checkbox",checked:c,onChange:i,className:"sr-only",name:"favorite-".concat(t),id:"favorite-".concat(t)}),r.a.createElement("label",{className:"cursor-pointer",htmlFor:"favorite-".concat(t)},r.a.createElement(g.a,{className:"".concat(c?"text-danger":"text-secondary"," delivery-icon"),icon:v.a}),r.a.createElement("span",{className:"sr-only"},"Favourite")))}E.defaultProps={onCheckChanged:function(){}};var b=E,N=(a(39),{"catalog.item.external":"Purchase","catalog.item.view":"View Item"});function y(e){var t=e.id,a=e.favorite,n=e.onCheckChanged,l=e.title,c=e.price,o=e.description,m=e.url,u=e.imgUrl,d=e.translations,g=Object(s.a)({},N,{},d);return console.log("props",e),console.log("imgUrl",u),console.log("translationsNew",g),console.log("translations",d),r.a.createElement("div",{className:"card ee-card h-100","data-id":t},r.a.createElement("div",{className:"item-image-wrapper"},r.a.createElement("img",{src:u,className:"card-img-top",alt:"{title}"}),r.a.createElement("div",{className:"favorite-wrapper"},r.a.createElement(b,{id:t,isChecked:a,onCheckChanged:n}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex flex-column h-100"},r.a.createElement("h5",{className:"card-title"},l),r.a.createElement("p",{className:"card-text"},o),m?r.a.createElement("a",{href:m},g["catalog.item.external"]):"",r.a.createElement("div",{className:"card-text mb-0 pt-2 mt-auto d-flex justify-content-between"},r.a.createElement(i.b,{to:{pathname:"/item-view/".concat(t)}},g["catalog.item.view"]),r.a.createElement("span",null,r.a.createElement(p,{type:"GBP"}),c||0)))))}y.defaultProps={price:0,description:"",url:"",favorite:!1,onCheckChanged:function(){},imgUrl:"https://www.placehold.it/300x200",translations:N};var w=y;function C(e){var t=e.loading,a=e.error,n=e.items,l=e.favorites,c=e.onCheckChanged,i=e.translations;return r.a.createElement("div",{className:"container"},t?r.a.createElement("p",null,"Loading..."):"",a?r.a.createElement("p",null,a):"",!t&&n&&0===n.length?r.a.createElement("p",null,"No results for your query"):"",r.a.createElement("ul",{className:"row"},n.map((function(e){return r.a.createElement("li",{key:e.id,className:"col-12 col-xl-3 col-lg-4 col-sm-6 mb-3 align-self-stretch"},r.a.createElement(w,{id:e.id,title:e.title,description:e.description||void 0,price:e.price||void 0,url:e.url||void 0,imgUrl:e.imgUrl||void 0,translations:i,favorite:l.indexOf(e.id)>-1,onCheckChanged:c}))}))))}C.defaultProps={favorites:[],loading:!1,error:"",onCheckChanged:function(){},translations:{}};var k=C,x=[{id:"ac9ec1bd-fd4b-4447-a619-c1a70f5f54b6",title:"New itm 02",description:"Item 02 from eerrecalde",tags:null,url:"http://google.com/",imgUrl:"https://images.pexels.com/photos/3377538/pexels-photo-3377538.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",videos:["//www.youtube.com/embed/LvteUhmhpKc","//player.vimeo.com/video/22439234?title=0&byline=0"],price:30,owner:"121a3d8a-6239-4a5a-bd51-fe58689a0672"},{id:"377e3490-7031-412c-8e1a-4a22bcc65f19",title:"New item from user 01",description:"New item from user 01",tags:null,url:"http://google.com/",imgUrl:"https://images.freeimages.com/images/large-previews/58f/double-bass-1423720.jpg",price:300,owner:"f4c40a60-0312-450b-a2a7-f30761d781a7"}];var U=function(){var e=Object(o.f)().id;return console.log(e),r.a.createElement("div",{className:"catalog"},r.a.createElement(k,{items:x}))};var j=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"About")))},O=a(27),I=a(2),S=function(e,t){var a=Object(n.useState)(e),r=Object(f.a)(a,2),l=r[0],c=r[1];console.log("useFormInputHandle",e);return e.id&&!l.id&&(console.log("setInputs",e),c((function(){return Object(s.a)({},e)}))),{handleSubmit:function(e){e&&(e.preventDefault(),t())},setInputs:c,handleInputChange:function(e){e.persist(),c((function(){return Object(s.a)({},l,Object(I.a)({},e.target.name,e.target.value))}))},inputs:l}};function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.item,a=e.onSubmit,l=Object(O.a)(),c=l.register,i=l.handleSubmit,o=l.watch,m=l.errors;console.log("ITM",t);var s={title:"",description:"",price:0,url:"",imgUrl:""};console.log(o("example"));var u=Object(n.useState)(s),d=Object(f.a)(u,2),p=d[0],g=d[1],v=S({id:t.id,title:t.title||s.title,description:t.description||s.description,price:t.price||s.price,url:t.url||s.url,imgUrl:t.imgUrl||s.imgUrl},(function(){if(console.log("createItem?",h,p),h&&Object.keys(h).length){h.price&&"string"===typeof h.price&&(h.price=parseInt(h.price,10)),g(h);var e={};Object.keys(h).forEach((function(t){e[t]=h[t]||null})),""===h.title||h.id||(console.log("creatingItem",e),a({type:"create",item:e})),""!==h.title&&h.id&&(console.log("updating formItem",e),a({type:"update",item:e}))}}),[t]),h=v.inputs,E=v.setInputs,b=v.handleInputChange;function N(){E(s)}return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:i(a)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title *",r.a.createElement("input",{id:"title",name:"title",type:"text",value:h.title,onChange:b,className:"form-control","aria-describedby":"titleHelp",ref:c({required:!0})})),m.title&&r.a.createElement("div",{className:"invalid-feedback"},"This field is required"),r.a.createElement("small",{id:"titleHelp",className:"form-text text-muted"},"Title to display in the catalog")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description",r.a.createElement("textarea",{id:"description",name:"description",value:h.description,onChange:b,className:"form-control",ref:c}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"Price",r.a.createElement("input",{id:"price",name:"price",type:"number",value:h.price,onChange:b,className:"form-control",ref:c}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"url"},"Url",r.a.createElement("input",{id:"url",name:"url",type:"text",value:h.url,onChange:b,className:"form-control",ref:c}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"imgUrl"},"Image Url",r.a.createElement("input",{id:"imgUrl",name:"imgUrl",type:"text",value:h.imgUrl,onChange:b,className:"form-control",ref:c}))),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),r.a.createElement("button",{type:"button",className:"btn btn-danger ml-2",onClick:N},"Reset")))}F.defaultProps={item:{}};var P=F,T={};var q=function(){return r.a.createElement("div",{className:"item-create"},r.a.createElement(P,{item:T}))};a(43);function B(e){var t=e.title,a=e.price,n=e.description,l=e.url,c=e.imgUrl,i=e.videos;return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h4",null,t),r.a.createElement("h5",null,a),r.a.createElement("p",null,n),r.a.createElement("p",null,l),r.a.createElement("p",null,c)),r.a.createElement("div",null,i.map((function(e){return r.a.createElement("div",{className:"responsive-video",key:e},r.a.createElement("iframe",{title:"video_vimeo",src:e,width:"853",height:"479",frameBorder:"0",allowFullScreen:!0,webkitallowfullscreen:"",mozallowfullscreen:""}))}))))}B.defaultProps={price:0,description:"",url:"",imgUrl:"",videos:[]};var A=B;var D=[{path:"/catalog/:id",name:"Catalog",component:U},{path:"/",name:"About",component:j},{path:"/item-create",name:"Item Create",component:q,hidden:!0},{path:"/item-view/:id",name:"Item View",component:function(){var e=Object(o.f)().id,t=Object(n.useState)(x.find((function(t){return t.id===e}))),a=Object(f.a)(t,1)[0];return r.a.createElement("div",null,r.a.createElement(A,{title:a.title,price:a.price,description:a.description,url:a.url,imgUrl:a.imgUrl,videos:a.videos}))},hidden:!0},{path:"/item-update/:id",name:"Item Update",component:function(){var e=Object(o.f)().id,t=Object(n.useState)(x.find((function(t){return t.id===e}))),a=Object(f.a)(t,1)[0];return r.a.createElement("div",{className:"item-create"},r.a.createElement(P,{item:a}))},hidden:!0}];var H=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar mb-3 navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#/"},"App"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},D.map((function(e){var t=e.path,a=e.name;return e.hidden?"":r.a.createElement("li",{key:t,className:"nav-item"},r.a.createElement(i.c,{exact:"#/"===t,className:"nav-link",to:t},a))}))))),r.a.createElement(o.c,null,D.map((function(e){var t=e.path,a=e.component;return r.a.createElement(o.a,{exact:"/"===t,key:t,path:t,component:a})})),r.a.createElement(o.a,null,r.a.createElement(m,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44),a(45);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.3aed6b36.chunk.js.map