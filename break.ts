//break statement is used terminate a loop or switch:
 let no:number=1;

 for(let i=0;i<=10;i++){
    if(i%2===0){
        console.log(i);
        ++no;
    }
    if(no===5){
        break;   
    }
 }
 
 console.log(`if the count of the no is ${no} the break is working`);
