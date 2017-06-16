const input = prompt("enter text = ").toLowerCase();
let vcount =0, ccount =0,scount=0;
function checkv(letter){
	if(letter=='a'||letter=='e'||letter=='i'||letter=='o'||letter=='u'){
		return true;
	}
}

for(let i =0;i<input.length;i++){
	if(input[i]==" "){
		scount++
	}else if(checkv(input[i])==true){
		vcount++;
	}else{
		ccount++;
	}
}

console.log("vowel = "+vcount);
console.log("consonant = "+ccount);