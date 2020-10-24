var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
fixedRect=createSprite(400, 200, 50, 50);
fixedRect.shapeColor="green";
fixedRect.debug=true;
movingRect=createSprite(200, 100, 50, 40);
movingRect.shapeColor="green";
movingRect.debug=true;
}

function draw() {
  background(255,255,255);
  console.log(fixedRect.x-movingRect.x);

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2  ){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  else{ 
    movingRect.shapeColor="green"
  fixedRect.shapeColor="green"}
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;  
  drawSprites();
}