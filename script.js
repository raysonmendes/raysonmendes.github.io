const fetchSvg = (image) => {
  fetch(image.src)
    .then((response) => response.text())
    .then((response) => {
      const span = document.createElement("span");
      span.innerHTML = response;
      const inlineSvg = span.getElementsByTagName("svg")[0];
      image.parentNode.replaceChild(inlineSvg, image);
      return true;
    });
};

const listLi = document.getElementsByClassName("main-nav-li");

// Observar elementos na tela
focusDiv = "";
const observer = new IntersectionObserver(
  (entriers) => {
    Array.from(entriers).forEach((entry) => {
      if ((entry.intersectionRatio >= 0.8) & (entry.intersectionRatio <= 1)) {
        entry.target.classList.add("active");

        focusDiv = "#" + entry.target.parentElement.id;

        for (let index = 0; index < listLi.length; index++) {
          if (listLi[index].children[0].getAttribute("href") == focusDiv) {
            listLi[index].classList.add("active");
          } else {
            listLi[index].classList.remove("active");
          }
        }
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.8,
  }
);
