const calculator = require('./calculator');

test('Adds 2 numbers correctly', () => {
    let objectCalculator = new calculator(2,4);
    expect(objectCalculator.add()).toBe(6);
});

test('Substracts 2 numbers correctly', () => {
    let objectCalculator = new calculator(3,4);
    expect(objectCalculator.subtract()).toBe(-1);
});

test('Divides 2 numbers correctly', () => {
    let objectCalculator = new calculator(8,4);
    expect(objectCalculator.divide()).toBe(2);
});

test('Gives an error when dividing by 0', () => {
    let objectCalculator = new calculator(8, 0);
    expect(objectCalculator.divide()).toBe('Error');
});

test('Multiplies 2 numbers correctly', () => {
    let objectCalculator = new calculator(2, 4);
    expect(objectCalculator.multiply()).toBe(8);
});