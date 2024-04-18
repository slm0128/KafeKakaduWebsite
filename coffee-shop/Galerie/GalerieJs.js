$(document).ready(function () {
  var currentIndex;
  var $galleryImages = $(".Box3 img");

  // Initialisiere die Galerie
  $(".Box3 img").on("click", function () {
    currentIndex = $galleryImages.index($(this));
    showImage(currentIndex);
  });

  // Funktion zum Anzeigen des vergrößerten Bildes
  function showImage(index) {
    var $overlay = $("<div class='overlay'></div>");
    var $img = $("<img src='" + $galleryImages.eq(index).attr("src") + "' class='enlarged-img'>");
    var $closeBtn = $("<div class='close-btn'>&times;</div>");
    var $prevBtn = $("<div class='nav-btn prev-btn'>&lt;</div>");
    var $nextBtn = $("<div class='nav-btn next-btn'>&gt;</div>");

    $overlay.append($img, $closeBtn, $prevBtn, $nextBtn);
    $("body").append($overlay);

    // Verhindere, dass Klicks auf das Bild das Overlay schließen
    $img.on("click", function (e) {
      e.stopPropagation();
    });

    // Event-Handler für Tasten zur Navigation in der Galerie
    $overlay.on("keydown", function (e) {
      if (e.keyCode == 37) {
        navigateGallery("prev"); // Linke Pfeiltaste für vorheriges Bild
      } else if (e.keyCode == 39) {
        navigateGallery("next"); // Rechte Pfeiltaste für nächstes Bild
      } else if (e.keyCode == 27) {
        closeImage(); // Esc-Taste zum Schließen der Galerie
      }
    });

    // Schließe die vergrößerte Ansicht bei Klick auf das Overlay oder die Schließen-Schaltfläche
    $overlay.on("click", function (e) {
      if (!$(e.target).is(".enlarged-img")) {
        closeImage();
      }
    });

    $closeBtn.on("click", function () {
      closeImage();
    });

    $prevBtn.on("click", function () {
      navigateGallery("prev");
    });

    $nextBtn.on("click", function () {
      navigateGallery("next");
    });
  }

  // Funktion zum Schließen der vergrößerten Ansicht
  function closeImage() {
    $(".overlay").remove();
  }

  // Funktion zur Navigation in der Galerie (vorwärts oder rückwärts)
  function navigateGallery(direction) {
    if (direction === "prev") {
      currentIndex = (currentIndex - 1 + $galleryImages.length) % $galleryImages.length;
    } else if (direction === "next") {
      currentIndex = (currentIndex + 1) % $galleryImages.length;
    }

    var newImgSrc = $galleryImages.eq(currentIndex).attr("src");
    $(".enlarged-img").attr("src", newImgSrc);
  }
});



//autoscrolllllllllll 

function autoScroll() {
  var box2Element = document.querySelector('.Color1');
  window.scrollTo({
    top: box2Element.offsetTop,
    behavior: 'smooth'
  });
}


