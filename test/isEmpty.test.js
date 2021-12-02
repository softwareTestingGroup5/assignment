import isEmpty from '../src/isEmpty';

test('testing with null', async () => {
    expect(isEmpty(null)).toBeTruthy();
})

test('testing with single value', async () => {
    expect(isEmpty(true)).toBeTruthy();
})

test('testing with single integer value', async () => {
    expect(isEmpty(1)).toBeTruthy();
})
test('testing withouth parameter', async () => {
    expect(isEmpty()).toBeTruthy();
})
test('testin with args', async () => {
    expect(isEmpty(function() { return arguments }())).toBeTruthy();
})

test('testing with empty array', async () => {
    expect(isEmpty([])).toBeTruthy();
})

test('testing with non-empty array', async () => {
    expect(isEmpty([1,2,3])).toBeFalsy();
})

test('testing with empty map', async () => {
    const testMap = new Map();
    expect(isEmpty(testMap)).toBeTruthy();
})
test('testing with non-empty map', async () => {
    const testMap2 = new Map();
    testMap2.set('a',1);
    expect(isEmpty(testMap2)).toBeFalsy();
})
test('testing with empty set', async () => {
    const testSet = new Set();
    expect(isEmpty(testSet)).toBeTruthy();
})
test('testing with non-empty set', async () => {
    const testSet = new Set();
    testSet.add(1)
    testSet.add(2)
    expect(isEmpty(testSet)).toBeFalsy();
})
test('testing with function', async () => {
    function testFunction() {
        this.name={'test':'a'}
    };
    let testable = new testFunction('test')
    expect(isEmpty(testable)).toBeFalsy();
})
test('testing with non-empty prototype', async () => {
    function testFunction() {
        this.name={'test':'a'}
    };
    let testable = testFunction.prototype.name="hello";
    expect(isEmpty(testable)).toBeFalsy();
})
test('testing with empty prototype', async () => {
    function test(){}
    expect(isEmpty( test.prototype)).toBeTruthy();
})
test('testing with array string', async () => {
    expect(isEmpty( ["this","is","a","test"])).toBeFalsy();
    
})
test('testing with string', async () => {
    expect(isEmpty("test")).toBeFalsy();
})