$(function() {
	//Définition des variables
	var now = new Date();

	var day = now.getDate();
	var month = now.getMonth() + 1;
	var year = now.getFullYear();

	var nowHour;
	var nowMinute;
	var nowSecond;

	var second;
	var timer;
	var once = true;

	// Affiche un nombre à 2 chiffres
	function double(nb) {
		if(nb < 10) {
			nb = "0"+nb;
			return nb;
		}
		else {
			return nb;
		}
	}

	//Affiche la date
	$("#day").html(double(day));
	$("#month").html(double(month));
	$("#year").html(year);

	//Affiche l'heure
     function getdate(){
        var now = new Date();
        var nowHour = now.getHours();
        var nowMinute = now.getMinutes();
        var nowSecond = now.getSeconds();

        $("#nowHour").html(double(nowHour));
		$("#nowMinute").html(double(nowMinute));
		$("#nowSecond").html(double(nowSecond));
        setTimeout(function(){getdate()}, 1000);
        }

       getdate();

	// Convertit les secondes en minutes/secondes
	function secondsTimeSpanToMS(s) {
	    var m = Math.floor(s/60); 
	    s -= m*60;
	    return (m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); 
	}
	
	// Session de travail de 25 minutes
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

	// Pause de 5 minutes
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

	// Pause de 15 minutes
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

	// Relance le timer s'il est en pause
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

	// Met en pause le timer
	$("#stop").click(function() {
		clearInterval(timer);
		$("#timer").html(secondsTimeSpanToMS(second));

		once = true;

	});	

	// Réinitialise le timer
	$("#reset").click(function() {
		second = 0;

		$("#timer").html(secondsTimeSpanToMS(0));

		if (once === false) {
			clearInterval(timer);
		}

		once = true;
	});

});