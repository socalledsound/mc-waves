
let xPoints = [], yPoints = [], waves = [];
let t = 0, cycleLength = 360;

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
  stroke(255);
  noFill();
  
}

function draw() {
  background(0);
  translate(150,200);
  
  beginShape();
  
  for(let i = 0; i < cycleLength; i++){
    let rad = 100;
    let x = rad * cos(i);
    let y = rad * sin(i);
    
    xPoints[i] = x;
    yPoints[i] = y;
    
    vertex(x,y);
  }
  
  endShape(CLOSE);
  
  smallCircleCenterX =  xPoints[t%cycleLength];
  smallCircleCenterY =  yPoints[t%cycleLength];
  
  line(0, 0, smallCircleCenterX, smallCircleCenterY);
   point(smallCircleCenterX, smallCircleCenterY);
  
  //  ellipse(smallCircleCenterX, smallCircleCenterY, 50);
  
  waves.unshift(smallCircleCenterY);
  
  translate(200,0);
  
  line(smallCircleCenterX-200, smallCircleCenterY, 0, waves[0]);
  
  beginShape();
  for(let i = 0; i < waves.length; i++){
  
    vertex(i, waves[i]);
  }
  endShape();
  if(waves.length > 360){
    waves.pop();
   // waves = [];
  }
  
  console.log(waves.length);
  
  
  
  t++
}