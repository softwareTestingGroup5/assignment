import defaultToAny from '../src/defaultToAny';

test('defaultToAny with null', async () => {
    expect(defaultToAny(null,1)).toBe(1);
})
test('defaultToAny with NaN', async () => {
    //didn't pass
    expect(defaultToAny(NaN,3,2)).toBe(2);
})
test('defaultToAny with undefined', async () => {
    expect(defaultToAny(undefined,3)).toBe(3);
})
test('defaultToAny with defined value', async () => {
    expect(defaultToAny(10,4)).toBe(10);
})
test('defaultToAny with defined value', async () => {
    expect(defaultToAny(null,10,4)).toBe(10);
})
test('defaultToAny with double null at begining', async () => {
    expect(defaultToAny(null,null,8)).toBe(8);
})