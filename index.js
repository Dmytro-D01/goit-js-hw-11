import{a as m,S as d,i}from"./assets/vendor-B5nsgUv9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="54641243-abfc91c86f68821b6b62fe46a",g="https://pixabay.com/api/";function h(n){const t=new URLSearchParams({key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});return m.get(`${g}?${t}`).then(s=>s.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const t=n.map(({webformatURL:s,largeImageURL:o,tags:e,likes:r,views:a,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${a}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",t),y.refresh()}function L(){c.innerHTML=""}function S(){l.classList.add("is-visible")}function v(){l.classList.remove("is-visible")}const w=document.querySelector(".form");w.addEventListener("submit",P);function P(n){n.preventDefault();const t=n.currentTarget,s=t.elements["search-text"].value.trim();if(s===""){i.warning({message:"Please enter a search query!"});return}L(),S(),h(s).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(o=>{console.error(o),i.error({message:"Something went wrong. Try again later."})}).finally(()=>{v(),t.reset()})}
//# sourceMappingURL=index.js.map
