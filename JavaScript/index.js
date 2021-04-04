var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
  
}







///defind the random number
let randomValu;
let discount;
let sale = [];

function randomNumber() {
  randomValu = Math.floor(Math.random() * 100000) + 1;
  return randomValu;
}
randomNumber();
if(randomValu<50000){
  discount='20%';
}
else{
  discount='40%';
}
localStorage.setItem('discount',randomValu);
swal(`you have ${discount} discount!`, `you can use the ${randomValu} code to get the discount for one Time ` , ""); 