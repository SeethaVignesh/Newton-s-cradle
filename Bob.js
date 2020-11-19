class Bob {
    constructor(x, y) {
      var options = {
          //isStatic:true,
          restitution:1,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y, 15, options);
      this.radius= 15;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      fill("Purple");
      ellipse(pos.x, pos.y, 15);
      pop();
    }
}