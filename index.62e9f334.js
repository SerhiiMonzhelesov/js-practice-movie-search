!function(){var t=document.querySelector(".js-list"),n=document.querySelector(".js-btn"),e=498;function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n="https://api.themoviedb.org/3",e="/trending/movie/week",c="345007f9ab440e5b86cef51be6397df1";return fetch("".concat(n).concat(e,"?api_key=").concat(c,"&page=").concat(t)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))}function o(t){return t.map((function(t){var n=t.id,e=t.title,c=t.poster_path;return'<li class="js-item" data-id=\''.concat(n,"'>\n          <img src=\"https://image.tmdb.org/t/p/w400").concat(c,'" alt="').concat(e,'">\n          <h3>').concat(e,"</h3>\n        </li>")})).join("")}c().then((function(e){t.insertAdjacentHTML("beforeend",o(e.results)),n.hidden=!1})),n.addEventListener("click",(function(){c(e+=1).then((function(e){t.insertAdjacentHTML("beforeend",o(e.results)),e.page>=500&&(n.hidden=!0)}))}))}();
//# sourceMappingURL=index.62e9f334.js.map
