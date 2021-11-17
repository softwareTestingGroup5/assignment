import eq from '../src/eq';

test('Equality', async () => {
    expect(eq(5, 5)).toBeTruthy();
    expect(eq(-1, 1)).toBeFalsy();
})