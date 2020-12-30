var dustbin,dustbin2,dustbin3;
var ground;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    dustbin = new Dustbin(1300,600,20,160);
    dustbin2 = new Dustbin(1050,600,20,160);
    dustbin3 = new Dustbin(1200,600,300,20);

    ground = new Ground(600,height,1700,20);
    
    paper = new paper(100,600,25);

	

	Engine.run(engine);
  
}


function draw() {

  
  rectMode(CENTER);
  background(0);
  
  
  //drawSprites();
  dustbin.display();
  ground.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  
 
}

function KeyPressed(){
  if(KeyCode === UP_ARROW){
    Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}







