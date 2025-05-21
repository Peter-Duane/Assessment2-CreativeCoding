let sound
let amp
let threshold = 0.3
let circleX
let circleY
let circleSize

function preload(){
  sound=loadSound('outro.mp3')
}

function setup() {
  createCanvas(400, 400);
  sound.play()
  amp = new p5.Amplitude()
  
  circleX = width / 2
  circleY = height / 2
  circleSize = 0
}

function draw(){
  background(0,20)
  noFill()
  strokeWeight(10)
  let level = amp.getLevel() 
  let radius = level * height * 1
  if (level > threshold){
    stroke(255)
    circleSize += 10
    circle(circleX, circleY, circleSize)
    circle(circleX, circleY, circleSize * 0.75)
    circle(circleX, circleY, circleSize * 0.5)
  }
  if (level > threshold){
    stroke(random(255),random(255),random(255))
    background(255,20)
  }
  else{
    stroke(255)
  }
  translate(width / 2, height / 2)
  ellipse(0,0,radius)
}
