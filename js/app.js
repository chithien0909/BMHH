jQuery(document).ready(function($) {
    function getTopDistance() {
        let topDistance =$('#header').offset().top;
        if (topDistance > 40) {
            if($('#header.active').length > 0) return 0;
            $('#header').addClass('active');
        } else {
            $('#header').removeClass('active');
        }
    }
    $(window).scroll(getTopDistance);
    getTopDistance();
    $('.menu-icon').click(()=>{
        if($('.menu-icon.active').length>0){
            $('.menu-icon').removeClass('active');
            $('.menu-content').removeClass('active');

        }else{
            $('.menu-icon').addClass('active');
            $('.menu-content').addClass('active');
        }
    });
    $('.btn-register-submit').click(()=>{
        $('.box-register').removeClass('active');
    });
    $('.btn-register').click(()=>{
       if($('.box-register.active').length>0){
           $('.box-register').removeClass('active');
       } else{
           $('.box-register').addClass('active');
       }
    });
    $('#slide-banner').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        customPaging: function(slider, i) {
            // this example would render "tabs" with titles
            return '';
        },
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('#list-box-video').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:true,
        nextArrow: '<button class="slick-prev slick-arrow" aria-label="Previous"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-next slick-arrow" aria-label="Next"><i class="fas fa-chevron-left"></i></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: true,
                    centerPadding: '40px',
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerPadding: '12.5',
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 468,
                settings: {
                    arrows: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.list-date').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 6.2,
        slidesToScroll: 6.2,
        arrows:true,
        centerPadding: '0',
        nextArrow: '<button class="slick-prev slick-arrow" aria-label="Previous"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-next slick-arrow" aria-label="Next"><i class="fas fa-chevron-left"></i></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: true,
                    centerPadding: '40px',
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerPadding: '12.5',
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 468,
                settings: {
                    arrows: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.list-date-detail').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        slidesPerRow: 1,
        arrows:true,
        nextArrow: '<button class="slick-prev slick-arrow" aria-label="Previous"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-next slick-arrow" aria-label="Next"><i class="fas fa-chevron-left"></i></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerPadding: '12.5',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('#appreciation').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:true,
        nextArrow: '<button class="slick-prev slick-arrow" aria-label="Previous"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-next slick-arrow" aria-label="Next"><i class="fas fa-chevron-left"></i></button>',
        customPaging: function(slider, i) {
            // this example would render "tabs" with titles
            return '';
        }
    });
    // $('.image-gallery .box').click(()=>{
    //     if($('.image-gallery .overlay .active').length > 0){
    //         $('.image-gallery .overlay').removeClass('active')
    //     }else{
    //         $('.image-gallery .overlay').addClass('active')
    //     }
    // });
    $('.list-img').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows:true,
        nextArrow: '<button class="slick-prev slick-arrow" aria-label="Previous"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-next slick-arrow" aria-label="Next"><i class="fas fa-chevron-left"></i></button>',

    })
});
