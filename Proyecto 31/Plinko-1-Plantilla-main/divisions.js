class Divisions {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
       // this.image = loadImage("pino.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("lightblue");
        rect(pos.x, pos.y, this.w, this.h);
        /*imageMode(CENTER);
        image(this.image, pos, this.w, this.h);*/
    }
};