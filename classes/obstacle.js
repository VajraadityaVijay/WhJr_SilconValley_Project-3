class Obstacle {
    constructor(x, y, radius) {
        this.options = {
            isStatic: true,
            restitution: 0,
            density: 0,
            friction: 0.001
        };
        this.body = Bodies.circle(x, y, radius, this.options);
        this.diameter = radius * 2
        World.add(world, this.body);
    }

    display() {
        push();
        fill(BackgroundColor);
        noStroke();
        var pos = this.body.position;
        circle(pos.x, pos.y, this.diameter);
        pop();
    }
}