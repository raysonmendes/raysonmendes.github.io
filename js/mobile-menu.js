function btnMenuClick() {
  if (document.querySelector(".btnMenu").classList.contains("active")) {
    document.querySelector(".btnMenu").classList.remove("active");
    document.querySelector(".mainNav").classList.remove("active");
  } else {
    document.querySelector(".btnMenu").classList.add("active");
    document.querySelector(".mainNav").classList.add("active");
  }
}
