class Ball {
    constructor(x,y,radius){
        var option = {
            'isStatic':false,
            'density':1.2,
            'friction':0.05,
            'restitution':1
        }
        this.body = Bodies.circle(x, y,radius/2,option);
        this.x=x;
        this.y=y;
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
  
      push();
      translate(this.body.position.x,this.body.position.y);
      rectMode(CENTER)
      fill(255,0,255)
      ellipse(0,0,this.radius,this.radius)
      pop();
  }
  }
  
