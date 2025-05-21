let tableValues = [];
let table;
let numberOfRows;
let xSpacing;
let minValue, maxValue;

function preload(){
  table = loadTable("Population.csv", "csv", "header");
}

function setup() {
  createCanvas(900, 500);
  numberOfRows = table.getRowCount();

  for (let i = 0; i < numberOfRows; i++) {
    tableValues[i] = float(table.getString(i, 1));
  }

  minValue = min(tableValues);
  maxValue = max(tableValues);
  xSpacing = (width - 100) / (numberOfRows - 1);
}

function draw(){
  background(255);
  stroke(0);
  fill(0);
  
  textSize(25)
  text("Population of the world (per 5 years)", width / 2, height / 1.05)

  for (let j = minValue; j <= maxValue; j += 1000000000){
    let y = map(j, minValue, maxValue, 400, 50);
    stroke(200);
  }

  stroke(0);
  noFill();
  beginShape();
  for (let i = 0; i < numberOfRows; i++) {
    let x = 60 + i * xSpacing;
    let y = map(tableValues[i], minValue, maxValue, 400, 50); 
    vertex(x, y);
  }
  endShape();


  fill(0);
  noStroke();
  for (let i = 0; i < numberOfRows; i++) {
    let label = table.getString(i, 0);
    let x = 60 + i * xSpacing;
    textAlign(CENTER);
    textSize(12)
    text(label, x, 430);
  }
  
   for (let j = 2000000000; j <= 9000000000; j += 1000000000){
    let y = map(j, 2000000000, 9000000000, 0, 400);
    textSize(13)
    text(nfc(j / 1000000000, 1) + "B", 20, 420 - y);
    stroke(180);
    line(50, 420 - y, width, 420 - y);
  }
  
}
