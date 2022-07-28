const reverseString = require('./reverseString');

test('Reverses a string correctly a word', () =>{
    expect(reverseString("Word")).toBe("droW");
});

test('Reverses a string with numbers correctly', () => {
    expect(reverseString("12AbC")).toBe("CbA21");
});

test('Revers a string with only 1 letter', () => {
    expect(reverseString("A")).toBe("A");
});