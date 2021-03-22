class Launcher{
    constructor (bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.025,
            length : 50
        };

        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        console.log(this.chain);
    }
    

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        console.log(pointA, pointB);
        strokeWeight(2)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }

    fly(){
        this.chain.bodyA = null;
    }
}