!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let a=function(){const e=document.getElementById("content");!function(){const t=document.createElement("header"),n=document.createElement("div"),a=document.createElement("div"),c=document.createElement("h1");c.className="title",c.innerHTML="Fantasy Restaurant";const o=document.createElement("h2");o.className="sub-title",o.innerHTML="Where taste is unreal";for(let c=0;c<4;c++){const o=["fab fa-twitter","fab fa-facebook","fab fa-pinterest","fab fa-google-plus"],r=document.createElement("a"),l=document.createElement("i");a.className="social-icons",l.className=o[c];let d=document.createAttribute("href");d.value="#",r.setAttributeNode(d),r.appendChild(l),a.appendChild(r),n.appendChild(a),t.appendChild(n),e.appendChild(t);for(let e=0;e<4;e++);}n.appendChild(c),n.appendChild(o)}(),function(){const t=document.createElement("div");t.className="menu-container";const n=document.createElement("div");n.className="menu-icon",t.appendChild(n),e.appendChild(t);for(let e=0;e<3;e++){const t=["bar1","bar2","bar3"],a=document.createElement("div");n.appendChild(a),a.className=t[e]}const a=document.querySelector(".menu-icon");let c=!1,o=!1;a.addEventListener("click",()=>{const e=document.querySelectorAll(".nav-bar li");o?o&&(e.forEach(e=>{e.classList.add("nav-open")}),o=!1):(e.forEach(e=>{e.classList.remove("nav-open")}),o=!0),c?(a.classList.remove("change"),c=!1):(a.classList.add("change"),c=!0)})}(),function(){const t=document.createElement("nav"),n=document.createElement("ul");for(let e=0;e<6;e++){const t=["Home","About","Menu","Blog","Reservation","Contacts"],a=document.createElement("li"),c=document.createElement("a");c.innerHTML=t[e],a.appendChild(c),n.appendChild(a),a.className="nav-open"}t.className="nav-bar",t.appendChild(n),e.appendChild(t)}(),function(){const t=document.createElement("div");t.className="pricing";const n=["../src/images/blur_img1.jpg","../src/images/blur_img2.jpg","../src/images/blur_img3.jpg"],a=["25.99","38.99","50.99"],c=["magna non nunc","terto nomino","metus feugiat"];for(let e=0;e<3;e++){const o=document.createElement("a");o.className="block1";const r=document.createAttribute("href");r.value="#",o.setAttributeNode(r);const l=document.createElement("img"),d=document.createElement("span");d.className="price";const i=document.createElement("span"),u=document.createElement("span"),s=document.createElement("small");s.innerHTML="$",i.innerHTML=c[e];const m=document.createAttribute("src"),p=document.createAttribute("alt");p.value=" ",l.setAttributeNode(p),m.value=n[e],l.setAttributeNode(m),u.innerHTML=a[e],u.appendChild(s),d.appendChild(i),d.appendChild(u),o.appendChild(l),o.appendChild(d),t.appendChild(o)}e.appendChild(t)}()}();window.addEventListener("DOMContentLoaded",a)}]);