$(document).ready(function() {


  $('#tweet-text').keyup(function() {
    let max = 140;
    let length = max - ($(this).val().length);
    let tweet = $(this).parent().find("output.counter")
    tweet.text(length)

    if (length <= 0) {
      tweet.addClass('red')
    } else {
      tweet.removeClass('red')
    };
  })
});



