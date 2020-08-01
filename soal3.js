let string = 'alagcgcdodol';

function checkDuplicate(string) {
    let output ='';
    for (let i = 0; i < string.length; i++) {
        if (output.includes(string[i])){
            continue;
        } else {
            output += string[i];
        }
    }
    return output;
}

console.log(checkDuplicate(string));