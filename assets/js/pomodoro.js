$(function() {
	var second = 1500;
	var timer;
	var once = true;
	
	function secondsTimeSpanToMS(s) {
	    var m = Math.floor(s/60); //Get remaining minutes
	    s -= m*60;
	    return /*h+":"+*/(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); 
	}

	

	$("#start").click(function() {
		if(once) {
			timer = setInterval(function() {
			second-=1;
			$("#timer").html(secondsTimeSpanToMS(second));
			if (second === 0) {
				clearInterval(timer);
			}
			}, 1000);

			once = false;
		}	
	});

	$("#reset").click(function() {
		second = 1500;

		$("#timer").html(secondsTimeSpanToMS(0));

		if (once === false) {
			clearInterval(timer);
		}

		once = true;
	});

	$("#pause").click(function() {
		clearInterval(timer);
		$("#timer").html(secondsTimeSpanToMS(second));

		once = true;

	});	

});