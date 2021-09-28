const reverseString = require('./stringreverse')

test('string is reversed',() =>{
     expect(reverseString("hello")).toMatch(/^olleh$/);
    })
