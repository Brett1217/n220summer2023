/***** Code *********/

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(255);
  
  let shapeSize = 200;
  let shapeX = mouseX;
  let shapeY = mouseY;
  
  drawShape(shapeX, shapeY, shapeSize);
}


function drawShape(shapeX, shapeY, shapeSize) {
  strokeWeight(4);
  
  fill(400);
  square(shapeX, shapeY, shapeSize);
  
  let eyeSize = shapeSize / 3;
  let leftEyeX = shapeX + shapeSize / 3;
  let rightEyeX = shapeX + shapeSize - shapeSize / 3;
  let eyeY = shapeY + shapeSize / 3;
  
  fill(0);
  circle(leftEyeX, eyeY, eyeSize);
  circle(rightEyeX, eyeY, eyeSize);
  
  let mouthSize = shapeSize / 3;
  let mouthX = shapeX + mouthSize;
  let mouthY = shapeY + shapeSize - shapeSize / 4;
      
  line(mouthX, mouthY, mouthX + mouthSize, mouthY);
  stroke(7);
}
/********* Output ***********/