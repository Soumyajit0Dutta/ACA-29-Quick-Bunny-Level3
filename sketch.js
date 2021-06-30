var lost=0
var win=0
function preload() {
  //load game assets
  playerimage=loadImage("rabbit.jpg");
  targetimage=loadImage("carrot.png");
  obs1image=loadImage("snake 3.jpg");
  obs2image=loadImage("snake 1.jpg");
  obs3image=loadImage("snake 2.jpg");
  obs4image=loadImage("snake 4.jpg");
}


function setup() {
  createCanvas(600,600);
 player=createSprite(50,550,30,30);
 player.addImage(playerimage);
 player.scale=0.1;
 target=createSprite(550,50,30,30);
 target.addImage(targetimage);
 target.scale=0.2;
 bar1Group=new Group() 
 bar2Group=new Group()
 bar3Group=new Group()
 bar4Group=new Group()
}

function draw() {
  background("black"); 
  drawSprites()
  generateBlocks();
  if(keyDown("up")){
    player.y=player.y-3;
  }
  if(keyDown("down")){
    player.y=player.y+3;
  }
  if(keyDown("right")){
    player.x=player.x+3;
  }
  if(keyDown("left")){
    player.x=player.x-3;
  }
  text("you win"+win,400,60)
  text("you lost"+lost,400,80)
  if(player.isTouching(target)){
    text("you won",500,80);
    player.x=50;
    player.y=550;
    win++;
  }
  if(lost>10){
    text("you lost", 300,300);
    lost=0;
    
  }
    destroy(bar1Group);
    destroy(bar2Group);
    destroy(bar3Group);
    destroy(bar4Group);
}
function generateBlocks(){
  if(frameCount % 90 ==0)
  {
    obs1=createSprite(-20,380,100,20);
    obs2=createSprite(620,200,100,20);
    obs3=createSprite(-20,random(30,200),120,9);
    obs4=createSprite(620,random(210,480),120,9);
    obs1.addImage(obs1image);
    obs2.addImage(obs2image);
    obs3.addImage(obs3image);
    obs4.addImage(obs4image);
    obs1.velocityX=3;
    obs2.velocityX=-4;
    obs3.velocityX=5;
    obs4.velocityX=-5;
    bar1Group.add(obs1);
    bar2Group.add(obs2);
    bar3Group.add(obs3);
    bar4Group.add(obs4);
  }
}
function destroy(x){
  for(var i = 0 ; i< (x).length ;i++){
    var temp = (x).get(i) ;
    if (player.isTouching(temp)) {
      player.x=50;
      player.y=550;
      temp.destroy();
      lost++;
      temp=null;
      } 
    }
}