(function($) {
  'use strict';

  $(document).ready(function() {
    var $pictures,
        $menuLinks = $('#menu a'),
        $title = $('head title'),
        $caption = $('.caption'),
        $img = $('.container img');

    $.ajax({
      url: 'pictures.xml',
      success: function(data) {
        $pictures = $('picture', data);
      }
    });
    $menuLinks.click(function(event) {
      event.preventDefault();
      var $index = $menuLinks.index(this);
      var $picture = $pictures.filter(':eq(' + $index + ')');
      $img.attr('src', $picture.attr('source'));
      $caption.text($picture.attr('caption'));
      $title.text('Galery 1 - ' + $picture.attr('caption'));
    });
  });

})(jQuery);
