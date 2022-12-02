
var bg,bag,rabbit,raby,leaf,les

function preload(){
  bag = loadAnimation("garden.png")
  raby = loadAnimation("rabbit.png")
  les = loadImage("apple.png")
}


function setup(){
  
  createCanvas(400,400);
  bg = createSprite(200,200)
  bg.addAnimation("background",bag)
  rabbit = createSprite(200,300)
  rabbit.addAnimation("rabd",raby)
  rabbit.scale = 0.1
  leaf = createSprite(400,50,20,100);
  var p = Math.round(random(1,10))

  console.log(p);
}
function draw() {
  if(keyDown("right"))
  {
    rabbit.x = rabbit.x + 5
  }
  if(keyDown("left"))
  {
    rabbit.x = rabbit.x - 5
  }
  leaf.y = leaf.y + 9;
  apple();
  drawSprites();
}
function apple()
{
  if(frameCount%60==0)
  {
    leaf = createSprite(400,50,20,100);
    leaf.x = Math.round(random(10,300));
    leaf.y = leaf.y + 9;
    leaf.addImage("agc",les);
    leaf.scale = 0.1;
  }
}