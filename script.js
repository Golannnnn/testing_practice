const capitalize = string => {
    const array = string.split(" ");
    let newArray = [];

    array.forEach(e => {
        let firstLetter = e.charAt(0);
        let remainingLetters = e.slice(1);
        let capitalizedLetter = firstLetter.toUpperCase();
        newArray.push(capitalizedLetter + remainingLetters);
    });
    
    return newArray.join(" ");
}

const reverse = string => {
    let newString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }

    return newString;
}

const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    divide(a, b) {
        return a / b;
    },

    multiply(a, b) {
        return a * b;
    }
}

const caesarCipher = (string, num) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let array = string.toLowerCase().split('');

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (array[i] === alphabet[j]) {
                let value = j + num;
                if (value > 25) value -= 26;
                array[i] = alphabet[value];
                break;
            }
        }
    }

    return array.join('');
}

const analyzeArray = array => {
    const obj = {};

    if (array.length === 0) return obj;

    const sum = array.reduce((prev, cur) => prev + cur, 0) / array.length;
    obj.average = sum;

    const minimum = array.reduce((prev, cur) => Math.min(prev, cur));
    obj.min = minimum;

    const maximum = array.reduce((prev, cur) => Math.max(prev, cur));
    obj.max = maximum;

    obj.length = array.length;

    return obj;
}

export { capitalize, reverse, calculator, caesarCipher, analyzeArray };