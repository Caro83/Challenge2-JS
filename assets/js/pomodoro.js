$(function() {
	var second;
	var timer;
	var once = true;
	
	function secondsTimeSpanToMS(s) {
	    var m = Math.floor(s/60); 
	    s -= m*60;
	    return (m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); 
	}
	

	$("#work").click(function() {
		second = 1500;
		if(once) {
			timer = setInterval(function() {
			second-=1;
			$("#timer").html(secondsTimeSpanToMS(second));
			if (second === 0) {
				clearInterval(timer);
				alert("Travail terminé ! C'est l'heure de la pause");
			}
			}, 1000);

			once = false;
		}	
	});

	$("#break-5").click(function() {
		second = 300;

		if(once) {
			timer = setInterval(function() {
			second-=1;
			$("#timer").html(secondsTimeSpanToMS(second));
			if (second === 0) {
				clearInterval(timer);
				alert("Pause terminée ! Hop, au travail !");
			}
			}, 1000);

			once = false;
		}	

	});

	$("#break-15").click(function() {
		second = 900;

		if(once) {
			timer = setInterval(function() {
			second-=1;
			$("#timer").html(secondsTimeSpanToMS(second));
			if (second === 0) {
				clearInterval(timer);
				alert("Pause terminée ! Hop, au travail !");
			}
			}, 1000);

			once = false;
		}	

	});

	$("#start").click(function() {
		second = second;
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

	$("#stop").click(function() {
		clearInterval(timer);
		$("#timer").html(secondsTimeSpanToMS(second));

		once = true;

	});	

	$("#reset").click(function() {
		second = 0;

		$("#timer").html(secondsTimeSpanToMS(0));

		if (once === false) {
			clearInterval(timer);
		}

		once = true;
	});


});