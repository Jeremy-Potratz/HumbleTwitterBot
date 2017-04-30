console.log('HumbleBot is running');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
checkTweet();
setInterval(checkTweet, 1000 * 20 * 60);
//1000 milliseconds * 20 (20 seconds) * 60 (20 minutes)
function checkTweet(){

  var params = {
    q: 'Retard',
    count: 1
  }
  T.get('search/tweets',params,getData)
  function getData(err, data, response){
      var tweet = data.statuses;
      console.log(tweet);



      if (tweet[0].lang === 'en' ) {
        var screenName = tweet[0].user.screen_name;
        tweetBack('Hey @' + screenName + ' read this article so you know the full implications of using the R-word. http://www.r-word.org/r-word-effects-of-the-word.aspx');
      }else{
        console.log('No tweets');
      }
      console.log(tweet[0].text);
      console.log(tweet[0].user.screen_name);
  }

}

function tweetBack(txt){
  var tweet = {
      status: txt
  }
function postData(err,data,response){
  if (err){
    console.log(err);
  }else{
    console.log(data.text);
  }
}
  T.post('statuses/update', tweet, postData);

}
