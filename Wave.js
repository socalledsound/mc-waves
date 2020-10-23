
class Wave {
    constructor(xOff, yOff){
        this.xOff = xOff
        this.yOff = yOff;
        this.yPoinst = Array.from({})
        this.counter = 0;
        this.circleRadius = 100;
        this.cycleLength = 360;
        this.points = Array.from({length: this.cycleLength});
        this.yPoints = Array.from({length: this.cycleLength});
        this.waves = Array.from({length: this.cycleLength});
    }

    addNextPoint(){
        const point =  this.yPoints[this.counter%this.cycleLength];
        this.waves.unshift(point);
        }
        


    display(){
        // translate(this.xOff, this.yOff);
        beginShape();
        for(let i = 0; i < this.waves.length; i++){
            vertex(i + this.xOff, this.waves[i] + this.yOff);
        }
        endShape();
        if(this.waves.length > 360){
          this.waves.pop();
         // waves = [];
        }
        
        // console.log(waves.length);
       
        }

    generateCirclePoints(){
            this.points.forEach( (point, i) => {      
                let x = sin(i) * this.circleRadius;
                let y = cos(i) * this.circleRadius;
                this.yPoints[i] = y;    
            })    
        }

    update(){
        this.counter++
        this.generateCirclePoints();
        this.addNextPoint();
    }    
}
