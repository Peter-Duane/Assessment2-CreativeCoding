let player
let obstacles = []
let speed = 5
let triSize = 40
let gameOver = false
let timeScore = 0
let score = 0
let bgColor
let triColor
let sound
reached10 = false
reached20 = false
reached30 = false

function preload(){
  sound = loadSound("bgsond.mp3")
}

function setup() {
  createCanvas(400, 400);
  resetGame();
  bgColor = color(220)
  triColor = color(0)
}

function draw() {
  background(bgColor);

  if (gameOver) {
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
    textSize(20);
    text("Score: " + score, width / 2, height / 2 + 40);
    text("Click to Restart", width / 2, height / 2 + 70);
    sound.stop()
    return;
  }

  let currentTime = millis(); 
  if (currentTime - timeScore >= 1000) { 
    score++;
    timeScore = currentTime;
  }

  if (score === 10 && !reached10) {
    bgColor = color(213, 71, 52)
      for (let obs of obstacles) obs.speed *= 2
      reached10 = true
  }

  if (score === 20 && !reached20) {
    bgColor = color(62, 29, 25)
      for (let i = 0; i < 7; i++) obstacles.push(createObstacle())
      reached20 = true
  }

  if (score === 30 && !reached30) {
    bgColor = color(36, 14, 11 )
    triColor = color(255)
      for (let obs of obstacles) obs.speed *= 2
      reached30 = true
  }

  // player movement
  if (keyIsDown(LEFT_ARROW)) player.x -= speed;
  if (keyIsDown(RIGHT_ARROW)) player.x += speed;
  player.x = constrain(player.x, triSize / 2, width - triSize / 2);

  fill(triColor);
  triangle(
    player.x, player.y - triSize / 2,
    player.x - triSize / 2, player.y + triSize / 2,
    player.x + triSize / 2, player.y + triSize / 2
  );

  // obstacles
  for (let obs of obstacles) {
    fill(150, 0, 0);
    rect(obs.x, obs.y, obs.w, obs.h);
    obs.y += obs.speed;

    // hitbox of obstacles
    if (
      obs.y + obs.h > player.y - triSize / 2 &&
      obs.y < player.y + triSize / 2 &&
      obs.x < player.x + triSize / 2 &&
      obs.x + obs.w > player.x - triSize / 2
    ) {
      gameOver = true;
    }


    if (obs.y > height) {
      obs.x = laneDirections();
      obs.y = random(-200, -50);
      obs.speed = random(2, 5);
    }
  }

  // show score
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10); // floor is used for estimating floats
}

function createObstacle() {
  return {
    x: laneDirections(),
    y: random(-400, -50),
    w: 30,
    h: 30,
    speed: random(2, 5)
  };
}

function laneDirections(){
  const laneCount = 8;
  const laneSize = width / laneCount;

  let laneList = [];
  let laneNumber = 0;

  for(let coordX = 0; coordX < width; coordX += laneSize){
    laneList[laneNumber] = coordX + 10;
    laneNumber++;
  }
  return random(laneList);
}

function resetGame() {
  player = {
    x: width / 2,
    y: height - 60,
    size: triSize
  };
  obstacles = []
  for (let i = 0; i < 5; i++) {
    obstacles.push(createObstacle())
  }
  bgColor = color(220)
  triColor = color(0)
  timeScore = millis()
  score = 0
  sound.play()
  gameOver = false
  reached10 = false
  reached20 = false
  reached30 = false
}

function mousePressed() {
  if (gameOver) {
    resetGame(); 
    } 
}
