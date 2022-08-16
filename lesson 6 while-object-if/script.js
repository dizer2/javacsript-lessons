// let secret = Math.floor(Math.random()*100);
// console.log(secret);
// let myNum = -1;
// let n = 0;
// while(secret!=myNum) {
// 	myNum = prompt(`Введи число`);
// 	n++;
// 	if (myNum > secret){
// 		alert(`Число завелике`)
// 	} else{
// 		alert(`Число замале`)
// 	}
// }

// alert(`Ти переміг`);
// console.log(`Кількість спроа: ${n}`);

// let lvl;
// if ( n == 1){
// 	lvl = `Cheater`;
// } else {
// 	if ( n <=5) {
// 		lvl = `good`;
// 	} else {
// 		if (n <=8) {
// 			lvl = `Задовільний рівень`;
// 		} else {
// 			if (n <= 8) {
// 				lvl = `Спробуй ще`;
// 			}
// 		}
// 	}
// }
// console.log(lvl);



// let flip = Math.floor(Math.random()*100);
// if (flip > 50){
// 	console.log(`Орел`)
// } else if(flip < 50) {
// 		console.log(`Reshka`)
// }  else if (flip == 50) {
// 	console.log(`Монета на ребрі`)
// }
// console.log(Math.PI)
// console.log(Math.sqrt(16));
// console.log(Math.pow(16,3));

// let objects = {
// 	temperature: `sun`,
// 	humidity: 1.5,
// 	pressure: 3,
// 	windSpeed: 20,
// 	sity: `Lviv`,
// 	sunsetFinish: 2200,
// 	sunsetStart: 6.00
// };
// console.log(objects);



let db = [{
	name: 'Victor',
	code: 1601416,
	age: 14,
	length: 160,
	weight: 42,
	money: 252
},
{
	name: 'Taras',
	code: 1423243,
	age: 19,
	length: 180,
	weight: 50,
	money: 1000
},
{
	name: 'Alex',
	code: 4533333,
	age: 10,
	length: 110,
	weight: 45,
	money: 10
},
{
	name: 'Nastya',
	code: 89878789,
	age: 20,
	length: 160,
	weight: 60,
	money: 776
},
{
	name: 'Oleg',
	code: 66787998,
	age: 30,
	length: 180,
	weight: 90,
	money: 12323
},
{
	name: 'Valera',
	code: 76787876,
	age: 17,
	length: 190,
	weight: 110,
	money: 12
},
{
	name: 'John',
	code: 34343422,
	age: 9,
	length: 90,
	weight: 30,
	money: 776
},
{
	name: 'Yura',
	code: 7888765,
	age: 14,
	length: 150,
	weight: 56,
	money: 8998
},
{
	name: 'Andrii',
	code: 8898788,
	age: 18,
	length: 170,
	weight: 77,
	money: 677
},
{
	name: 'Yulia',
	code: 1215456,
	age: 7,
	length: 80,
	weight: 34,
	money: 0
}
]

console.log(db.length);
// 1
// for (let i = 0; i<db.length; i++){
// 	console.log(db[i].name)
// }
// // 2

// let count = 0;
// for (let i = 0; i<db.length; i++){
// 	if (db[i].age <= 1000) i++;{
// 	count++;
// 	}
// }
// console.log(count);

// let pc = [];
// let nc = [];
// for (let i = 0; i < db.length; i++) {
// 		if (db[i].code % 2 == 0) {
// 				let obj = {
// 						name: db[i].name,
// 						code: db[i].code
// 				}
// 				pc.push(obj);
// 		} else {
// 				let obj = {
// 						name: db[i].name,
// 						code: db[i].code
// 				}
// 				nc.push(obj);
// 		}
// }
// console.log(pc);
// console.log(nc);


// let massive = [`Roman`,
//     `Oleksiy`,
//     `Ira`,
//     `Taras`,
//     `Maskim`,
//     `Mikola`,
//     `Sofia`,
//     `Polina`,
//     `Valera`,
//     `Ivan`]
// console.log(massive);
// console.log(massive[0]);
// console.log(massive.at(-1));

let newNameMassive = [];

for (let i = 0; i < db.length; i++) {
	if (db[i].name.at(-1) === `a`) {
	   let odgg = {
			name: db[i].name
		 }
		 newNameMassive.push(odgg);
	}
}

console.log(newNameMassive);
