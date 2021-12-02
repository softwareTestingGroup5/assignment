import capitalize from '../src/capitalize.js';

test('Already capitalized', async () => {
    expect(capitalize('Test')).toStrictEqual('Test');
})

test('Lowercase word', async () => {
    expect(capitalize('test')).toStrictEqual('Test');
})

test('Uppercase word', async () => {
    expect(capitalize('TEST')).toStrictEqual('Test');
})

test('First is special character', async () => {
    expect(capitalize('_est')).toStrictEqual('_est');
})

test('First is number', async () => {
    expect(capitalize('1est')).toStrictEqual('1est');
})

test('Empty string', async () => {
    expect(capitalize('')).toStrictEqual('');
})

test('First is whitespace', async () => {
    expect(capitalize(' est')).toStrictEqual(' est');
})