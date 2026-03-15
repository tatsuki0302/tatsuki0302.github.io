document.addEventListener("DOMContentLoaded", function () {
  const pageTop = document.getElementById("js-page-top");
  if (pageTop) {
    pageTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // スローガンのトグル機能
  const sloganToggle = document.getElementById("js-slogan-toggle");
  const sloganContent = document.getElementById("js-slogan-content");
  const sloganIcon = sloganToggle ? sloganToggle.querySelector(".slogan-toggle-icon") : null;

  if (sloganToggle && sloganContent && sloganIcon) {
    sloganToggle.addEventListener("click", function () {
      sloganContent.classList.toggle("open");
      sloganIcon.classList.toggle("open");
    });
  }

  // ダークモードトグル機能
  const themeToggle = document.getElementById("js-theme-toggle");
  const themeIcon = themeToggle ? themeToggle.querySelector(".material-icons-outlined") : null;

  const applyTheme = (isDark) => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    if (themeIcon) {
      themeIcon.textContent = isDark ? "light_mode" : "dark_mode";
    }
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }
    // ダークモード用画像の差し替え
    document.querySelectorAll("img[data-dark-src]").forEach((img) => {
      img.src = isDark ? img.dataset.darkSrc : img.dataset.lightSrc;
    });
  };

  // localStorage から保存済みのテーマを読み込む
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme ? savedTheme === "dark" : prefersDark);

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const isLight = document.documentElement.getAttribute("data-theme") !== "dark";
      applyTheme(isLight);
      localStorage.setItem("theme", isLight ? "dark" : "light");
    });
  }
});
