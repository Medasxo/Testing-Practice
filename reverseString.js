function reverseString(string){
    let tempString = "";
    for(let i = string.length-1;i>=0;i--){
        tempString += string[i];
    }
    return tempString;
}

module.exports = reverseString;