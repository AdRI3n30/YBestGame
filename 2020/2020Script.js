var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");


var sidenav2 = document.getElementById("bloc-V");
var openBtn2 = document.getElementById("openBtn2");


var sidenav3 = document.getElementById("bloc-Ja");
var openBtn3 = document.getElementById("openBtn3");


var sidenav4 = document.getElementById("bloc-Jo");
var openBtn4 = document.getElementById("openBtn4");



openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

openBtn2.onclick = openNav2;

openBtn3.onclick = openNav3;

openBtn4.onclick = openNav4;

/*Barre*/
/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

/*V*/

function openNav2() {
  if (sidenav3.classList.contains("active")){
    sidenav3.classList.remove("active");
  }
  if (sidenav4.classList.contains("active")){
    sidenav4.classList.remove("active");
}
  if (sidenav2.classList.contains("active")){
      sidenav2.classList.remove("active");
  }else{
      sidenav2.classList.add("active");
  }
}


/*Jackie*/
function openNav3() {
  if (sidenav2.classList.contains("active")){
    sidenav2.classList.remove("active");
  }
  if (sidenav4.classList.contains("active")){
    sidenav4.classList.remove("active");
  }
  if (sidenav3.classList.contains("active")){
      sidenav3.classList.remove("active");
  }else{
      sidenav3.classList.add("active");
  }
}


/*Johnny*/
function openNav4() {
  if (sidenav2.classList.contains("active")){
    sidenav2.classList.remove("active");
  }
  if (sidenav3.classList.contains("active")){
    sidenav3.classList.remove("active");
  }
  if (sidenav4.classList.contains("active")){
      sidenav4.classList.remove("active");
  }else{
      sidenav4.classList.add("active");
  }
}



