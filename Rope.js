class Rope  {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,x:this.offsetY}
        }
         this.rope = Constraint.create(options);
         World.add(world, this.rope);
    }
     //attach(body){
       //  this.rope.bodyA=body;
     //}

    display(){
           var pointA = this.rope.bodyA.position;
             push();
             strokeWeight(7)
             stroke(5,4,4);
             line(pointA.x,pointA.y-40,pointA.x,pointA.y-400);
             pop();
             
        }
        
    
    
}