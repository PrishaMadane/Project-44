
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player;
var obstacle1;

function preload()
{
  Player_image = loadImage('images/player.jpg');
  Background_image = loadImage('images/background.jpg');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  player = createSprite(400,600,20,20);
  player.addImage(Player_image);
  player.scale= 0.1;


  obstacle1 = new Obstacle(200,400); 
  Matter.Body.setVelocity(this.obstacle1.body,{x:2,y:0});
  obstacle2 = new Obstacle(600,300);
  //obstacle2.velocityX = 2;
  obstacle3 = new Obstacle(200,200);
 // obstacle3.velocityX = 2;
  obstacle4 = new Obstacle(600,100);
 // obstacle4.velocityX = 2;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(Background_image);
  player.display();
  obstacle1.display();
  obstacle2.display();
  obstacle3.display();
  obstacle4.display();
  if (keyDown("UP_ARROW")){
    player.velocityY= -2;
    player.velocityX= 0;
  }
  if (keyDown("DOWN_ARROW")){
    player.velocityY= 2;
    player.velocityX= 0;
  }
  if (keyDown("RIGHT_ARROW")){
    player.velocityX= 2;
    player.velocityY= 0;
  }
  if (keyDown("LEFT_ARROW")){
    player.velocityX= -2;
    player.velocityY= 0;
  }
  
  

  drawSprites();
 
}



