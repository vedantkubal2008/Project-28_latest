
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var boyimg


function preload()
{
	boyimg= loadImage("Plucking_mangoes/boy.png");
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  tree = new Tree(1050,583);

	ground = new Ground(width/2,600,1350,20)
	stone = new Stone(140,430,15);
	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1000,130,30);
	mango3 = new Mango(1190,140,30);
	mango4 = new Mango(1055,70,30);
	mango5 = new Mango(1250,230,30);
	mango6 = new Mango(950,210,30);
	mango7 = new Mango(1050,160,30);
	mango8 = new Mango(1150,200,30);
    
	constrain = new constraint(stone.body,{x:140,y:410})
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  image(boyimg,100,300,200,400);
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone.display();
  constrain.display();

  fill(0);
  textSize(20);
  text("Press Space to get a second Chance to Play !!",40,40);
  
 
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

 

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
	constrain.fly();
  }
  
  function keyPressed(){
	if(keyCode===32){
	  Matter.Body.setPosition(stone.body,{x:140,y:315});
	  constrain.attacher(stone.body);
	}
  }
  function detectCollision(body1,body2){
    body1pos = body1.body.position;
    body2pos = body2.body.position;
  
    var distance = dist(body1pos.x,body1pos.y,body2pos.x,body2pos.y)
    if(distance <=body2.r + body1.r){
      Matter.Body.setStatic(body2.body,false);
    }
  }

