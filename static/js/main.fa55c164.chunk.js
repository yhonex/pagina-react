(this.webpackJsonpappreact=this.webpackJsonpappreact||[]).push([[0],{35:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){},49:function(e,c,t){},58:function(e,c,t){"use strict";t.r(c);var i=t(2),a=t(7),s=t.n(a),A=(t(35),t(36),t(37),t(13)),l=t(14),n=t(15),d=t(17),r=t(16),o=(t(38),t(10)),j=t(60),m=t(61),g=t(62),b=t(67),h=t(63),O=t(64),x=t(65),p=t(66),v=(t(49),t(1)),B=function(e){Object(d.a)(t,e);var c=Object(r.a)(t);function t(){var e;Object(A.a)(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=c.call.apply(c,[this].concat(a))).onClickDown=function(){o.animateScroll.scrollToBottom()},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".slider").children,c=document.querySelector(".prev"),t=document.querySelector(".next"),i=0;function a(){i===e.length-1?i=0:i++,s()}function s(){for(var c=0;c<e.length;c++)e[c].classList.remove("active");e[i].classList.add("active")}function A(){clearInterval(n),n=setInterval(l,8e3)}function l(){a()}c.addEventListener("click",(function(){!function(){0===i?i=e.length-1:i--;s()}(),A()})),t.addEventListener("click",(function(){a(),A()}));var n=setInterval(l,8e3)}},{key:"render",value:function(){return Object(v.jsxs)("section",{className:"home",id:"sl0",children:[Object(v.jsxs)("div",{className:"slider ",children:[Object(v.jsx)("div",{className:"slide slide-1 active",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"caption",children:[Object(v.jsx)("h1",{children:"Bienvenido"}),Object(v.jsx)("p",{children:"A mi pagina personal"}),Object(v.jsx)("p",{children:"Dale Click para iniciar el recorrido"}),Object(v.jsx)(o.Link,{activeClass:"active",to:"st1",spy:!0,smooth:!0,offset:-70,duration:500,children:"Empezar"})]})})}),Object(v.jsx)("div",{className:"slide slide-2",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"caption",children:[Object(v.jsx)("h1",{children:"Curriculum"}),Object(v.jsx)("p",{children:"Dale click para descargar mi CV "}),Object(v.jsx)("a",{href:"https://drive.google.com/uc?export=download&id=1ZKlvROSz_Zk4HF1mmP3Tu0At-kGLazXJ",children:"Descargar"})]})})}),Object(v.jsx)("div",{className:"slide slide-3",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"caption",children:[Object(v.jsx)("h1",{children:"GitHub"}),Object(v.jsx)("p",{children:"Dale click para ir a mi GitHub"}),Object(v.jsx)("a",{href:"https://github.com/yhonex",target:"_blank",rel:"noreferrer",children:"Ir a GitHub"})]})})}),Object(v.jsx)("div",{className:"slide slide-4",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"caption",children:[Object(v.jsx)("h1",{children:"Contacto"}),Object(v.jsx)("p",{children:"Te llevara a al area de contacto y redes sociales"}),Object(v.jsx)("a",{href:"#",onClick:this.onClickDown,children:"Contactame"})]})})})]}),Object(v.jsxs)("div",{className:"controls",children:[Object(v.jsx)("div",{className:"prev",children:"\u25c4"}),Object(v.jsxs)("div",{className:"next",children:["\u25ba"," "]})]})]})}}]),t}(i.Component),N=B,f=t.p+"static/media/js.cedf282f.gif",w=t.p+"static/media/html5.e7c45848.gif",u=t.p+"static/media/boostrap.361d61e8.gif",Q=t.p+"static/media/github3.4b4fe8de.gif",F=t.p+"static/media/ux.c0e02686.gif",C=t.p+"static/media/css.50226b12.gif",E=t.p+"static/media/mongodb.6878d6f4.gif",P=t.p+"static/media/node.16e1f502.gif",U=t.p+"static/media/php.6f756701.gif",I=t.p+"static/media/vue.2be0235b.png",R=t.p+"static/media/logor.6ce24c58.svg",Z=t.p+"static/media/angular.28ae4f3c.svg",k=t.p+"static/media/code1.e661e35e.png",G=function(e){Object(d.a)(t,e);var c=Object(r.a)(t);function t(e){var i;return Object(A.a)(this,t),(i=c.call(this,e)).onClickUp=function(){o.animateScroll.scrollToTop()},i.toggle=i.toggle.bind(Object(n.a)(i)),i.state={isOpen:!1},i}return Object(l.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(N,{}),Object(v.jsxs)(j.a,{expand:"md",id:"st0",sticky:"top",light:!0,className:"nav-b",children:[Object(v.jsx)("img",{src:k,alt:"code",className:"codeimg"}),Object(v.jsx)(m.a,{className:"text-nav1",children:"Mis Conocimientos"}),Object(v.jsx)(g.a,{onClick:this.toggle}),Object(v.jsxs)(b.a,{isOpen:this.state.isOpen,navbar:!0,children:[Object(v.jsxs)(h.a,{className:"mx-auto ",navbar:!0,children:[Object(v.jsx)(O.a,{children:Object(v.jsx)(x.a,{href:"https://drive.google.com/file/d/1ZKlvROSz_Zk4HF1mmP3Tu0At-kGLazXJ/view?usp=sharing",className:"text-nav",children:"Curriculum"})}),Object(v.jsx)(O.a,{children:Object(v.jsx)(x.a,{href:"https://github.com/yhonex",className:"text-nav",target:"_blank",children:"GitHub"})})]}),Object(v.jsx)(p.a,{color:"primary",size:"sm",className:"mx-auto",onClick:this.onClickUp,children:"subir"})]})]}),Object(v.jsx)("div",{className:"content-pllx",id:"st1",children:Object(v.jsx)("div",{children:Object(v.jsx)("h2",{className:"cont-text",children:"En la siguiente pagina podra ver mis conocimientos en los difentes ambitos de la programaci\xf3n web"})})}),Object(v.jsx)("section",{className:"text-pllx",children:Object(v.jsx)("div",{className:"bg-6",children:Object(v.jsx)("div",{className:"glitch","data-text":"Frontend",children:"Frontend"})})}),Object(v.jsx)("section",{className:"small-pllx",children:Object(v.jsxs)("div",{className:"pllx-gif",children:[Object(v.jsx)("img",{src:f,className:"imgif",alt:"jsgif"}),Object(v.jsx)("img",{src:C,className:"imgif",alt:"css"}),Object(v.jsx)("img",{src:w,className:"imgif",alt:"html5"}),Object(v.jsx)("img",{src:u,className:"imgif",alt:"boostrap"}),Object(v.jsx)("img",{src:F,className:"imgif",alt:"ux"})]})}),Object(v.jsx)("section",{className:"text-pllx",children:Object(v.jsx)("div",{className:"bg-6",children:Object(v.jsx)("div",{className:"glitch ajust","data-text":"Frameworks",children:"Frameworks"})})}),Object(v.jsx)("section",{className:"small-pllx3",children:Object(v.jsxs)("div",{className:"pllx-gif",children:[Object(v.jsx)("div",{className:"logov",children:Object(v.jsx)("img",{src:I,className:"imgif ",alt:"vue"})}),Object(v.jsx)("div",{className:"logor",children:Object(v.jsx)("img",{src:R,className:"imgif App-logor",alt:"logor"})}),Object(v.jsx)("div",{className:"logov",children:Object(v.jsx)("img",{src:Z,className:"imgif ",alt:"angular"})})]})}),Object(v.jsx)("section",{className:"text-pllx",children:Object(v.jsx)("div",{className:"bg-6",children:Object(v.jsx)("div",{className:"glitch","data-text":"Backend",children:"Backend"})})}),Object(v.jsx)("section",{className:"small-pllx2",children:Object(v.jsxs)("div",{className:"pllx-gif",children:[Object(v.jsx)("img",{src:P,className:"imgif",alt:"node"}),Object(v.jsx)("img",{src:E,className:"imgif",alt:"mongodb"}),Object(v.jsx)("img",{src:U,className:"imgif",alt:"php"}),Object(v.jsx)("img",{src:Q,className:"imgif",alt:"github3"})]})}),Object(v.jsx)("section",{className:"text-pllx",children:Object(v.jsx)("div",{className:"bg-6",children:Object(v.jsx)("div",{className:"glitch","data-text":"Contactos",children:"Contactos"})})}),Object(v.jsxs)("section",{className:"content-pllx2",id:"st4",children:[Object(v.jsx)("div",{children:Object(v.jsx)("h2",{className:"cont-text",children:"Podes contactarme en las siguientes redes sociales:"})}),Object(v.jsxs)("div",{className:"Contat-icon",children:[Object(v.jsx)(x.a,{href:"https://www.facebook.com/berserkert",target:"_blank",children:Object(v.jsx)("img",{src:"data:image/png;base64,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",classNam:"icon-img",alt:"face"})}),Object(v.jsx)(x.a,{href:"https://github.com/yhonex",target:"_blank",children:Object(v.jsx)("img",{src:"data:image/png;base64,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",classNam:"icon-img",alt:"github"})}),Object(v.jsx)(x.a,{href:"https://www.linkedin.com/in/diego-urbina-2a0742203/",target:"_blank",children:Object(v.jsx)("img",{src:"data:image/png;base64,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KzAxOjAwhwa9fQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNC0yOVQwOTowMTowNiswMTowMPZbBcEAAABGdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuNy44LTkgMjAxOS0wMi0wMSBRMTYgaHR0cDovL3d3dy5pbWFnZW1hZ2ljay5vcmdBe+LIAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OmhlaWdodAA1MTLA0FBRAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADUxMhx8A9wAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTU1NjUyNDg2NgT3fncAAAATdEVYdFRodW1iOjpTaXplADE2LjdLQkLZ4xEdAAAAUnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8uL3VwbG9hZHMvNTYvbWdxakxpNS8xOTA2L2ljb25maW5kZXItbGlua2VkaW4tNDU1MDg3NV8xMjEzMzgucG5ngUsPXgAAAABJRU5ErkJggg==",classNam:"icon-img",alt:"linkedin"})})]})]})]})}}]),t}(i.Component);var D=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(G,{})})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(c){var t=c.getCLS,i=c.getFID,a=c.getFCP,s=c.getLCP,A=c.getTTFB;t(e),i(e),a(e),s(e),A(e)}))};s.a.render(Object(v.jsx)(D,{}),document.getElementById("root")),M()}},[[58,1,2]]]);
//# sourceMappingURL=main.fa55c164.chunk.js.map