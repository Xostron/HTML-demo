

var repeatCount = 70; //
var date_repeat = "24.12.2021";
var ratio_repeat = "95%";
var learningWords = 750;
var date_learning = "21.12.2021"
var ratio_learning = "78%";
var light_field = "#86E9B5";

document.getElementById("translate_result").style.opacity = '0';
document.getElementById("text1").innerHTML = 'Repeat count: '+ repeatCount;
document.getElementById("text2").innerHTML = 'Last repeat date (RUS): '+ date_repeat;
document.getElementById("text3").innerHTML = 'W/L ratio: '+ ratio_repeat;

$(document).ready(function()
{
  /*effect for the buttons*/
  $(".background_menu, .eff-btn").hover(
    function()
    {
      $(this).stop().animate({opacity: 1}, 400);
    },
    function(){
      $(this).stop().animate({opacity: 0.5}, 400);
    }
    );


//light field words
    $(".my-output-field").hover(
      function()
      {
        $(this).stop().animate({backgroundColor: light_field}, 400);
      },
      function(){
        $(this).stop().animate({backgroundColor: '#FFFFFF'}, 400);
      }
    );

});


//toggle mode (repeat / learning)
function change_mode(){
  var repeat = document.getElementById("mode");
  if (repeat.checked){
    document.getElementById("translate_result").style.opacity = '0';
    document.getElementById("text1").innerHTML = 'Repeat count: '+ repeatCount;
    document.getElementById("text2").innerHTML = 'Last repeat date (RUS): '+ date_repeat;
    document.getElementById("text3").innerHTML = 'W/L ratio: '+ ratio_repeat;
    light_field = "#86E9B5";
  }else {
    document.getElementById("translate_result").style.opacity = '1';
    document.getElementById("text1").innerHTML = 'Learning words: '+ learningWords;
    document.getElementById("text2").innerHTML = 'Last learning date (RUS): '+ date_learning;
    document.getElementById("text3").innerHTML = 'W/L ratio: '+ ratio_learning;
    light_field = "#2c9ab1";
  }
}

//control btn: pos / neg
function next_right(){
  light_field = "#86E9B5";
$("#field_translate").stop().animate({backgroundColor: light_field}, 400);
document.getElementById("translate_result").style.opacity = '1';
}
function next_wrong(){
  light_field = "#FF9062";
$("#field_translate").stop().animate({backgroundColor: light_field}, 400);
document.getElementById("translate_result").style.opacity = '1';
}
