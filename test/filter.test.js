import filter from '../src/filter';


test('filtering ',async()=>{
    var testArray=[
        {'name':'Mark','value':true},
        {'name':'John','value':false},
        {'name':'Jim','value':true}
    ]
    var test = filter(testArray,({ value})=>value);
    expect(test).toStrictEqual([{'name':'Mark','value':true},{'name':'Jim','value':true}])
})


test('filtering',async()=>{
    var testArray=[
        {'name':'Mark','value':true},
        {'name':'John','value':false},
        {'name':'Jim','value':true}
    ]
    var test = filter(testArray,({name})=>name=='Mark');
    expect(test).toStrictEqual([{'name':'Mark','value':true}])
})

test('filter with not existing value.',async()=>{
    var testArray=[
        {'name':'Mark','value':true},
        {'name':'John','value':false},
        {'name':'Jim','value':true}
    ]
    var test = filter(testArray,({notExist})=>notExist);
    expect(test).toStrictEqual([[]])
})

test('filter with null as array',async()=>{
    expect(filter(null,({ value})=>value)).toStrictEqual([[]])
})

test('empty array',async()=>{
    expect(filter([[]],({ value})=>value)).toStrictEqual([[]])
})