
class MovingObject{

    constructor(dimensions){
        this.pos = dimensions.pos;
        this.vel = dimensions.vel;
        this.radius = dimensions.radius;
        this.color = dimensions.color;
    }

    move(){
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1]

    }

    drawObj(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
    
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
        ctx.fill(); 
    }

    isCollidedWith(){

    }
}

export default MovingObject;