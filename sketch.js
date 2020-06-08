function setup() {
  createCanvas(1200,400);
  fixRect = createSprite(600,400,50,80);
  fixRect.debug = true
  movingRect = createSprite(400,200, 80, 30);
  movingRect.debug = true
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x-fixRect.x);
  if (movingRect.x-fixRect.x<movingRect.width/2+fixRect.width/2 &&
     fixRect.x-movingRect.x<movingRect.width/2+fixRect.width/2 && 
     movingRect.y-fixRect.y<movingRect.height/2+fixRect.height/2 &&
     fixRect.y-movingRect.y<movingRect.height/2+fixRect.height/2 ){ 
movingRect.shapeColor="red";
fixRect.shapeColor="red";
  }
  else {
movingRect.shapeColor="green";
  }
  drawSprites();
}