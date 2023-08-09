// OBJECTS
var balls = []; // 10 balls in Ball class
var cannonBall; // cannonball in Ball class
var cannon; // Shooter class
var shoot = false;
var bar = 500;

function setup() {
  createCanvas(500, 500);
  noStroke();
  rectMode(CENTER);
  for (var i=0; i<10; i++) {
    balls[i] = new Ball();
  }
  cannonBall = new Ball();
  cannon = new Shooter();
}

function draw() {
  background(255);
  displayRect();
  for (var i=0; i<10; i++) {
    balls[i].display();
    balls[i].moveBall();
    balls[i].borders();
  }

  for (var j=0; j<5; j++) {
    if (mouseIsPressed) {
      shoot = true;
    }

    if (shoot == true) {
      cannonBall.bullet();
      if (mouseIsPressed) {
        shoot = false;
      }
    }
  }

  for (var k=0; k<10; k++) {
    if (balls[k].hit(cannonBall)) {
      balls[k].xPos = 100000;
      balls[k].yPos = 100000;
      reduceRect();
    }
  }
  cannon.display();
}

function displayRect() {
  fill(120, 255, 255);
  rect(250, 25, bar, 50);
}

function reduceRect() {
  bar -= 50;
}

// ----------------------------------------------------
function Ball() {
  this.xPos = random(50, 450);
  this.yPos = 60;
  this.rad = random(25, 75);
  this.xSpeed = random(-10, 10);
  this.ySpeed = random(-10, 10);
  this.xBullet = 250;
  this.yBullet = 500;
  this.dir = 1;

  this.display = function() {
    fill(color(150));
    ellipse(this.xPos, this.yPos, this.rad, this.rad);
  }

  this.moveBall = function() {
    this.xPos += this.xSpeed*this.dir;
    this.yPos += this.ySpeed*this.dir;
  }

  this.borders = function() {
    if (this.xPos > 500-(this.rad/2) || this.xPos < 50) {
      this.dir *= -1;
    }
    if (this.yPos > 500/2-100 || this.yPos < 50) {
      this.dir *= -1;
    }
  }

  this.bullet = function() {
    fill(color(150));
    this.xBullet = map(mouseX, 0, 500, 0, 500);
    ellipse(this.xBullet, this.yBullet, 20, 20);
    this.yBullet -= 10;
    if (this.yBullet < -1000) {
      this.yBullet = 500;
    }
  }

  this.hit = function(obj) {
    var distance = dist(this.xPos, this.yPos, obj.xBullet, obj.yBullet);
    if (distance < (this.rad/2)+10) {
      return true;
    } else {
      return false;
    }
  }
}

// ----------------------------------------------------
function Shooter() {
  this.xPos = 250;
  this.yPos = 475;
  this.xRad = 100;
  this.yRad = 88;
  this.xBarrel = 20;
  this.yBarrel = 175;

  this.display = function() {
    push();
    rectMode(CENTER);
    this.xPos = map(mouseX, 0, windowWidth, 0, windowWidth);
    fill(color(150));
    rect(this.xPos, this.yPos, this.xBarrel, this.yBarrel); // cannon barrel
    fill('#FF0000');
    rect(this.xPos, this.yPos-98, 5, 20); // laser guider
    fill(color(50));
    ellipse(this.xPos, this.yPos, this.xRad, this.yRad); // cannon body
    fill(150);
    rect(500/2, 500, 500*2, 50); // slider base
    fill(100);
    rect(this.xPos, this.yPos, 125, 25); // cannon base
    rect(this.xPos+60, this.yPos-10, 25, 60);
    rect(this.xPos-60, this.yPos-10, 25, 60);
    pop();
  }
}