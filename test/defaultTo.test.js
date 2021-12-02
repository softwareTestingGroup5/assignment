import defaultTo from '../src/defaultTo';

test('defaultTo with null', async () => {
    expect(defaultTo(null,1)).toBe(1);
})
test('defaultTo with NaN', async () => {
    expect(defaultTo(NaN,2)).toBe(2);
})
test('defaultTo with undefined', async () => {
    expect(defaultTo(undefined,3)).toBe(3);
})
test('defaultTo with defined value', async () => {
    expect(defaultTo(10,4)).toBe(10);
})

test('defaultTo with both parameters=null', async () => {
    expect(defaultTo(null,null)).toBe(null);
})




