a=0; 
diametro=100


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  frameRate (10);
  
  colorMode(RGB);
  background(0);
  

}

function draw() {
  
  background("rgba(0,0,0,0.02)");
 
  a++;

  fill("rgba(0, 0, 0, 1)");
  stroke("rgba(250, 250, 250, 0.5)");
  ellipse(a+(diametro/2), windowHeight/2 +(sin(a/50)*150), diametro, diametro);
  


  }
