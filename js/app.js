const navbar = document.querySelector(".navbar");
const btn = document.querySelector(".iks");
btn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  btn.classList.toggle("close");
});
