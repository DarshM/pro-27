
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof1;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,17,800,30);
	bob1 = new Bob(200,500,35);
	bob2 = new Bob(275,500,35);
	bob3 = new Bob(350,500,35);
	bob4 = new Bob(425,500,35);
	bob5 = new Bob(500,500,35);
	rope1 = new Rope(bob1.body,roof1.body,-70,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
 
 
  drawSprites();
 
}



