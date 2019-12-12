console.log ("Somethings Happening");
console.log ();

var Twit = require ("twit");

var config = require ("./config");
var T = new Twit(config);
/////////////////////////////////////////////////

setInterval(tweetIt, 1000*5);

tweetIt();

function tweetIt() {

    var r = Math.floor(Math.random()*200);

    var tweet = {status : "Heres a Random Number " + r};

    T.post('statuses/update', tweet, goStatus);

    function goStatus(err, data, response) {
        if (err){
            console.log(err);
        }else{
        console.log("It works!");
        }
    };
};