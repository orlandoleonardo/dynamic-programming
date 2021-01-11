/*
Write a function 'fib(n))' that takes in a number as an argument. 
The function should return the n-th number of the Fibonacci sequence.
The 0st number of the sequence is 1.
The 1st number of the sequence is 1.
To generate the next number of the sequence, we sum the previous two.
*/

const fib = (n) => {
    const table = Array(n+1).fill(0);
    table[1] = 1;
    for (let i =0; i<(n+1); i++){
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }

    return table[n];

    console.log(table);
}

fib(6);