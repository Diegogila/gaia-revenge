class Player{
    constructor(){
        this.y;
        this.x;
    }

    move(map, eventKey){
        const direction ={x:0, y:0};
        let colisionObj;
        switch (eventKey) {
            case "w":
                direction.y = -1;
                break;
            case "s":
                direction.y = 1;
                break;
            case "d":
                direction.x = 1;
                break;
            case "a":
                direction.x = -1;
                break;                                            
            default:
                break;
        }
        colisionObj = map.mapCols[this.y+direction.y][this.x+direction.x];

        if (colisionObj != 'X') {
            console.log(colisionObj);
            
            map.mapCols[this.y][this.x] = colisionObj;
            this.y = this.y + direction.y;
            this.x = this.x + direction.x;
            map.mapCols[this.y][this.x] = 'I';
        }

    }
}

export default Player;