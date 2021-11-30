import add from '../src/add.js';

test('Positive integers', async () => {
    expect(add(2, 3)).toBe(5);
})

test('Negative and positive', async () => {
    expect(add(-1, 1)).toBe(0);
})

test('Zeros', async () => {
    expect(add(0, 0)).toBe(0);
})

test('Both negative', async () => {
    expect(add(-1, -1)).toBe(-2);
})

test('Larger integers', async () => {
    expect(add(256, -512)).toBe(-256);
})

test('Floats', async () => {
    expect(add(1.25, 1.25)).toBe(2.5);
})