$(document).ready(function() {


  $('#tweet-text').keypress(function() {
    let max = 140;
    let length = max - ($(this).val().length);
    //$('.counter').text(length);
    let tweet = $(this).parent().find("output.counter")
    tweet.text(length)

    if (length <= 0) {
      tweet.addClass('red')
    } else {
      tweet.removeClass('red')
    };
  })
});



