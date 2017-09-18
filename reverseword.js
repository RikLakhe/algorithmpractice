var input=prompt("enter word= ");
var output="";
var length =input.length;
for(var i = length;i>0;i--){
	output+=(input.charAt(i));
}
console.log(output);