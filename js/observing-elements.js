// Observar elementos na tela

const observer = new IntersectionObserver(
  (entriers) => {
    Array.from(entriers).forEach((entry) => {
      if (entry.intersectionRatio >= 0.51) {
        entry.target.classList.add("active");
        enableItemLi("#" + entry.target.parentElement.id);
        showUpButton();
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

function showUpButton() {
  if (document.getElementById("sectInicio").classList.contains("active")) {
    // document.querySelector(".upButton").style.display = "none";
    document.querySelector(".upButton").classList.remove("onScreen");
  } else {
    // document.querySelector(".upButton").style.display = "flex";
    document.querySelector(".upButton").classList.add("onScreen");
  }
}

onload = function () {
  Array.from(document.querySelectorAll(".section")).forEach((element) => {
    observer.observe(element);
  });
};

function addTextHeader(idElement) {
  if (idElement == "#divInicio") {
    document.getElementById("textHeaderMobile").innerText = "Inicio";
  }
  if (idElement == "#divHabilidades") {
    document.getElementById("textHeaderMobile").innerText = "Habilidades";
  }
  if (idElement == "#divHabilidadesFuturas") {
    document.getElementById("textHeaderMobile").innerText =
      "Habilidades Futuras";
  }
  if (idElement == "#divProjetos") {
    document.getElementById("textHeaderMobile").innerText = "Projetos";
  }
  if (idElement == "#divContato") {
    document.getElementById("textHeaderMobile").innerText = "Contato";
  }
}
function removeTextHeader() {
  document.getElementById("textHeaderMobile").innerText = "";
}
