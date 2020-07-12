	window.onload = function() {
	    var dv1Obj = document.getElementById("dv1");
	    var i1Obj = document.getElementById("i1");


	    console.log(dv1Obj);
	    console.log(i1Obj);

	    i1Obj.onclick = function() {
	        dv1Obj.style.display = "none";
	    }

	}