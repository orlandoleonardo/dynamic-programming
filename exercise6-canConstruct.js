/*
Write a function 'canConstruct(target, wordBank)' that accepts a target string and an array of strings.

The function should return a boolean indicating wether or not the 'target' can be constructed by concatenating elements of the 'wordbank' array.

You may reuse elements of 'wordBank' as many times as needed.
*/

const canConstruct  = (target, wordbank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target ==='') return true;

    for (let word of wordbank){
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            memo.add(suffix);
            if(canConstruct(suffix, wordbank, memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }

    return false;
} 


//analyzing complexity ---- Brute force
//m = target.length --> height of the tree
//n = wordBank.lenght --> how many words in wordbank
//O(m^n) --time complexity
//O(m * m) --space complexity

//analyzing complexity ---- memoized
//m = target.length --> height of the tree
//n = wordBank.lenght --> how many words in wordbank
//O(n * m^2) --time complexity
//O(m * m) --space complexity