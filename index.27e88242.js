const e=document.querySelector(".js-list"),t=document.querySelector(".js-quard");let n=1;function r(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=345007f9ab440e5b86cef51be6397df1&page=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}function o(e){return e.map((({id:e,title:t,poster_path:n})=>`<li class="js-item" data-id='${e}'>\n          <img src="https://image.tmdb.org/t/p/w400${n}" alt="${t}">\n          <h3>${t}</h3>\n        </li>`)).join("")}r().then((n=>{e.insertAdjacentHTML("beforeend",o(n.results)),s.observe(t)}));const s=new IntersectionObserver((function(s,i){s.forEach((s=>{s.isIntersecting&&(n+=1,r(n).then((n=>{e.insertAdjacentHTML("beforeend",o(n.results)),n.page>=500&&i.unobserve(t)})))}))}),{root:null,rootMargin:"500px",threshold:0});
//# sourceMappingURL=index.27e88242.js.map
