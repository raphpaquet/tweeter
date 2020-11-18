/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    const newTweet = createTweetElement(tweet)
    $('#tweet-container').append(newTweet)
  }
};

const createTweetElement = function(tweet) {
  let $tweet = `
  <article class="tweet">
  <header>
    <img src=${tweet.user.avatars} alt="avatar" style="width:40px;height:40px;">
    <h2>${tweet.user.name}</h2>
    <h3>${tweet.user.handle}</h3>
  </header>
  <p>${tweet.content.text}</p>
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

renderTweets(data);

})
