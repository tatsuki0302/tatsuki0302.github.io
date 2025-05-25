// ページトップに戻るアニメーション
document.addEventListener("DOMContentLoaded", function () {
    const pageTop = document.getElementById("js-page-top");
    if (pageTop) {
      pageTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
  