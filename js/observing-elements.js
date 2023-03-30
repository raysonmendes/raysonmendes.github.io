// Observar elementos na tela

const observer = new IntersectionObserver(
  (entriers) => {
    Array.from(entriers).forEach((entry) => {
      if (entry.intersectionRatio >= 0.7) {
        entry.target.classList.add("active");
        enableItemLi("#" + entry.target.parentElement.id);
      } else {
        entry.target.classList.remove("active");
        disableItemLi("#" + entry.target.parentElement.id);
      }
    });
  },
  {
    threshold: 0.7,
  }
);

function enableItemLi(idDiv) {
  Array.from(document.querySelectorAll(".main-nav-li")).forEach((navLi) => {
    if (navLi.children[0].getAttribute("href") == idDiv) {
      navLi.classList.add("active");
    }
  });
}
function disableItemLi(idDiv) {
  Array.from(document.querySelectorAll(".main-nav-li")).forEach((navLi) => {
    if (navLi.children[0].getAttribute("href") == idDiv) {
      navLi.classList.remove("active");
    }
  });
}

onload = function () {
  Array.from(document.querySelectorAll(".section")).forEach((element) => {
    observer.observe(element);
  });
};
