let val = [10, 100, 60, 0.08];
let colorB;
let bigAngle;
let midAngle;
let smallAngle;

let bigR;
let midR;
let smallR;

let bigSlider;
let midSlider;
let smallSlider;

function setup() {
  colorMode(HSB);
  createCanvas(800, 600);
  background(45, 80, 90, 0.08);
  colorB = createButton('COLOR');
  bigSlider = createSlider(-90, 90, 2);
  midSlider = createSlider(-90, 90, 2);
  smallSlider = createSlider(-90, 90, 2);
  bigR = 250;
  bigAngle = PI / 2;
  smallR = bigR / 2;
  smallAngle = PI / 2;
  midR = smallR * 1.5;
  midAngle = PI;
  colorB.mousePressed(changeBG);
}

function changeBG() {
val = [random(0, 360), random(90,100), 60, 0.08];
}
function draw() {
  background(val[0], val[1], val[2], val[3]);
  translate(width / 2, height / 2);
  strokeWeight(4);
  stroke(40, 90, 90);
  let smallx = smallR * cos(smallAngle);
  let smally = smallR * sin(smallAngle);
  let midx = midR * cos(midAngle);
  let midy = midR * sin(midAngle);
  let bigx = bigR * cos(bigAngle);
  let bigy = bigR * sin(bigAngle);
  beginShape(LINES);
  vertex(smallx, smally);
  vertex(midx, midy);
  vertex(midx, midy);
  vertex(bigx, bigy);
  endShape();
  smallAngle += 0.01 * smallSlider.value();
  midAngle += 0.01 * midSlider.value();
  bigAngle += 0.01 * bigSlider.value();
}
