// section02
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'masonry'
});

// section05
var $grid = $('section05-card-group').isotope({
  itemSelector: '.section05-card',
  layoutMode: 'fitRows'
});

$('.section05-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $('.section05-card-group').isotope({ filter: filterValue });
  $('.section05-button-group button').removeClass('active');
  $(this).addClass('active');
});

// section07
$('.section07-slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  centerMode: true,
  centerPadding: '10px',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,  
        }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        }
    }
]
});

// go_top_page
$('#go_top_page').css({ display: 'none' });
    $(window).on('scroll', function () {
        nowloc = $(window).scrollTop();
        if (nowloc > 500) {
            $('#go_top_page').fadeIn(1000);
            $('#go_top_page').removeClass('fadeOutUp');
            $('#go_top_page').addClass('fadeInDown');
        } else {
            $('#go_top_page').fadeOut(1000);
            $('#go_top_page').removeClass('fadeInDown');
            $('#go_top_page').addClass('fadeOutUp');
        }

        if (nowloc <= 300) {
            $('#navbar').css({
                  background: 'transparent'
            });
        } else {
            $('#navbar').css({
                background: 'rgba(37,205,201, 0.9)'
            });
        }
    });

    $("#go_top_page").click(function(){
      $("html,body").animate({
          scrollTop:0
      },1500);
  });
    

    $('.navbar-toggler').on('click', function () {
        $('#navbar').toggleClass('toggle_background');
    });

// wow.js
new WOW().init();