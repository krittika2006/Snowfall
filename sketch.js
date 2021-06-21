var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var girl;
var snows = [];
var ground;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
 
  girl = new Girl(300,100,50,50);
  ground = new Ground(width/2,height,width,20);

}

function draw() {
  background(255,255,255);  
  drawSprites();
 
  
  Engine.update();

  girl.diplay();


  //for diplaying snow
  for (var k = 0; k < snows.length; k++) {
    snows[k].display();
  }

  if(frameCount%60===0){
    snows.push(new Snow(random(width/2-30,width/2+30),10,10));
  }

}