var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");


var ET = document.getElementById("block_ET");
var openBtn2 = document.getElementById("openBtn2");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;


openBtn2.onclick = openNav2;


/*Barre */

function openNav() {
  sidenav.classList.add("active");
}


function closeNav() {
  sidenav.classList.remove("active");
}


/*Button secret*/

function openNav2() {
  if (ET.classList.contains("active")){
    ET.classList.remove("active");
}else{
    ET.classList.add("active");
}
}


function goToHell() {
  document.body.style.animation = "fadeout 1s forwards";
  setTimeout(function() {
    window.location.href = "/YworstGame/YWorstGame.html";
  }, 1000);
}

