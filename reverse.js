const input = prompt("Enter n = ");
let n = input;
let reverseint =0;
while(n!=0){
	let remainder = n%10;
	reverseint = reverseint *10 + remainder;
	n = parseInt(n/10);
}
console.log(reverseint);