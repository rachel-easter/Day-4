//while...loop:
//entry-level condition check loop
//executes till the condition becomes false
let roll:number=1;
while(roll<=10){
    console.log(`selected number ${roll}`);
    roll++;
}

//do...while loop:
//exit-level loop
//the first one time the loop will be execute:
console.log("DO...WHILE LOOP");
let even:number=2;

do{
    console.log(even);
}while(even%2!==0)

let counter = 0;

while (true) {
    console.log(`Current counter value: ${counter}`);

    // Increment the counter
    counter++;

    // Check if the counter reaches a certain value
    if (counter === 5) {
        console.log('Breaking out of the loop prematurely.');
        break; // This will exit the loop immediately
    }
}
