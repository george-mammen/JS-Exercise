// Style Manipulation

$("h1").css("color", "green"); //One property is getting,Two is setting

$("h1").addClass("Name of class  from css ");

$("h1").removeClass("Name of class from css ");// To add or remove space out both in same quotations

$("h1").hasClass("Name of class  from css ");// return boolean

// Text Manipulation

$("h1").text("Hey There");

$("h1").html("<em> Hello </em>"); // innerHtml replacement

// Attribute Manipulation 

$("img").attr("src");// getting

$("a").attr("href","https://www.google.com");// setting

// Adding Event Listerners

$("button").click(function(){
  $("h1").css("color", "purple");
  });









