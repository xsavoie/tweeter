(function() {

  $(() => {
    $('#tweet-text').on('input', inputCharCounter);
  });
  
  const inputCharCounter = function() {
    const $counter = $('.counter');
    let $input = $(this);
    let $length = $input.val().length;
  
    $counter.html(140 - $length);
  
    if ($counter.html() <= 0) {
      return $counter.addClass('too-many-chars');
    }
    $counter.removeClass('too-many-chars');
  };
  
})();






// $(this).val().length) chang to variable
// change (140 - $(this).val().length) to variable
// wrap whole script in iife (function() {})();