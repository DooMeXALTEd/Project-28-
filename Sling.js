class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
     push();
     if(this.sling.bodyA !== null){
         var pos = this.sling.bodyA.position;
         strokeWeight(4);
         stroke("red");
         line(pos.x, pos.y, this.pointB.x , this.pointB.y);
     }
     pop();
       
        }
    }
    
