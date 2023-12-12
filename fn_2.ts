// Regular function
function add(a: number, b: number): number {
    return a + b;
}

// Arrow function equivalent
const addArrow: (a: number, b: number) => number = (a, b) => a + b;


var result=add(1,2);
var res=addArrow(2,4);
console.log(result);
console.log(res);
