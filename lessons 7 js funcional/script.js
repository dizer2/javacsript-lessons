// function showMessage() {
// 	console.log(`hello`);
// }
// showMessage();


// function showMessage(name){
// 	alert(name)
// }
// showMessage(`hello`);


// function helloUser(name=`user`){
// 	alert(`hello ` + name)
// }
// helloUser(`Vitalik`);
// helloUser();


// function sum(a,b){
// 	console.log(a+b)
// }
// sum(4,5)


// function sum(a,b){
//  return a+b;
// }
// let res = 5*sum(5,6);
// console.log(res);


function showHello(){
	console.log(`hello`);
}
showHello();



function showWelcome(name=`user`){
	console.log(`hello ` + name)
}
showWelcome(`Yura`);


function showSum(a,b,c){
 return a+b+c;
}
let res = showSum(2,1,8);
console.log(res);


function showSum(a,b){
	return a-b;
 }
 let resw = showSum(8,3);
 console.log(resw);


//  function showSumSmall(a, b){
// 	if(a < b){
// 		console.log(a)
// 	}else if(b > a) {
// 		console.log(b)
// 	}
// 	return a>b;
//  }
//  showSumSmall(3,6);

 
//  function showSumBig(a, b){
// 	if(a > b){
// 		console.log(a)
// 	}else if(b < a) {
// 		console.log(b)
// 	}
// 	return a<b;
//  }
//  showSumBig(54,23);


function getSmallSum(a,b){
	if(a < b){
		return a;
	} else{
		return b;
	}
}
console.log(getSmallSum(5,19));

function getBIgSum(a,b){
	if(a > b){
		return a;
	} else{
		return b;
	}
}
console.log(getBIgSum(5,19));


function divBigSamll(a,b){
	return getBIgSum(a,b) / getSmallSum(a,b)
}
console.log(divBigSamll(10,5))
console.log(divBigSamll(5,10))


function getArea(a,b){
	return a*b;
}
console.log(getArea(3,3));


function getPerimetr(a,b){
	return (a+b)*2;
}
console.log(getPerimetr(3,3));


function calclLen(r){
	return 2*Math.PI*r
}

console.log(calclLen(5))


function calclLenq(r){
	return Math.PI*r*r
}

console.log(calclLenq(5))


function calcX (a,b,c) {
	if (a + b > c && a + c > b && c + b >a){
		return(true)
	}else{
		return(false)
	}
}

console.log(calcX(45,3,6));
