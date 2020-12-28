/* 
Write a function 'bestSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.

The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.

If there is a tie for the shortest combination, you may return any one of the shortest.

*/

const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination !== null){
            const combination = [...remainderCombination, num];
            if ( shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
            
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

//m = target sum
//n = numbers.lenght

//complexity brute force
//O(n^m * m) Time
//O(m * m) space

//complexity memoized
//O(m * n * m) Time
//O(m * m) space