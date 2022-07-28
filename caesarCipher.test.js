const caeserCipher = require('./caesarCipher');

test ('Can shift a word', () => {
    expect(caeserCipher('abcdef')).toBe('cdefgh');
});