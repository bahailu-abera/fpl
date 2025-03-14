const assert = require("assert")

function isPalindrom(str) {
    const len = str.length;
    
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false;
        }
    }

    return true;
}


// Test cases
assert.strictEqual(isPalindrom("a"), true);
assert.strictEqual(isPalindrom(""), true);
assert.strictEqual(isPalindrom("abcdcba"), true);
assert.strictEqual(isPalindrom("abcddcba"), true);
assert.strictEqual(isPalindrom("abca"), false);
