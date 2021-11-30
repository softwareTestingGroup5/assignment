import capitalize from '../src/capitalize.js';

test('Trivial word', async () => {
    expect(capitalize('Test')).toBe('Test');
    expect(capitalize('test')).toBe('Test');
    expect(capitalize('TEST')).toBe('Test');
    expect(capitalize('tEST')).toBe('Test');
})

test('Special cases', async () => {
    expect(capitalize('1est')).toBe('1est');
    expect(capitalize('_est')).toBe('_est');
    expect(capitalize('')).toBe('');
    expect(capitalize('test case')).toBe('Test case');
    expect(capitalize('12345')).toBe('12345');
    expect(capitalize('a')).toBe('A');
    expect(capitalize('A')).toBe('A');
})