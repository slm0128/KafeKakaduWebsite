$(document).ready(function() {
  var lastScrollTop = 0;

  $(window).scroll(function() {
    var st = $(this).scrollTop();

    if (st > lastScrollTop) {
      // Nach unten scrollen - Header ausblenden
      $('#Hd').css('top', '-100px');
    } else {
      // Nach oben scrollen - Header einblenden
      $('#Hd').css('top', '0');
    }

    lastScrollTop = st;
  });
});

$(document).ready(function () {
  $('#contactForm').submit(function (e) {
    e.preventDefault();

    // Hier kannst du die Formulardaten verarbeiten, z.B. mit Ajax an einen Server senden

    // Beispiel: Konsolenausgabe der Formulardaten
    var formData = $(this).serialize();
    console.log(formData);

    // Hier könntest du Ajax verwenden, um die Daten an einen Server zu senden
    // $.ajax({
    //   url: 'dein-server-endpoint',
    //   type: 'POST',
    //   data: formData,
    //   success: function(response) {
    //     // Hier kannst du die Antwort des Servers verarbeiten
    //     console.log(response);
    //   }
    // });
  });
});

