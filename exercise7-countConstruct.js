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