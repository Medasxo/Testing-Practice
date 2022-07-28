const capitalize = require('./capitalize');
test('capitalizes word correctly', () =>{
    expect(capitalize("word")).toBe("Word");
});

test('capitalizes 1 letter correctly', () =>{
    expect(capitalize("a")).toBe("A");
});

test('capitalizes word with numbers correctly', () => {
    expect(capitalize("a123B")).toBe("A123B");
});