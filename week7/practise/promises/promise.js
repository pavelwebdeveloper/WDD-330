const dice = {
    sides: 6,
    roll() {
    return Math.floor(this.sides * Math.random()) + 1;
    }
    }
    console.log('Before the roll. before promise...');
    const roll = new Promise( (resolve,reject) => {
    const n = dice.roll();
    if(n > 1){
    setTimeout(()=>{resolve(n)},n*200);
    console.log('promise pending ...');
    } else {
    setTimeout(()=>reject(n),n*200);
    console.log('promise pending ...');
    }
    });
    roll.then(result => console.log(`I rolled a ${result}`) )
    .catch(result => console.log(`Drat! ... I rolled a ${result}`) );
    console.log('After the roll. after promise...');