$(document).ready(function(){
	var position="left";
	$(".b5fright").click(function(){
		if(position=="left")
		{
			$(".b5fright").css({color:"black"});
			$(".b5btn").css({transition:"0.8s","background-color":"#6d6d6dbf",transform:"translateX(3.6rem)"});
			$(".b5bdr").css({"background-color":"white"});
			position="right";
		}
		else
		{
					
		}
	});
	$(".b5fleft").click(function(){
		if(position=="right")
		{
			$(".b5fright").css({color:"#6d6d6dbf"});
			$(".b5btn").css({transition:"0.8s","background-color":"white",transform:"translateX(0rem)"});
			$(".b5bdr").css({"background-color":"black"});
			position="left";
		}
	});
});