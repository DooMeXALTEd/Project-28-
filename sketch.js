var ground;
var stone;
var tree;
var boyImg, treeImg;
var mango1,mango2,mango3,mango4,mango5;
var sling;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg = loadImage("boy.png");
	treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1300, 600);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(650,580,1300,10);

	stone = new Stone(133,450,30);

	mango1 = new Mango(1100,100,50);
	mango2 = new Mango(1200,200,50);
	mango3 = new Mango(1050,250,50);
	mango4 = new Mango(1000,200,50);
	mango5 = new Mango(1100,200,50);

	sling = new Sling(stone.body, {x:133, y:455});
	
 
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(boyImg, 100,390,200,250);
  image(treeImg,900,35,400,550);

 ground.display();
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 sling.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
 
}
function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
    sling.fly();
   
}

function keyPressed(){
    if(keyCode === 32){
     
     Matter.Body.setPosition(stone.body, {x: 133 , y: 450});
     sling.attach(stone.body);
    }
}
function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position;
	stoneBodyPosition=stone.body.position;
	
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=mango.radius+stone.radius){
		Matter.Body.setStatic(mango.body, false);
	}
}

