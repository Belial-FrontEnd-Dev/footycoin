const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  menu.classList.toggle("active")
})

const arrowDown = document.querySelectorAll(".arrowDown")

arrowDown.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active")
  })
})