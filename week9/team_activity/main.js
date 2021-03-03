addEventListener('keypress', pressedKey, false);
addEventListener('keyup', removeClass, false);
var position = {
    'a':10,
    's':10,
    'd':10,
    'f':10,
    'g':10,
    'h':10,
    'j':10,
    'k':10,
    'l':10
};

function removeClass(event){
    var key = event.key;
    var keysNodes = document.getElementsByClassName("key");
    for(const el of keysNodes) {
        if(key.toUpperCase() == el.firstChild.nextSibling.textContent){  
               
        if(key){
            el.classList.remove('playing'); 
            
        }
    }
}
}

function pressedKey(event){
    console.dir(event.target.children[1]);
    console.log(event.target.children[1]);
    
    console.log(`You pressed the ${event.key} character`);        
    
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
        console.log(el);
        console.dir(el);
        if(key){
            el.classList.add('playing'); 
            
            for (item in position) {
                console.log("Item in position: ");
                console.log(item);
                console.log(key);
                if(item == key){              
                el.style.transform = "translateY("+position[item]+"px)";  
                position[item]+=10;
                if(position[item] == 100){
                    position[item] = 0; 
                }
                }
            } 
                     
        } 

    

        
        
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