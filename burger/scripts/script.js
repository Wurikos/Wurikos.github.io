
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

  hamburgerMenu.addEventListener("click", function(e) {
    e.preventDefault;
    if (e.target.classList.contains("nav__link")) {
      closeHamburgerMenu();
    }
   });







///////////////////////////////////////
$(".accorderdeon-menu__elem").on("click", function(e){
    e.preventDefault();
    if ( $(this).hasClass("active")){
    $(".accorderdeon-menu__elem").removeClass("active");
    } else{
    $(".accorderdeon-menu__elem").removeClass("active");
    $(this).addClass("active");}
    
  });

//////////////////////////////////////////////////

$(".team__point").on("click", function(e){
    e.preventDefault();
    if ( $(this).hasClass("active")){
      $(".team__point").removeClass("active");
      } else{
      $(".team__point").removeClass("active");
      $(this).addClass("active");} 
  });


  /////////////////////////////////////////////////
  $(".reviews .btn").on("click", function(e){
    e.preventDefault();
    $(".popup").addClass("active");
    $('html, body').css({
     overflow: 'hidden',
     height: '100%'
  });
      
});

$(".popup__close").on("click", function(e){
    e.preventDefault();
    $(".popup").removeClass("active");
    $('html, body').css({
     overflow: 'auto',
     height: 'auto'
  });
});
 
 //////////////////////////////////////////////////////

 const myForm = document.querySelector("#myForm");
 const order = document.querySelector("#order");
 const body = document.querySelector("body");
 order.addEventListener("click", function(event) {
  event.preventDefault();
  if (validateForm(myForm)) {
    let data = new FormData();
    data.append("name", myForm.elements.name.value);
    data.append("phone", myForm.elements.phone.value);
    data.append("comment", myForm.elements.comment.value);
    data.append("to", "my@gmail.com");
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(data);
    xhr.addEventListener("load", () => {
      if (xhr.response.status) {
        const element = document.createElement("div");
        body.appendChild(element);
        element.classList.add("message__modal");
        const element2 = document.createElement("div");
        element.appendChild(element2);
        element2.classList.add("message__send");
        const element3 = document.createElement("div");
        element2.appendChild(element3);
        element3.classList.add("message__text");
        element3.textContent = "Сообщение отправлено";
        const element4 = document.createElement("button");
        element2.appendChild(element4);
        element4.classList.add("btn");
        element4.textContent = "Закрыть";
        element4.addEventListener("click", function() {
          body.removeChild(element);
        });
      }
      order.disabled = false;
    });
  }
 });
 function validateForm(form) {
  let valid = true;
  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.phone)) {
    valid = false;
  }
  if (!validateField(form.elements.comment)) {
    valid = false;
  }
  return valid;
 }
 function validateField(field) {
  if (!field.checkValidity()) {
    field.nextElementSibling.textContent = field.validationMessage;
    return false;
  } else {
    field.nextElementSibling.textContent = "";
    return true;
  }
 };


/////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function(){

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
          center: [47.222078, 39.720349],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/contacts/map-marker.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/contacts/map-marker.svg',
            // Размеры метки.
            iconImageSize: [20, 20],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent = new ymaps.Placemark([80.661574, 70.573856], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/contacts/map-marker.svg',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-100, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      })
      ;
      myMap.behaviors.disable('scrollZoom');   
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});
$('#fullpage').fullpage({
  menu:'#myMenu'
});
});

///////////////////////////////////////////////////////////////



