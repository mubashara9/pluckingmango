
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(440,560,50)
	//Create the Bodies Here.
	ground= new Ground(800,height,1600,20);
	tree = new Tree(1200,400)
	boy = new Boy(500,630,50,50)
	
	mango1 = new Mango(1090,335,40)
	mango2 = new Mango(1115,260,40)
	mango3 = new Mango(1136,342,40)
	
	sling = new SlingShot(stone.body,{x:450,y:570})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200,150,90);

  ground.display();

tree.display();
boy.display();
stone.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}



  function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance <=50)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }
  }