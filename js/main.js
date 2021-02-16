$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button__next",
      prevEl: ".hotel-slider__button__prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    autoplay: {
      delay: 2000,
    },
  });

  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button__next",
      prevEl: ".reviews-slider__button__prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    autoplay: {
      delay: 2000,
    },
  });

  // Parallax

  $(".newsletter-parallax").parallax({
    imageSrc: "img/newsletter-bg.jpg",
    speed: 0.7,
    naturalWidth: 2880,
    naturalHeight: 1913,
  });

  // При клике на кнопку "menu-button" появляется mobile menu
  // обращение на jQuery

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-buttom").toggleClass("navbar-buttom_visible");
  });

  // // При клике на кнопку "menu-button" появляется mobile menu
  // // обращение на js

  // var menuButton = document.querySelector(".menu-button");
  // menuButton.addEventListener("click", function () {
  //   console.log("Клик по кнопке меню");
  //   document
  //     .querySelector(".navbar-buttom")
  //     .classList.toggle("navbar-buttom_visible");
  // });

  // // При клике на кнопку появляется modal windows

  // var modalButton = $("[data-toggle=modal]");
  // var closeModalButton = $(".modal__close");
  // modalButton.on("click", openModal);
  // closeModalButton.on("click", closeModal);

  // function openModal() {
  //   var modalOverlay = $(".modal__overlay");
  //   var modalDialog = $(".modal__dialog");
  //   modalOverlay.addClass("modal__overlay_visible");
  //   modalDialog.addClass("modal__dialog_visible");
  // }
  // function closeModal(event) {
  //   event.preventDefault();
  //   var modalOverlay = $(".modal__overlay");
  //   var modalDialog = $(".modal__dialog");
  //   modalOverlay.removeClass("modal__overlay_visible");
  //   modalDialog.removeClass("modal__dialog_visible");
  // }

  // При клике на разные кнопки: data-href="#booking-modal" и data-href="#rating-modal"
  // открываются разные modal windows:id="booking-modal" и id="rating-modal"

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay_visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog_visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }

  // Обработка форм обратной связи (валидация)

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be at least 2 letters long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Please specify your phone number",
        },
      },
    });
  });

  // Маска для номера телефона

  $(document).ready(function () {
    $("#footer-phone").mask("+7 (999) 999-99-99");
  });
  $(document).ready(function () {
    $("#rating-modal-phone").mask("+7 (999) 999-99-99");
  });
  $(document).ready(function () {
    $("#booking-modal-phone").mask("+7 (999) 999-99-99");
  });

  // INITIALIZE AOS animation library

  AOS.init();

  // Lazyframe: ленивая загрузка Google Maps, Youtube, Vimeo

  lazyframe(".lazyframe");
});
