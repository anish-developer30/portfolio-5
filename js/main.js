const menuBtn = document.getElementById("menu");
const navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  colors.classList.remove("active");
};

const theme = document.getElementById("themes");
const colors = document.querySelector(".color-palette");

theme.onclick = () => {
  colors.classList.toggle("active");
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.querySelectorAll(".color-palette .color").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--gradient", color);
    colors.classList.remove("active");
  };
});

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
  colors.classList.remove("active");
};
