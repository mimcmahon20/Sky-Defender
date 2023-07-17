class Player {
  constructor() {
    this.vec = createVector(0, 0);
    this.r = 50;
    this.bearing = 0;
  }

  drawPlayer() {
    circle(this.vec.x, this.vec.y, this.r);
  }
  move(code) {
    if (code == 0) {
      this.vec = 
    } else if (code == 1) {
    } else if (code == 2) {
    } else if (code == 3) {
    }
  }
}
