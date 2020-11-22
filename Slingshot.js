class Slingshot{
    constructor(bodyA, vpointB){
        var options = {
            bodyA: bodyA,
            pointB: vpointB,
            stiffness: 0.004,
            length: 15
        }
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
    fly(){
        this.Sling.bodyA=null
    }
    attach(body){
        this.Sling.bodyA=body
    }
    display(){
        if(this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.Sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    
    
}
