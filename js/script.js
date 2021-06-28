//Cronometro
var target_date = new Date("february 15, 2022").getTime();

var dias, horas, minutos, segundos;

// var regressiva = document.getElementById("regressiva");

setInterval(function () {
  var current_date = new Date().getTime();
  var segundos_f = (target_date - current_date) / 1000;
  dias = parseInt(segundos_f / 86400);
  segundos_f = segundos_f % 86400;

  horas = parseInt(segundos_f / 3600);
  segundos_f = segundos_f % 3600;

  minutos = parseInt(segundos_f / 60);
  segundos = parseInt(segundos_f % 60);


  document.getElementById('dia').innerHTML = dias;
  document.getElementById('hora').innerHTML = horas;
  document.getElementById('minuto').innerHTML = minutos;
  document.getElementById('segundo').innerHTML = segundos;

}, 1000);


//slide Nossa História
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlidesHistory");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

//Menu Mobile

// eslint-disable-next-line no-unused-vars
function showMenu() {
  var x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}












