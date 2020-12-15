$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  //250 is fade pixels
  });


  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() >= $(document).height() - 275) {
        //into teal larger footer section
        $("#footer").addClass("background-color2");
    } 
   if($(window).scrollTop() + $(window).height() < $(document).height() - 275) {
        //above teal larger footer section
     $("#footer").removeClass("background-color2");   
    } 
 });