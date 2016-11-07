$(document).ready(function(){
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("slider-badge");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-white";
}


// past_visited sidemenu
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("past-visited-menu").style.width = "85vw";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("past-visited-menu").style.width = "0";
}
