// $(".menu-toggle").on("click", function(event) {
//     event.preventDefault();
//     $(".menu-vertical").toggleClass("hidden");
//     $(".menu-toggle").toggleClass("hidden");
// })

$(function(){
      $('.header-btn').on('click', function(){
        $('.menu').addClass('active');
    });
    $('.menu-clouse__btn').on('click', function(){
      $('.menu').removeClass('active');
      });
  });
  