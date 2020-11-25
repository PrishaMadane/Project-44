class Obstacle{
    constructor(x,y){
       
        var options = {
         isStatic:true
        }
    this.image = loadImage('images/log.png');
    this.body = Bodies.rectangle(x,y,200,10,options);
    this.width=200;
    this.height=50;
    World.add(world,this.body);
    }
   display(){
    var pos= this.body.position;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
   // strokeWeight(3);
   // stroke('blue');
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
   }


}

