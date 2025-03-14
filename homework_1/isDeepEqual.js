const assert = require("assert");


function isDeepEqual(obj_1, obj_2) {
    if (obj_1 === obj_2) {
        return true;
    }

    if (obj_1 === null || obj_2 === null || typeof obj_1 !== "object" || typeof obj_2 !== "object") {
        return false;
    }

    const keys_1 = Object.keys(obj_1);
    const keys_2 = Object.keys(obj_2);

    if (keys_1.length !== keys_2.length) {
        return false;
    }

    keys_1.forEach(key => {
        if (!keys_2.includes(key) || !isDeepEqual(obj_1[key], obj_2[key])) {
            return false;
        }
    });

    return true;
}


// Test cases
const a = { prop1: 1, list: [1, 2, 3], o: { x: 2 } };
const b = { list: [1, 2, 3], o: { x: 2 } };

assert.strictEqual(isDeepEqual(a, b), false);

b.prop1 = 1;
assert.strictEqual(isDeepEqual(a, b), true);
