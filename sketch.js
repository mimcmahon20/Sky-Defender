let player;
let w, h;
let frameCount = 0;
let healthBar;
let opponentTime;
let running;
let opponents = [];

function setup() {
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);
  opponentTime = 100;
  player = new Player();
  running = false;
  opponents.push(new Opponent());
  bg = loadImage("sky.png");
  bg2 = loadImage("sky2.png");
  frameRate(60);
}

function draw() {
  background(255);
  if (!running) {
    push();
    background(bg2);
    textAlign(CENTER);
    textSize(64);
    fill(55,55,55);
    text("Sky Defender", w / 2, h / 2 - 150);
    textSize(32);
    fill(0, 0, 15);
    text("Use the arrow keys to move", w / 2, h / 2 - 50);
    text("Hold the mouse to shoot", w / 2, h / 2);
    text("Press enter to start", w / 2, h / 2 + 50);
    pop();
    if (keyIsDown(ENTER)) {
      running = true;
    }
  }
  if (player.alive && running) {
    game();
  } else if (!player.alive && running) {
    background(bg2);
    gameOver();
    if (keyIsDown(ENTER)) {
      player = new Player();
      opponents = [];
      opponents.push(new Opponent());
    }
  }
}

// function mousePressed() {
//   player.shoot();
// }

function game() {
  push();
  background(bg);

  if (keyIsDown(LEFT_ARROW)) {
    player.moveLeft();
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.moveRight();
  }

  if (keyIsDown(UP_ARROW)) {
    player.moveUp();
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.moveDown();
  }

  if (mouseIsPressed && frameCount % player.fireRate === 0) {
    player.shoot();
  }

  //opponent spawner. spawns an opponent every opponentTime frames
  if (frameCount % opponentTime === 0) {
    opponents.push(new Opponent());
  }

  player.update();
  player.drawPlayer();

  opponents.forEach((opponent) => {
    if (opponent.alive) {
      opponent.update();
      opponent.drawOpponent();
      opponent.checkCollision(player);
      player.projectiles.forEach((proj) => {
        proj.checkCollision(opponent);
      });
    } else {
      opponents.splice(opponents.indexOf(opponent), 1);
      player.xpBar.addXP(10);
    }
  });

  pop();
  frameCount++;
}

function gameOver() {
  push();
  translate(w / 2, h / 2);
  textAlign(CENTER);
  textSize(50);
  text("GAME OVER", 0, 0);
  textSize(30);
  text("Press Enter to restart", 0, 50);
  pop();
}

function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(windowWidth, windowHeight);
  draw();
}
