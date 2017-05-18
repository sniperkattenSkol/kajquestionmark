setInterval(function(){spinss();},10000);
	var x = 1;
	var two = 2;
	function spinss() {
		x = x + two;
		
		document.getElementById("dspnumb").innerHTML = x;
	}
