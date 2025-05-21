var shapesize = 100
var shapesize0 = 100
function setup() {
  createCanvas(400, 400);
background(134, 196, 89)
translate(shapesize/2.3, shapesize/2);
noStroke()
for(var x=5;x<width;x+=shapesize){
  for(var y=0;y<height;y+=shapesize){
    fill(204, 208, 127)
    ellipse(x,y,shapesize*0.4,shapesize*1)
    }
  }
translate(shapesize0/30, shapesize0/30);
noStroke()
for(var x0=3;x0<width;x0+=shapesize0){
  for(var y0=0;y0<height;y0+=shapesize0){
    fill(204, 208, 127)
    ellipse(x0,y0,shapesize0*1,shapesize0*0.4)
    fill(134, 196, 89)
    ellipse(x0,y0,shapesize*0.2,shapesize*0.2)
    }
  }
}



