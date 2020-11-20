$(document).ready(function() {


  $('#tweet-text').on('keyup keydown', function() {
    let max = 140;
    let text = $(this).val();
    let length = max - text.length

    if (length <= 0) {
      $("#text-counter").html(length).css("color", "red")
    } else {
      $("#text-counter").html(length).css("color", "")
    };
  })
});



