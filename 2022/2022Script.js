var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");


openBtn.onclick = openNav;
closeBtn.onclick = closeNav;



/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}



/*Set the SlidShow in Cadre_1 */
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})


/*Set the SlidShow in Cadre_2 */
let next2 = document.querySelector('.next2')
let prev2 = document.querySelector('.prev2')

next2.addEventListener('click', function(){
    let items2 = document.querySelectorAll('.item2')
    document.querySelector('.slid2').appendChild(items2[0])
})

prev2.addEventListener('click', function(){
    let items2 = document.querySelectorAll('.item2')
    document.querySelector('.slid2').prepend(items[items2.length - 1])
})



var audio = document.getElementById("myAudio");
var playPauseBtn = document.getElementById("playPauseBtn");

// Appeler la fonction togglePlay au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    togglePlay();
});

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = "Pause";
    } else {
        audio.pause();
        playPauseBtn.innerHTML = "Play";
    }
}