let circle;

function setup() {
  createCanvas(400, 400);
  circle = {
    x: 100,
    y: 100,
    size: 50
  };
}

function draw() {
  background(220);
  
  // Update circle properties
  circle.x += 1; 
  circle.y += 1; 
  circle.size += 0.5; 
  
  // Draw the circle
  ellipse(circle.x, circle.y, circle.size, circle.size);
}
 // Run the sketch
 new p5();
