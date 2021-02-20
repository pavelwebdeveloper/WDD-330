function closure() {
    const a = 1.8;
    const b = 32;
    return c => c * a + b;
    }

    const toFahrenheit = closure();


    console.log(toFahrenheit(30));


    function counter(start){
        let i = start;
        return function() {
        return i++;
        }
        }


        const count = counter(1);


        console.log(count());
        
        console.log(count());