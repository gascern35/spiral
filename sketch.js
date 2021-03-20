let backgroundVal = [10, 100, 60, 0.09];
let lineVal = [60, 100, 100, 0.09];
let colorB;

let bigAngle;
let midAngle;
let smallAngle;

let bigR;
let midR;
let smallR;

let curveSlider;
let bigSlider;
let midSlider;
let smallSlider;

function setup() {
  //noCursor();
  colorMode(HSB);
  //blendMode(SOFT_LIGHI);
  createCanvas(800, 600);
  curveSlider = createSlider(-5, 5, 1);
  colorB = createButton('COLOR');
  bigSlider = createSlider(-20, 20, 0);
  midSlider = createSlider(-20, 20, 0);
  smallSlider = createSlider(-20, 20, 0);
  bigR = 275;
  bigAngle = PI / 2;
  smallR = bigR / 2;
  smallAngle = PI / 2;
  midR = smallR * 1.5;
  midAngle = PI / 2;
  colorB.mousePressed(changeBG);
}

function changeBG() {
  backgroundVal = [random(0, 360), random(90, 100), random(30, 50), 0.099];
  lineVal = [random(0, 360), 100, 100, 0.09];
}

function draw() {
  translate(width / 2, height / 2);
  curveTightness(curveSlider.value());
  background(
    backgroundVal[0],
    backgroundVal[1],
    backgroundVal[2],
    backgroundVal[3]
  );
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
  curveVertex(0, 0);
  curveVertex(0, 0);
  curveVertex(smallx, smally);
  curveVertex(midx, midy);
  curveVertex(bigx, bigy);
  curveVertex(bigx, bigy);
  endShape();
  smallAngle += 0.01 * smallSlider.value();
  midAngle += 0.01 * midSlider.value();
  bigAngle += 0.01 * bigSlider.value();
}
