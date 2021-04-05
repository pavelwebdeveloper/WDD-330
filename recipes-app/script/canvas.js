const canvasElement = document.getElementById('canvas');

const context = canvasElement.getContext('2d');
context.fillStyle = "#0000cc"; // a blue fill color
context.strokeStyle = "#0c0"; // a gray stroke color
context.lineWidth = 20;
//  drawing a filled-in rectangle
context.fillRect(10,10,350,100);


//  draw the text “Hello from Canvas” in green at coordinates (20,300)
context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 36px sans-serif';
context.fillText('Dish database', 30, 70);