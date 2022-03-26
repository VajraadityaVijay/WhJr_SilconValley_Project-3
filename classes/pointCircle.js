class PointCircle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.options = {
            isStatic: true
        };
        this.body = Bodies.circle(x, y, 14, this.options)
        this.body.collisionFilter = {
            'group': -1,
            'category': 2,
            'mask': 0,
        };
        World.add(world, this.body);
    }

    display() {
        if (this.body !== null) {
            push();
            noFill();
            stroke(BackgroundColor);
            strokeWeight(3);
            var pos = this.body.position;
            circle(pos.x, pos.y, 28);
            pop();

            if (Matter.SAT.collides(ControlCircle, this.body).collided) {
                World.remove(world, this.body)
                this.body = null;
                loadNextSize();
            }
        }
    }
}