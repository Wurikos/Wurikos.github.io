const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const comuted = getComputedStyle(items);

right.addEventListener("click", function(e){
e.preventDefault();
let currentRight = parseInt(comuted.right);

if (!currentRight) {
    currentRight = 0;
}

if (!currentRight < 10000) {
    items.style.right = currentRight + 1000 + "px";
}

});
left.addEventListener("click", function(e) {
    e.preventDefault();
    let currentRight = parseInt(computed.right);
  
    if (!currentRight) {
      currentRight = 0;
    }
  
    if (currentRight > 10000) {
      items.style.right = currentRight - 1000 + "px";
    }
  });

  

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
