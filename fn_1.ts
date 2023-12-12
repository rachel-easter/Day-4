//what is function:
//Example-1:
//using type annotation(mannual) is good compare to type inference(auto assign)
import * as readlineSync from 'readline-sync';
function calculator(s:string,a:number,b:number):void{

    if(s==="+"){
        console.log(`addition is ${a+b}`);
    }
    else if(s==="-"){
        console.log(`subtraction is ${a-b}`);
    }
    else if(s==="*"){
        console.log(`multiplication is ${a*b}`);
    }
    else if(s==="/"){
        var res:number=Math.floor(a/b);
        console.log(`division is ${res}`);
    }

}
var s:string=readlineSync.question('Enter the operation(+,-,*,/) ');
const a:number=parseInt(readlineSync.question());
const b:number=parseInt(readlineSync.question());
calculator(s,a,b);

//return type:

//concate two string and return a new string:

function two(a:string,b:string):string{
    return a.concat(b);
}
var g:string=readlineSync.question();
var h:string=readlineSync.question();

var result=two(g,h);
console.log(result);
