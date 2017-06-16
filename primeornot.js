const input = prompt("check prime n =");
let n = input;
let flag =0;
for(let i =2;i<n/2;i++){
	if(n%i==0){
		flag =1;
		break;
	}
}
if(flag == 0){
	alert("Prime Number");

}else{
	alert("not prime");
}