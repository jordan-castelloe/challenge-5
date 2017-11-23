// initialize an empty array for the sequence
let fib = []; 

// set the first two values 
fib[0] = 0;
fib[1] = 1;

// start the loop at an index of two and break the loop when the sequence hits 500
for(i=2; i<500; i++){
    fib[i] = fib[i-2] + fib[i-1];

    if (fib[i] > 500) {
        break;
    }

} 

// the last number will be above 500, so pop it off the end of the array
fib.pop();

// output the array
console.log(fib);



   




   
   




    

