
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,width,20);
	tree = new Tree(600,390,400,600);

	mango1 = new Mango(520,200,50);
	mango2 = new Mango(658,210,50);
	mango3 = new Mango(597,300,50);
	mango4 = new Mango(514,290,50);
	mango5 = new Mango(700,270,50);
	mango6 = new Mango(581,250,50);

	fill("white")
	rectMode(CENTER);
	rect(200,200,50,50);

	boy = new Boy(180,590,300,350);
	stone = new Stone(85,550,30);

	slingshot = new Slingshot(stone,{x:55,y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  boy.display();
  stone.display();
  slingshot.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }
  
function mouseReleased(){
	slingshot.fly();
  }

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		slingshot.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	stoneBodyPosition=lstone.body.position;
	mangoBodyPosition=lmango.body.position;
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}