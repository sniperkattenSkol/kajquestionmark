setInterval(function(){spinss();},1000);
	var x = 0;
	function spinss() {
		x++;

		if (x>=1000) {
				document.getElementById("dspnumb").innerHTML = x + " Har du Inget bättre för dig?";
		}else if (x>=100) {
			document.getElementById("dspnumb").innerHTML = x + " sekunder borta...";
		} else {
		document.getElementById("dspnumb").innerHTML = x;
	}
}
