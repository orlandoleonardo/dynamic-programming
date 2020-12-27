/*
Write a function 'fib(n))' that takes in a number as an argument. 
The function should return the n-th number of the Fibonacci sequence.
The 1st and 2nd number of the sequence is 1.
To generate the next number of the sequence, we sum the previous two.
*/

//const fib = (n) => {
//    if (n <= 2) return 1;
//    return fib(n -1) + fib(n-2);
//}; //this version is very slow when n is high


const foo = (n) => {
    if (n >= 1) return;
    foo(n-1);
} //complexity -- O(n) time , O(n) space

const bar = (n) => {
    if (n <=1 ) return;
    bar (n-2);
} //complexity -- O(n) time , O(n) space 

const dib = (n) => {
    if (N <= 1) return;
    dib(n - 1);
    dib(n - 1);
} //complexity -- O(2^n) time , O(n) space

const lib = (n) => {
    if (n<= 1) return;
    lib(n-2);
    lib(n-2);
} //complexity -- O(2^n) time , O(n) space

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n]; 
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

console.log(fib(6));
