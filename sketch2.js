
const numPoints = 360;
const points = Array.from({length: numPoints});
const xPoints = Array.from({length: numPoints});
const yPoints = Array.from({length: numPoints});
const circleRadius = 200;
const offsetX = 300;
const offsetY = 300;
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

    
    beginShape();

        points.forEach( (point, i) => {
            
            let x = sin(i) * circleRadius + offsetX;
            let y = cos(i) * circleRadius + offsetY;

            xPoints[i] = x;
            yPoints[i] = y; 
            vertex(x, y);     
            theta += inc;
       
        })

    endShape(CLOSE)    

}



