
const capitalize = require("./capitalizestring");


test('First letter capitalized', () => {

    expect(capitalize('this')).toMatch(/^This$/);

})