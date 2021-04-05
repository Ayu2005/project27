class rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var option = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope= Constraint.create(option);
        World.add(world,this.rope);
    }

    display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;

    var Anchore1X=pointA.x
    var Anchore1Y=pointA.y

    var Anchore2X=pointB.x+this.offsetX
    var Anchore2Y=pointB.y+this.offsetY

    strokeWeight(2);

    
    line(Anchore1X,Anchore1Y,Anchore2X,Anchore2Y);
    }
}