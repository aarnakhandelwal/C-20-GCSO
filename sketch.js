function setup() {
  createCanvas(1500,400);

  car= createSprite(50, 200, 50, 50);
  wall= createSprite(1300,200,60,height/2);

  speed=random (55,90);
  wheight=random(400,1500);

  car.shapeColor="white";
  wall.shapeColor="#bf8040";
  
}

function draw() {
  background("black");  

car.velocityX=speed;

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 *wheight*speed* speed/22509;

    console.log("deformation"+deformation);
    
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0) 
    }

  }
 
  console.log("+speed;");
  console.log("+wheight")
  

  drawSprites();
}