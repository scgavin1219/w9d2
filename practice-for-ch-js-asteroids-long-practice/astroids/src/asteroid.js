import MovingObject from "./moving_object"

const CONSTANTS= {
    VELOCITY: [10,10],
    COLOR: 'red',
    RADIUS: 20
}


class Asteroid extends MovingObject{
    constructor(givenPos){
        super({pos: givenPos, velocity: CONSTANTS.VELOCITY,
             color: CONSTANTS.COLOR, 
             radius: CONSTANTS.RADIUS})
            
    }
}

export default Asteroid;

