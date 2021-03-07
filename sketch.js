let rand;
let val = [10, 100, 60, 0.09];
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
  background(45, 80, 90, 0.09);
  colorB = createButton('COLOR');
  bigSlider = createSlider(-20, 20, 0);
  midSlider = createSlider(-20, 20, 0);
  smallSlider = createSlider(-20, 20, 0);
  bigR = 200;
  bigAngle = PI / 2;
  smallR = bigR / 2;
  smallAngle = PI / 2;
  midR = smallR * 1.5;
  midAngle = PI / 2;
  rand = random(0, 360);
  colorB.mousePressed(changeBG);
}

function changeBG() {
  val = [random(0, 360), random(70, 100), random(30, 50), 0.09];
}

function draw() {
  background(val[0], val[1], val[2], val[3]);
  translate(width / 2, height / 2);
  strokeWeight(4);
  stroke(rand, 100, 100);
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
