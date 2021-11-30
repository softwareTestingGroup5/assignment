import chunk from '../src/chunk';

var array = [1, 2, 3, 4, 5];
var arrayOneElem = ['one'];
var emptyArray = [];

test('Chunk size one', async () => {
    expect(chunk(array, 1)).toBe([[1], [2], [3], [5]]);
})
test('Chunk size two', async () => {
    expect(chunk(array, 2)).toBe([[1, 2], [3, 4], [5]]);
})
test('Chunk size greater than array size', async () => {
    expect(chunk(array, 7)).toBe([[1, 2, 3, 4, 5]]);
})
test('Empty array', async () => {
    expect(chunk(emptyArray, 2)).toBe([]);
})
test('Array of one element', async () => {
    expect(chunk(arrayOneElem, 2)).toBe([['one']]);
})