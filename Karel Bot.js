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

function main(){
   Outer();
   Outer();
   Outer();
   Outer();
   diagonalpos();
   Inner();
   Inner();
   Inner();
   Inner();
   diagonalpos();
   putBeeper();
   }

function Outer() {
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
}

function Inner() {
   move();
   move();
   putBeeper();
   turnLeft();
}

function diagonalpos(){
   turnLeft();
   move();
   turnRight();
   move();
}
 
