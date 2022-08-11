(() => {
  "use strict";
  let e = document.querySelector(".burger-open"),
    o = document.querySelector(".burger-menu__wrapper"),
    t = document.querySelector(".burger-close");
  document.querySelector(".wrapper");
  e.addEventListener("click", () => {
    o.classList.add("open"), document.body.classList.add("lock");
  }),
    t.addEventListener("click", () => {
      o.classList.remove("open"), document.body.classList.remove("lock");
    }),
    document.addEventListener("keydown", function (e) {
      27 === e.keyCode && o.classList.remove("open");
    });
})();
