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
});
