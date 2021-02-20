function* fibonacci(a,b) {
    let [ prev,current ] = [ a,b ];
    while(true) {
    [prev, current] = [current, prev + current];
    yield current;
    }
    }


    const sequence = fibonacci(1,1);

    console.log(sequence.next());


    for (n of sequence) {
        // stop the sequence after it reaches 100
        if (n > 100) break;
        console.log(n);
        }

