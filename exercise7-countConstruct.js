/*
Write a function 'countConstruct(target, wordBank)' that accepts a target string and an array of strings.

The function should return the number of ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array.

You may reuse elements of 'wordBank' as many times as needed.

 */

const counConstruct = (target, wordBank, memo = {}) => {
    if (target === '') return 1;
    if (target in memo) return memo[target];

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0){
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCOunt
}

//m = target.length
//n = wordBank.length

//brute force
//O(n^m) time
//O(m^2) space

//memoized
//O(n*m^2) time
//O(m^2) space