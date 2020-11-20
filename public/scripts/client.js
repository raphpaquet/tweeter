
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
    
    //load tweet on the page 
    const loadTweets = () => {
      $
      .ajax({
        url: "/tweets",
        method: "GET"
      })
      .then(function(res) {
        renderTweets(res)
      });
    };
    loadTweets();


  
  // Tweet verification and submission 
  $('form').on('submit', event => {
    event.preventDefault();
    let text = $('#tweet-text').val()

    if (text.length === 0) {
      $("#error-no-text").slideDown();
      $(".close-button").click(function() {
        $("#error-no-text").slideUp();
        return;
      })
    } else if (text.length > 140) {
      $("#error-over").slideDown();
      $(".close-button").click(function() {
        $("#error-over").slideUp();
        return;
      })
    } else {
      $
      .ajax({
        url:"/tweets",
        method:"POST",
        data: $('form').serialize(),
      })
      .then(function() {
        $('#tweet-container').empty();
        $('#tweet-text').val("");
        $('#text-counter').val(140);
        loadTweets();
      })
      .catch((err) => console.log(err));
    }
  }) 
})






