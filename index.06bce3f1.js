!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i),i("lwvvG"),i("i3Qnx"),i("az1QL"),i("Ur9Nn");var o=i("Ur9Nn"),r=(document.querySelector(".form-js"),document.querySelector(".form-input"),document.querySelector(".form__notification"),i("6VMVE"));o.card.addEventListener("click",r.showMovieMain);var l=i("bpxeT"),s=i("2TvXO"),c=(o=i("Ur9Nn"),i("i3Qnx"));o=i("Ur9Nn");function d(e){localStorage.setItem(o.CURRENT_MOVIES,JSON.stringify(e)),o.card.innerHTML=(0,c.createMovieCard)(JSON.parse(localStorage.getItem(o.CURRENT_MOVIES)).results)}l=i("bpxeT"),s=i("2TvXO");var m=i("dIxxU"),h="https://api.themoviedb.org/3/search/movie",u="0b11624b950ea9c4284f61844023b09c";function p(e,t,n){return g.apply(this,arguments)}function g(){return(g=e(l)(e(s).mark((function t(n,a,i){var o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.default.get("".concat(h,"?api_key=").concat(u,"&query=").concat(a,"&page=").concat(n,"&language=").concat(i));case 3:return o=e.sent,e.abrupt("return",o.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(response.statusText);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var k=i("az1QL"),v=i("8nrFW"),f=(o=i("Ur9Nn"),i("kvC6y")),y=(f=i("kvC6y"),o=i("Ur9Nn"),document.querySelector(".lang__control")),L=document.querySelector(".lang"),b=document.querySelector(".form-input");console.log(y);var _="en-US";!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"english";if(null===e)return;e===_?("en",y.classList.remove("checked")):("uk",y.classList.add("checked"))}(localStorage.getItem(o.LANG)),L.addEventListener("click",(function(e){(e.target.classList.contains("lang__control")||e.target.classList.contains("lang__value"))&&y.classList.toggle("checked");y.classList.contains("checked")?(o.logo.textContent="Фільмотека",o.library.textContent="МОЯ БІБЛІОТЕКА",o.home.textContent="ГОЛОВНА",b.setAttribute("placeholder","Пошук фільмів"),"en",localStorage.setItem(o.LANG,"uk-UA")):(o.logo.textContent="Filmoteka",o.library.textContent="MY LIBRARY",o.home.textContent="HOME",b.setAttribute("placeholder","Movie search"),"uk",localStorage.setItem(o.LANG,_))}));var w=document.querySelector(".theme__control"),E=document.querySelector(".toolbar"),S=(document.querySelector(".js-pagination"),document.querySelector(".footer")),x=(document.querySelector(".card"),document.querySelector(".preloader")),D=document.querySelector(".lds-roller__dark"),O=document.querySelector(".lds-roller__light"),C="light-theme",A=localStorage.getItem(o.THEME);!function(){if(null===A)return;A===C?(D.classList.remove("dark-theme"),D.classList.add("light-theme"),O.classList.remove("dark-theme"),O.classList.add("light-theme"),x.classList.remove("dark-theme"),x.classList.add("light-theme"),S.classList.remove("dark-theme"),S.classList.add("light-theme"),document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),w.classList.remove("checked")):(D.classList.remove("light-theme"),D.classList.add("dark-theme"),O.classList.remove("light-theme"),O.classList.add("dark-theme"),x.classList.remove("light-theme"),x.classList.add("dark-theme"),S.classList.remove("light-theme"),S.classList.add("dark-theme"),document.body.classList.remove("light-theme"),document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme"),w.classList.add("checked"))}(),E.addEventListener("click",(function(e){(0,f.loaderOn)(),location.reload(),(e.target.classList.contains("theme__control")||e.target.classList.contains("theme__icon-svg")||e.target.classList.contains("theme__icon"))&&w.classList.toggle("checked");w.classList.contains("checked")?(D.classList.remove("dark-theme"),D.classList.add("light-theme"),O.classList.remove("dark-theme"),O.classList.add("light-theme"),x.classList.remove("dark-theme"),x.classList.add("light-theme"),S.classList.remove("light-theme"),S.classList.add("dark-theme"),document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme"),localStorage.setItem(o.THEME,"dark-theme")):(D.classList.remove("light-theme"),D.classList.add("dark-theme"),O.classList.remove("light-theme"),O.classList.add("dark-theme"),x.classList.remove("light-theme"),x.classList.add("dark-theme"),S.classList.remove("dark-theme"),S.classList.add("light-theme"),document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),localStorage.setItem(o.THEME,C));window.onload=(0,f.loaderOff)()}));var q=document.querySelector(".js-pagination"),I=document.querySelector(".card");function N(t,n){var a="",i=t-2,o=t-1,r=t+1,l=t+2;if(JSON.parse(localStorage.getItem("current_movies")).page,t>1&&(a+="<li class='arrows'>🡸</li>",a+="<li class='firstInt'>1</li>"),t>4&&(a+="<li class='dots'>...</li>"),t>3&&(a+="<li class='two-left'>".concat(i,"</li>")),t>2&&(a+="<li>".concat(o,"</li>")),a+="<li class='active'>".concat(t,"</li>"),n-1>t&&(a+="<li >".concat(r,"</li>")),n-2>t&&(a+="<li >".concat(l,"</li>")),n-3>t&&(a+="<li class='dots'>...</li>"),n>t&&(a+="<li class='lastInt'>".concat(n,"</li>"),a+="<li class='arrows'>🡺</li>"),q.innerHTML=a,w.classList.contains("checked"))e(v)(q.children).forEach((function(e){e.classList.toggle("dark")})),e(v)(I.children).forEach((function(e){e.classList.toggle("dark-card")}));else e(v)(I.children).forEach((function(e){e.classList.toggle("light-card")}))}f=i("kvC6y"),f=i("kvC6y"),o=i("Ur9Nn");var T=document.querySelector(".btn-up");function U(){var e=window.scrollY/20;window.scrollY>0&&(window.scrollBy(0,-e),setTimeout(U,0))}T.addEventListener("click",U),window.addEventListener("scroll",(function(){var e=window.scrollY,t=document.documentElement.clientHeight;e<t?T.classList.add("show"):T.classList.remove("show")}));var M,H,B=document.querySelector(".lang__control"),F=document.querySelector(".js-pagination"),Q=document.querySelector(".form-js"),j=document.querySelector(".form-input"),P=document.querySelector(".form__notification"),V=1;function X(){return(X=e(l)(e(s).mark((function t(n){var a,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=j.value.trim(),H=localStorage.getItem(o.LANG),a){e.next=5;break}return e.abrupt("return");case 5:return H=H?localStorage.getItem(o.LANG):"en-US",e.prev=6,e.next=9,p(1,a,H);case 9:if(0!==(i=e.sent).results.length){e.next=14;break}return P.style.visibility="visible",setTimeout((function(){P.style.visibility="hidden"}),5e3),e.abrupt("return");case 14:V=i.page,(0,f.loaderOn)(),d(i),window.onload=(0,f.loaderOff)(),M=a,N(i.page,i.total_pages),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(6),console.log("Error");case 25:case"end":return e.stop()}}),t,null,[[6,22]])})))).apply(this,arguments)}function Y(){return R.apply(this,arguments)}function R(){return R=e(l)(e(s).mark((function t(){var n,a,i=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>0&&void 0!==i[0]?i[0]:1,!M){e.next=12;break}return(0,f.loaderOn)(),e.next=6,p(n,M,H);case 6:return a=e.sent,V=a.page,window.onload=(0,f.loaderOff)(),e.abrupt("return",a);case 12:return(0,f.loaderOn)(),e.next=15,(0,k.fetchTrends)(n);case 15:return a=e.sent,window.onload=(0,f.loaderOff)(),V=a.page,e.abrupt("return",a);case 19:case"end":return e.stop()}}),t)}))),R.apply(this,arguments)}Y().then((function(e){B.classList.contains("checked")?(o.logo.textContent="Фільмотека",o.library.textContent="МОЯ БІБЛІОТЕКА",o.home.textContent="ГОЛОВНА"):(o.logo.textContent="Filmoteka",o.library.textContent="MY LIBRARY",o.home.textContent="HOME"),(0,f.loaderOn)(),d(e),V=e.page,window.onload=(0,f.loaderOff)(),N(e.page,e.total_pages)})),F.addEventListener("click",(function(e){if("LI"!==e.target.nodeName)return;if("..."===e.target.textContent)return;if("🡸"===e.target.textContent)Y(V-=1).then((function(e){d(e),N(e.page,e.total_pages),U()}));else if("🡺"===e.target.textContent)Y(V+=1).then((function(e){d(e),N(e.page,e.total_pages)})),U();else{Y(e.target.textContent).then((function(e){d(e),N(e.page,e.total_pages)})),U()}})),Q.addEventListener("submit",(function(e){return X.apply(this,arguments)})),i("6VMVE");var G=document.querySelector(".js-team-modal__open"),J=document.querySelector(".js-team__modal-backdrop"),Z=document.querySelector(".js-team");G.addEventListener("click",(function(){J.hidden=!1,console.log("click")})),J.addEventListener("click",(function(e){"BODY"!==e.target.parentElement.nodeName&&"BOTTON"!==e.target.parentElement.nodeName||(J.hidden=!0)})),document.addEventListener("keydown",(function(e){if("Escape"!==e.code)return;J.hidden=!0}));var z=[{picture:"https://media.licdn.com/dms/image/D4D03AQHNPYF8EF3i6Q/profile-displayphoto-shrink_800_800/0/1675282512217?e=1680739200&v=beta&t=DsUgNNUoiD68NLUygCjh_3bEXUkBKZPdPT-34XOoKH0",name:"Ivan",role:"Team lead",ghLink:"https://github.com/IvanDemchyk",linkedinLink:"https://www.linkedin.com/in/ivan-demchyk-999818264"},{picture:"https://media.licdn.com/dms/image/D4E03AQH9APjXxTywFA/profile-displayphoto-shrink_800_800/0/1674159244050?e=1680739200&v=beta&t=0oiI3PHhnr_cSzlUkyF1VXyVcgels7RnHUMCgP3gj6w",name:"Artem",role:"Scrum master",ghlink:"https://github.com/skyartartem",linkedinLink:"http://www.linkedin.com/in/artem-riabchych"},{picture:"https://media.licdn.com/dms/image/D4E35AQE-WKf-xR5ZLA/profile-framedphoto-shrink_800_800/0/1671191831476?e=1675926000&v=beta&t=b-e6VFK3fl64LzOwAkpMhI7ubd0oigH5CGPTXFDSssM",name:"Anastasia",role:"Senior developer",ghlink:"https://github.com/AnastasiiaHudymenko",linkedinLink:"https://www.linkedin.com/in/anastasia-gudymenko/"},{picture:"https://media.licdn.com/dms/image/D5603AQEfwhp09GBNvg/profile-displayphoto-shrink_800_800/0/1675282102451?e=1680739200&v=beta&t=vi9Ots_n9m_i_IPU6EImHwpP5O8FLa0gSBcJIOd1Yys",name:"Maryna",role:"developer",ghlink:"https://github.com/marinamelnik1105",linkedinLink:"https://www.linkedin.com/in/maryna-melnyk-27a6b5264"},{picture:"https://media.licdn.com/dms/image/C5603AQH46TKhOH5GqA/profile-displayphoto-shrink_800_800/0/1660087252778?e=1680739200&v=beta&t=f_b8DybaAJflHPyJ8dHUy7vHjC1aEPtjOOkKYp66hNw",name:"Serhii",role:"developer",ghlink:"https://github.com/Natoilad",linkedinLink:"https://www.linkedin.com/in/natoilad/"},{picture:"https://media.licdn.com/dms/image/D5603AQHyeXTxvje2iw/profile-displayphoto-shrink_800_800/0/1675335979745?e=1680739200&v=beta&t=FdFb9uRqumcTd7tyUr12sEFmixXLG4xolwjULycGWeA",name:"Volodymyr",role:"developer",ghlink:"https://github.com/Mar-Volo",linkedinLink:"https://www.linkedin.com/in/%D0%B2%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%BC%D0%B0%D1%80%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-b27788264/"},{picture:"https://media.licdn.com/dms/image/D4E03AQFCqttAWCnc6A/profile-displayphoto-shrink_800_800/0/1674143887712?e=1680739200&v=beta&t=IMXs0XyPbBp3wg5thqvDh0vlnZRPpmXh9m38bhwbkmQ",name:"Oleksandr",role:"developer",ghlink:"https://github.com/alexxxusachev888",linkedinLink:"https://www.linkedin.com/in/oleksandr-usachov/"},{picture:"https://media.licdn.com/dms/image/D4D03AQF2bWZN0jrQpQ/profile-displayphoto-shrink_800_800/0/1675331237256?e=1680739200&v=beta&t=w-m4igfnDVVzymmf9VMU_UrX-94XhgOO7ngPXTmyEPY",name:"Eugen",role:"developer",ghlink:"https://github.com/Eugene-Hlushak",linkedinLink:"https://www.linkedin.com/in/yevhenii-hlushak-33a018263/"},{picture:"https://media.licdn.com/dms/image/C5603AQFrZobU5YvMrw/profile-displayphoto-shrink_800_800/0/1526223699760?e=1680739200&v=beta&t=ZacaaPIOZ4cp7QI_mzFjh-SUO1PH_5bue4cacftvF3I",name:"Vladyslav",role:"developer",ghlink:"https://github.com/VVladyslav",linkedinLink:"https://www.linkedin.com/in/vladyslav-vasylyshyn-1366a3162/"},{picture:"https://media.licdn.com/dms/image/C4D03AQFd9nqd7ZFyhA/profile-displayphoto-shrink_800_800/0/1648660404399?e=1680739200&v=beta&t=h5QShvgCXyxYCh135_pL6JdaunJYD22JGE0X1_sP4Bo",name:"Vlad",role:"developer",ghlink:"https://github.com/0Integral",linkedinLink:"https://www.linkedin.com/in/vlad-vtoryhin/"}].map((function(e){return n=(t=e).picture,a=t.name,i=t.role,o=t.ghlink,r=t.linkedinLink,'<li class="team-member">\n  <img src='.concat(n,' alt="team members photo" class="team-member__photo"/>\n  <div class="team-member-card__footer">\n  <div class="team-member-card__caption">\n  <p class="team-member__name">').concat(a,'</p>\n  <p class="team-member__rol">').concat(i,"</p>\n  </div>\n  <a href=").concat(o,' class="team-member__github-link link" target="blank">GitHub</a>\n  <a href=').concat(r,' class="team-member__linkedin-link link" target="blank">LinkedIn</a>\n  </div>\n  </li>');var t,n,a,i,o,r})).join("");try{Z.insertAdjacentHTML("afterbegin",z)}catch(e){console.log(e)}}();
//# sourceMappingURL=index.06bce3f1.js.map
