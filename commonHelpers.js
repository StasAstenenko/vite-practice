var m=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var a=(e,t,r)=>(m(e,t,"read from private field"),r?r.call(e):t.get(e)),c=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},P=(e,t,r,o)=>(m(e,t,"write to private field"),o?o.call(e,r):t.set(e,r),r);import"./assets/styles-384ca9c8.js";import{a as y,P as _,i as p}from"./assets/vendor-94e39ef7.js";var s,n,i;class ${constructor(){c(this,s,"https://api.unsplash.com");c(this,n,"gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58");c(this,i,"")}async getPopularPhotos(t){const r=`${a(this,s)}/search/photos?page=${t}&query=popular&per_page=12&orientation=portrait&client_id=${a(this,n)}`;try{const{data:o}=await y(r);return o}catch(o){console.log(o)}}async searchPhoto(t){const r=`${a(this,s)}/search/photos?page=${t}&query=${a(this,i)}&per_page=12&orientation=portrait&client_id=${a(this,n)}`;try{const{data:o}=await y(r);return o}catch(o){console.log(o)}}set query(t){P(this,i,t)}}s=new WeakMap,n=new WeakMap,i=new WeakMap;function g(e){return e.map(t=>`<li id="${t.id}" class="gallery__item"><img src="${t.urls.small}" alt="${t.alt_description}"></li>`).join("")}const l=new $,h=document.querySelector(".js-gallery"),q=document.getElementById("tui-pagination-container"),E=document.querySelector(".js-search-form"),f={totalItems:0,itemsPerPage:12,visiblePages:5,page:1},u=new _(q,f),d=u.getCurrentPage();l.getPopularPhotos(d).then(e=>{const t=g(e.results);h.innerHTML=t,u.reset(e.total)}).catch(e=>{console.log(e),p.error({message:"Error"})});u.on("afterMove",e=>{const t=e.page;l.getPopularPhotos(t).then(r=>{const o=g(r.results);h.innerHTML=o}).catch(r=>{console.log(r),p.error({message:"Error"})})});E.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements.query.value.trim();if(t===""){p.warning({message:"Enter photo name"});return}l.query=t;try{const r=await l.searchPhoto(d),o=g(r.results);h.innerHTML=o,u.reset(r.total)}catch(r){console.log(r)}});
//# sourceMappingURL=commonHelpers.js.map