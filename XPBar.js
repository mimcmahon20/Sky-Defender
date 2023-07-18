
class XPBar {
    constructor(x,y,xp,l) {
        this.xp = xp;
        this.maxXP = 100;
        this.level = l;
        this.width = 55;
        this.height = 20;
        this.x = x;
        this.y = y;
        this.level = l
    }

    drawXPBar() {
        push();
        translate(w / 2 - 30, h / 2 - 60);
        fill(25, 25, 25);
        rect(this.x, this.y, this.width, this.height,3);
        fill(0, 155, 155);
        rect(this.x, this.y, this.width * (this.xp / this.maxXP), this.height, 3);
        pop();        
    }

    update(x,y) {
        this.x = x;
        this.y = y;
    }

    addXP(xp) {
        this.xp += xp;
        if(this.xp >= this.maxXP) {
            this.level++;
            this.xp = 0;
            this.maxXP *= 1.5;
        }
    }
}