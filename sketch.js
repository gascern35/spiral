let backgroundVal = [10, 100, 60, 0.09];
let lineVal = [60, 100, 100]
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
  curveTightness(-5);
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
  colorB.mousePressed(changeBG);
}

function changeBG() {
  backgroundVal = [random(0, 360), random(90, 100), random(30, 50), 0.09];
  lineVal = [random(0, 360), 100, 100];
}

function draw() {
  background(backgroundVal[0], backgroundVal[1], backgroundVal[2], backgroundVal[3]);
  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(lineVal[0], lineVal[1], lineVal[2]);
  let smallx = smallR * cos(smallAngle);
  let smally = smallR * sin(smallAngle);
  let midx = midR * cos(midAngle);
  let midy = midR * sin(midAngle);
  let bigx = bigR * cos(bigAngle);
  let bigy = bigR * sin(bigAngle);
  noFill();
  beginShape();
  curveVertex(mouseX-(width/2), mouseY-(height/2));
  curveVertex(mouseX-(width/2), mouseY-(height/2));
  curveVertex(smallx, smally);
  curveVertex(midx, midy);
  curveVertex(bigx, bigy);
  curveVertex(bigx, bigy);
  endShape();
  smallAngle += 0.01 * smallSlider.value();
  midAngle += 0.01 * midSlider.value();
  bigAngle += 0.01 * bigSlider.value();
}
