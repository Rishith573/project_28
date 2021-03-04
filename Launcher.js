class Launcher{
    constructor (bodyA, bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.5,
            length : 100
        };
        this.chain = Launcher.create(options);
        World.add(world, this.chain);
        console.log(this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        console.log(pointA, pointB);
        strokeWeight(0.5)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }

}