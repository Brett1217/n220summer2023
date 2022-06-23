let circle_x; //circle's x position
let circle_y; //circle,s y position
let circle_xspeed = -2; //circle's speed in x direction
let circle_yspeed = 2; //circle's speed in y direction
let circle_radius = 30;

let rect_width = 400;//width of rectangle
let rect_height = 50;  //height of rectangle

let rect_x = -400;  //rect's x position
let rect_y = 600;  //rect's y position
let rect_xspeed = 2; //rect's speed in x direction

function setup() { 
  createCanvas(800, 700);
  circle_x = width - 2*circle_radius;   //width is the screen width which is a builtin keyword
  circle_y = 2*circle_radius;
} 

function draw() { 
  background(255);
  
  //make an elipse with major axis = minor axis , i.e, circle
  ellipse(circle_x, circle_y, 2*circle_radius, 2*circle_radius); 
  
  //setting new position for circle
  circle_x += circle_xspeed; 
  circle_y += circle_yspeed; 
  
   // make a rectangle
  rect(rect_x,rect_y, rect_width, rect_height);
  
  if(rect_x > width) {   //if rect moves out of canvas, set its position again to start
    rect_x = -rect_width;
  }
  
  //setting new position for rect
  rect_x += rect_xspeed;
  
  //checking for colision, if yes then bounce back the circle
  if(collideRect( circle_x, circle_y, rect_x, rect_y, rect_width, rect_height)) circle_yspeed = -circle_yspeed;
}


function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

  var colliding = false;

  if(circleX + circle_radius > rectX && circleX + circle_radius  < rectX + rectW) {

  if(circleY + circle_radius  > rectY && circleY + circle_radius  < rectY + rectH) {

  return true;

  }

  }

  return false;

}