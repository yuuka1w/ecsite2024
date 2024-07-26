document.addEventListener("DOMContentLoaded", () => {
  const mainImg = document.getElementById("mainImg");
  const thumbBtns = document.querySelectorAll(".thumb-btn");

  thumbBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const img = this.querySelector("img");
      mainImg.src = img.src;
      mainImg.alt = img.alt;

      thumbBtns.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
