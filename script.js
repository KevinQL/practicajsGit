
	var x;

function ejecutar(){

	/*
	var x = document.getElementById("principal").onclick = mensaje;
	*/

	x = document.querySelectorAll("#principal img");

	x[0].addEventListener("click",mensaje,false);
	x[0].addEventListener("mouseover",function(){x[0].width = 225; x[0].height = 225;},false);
	x[0].addEventListener("mouseout",function(){x[0].width = 200; x[0].height = 200;},false);

	x[1].addEventListener("click",mensaje,false);
	x[1].addEventListener("mouseover",function(){x[1].width = 225; x[1].height = 225;},false);
	x[1].addEventListener("mouseout",function(){x[1].width = 200; x[1].height = 200;},false);

	x[2].addEventListener("click",mensaje,false);
	x[2].addEventListener("mouseover",function(){x[2].width = 225; x[2].height = 225;},false);
	x[2].addEventListener("mouseout",function(){x[2].width = 200; x[2].height = 200;},false);

	x[3].addEventListener("click",mensaje,false);
	x[3].addEventListener("mouseover",function(){x[3].width = 225; x[3].height = 225;},false);
	x[3].addEventListener("mouseout",function(){x[3].width = 200; x[3].height = 200;},false);

	x[4].addEventListener("click",mensaje,false);
	x[4].addEventListener("mouseover",function(){x[4].width = 225; x[4].height = 225;},false);
	x[4].addEventListener("mouseout",function(){x[4].width = 200; x[4].height = 200;},false);
}

function mensaje(){

	alert("Hola terricolaa!");

}

window.addEventListener("load",ejecutar,false);