let input = prompt("Enter a number to check for palindrome = ");
let n = input;
let remainder=0;
let reversedInteger=0;

do{
	 remainder= n%10;
	 reversedInteger=reversedInteger*10+remainder;
	 n=parseInt(n/10);
}while(n!=0)

if(input==reversedInteger){
	console.log("palindrome");
}else{
	console.log("not palindrome");
}