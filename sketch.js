var database;
var back_img;
var gameState= "play";
var playerCount = 0;
var allPlayers;
var flowers,flowerimg,flower,weed

var backgroundImg;
var maze,mazeimg,treeimg,riceimg,grassimg,birdimg,waterimg,wheatimg;
var tree,rice,grass,bird,water,wheat ,bucket,bucket1,bucket2,bucket3,bucketimg, weeds,weedimg;
var bg ;
//var form,player,game;
var score 
var playerCount;
var database;
var boy,boyrunning,boyimg,kid,kidimg,boyrunimg,houseimg,house,wellimg,well;
function preload() {
   grassimg=loadImage("grass.jpg");
   birdimg=loadImage("bird.jpg");
   back_img= loadImage("grass.jpg");
   boyimg=loadImage("boypic-removebg-preview.png");
   bucketimg=loadImage("bucket.jpg");
   houseimg=loadImage("houseimg.png");
   wellimg=loadImage("wellimg.jpg");
  flowerimg=loadImage("flowers.jpg");
  kidimg=loadImage("kid-removebg-preview.png");
  weedimg=loadImage("weeds.png");
  mazeimg=loadImage("maze.png");
}
function setup() {
  createCanvas(1000, 600);
  score=0;
  //database = firebase.database();
  boy=createSprite(650,190);
  boy.addImage(boyimg);
  boy.scale=0.17;
  well=createSprite(60,300);
  well.addImage(wellimg);
  well.scale=0.17;
  house=createSprite(800,150);
  house.addImage(houseimg);
  house.scale=0.7;
  //bird=createSprite(700,400);
  //bird.addImage(birdimg);
  //bird.scale=0.7;
  bucket=createSprite(50,380);
  bucket.addImage(bucketimg);
  bucket.scale=0.07;
  bucket1=createSprite(50,450);
  bucket1.addImage(bucketimg);
  bucket1.scale=0.07;
  bucket2=createSprite(50,520);
  bucket2.addImage(bucketimg);
  bucket2.scale=0.07;
  flowers=createSprite(800,400);
  flowers.addImage(flowerimg);
  flowers.scale=0.2
  weeds=createSprite(900,400);
  weeds.addImage(weedimg);
  weeds.scale=0.2;
  
  
}

function draw() {
  background(back_img);
  fill("black");
  textSize(15)
  text(" Score "+score,700,50);
  
  if(gameState=== "play"){
    if(keyDown("RIGHT_ARROW")){
      boy.x=boy.x+10
    }
    if(keyDown("LEFT_ARROW")){
      boy.x=boy.x-10
    }
    if(keyDown("DOWN_ARROW")){
      boy.y=boy.y+10
    }
    if(keyDown("UP_ARROW")){
      boy.y=boy.y-10
    }
    weeds.visible = false ;
    //to add the up and down arrow 
  
    //Boy holding the bucket  to water plants 
  if(boy.isTouching(bucket)){
   bucket.x=boy.x;
    bucket.y=boy.y;
    boy.addImage(kidimg);
  }
    if(boy.isTouching(bucket1)){
   bucket1.x=boy.x;
    bucket1.y=boy.y;
      boy.addImage(kidimg);
  }
   if(boy.isTouching(bucket2)){
   bucket2.x=boy.x;
    bucket2.y=boy.y;
     boy.addImage(kidimg);
  } 
    
    //Boy watering plants 
    if(bucket.isTouching(flowers)){
    flowers.scale=0.3
    bucket.destroy();
    score=score+100 
      boy.addImage(boyimg);
    
  }
  if(bucket1.isTouching(flowers)){
    flowers.scale=0.4
    bucket1.destroy();
    score=score+200
    boy.addImage(boyimg);
  }
  if(bucket2.isTouching(flowers)){
    flowers.scale=0.5
    bucket2.destroy();
    score=score+500
    boy.addImage(boyimg);
    gameState="end";
  }
  
  }
  else if(gameState==="end"){
  house.visible=false
    boy.visible=false
    flowers.visible=false
    well.visible=false
    bucket1.visible=false
    bucket2.visible=false
    bucket.visible=false
    textSize(25);
    text("LEVEL 2!",600,400)
    if(keyDown("space")){
      background(mazeimg);
    
     // maze=createSprite(400,400);
     
      
      flower=createSprite(200,200);
  flower.addImage(flowerimg);
  flower.scale=0.1
  weed=createSprite(200,200);
  weed.addImage(weedimg);
  weed.scale=0.1;
     
  

    }
    
   
  }
  
  drawSprites();
}