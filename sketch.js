let xVal;
let yVal;
let radius = 50;
let msNew0;
let msOld = 0;
let canvasWidth = 400;
let canvasHeight = 500;
let clickX = 50;
let clickY = 50;
let cnv;
let colorVal = "black";
counter = 0;
let speed = 1000; // drawing cycle
function setup() {
  cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.mousePressed(hitColor);
  cnv.mouseReleased(normalColor);
  xVal = canvasWidth / 2;
  yVal = canvasHeight / 2;
  frameRate(60);
}
function mousePressed() {
  clickX = mouseX;
  clickY = mouseY;
}
function mouseRelease() {}

function hitColor() {
  colorVal = "red";
}
function normalColor() {
  colorVal = "blue";
}

function hitMiss() {
  let d = (xVal - clickX) ** 2 + (yVal - clickY) ** 2;
  d = sqrt(d);
  if (d <= radius) {
    console.log("d & radius: " + d + " " + radius);
    return 1;
  } else {
    return 0;
  }
}
function wait(time) {
  start = millis();
  do {
    current = millis();
  } while (current < start + time);
}
function draw() {
  background(220);

  ellipse(xVal, yVal, radius, radius);
  clickX = 0;
  clickY = 0;
  fill(colorVal);
}
