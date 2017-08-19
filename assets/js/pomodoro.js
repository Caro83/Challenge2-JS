$(function() {
	var second = 1500;
	var time;
	var once = true;
	
	$("#start").click(function() {
		if(once) {
			time = setInterval(function() {
			second-=1;
			$("#compteur").html(second);
			}, 1000);

			once = false;
		}	
	});

	$("#reset").click(function() {
		second = 1500;

		$("#compteur").html("0");

		if (once === false) {
			clearInterval(time);
		}

		once = true;
	});

	$("#pause").click(function() {
		clearInterval(time);
		$("#compteur").html(second);

		once = true;

	});	

});