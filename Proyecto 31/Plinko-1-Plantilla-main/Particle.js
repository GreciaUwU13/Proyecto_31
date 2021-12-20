class Particle{
    constructor(x, y){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
       /* r = random(255);
        g = random(100, 200);
        b = random(100);
        b = random(200, 255);*/
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color( random (0, 255), random(0, 209), random(0, 255));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

        /*ellipse(200, 200, 100, 100);
        this.color = color( random (0, 255), random(0, 255), random(0, 255));*/
    }
}