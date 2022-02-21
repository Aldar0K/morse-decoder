const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

module.exports = {
    decode
}

function decode(expr) {
    let letters = [];
    let morseLetter = [];
    let resultArr = [];

    for (let i = 0; i < expr.length; i += 10) {
        letters.push(expr.substr(i, 10));
    }

    letters.forEach(item => {
        if (item == '**********') resultArr.push(' ');
        let splittedArr = item.split('');

        for (let i = 0; i < splittedArr.length; i++) {
            if (splittedArr[i] == 0) {
                splittedArr.shift();
                i -= 1;
            } else break;
        }

        for (let i = 0; i < splittedArr.length; i = i + 2) {
            if (splittedArr[i].concat(splittedArr[i + 1]) === '10') {
                morseLetter.push('.')
            } else if (splittedArr[i].concat(splittedArr[i + 1]) === '11') {
                morseLetter.push('-')
            }
        }
        let morseStr = morseLetter.join('');

        for (let key in MORSE_TABLE) {
            if (key === morseStr) {
                resultArr.push(MORSE_TABLE[key]);
            }
        }
        morseLetter = [];
    });

    return resultArr.join('');
}