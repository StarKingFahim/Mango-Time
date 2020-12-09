
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;
var BackgroundImg;

function preload()
{

  BackgroundImg=loadImage("park.jpg");

}

function setup() {
	createCanvas(3000, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(360,500,20);
	mango1 = new Mango(1500,300,30);
	mango2 = new Mango(1600,250,30);
	mango3 = new Mango(1500,200,30);
	mango4 = new Mango(1590,300,30);
	mango5 = new Mango(1500,300,30);
	mango6 = new Mango(1400,300,30);
  mango7 = new Mango(1700,280,30);
  tree = new Tree(1500,705);
  ground = new Ground(0,705,4000,20);
	boy = new Boy(450,600);
	chain = new Chain(stone.body,{x:360, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);

  background(BackgroundImg);
  background.scale=2;
  fill("Black");
  stroke(20);
  fill('white');
  textSize(45);
  text("PRESS SPACE TO Pick Up Stone", 200,200);
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:135, y:155});
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}
