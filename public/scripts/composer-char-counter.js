$(document).ready(function() {
  $('#tweet-text').keyup(function() {
    $('.counter').text(140 - $(this).val().length);
    if ($('.counter').text() <= 0) {
      return $('.counter').addClass('too-many-chars');
    } 
    if ($('.counter').text() > 0) {
      return $('.counter').removeClass('too-many-chars');
    }
  })
});
