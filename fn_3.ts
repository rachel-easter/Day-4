//optional parameter:
//if want use:syntax=parameter?:type

//example:

function print(a:string,b?:string){
    if(typeof b!=='undefined'){
        console.log(a.concat(b));
    }
    else{
console.log(a);
    }
}
print('hello');
print('hello','world');



