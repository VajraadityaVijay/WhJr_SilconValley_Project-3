class Link {
  constructor(bodyA, bodyB) {
    this.link = Constraint.create(
      {
        pointA: bodyA,
        bodyB: bodyB,
        pointB: { x: 0, y: 0 },
        length: BigCircleRadius / 2 - 15,
        stiffness: 2
      });
    this.link.collisionFilter = {
      'group': -1,
      'category': 2,
      'mask': 0,
    };
    World.add(engine.world, this.link);
  }

  detach() {
    World.remove(engine.world, this.link);
  }
}

