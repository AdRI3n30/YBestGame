let percent = 0;
let timer = setInterval(loading, 200);
function loading() {
  $(".loading-bar").css("width", percent + "%");
  percent += 1;
  if (percent > 100) {
    clearInterval(timer);
  }
}
