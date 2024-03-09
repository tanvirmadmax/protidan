(function ($) {
    "use strict";
    $(document).ready(function () {

        /*
       Jquery Mobile Menu
       ============================*/
        $('#main-menu').meanmenu({
            meanMenuContainer: '.mobile-nav-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="bi bi-plus-lg"></i>'],
        });

        /*
       Jquery Sidebar Toggle
       ============================*/
        $(".mobile-menu-toggle-btn").on("click", function () {
            $(".menu-sidebar-area").addClass("active");
            $(".body-overlay").addClass("active");
        });
        $(".menu-sidebar-close-btn").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });
        $('.search-btn').on('click', function (e) {
            e.preventDefault();
            // $('body').css('overflow', 'hidden');

            $('.search-form-wrapper').addClass('active');
        });

        $('.search-close').on('click', function (e) {
            e.preventDefault();
            // $('body').css('overflow', 'auto');
            $('.search-form-wrapper').removeClass('active');
        });

        /*
       Jquery Body Overlay
       ============================*/
        $(".body-overlay").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });
        /*
        Stikey Js
        ============================*/

        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        if (100 < $(window).scrollTop()) {
            $(".header-menu-area.sticky-header").addClass("sticky_menu");
            $(".full-width-hidden").css("display", "none")
            $(".full-width-visible").css("display", "block")
        }

        if (height > 1400) {
            const nav = $(".header-menu-area.sticky-header");
            let scrolled = false;
            $(window).scroll(function () {
                if (160 < $(window).scrollTop() && !scrolled) {
                    nav
                        .addClass("sticky_menu animated fadeIn")
                        .animate({ "margin-top": "0px" });
                    scrolled = true;
                    $(".header-top").addClass("sticky-top")
                    $(".full-width-hidden").css("display", "none")
                    $(".full-width-visible").css("display", "block")
                }
                if (160 > $(window).scrollTop() && scrolled) {
                    nav.removeClass("sticky_menu animated fadeIn").css("margin-top", "0px");
                    scrolled = false;
                    $(".header-top").removeClass("sticky-top")
                    $(".full-width-hidden").css("display", "block")
                    $(".full-width-visible").css("display", "none")
                }
            });
        }

        /*
        Jquery Empty Post Content Hide
        ============================*/
        $('.blog-area .post-content p').filter(function () {
            return /\u00A0/.test($(this).text());
        }).hide();


        /*
        Skill Progress Bar Js
        ============================*/
        $('.skill-progressbar').one('inview', function (event, isInView) {
            if (isInView) {
                $('.progress-inner').each(function () {
                    $(this).find('.progress-content').animate({
                        width: $(this).attr('data-percentage')
                    }, 2000);

                    $(this).find('.progress-number-count').animate(
                        { left: $(this).attr('data-percentage') },
                        {
                            duration: 2000,
                            step: function (now) {
                                let data = Math.round(now);
                                $(this).find('.progress-percent').html(data + '%');
                            }
                        });
                });

            }
        });

        /*
       Slider
       ============================*/
        $(".slider-wrapper").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            prevArrow:
                "<button type='button' class='slider-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='slider-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });


        $('#trigger_testimonial_prev').on('click', function () {
            $('.testimonial-slider-wrapper .prev-btn').trigger('click');
        });
        $('#trigger_testimonial_next').on('click', function () {
            $('.testimonial-slider-wrapper .next-btn').trigger('click');
        });

        /*
       Client Logo Slider
       ============================*/
        $(".client-logo-slider-wrapper").slick({
            slidesToShow: 5,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='post-gallery-btn next-btn'><i class='bi bi-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        /*
        Counter Js
        ============================*/
        $(".counter").counterUp({
            delay: 10,
            time: 500,
        });

        /*
       Magnific Popup
       ============================*/
        $(".video-play").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });

        /*
        Jquery Wow Js
        ============================*/
        new WOW().init();

        /*
       Jquery Nice Select Js
       ============================*/
        $('select.select_option, select.wpcf7-select').niceSelect();

        /*
       Jquery Tilt Js
       ============================*/
        $('.tilt-animate').tilt({
            maxTilt: 12,
            perspective: 1500,
        })

        /*
        Scroll To Top Js
        ============================*/
        $(function () {
            $("#scrollTop").hide();
            var position = $(window).scrollTop();
            var timer;
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                clearTimeout(timer);
                if (scrollTop > 100) {
                    if (scrollTop > position) {
                        $('#scrollTop').fadeOut();
                    } else {
                        $('#scrollTop').fadeIn();
                        timer = window.setTimeout(function () {
                            $("#scrollTop").fadeOut();
                        }, 3000);
                    }
                    position = scrollTop;
                } else {
                    $('#scrollTop').fadeOut();
                }
            });
            $(".scrollup-btn").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        });
        /*
        Preeloader
        ============================*/
        $(window).on("load", function () {
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({ "overflow-x": "hidden" });
        });


        $('.isotope-grid').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows'
        });
        var $grid = $('.isotope-grid').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows',
            masonry: {
                columnWidth: '.isotope-item'
            }
        });
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });
        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        $(".filter-button-group").on("click", 'button', function () {
            $('.filter-button-group button').removeClass("active");
            $(this).addClass("active");
        });

        // mixitup 
        var containerEl = document.querySelector('.project-gallery-wrapper');
        // var mixer = mixitup(containerEl);

         // donate-form
         const defaultValue = "$100";
            $("#donate-input-field").val(defaultValue);
            $(".value.active").removeClass("active");
            $(".value:contains(" + defaultValue + ")").addClass("active");
            $(".value").click(function () {
                $(".value").removeClass("active");
                $(this).addClass("active");
                const selectedValueText = $(this).text();
                $("#donate-input-field").val(selectedValueText);
            });

            $("#custom-amount").click(function (e) {
                e.preventDefault();
                $("#donate-input-field").focus();
                $("#donate-input-field2").val("skdf");
                $(".value").removeClass("active");
                return false;
            });

            // Donation- Details : Donate Form
             const defaultValue2 = "$250";
            $("#donate-input-field2").val(defaultValue2);
            $(".value.active-field").removeClass("active-field");
            $(".value:contains(" + defaultValue2 + ")").addClass("active-field");
            $(".value").click(function () {
                $(".value").removeClass("active-field");
                $(this).addClass("active-field");
                const selectedValueText2 = $(this).text();
                $("#donate-input-field2").val(selectedValueText2);
            });

            $("#custom-amount").click(function (e) {
                e.preventDefault();
                $("#donate-input-field2").focus();
                $(".value").removeClass("active-field");
                return false;
            });

             /*
        Skill Progress Bar Js
        ============================*/
        $('.causes-area, .donate-area').each(function() {
            let section = $(this);
            section.one('inview', function(event, isInView) {
                if (isInView) {
                    section.find('.progress-inner').each(function() {
                        $(this).find('.progress-content').animate({
                            width: $(this).attr('data-percentage')
                        }, 2000);
                        $(this).find('.progress-number-count').animate(
                            {
                                left: $(this).attr('data-percentage')
                            },
                            {
                                duration: 2000,
                                step: function(now) {
                                    let data = Math.round(now);
                                    $(this).find('.progress-percent').html(data + '%');
                                }
                            });
                        });
                    }
                });
            });

    });
})(jQuery);
