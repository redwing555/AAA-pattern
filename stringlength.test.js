const { expect } = require('@jest/globals')
const stringLength = require('./stringlength')

test("the length is right", () => {
    expect(stringLength('hello man')).toBe(9)

});

test("should throw an error if string too long", ()=> {
    expect(() => {stringLength('this is great to see !');}).toThrow('String too long!');
});

test("should throw an error if string empty", ()=> {
    expect(() => {stringLength('');}).toThrow('String empty');
});



