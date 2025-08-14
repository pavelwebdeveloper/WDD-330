// Logo canvas
function showLogo(){
        const canvasLogoElement = document.getElementById('canvasLogo');

        const contextLogo = canvasLogoElement.getContext('2d');
        contextLogo.fillStyle = "#0000cc"; // a blue fill color
        contextLogo.strokeStyle = "#0c0"; // a gray stroke color
        contextLogo.lineWidth = 20;
        //  drawing a filled-in rectangle
        contextLogo.fillRect(10,10,350,100);


        //  draw the text “Hello from Canvas” in green at coordinates (20,300)
        contextLogo.fillStyle = '#0c0'; // a blue fill color
        contextLogo.font = 'bold 30px sans-serif';
        contextLogo.fillText('Recipe database', 30, 70);
}


// Dish collection box canvas
function drawDishCollectionBox(){
        const canvasLikeListElement = document.getElementById('canvasLikeList');

        const context = canvasLikeListElement.getContext('2d');
        context.fillStyle = "#F4A460"; // a blue fill color
        context.strokeStyle = "#0c0"; // a gray stroke color
        context.lineWidth = 20;
        //  drawing a filled-in rectangle
        context.fillRect(10,10,300,100);

        //  draw the text “Hello from Canvas” in green at coordinates (20,300)
        context.fillStyle = '#0c0'; // a blue fill color
        context.font = 'bold 26px sans-serif';
        context.fillText('Recipe collection', 30, 70);
  }


  // Added recipe message
function showLikeListMessage(likeListMessageElement, recipeName){
    const contextListMessage = likeListMessageElement.getContext('2d');
    //contextListMessage.strokeStyle = "#FF8C00"; // a gray stroke color
    /*contextListMessage.lineWidth = 20;   
    contextListMessage.font = 'bold 20px sans-serif';
    contextListMessage.fillText(`${recipeName} added !!!`, 5, 20);*/

    contextListMessage.fillStyle = "#0000cc"; // a blue fill color
    contextListMessage.strokeStyle = "#0c0"; // a gray stroke color
    contextListMessage.lineWidth = 5;
        //  drawing a filled-in rectangle
        //contextListMessage.fillRect(10,10,250,100);


        //  draw the text “Hello from Canvas” in green at coordinates (20,300)
        contextListMessage.fillStyle = '#0c0'; // a blue fill color
        contextListMessage.font = 'bold 30px sans-serif';
        contextListMessage.fillText(`${recipeName} added !!!`, 5, 50);
}



export default {
    showLogo,
    drawDishCollectionBox,
    showLikeListMessage
    }

