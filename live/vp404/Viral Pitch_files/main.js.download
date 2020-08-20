;(function($){
    "use strict";
$(document).ready(function () {
    $('body').scrollspy({target: ".header-area", offset: 50});
    $(".client-logo-carousel").owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });

    $(".testimonial-carousel").owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        nav: false,
    });

    $(".case-study-carousel").owlCarousel({
        items: 5,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        dots: false,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>", ],
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            768: {
                items: 2,
                dots: true,
            },
            1000: {
                items: 3,
            },
            1500: {
                items: 5,
            }
        }
    });
    var owl = $('.case-study-btn');
    $('.prevbtn').on('click',function () {
        owl.trigger('next.owl.carousel');
    })
    $('.nextbtn').on('click',function () {
        owl.trigger('prev.owl.carousel', [300]);
    });

    $(".portfolio-list").owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        navText: ["<i class='far fa-long-arrow-alt-left'></i>", "<i class='far fa-long-arrow-alt-right'></i>", ],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            600: {
                items: 2,
                dots: true,
                nav: false,
            },
            1000: {
                items: 3,
            }
        }
    });

    $(".home-2-testimonial-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        navText: ["<i class='far fa-long-arrow-alt-left'></i>", "<i class='far fa-long-arrow-alt-right'></i>", ],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });


    $(".testimonial-7-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>", ],
    });

    $('.counter-number span').counterUp({
        delay: 10,
        time: 1000
    });

    $(".video-play-btn").magnificPopup({
        type: 'video'
    });

    new WOW().init({
        mobile: false,
    });

    $("#mainmenu-area").sticky({
        topSpacing: 0
    });

    $('.mainmenu').slicknav({
        label: '',
        duration: 500,
        prependTo: '',
        closedSymbol: '<i class="fa fa-angle-right"></i>',
        openedSymbol: '<i class="fa fa-angle-right"></i>',
        appendTo: '.header-area',
        menuButton: '#menu-button',
        closeOnClick: 'true' // Close menu when a link is clicked.
    });

    $(".preloader").fadeOut("slow");

    $('#mc-form').ajaxChimp({
        url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscribe .input-box, .subscribe .bttn-4').fadeOut();
            }
        }
    });

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000
    });

});
})(jQuery);