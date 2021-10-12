$(() => {
  $("#dropdown-btn").on("click", dropdownBtn);
  $("#scroll-btn").on("click", scrollReset)
  $(window).scroll(scrollBtnShow) 
});


// button to display new-tweet section
const dropdownBtn = () => {
 $newTweet = $(".new-tweet");
 $newTweet.slideToggle("slow");
 $textArea = $("#tweet-text");
 $textArea.focus();
};

// button to scroll back to top of page
const scrollReset = () => {
 $(window).scrollTop(0);
};

// show/hide scroll-btn
const scrollBtnShow = function () {
  const $scrollBtn = $("#scroll-btn");
 if ($(this).scrollTop()) {
  return $scrollBtn.fadeIn();
 }
  $scrollBtn.fadeOut();
};