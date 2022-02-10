var shapesX = 0;
var shapesY = 0;
var rotatex = 35;
var rotateY = 45;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  push();
  translate(shapesX, shapesY);
  wand();
  keyPressed();
  if (shapesY > -150 && jump) {
    shapesY--;
  } else if (shapesY < 0) {
      shapesY++;
      jump = false;
  }
  pop();
}

function wand() {
    strokeWeight(3);
    line(100, 100, 200, 200);
    var c = color(255, 15, 243)
    fill(c);
    circle(100, 100, 60);
  }

function keyPressed() {
    if (keyCode === ENTER) {
        print("entered");
        jump = true;
    } else {
        jump = false;
    }
}