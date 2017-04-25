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
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg){
    console.log('Tweet Event Occurred');

    var json = JSON.stringify(eventMsg,null,2);
    fs.writeFile("tweet.json",json);

    var replyto = eventMsg.in_reply_to_screen_name;
    var text = eventMsg.text;
    var from = eventMsg.user.screen_name;


    if (replyto === 'MY_USERNAME'){
      tweetIt('Hey @' + from + ' thank you for tweeting at me!');
    }


}
//setInterval(tweetIt("swag"), 1000 * 20);
function tweetIt(txt){
    var tweet = {
      status: txt
    }
    function postData(err, data, response) {
        if (err){
          console.log("Something went wrong");
        }else{
          console.log(data.text);
        }
    }
    T.post('statuses/update', tweet, postData);
}
