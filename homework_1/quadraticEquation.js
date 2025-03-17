const assert = require('assert');


function quadraticEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c

    if (a === 0 || discriminant < 0) {
        return [];
    }

    const sqrt = Math.sqrt(discriminant);

    const root1 = (-b + sqrt) / 2 * a;
    const root2 = (-b - sqrt) / 2 * a;

    if (root1 === root2) {
        return [root1];
    }

    return [root1, root2];
}

assert.deepStrictEqual(quadraticEquation(1, -8, 72), []);
assert.deepStrictEqual(quadraticEquation(1, 12, 36), [-6]);
assert.deepStrictEqual(quadraticEquation(1, 6, 1), [-0.1715728752538097, -5.82842712474619]);
