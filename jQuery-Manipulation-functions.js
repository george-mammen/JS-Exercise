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

$("input").keypress(function(event){
  console.log(event.key);
   });

$("h1").on("mouseover",function(){}):

// Adding & Removing Elements

$("h1").before("<button>Hi</button>");

$("h1").after("<button>Hi</button>");

$("h1").append("<button>Hi</button>");

$("h1").prepend("<button>Hi</button>");

$("button").remove();


// Animation
$("button").on("click",  function(){
$("h1").hide();
});  

$("button").on("click",  function(){
$("h1").show();
});  


$("button").on("click",  function(){  
$("h1").toggle();
  });

$("button").on("click",  function(){ 
$("h1").fadeOut();
});

$("button").on("click",  function(){ 
$("h1").fadeIn();
});

$("button").on("click",  function(){ 
$("h1").slideToggle();
});

$("button").on("click",  function(){ 
$("h1").slideUp();
});

$("button").on("click",  function(){ 
$("h1").slideDown();
});

$("h1").animate({opacity:0.5}) });














