import add from '../src/add.js';

test('Add', async () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, -1)).toBe(-2);
    expect(add(256, -512)).toBe(-256);
    expect(add(1.25, 1.25)).toBe(2.5);
})