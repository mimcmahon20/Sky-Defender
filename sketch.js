let player;
let w,h;

function setup() {
  w=windowWidth;
  h=windowHeight;
  createCanvas(w,h);
  
  player = new Player();
}

function draw() {
  background(220);
  
  translate(w/2,h/2);
  player.drawPlayer();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.move(1);
  } else if (keyCode === RIGHT_ARROW) {
   player.move(3); 
  } else if (keyCode === UP_ARROW) {
   player.move(0); 
  } else if (keyCode === DOWN_ARROW) {
   player.move(2); 
  }
}