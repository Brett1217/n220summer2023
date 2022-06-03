arr = []



function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < int(random(15, 20)); ++i) {
    obj = {x:random(width), y: random(height), size: random(10, 20)};
    
    arr.push(obj);
  }
}

function draw() {
  background(220);
  
  arr.forEach(e => {
    e.x += 1;
    if (e.x > width) {
      e.x = 0;
    }
    circle(e.x, e.y, e.size);
  });
}
/*********** Output *************/