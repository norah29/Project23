const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redb1, redb2, redb3 ;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	var canvas = createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
    world = engine.world;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=new Ground(width/2, height-35,950,5);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	redb1 = new Container(330,610,30,105);
	redb2 = new Container(width/2,650, 110, 25);
	redb3 = new Container(470,610,30,105);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y
  //packageSprite.display();
  helicopterSprite.display();
  groundSprite.display();
  redb1.display();
  redb2.display();
  redb3.display();
  image(packageIMG, packageBody.position.x, packageBody.position.y,50,50)

drawSprites();

}

 

function keyPressed() {
 if (keyCode === 32) {

	// Look at the hints in the document and understand how to make the package body fall only on
	
	Matter.Body.setStatic(packageBody,false);
  }
}

