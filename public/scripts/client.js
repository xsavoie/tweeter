$(() => {
  
  const createTweetElement = function(tweet) {
    // Building the header
    const $name = $("<h2>").text(tweet.user.name);
    const $avatar = $("<img>").attr('src', tweet.user.avatars).addClass("tweeter-avatar");
    const $avatarAndName = $("<span>").addClass("user-icon-name");
    $avatarAndName.append($avatar,$name);
    const $handle = $("<h2>").text(tweet.user.handle).attr("id", "tweeter-handle");
    const $header = $("<header>").addClass("tweet-header");
    $header.append($avatarAndName, $handle);
    
    // Building the body
    const $tweetContent = $("<h3>").text(tweet.content.text);
    const $body = $("<div>").addClass("tweet-body");
    $body.append($tweetContent);
    
    // Building the footer
    const formattedDate = timeago.format(tweet.created_at);
    const $datePosted = $("<h4>").text(formattedDate).attr("id", "date-posted");
    const $flag = $("<i>").addClass("fas fa-flag");
    const $retweet = $("<i>").addClass("fas fa-retweet");
    const $heart = $("<i>").addClass("fas fa-heart");
    const $footerIcons = $("<div>").addClass("tweet-footer-icons");
    $footerIcons.append($flag, $retweet, $heart);
    const $footer = $("<footer>").addClass("tweet-footer");
    $footer.append($datePosted, $footerIcons);
    
    // Append tweet together
    const $singleTweet = $("<article>").addClass("indiv-tweet");
    $singleTweet.append($header, $body, $footer);
    return $singleTweet;
  };
  
  
  const renderTweets = function(data) {
    const $tweetContainer = $(".submitted-tweets");
    $tweetContainer.empty();
    
    for (const tweet of data) {
      const $tweetToDiplay = createTweetElement(tweet);
      $tweetContainer.prepend($tweetToDiplay);
    }
  };

  const loadTweets = function() {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
      success: (tweets) => {
        renderTweets(tweets);
      },
      error: (err) => {
        console.log(`Error: ${err}`);
      }
    });
  };

  loadTweets();


  // Helper function to validate tweet
  const tweetValidate = (tweetToValidate) => {
    let errorMsg = "";
    if (tweetToValidate.length > 140) {
      errorMsg = "Too many characters";
      return errorMsg;
    }
    if (tweetToValidate.length === 0) {
      errorMsg = "Cannot be empty";
      return errorMsg;
    }
    return errorMsg;
  };
  
  // Post new tweets to /tweets
  const $form = $(".form-box");
  $form.on("submit", function(event) {
    event.preventDefault();
    
    const textArea = $("#tweet-text").val();

    const errorMsg = tweetValidate(textArea);
    const $errorLabel = $("#error-message");
    const $errorDiv = $(".error-div");
    if (errorMsg) {
      $errorLabel.text(errorMsg);
      $errorDiv.slideDown(400);
      return;
    } else if ($errorLabel.text()) {
      $errorDiv.slideUp(400);
    }
    
    const serializedData = $(this).serialize();
    
    $.post("/tweets", serializedData, (response) => {

      // clears text-box, error msg and reset char counter
      $errorLabel.empty();
      this.reset();
      $(".counter").html(140);

      loadTweets();
    });
  });

});

// separate functions into different files ie composer scripts