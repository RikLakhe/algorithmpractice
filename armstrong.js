const input = prompt("Enter the n =");
let count =0;
let sum = 0;

function size(value){
	while(value !=0){
		value = parseInt(value/10);
		count++;
	}
	return count;
}

function check(value){
	let n =value;
	var length =size(value);
	while(n!=0){
		let remainder = n %10;
		sum += Math.pow(remainder,length);
		n = parseInt(n/10);
	}
	if(sum == value){
		return true;
	}else{
		return false;
	}
}

if(check(input) == true){
	alert("armstorng");
}else{
	alert("not armstrong");
}