var container3;
var sticky;

$(document).ready(function(){
  $("#footer-content").load("footer.html");
});


$(document).ready(function() {
  var stickyTop = $('.sticky').offset().top;

  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();

    if (stickyTop < windowTop) {
      $('.sticky').css('position', 'fixed');
    } else {
      $('.sticky').css('position', 'relative');
    }
  });
});

function autoScroll() {
  var box2Element = document.querySelector('.Color1');
  window.scrollTo({
    top: box2Element.offsetTop,
    behavior: 'smooth'
  });
}
