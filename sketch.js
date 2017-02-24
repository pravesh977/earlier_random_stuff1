function setup() {
  createCanvas(400,200); //sets canvas
}

function draw() {
  background(200,200,10) //sets background
 
  noStroke();
   fill(12,43,76); //fills the circle
       if (mouseY>100) {//stats a condition if the mouse is hovered below the middle of the canvas
    //     noStroke();
  background(100,32,54);//changes the background with the condition
   fill(255,23,32);//fills the circle with different condition with the condition
    ellipse(200,100,100,100); //changes the size of the ellipse with the condition
     
      }
  ellipse(200,100,60,60); //sets the coordinate and size of the ellipse
   

  
}