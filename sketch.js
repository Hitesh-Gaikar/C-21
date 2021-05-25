var countDistanceX=0
var Gap= 60

function preload()
{}

function setup() {
  createCanvas(9000, 668);
  platform1=new Platform(100);
  platform2=new Platform(500);

for(var i=0; i<20; i++){
  Platform1= new Platform(countDistanceX)
  Gap= random([140,160,180,60])
countDistanceX=countDistanceX+platform1.rw+Gap
}
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

