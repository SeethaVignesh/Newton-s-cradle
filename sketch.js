const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,250,800,10);

	bob1 = new Bob(325,386);
	bob2 = new Bob(345,386);
	bob3 = new Bob(365,386);
	bob4 = new Bob(385,386);
	bob5 = new Bob(405,386);

	rope1 = new Rope(bob1.body, roof1.body, -35*2, 0);
	rope2 = new Rope(bob2.body, roof1.body, -35*1.5, 0);
	rope3 = new Rope(bob3.body, roof1.body, -35*1, 0);
	rope4 = new Rope(bob4.body, roof1.body, -35*0.5, 0);
	rope5 = new Rope(bob5.body, roof1.body, -35*0, 0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(150);

  Engine.update(engine);

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-20,y:-20});
	}
}