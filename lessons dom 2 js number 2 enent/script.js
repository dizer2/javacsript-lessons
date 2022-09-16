let body = document.getElementById('body');

// document.body.onkeydown = function(e){
// 	console.log(e)
// 	if(e.keyCode == 27){
// 		window.close();
// 	}
// }


document.body.onkeydown = function(g){
	console.log(g)
	if(g.keyCode == 82){
		wrap.style.backgroundColor = "red";
	}else if(g.keyCode == 71) {
		wrap.style.backgroundColor = "green";
	}
}



