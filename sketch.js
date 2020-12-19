//const Engine = Matter.engine
//const Bodies = Matter.bodies
//const World = Matter.world

var Division1, Division2, Division3, Division4, Division5, Division6, Division7;
var plinko;
var ground;
var particle;

function setup() {
  createCanvas(800,400);

  //engine = Engine.create();
  //world = engine.world;

  createSprite(400, 200, 50, 50);
 }

var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300;

function draw() {
  background(255,255,255);  
  drawSprites();
  
  Plinko.display;
  Ground.display;
  divisions.display;
  Particles.display;
  
  // if(frameCount % 60 === 0)
   //{
     // particle.push(new Particle(random(width/2-10, width/2+10), 10, 10));
   //}
}


