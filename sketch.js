
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(width/2,670,width,20);
	dustbin1 = new Dustbin(1100,680,200,20);// bottom block
	dustbin2 = new Dustbin(1200,640,20,100);// right block
	dustbin3 = new Dustbin(1000,640,20,100);// left block
	paper = new Paper(200,450,40);

	var render = Render.create({ element: document.body, engine: engine, options: 
		{ width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}



