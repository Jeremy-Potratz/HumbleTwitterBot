console.log('The follow bot is starting')

//twit require
var Twit = require('twit');
//call config file for api
var config = require('./config');
//for command line running processing
var exec = require('child_process').exec;
//file system require
var fs = require('fs');

var T = new Twit(config);
// username/email: jeremyBotMan011/jeremyottopotratz@gmail.com password: 9Jotto

//user stream
var stream = T.stream('user');
//called when followed
stream.on('follow', followed);

function followed(eventMsg){
  console.log('Event Occurred');
//name of person
  var name = eventMsg.source.name;
//screen name or @name
  var screenName = eventMsg.source.screen_name;

  console.log("Followed Event");

  tweetIt('.@' + screenName + ' Thank you for following me! You have a ton of swag.');

}
//setInterval(tweetIt("swag"), 1000 * 20);
function tweetIt(txt){
    var tweet = {
      status: txt
    }
    T.post('statuses/update', tweet, postData);
    function postData(err, data, response) {
        if (err){
          console.log("Something went wrong");
        }else{
          console.log(data.text);
        }
    }
}
