/*
<----------------------------------------------------->
  Variables
<----------------------------------------------------->
*/

// Header variables
let header = document.getElementById("head");
//  Selection Circles Variables
let BigCircle = document.getElementById("big-circle");
let BigCircle2 = document.getElementById("transition");
let images = [];
let actual_image = 0;
let circles = document.getElementsByClassName("circle");
//  Circles Automatic
var intercalar = false;

//  Slideshow variables
let slideIndex = 0;
let dotIndex = 1;

/*
<----------------------------------------------------->
  Scrolling Animations Speed
<----------------------------------------------------->
*/

AOS.init({
  duration: 500,
})

/*
<----------------------------------------------------->
  Header
<----------------------------------------------------->
*/


header.addEventListener( 'mousemove',function(e) {
  parallaxIt(e, ".slide", -100);
  parallaxIt(e, "#headBack", -30);
});

header.addEventListener( 'mouseout',function(e) {
  parallaxIt(e, ".slide", 0);
  parallaxIt(e, "#headBack", 0);
});

function parallaxIt(e, target, movement) {
  var $this = header;
  var relX = e.pageX - $this.offsetLeft;
  var relY = e.pageY - $this.offsetTop;

  TweenMax.to(target, 1, {
    x: (relX - $this.offsetWidth / 2) / $this.offsetWidth * movement,
    y: (relY - $this.offsetHeight / 2) / $this.offsetHeight * movement
  });
}

/*
<----------------------------------------------------->
  Slideshow
<----------------------------------------------------->
*/

function showSlides() {
  let i;
  let slides = document.getElementById("slide1").getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if(dotIndex >= dots.length){
    dotIndex = 0;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  dots[dotIndex].className += " active";
  dotIndex++;
  slideIndex++;
  
  if (slideIndex > slides.length-1) {
    slides[slideIndex-1].classList.remove("entry");
    slides[slideIndex-1].classList.add("exit");
    slideIndex = 1;
    for (i = 1; i < slides.length-1; i++) {
      slides[i].style.display = "none";  
    }
  }    
  
  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.remove("exit");
  slides[slideIndex].classList.add("entry");
  slides[slideIndex-1].classList.remove("entry");
  slides[slideIndex-1].classList.add("exit");
  
  setTimeout(showSlides, 3000); 
}


/*
<----------------------------------------------------->
  Selection Circles
<----------------------------------------------------->
*/

images.push("Images/relumbra.jpg");
images.push("Images/desarrollo.jpg");
images.push("Images/wayyu.jpg");
images.push("Images/animation.gif");

function ImageChange(){
  for(let i = 0; i < circles.length; i++){
    circles[i].addEventListener("mouseenter",Cambia(i));
  }

  function Cambia(i){
    return function() {
        if(intercalar){
          BigCircle.style.backgroundImage = `url(${images[i]})`;
          BigCircle2.style.opacity = 0;
        }
        else{
          BigCircle2.style.backgroundImage = `url(${images[i]})`;
          BigCircle2.style.opacity = 1;
        }
        intercalar = !intercalar;
        actual_image = i;
        clearInterval(Auto);
        Autochange();
        CircleSelected();
    }
  }
}

function CircleSelected(){
  for(let i = 0; i < circles.length; i++){
    circles[i].classList.remove("circle-selected");
  }
  circles[actual_image].classList.add("circle-selected");
}

/*
<----------------------------------------------------->
  Changing Circle Images Automaticaly
<----------------------------------------------------->
*/

function Autochange(){
  Auto = setInterval(function(){
    if(intercalar){
      BigCircle2.style.opacity = 0;

      if(images.length <= actual_image+1){
        BigCircle.style.backgroundImage = `url(${images[0]})`;
        actual_image = 0;
      }
      else{
        BigCircle.style.backgroundImage = `url(${images[actual_image+1]})`;
        actual_image++;
      }
    }else{
      BigCircle2.style.opacity = 1;

      if(images.length <= actual_image+1){
        BigCircle2.style.backgroundImage = `url(${images[0]})`;
        actual_image = 0;
      }
      else{
        BigCircle2.style.backgroundImage = `url(${images[actual_image+1]})`;
        actual_image++;
      }
    }
    intercalar = !intercalar;
    CircleSelected();
  },4000);
};

/*
<----------------------------------------------------->
  Proyects Section - Video height Adjust
<----------------------------------------------------->
*/

function videoheightAdjust(){
  var cw = document.querySelectorAll('.minivideo iframe');
  for(let i = 0; i < cw.length; i++){
    cw[i].style.height = (cw[i].offsetWidth)*0.5625 + "px";
  }
  
}

/*
<----------------------------------------------------->
  Hover Letter by Letter
<----------------------------------------------------->
*/

function LetterHover(){
  let div = document.getElementsByClassName("LetterHover");
  let Phrases = [];
  let PhareOut = [];

  for(let i = 0; i < div.length;i++){
    Phrases.push(div[i].textContent);
    div[i].innerHTML = '';
  }
  
  for(let i = 0; i < Phrases.length; i++){
    PhareOut.push(Phrases[i].split(''));
  }
  
  for(let j = 0; j < div.length; j++){
    for(let i = 0; i < PhareOut[j].length; i++){
      var tag = document.createElement("p");
      var text = document.createTextNode(PhareOut[j][i]);
      tag.appendChild(text);
      div[j].appendChild(tag);
    }
  }
  
  let JuanDaniel = document.querySelectorAll('.LetterHover p');

  for(let i = 0; i < JuanDaniel.length; i++){
    JuanDaniel[i].addEventListener("mouseover",function(e){ 
      JuanDaniel[i].classList.add("Saltarin");

      if(JuanDaniel[i+1] != null)
        JuanDaniel[i+1].classList.add("SemiSaltarin");

      if(JuanDaniel[i-1] != null)
        JuanDaniel[i-1].classList.add("SemiSaltarin");
    });
    
    JuanDaniel[i].addEventListener("mouseout",function(e){
      JuanDaniel[i].classList.remove("Saltarin");

      if(JuanDaniel[i+1] != null)
        JuanDaniel[i+1].classList.remove("SemiSaltarin");

      if(JuanDaniel[i-1] != null)
        JuanDaniel[i-1].classList.remove("SemiSaltarin");
    });
  }

  for(let i = 0; i < div.length; i++){
    div[i].addEventListener("click",function(e){
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }
}

function reportWindowSize() {
  videoheightAdjust();
}

/*
<----------------------------------------------------->
  Funtion Call
<----------------------------------------------------->
*/
// Refresh video height
window.onresize = reportWindowSize;
videoheightAdjust();
//Automatica Circle image change
Autochange();
//Select Circle image
ImageChange();
//Juan Daniel Hover
LetterHover();
//Slideshow
showSlides();
