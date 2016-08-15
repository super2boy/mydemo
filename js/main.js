$("a").mouseover(function(){
  $("a").css("background-color","");
});
$(document).ready(function(){
  $("a").mouseover(function(){
    $(this).parent().addClass("import");
  });
  $("a").mouseout(function(){
    $(this).parent().removeClass("import");
  });
});


