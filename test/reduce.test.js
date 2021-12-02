import reduce from '../src/reduce';

test('reduce with int array', async () => {
    expect(reduce([1, 2], (a, b) => a + b, 0)).toBe(3);
})
test('reduce with int array longer than 3', async () => {
    expect(reduce([1, 2,3,4,5], (a, b) => a + b, 0)).toBe(15);
})
test('reduce with int array and positive accumalator', async () => {
    expect(reduce([1, 2], (a, b) => a + b, 2)).toBe(5);
})
test('reduce with int array and negative accumalator', async () => {
    expect(reduce([1, 2], (a, b) => a + b, -2)).toBe(1);
})

test('testing with null ', async () => {
    expect(reduce(null, (a, b) => a + b, 0)).toBe(0);
})
test('testing without acumalator', async () => {
    expect(reduce([1,2], (a, b) => a + b)).toBe(3);
})
test('testing with single value ', async () => {
    expect(reduce([2], (a, b) => a + b, 0)).toBe(2);
})

test('testing with zeroes  ', async () => {
    expect(reduce([0,0,0,0,0,0,0,0,0,0,0], (a, b) => a + b, 0)).toBe(0);
})

test('testing with negatice values ', async () => {
    expect(reduce([-1,-2,-3,-4,-5], (a, b) => a + b, 0)).toBe(-15);
})

test('testing using object', async () => {
    let testObject = { 'a': 1, 'b': 1, 'c': 2 ,'d':4}
    const testIteratee = (result, value, key) => {
           (result[value] || (result[value] = [])).push(key)
           return result
        }

    let expected= {'1':['a','b'],'2':['c'],'4':['d']}
    expect(reduce(testObject,testIteratee,{})).toStrictEqual(expected)
})

test('testing using empty object', async () => {
    let testObject = {}
    const testIteratee = (result, value, key) => {
           (result[value] || (result[value] = [])).push(key)
           return result
        }

    let expected= {}
    expect(reduce(testObject,testIteratee,{})).toStrictEqual(expected)
})