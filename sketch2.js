
const numPoints = 360;
const points = Array.from({length: numPoints});
const xPoints = Array.from({length: numPoints});
const yPoints = Array.from({length: numPoints});
const waves = Array.from({length: numPoints});
const circleRadius = 100;
const cycleLength = 360;
let counter = 0;
// const offsetX = 150;
// const offsetY = 200;
let theta= 0.01;
let inc = 0.1;



function preload(){

}


function setup(){

    createCanvas(800, 800);
    angleMode(DEGREES);
    stroke(255);
    strokeWeight(6);
    noFill();

}


function draw(){
    background(0);
    // translate(150,200);
     leftCircle(); 
     lineToCircleEdge();
    translate(100, 150)
    wave();




}


function leftCircle(){
    beginShape();

        points.forEach( (point, i) => {
            
            let x = sin(i) * circleRadius;
            let y = cos(i) * circleRadius;

            xPoints[i] = x;
            yPoints[i] = y; 
            // vertex(x, y);     
            theta += inc;
       
        })

    endShape(CLOSE);
    
}

function lineToCircleEdge(){

    const smallCircleCenterX =  xPoints[counter%cycleLength];
    const smallCircleCenterY =  yPoints[counter%cycleLength];
    
    // line(0, 0, smallCircleCenterX, smallCircleCenterY);
    //  point(smallCircleCenterX, smallCircleCenterY);
    
    //  ellipse(smallCircleCenterX, smallCircleCenterY, 50);
    
    waves.unshift(smallCircleCenterY);
    
    // translate(200,0);
    
    // line(smallCircleCenterX-200, smallCircleCenterY, 0, waves[0]);


}

function wave(){
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
    
    
    
    counter++
}


