/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
    const $body = $("<div>").addClass("tweet-content");
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

  // Helper function to validate
  const tweetValidate = (tweetToVerify) => {
    let errorMsg = "";
    if (tweetToVerify.length > 140) {
      errorMsg = "Too many characters";
      return errorMsg;
    }
    if (tweetToVerify.length === 0) {
      errorMsg = "Cannot be empty";
      return errorMsg;
    }
    return errorMsg;
  };
  
  // Post new tweets to /tweets
  const $form = $(".form-box");
  $form.on("submit", function(event) {
    event.preventDefault();
    console.log("new tweet submitted"); // not needed
    
    const tweetText = $("#tweet-text").val();

    const errorMsg = tweetValidate(tweetText);
    const $errorLabel = $("#error-message");
    if (errorMsg) {
      $errorLabel.text(errorMsg);
      $errorLabel.slideDown("800");
      // $errorLabel.addClass("error-message-flex")
      return;
    } else if ($errorLabel.text()) {
      $errorLabel.slideUp("800");
      $errorLabel.empty();
      // $errorLabel.removeClass("error-message-flex")
    }

    const serializedData = $(this).serialize();
    console.log(serializedData); // test log
    
    $.post("/tweets", serializedData, (response) => {
      console.log(response);

      loadTweets();
    });
  });


});


