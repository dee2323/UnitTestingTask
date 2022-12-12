const sum = require('./sum')
test('probably empty string it will return 0', () => {
    const str = ''
    expect(sum(str)).toBe(0)
})