	window.onload = function() {
	    var dv1Obj = document.getElementById("dv1");
	    var i1Obj = document.getElementById("i1");
	    var olObjs = my$("arr_ol").getElementsByTagName("li");



	    console.log(dv1Obj);
	    console.log(i1Obj);
	    console.log(olObjs);

	    i1Obj.onclick = function() {
	        dv1Obj.style.display = "none";
	    }

	    for (var i = 0; i < olObjs.length; i++) {
	        olObjs[i].onclick = function() {
	            olObjs[i].removeAttribute("class");


	            this.className = "current";
	        };
	    }
	}