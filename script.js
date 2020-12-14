
$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  //250 is fade pixels
  });


  $(window).scroll(function() {
    $("#footer").removeClass("background-color");
    if($(window).scrollTop() + $(window).height() >= $(document).height() - 400) {
        //into teal larger footer section
        $("#footer").addClass("background-color2");
    } 
   if($(window).scrollTop() + $(window).height() < $(document).height() - 400) {
        //above teal larger footer section
     $("#footer").removeClass("background-color2");   
     $("#footer").addClass("background-color");
    } 
 });