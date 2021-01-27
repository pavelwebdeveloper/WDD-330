/*const board = document.querySelector('div.flex-container');
board.addEventListener('click',play,false);
function play(event) {
    let playerTurn = true;
    for(let i=0;i<9;i++){
        const cells = document.getElementsByClassName('cell');
        if(playerTurn){
            cell.textContent = "X";
            playerTurn = false;
        } else {
            cell.textContent = "O";
            playerTurn = true;
        }
    }
}*/

const buttonElement = document.getElementById('bt');


//buttonElement.addEventListener('click', restart);
buttonElement.addEventListener('touchend', restart);



const board = document.getElementById('board');

//board.addEventListener('mouseup',play, false);
board.addEventListener('touchend',play, false);

    let counter = 1;
function play(event) {
            if(counter>9){
                alert("The game is over");
            } else {            
                if(counter%2 != 0){
                    if(!event.target.textContent){
                        event.target.textContent = "X";
                        counter++;
                    } else {
                        alert("This cell is already filled. Please, choose a different cell");
                    }
                    } else {
                        if(!event.target.textContent){
                        event.target.textContent = "O";
                        counter++; 
                    } else {
                        alert("This cell is already filled. Please, choose a different cell");
                    }
                }
        }    
    }

    function restart(event) {
        const divs = board.children;
        for(let i=0;i<divs.length;i++){
            const subdivs = divs[i].children;
            for(let i=0;i<subdivs.length;i++){
                subdivs[i].textContent = "";
            }
        }
        counter = 1;
    }


