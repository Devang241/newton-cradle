const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball, roof, chain;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(500,400,50);
    ball2 = new Ball(550,400,50);
    ball3 = new Ball(600,400,50);
    ball4 = new Ball(650,400,50);
    ball5 = new Ball(700,400,50);
    roof = new Roof(600,200,500,20);
    chain = new Chain(ball.body,roof.body,-50*2,0);
    chain2 = new Chain(ball2.body,roof.body,-25*2,0);
    chain3 = new Chain(ball3.body,roof.body,0*2,0);
    chain4 = new Chain(ball4.body,roof.body,25*2,0);
    chain5 = new Chain(ball5.body,roof.body,50*2,0);

}

function draw(){
    Engine.update(engine);
    background(255);
    roof.display();
    chain.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
    ball.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
  
      Matter.Body.applyForce(ball.body,ball.body.position,{x:-180,y:-180});
    
    }
  }