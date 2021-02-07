// Throwing Exceptions

function squareRoot(number) {
    'use strict';
    if (number < 0) {
    throw new RangeError('You cannot find the square root of negative numbers')
    }
    return Math.sqrt(number);
    };


// Exception Handling

    function imaginarySquareRoot(number) {
        'use strict';
        let answer;
        try {
            answer = String(squareRoot(number));
            } catch(error) {
            answer = squareRoot(-number)+"i";
            } finally {
            return `+ or - ${answer}`;
        }
        }


// Tests

        function itSquareRoots4() {
            return squareRoot(4) === 2;
            }