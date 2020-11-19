/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // array with all the tweet - generate tweet HTML
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      const newTweet = createTweetElement(tweet)
      $('#tweet-container').prepend(newTweet)
    }
  };
  
  // return HTML for rendering the tweet
  const createTweetElement = function(tweet) {
    let $tweet = `
    <article class="tweet">
    <header>
      <img src=${tweet.user.avatars} alt="avatar" style="width:40px;height:40px;">
      <h2>${tweet.user.name}</h2>
      <h3>${tweet.user.handle}</h3>
    </header>
    <p>${escape(tweet.content.text)}</p>
    <footer>
      <span>
        ${tweet.created_at}
      </span>
      <div>
        <img src="/images/repost.png" alt="repost" style="width:20px;height:20px;">
        <img src="/images/heart.png" alt="heart" style="width:20px;height:20px;">
        <img src="/images/little-flag.svg" alt="heart" style="width:20px;height:20px;">
      </div>
    </footer>
  </article>`
    return $tweet;
  }
  
  
  //form sumbission
  $('form').on('submit', event => {
    event.preventDefault();
    
    if (!$('#tweet-text').val()) {
      $('.error-msg').slideDown();
      $('.error-msg').text('Your tweet is empty!')
    } else if ($('#tweet-text').val().length > 140) {
      $('.error-msg').slideDown();
      $('.error-msg').text('Your tweet is over character capacity');
    } else {
      $.ajax({
        url:"/tweets",
        method:"POST",
        data: $('form').serialize(),
      })
      .then(function() {
        $('#tweet-container').empty()
        loadTweets()
      })
      .catch((err) => console.log(err));
    }
  })
 
  
  //load tweet on the page without refreshing 
  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET"
    })
    .then(function(res) {
      renderTweets(res)
    });
  };

})






