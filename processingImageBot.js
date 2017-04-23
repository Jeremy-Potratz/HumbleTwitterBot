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

tweetIt();
function tweetIt(txt){
    var cmd = 'processing-java --sketch=`pwd`/rainbow --run'
    exec(cmd,processing);

    function processing(){
          var fileName = 'rainbow/output.png';
          var params = {
            encoding: 'base64'
          }
          var b64 = fs.readFileSync(fileName, params);

          T.post('media/upload', {media_data: b64}, uploaded);

          function uploaded(err,data,response){
            //this is where i will tweet!
              var id = data.media_id_string
              var tweet = {
                status: 'Coding with processing and js, making some sketches',
                media_ids: [id]
              }
              T.post('statuses/update', tweet, postData);
          }
        function postData(err, data, response) {
            if (err){
              console.log("Something went wrong");
            }else{
              console.log(data.text);
            }
        }
    }
}
