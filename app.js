const liste = document.querySelector(".icons");
const liEl = document.querySelectorAll(".icon");
const indicator = document.querySelector(".indicator");

liEl.forEach((item, index) => {
  item.addEventListener("click", () => {
    liste.querySelector(".active").classList.remove("active");
    item.classList.add("active");

    console.log(item.clientWidth);
    indicator.style.left = `${index * 64 + 25}px`;
  });
});
