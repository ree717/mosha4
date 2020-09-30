$(function(){
$(".one").click(function(){
  $(".one").css("background-color","#0D0015");
  $(".one").css("color","#fff");
  $(".two").css("background-color","#fff");
  $(".two").css("color","#0D0015");

})
$(".two").click(function(){
  $(".one").css("background-color","#fff");
  $(".one").css("color","#0D0015");
  $(".two").css("background-color","#0D0015");
  $(".two").css("color","#fff");
})
$(".fa-bars").click(function(){

  if ($(".fa-bars").hasClass('close')) {
    $(".fa-bars").removeClass('close');
    $(".menu").css("display","none");
    $(".menu-list").css("display","none");


  } else {
    $(".fa-bars").addClass('close');
    $(".menu").css("display","block");

    $(".menu-list").css("display","block");
  }
});


});
