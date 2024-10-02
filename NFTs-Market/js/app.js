const menu_btn = document.querySelector(".menu");
const mobile_nav = document.querySelector(".mobile_nav_list");

menu_btn.addEventListener("click", () => {
  mobile_nav.classList.toggle("toggle_navbar");
});
