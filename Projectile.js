class Projectile {
  constructor(x, y, bulletspeed) {
    this.vec = createVector(x, y);
    this.vel = createVector(
      mouseX - w / 2 - this.vec.x,
      mouseY - h / 2 - this.vec.y
    )
      .normalize()
      .mult(bulletspeed);
    this.r = 25;
    this.alive = true;
  }

  drawProjectile() {
    push();
    translate(w / 2, h / 2);
    fill(0, 255, 0);
    circle(this.vec.x, this.vec.y, this.r);
    pop();
  }

  update() {
    this.vec = this.vec.add(this.vel);
    //this.vel = this.vel.mult(0.997);
  }

  checkCollision(other) {
    // Get distances between the balls components
    let distanceVect = p5.Vector.sub(other.vec, this.vec);

    // Calculate magnitude of the vector separating the balls
    let distanceVectMag = distanceVect.mag();

    // Minimum distance before they are touching
    let minDistance = this.r / 2 + other.r / 2;

    if (distanceVectMag < minDistance) {
        other.alive = false;
        this.alive = false;
    }
  }
}
