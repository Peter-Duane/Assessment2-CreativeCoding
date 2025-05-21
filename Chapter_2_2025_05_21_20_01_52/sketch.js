function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(120);
  noStroke()
  //ears
  fill(204,255,75)
  beginShape();
  vertex(130,147)
  vertex(95,120)
  vertex(110,140)
  vertex(115,160)
  vertex(115,165)
  vertex(120,172)
  vertex(125,170)
  endShape(CLOSE)
  
  beginShape()
  vertex(260,147)
  vertex(295,120)
  vertex(280,140)
  vertex(275,160)
  vertex(275,165)
  vertex(270,172)
  vertex(265,170)
  endShape(CLOSE)
  
  //head
  ellipse(195,160,145,75);
  beginShape()
  vertex(180,124)
  vertex(185,120)
  vertex(187,118)
  vertex(190,110)
  vertex(193,70)
  vertex(197,70)
  vertex(194,110)
  vertex(197,118)
  vertex(199,120)
  vertex(204,124)
  endShape()
  circle(195,70,15)
   
  //eyes
  fill(255)
  ellipse(195,140,32,25);
  ellipse(157,145,30,23);
  ellipse(233,145,30,23);
  fill(0)
  ellipse(195,140,5)
  ellipse(160,145,5)
  ellipse(230,145,5)
  
  //mouth
  fill(180,216,52)
  arc(195,170,100,5,radians(0),radians(180),OPEN)
  circle(145,170,5)
  circle(245,170,5)
  
  //left arm
  fill(79,125,241)
  beginShape()
  vertex(135,195)
  vertex(100,220)
  vertex(110,240)
  vertex(125,237)
  endShape(CLOSE)
  
  //left hand
  fill(204,255,75)
  beginShape()
  vertex(100,220)
  vertex(90,215)
  vertex(80,213)
  vertex(78,215)
  vertex(78,217)
  vertex(85,225)
  vertex(65,233)
  vertex(62,238)
  vertex(62,242)
  vertex(65,243)
  vertex(85,240)
  vertex(71,255)
  vertex(70,258)
  vertex(70,260)
  vertex(72,262)
  vertex(78,261)
  vertex(110,240)
  endShape(CLOSE)
  
  //right arm
  fill(79,125,241)
  beginShape()
  vertex(255,195)
  vertex(290,220)
  vertex(280,240)
  vertex(265,237)
  endShape(CLOSE)
  
  //right hand
    //left hand
  fill(204,255,75)
  beginShape()
  vertex(290,220)
  vertex(300,215)
  vertex(310,213)
  vertex(312,215)
  vertex(312,217)
  vertex(305,225)
  vertex(325,233)
  vertex(327,238)
  vertex(327,242)
  vertex(327,243)
  vertex(305,240)
  vertex(319,255)
  vertex(320,258)
  vertex(320,260)
  vertex(318,262)
  vertex(312,261)
  vertex(280,240)
  endShape(CLOSE)
  
  //body
  fill(65,79,235)
  beginShape()
  vertex(135,195)
  vertex(125,230)
  vertex(125,237)
  vertex(125,245)
  vertex(265,245)
  vertex(265,237)
  vertex(265,230)
  vertex(255,195)
  endShape(CLOSE)
  fill(96,32,140)
  arc(195,195,120,15,radians(-5),radians(185))
  
  //lower body
  fill(65,79,235)
  beginShape()
  vertex(125,245)
  vertex(125,260)
  vertex(135,300)
  vertex(150,310)
  vertex(170,315)
  vertex(195,315)
  vertex(215,315)
  vertex(235,310)
  vertex(255,300)
  vertex(265,260)
  vertex(265,245)
  endShape(CLOSE)
  
  //accessories
  fill(36,43,133)
  beginShape()
  vertex(135,300)
  vertex(125,305)
  vertex(115,315)
  vertex(110,320)
  vertex(195,320)
  vertex(195,315)
  vertex(170,310)
  endShape(CLOSE)
  
  beginShape()
  vertex(255,300)
  vertex(265,305)
  vertex(275,315)
  vertex(280,320)
  vertex(195,320)
  vertex(195,315)
  vertex(215,310)
  endShape(CLOSE)
  
  beginShape()
  vertex(125,240)
  vertex(265,240)
  vertex(265,255)
  vertex(125,255)
  endShape(CLOSE)
  fill(44,50,144)
  rect(185,237,20)
  
  fill(232,168,71)
  circle(230,220,14)
  
  fill(25,30,75)
  beginShape()
  vertex(195,315)
  vertex(192,278)
  vertex(197,278)
  endShape(CLOSE)
  
  fill(94,141,45)
  beginShape()
  vertex(95,120)
  vertex(110,140)
  vertex(115,160)
  endShape(CLOSE)
  
  beginShape()
  vertex(295,120)
  vertex(280,140)
  vertex(275,160)
  endShape(CLOSE)
}