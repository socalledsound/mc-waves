
// const numPoints = 360;

// const points = Array.from({length: numPoints});
// const xPoints = Array.from({length: numPoints});

// const circleRadius = 100;
// const cycleLength = 360;
// let counter = 0;
// const offsetX = 150;
// const offsetY = 200;
// let theta= 0.01;
// let inc = 0.1;
const numWaves = 10;
let waves = Array.from({length: numWaves});

function preload(){

}


function setup(){

    createCanvas(800, 800);
    angleMode(DEGREES);
    stroke(255);
    strokeWeight(6);
    noFill();

    waves.forEach((wave, i) => {
        waves[i] = new Wave(150, 150 + ( i * 30 ));
    })
    

}


function draw(){
    background(0);
    // translate(100, 150)
    waves.forEach(wave =>{
        wave.update();
        wave.display();
    })

    




}



