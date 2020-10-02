
prompt("What is your name?");
prompt("What is your partner's name?");
/* Math.random returns a number between 0 and 1, multiplying that with 100 gets a decimal less than 100*/
var loveScore= Math.random()*100;
loveScore=Math.floor(loveScore)+1;//to round decimal to integer
alert("Your Love Score is "+loveScore+"%");
if(loveScore >=70){
  alert("You love each other like Romeo and Juliet");
}
else if(loveScore >=30 && loveScore<70){
  alert("You love needs to improve");
}
else{
  alert("You love each other ?");
}


  
  

