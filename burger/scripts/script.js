slider();
function slider() {
 const sliderLeftButton = document.querySelector("#left");
 const sliderRightButton = document.querySelector("#right");
 const slider = document.querySelector("#items");
 const slides = document.querySelectorAll(".slider__elemm");
 const slide = document.querySelector(".slider__elemm");
 let minRight = 0;
 let step = slide.offsetWidth;
 let maxRight = (slides.length - 1) * slide.offsetWidth;
 let currentRight = 0;
 slider.style.right = currentRight;
 function leftMove() {
   if (currentRight > minRight) {
     currentRight -= step;
     slider.style.right = currentRight + "px";
   } else {
     currentRight = maxRight;
     slider.style.right = maxRight + "px";
   }
 }
 function rightMove() {
   if (currentRight < maxRight) {
     currentRight += step;
     slider.style.right = currentRight + "px";
   } else {
     currentRight = minRight;
     slider.style.right = minRight + "px";
   }
 }
 sliderLeftButton.addEventListener("click", function() {
    event.preventDefault();
    leftMove();
 });
 sliderRightButton.addEventListener("click", function() {
    event.preventDefault();
    rightMove();
 });
}

///////////////////////////////////////////////////
var hamburgerMenu = document.querySelector('#humbMenu');
var hamburgerButton = document.querySelector('#hamburgerButton');
var navlink = document.querySelector('.nav__link');

function openHamburgerMenu(){
    hamburgerMenu.classList.add('nav__active');
    hamburgerButton.classList.add('is-active');
}
function closeHamburgerMenu(){
    hamburgerMenu.classList.remove('nav__active');
    hamburgerButton.classList.remove('is-active');
}

hamburgerButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (hamburgerButton.classList.contains('is-active')){
        hamburgerMenu.classList.add('fadeOut');
        setTimeout(() => { 
            closeHamburgerMenu();
            hamburgerMenu.classList.remove('fadeOut');
            
        }, 400);
    }else {openHamburgerMenu();
    }
});

hamburgerMenu.addEventListener('click', function (event) {
    event.preventDefault();
    if (e.target.classList.contains('nav__link')){
        closeHamburgerMenu();
    }
});



///////////////////////////////////////
$(".accorderdeon-menu__elem").on("click", function(e){
    e.preventDefault();
    //$(".accorderdeon-menu__elem").removeClass("active");
    //$(this).addClass("active");
      $(this).toggleClass("active");
      
  
  });

//////////////////////////////////////////////////

$(".team__point").on("click", function(e){
    e.preventDefault();
     // $(".team__point").removeClass("active");
      //$(this).addClass("active");
      $(this).toggleClass("active");

      
      
  
  });


  /////////////////////////////////////////////////
  $(".reviews .btn").on("click", function(e){
    e.preventDefault();
    $(".popup").addClass("active");
      
});

$(".popup__close").on("click", function(e){
    e.preventDefault();
    $(".popup").removeClass("active");
      
});
 
 


/////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function(){


    ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [47.222078, 39.720349],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 12
            
        }); myMap.behaviors.disable('scrollZoom');
     
    }

});