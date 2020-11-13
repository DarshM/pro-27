class Rope{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        
        
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
    
//this.pointB=pointB;

        this.sling = Constraint.create(options);
        World.add(world, this.sling);   
   
    }

    display() {
        var pos = this.body.position;
        translate(pos.x,pos.y);
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.pos.x, pointA.pos.y, pointB.pos.x, pointB.pos.y);
    }
    
    }

}
     
    