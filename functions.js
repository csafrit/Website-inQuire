(function ($) {

  var slider = $('.bxslider').bxSlider({
    mode: 'horizontal'
  });

  $('#reload-slider').click(function (e) {
    e.preventDefault();
    slider.reloadSlider({
      mode: 'fade',
      auto: true,
      pause: 1000,
      speed: 500
    });
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

  wow = new WOW({}).init();

})(jQuery);
