let input = prompt(" Enter n = ");
let a =1;
let b =1;
var output=" "+a+" + "+b;
for(let i =0;i<input;i++){
	let sum = a+b;
	a=b;
	b=sum;
	output+=" + "+sum;
	console.log(output);
}
