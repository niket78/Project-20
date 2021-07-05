var sleep, brush, gym,  eat, drink, move, bg;
var astronaut;





function preload() {
bgimg = loadImage("image/iss.png");
sleep = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym11.png", "images/gym12.png");
eat = loadAnimation("images/eat1.png","images/eat2.png");
drink = loadAnimation("images/drink1.png","images/drink2.png");
move = loadAnimation("images/move.png","images/move1.png");
bath = loadAnimation("images/bath1.png","images/bath2.png");
}




function setup() {
createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 astronaut = createSprite(300,230);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale = 0.1;

  

}

function draw() {
  background(255,255,255);
  background(bg); 
  
  if(keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  createEdgeSprites();




  drawSprites();
}