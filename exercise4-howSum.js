/*
Write a function 'howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.

The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.

If there are multiple combinations possible, you may return any single one.

*/

const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if (remainderResult !== null){
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null
    return null;
}

//complexity brute force
//O(n^m * m) Time
//O(m) space

//complexity memoized
//O(n*m*m) Time
//O(m*m) space