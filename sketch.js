
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,200)

	dustbin=new Dustbin(695,625,150,20)
	dustbin2=new Dustbin(610,585,20,100)
	dustbin3=new Dustbin(780,585,20,100)

	ground=new Ground(400,650,1000,30)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);  
  background(0);

  paper.display();
  dustbin.display();
  ground.display();

  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}
 function keyPressed(){
if(keyCode===UP_ARROW)
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
 }


