import add from '../src/add.js';

test('Positive integers', async () => {
    expect(add(2, 3)).toStrictEqual(5);
})

test('Negative and positive', async () => {
    expect(add(-1, 1)).toStrictEqual(0);
})

test('Zeros', async () => {
    expect(add(0, 0)).toStrictEqual(0);
})

test('Both negative', async () => {
    expect(add(-1, -1)).toStrictEqual(-2);
})

test('Larger integers', async () => {
    expect(add(256, -512)).toStrictEqual(-256);
})

test('Floats', async () => {
    expect(add(1.25, 1.25)).toStrictEqual(2.5);
})