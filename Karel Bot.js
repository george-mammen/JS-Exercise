// Moving the bot from one corner to the other 

//Method 1
function main(){
    move4();
    turnLeft()
    move4()(); 
 }
  
function move4(){
  move();
  move();
  move();
  move();
}

// Method 2
function main(){
   otherend();
   otherend();
   otherend(); 
   otherend();
}
  
function otherend(){
  move();
  turnLeft();
  move();
  turnRight();
}

//Beeper on Diagonal
function main(){
   beeperdiag();
   beeperdiag();
   beeperdiag(); 
   beeperdiag();
}

function beeperdiag(){
  move();
  turnLeft();
  move();
  putBeeper();
  turnRight();  
  
  //Beeper Chessboard
