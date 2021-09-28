


const { TestWatcher } = require('@jest/core')
const Calculator = require('./calculator')

let calcul = new Calculator();



describe('my calculator', () => {

    test('adds two numbers', () => {

        expect(calcul.add(4,5)).toBe(9);
    });

    test('subtract two numbers', () => {

        expect(calcul.subtract(4,5)).toBe(-1);
    });

    test('divide two numbers', () => {

        expect(calcul.divide(10,5)).toBe(2);
    });

    test('multiply two numbers', () => {

        expect(calcul.multiply(4,5)).toBe(20);
    });

    

});

