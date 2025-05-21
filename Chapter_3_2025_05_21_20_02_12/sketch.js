//the word Makati is a city in the Philippines

let pic;

function preload(){
  pic=loadImage("hardpics.png")
}

function setup() {
  createCanvas(400, 400);
  background(0)
  clip(mask);
  image(pic,50,50,275,275)

}

function mask(){
  circle(200,200,250);
}

function draw() {

  frameRate(50)
  let x1 = random(width);
  let y1 = random(height);
  let r1 = random(10,50);
  
  fill(0,random(200),random(255),100);
  strokeWeight(0);
  ellipse(x1,y1,r1,r1);
  
  fill(246, 142, 255);
  textSize(30);
  textAlign(CENTER,CENTER);
  text("MAKATI",200,205);
  textStyle(BOLDITALIC);


}

