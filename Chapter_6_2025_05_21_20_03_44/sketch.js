

function setup() {
  createCanvas(400, 400);
  background(255)
}

function draw() {

noStroke()
  fill(mouseY, random(255),mouseX,random(50))
  circle(mouseX,mouseY,25)
  circle(mouseX - 15, mouseY - 15, 20)
  circle(mouseX, mouseY -20, 20)
  circle(mouseX + 15, mouseY - 15, 20)
  circle(mouseX + 20, mouseY, 20)
  circle(mouseX + 15, mouseY + 15, 20)
  circle(mouseX, mouseY + 20, 20)
  circle(mouseX - 15, mouseY + 15, 20)
  circle(mouseX - 20, mouseY, 20)
}

function mousePressed(){
  background(255)
}
