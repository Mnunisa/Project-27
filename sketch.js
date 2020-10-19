
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  bob1,bob2,bob3,bob4,bob5;
var  roof;
var  rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1= new Bob(280,480,80);
	bob2= new Bob(360,480,80);
	bob3= new Bob(440,480,80);
	bob4= new Bob(520,480,80);
	bob5= new Bob(600,480,80);
	roof = new Roof(400,100,800,40);

	rope1= new Rope(bob1.body,roof.body,{x:x=280,y:y=260});
    rope2= new Rope(bob2.body,roof.body,{x:x=460,y:y=260});
    rope3= new Rope(bob3.body,roof.body,{x:x=540,y:y=260});
    rope4= new Rope(bob4.body,roof.body,{x:x=620,y:y=260});
    rope5= new Rope(bob5.body,roof.body,{x:x=700,y:y=260});


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  drawSprites();

  if(keyCode===UP_ARROW){
	  bob1.Velocityx=5;
	  bob1.velocityy=-5;
  }

}



