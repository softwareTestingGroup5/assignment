import chunk from '../src/chunk';

var array = [1, 2, 3, 4, 5];
var arrayOneElem = ['one'];
var emptyArray = [];

test('Chunk size one', async () => {
    expect(chunk(array, 1)).toStrictEqual([[1], [2], [3], [5]]);
})

test('Chunk size two', async () => {
    expect(chunk(array, 2)).toStrictEqual([[1, 2], [3, 4], [5]]);
})

test('Chunk size greater than array size', async () => {
    expect(chunk(array, 7)).toStrictEqual([[1, 2, 3, 4, 5]]);
})

test('Empty array', async () => {
    expect(chunk(emptyArray, 2)).toStrictEqual([]);
})

test('Array of one element', async () => {
    expect(chunk(arrayOneElem, 2)).toStrictEqual([['one']]);
})

test('Chunk size zero', async () => {
    expect(chunk(array, 0)).toStrictEqual([]);
})

test('Null', async () => {
    expect(chunk(null, 1)).toStrictEqual([]);
})