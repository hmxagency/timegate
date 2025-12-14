document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".world-btn");
  const image = document.getElementById("worldImage");

  // Sayfa açılışında aktif olanı yükle
  const activeButton = document.querySelector(".world-btn.active");
  if (activeButton) {
    image.src = activeButton.dataset.image;
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const newImage = btn.dataset.image;

      // FADE OUT
      image.classList.add("fade-out");

      setTimeout(() => {
        image.src = newImage;

        // FADE IN
        image.onload = () => {
          image.classList.remove("fade-out");
        };
      }, 150); // CSS süresiyle aynı
    });
  });
});
