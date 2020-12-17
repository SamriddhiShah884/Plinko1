class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;

        this.body=Matter.Bodies.circle(this.x, this.y, 25,options);
        World.add (world, this.body);
    }

    display(){
        ellipseMode(CENTER);
        stroke ("white");
        noFill ();
        ellipse(this.body.position.x, this.body.position.y, 25,25);
    }
}