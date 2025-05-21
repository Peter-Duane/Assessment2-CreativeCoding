function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  for(var x=0;x<620;x+=20){
    for(var y=0;y<620;y+=20){
        stroke(random(255),random(200),random(255),random(1, 10))
          line(x,0,mouseX,mouseY)
          line(0,y,mouseX,mouseY)
    }
  }
}