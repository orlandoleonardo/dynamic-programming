/* 
Write a function 'allConstruct(target, wordBank) that accepts a target string and an array of strings.

The function should return a 2D array containing all ofthe ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array. Each element of the 2D array should represent one combination that constructs the 'target'.

You may reuse elements of 'wordBank' as many times as needed.
*/

const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if(target === '') return [[]];
    let responseArray = [];

    for (let word in wordBank){
        if (target.indexOf[word] === 0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank,memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            responseArray.push(...targetWays);
        }
    }
    memo[target] = responseArray;

    return responseArray;
}

//m = target.length
//n = wordBank.length

//Brute force
//O(n^m) time
//O(m) space