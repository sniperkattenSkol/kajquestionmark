setInterval(function(){spinss();},1000);
	var x = 0;
	function spinss() {
		x++;
		document.getElementById("dspnumb").innerHTML = x;
	}
