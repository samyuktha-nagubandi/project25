class Dustbin 
{
    constructor(x,y) 
    {
       this.x=x;
       this.y=y;
       this.DustbinWidth=200;
       this.DustbinHeight=100;
       this.wallThickness=20;
       this.angle=0;

       this.bottomBody=Bodies.rectangle(this.x,this.y,this.DustbinWidth,this.wallThickness, {isStatic:true})
       this.leftWallBody=Bodies.rectangle(this.x-this.DustbinWidth/2,this.y-this.DustbinHeight/2,this.wallThickness,this.DustbinHeight,{isStatic:true})
       Matter.Body.setAngle(this.leftWallBody,this.angle);

       this.rightWallBody=Bodies.rectangle(this.x+this.DustbinWidth/2,this.y-this.DustbinHeight/2,this.wallThickness,this.DustbinHeight,{isStatic:true})
       Matter.Body.setAngle(this.rightWallBody,-1*this.angle);
       World.add(world,this.bottomBody);
       World.add(world,this.leftWallBody);
       World.add(world,this.rightWallBody);

       this.image=loadImage("dustbingreen.png");
    }
    display()
      {
        var posBottom=this.bottomBody.position;
        var posLeft=this.leftWallBody.position;
        var posRight=this.rightWallBody.position;
        

        push()
        translate(posLeft.x,posLeft.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(this.angle)
        rect(0,0,this.wallThickness,this.DustbinHeight);
        pop()

        push()
        translate(posRight.x,posRight.y);
        rectMode(CENTER)
        stroke(255) 
        angleMode(RADIANS)
        fill(255)
        rotate(-1*this.angle)
        rect(0,0,this.wallThickness,this.DustbinHeight);
        pop()

        push()
        translate(posBottom.x,posBottom.y);
        rectMode(CENTER)
        stroke(255) 
        angleMode(RADIANS)
        fill(255)
        rotate(-1*this.angle)
        rect(0,0,this.DustbinWidth,this.wallThickness);
        pop()
        
      }
    
}