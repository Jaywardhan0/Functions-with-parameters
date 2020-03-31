var rec,square,shq,shq2
function setup() {
  createCanvas(800,400);
  square = createSprite(400, 200, 50, 50);
  rec = createSprite(200,200,50,20)
  shq = createSprite(300,200,20,20)
  shq2 = createSprite(100,200,60,40)
}

function draw() {
  background(255,255,255);  
  rec.x = World.mouseX
  rec.y = World.mouseY
  
  drawSprites();
  if (isTouching(rec,square)){
    rec.shapeColor = "Yellow"
    square.shapeColor = "Red"
  }
  if(isTouching(rec,shq2)){
    rec.shapeColor = "Blue"
    shq2.shapeColor = "Green"
  }
  if(isTouching(rec,shq)){
    rec.shapeColor = "Lightblue"
    shq.shapeColor = "Purple"
  }
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    && object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object2.height/2){
    return true
   }
}