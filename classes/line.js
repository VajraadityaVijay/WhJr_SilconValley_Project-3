class Line {
    constructor(pointA, pointB) {
        if ((pointA.x + pointB.x) / 2 <= 0) {
            this.centerX = (pointB.x + pointA.x) / 2;
        } else {
            this.centerX = (pointA.x + pointB.x) / 2;
        }
        console.log("x: ", this.centerX)

        if ((pointA.y + pointB.y) / 2 <= 0) {
            this.centerY = (pointB.y + pointA.y) / 2;
        } else {
            this.centerY = (pointA.y + pointB.y) / 2;
        }
        console.log("y: ", this.centerY)

        this.length = dist(pointA.x, pointA.y, pointB.x, pointB.y);
        console.log("length: ", this.length)

        if(pointA.x > pointB.x) {
            var delta_x = pointA.x - pointB.x
        } else if (pointA.x < pointB.x) {
            var delta_x = pointB.x - pointA.x
        }
        if(pointA.y > pointB.y) {
            var delta_y = pointA.y - pointB.y
        } else if (pointA.y < pointB.y) {
            var delta_y = pointB.y - pointA.y
        }
        this.angle = atan2(delta_y, delta_x) - 180
        console.log("angle: ", this.angle)

        this.options = {
            isStatic: true,
            restitution: 0,
            density: 999,
            friction: 0
        }
        this.body = Bodies.rectangle(this.centerX, this.centerY, this.length, 5, this.options);
        Body.rotate(this.body, this.angle);
        World.add(world, this.body)

        var pos = this.body.position;
        this.sprite = createSprite(pos.x, pos.y, this.length, 5);
        this.sprite.shapeColor = BackgroundColor;
        this.sprite.rotation = this.angle * 57.2957795;
    }
}