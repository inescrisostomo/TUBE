a=0; 
diametro=100

function setup() {  
  
  createCanvas(windowWidth, windowHeight);
  
  colorMode(RGB);
  background(0);
  
  fill("rgba(0, 0, 0, 0.01)");
  stroke("rgba(250, 250, 250, 0.2)");  
  
}

function draw() {  
  background("rgba(0,0,0,0.2)");
   for (let i=0; i<60; i++){
   ellipse((a+(diametro/2))*2-50, windowHeight/2 +(sin(a/50)*200)*2, diametro, diametro);
   a++;     
  }
  if(a>2000){
    a=0;
  }
}
