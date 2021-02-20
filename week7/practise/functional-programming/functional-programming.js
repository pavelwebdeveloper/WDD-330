function multiplier(x){
    return function(y){
    return x*y;
    }
    }

    doubler = multiplier(2);

    console.log(doubler(10));


    tripler = multiplier(3);

    console.log(tripler(10)); 



    function power(x) {
        return function(power) {
        return Math.pow(x,power);
        }
        }


        twoExp = power(2);

        console.log(twoExp(5));


        tenExp = power(10);

        console.log(tenExp(6));

        console.log(power(3)(5));
