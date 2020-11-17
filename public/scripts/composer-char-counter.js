$(document).ready(function() {


  $('#tweet-text').keyup(function() {
    let max = 140;
    let length = max - ($(this).val().length);
    //$('.counter').text(length);
    let sib = $(this).parent().find("output.counter")
    sib.text(length)

    if (length <= 0) {
      sib.addClass('red')
    } else {
      sib.removeClass('red')
    };
  })
});



