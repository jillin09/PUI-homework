// using the trackpad or mouse to drag items 
// in a sketch

// variables to collect mouse X and Y when mousePressed
var x;
var y;

// position of the image to be dragged
var appleX = 0;
var appleY = 0;

// transperancy for images
//var z =100;

// variable for the image
var img;

// loading up an image
function preload() {
  img = loadImage(src="../assets/rain.PNG");
}


// if the mouse pressed when on the image 
function mouseDragged() {
  if ((mouseX > appleX - 50) && (mouseX < appleX + 50)) {
    if ((mouseY > appleY - 50) && (mouseY < appleY + 50)) {
      appleX = mouseX;
      appleY = mouseY
    }
  }
}