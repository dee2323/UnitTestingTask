const sum = require('./sum')
test('probably empty string it will return 0', () => {
    const str = ''
    expect(sum(str)).toBe(0)
})
test('probably more than two numbers to add not allowed', () => {
    const str = '1,2,3'
    expect(sum(str)).toBe('not allowed more than two numbers to add')
})