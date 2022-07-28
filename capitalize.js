function capitalize(string){
    let tempString = string[0];
    return tempString.toUpperCase() + string.substring(1);
}
module.exports = capitalize;