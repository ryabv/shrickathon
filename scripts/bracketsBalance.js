const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
};

function bracketsBalance(str) {
    let isBalanced = true;
    let bracketsString = '';

    for (let i = 0; i < str.length; i++) {
        if (   str[i] === '(' 
            || str[i] === '{' 
            || str[i] === '['
            || str[i] === ')' 
            || str[i] === '}' 
            || str[i] === ']') {
                bracketsString += str[i];
        }
    }

    if (bracketsString.length % 2 === 1) {
        isBalanced = false;
        return isBalanced;
    }

    for (let i = 0; i < (bracketsString.length / 2); i++) {
        let closingBr = brackets[bracketsString[i]];
        let start = bracketsString.indexOf(bracketsString[i]);
        let end = bracketsString.lastIndexOf(closingBr);
        let substr = bracketsString.slice(start, end + 1);

        if (substr.length % 2 === 1) {
            isBalanced = false;
            break;
        }
    }
    
    return isBalanced;
}