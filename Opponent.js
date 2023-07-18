class Opponent {
  constructor() {
    let randX = randomBorderX();
    let randY = randomBorderY();
    this.vec = createVector(randX, randY);
    this.vel = createVector(-randX, -randY).normalize().mult(25);
    this.r = 45;
    this.alive = true;
  }

  drawOpponent() {
    push();
    translate(w / 2, h / 2);
    fill(255, 0, 0);
    circle(this.vec.x, this.vec.y, this.r);
    pop();
  }

  update() {
    this.vec = this.vec.add(this.vel);
    if (this.vel.mag() < 0.1) {
      this.roam();
    } else {
      this.vel = this.vel.mult(0.98);
    }
  }

  roam() {
    this.vel.add(random(-10, 10), random(-10, 10));
  }

  checkCollision(other) {
    // Get distances between the balls components
    let distanceVect = p5.Vector.sub(other.vec, this.vec);

    // Calculate magnitude of the vector separating the balls
    let distanceVectMag = distanceVect.mag();

    // Minimum distance before they are touching
    let minDistance = this.r / 2 + other.r / 2; 

    if (distanceVectMag < minDistance) {
        other.damage();
        this.alive = false;
    }
  }
}

randomBorderX = () => {
  return random(0, 1) > 0.5
    ? random(-w / 2 + 50, -w / 2 + 150)
    : random(w / 2 - 150, w / 2 - 50);
};

randomBorderY = () => {
  return random(0, 1) > 0.5
    ? random(-h / 2 + 50, -h / 2 + 150)
    : random(h / 2 - 150, h / 2 - 50);
};
