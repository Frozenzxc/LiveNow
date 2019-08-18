var mainNav = document.querySelector('.main-nav');
var menuBtn = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

menuBtn.addEventListener('click', function() {
    if (mainNav.classList.contains('main-nav--closed')) {
        mainNav.classList.remove('main-nav--closed');
        mainNav.classList.add('main-nav--opened');
    } else {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
    }
});

var modalBlock = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal__overlay");
var modalOpenButton = document.querySelector(".modal__open-btn");

var modal = function(modalObj, modalOverlay) {
  modalObj.classList.toggle("modal--close");
  modalOverlay.classList.toggle("modal--close");
};

modalOpenButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal(modalBlock, modalOverlay);
});

modalOverlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal(modalBlock, modalOverlay);
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!modalBlock.classList.contains("modal-close")) {
      modal(modalBlock, modalOverlay);
    }
  }
});

ymaps.ready(function (){

  var myMap;

  myMap = new ymaps.Map("map", {
    center: [59.938631, 30.323055],
    zoom: 17,
    controls: []
  });

  myMap.behaviors.disable('scrollZoom');

  myMap.controls.add("zoomControl", {
    position: {top: 15, left: 15}
  });

  var myPlacemark = new ymaps.Placemark([59.938631, 30.323055] , {},
    { iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [66, 101],
      iconImageOffset: [-35, -96] });

  myMap.geoObjects.add(myPlacemark);

});
