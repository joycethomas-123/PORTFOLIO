$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
  });

  //toggle menu/navbar script
  $('.list-btn').click(function(){
       $('.navbar .list').toggleClass("active");
       $('.list-btn i').toggleClass("active");
  });

});
