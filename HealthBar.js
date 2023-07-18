
class HealthBar {
    constructor(x,y,health,w) {
        this.health = health;
        this.maxHealth = health;
        this.width = w;
        this.height = 20;
        this.x = x;
        this.y = y;
    }

    drawHealthBar() {
        push();
        translate(w / 2 - 30, h / 2 + 30);
        fill(255, 0, 0);
        rect(this.x, this.y, this.width, this.height,3);
        fill(0, 255, 0);
        rect(this.x, this.y, this.width * (this.health / this.maxHealth), this.height,3);
        pop();        
    }

    update(x,y,health) {
        this.x = x;
        this.y = y;
        this.health = health;
    }
}