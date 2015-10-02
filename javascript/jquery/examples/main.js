(function($) {
  'use strict';

  $(document).ready(function() {
    var pictures,
        $menuLinks = $('#menu a'),
        $title = $('head title'),
        $caption = $('.caption'),
        $img = $('.container img');

    // XML
    // $.ajax({
    //   url: 'pictures.xml',
    //   success: function(data) {
    //     $pictures = $('picture', data);
    //   }
    // });

    // JSON
    $.ajax({
      url: 'pictures.json',
      success: function(data) {
        pictures = data;
      }
    });
    $menuLinks.click(function(event) {
      event.preventDefault();
      var $index = $menuLinks.index(this);
      var picture = pictures[$index].picture;
      $img.attr('src', picture.source);
      $caption.text(picture.caption);
      $title.text('Galery 1 - ' + picture.caption);
    });
  });

})(jQuery);
