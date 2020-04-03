
var snake
var bug
var rand,r1



function setup() {
  createCanvas(800,400);

 snake = createSprite(400, 200, 20, 20);

 rand = random(800,0);
 r1 = random(0,400)
 bug = createSprite(200,50,20,20)

 
}

function draw() 
{ 
background(200);

text("feed the dog the bones to make it grow",50,150)


   if(keyDown("right"))
   {
     snake.setVelocity(5,0);
   }

   if(keyDown("left"))
   {
     snake.setVelocity(-5,0);
   }


   if(keyDown("down"))
   {
     snake.setVelocity(0,5);
   }


   if(keyDown("up"))
   {
     snake.setVelocity(0,-5);
   }
 //=============================  
   if(snake.isTouching(bug))
   {
     bug.x = random(0,800)
     bug.y = random(0,400)
     snake.width = snake.width+bug.width-15
     snake.height = snake.height+bug.height-15
   }
 //==============================
  
   

drawSprites();

}


