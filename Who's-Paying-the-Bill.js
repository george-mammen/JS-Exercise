function bill(name){
  var number=name.length;
  var position=Math.floor(Math.random()*number);
  var person=name[position];
  return person+" has to pay the bill";
}
