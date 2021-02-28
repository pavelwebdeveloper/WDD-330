var canvas = document.getElementById("myCanvas1");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);



function drawPattern() {
    var canvas = document.getElementById("myCanvas2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var img = new Image();
    img.src = "images/bg-bike.png";
    img.onload = function() {
        var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10, 10, 100, 100);
        context.strokeRect(10, 10, 100, 100);
    };
   }

   drawPattern();


   function drawGradient() {
    var canvas = document.getElementById("myCanvas3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
   var gradient = context.createLinearGradient(0, 0, 0, 200);
   gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
   }

   drawGradient();

   var canvas4 = document.getElementById("myCanvas4");
   var canvas5 = document.getElementById("myCanvas5");

   function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
   }

   drawCircle(canvas4);

   drawCircle(canvas5);

   function saveDrawing() {
    var canvas5 = document.getElementById("myCanvas5");
    window.open(canvas5.toDataURL("image/png"));
   }

   var button = document.getElementById("saveButton");
    button.addEventListener("click", saveDrawing, false);
   
    window.addEventListener("load", drawImageToCanvas, false);

    /* We can draw the image at the center of the canvas by changing the X and
Y coordinates that we pass to drawImage. Since the image is 64 by 64 pixels and
the canvas is 200 by 200 pixels, if we draw the image to (68, 68),
the image will be in the center of the canvasHalf of the canvas’s dimensions minus half of the 
image’s dimensions: (200/2) - (64/2) = 68*/

    function drawImageToCanvas() {
        var canvas = document.getElementById("myCanvas6");
        var context = canvas.getContext("2d");
        var image = document.getElementById("myImageElem");
        context.drawImage(image, 68, 68);
        var imageData = context.getImageData(0, 0, 1, 1);
        var pixelData = imageData.data;
        console.log(pixelData.length);

       }


       function manipulateImage() {
        var canvas = document.getElementById("myCanvas7");
        var context = canvas.getContext("2d");
        var image = document.getElementById("secondImage");
        context.drawImage(image, 68, 68);
        var imageData = context.getImageData(0, 0, 200, 200);
        var red, green, blue, greyscale;
        for (var i = 0; i < imageData.data.length; i += 4) {
        red = imageData.data[i];
        green = imageData.data[i + 1];
        blue = imageData.data[i + 2];
        grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
        imageData.data[i] = grayscale;
        imageData.data[i + 1] = grayscale;
        imageData.data[i + 2] = grayscale;
        }
        context.putImageData(imageData, 0, 0);
       }

       manipulateImage();
