// const swiper = new Swiper('.mySwiper', {
//   speed: 400,
//   spaceBetween: 2,
//   centeredSlides: true
// });

let x = window.matchMedia("(max-width: 768px)");
myFunction(x);
function myFunction(x) {
  if (x.matches) {
    let swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      centeredSlides: false
    });
  } else {
    document.querySelector(".swiper-wrapper").classList.add("brands");
    document
      .querySelector(".swiper-wrapper")
      .classList.remove("swiper-wrapper");

    document.querySelector(".swiper").classList.remove("swiper", "mySwiper");

    document.querySelectorAll(".swiper-slide").forEach((el) => {
      el.classList.add("brands-high");
      el.classList.remove("swiper-slide");
    });
  }
}

document.getElementById("hideButton").addEventListener("click", function () {
  const child = window.matchMedia("(min-width: 769px)").matches ? 3 : 5;
  const brandButtons = document.querySelectorAll(
    `.brands-high:nth-last-child(-n+${child})`
  );

  brandButtons.forEach(function (button) {
    button.style.display = button.style.display === "flex" ? "none" : "flex";
  });
  this.textContent = this.textContent === "Скрыть" ? "Показать все" : "Скрыть";
  hideButton.classList.toggle("tap");

  document
    .querySelector(".hideButton::before")
    .classList.add("hideButton--clicked::before");
});