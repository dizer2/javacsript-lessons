// let i = 0 
// do {
// 	console.log(i);
// 	i++;
// } while(i < 3)

// let i = 10 
// do {
// 	console.log(i);
// 	i--;
// } while(i > -1)

// let i = 10 
// do {
// 	console.log(i);
// 	i=i-2;
// } while(i > 20)

// let i = 0;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// };

// let i = 100;
// while (i >= 0) {
// 	console.log(i);
// 	i--;
// };

// let i = 99;
// while (i >= 0) {
// 	console.log(i);
// 	i=i-2;
// };

// for(let i=0; i<20; i++) {
// 	console.log(i);
// }


// for(let i=20; i<50; i++) {
// 	console.log(i);
// }


// for(let i=100; i>=50; i--) {
// 	console.log(i);
// }

// for(let i=60; i>=10; i=i-2) {
// 	console.log(i);
// }

// for(let i=0; i<=30; i=i+5) {
// 	console.log(i);
// }


// let arr = [5, 
// 	6,
// 	3,
// 	11,
// 	23,
// 	4,
// 	55,
// 	32,
// 	1
// ];
// console.log(arr);

// let r = Math.random()*10;
// console.log(Math.floor(r));

// for (let i=0; i<arr.length; i++) {
// 	console.log(arr[i]);
// }

let arr = [];

while(arr.length!=100){
	arr.push(Math.floor(Math.random()*100));
}
console.log(arr);

let p=0;
let n=0;

for(let i=0; i<arr.length; i++){
	if(arr[i]%2==0) {
		p++;
	} else{
		n++;
	}
}
console.log('prani' + p);
console.log('Ne prani' + n);

let x = 0;
for (let i=0; i<arr.length; i++) {
	if(arr[i] > 30) {
		x++;
	}
}
console.log('Kilkist elementiv more 30:' + x);

let sum = 0;
for (let i=0; i<arr.length; i++) {
	sum+=arr[i];
}
console.log('Sum:' + sum)

let sumpar = 0;
for (let i=0; i<arr.length; i = i + 2) {
	sumpar = sumpar + arr[i];
}
console.log('Sum:' + sumpar)


let ampar = 1;
for (let i=0; i<arr.length; i = i + 2) {
	sumpar = sumpar + arr[i];
}
console.log('Sum:' + ampar)
for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 == 1) {
			arr[i]++;
	}
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 == 1) {
			arr[i]++;
	}
}
console.log(arr);