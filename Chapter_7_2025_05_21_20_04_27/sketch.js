let xx
let yy
let shapeSize = 50
let distace = 10

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width / 7.5, height / 7)
  noStroke()


  
  for (var xx = 0; xx < width ; xx += shapeSize / 0.5){
    for (var yy = 0; yy < height ; yy += shapeSize / 0.5){
      fill(255)
      ellipse(xx, yy, shapeSize / 0.8 ,shapeSize / 1.5)
        let x = constrain(mouseX, xx - 7, xx + 7)
        let y = constrain(mouseY, yy - 4, yy + 4)
        
            fill(0)
            ellipse(x, y, shapeSize / 2, shapeSize / 2)
    }
  }
}
    

