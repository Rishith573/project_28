class Dustbin {
    constructor(x, y, width, height){
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("sprites/dustbingreen.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill("white");
        image(this.image, pos.x, pos.y-55, this.width, 150);
      }
};