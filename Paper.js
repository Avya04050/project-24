class Paper{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.0
        }
        //this.body = Bodies.rectangle(x, y, width, height, options);
        this.body = Bodies.circle(x, y, radius/2, options);
       // this.width = width;
        //this.height = height;
        this.radius=radius;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        //ellipse(pos.x, pos.y, this.width, this.height);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}