const { expect } = require('@jest/globals')
const stringLength = require('./stringlength')

test(`the length is right (= ${stringLength('relentlessly')}) `, () => {
    expect(stringLength('relentlessly')).toBe(12)

});

