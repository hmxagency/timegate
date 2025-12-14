    document.documentElement.setAttribute(
      "data-theme",
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark"
    );

    function toggleTheme() {
      const root = document.documentElement;
      const current = root.getAttribute("data-theme");
      root.setAttribute("data-theme", current === "dark" ? "light" : "dark");
    }

  const header = document.querySelector(".header");
  const toggle = document.querySelector(".header__mobile-toggle");
  const nav = document.querySelector(".header__nav");
  const links = document.querySelectorAll(".header__link");

  // Hamburger aç / kapa
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    header.classList.toggle("is-open");
  });

  // Menü içindeyken tıklamayı engelle
  nav.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Linke tıklanınca kapansın
  links.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
    });
  });

  // Ekranın herhangi bir yerine tıklanınca kapansın
  document.addEventListener("click", () => {
    header.classList.remove("is-open");
  });