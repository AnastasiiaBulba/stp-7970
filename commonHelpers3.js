import{S as l,E as d,N as a}from"./assets/vendor-81cc61c3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector("[data-backdrop]"),links:document.querySelectorAll(".modal-nav-link")};o.openModalBtn.addEventListener("click",c),o.closeModalBtn.addEventListener("click",c),o.links.forEach(n=>{n&&n.addEventListener("click",s)});function s(){o.modal.classList.add("is-hidden"),o.closeModalBtn.classList.add("is-hidden"),o.backdrop.classList.add("is-hidden")}function c(){o.modal.classList.toggle("is-hidden"),o.closeModalBtn.classList.toggle("is-hidden"),o.backdrop.classList.toggle("is-hidden")}})();new l(".howSwiper",{effect:"cards",grabCursor:!0,modules:[d],spaceBetween:0,cardsEffect:{perSlideOffset:6,perSlideRotate:1}});new l(".reviewsSwiper",{modules:[a],slidesPerView:1,spaceBetween:20,navigation:{nextEl:".reviews-swiper-button-next",prevEl:".reviews-swiper-button-prev"},allowTouchMove:!0,breakpoints:{1200:{slidesPerView:3,spaceBetween:30,allowTouchMove:!0}}});const i=document.getElementById("cookieModal"),u=document.getElementById("acceptCookies"),p=document.getElementById("declineCookies");localStorage.getItem("cookiesAccepted")?i.style.display="none":i.style.display="flex";u.addEventListener("click",function(){localStorage.setItem("cookiesAccepted","true"),i.style.display="none"});p.addEventListener("click",function(){i.style.display="none"});
//# sourceMappingURL=commonHelpers3.js.map
