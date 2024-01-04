var video = document.getElementById("fullscreen-video");

function toggleFullScreen() {
    

    if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

document.getElementById("fullscreen-video").addEventListener("click", toggleFullScreen);


var redirectButton = document.getElementById("redirect-button");

video.addEventListener("ended", function() {
    redirectButton.style.display = "block";
    redirectButton.style.position = "absolute";  
});

function showButton() {
    redirectButton.style.display = "block";
    redirectButton.style.position = "absolute";  
}