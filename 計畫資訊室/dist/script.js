var percent = 0

var timer = setInterval(function(){
  $(".bar").css("width",percent+"%")
  percent+=0.5
  if (percent>102){
    $(".pageLoading").addClass("complete")
    clearInterval(timer)
  }
},20)

$(".backtoindex").click(function () {
  window.history.back();
});

$(function(){
  AOS.init();
})