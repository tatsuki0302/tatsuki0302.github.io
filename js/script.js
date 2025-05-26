document.addEventListener("DOMContentLoaded", function () {
  const pageTop = document.getElementById("js-page-top");
  if (pageTop) {
    pageTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // PRESENTATIONS に番号を振る
  const presentationItems = document.querySelectorAll('#presentation-list .work-name');
  presentationItems.forEach((item, index) => {
    if (!item.innerHTML.startsWith("[")) {
      item.innerHTML = `[${index + 1}] ` + item.innerHTML;
    }
  });

  // AWARDS に番号を振る
  const awardItems = document.querySelectorAll('#award-list .work-name');
  awardItems.forEach((item, index) => {
    if (!item.innerHTML.startsWith("[")) {
      item.innerHTML = `[${index + 1}] ` + item.innerHTML;
    }
  });
});
