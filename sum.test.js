const sum = require('./sum')
test('probably empty string it will return 0', () => {
    const str = ''
    expect(sum(str)).toBe(0)
})
test('probably more than two numbers to add not allowed', () => {
    const str = '1,2,3'
    expect(sum(str)).toBe('not allowed more than two numbers to add')
})
test('probably add two numbers', () => {
    const str = '1,2'
    expect(sum(str)).toBe(3)
})
test('probably  when the length is one', () => {
    const str = '1'
    expect(sum(str)).toBe(+str)
})
test('problaly reject adding one negative number ', () => {
    const str = '-1'
    try {
        sum(str);
    } catch (e) {
        expect(e.message).toBe('negatives not allowed,you entered ' + str);
    }
})
test('probably two negatives not allowed', () => {
    const str1 = '-1'
    const str2 = '-2'
    try {
        sum(str1 + "," + str2);
    } catch (e) {
        expect(e.message).toBe('negatives not allowed,you entered ' + str1 + " " + str2);
    }
})
test('probably the first negative number not allowed', () => {
    const str1 = '-1'
    const str2 = '2'
    try {
        sum(str1 + "," + str2);
    } catch (e) {
        expect(e.message).toBe('negatives not allowed,you entered ' + str1);
    }
})
test('probably the secound negative number not allowed', () => {
    const str1 = '11'
    const str2 = '-2'
    try {
        sum(str1 + "," + str2);
    } catch (e) {
        expect(e.message).toBe('negatives not allowed,you entered ' + str2);
    }
})