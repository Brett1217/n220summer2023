//defining width / height of one cell
const cell_size = 50;

function setup() {
  //creating a 200x200 canvas
  createCanvas(200,200);
  //using red fill color
  fill(255,0,0);
  //and white stroke color
  stroke(255);
}


function draw() {
  //clearing background with white
  background(255);
  //looping from i=0 to i=3
  for(var i=0;i<4;i++){
    //looping from j=0 to j=i
    for(var j=0;j<=i;j++){
      //drawing a rectangle at x=cell_size*j, y=cell_size*i, with width=cell_size and height=cell_size
      rect(cell_size*j, cell_size*i, cell_size,cell_size);
    }
  }
}