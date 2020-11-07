
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var ground ;
var FoodGroup, obstacleGroup
var score=0;
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
 
}


function draw() {
createCanvas(400,400)
  
  stroke("white");
  textSize(20);
  fill("blue");
  text("Score "+score,300,50);
  
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/20)
  text("SurvivalTime: "+survivalTime,100,50);
  
  
  
  ground.x=ground.width/2;
  console.log(ground.x)
  
  if(keyDown("space")&&monkey.y>300){
    monkey.velocityY=-15;  
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  if(FoodGroup.isTouching(monkey)){
    score=score+1;
    banana.destroy();
  }
  
  if(obstacleGroup.isTouching(monkey)){
    obstacle.setVelocity(0,0);
  }
  
  
  
  monkey.collide(ground);
  
  spawnBanana();
  spawnObstacles();
  
  drawSprites();
}

function spawnBanana(){
  if(frameCount % 80 === 0){
    banana = createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y=Math.round(random(120,200));
    banana.velocityX=-4;
    banana.lifetime=400;
    
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount % 300===0){
    obstacle = createSprite(400,327,20,20);
    obstacle.addImage("obstacles",obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-4;
    obstacle.lifetime=300;
    
    obstacleGroup.add(obstacle);
    
  }
  
}



