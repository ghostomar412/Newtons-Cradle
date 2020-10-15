class Rope{
    constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX, y:this.offsetY}
        
            }
            this.chain=Matter.Constraint.create(options)
            World.add(world,this.chain);
        }
        display(){
            line(this.chain.bodyA.offsetX,this.chain.bodyA.offsetY,this.chain.bodyB.offsetX,this.chain.bodyB.offsetY);
            fill(255)
        }

}