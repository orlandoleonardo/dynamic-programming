/*
Say that you are a traveler on a 2D grid. You begin in the top-left corner
and your goal is to travel to the bottom-right coner. You may noly move down or right.

In how many ways can you travel to the goal on a grid with dimensions m * n?
*/

const gridTraveler = (m, n, memo ={}) => {
    const key = m + ',' + n; 
    if (key in memo) return memo[key];
    if (n===0 || m===0) return 0;
    if (n===1 && m===1) return 1;
    memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
    return memo[key];
}

console.log(gridTraveler(1,1));
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,2));
console.log(gridTraveler(18,18));