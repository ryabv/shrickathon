const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
};

function getBracketsString(str) {
    return str.match(/[\(\)\[\]\{\}]/g).join('');
}

function bracketsBalance(str) {
    let string = getBracketsString(str);
    let stack = [];
    let isBalanced = true;

    if (string.length % 2 !== 0) {
        console.log('Нечётное количество скобок');
        return false;
    }

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '{' || string[i] === '[' || string[i] === '(') {
            stack.push(string[i]);
        } else {
            if (!stack.length) {
                console.log('Не хватает открывающей скобки');
                return false;
            }

            let lastEl = stack.pop();
            if (string[i] !== brackets[lastEl]) {
                console.log(string[i]);
                console.log('Нарушен порядок следования скобок');
                return false;
            }
        }
    }

    if (stack.length) {
        console.log('Скобки непарные');
        return false;
    }

    return isBalanced;
}