function greeter(greeting = 'Hello') {
    return function() {
    console.log(greeting);
    }
    }
    const englishGreeter = greeter();
    englishGreeter();
    
    const frenchGreeter = greeter('Bonjour');
    frenchGreeter();
    
    const germanGreeter = greeter('Guten Tag');
    germanGreeter();
