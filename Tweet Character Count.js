//Tweet Box

var tweet=prompt("Compose your tweet");
tweet.slice(0,280);
var tweetcount=tweet.length
alert("You have written "+tweetcount+"characters and have "+(280-tweetcount)+ "characters remaining.");

