let topPos = 50;
let leftPos = 50;

target.onmouseenter = function() {
	topPos = Math.floor(Math.random() *100);
	leftPos = Math.floor(Math.random() *100);
	target.style.top = topPos + "%"
	target.style.left = leftPos + "%"
}

target.onclick = function() {
	alert(`Злови мене`)
}

document.body.onmousemove = function(e) {
	console.log(e.clientY)
	cursor.style.top = e.clientY + "px"
	cursor.style.left = e.clientX  + "px"

}

chiken.onclick = function() {
	target.style.backgroundImage = "url('./skins/cheken.png')";

}