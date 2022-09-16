// box.addEventListener('click', function() {
// 	alert(`fff`)
// });

// box.onclick = function() {
// 	alert(`click`)
// }

// box.oncontextmenu = function() {
// 	alert(`right`)
// }

// box.ondblclick = function() {
// 	alert(`2click`)
// }

// box.ondblclick = function() {
// 	alert(`2click`)
// }
let box = document.getElementById('box');
let wrap = document.getElementById('wrap');
let btnClear = document.getElementById('btnclear');

let c = 0;

// let col = 0;

// let colors = [`green`, 'orange', 'red', 'blue', 'pink']
// let colorIndex = -1;

// box.onmouseenter = function() {
// 	colorIndex++;
// 	if(colorIndex > colors.length-1) {
// 		colorIndex = 0;
// 		box.style.backgroundColor = colors[colorIndex];
// 	}else{
// 		box.style.backgroundColor = colors[colorIndex];
// 	}
// }

// box.onmouseleave = function(){
// 	c = 0;
// 	box.innerText = '';
// }

box.onmousedown = function() {
	c++;
	box.innerText = c;
	box.style.top = '3px';
	box.style.boxShadow = '0 1px 5px #bbb';

}
box.onmouseup = function(){
	box.style.top = '0';
	box.style.boxShadow = '0 5px 10px #999';

}
box.oncontextmenu = function() {
	box.innerText = '';
}


btnClear.onmousedown = function() {
	c = 0;
	box.innerHTML = '';
	btnClear.style.display = "none";
}


// wrap.onmousemove = function() {
// 	let randomcolor = Math.floor(Math.random()*16777216).toString(16);
// 	wrap.style.backgroundColor = '#' + randomcolor;
// }






