!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("Ur9Nn");var n=r("i3Qnx"),s=r("Ur9Nn"),c=r("8MBJY"),l=r("a2hTj"),o=(s=r("Ur9Nn"),document.querySelector(".js-pagination-lib")),d=function(){"use strict";function t(i){e(c)(this,t),this.arr=i,this.pageNum=1,this.pageAll=Math.round((this.arr.length-1)/5),this.pageSize=5,this.pagedArr}return e(l)(t,[{key:"paginate",value:function(e,t,i){return e.slice((t-1)*i,t*i)}},{key:"paginationRender",value:function(){this.arr.length<5?s.card.innerHTML=w(this.arr):(this.pagedArr=this.paginate(this.arr,this.pageNum,this.pageSize),s.card.innerHTML=w(this.pagedArr),u(this.pageNum,this.pageAll))}},{key:"pagLeft",value:function(){this.pageNum-=1,this.pagedArr=this.paginate(this.arr,this.pageNum,this.pageSize),s.card.innerHTML=w(this.pagedArr),u(this.pageNum,this.pageAll)}},{key:"pagRight",value:function(){this.pageNum+=1,this.pagedArr=this.paginate(this.arr,this.pageNum,this.pageSize),s.card.innerHTML=w(this.pagedArr),u(this.pageNum,this.pageAll)}},{key:"peakedPage",value:function(e){this.pageNum=Number(e),this.pagedArr=this.paginate(this.arr,this.pageNum,this.pageSize),s.card.innerHTML=w(this.pagedArr),u(this.pageNum,this.pageAll)}}]),t}();function u(e,t){var i="",a=e-1,r=e+1,n=e+2;e>1&&(i+="<li class='arrows arrow-left'>&#129144;</li>",i+='<li class="firstInt">1</li>'),e>4&&(i+='<li class="dots">...</li>'),e>3&&(i+='<li class="two-left">'.concat(e-2,"</li>")),e>2&&(i+="<li>".concat(a,"</li>")),i+="<li class='active'>".concat(e,"</li>"),t-1>e&&(i+="<li >".concat(r,"</li>")),t-2>e&&(i+="<li >".concat(n,"</li>")),t-3>e&&(i+='<li class="dots">...</li>'),t>e&&(i+='<li class="lastInt">'.concat(t,"</li>"),i+="<li class='arrows arrow-right'>&#129146</li>"),o.innerHTML=i}s=r("Ur9Nn"),s=r("Ur9Nn");var g=document.querySelector(".watched-btn-js"),h=document.querySelector(".queue-btn-js"),p=document.querySelector(".library-header__buttons"),f=new d(s.watche),v=new d(s.queue);function m(e,t,i){i.classList.add(e),t.classList.remove(e)}p.addEventListener("click",(function(e){var t=e.target;if(!t.classList.contains("library-header__btn"))return;t.classList.contains("queue-btn-js")&&(s.card.innerHTML="",v.paginationRender(),m("active",g,t));t.classList.contains("watched-btn-js")&&(s.card.innerHTML="",f.paginationRender(),m("active",h,t))})),o.addEventListener("click",(function(e){var t=Boolean(document.querySelector(".watched-btn-js.active")),i=e.target.textContent;if("LI"!==e.target.nodeName||"..."===i)return;"🡸"===i?t?f.pagLeft():v.pagLeft():"🡺"===i?t?f.pagRight():v.pagRight():t?f.peakedPage(i):v.peakedPage(i)}));var L=r("6VMVE"),b=document.querySelector("#main"),y=document.querySelector(".library-header"),N=document.querySelector("#slider");function w(e){return e&&e.length?(y.classList.remove("library-header-notification"),b.classList.remove("notification-bcg"),N.classList.remove("slider-bcg"),(0,n.createMovieCard)(e)):(b.classList.add("notification-bcg"),y.classList.add("library-header-notification"),N.classList.add("slider-bcg"),'<p class="notification-desc">\n            Nothing here yet, go back and select a movie.\n            </p>')}f.paginationRender(),s.card.addEventListener("click",L.showMovieLibrary);var q=document.querySelector(".watched-btn-js"),M=document.querySelector(".queue-btn-js");M.addEventListener("click",(function(){M.classList.add("active"),q.classList.remove("active")}))}();
//# sourceMappingURL=library.6bdfff80.js.map
