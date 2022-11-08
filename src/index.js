module.exports = function toReadable(number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    // case number < 0
    if (number < 0) {
        return 'NO GOD PLEASE NO';
    }
    // case number is 0
    if (number === 0) {
        return 'zero';
    }
    let stringNum = String(number);
    let parsedNumber = stringNum.padStart(4, 0).match(/^(\d{1})(\d{1})(\d{2})$/);
    let readableNumber = '';
    if (parsedNumber[1] !== '0') {
        readableNumber += ones[Number(parsedNumber[1])] + ' thousand '
    }
    if (parsedNumber[2] !== '0') {
        readableNumber += ones[Number(parsedNumber[2])] + ' hundred ';
    }
    readableNumber += (ones[Number(parsedNumber[3])] || tens[parsedNumber[3][0]] + ' ' + ones[parsedNumber[3][1]]);
    return readableNumber.trim();
}
