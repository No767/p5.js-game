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
  anotherKeyPressed();
  shapesX = shapesX + 1.5;
  if (pressedR) {
    rotateX(360)
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

function anotherKeyPressed() {
  if (keyCode === UP_ARROW) {
    print(r)
    pressedR = true;
  } else {
    pressedR = false;
  }
}