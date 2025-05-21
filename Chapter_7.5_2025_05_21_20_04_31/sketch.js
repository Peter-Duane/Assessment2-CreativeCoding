let xx
let yy
let shapeSize = 55
let distance = 10

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  translate(width / 6.9, height / 9)
  noStroke()

  
  for (var xx = 0; xx < width  ; xx += shapeSize / 0.45){
    for (var yy = 0; yy < height ; yy += shapeSize / 0.7){
      fill(110, 189, 103 )
      ellipse(xx, yy, shapeSize / 0.8, shapeSize / 1.4)
        let x = constrain(mouseX, xx - 7, xx + 7)
        let y = constrain(mouseY, yy - 4, yy + 4)

      fill(0)
      ellipse(x, y, shapeSize / 4, shapeSize / 2)
    }
  }
}