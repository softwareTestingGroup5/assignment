import at from '../src/at.js';

const object = {'a': 1, 'b':[{'b1':2}, {'b2':{'c': 6}}, 5], 'f':3, 'gaa': 'baa'};

test('Simple', async () => {
    expect(at(object, ['a', 'f', 'gaa'])).toStrictEqual([1, 3, 'baa']);
})

test('Complex', async () => {
    expect(at(object, ['b[0].b1', 'b[1].b2.c', 'b[2]'])).toStrictEqual([2, 6, 5]);
})

test('Invalid path', async () => {
    expect(at(object, ['c[1].a', 'b[1].b2.c', 'b[2]'])).toStrictEqual([undefined, 6, 5]);
})

const emptyObject = {};
test('Empty object', async () => {
    expect(at(emptyObject, ['a'])).toStrictEqual([undefined]);
})