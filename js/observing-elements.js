// Observar elementos na tela

const observer = new IntersectionObserver(
  (entriers) => {
    Array.from(entriers).forEach((entry) => {
      if (entry.intersectionRatio >= 0.51) {
        entry.target.classList.add("active");
        enableItemLi("#" + entry.target.parentElement.id);
      } else {
        entry.target.classList.remove("active");
        disableItemLi("#" + entry.target.parentElement.id);
      }
    });
  },
  {
    threshold: 0.51,
  }
);

function enableItemLi(idDiv) {
  Array.from(document.querySelectorAll(".main-nav-li")).forEach((navLi) => {
    if (navLi.children[0].getAttribute("href") == idDiv) {
      navLi.classList.add("active");
      addTextHeader(idDiv);
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

function addTextHeader(idElement) {
  if (idElement == "#divInicio") {
    document.getElementById("textHeaderMobile").innerText = "Inicio";
    console.log("Inicio");
  }
  if (idElement == "#divHabilidades") {
    document.getElementById("textHeaderMobile").innerText = "Habilidades";
    console.log("Habilidades");
  }
  if (idElement == "#divHabilidadesFuturas") {
    document.getElementById("textHeaderMobile").innerText =
      "Habilidades Futuras";
    console.log("Habilidades Futuras");
  }
  if (idElement == "#divProjetos") {
    document.getElementById("textHeaderMobile").innerText = "Projetos";
    console.log("Projetos");
  }
  if (idElement == "#divContato") {
    document.getElementById("textHeaderMobile").innerText = "Contato";
    console.log("Contato");
  }
}
function removeTextHeader() {
  document.getElementById("textHeaderMobile").innerText = "";
}
