class Girl{
    constructor(x,y){
        var options={
            density:1,
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height);
        this.image = loadImage("snowgirl.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        image(this.image);
        pop();
    }

}