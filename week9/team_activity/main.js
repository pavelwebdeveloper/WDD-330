addEventListener('keypress', pressedKey);

function pressedKey(event){
    console.log(event.target);
    if(event.key == 'a'){
        console.log(`You pressed the ${event.key} character`);        
    }
    var key = event.key;
    console.log("pressed key: ");
    console.log(key);
    var keysNodes = document.getElementsByClassName("key");
    let audios = document.getElementsByTagName("audio");
    for(const el of keysNodes) {
        if(key.toUpperCase() == el.firstChild.nextSibling.textContent){
        console.log("FOUND KEY: ");
        console.log("number: ");
        console.log(el.attributes[0].value);
        for(const audio of audios) {
            //console.log(el.firstChild.nextSibling.textContent);
            if(el.attributes[0].value == audio.attributes[0].value){
                console.log("PLAYING SOUND !!!!!!!!!!!!!!!!!!");
                var audioObject = new Audio(audio.src);
                audioObject.play();
                console.log(audio.src);
            }
        }

    }
        }
        
    
    //var keysNode = document.getElementsByClassName("key")[0].attributes[0];
    
    
    
}