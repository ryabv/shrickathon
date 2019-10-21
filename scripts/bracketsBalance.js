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
        console.log('Не чётное количество скобок');
        return false;
    }

    for (let i = 0; i < string.length; i++) {
        if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
            stack.push(str[i]);
        } else {
            if (!stack.length) {
                console.log('Не хватает открывающей скобки');
                return false;
            }

            let lastEl = stack.pop();
            if (str[i] !== brackets[lastEl]) {
                console.log('Нарушен порядок следования скобок');
                return false;
            }
        }
    }

    if (stack.length) {
        console.log('Скобки не парные');
        return false;
    }

    return isBalanced;
}