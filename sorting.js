let value = [2,3,7,1,5,6];

function bubblesort(arrayy){
	do{
		var swap =false;
		for(var i =0;i<arrayy.length;i++){
			if(arrayy[i]>arrayy[i+1]){
				var temp =arrayy[i];
				arrayy[i]=arrayy[i+1];
				arrayy[i+1]=temp;
				swap=true;
			}
		}
	}while(swap==true)

};

function insertionsort(arrayy){
	var length=arrayy.length;
	for(var i =1;i<length;i++){
		var temp = arrayy[i];
		var j=i-1;
		for(;j>=0&&arrayy[j]>temp;j--){
			arrayy[j+1]=arrayy[j];
		}
		arrayy[j+1]=temp;
	}
};
// insertionsort(value);
// bubblesort(value);
// console.log(value);

let fer = 65;
let cel = (fer-32)*5/9;

// console.log(cel);


