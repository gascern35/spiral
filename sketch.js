let bigAngle;
let smallAngle;
let bigR;
let smallR;
let bigSlider;
let smallSlider;
let bigCheck;
let smallCheck;

function setup() {
  colorMode(HSB);
  createCanvas(600, 600);
  bigSlider = createSlider(-90, 90, 2);
  smallSlider = createSlider(-90, 90, 2);
  //bigCheck = createCheckbox('REVERSE', false);
  //smallCheck = createCheckbox('reverse', false);
  smallR = 125;
  bigR = 250;
  bigAngle = PI / 2;
  smallAngle = PI / 2;
}

function draw() {
  translate(width / 2, height / 2);
  background(45, 80, 90, 0.08);
  strokeWeight(2);
  noFill();
  stroke(70, 90, 90, 0.06);
  noStroke();
  ellipse(0, 0, bigR * 2);
  let bigx = bigR * cos(bigAngle);
  let bigy = bigR * sin(bigAngle);
  ellipse(0, 0, smallR * 2);
  let smallx = smallR * cos(smallAngle);
  let smally = smallR * sin(smallAngle);
  stroke(200, 100, 90);
  beginShape(LINES);
  vertex(bigx, bigy);
  vertex(smallx, smally);
  endShape();
  //if (bigCheck.checked()) {
  //bigAngle -= 0.01 * bigSlider.value();
  //} else {
  //}

  //if (smallCheck.checked()) {
  //smallAngle -= 0.01 * smallSlider.value();
  //} else {
  //}
  bigAngle += 0.01 * bigSlider.value();
  smallAngle += 0.01 * smallSlider.value();
}
