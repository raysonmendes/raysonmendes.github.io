const listLi = document.getElementsByClassName("main-nav-li");

// Observar elementos na tela
focusDiv = "";
const observer = new IntersectionObserver(
  (entriers) => {
    Array.from(entriers).forEach((entry) => {
      //   if ((entry.intersectionRatio >= 0.8) & (entry.intersectionRatio <= 1)) {
      if (entry.intersectionRatio == 1) {
        entry.target.classList.add("active");

        focusDiv = "#" + entry.target.parentElement.id;
      } else {
        entry.target.classList.remove("active");
      }
    });
    this.onload(activeItemLi());
    console.log(focusDiv);
  },
  {
    threshold: 1,
  }
);

function activeItemLi() {
  for (let index = 0; index < listLi.length; index++) {
    if (listLi[index].children[0].getAttribute("href") !== focusDiv) {
      listLi[index].classList.remove("active");
      console.log(
        "Removeu a classe active de " +
          listLi[index].children[0].getAttribute("href")
      );
    } else {
      listLi[index].classList.add("active");
      console.log(
        "Adicionou a classe active de " +
          listLi[index].children[0].getAttribute("href")
      );
    }
  }
}
onload = function () {
  Array.from(document.querySelectorAll(".section")).forEach((element) => {
    observer.observe(element);
  });
};
