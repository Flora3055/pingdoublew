(function($) {
    "use strict";
    
    /* all js active here */
   
    /* scroll active js */
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 250) {
            $(".header-sticky").removeClass("sticky-active");
        } else {
            $(".header-sticky").addClass("sticky-active");
        }
    }); 


    /* mobile menu active js */
    $('.mobile-menu li.has-sub > a').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp();
        } else {
          element.addClass('open');
          element.children('ul').slideDown();
          element.siblings('li').children('ul').slideUp();
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp();
        }
      }); 

    /* slider active js */
    $('.slider-active').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        fade: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a class="slick-prev"><i class="icon-arrow-left"></i></a>',
        nextArrow: '<a class="slick-next"><i class="icon-arrow-right"></i></a>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            }
        ]
    });

     /* product slide active js */
    $('.product-slider-activation').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        rows: 2,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a class="slick-prev"><i class="icon-arrow-left"></i></a>',
        nextArrow: '<a class="slick-next"><i class="icon-arrow-right"></i></a>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    /* product slide 2 active js */
    $('.product-slider-activation-2').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        rows: 1,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a class="slick-prev"><i class="icon-arrow-left"></i></a>',
        nextArrow: '<a class="slick-next"><i class="icon-arrow-right"></i></a>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    /* testimonial active js */
    $('.testimonial-image-slide').slick({
        slidesToShow: 2,
        asNavFor: '.testimonial-text-slide',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.testimonial-text-slide').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        draggable: false,
        fade: true,
        asNavFor: '.testimonial-image-slide',
        prevArrow: '<a class="slick-prev"><i class="icon-arrow-left"></i></a>',
        nextArrow: '<a class="slick-next"><i class="icon-arrow-right"></i></a>',
        responsive: [
            {
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,  
                centerPadding: '0px',
                }
            },
            {
            breakpoint: 320,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                focusOnSelect: false,
                }
            }
        ]
    });

       /* blog active js */
    $('.blog-slider-activation').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<a class="slick-prev"><i class="icon-arrow-left"></i></a>',
        nextArrow: '<a class="slick-next"><i class="icon-arrow-right"></i></a>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


      /* tab slide active js */
    $('.tab-slider-activation').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        rows: 2,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a class="slick-prev"><i class="icon-arrow-left"></i></a>',
        nextArrow: '<a class="slick-next"><i class="icon-arrow-right"></i></a>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });


      /* tab 2 slide active js */
    $('.tab-slider-activation-2').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        rows: 1,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a class="slick-prev"><i class="icon-arrow-left"></i></a>',
        nextArrow: '<a class="slick-next"><i class="icon-arrow-right"></i></a>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

     /* single product active js */
    $('.large-image-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<a class="slick-prev"><i class="icon-arrow-left"></i></a>',
        nextArrow: '<a class="slick-next"><i class="icon-arrow-right"></i></a>',
        fade: true,
        asNavFor: '.thum-image-slide'
    });
    $('.thum-image-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.large-image-slide',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        prevArrow: '<a class="slick-prev"><i class="icon-arrow-left"></i></a>',
        nextArrow: '<a class="slick-next"><i class="icon-arrow-right"></i></a>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /* countdown active js */
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
          $this.html(event.strftime('<div class="countdown"><div class="countdown-area"><div class="single-number">%D</div><div class="title">days</div></div><div class="countdown-area"><div class="single-number">%H</div><div class="title">Hour</div></div><div class="countdown-area"><div class="single-number">%M</div><div class="title">Mint</div></div><div class="countdown-area"><div class="single-number">%S</div><div class="title">Sec</div></div></div>'));
        });
      });

      /* quentity active js */
      $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
      $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
      $(".qtybutton").on("click", function() {
          var $button = $(this);
          var oldValue = $button.parent().find("input").val();
          if ($button.text() == "+") {
              var newVal = parseFloat(oldValue) + 1;
          } 
          else {
              if (oldValue > 0) {
                  var newVal = parseFloat(oldValue) - 1;
              } 
              else {
                  newVal = 0;
              }
          }
          $button.parent().find("input").val(newVal);
      });

    /* scrollup js active */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });



})(jQuery);