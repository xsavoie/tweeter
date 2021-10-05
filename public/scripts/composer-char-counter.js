$(document).ready(function() {
  $('#tweet-text').keyup(function() {
    $('.counter').text(140 - $(this).val().length);
    if ($('.counter').text() <= 0) {
      $('.counter').addClass('too-many-chars')
    } else if ($('.counter').text() > 0) {
      $('.counter').removeClass('too-many-chars')
    }
  })
});
