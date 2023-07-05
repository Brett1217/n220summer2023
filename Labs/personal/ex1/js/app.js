function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255);
    
    let shapeSize = 100;
    let shapeX = mouseX;
    let shapeY = mouseY;
    
    drawShape(shapeX, shapeY, shapeSize);
  }
  
  
  function drawShape(shapeX, shapeY, shapeSize) {
    strokeWeight(5);
    
    fill(255);
    square(shapeX, shapeY, shapeSize);
    
    let eyeSize = shapeSize / 4;
    let leftEyeX = shapeX + shapeSize / 4;
    let rightEyeX = shapeX + shapeSize - shapeSize / 4;
    let eyeY = shapeY + shapeSize / 4;
    
    fill(0);
    circle(leftEyeX, eyeY, eyeSize);
    circle(rightEyeX, eyeY, eyeSize);
    
    let mouthSize = shapeSize / 3;
    let mouthX = shapeX + mouthSize;
    let mouthY = shapeY + shapeSize - shapeSize / 4;
        
    line(mouthX, mouthY, mouthX + mouthSize, mouthY);
    stroke(5);
  }