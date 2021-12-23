
$(document).ready(function()
{
  $(".item").children("div.title5").animate({top: -60}, 300);
  $(".item").children("div.desc").animate({bottom: -40}, 300);
  $(".item").hover(
  			function()
  			{
  				//$(this).children("img").stop().animate({opacity: 0.8}, 700, "easeInSine");
  				$(this).children("div.title5").stop().animate({top: 0}, 700, "easeOutBounce");
  				$(this).children("div.desc").stop().animate({bottom: 0}, 700, "easeOutBounce");
  			},
  			function(){
  				//$(this).children("img").stop().animate({opacity: 1}, 700);
  				$(this).children("div.title5").stop().animate({top: -60}, 500);
  				$(this).children("div.desc").stop().animate({bottom: -40}, 400);
  			}
  			);
        $(".title5, .desc").hover(
			function()
			{
				$(this).stop().animate({backgroundColor: "#333"}, 700, "easeOutSine");
			},
			function(){
				$(this).stop().animate({backgroundColor: "#000"}, 700);
			}
			);
/* test title down
$(".lvl1-title").children("div.title").animate({top: -50}, 1000);
    $(".lvl1-title").hover(
      function()
      {
        $(this).children("div.title").stop().animate({top: 0}, 700, "easeOutBounce");
      },
      function(){
        $(this).children("div.title").stop().animate({top: -50}, 500);
      });
      $(".title").hover(
        function()
  			{
  				$(this).stop().animate({backgroundColor: "#AAAAAA"}, 700, "easeOutSine");
  			},
  			function(){
  				$(this).stop().animate({backgroundColor: "#FFFFFF"}, 700);
  			}
  			);
*/

        /*background menu*/
        $(".background_menu, .eff-btn").hover(
          function()
          {
            $(this).stop().animate({opacity: 1}, 400);
          },
          function(){
            $(this).stop().animate({opacity: 0.5}, 400);
          }
          );
});
