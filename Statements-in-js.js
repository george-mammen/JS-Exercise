// Call Element by tag with the item number for lists followed by attribute

document.getElementsByTagName("tag")[item number];//Return is an array.

document.getElementsByClassName("class")[item number];//Return is an array.

document.getElementById("id"); //Return is one element since Id is independant

document.getElementById("id").innerHTML="What you want it to change as";


document.querySelector(""); //Call any type of input

document.querySelector("li a");//Combination of Tag and Tag

document.querySelector(".item a");//Combination of class and Tag

document.querySelector("#list a");//Combination of id and Tag

//For array specify order else first instance will be returned

//adding & removing class to element

document.querySelector("tag").classList.add("To be added class");

document.querySelector("tag").classList.remove(" To be Removed class");


// do and undo any action

document.querySelector("tag").classList.toggle("To be added class");

//text manipulation
document.querySelector("tag").innerHTML="<em>What you want it to change as</em>";

//Attribute Manipulation
document.querySelector("tag").getAttribute("attribute");

document.querySelector("tag").setAttribute("attribute","change to attribute");

