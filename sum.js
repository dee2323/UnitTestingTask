const sum = (input) => {
    //check if null string 
    if (input.length === 0) return 0;
    else {
        let numbers = input.split(',')
        let length = numbers.length
        if (length < 3) {
            numbers = numbers.map(number => Number(number))
            switch (length) {
                case 1: {
                    if (numbers[0] < 0)
                        throw new Error('negatives not allowed,you entered ' + numbers[0])
                    return numbers[0]
                }
                case 2: {
                    if (numbers[0] < 0 && numbers[1] < 0) {
                        throw new Error('negatives not allowed,you entered ' + numbers[0] + ' ' + numbers[1])
                    } else if (numbers[0] < 0) {
                        throw new Error('negatives not allowed,you entered ' + numbers[0])
                    } else if (numbers[1] < 0) {
                        throw new Error('negatives not allowed,you entered ' + numbers[1])
                    }
                    return numbers[0] + numbers[1]
                }
            }

        } else return 'not allowed more than two numbers to add'
    }


}
module.exports = sum;