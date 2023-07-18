let movementSpeed = 10;

class Player {
  constructor() {
    //position & vel
    this.vec = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.r = 46;
    this.heading = p5.Vector.fromAngle(0);

    //projectiles & weapon info
    this.projectiles = [];
    this.bulletSpeed = 5;
    this.fireRate = 30;

    //health & xp
    this.health = 100;
    this.maxHealth = 100;
    this.healthBar = new HealthBar(this.vec.x,this.vec.y,this.health,this.r);
    this.alive = true;
    this.xp = 0;
    this.level = 1;
    this.xpBar = new XPBar(this.vec.x,this.vec.y,this.xp,this.level);
  }

  drawPlayer() {
    push();
    translate(w / 2, h / 2);
    circle(this.vec.x, this.vec.y, this.r);
    pop();
  }

  update() {
    this.vec = this.vec.add(this.vel);
    this.vel = this.vel.mult(0.95);
    push();
    
    this.projectiles.forEach((proj) => {
      if(proj.alive){
        proj.update();
        proj.drawProjectile();
      } else {
        this.projectiles.splice(this.projectiles.indexOf(proj), 1);
      }
    });
    pop();
    this.healthBar.update(this.vec.x,this.vec.y,this.health,this.r);
    this.healthBar.drawHealthBar();
    this.xpBar.update(this.vec.x,this.vec.y,this.xp,this.level);
    this.xpBar.drawXPBar();
    this.updateXP();
  }

  moveUp() {
    this.vec.y -= movementSpeed;
    if (this.vec.y < -h / 2) {
      this.vec.y = h / 2;
    }
  }

  moveDown() {
    this.vec.y += movementSpeed;
    if (this.vec.y > h / 2) {
      this.vec.y = -h / 2;
    }
  }

  moveLeft() {
    this.vec.x -= movementSpeed;
    if (this.vec.x < -w / 2) {
      this.vec.x = w / 2;
    }
  }

  moveRight() {
    this.vec.x += movementSpeed;
    if (this.vec.x > w / 2) {
      this.vec.x = -w / 2;
    }
  }

  shoot() {
    let projectile = new Projectile(this.vec.x, this.vec.y, this.bulletSpeed);
    this.projectiles.push(projectile);
  }

  damage() {
    this.health-=25;
    if(this.health <= 0){
      this.alive = false;
    }
  }

  levelUp() {
    this.level++;
    this.xp = 0;
    this.health = this.maxHealth;
    this.bulletSpeed += 15;
    this.fireRate -+ 10;
  }

  updateXP() {
    this.xp = this.xpBar.xp;
    if(this.level != this.xpBar.level){
      this.levelUp();
    }
  }

  
  
}
