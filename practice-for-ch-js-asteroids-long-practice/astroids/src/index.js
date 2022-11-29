import _ from 'lodash';
import GameView from './game_view';
import Game from './game';
import MovingObject from './moving_object';
import Asteroid from './asteroid'

let canvas = document.getElementById('game-canvas');
let ctx = canvas.getContext("2d")

//let game = new Game(ctx);
const obj = { pos: [100, 100], vel:[1,1], radius: 20, color: "green" }

let game = new Game(ctx);
game.draw(ctx)
//let mo = new MovingObject(obj);
//let asteroid = new Asteroid();
//asteroid.draw(ctx);
//mo.draw(ctx)


