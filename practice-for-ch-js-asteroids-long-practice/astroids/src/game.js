import MovingObject from "./moving_object";
import Ship from "./ship";
import Bullet from "./bullet";
import Asteroid from "./asteroid";

const Mo = {pos:[100, 100], vel: 0, radius: 20, color: "green" }

const CONSTANTS ={
    DIM_X: window.innerWidth,
    DIM_Y: window.innerHeight,
    NUM_ASTEROIDS: 10,

}

class Game{
    //holds collections of the asteroids, bullets, and ship
    constructor(ctx){
        //this.ship = new Ship(Mo)
        //this.ship.draw(ctx);
        this.asteroids = [];
        this.bullets = [];
        this.addAsteroids();
    }

    rng(num){
        return Math.floor(Math.random() * num)
    } 
    addAsteroids(){
        let randX;
        let randY;
        let asteroid;

        while (this.countAsteroids < CONSTANTS.NUM_ASTEROIDS){
            randX = this.rng(CONSTANTS.DIM_X);
            randY = this.rng(CONSTANTS.DIM_Y);
            asteroid = new Asteroid({pos: [randX, randY]});
            this.asteroids.push(asteroid);
        }
    }
    step(){ }


    move(){ }


    checkCollisions(){ }

    draw(ctx){
        ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
        for(let asteroid of this.asteroids){
            asteroid.drawObj(ctx);
        }

     }

}

export default Game