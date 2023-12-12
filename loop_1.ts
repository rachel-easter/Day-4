//for loop:
import * as readlineSync from 'readline-sync';

for(let i=0;i<5;i++){
    console.log(i);
}
//for...in:
let arr:number[]=readlineSync.question("enter the element in the array:").split(' ').map(Number);
for(var index in arr){
       //console.log(index);
       console.log(`Element ${index} : ${arr[index]}`);
}

//for...of:

let array:string[]=readlineSync.question("Enter the element in the array:").split(' ');
for(var ele of array){
    console.log(`Before the increment the array element: ${ele}`);
    ele=ele.concat("ly");
    console.log(`After the increment the element: ${ele}`);

}



