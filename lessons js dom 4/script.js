// document.body.onscroll = function() {
// 	console.log("scroling")
// }

// document.body.onresize = function() {
// 	console.log("resize")
// }


// wrap.oncopy = function() {
// 	console.log("авторіські права захищені");
// }



document.body.onblur = function() {
	console.log(`ти покину ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} `);
}

document.body.onfocus = function() {
	console.log(`ти прийшов ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
}



