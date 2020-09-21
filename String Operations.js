//Tweet Character Count with Slice Function

var tweet=prompt("Compose your tweet");
tweet.slice(0,280);
var tweetcount=tweet.length
alert("You have written "+tweetcount+"characters and have "+(280-tweetcount)+ "characters remaining.");

//Displaying Hello + "Name" as an alert
var name=prompt("Enter you name !");
name=name.toUpperCase();
a=name.slice(0);
b=name.slice(1,name.length);
b=b.toLowerCase();
alert("Hello"+a+b);

