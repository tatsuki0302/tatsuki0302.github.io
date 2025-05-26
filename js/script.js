// ページトップに戻るアニメーション
document.addEventListener("DOMContentLoaded", function () {
  const pageTop = document.getElementById("js-page-top");
  if (pageTop) {
    pageTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // PRESENTATIONS に番号を振る
  const presentationList = document.querySelectorAll('#presentation-list .work-item .work-name');
  presentationList.forEach((item, index) => {
    item.innerHTML = `[${index + 1}] ` + item.innerHTML;
  });

  // AWARDS に番号を振る
  const awardList = document.querySelectorAll('#award-list .work-item .work-name');
  awardList.forEach((item, index) => {
    item.innerHTML = `[${index + 1}] ` + item.innerHTML;
  });
});
