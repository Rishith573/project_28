
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin1, dustbin2, dustbin3, sling;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50, 550, 10);
	ground = new Ground(400, 600, 800, 10);
	dustbin1 = new Dustbin(550, 520, 20, 150);
	dustbin2 = new Dustbin(590, 585, 100, 20);
	dustbin3 = new Dustbin(650, 520, 20, 150);

	sling = new Launcher(paper.body, {x:500, y:600});

	Engine.run(engine);
  
}


function draw() {
  background("lightgrey");
  rectMode(CENTER);
  drawSprites();

  paper.display();
  ground.display();
  dustbin2.display();
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:14, y:-17})
	}
}