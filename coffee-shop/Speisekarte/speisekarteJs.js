var container3;
var sticky;

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



$(document).ready(function(){
  $("#footer-content").load("footer.html");
});

function autoScroll() {
  var box2Element = document.querySelector('.Color1');
  window.scrollTo({
    top: box2Element.offsetTop,
    behavior: 'smooth'
  });
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}