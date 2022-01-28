a=0; 
diametro=100


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  background(0);
  fill("rgba(0, 0, 0, 0.01)");
  stroke("rgba(250, 250, 250, 0.1)");
  

}

function draw() {

  a++;

for (let i=0; i<10; i++){
   ellipse((a+(diametro/2))*2, windowHeight/2 +(sin(a/50)*200)*2, diametro, diametro);
  a++;
}
 
  
