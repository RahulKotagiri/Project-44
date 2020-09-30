var runner, runnerImage;

var croc, crocImage;

var rock, rockImage;

var treeTrunk, treeTrunkImage;

var background1, backgroundImage;

var ground1;


function preload()
{
	runnerImage = loadImage("images/runner1.png");

	crocImage = loadImage("images/croc.png");

	rockImage = loadImage("images/rock.png");

	treeTrunkImage = loadImage("images/tree trunk.png");

	backgroundImage = loadImage("images/background.jpg");
}

function setup() {
	createCanvas(800, 400);


	//Create the Bodies Here.

	background1 = createSprite(800,200,10,10);
	background1.addImage("background", backgroundImage);
	background1.scale = 1

	runner = createSprite(150,340,10,10);
	runner.addImage("runner", runnerImage);
	runner.scale = 0.2;
	
	ground1 = createSprite(400,410,800,10)
	ground1.visible = false;
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  if(keyWentDown("space")){
	runner.velocityY = -10
	runner.velocityX = 0;
  }

  runner.velocityY = runner.velocityY + 0.7;

  background1.velocityX = -7

  if(background1.x < 0){
	background1.x = background1.width/2;
  }
  runner.collide(ground1); 

  drawSprites();
 
}



