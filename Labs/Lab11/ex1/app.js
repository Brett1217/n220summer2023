

let canvas;
let player;
let green;
let red;
let white;
let bgColor;
let shots = []; // stores all shots
let aliens = []; // stores all aliens
let redAlienUFOThing;
let lasers = [];
let redLaser;
let score = 0;
let highScore = 0;
// all alien ship images
let alien1_a;
let alien1_b;
let alien2_a;
let alien2_b;
let alien3_a;
let alien3_b;
let alien4; // red alien ship
let speed = 10; // aliens move once ever x frames, lower is faster.
laserSpeed = 10; // speed at which alien laser shots move
let alienDirection = 'left';
let chanceOfFiringLaser = 50; // x% change an alien a random alien shoots a laser every time the aliens moved. Increases slowly to increase difficulty
let pauseMode = false;
let pauseTime = 0;
let gameOverBool = false;
let isThereARedAlien = false;

