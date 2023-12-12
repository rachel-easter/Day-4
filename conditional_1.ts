//simple if statement:
//check the given number is greater than 10
//Example-1:
let no:number=11;
if(no>10){
    console.log("the given number is greater than 10");
}

//if..else:
//find the given number is odd or even 

let value:number=12;
if(value%2!==0){
    console.log("number is odd");
}
else{
    console.log("number is even");
}

//if ...else if...else statement


let Name:string='Rachel';

if(Name==='Sam'){
    console.log("Its Sam");
}
else if(Name==='Rani'){
    console.log("Its Rani");
}
else{
    console.log("I'ts not Sam and also Rani ");
}
//terinary operator:
let today:string='tuesday';

let res:string=today==='saturday'?'day out':'work';

console.log(res);
