console.log('The bot is starting')

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
// username/email: jeremyBotMan011/jeremyottopotratz@gmail.com password: 9Jotto

var params = { q: 'Potratz', count: 100 }

function gotData(err, data, response){

  var tweets = data.statuses;

  for (var i = 0; i < tweets.length; i += 1)
  console.log(tweets[i].text);
}

T.get('search/tweets', params, gotData);
