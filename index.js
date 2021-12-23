const fs = require('fs');

function validateArguments() {
    if ((process.argv.length > 2) && (process.argv[2].includes('txt'))) {
        console.log('input is correct, trying to read file')
        readFile(process.argv[2]);
    } else {
        console.log('user must enter a valid file type, file must end in .txt')
    }
}

validateArguments();

function readFile(filename) {
    fs.readFile(filename, 'utf-8', function (err, data) {
        if (err) throw err;
        console.log('file read correctly');
        console.log(data.split(/\r?\n/));
    })
}

function compareStrings(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    // else
    return 0
}

function compareNames(a, b) {
    const wholeNameA = a.split(' ');
    const wholeNameB = b.split(' ');
    const lastNameA = wholeNameA[wholeNameA.length - 1];
    const lastNameB = wholeNameB[wholeNameB.length - 1];

    return lastNameA === lastNameB ? compareStrings(wholeNameA[0], wholeNameB[0]) : compareStrings(lastNameA, lastNameB)
}

function sortNames(unsortedNamesArray) {
    const sortedNamesArray = unsortedNamesArray.sort(compareNames);
    createNewFile(sortedNamesArray)
}

function createNewFile(sortedNames) {
    fs.writeFile('sorted-names-list', sortedNames.join('\r\n'), function (err) {
        if (err) throw err;

        console.log(sortedNames)
    })
}

module.exports = { validateArguments, compareStrings, readFile, createNewFile };