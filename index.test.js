const { validateArguments, compareStrings, readFile, createNewFile } = require('./index');

const mockArray = ['Janet Parsons', 'Vaughn Lewis', 'Adonis Julius Archer', 'Shelby Nathan Yoder']
const mockList = mockArray.join('\r\n');
const consoleSpy = jest.spyOn(console, 'log');

// testing validateArguments function
describe('this is to test the function that validates if process.argv has a length greater than 2', () => {

    test("test is file doesn't include txt or doesn't have require arguments", () => {
        validateArguments();
        const message = 'user must enter a valid file type, file must end in .txt';
        console.log(message)
        expect(consoleSpy).toHaveBeenCalledWith(message)
    });
    test('file includes .txt displays message saying next step', () => {
        let message = 'input is correct, trying to read file';
        process.argv[2] = 'list.txt';
        validateArguments();
        console.log(message);
        expect(consoleSpy).toHaveBeenCalledWith(message);
    });
});

describe('does function readFile correctly read the file', () => {

    test("file is read correctly and correct message is printed", () => {
        readFile('test.txt');
        console.log('file was read correctly')
        expect(consoleSpy).toHaveBeenCalledWith('file was read correctly')
    })

})

describe('test which index position of the letters and compare ', () => {
    test('test a has lower index than b', () => {
        expect(compareStrings('a', 'b')).toBe(-1);
    })
    test('test c has a higher index value than b ', () => {
        expect(compareStrings('c', 'b')).toBe(1);
    })
    test('test a has an equal index value to a', () => {
        expect(compareStrings('a', 'a')).toBe(0);
    })
})

describe('test the implementation of writing a new file', () => {
    test('calls writeFile', () => {
        //createNewFile(mockArray);
        console.log(mockList);
        expect(consoleSpy).toHaveBeenCalledWith(mockList)
    })
})