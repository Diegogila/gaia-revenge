import Player from "./components/player.js";
import Map from "./components/map.js";

const canva = document.querySelector('#game');
const game = canva.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){
    const canvasSice
    const player = new Player();
    const map = new Map(player);
}

