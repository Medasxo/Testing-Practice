function caeserCipher(string){
    let result = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newalpha = shift(2, "abcdefghijklmnopqrstuvwxyz");
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++){
        let index = alphabet.indexOf(string[i]);
        result += newalpha[index];
    }
    return result;

}
function shift(n, alphabet){
    let newalpha ="";
	for (let i = 0; i < alphabet.length; i++){
		let offset = (i + n) % alphabet.length;
		newalpha += alphabet[offset];
	}
    return newalpha;
}

module.exports = caeserCipher;