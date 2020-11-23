
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper_ball, ground, bin1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper_ball= new Paper(100, 450, 40);
	ground = new Ground(600, 650, 1200, 25);
	bin1 = new Box(900, 640, 200, 20);
	bin2 = new Box(800, 600, 20, 100);
	bin3 = new Box(1000, 600, 20, 100);
    var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  //rectMode(CENTER);
  background(0);
  paper_ball.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  keyPressed();
  //drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper_ball.body, paper_ball.body.position, {x:85, y:-85})
	 }
   }


