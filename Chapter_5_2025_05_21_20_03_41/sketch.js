let x = 100
let y = 100
let dx = 2
let dy = 2

var lines
let userText = ""
let currentColor
function setup(){
  currentColor = color(255)
  createCanvas(600,600)
  textFont('Verdana')
  textStyle(BOLDITALIC)
  background(0)
  textSize(50)
}

function draw(){
  background(0)
  let w = textWidth(userText)
  let h = textSize()
  fill(currentColor)
  text(userText, x, y)
  x = x + dx
  y = y + dy
  edgeHandling(w)
  textAlign(LEFT)
}

function edgeHandling(w){
  let bounce = false
  
  if (x <= 0 || x + w >= width){
    dx = dx * -1
    bounce = true
  }
  let h = textSize()

  if (y - h <= 0 || y >= height) {
    dy = dy * -1
    bounce = true
  }
  
  if (bounce){
    currentColor = color(random(255), random(255), random(255))
  }
}

function keyTyped(){
  var max_chars = 7
  if (userText.length < max_chars){
    userText += key
  }
}


function keyPressed(){
  if (keyCode == BACKSPACE){
    userText = userText.slice(0,-1)
  }
}

function mousePressed(){
  x = 100
  y = 100
}


