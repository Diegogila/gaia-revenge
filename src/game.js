import Player from "./components/player.js";
import Map from "./components/map.js";

const canva = document.querySelector('#game');
const game = canva.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){
    let canvasSize;
    if (window.innerWidth > window.innerHeight) {
        canvasSize = window.innerWidth * 0.5;
    } else {
        canvasSize = window.innerWidth * 0.75;
    }


    canva.setAttribute('width',canvasSize);
    canva.setAttribute('height', canvasSize);
    
    const elementSize = canvasSize/36;
    game.font = `${elementSize}px Verdana`;
    game.textAlign = 'end';


    const player = new Player();
    const map = new Map(player, elementSize);
    
    map.mapBuild();
    map.render(game);


    window.addEventListener("keydown", function(event) {
        game.clearRect(0,0,canvasSize,canvasSize);
        player.move(map,event.key);
        map.render(game);
      });


}

