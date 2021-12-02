import compact from '../src/compact.js';

const array = [2, 5, `false`, `null`, `0`, `""`, 4, `undefined`, `NaN`, 1];

test('Remove falsey values', async () => {
    expect(compact(array)).toStrictEqual([2, 5, 4, 1]);
})

const array2 = [1, 2, 3, 4, 5];

test('Array with no falsey values', async () => {
    expect(compact(array2)).toStrictEqual([1, 2, 3, 4, 5]);
})

const array3 = null;

test('Null array', async () => {
    expect(compact(array3)).toStrictEqual([]);
})

const array4 = [];

test('Empty array', async () => {
    expect(compact(array4)).toStrictEqual([]);
})