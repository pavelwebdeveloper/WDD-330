function multiplier(x,y) {
    if (y === undefined) {
    return function(z) {
    return x * z;
    }
    } else {
    return x * y;
    }
    }

    calcTax = multiplier(0.22);

    console.log(calcTax(400));

    // A General Curry Function


    function curry(func,...oldArgs) {
        return function(...newArgs) {
        const allArgs = [...oldArgs,...newArgs];
        return func(...allArgs);
        }
        }

        
        const divider = (x,y) => x/y;

        console.log(divider(10,5));


        const reciprocal = curry(divider,1);

        console.log(reciprocal(2));
