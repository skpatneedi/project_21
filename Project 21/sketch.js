var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  speed = random(223,321)
  weight = random(30,52)
  bullet = createSprite(50, 200, 10, 50);23
  wall = createSprite(1200, 200,thickness, height/2);
  bullet.velocityX = speed;
  console.log(thickness)
}

function draw() {
  background(255,255,255);  
  //console.log(speed)
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0 
    var damage = 0.5* speed*weight*speed/(thickness*thickness*thickness)
    if ( damage>10){
      bullet.shapeColor = color(255,0,0)
      wall.shapeColor = color(255,0,0)
    }
    if ( damage<10){
      bullet.shapeColor = color(0,255,0)
      wall.shapeColor = color(0,255,0)
    }
  }
  drawSprites();
}
function hasCollided(bullet1,wall1){
bulletRightEdge = bullet1.x+bullet1.width
wallLeftEdge = wall1.x
if(bulletRightEdge>=wallLeftEdge){
  return true
}else{
  return false
}
}